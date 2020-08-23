# University COVID-19 Surveillance Tracker

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
- Include metadata on actions taken at universities at different dates (e.g.
  partial closes, send students home, etc).
- Include metadata on enrollments of universities, to support plots normalized
  by student body size.

### Deploying

After updates to the code or data, deploying a new version of the site is done
by running:

    git subtree push --prefix web origin gh-pages

### License

Copyright 2020 Max Grossman and Sinath Neang

Permission is hereby granted, free of charge, to any person obtaining a copy of this software, data, and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
