var raw_testing_data = [['Date', 'North Carolina State University', 'UNC Chapel Hill', 'University of Notre Dame', 'Penn State', 'Purdue', 'Duke', 'Umass Amherst', 'Syracuse University', 'UMD', 'University of Michigan', 'University of Texas Austin', 'Georgia Tech', 'Tufts University', 'George Mason University', 'Yale University', 'Rice University'],
    ['2020-07-26',null,117.0,null,null,null,null,null,null,null,5512.0,793.0,null,null,null,null,null],
    ['2020-07-27',null,139.57142857142858,null,null,null,null,null,null,null,5657.428571428572,804.1428571428571,null,null,null,null,null],
    ['2020-07-28',null,162.14285714285714,null,null,null,null,null,null,null,5802.857142857143,815.2857142857143,null,null,null,null,null],
    ['2020-07-29',null,184.71428571428572,null,null,null,null,null,null,null,5948.285714285714,826.4285714285714,null,null,null,null,null],
    ['2020-07-30',null,207.28571428571428,null,null,null,null,null,null,null,6093.714285714285,837.5714285714286,null,null,null,null,null],
    ['2020-07-31',null,229.85714285714286,null,null,null,null,null,null,null,6239.142857142857,848.7142857142857,null,null,null,null,null],
    ['2020-08-01',null,252.42857142857144,null,null,3,null,null,null,null,6384.571428571428,859.8571428571429,null,null,null,null,null],
    ['2020-08-02',null,275.0,null,null,20,null,null,null,null,6530.0,871.0,null,null,63.14285714,null,null],
    ['2020-08-03',null,325.57142857142856,3,null,47,null,null,null,null,6653.571428571428,901.0,null,null,126.2857143,null,340],
    ['2020-08-04',null,376.1428571428571,13,null,346,null,null,null,null,6777.142857142857,931.0,null,null,189.4285714,null,560],
    ['2020-08-05',null,426.7142857142857,20,null,401,null,null,null,null,6900.714285714285,961.0,null,null,252.5714286,null,830],
    ['2020-08-06',null,477.2857142857143,26,null,446,null,null,0.0,null,7024.285714285715,991.0,null,null,315.7142857,null,1140],
    ['2020-08-07',null,527.8571428571429,29,null,447,null,210,0.0,null,7147.857142857143,1021.0,null,null,378.85714289999993,null,1430],
    ['2020-08-08',null,578.4285714285714,39,null,447,null,219,0.0,null,7271.428571428572,1051.0,null,null,442.0,null,1430],
    ['2020-08-09',null,629.0,46,null,458,null,219,0.0,333,7395.0,1081.0,487.5,null,474.7142857,null,1430],
    ['2020-08-10',null,765.2857142857142,244,null,458,null,219,0.0,null,7515.857142857143,1112.7142857142858,975.0,null,507.42857139999995,null,1910],
    ['2020-08-11',null,901.5714285714286,262,null,561,null,438,0.0,null,7636.714285714285,1144.4285714285713,1462.5,null,540.1428571,10244,2410],
    ['2020-08-12',null,1037.857142857143,303,null,837,null,486,0.0,null,7757.571428571428,1176.142857142857,1950.0,null,572.8571429,null,2630],
    ['2020-08-13',null,1174.142857142857,345,236.0,951,null,732,0.0,null,7878.428571428572,1207.857142857143,2437.5,null,605.5714286,null,2860],
    ['2020-08-14',null,1310.4285714285713,468,247.85714285714286,1153,null,1310,0.0,null,7999.285714285715,1239.5714285714287,2925.0,null,638.2857142999999,null,3140],
    ['2020-08-15',null,1446.7142857142858,479,259.7142857142857,1286,6370.0,1310,0.0,null,8120.142857142857,1271.2857142857142,3375.0,null,671.0,null,3550],
    ['2020-08-16',null,1583.0,509,271.57142857142856,1384,7208.0,1310,0.0,null,8241.0,1303.0,4050.0,null,689.1428571,null,3960],
    ['2020-08-17',null,1790.2857142857142,929,283.42857142857144,1595,8046.0,1310,0.0,null,8242.57142857143,null,4950.0,null,707.2857142999999,null,4250],
    ['2020-08-18',1566,1997.5714285714284,1284,295.2857142857143,1808,8884.0,1955,0.0,null,8244.142857142857,null,5850.0,null,725.4285714,null,4740],
    ['2020-08-19',1705,2204.857142857143,1777,307.1428571428571,2175,9722.0,2537,0.0,1142,8245.714285714286,null,6525.0,null,743.5714286,null,5220],
    ['2020-08-20',2211,2412.142857142857,2033,319.0,2432,10560.0,3368,0.0,2550,8247.285714285714,null,7650.0,null,761.7142857000001,null,5700],
    ['2020-08-21',2510,2619.4285714285716,2235,null,2779,11398.0,4384,0.0,3402,8248.857142857143,null,9450.0,null,779.8571429,null,6660],
    ['2020-08-22',2510,2826.714285714286,2339,null,2947,null,5386,0.0,4165,8250.42857142857,null,10800.0,null,798.0,null,7070],
    ['2020-08-23',3031,3034.0,2698,null,null,null,6053,0.0,4683,8252.0,null,11025.0,null,null,null,7230],
    ['2020-08-24',null,null,null,null,null,null,null,0.0,4689,null,null,null,5333,null,null,null],
    ['2020-08-25',null,null,null,null,null,null,null,null,null,null,null,null,null,null,13623,null],
    ];