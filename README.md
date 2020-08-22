# university-covid19-tracking

Authors: Max Grossman & Sinath Neang

This repo aims to aggregate, normalize, and visualize surveillance and
symptomatic testing data from a variety of USA universities that have continued
with in-person instruction for the Fall 2020 semester. These universities have
generally relied on different forms of COVID-19 testing to ensure the health and
safety of their student populations, so it is interesting to observe and record
how testing ramps up through the fall semester.

- data/UniversityCovidData.xlsx is the initial .xlsx that we manually aggregate
  data in to from a variety of online university COVID-19 dashboards. The
  dashboards used are listed in the spreadsheet.
- data/positives.csv and data/testing.csv contain normalized datasets generated
  from exporting UniversityCovidData.xlsx to a CSV and passing it through
  processing/normalize_university_covid.py.

### TODOs

- Use Google Charts and Github hosting to host various visualizations of
  testing.csv and positive.csv.
