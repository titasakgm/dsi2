// a set of points in map XY and Lon/Lat that are supposed to correspond between
// forward and invers transforms
Proj4js.defs["EPSG:54003"] = "+proj=mill +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +R_A +ellps=WGS84 +datum=WGS84 +units=m +no_defs";
Proj4js.defs["EPSG:54029"] = "+proj=vandg +lon_0=0 +x_0=0 +y_0=0 +R_A +ellps=WGS84 +datum=WGS84 +units=m +no_defs";
Proj4js.defs["EPSG:2303X"] = "+proj=utm +zone=30 +ellps=intl +units=m +towgs84=-157.89,-17.16,-78.41,2.118,2.697,-1.434,-1.1097046576093785 +no_defs ";
Proj4js.defs["EPSG:3035"] = "+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs";

Proj4js.testPoints = [
  {code: 'EPSG:3035',
    xy: [4388138.60, 3321736.46],
    ll: [11.0, 53.0]
  },
  {code: 'EPSG:23030',
    xy: [168035.13,4199884.83,-216.62],
    ll: [-6.77432123185356, 37.88456231505968]   
  }, 
  {code: 'EPSG:29100',
    xy: [5110899.06,10552971.81,-22.99],
    ll: [-53.0, 5.0,0.0]   
  },
  {code: 'EPSG:27700',
    xy: [343733.14, 612144.53, -51.89],
    ll: [-2.89, 55.4, 0]   
  },
  {code: 'EPSG:27492',
    xy: [25260.493584, -9579.245052],
    ll: [-7.84, 39.58]
  },
  {code: 'EPSG:3411',
    xy: [1070076.44,-4635010.27,-136.63], 
    ll: [-32, 48, 0]
  },
  {code: 'EPSG:2403',
    xy: [27500000.00,	4198690.08, -109.02],
    ll: [81, 37.92, 0] 
  },
  {code: 'EPSG:21781',
    xy: [660389.52, 185731.63, -49.23], 
    ll: [8.23, 46.82, 0]
  },
  {code: 'EPSG:27563',
    xy: [653704.865208, 176887.660037],
    ll: [3.005, 43.89]
  },
  {code: 'EPSG:54029',
    xy: [1094702.50,6496789.74,-6468.21],
    ll: [11.0, 53.0,0.0]
  },
  {code: 'EPSG:54003',
    xy: [1223145.57,6491218.13,-6468.21],
    ll: [11.0, 53.0]
  },
  {code: 'EPSG:3573',
    xy: [2923052.02009, 1054885.46559],
    ll: [9.84375, 61.875]
  }/*,
  {code: 'EPSG:54009',
    xy: [-10617602.79013849,4108337.84708608,0.00000000 ], 
    ll: [-119,34,0]
  },
  
  {code: 'EPSG:31466',
    xy: [2547685.01212,5699155.7345],
    ll: [6.685,51.425]
  },
  {code: 'EPSG:54008',
    xy: [738509.49,5874620.38],
    ll: [11.0, 53.0]
  },
  {code: 'EPSG:2057',
    xy: [-11608322.26,18282612.23,-281.67],
    ll: [-53.0, 5.0,0.0]
  },
  {code: 'EPSG:54009',
    xy: [804759.21,6164983.82,-13598.03],
    ll: [11.0, 53.0, 0.0]
  },
  {code: 'EPSG:3035',
    xy: [4388138.60, 3321736.46],
    ll: [11.0, 53.0]
  },
  {code: 'EPSG:102026',
    xy: [3000242.40, 5092492.64],
    ll: [40.0, 40.0]
  },
  {code: 'EPSG:54032',
    xy: [-4024426.19, 6432026.98],
    ll: [-127.0, 52.11]
  },
  {code: 'EPSG:3153',
    xy: [931625.91, 789252.65],
    ll: [-127.0, 52.11]
  },
  {code: 'EPSG:32615',
    xy: [500000, 4649776.22482],
    ll: [-93, 42]
  },
  {code: 'EPSG:26916',
    xy: [5110899.06,10552971.81,-22.99],
    ll: [-86.6056, 34.5790,0.0]   
  },
  {code: 'EPSG:32612',
    xy: [383357.429537, 6684599.06392],
    ll: [-113.109375, 60.28125]
  },
  {code: 'EPSG:3031',
    xy: [-992481.633786, 628482.06328],
    ll: [-57.65625, -79.21875]
  },
  {code: 'EPSG:31285',
    xy: [450055.70, 5262356.33],
    ll: [13.33333333333, 47.5]
  },
  {code: 'EPSG:2736',
    xy: [603933.40,	7677505.64],
    ll: [34.0, -21.0]
  },
  {code: 'EPSG:42304',
    xy: [-358185.267976, -40271.099023],
    ll: [-99.84375, 48.515625]
  },
  {code: 'google',
    xy: [-8531595.34908, 6432756.94421],
    ll: [-76.640625, 49.921875]
  },
  {code: 'EPSG:42304',
    xy: [-358185.267976, -40271.099023],
    ll: [-99.84375, 48.515625]
  },
  {code: 'EPSG:28992',
    xy: [148312.15,	457804.79, 698.48],
    ll: [5.29, 52.11]
  }*/
];