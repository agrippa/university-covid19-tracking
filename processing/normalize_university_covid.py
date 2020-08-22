import pandas as pd
import os
import sys

if len(sys.argv) != 4:
    sys.stderr.write('usage: python normalize_university_data.py <CSV> <path/to/data> <path/to/web/>\n')
    sys.exit(1)

fp = open(sys.argv[1], 'r')

# Skip past header containing data sources
line = fp.readline()
while len(line) > 0:
    record = line.strip().split(',')
    if record[0] == '':
        break
    line = fp.readline()

min_date = None
max_date = None
universities = {}
while True:
    records = []
    line = fp.readline() # Should be the first line of a university block
    while len(line) > 0:
        record = line.strip().split(',')
        if record[0] == '':
            break
        records.append(record)
        line = fp.readline()

    university = records[0][0]
    dates = records[0][1:]
    dates = [pd.to_datetime(d) for d in dates]
    series = {}
    for record in records[1:]:
        series_name = record[0]
        series_values = record[1:]
        s = pd.Series(series_values, index=dates, name=series_name)
        s = s.loc[~s.index.isnull()]
        s = pd.to_numeric(s)
        series[series_name] = s

        if min_date is None or min_date > s.index.min():
            min_date = s.index.min()
        if max_date is None or max_date < s.index.max():
            max_date = s.index.max()

    if 'Cumulative # Tests' not in series:
        # Don't have daily data points for this series yet, need to get that.
        assert 'Cumulative # Tests (Weekly)' in series
        assert 'Cumulative # Positives (Weekly)' in series
        weekly_tests = series['Cumulative # Tests (Weekly)']
        weekly_positives = series['Cumulative # Positives (Weekly)']
        daily_tests = weekly_tests.resample('1D').interpolate()
        daily_positives = weekly_positives.resample('1D').interpolate()
        series['Cumulative # Tests'] = daily_tests
        series['Cumulative # Positives'] = daily_positives

    universities[university] = series
    if len(line) == 0:
        break

university_names = [u for u in universities.keys()]
print(universities.keys())
print(min_date)
print(max_date)

testing_df = pd.DataFrame(None, index=pd.date_range(start=min_date, end=max_date), columns=university_names)
positive_df = pd.DataFrame(None, index=pd.date_range(start=min_date, end=max_date), columns=university_names)
for u in university_names:
    daily_tests = universities[u]['Cumulative # Tests']
    daily_positives = universities[u]['Cumulative # Positives']
    testing_df.loc[daily_tests.index, u] = daily_tests.values
    positive_df.loc[daily_positives.index, u] = daily_positives.values

testing_df.to_csv(os.path.join(sys.argv[2], 'testing.csv'))
positive_df.to_csv(os.path.join(sys.argv[2], 'positives.csv'))

testing_fp = open(os.path.join(sys.argv[3], 'testing.js'), 'w')
column_names = ', '.join(["'" + c + "'" for c in testing_df.columns.values])
testing_fp.write("var raw_testing_data = [['Date', " + column_names + "],\n")
for date, vals in testing_df.iterrows():
    testing_fp.write("    ['" + date.strftime('%Y-%m-%d') + "'," + ",".join(['null' if str(v) == 'nan' else str(v) for v in vals.values]) + '],\n')
testing_fp.write("    ];\n")
testing_fp.close()

positive_fp = open(os.path.join(sys.argv[3], 'positive.js'), 'w')
column_names = ', '.join(["'" + c + "'" for c in positive_df.columns.values])
positive_fp.write("var raw_positive_data = [['Date', " + column_names + "],\n")
for date, vals in positive_df.iterrows():
    positive_fp.write("    ['" + date.strftime('%Y-%m-%d') + "'," + ",".join(['null' if str(v) == 'nan' else str(v) for v in vals.values]) + '],\n')
positive_fp.write("    ];\n")
positive_fp.close()

