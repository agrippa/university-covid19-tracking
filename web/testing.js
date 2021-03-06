var raw_testing_data = [['Date', 'North Carolina State University', 'UNC Chapel Hill', 'University of Notre Dame', 'Penn State', 'Purdue', 'Duke', 'Umass Amherst', 'Syracuse University', 'UMD', 'University of Michigan', 'University of Texas Austin', 'Georgia Tech', 'Tufts University', 'George Mason University', 'Rice University', 'Florida State University'],
    ['2020-08-10',null,763.8571428571429,244,null,458,null,345,0.0,null,6654.714285714285,931.2857142857143,975.0,null,518.2857143,1910,null],
    ['2020-08-11',1268,898.7142857142858,262,null,561,null,428,0.0,null,6778.428571428572,961.4285714285714,1462.5,null,556.4285714,2410,null],
    ['2020-08-12',1478,1033.5714285714284,303,null,837,null,662,0.0,null,6902.142857142857,991.5714285714286,1950.0,null,594.5714286,2630,null],
    ['2020-08-13',1512,1168.4285714285716,345,233.0,951,null,1235,0.0,null,7025.857142857143,1021.7142857142858,2437.5,null,632.7142857000001,2860,null],
    ['2020-08-14',1628,1303.2857142857142,468,273.14285714285717,1159,null,1245,0.0,null,7149.571428571428,1051.857142857143,2925.0,null,670.8571429,3140,null],
    ['2020-08-15',1632,1438.142857142857,479,313.2857142857143,1293,6370.0,1245,0.0,null,7273.285714285714,1082.0,3375.0,null,709.0,3550,null],
    ['2020-08-16',1632,1573.0,509,353.42857142857144,1392,7208.0,1245,0.0,null,7397.0,1113.7142857142858,4050.0,null,721.1428571,3960,null],
    ['2020-08-17',1719,1805.4285714285713,929,393.57142857142856,1620,8046.0,1904,0.0,null,7521.285714285715,1145.4285714285713,4950.0,null,733.2857142999999,4250,null],
    ['2020-08-18',1566,2037.857142857143,1284,433.7142857142857,1853,8884.0,2501,0.0,null,7645.571428571428,1177.142857142857,5850.0,null,745.4285714,4740,null],
    ['2020-08-19',1705,2270.285714285714,1777,473.8571428571429,2251,9722.0,3312,0.0,1144,7769.857142857143,1208.857142857143,6525.0,null,757.5714286,5220,null],
    ['2020-08-20',2211,2502.714285714286,2033,514.0,2521,10560.0,4341,0.0,2554,7894.142857142857,1240.5714285714287,7650.0,null,769.7142857000001,5700,null],
    ['2020-08-21',2510,2735.142857142857,2235,1088.2857142857142,2898,11398.0,5354,0.0,3406,8018.428571428572,1272.2857142857142,9450.0,null,781.8571429,6660,null],
    ['2020-08-22',2510,2967.5714285714284,2339,1662.5714285714287,3138,12204.0,6025,0.0,4170,8142.714285714286,1304.0,10800.0,null,794.0,7070,null],
    ['2020-08-23',3031,3200.0,2698,2236.857142857143,3397,13010.0,6876,0.0,4689,8267.0,1482.142857142857,11025.0,null,871.7142857000001,7230,6630],
    ['2020-08-24',3350,3270.1428571428573,3381,2811.1428571428573,3986,13816.0,8336,0.0,4695,8487.57142857143,1660.2857142857142,11025.0,5333.0,949.4285714,8160,null],
    ['2020-08-25',3918,3340.285714285714,3795,3385.4285714285716,4234,14622.0,10114,0.0,4965,8708.142857142857,1838.4285714285716,13050.0,7298.0,1027.142857,8250,null],
    ['2020-08-26',5496,3410.4285714285716,4204,3959.7142857142862,4849,15428.0,11465,0.0,6284,8928.714285714286,2016.5714285714284,14850.0,8208.25,1104.857143,8300,null],
    ['2020-08-27',5975,3480.5714285714284,4836,4534.0,5037,16234.0,12970,0.0,7140,9149.285714285714,2194.714285714286,17325.0,9118.5,1182.5714289999999,8300,null],
    ['2020-08-28',6425,3550.714285714286,5353,5024.714285714285,5682,17040.0,15026,0.0,7386,9369.857142857143,2372.857142857143,19350.0,10028.75,1260.285714,8990,null],
    ['2020-08-29',6559,3620.8571428571427,5733,5515.428571428572,5851,18017.14285714286,15037,0.0,9152,9590.428571428572,2551.0,21105.0,10939.0,1338.0,8990,null],
    ['2020-08-30',6677,3691.0,6102,6006.142857142857,5988,18994.285714285714,15040,0.0,11659,9811.0,2826.0,21105.0,12229.25,1399.0,8990,8224],
    ['2020-08-31',6879,3679.714285714286,6663,6496.857142857143,7228,19971.428571428572,17203,0.0,11959,9953.285714285714,3101.0,21105.0,13519.5,1460.0,9795,null],
    ['2020-09-01',7225,3668.4285714285716,7092,6987.571428571428,8023,20948.571428571428,19388,0.0,11959,10095.57142857143,3376.0,23580.0,14809.75,1521.0,10555,null],
    ['2020-09-02',7430,3657.1428571428573,7403,7478.285714285714,9946,21925.714285714286,20687,0.0,13218,10237.857142857143,3651.0,25605.0,16100.0,1582.0,11405,null],
    ['2020-09-03',7604,3645.8571428571427,7904,7969.0,10870,22902.857142857145,22738,0.0,13479,10380.142857142857,3926.0,27630.0,17390.25,1643.0,12265,null],
    ['2020-09-04',7756,3634.5714285714284,8216,8197.666666666666,11512,23880.0,25105,0.0,14916,10522.42857142857,4201.0,29430.0,18680.5,1704.0,13015,11653],
    ['2020-09-05',7785,3623.285714285714,8416,8426.333333333334,11790,null,25109,0.0,17290,10664.714285714286,4476.0,30330.0,19970.75,1765.0,13015,null],
    ['2020-09-06',null,3612.0,8601,8655.0,12008,null,25111,0.0,18574,10807.0,null,30330.0,21261.0,null,13015,null],
    ['2020-09-07',null,null,8849,null,12196,null,27194,0.0,18593,null,null,30330.0,null,null,13705,null],
    ['2020-09-08',null,null,9012,null,null,null,null,0.0,19049,null,null,null,null,null,null,null],
    ['2020-09-09',null,null,null,null,null,null,null,0.0,null,null,null,null,null,null,null,null],
    ];
