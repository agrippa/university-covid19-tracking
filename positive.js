var raw_positive_data = [['Date', 'Duke', 'Syracuse University', 'Florida State University', 'Tufts University', 'Umass Amherst', 'Purdue', 'University of Texas Austin', 'University of Notre Dame', 'Rice University', 'North Carolina State University', 'Georgia Tech', 'UMD', 'University of Michigan', 'Penn State', 'George Mason University', 'UNC Chapel Hill'],
    ['2020-08-10',null,2.4,null,null,0,4,21.0,9,2,null,5.333333333,null,1.22342857143,null,3,59.7142857143],
    ['2020-08-11',null,3.0,null,null,1,4,21.0,14,2,18,8.0,null,1.22485714286,null,3,83.4285714286],
    ['2020-08-12',null,3.28571428571,null,null,1,4,21.0,23,3,19,10.66666667,null,1.22628571429,null,3,107.142857143],
    ['2020-08-13',null,3.57142857143,null,null,1,6,21.0,37,5,20,13.33333333,null,1.22771428571,0.0,4,130.857142857],
    ['2020-08-14',null,3.85714285714,null,null,1,7,21.0,51,6,20,16.0,null,1.22914285714,1.0,4,154.571428571],
    ['2020-08-15',15.0,4.14285714286,null,null,1,11,21.0,55,8,22,17.0,null,1.23057142857,2.0,4,178.285714286],
    ['2020-08-16',18.6666666667,4.42857142857,null,null,1,13,21.0,71,9,23,19.0,null,1.232,3.0,4,202.0],
    ['2020-08-17',22.3333333333,4.71428571429,null,null,2,23,21.0,169,11,23,21.0,null,1.23328571429,4.0,5,248.285714286],
    ['2020-08-18',26.0,5.0,null,null,2,23,21.0,249,11,28,24.0,null,1.23457142857,5.0,5,294.571428571],
    ['2020-08-19',29.6666666667,6.66666666667,null,null,2,27,21.0,325,11,36,28.0,3,1.23585714286,6.0,5,340.857142857],
    ['2020-08-20',33.3333333333,8.33333333333,null,null,5,36,21.0,348,12,89,58.0,5,1.23714285714,7.0,5,387.142857143],
    ['2020-08-21',37.0,10.0,null,null,5,50,21.0,372,14,118,88.0,5,1.23842857143,18.4285714286,5,433.428571429],
    ['2020-08-22',38.2857142857,10.6666666667,null,null,6,55,21.0,391,14,206,127.0,6,1.23971428571,29.8571428571,6,479.714285714],
    ['2020-08-23',39.5714285714,11.3333333333,68,null,7,66,21.1428571429,421,14,237,135.0,7,1.241,41.2857142857,6,526.0],
    ['2020-08-24',40.8571428571,12.0,null,3.0,8,82,21.2857142857,451,14,279,135.0,7,1.241,52.7142857143,6,535.285714286],
    ['2020-08-25',42.1428571429,15.5,null,3.0,8,89,21.4285714286,470,14,302,217.0,8,1.241,64.1428571429,7,544.571428571],
    ['2020-08-26',43.4285714286,19.0,null,4.0,9,97,21.5714285714,488,14,434,282.0,13,1.241,75.5714285714,7,553.857142857],
    ['2020-08-27',44.7142857143,19.5,null,5.0,9,107,21.7142857143,503,14,452,327.0,16,1.241,87.0,7,563.142857143],
    ['2020-08-28',46.0,20.0,null,6.0,9,134,21.8571428571,520,14,470,359.0,17,1.241,103.142857143,7,572.428571429],
    ['2020-08-29',46.8571428571,21.3333333333,null,7.0,9,137,22.0,530,14,478,395.0,21,1.241,119.285714286,7,581.714285714],
    ['2020-08-30',47.7142857143,22.6666666667,129,8.5,9,140,28.8571428571,533,14,483,395.0,21,1.241,135.428571429,7,591.0],
    ['2020-08-31',48.5714285714,24.0,null,10.0,9,174,35.7142857143,539,14,492,395.0,25,1.24571428571,151.571428571,7,593.285714286],
    ['2020-09-01',49.4285714286,24.5,null,11.5,9,201,42.5714285714,548,16,502,454.0,25,1.25042857143,167.714285714,8,595.571428571],
    ['2020-09-02',50.2857142857,25.0,null,13.0,10,219,49.4285714286,551,16,511,477.0,34,1.25514285714,183.857142857,8,597.857142857],
    ['2020-09-03',51.1428571429,25.0,null,14.5,11,267,56.2857142857,553,17,513,499.0,90,1.25985714286,200.0,8,600.142857143],
    ['2020-09-04',52.0,25.0,853,16.0,13,279,63.1428571429,557,17,517,517.0,99,1.26457142857,207.333333333,9,602.428571429],
    ['2020-09-05',null,25.3333333333,null,17.5,13,304,70.0,558,17,517,525.0,106,1.26928571429,214.666666667,9,604.714285714],
    ['2020-09-06',null,25.6666666667,null,19.0,13,316,null,565,17,null,525.0,134,1.274,222.0,null,607.0],
    ['2020-09-07',null,26.0,null,null,13,319,null,566,17,null,525.0,134,null,null,null,null],
    ['2020-09-08',null,27.0,null,null,null,null,null,573,null,null,null,134,null,null,null,null],
    ['2020-09-09',null,28.0,null,null,null,null,null,null,null,null,null,null,null,null,null,null],
    ];
