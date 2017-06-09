const states = [
  {text: 'Alabama',
   single_tax_brackets: {
       0: 0.02,
      500: 0.04,
      3000: 0.05
  },
  married_tax_brackets: {
    0: 0.02,
    1000: 0.04,
    6000: 0.05
  }
  },
  {text: 'Alaska',
   single_tax_brackets: {
       0: 0
   },
   married_tax_brackets: {
     0: 0
   }
  },
  {text: 'Arizona',
   single_tax_brackets:  {
       0: 0.0259,
       10179: 0.0288,
       25445: 0.0336,
       50980: 0.0424,
       152778: 0.0454
     },
     married_tax_brackets: {
       0: 0.0259,
       20357: 0.0288,
       50890: 0.0336,
       101779: 0.0424,
       305336: 0.0454
     }
  },
  {text: 'Arkansas',
   single_tax_brackets: {
      0: 0.009,
      4299: 0.025,
      8499: 0.035,
      12799: 0.045,
      21299: 0.060,
      35099: 0.069
    },
    married_tax_brackets: {
      0: 0.009,
      4299: 0.025,
      8499: 0.035,
      12799: 0.045,
      21299: 0.060,
      35099: 0.069
    }
  },
  {text: 'California',
   single_tax_brackets: {
       0: 0.01,
       8015: 0.02,
       19001: 0.03,
       29989: 0.04,
       41629: 0.08,
       52612: 0.093,
       268750: 0.103,
       322499: 0.113,
       537498: 0.123,
       1000000: 0.133
     },
     married_tax_brackets: {
       0: 0.01,
       16030: 0.02,
       38002: 0.004,
       59978: 0.06,
       83258: 0.08,
       105224: 0.093,
       537500: 0.103,
       644998: 0.0113,
       1074996: 0.133
     }
  },
  {text: 'Colorado',
   single_tax_brackets: {
       0: 0.0463
     },
     married_tax_brackets: {
       0: 0.0463
     }
  },
  {text: 'Connecticut',
   single_tax_brackets: {
      0: 0.03,
      10000: 0.05,
      50000: 0.055,
      100000: 0.06,
      200000: 0.065,
      250000: 0.069,
      500000: 0.0699
    },
    married_tax_brackets: {
      0: 0.03,
      20000: 0.05,
      100000: 0.055,
      200000: 0.06,
      400000: 0.065,
      500000: 0.069,
      1000000: 0.0699
    }
  },
  {text: 'Delaware',
  single_tax_brackets: {
    2000: 0.022,
    5000: 0.039,
    10000: 0.048,
    20000: 0.052,
    25000: 0.0555,
    60000: 0.066
  },
  married_tax_brackets: {
    2000: 0.022,
    5000: 0.039,
    10000: 0.048,
    20000: 0.052,
    25000: 0.0555,
    60000: 0.066
  }
  },
  {text: 'D.C',
   single_tax_brackets: {
     0: 0.04,
     10000: 0.06,
     40000: 0.065,
     60000: 0.085,
     350000: 0.0875,
     1000000: 0.0895
   },
   married_tax_brackets: {
     0: 0.04,
     10000: 0.06,
     40000: 0.065,
     60000: 0.085,
     350000: 0.0875,
     1000000: 0.0895
   }
 },
  {text: 'Florida',
   single_tax_brackets: {
     0: 0
   },
   married_tax_brackets: {
     0: 0
   }
  },
  {text: 'Georgia',
   single_tax_brackets: {
     0: 0.01,
     750: 0.02,
     2250: 0.03,
     3750: 0.04,
     5250: 0.05,
     7000: 0.06
   },
   married_tax_brackets: {
     0: 0.01,
     1000: 0.02,
     3000: 0.03,
     5000: 0.04,
     7000: 0.05,
     10000: 0.06
   }
  },
  {text: 'Hawaii',
   single_tax_brackets: {
     0: 0.014,
     2400: 0.032,
     4800: 0.055,
     9600: 0.064,
     14400: 0.068,
     19200: 0.072,
     24000: 0.076,
     36000: 0.079,
     48000: 0.0825
   },
   married_tax_brackets: {
     0: 0.014,
     4800: 0.032,
     9600: 0.055,
     19200: 0.064,
     28800: 0.068,
     38400: 0.072,
     48000: 0.076,
     72000: 0.079,
     96000: 0.0825
   }
  },
  {text: 'Idaho',
   single_tax_brackets: {
     0: 0.016,
     1454: 0.036,
     2908: 0.041,
     4362: 0.051,
     5816: 0.061,
     7270: 0.071,
     10905: 0.074
   },
   married_tax_brackets: {
     0: 0.016,
     2908: 0.036,
     5816: 0.041,
     8724: 0.051,
     11632: 0.061,
     14540: 0.071,
     21810: 0.074
   }
  },
  {text: 'Illinois',
   single_tax_brackets: {
     0: 0.0375
   },
   married_tax_brackets: {
     0: 0.0375
   }
  },
  {text: 'Indiana',
   single_tax_brackets: {
     0: 0.0323
   },
   married_tax_brackets: {
     0: 0.0323
   }
  },
  {text: 'Iowa',
   single_tax_brackets: {
     0: 0.0036,
     1573: 0.0072,
     3146: 0.0243,
     6292: 0.045,
     14157: 0.0612,
     23595: 0.0648,
     31460: 0.068,
     47190: 0.0792,
     70785: 0.0898
   },
   married_tax_brackets: {
     0: 0.0036,
     1573: 0.0072,
     3146: 0.0243,
     6292: 0.045,
     14157: 0.0612,
     23595: 0.0648,
     31460: 0.068,
     47190: 0.0792,
     70785: 0.0898
   }
  },
  {text: 'Kansas',
   single_tax_brackets: {
     0: 0.027,
     15000: 0.046
   },
   married_tax_brackets: {
     0: 0.027,
     30000: 0.046
   }
  },
  {text: 'Kentucky',
   single_tax_brackets: {
     0: 0.02,
     3000: 0.03,
     4000: 0.04,
     5000: 0.05,
     8000: 0.058,
     75000: 0.06
   },
   married_tax_brackets: {
     0: 0.02,
     3000: 0.03,
     4000: 0.04,
     5000: 0.05,
     8000: 0.058,
     75000: 0.06
   }
  },
  {text: 'Louisiana',
   single_tax_brackets: {
     0: 0.02,
     12500: 0.04,
     50000: 0.06
   },
   married_tax_brackets: {
     0: 0.02,
     25000: 0.04,
     100000: 0.06
   }
  },
  {text: 'Maine',
   single_tax_brackets: {
     0: 0.058,
     21050: 0.0675,
     50000: 0.0715,
     200000: 0.1015
   },
   married_tax_brackets: {
     0: 0.058,
     42099: 0.0675,
     74999: 0.0715,
     200000: 0.1015
   }
  },
  {text: 'Maryland',
   single_tax_brackets: {
     0: 0.02,
     1000: 0.03,
     2000: 0.04,
     3000: 0.0475,
     100000: 0.05,
     125000: 0.0525,
     150000: 0.055,
     250000: 0.0575
   },
   married_tax_brackets: {
     0: 0.02,
     1000: 0.03,
     2000: 0.04,
     3000: 0.0475,
     150000: 0.05,
     175000: 0.0525,
     225000: 0.055,
     300000: 0.0575
   }
  },
  {text: 'Massachusetts',
   single_tax_brackets: {
     0: 0.51
   },
   married_tax_brackets: {
     0: 0.51
   }
  },
  {text: 'Michigan',
   single_tax_brackets: {
     0: 0.0425
   },
   married_tax_brackets: {
     0: 0.0425
   }
  },
  {text: 'Minnesota',
   single_tax_brackets: {
     0: 0.0535,
     25390: 0.0705,
     83400: 0.0785,
     156911: 0.0985

   },
   married_tax_brackets: {
     0: 0.0535,
     37110: 0.0705,
     147450: 0.0785,
     261510: 0.0985
   }
  },
  {text: 'Mississippi',
   single_tax_brackets: {
     0: 0.03,
     5000: 0.04,
     10000: 0.05
   },
   married_tax_brackets: {
     0: 0.03,
     5000: 0.04,
     10000: 0.05
   }
  },
  {text: 'Missouri',
   single_tax_brackets: {
     0: 0.015,
     1008: 0.02,
     2016: 0.025,
     3024: 0.03,
     4032: 0.035,
     5040: 0.04,
     6048: 0.045,
     7056: 0.05,
     8064: 0.055,
     9072: 0.06
   },
   married_tax_brackets: {
     0: 0.015,
     1008: 0.02,
     2016: 0.025,
     3024: 0.03,
     4032: 0.035,
     5040: 0.04,
     6048: 0.045,
     7056: 0.05,
     8064: 0.055,
     9072: 0.06
   }
  },
  {text: 'Montana',
   single_tax_brackets: {
     0: 0.01,
     2900: 0.02,
     5200: 0.03,
     7900: 0.04,
     10600: 0.05,
     13600: 0.06,
     17600: 0.069
   },
   married_tax_brackets: {
     0: 0.01,
     2900: 0.02,
     5200: 0.03,
     7900: 0.04,
     10600: 0.05,
     13600: 0.06,
     17600: 0.069
   }
  },
  {text: 'Nebraska',
   single_tax_brackets: {
     0: 0.0246,
     3090: 0.0351,
     18510: 0.0501,
     29830: 0.0684
   },
   married_tax_brackets: {
     0: 0.0246,
     6170: 0.0351,
     37030: 0.0501,
     59660: 0.0684
   }
  },
  {text: 'Nevada',
   single_tax_brackets: {
     0: 0
   },
   married_tax_brackets: {
     0: 0
   }
  },
  {text: 'New Hampshire',
   single_tax_brackets: {
     0: 0.05
   },
   married_tax_brackets: {
     0: 0.05
   }
  },
  {text: 'New Jersey',
   single_tax_brackets: {
     0: 0.014,
     20000: 0.0175,
     35000: 0.035,
     40000: 0.0553,
     75000: 0.0637,
     500000: 0.0897
   },
   married_tax_brackets: {
     0: 0.014,
     20000: 0.0175,
     50000: 0.0245,
     70000: 0.035,
     80000: 0.0553,
     150000: 0.0637,
     500000: 0.0897
   }
  },
  {text: 'New Mexico',
   single_tax_brackets: {
     0: 0.017,
     5500: 0.032,
     11000: 0.047,
     16000: 0.049
   },
   married_tax_brackets: {
     0: 0.017,
     8000: 0.032,
     16000: 0.047,
     24000: 0.049
   }
  },
  {text: 'New York',
   single_tax_brackets: {
     0: 0.04,
     8500: 0.045,
     11700: 0.0525,
     13900: 0.059,
     21400: 0.0645,
     80650: 0.0665,
     215400: 0.0685,
     1077550: 0.0882
   },
   married_tax_brackets: {
     0: 0.04,
     17150: 0.045,
     23600: 0.0525,
     27900: 0.059,
     43000: 0.0645,
     161550: 0.0665,
     323200: 0.0685,
     2155350: 0.0882
   }
  },
  {text: 'North Carolina',
   single_tax_brackets: {
     0: 0.055,
   },
   married_tax_brackets: {
     0: 0.055
   }
  },
  {text: 'North Dakota',
   single_tax_brackets: {
     0: 0.011,
     37950: 0.0204,
     91900: 0.0227,
     191650: 0.0264,
     416700: 0.0290
   },
   married_tax_brackets: {
     0: 0.011,
     63400: 0.0204,
     153100: 0.0227,
     233350: 0.0264,
     416700: 0.029
   }
  },
  {text: 'Ohio',
   single_tax_brackets: {
     0: 0.005,
     5250: 0.0099,
     10500: 0.0198,
     15800: 0.0248,
     21100: 0.0297,
     42100: 0.0347,
     84200: 0.0396,
     105300: 0.046,
     210600: 0.05
   },
   married_tax_brackets: {
     0: 0.005,
     5250: 0.0099,
     10500: 0.0198,
     15800: 0.0248,
     21100: 0.0297,
     42100: 0.0347,
     84200: 0.0396,
     105300: 0.046,
     210600: 0.05
   }
  },
  {text: 'Oklahoma',
   single_tax_brackets: {
     0: 0.005,
     1000: 0.01,
     2500: 0.02,
     3750: 0.03,
     4900: 0.04,
     7200: 0.05
   },
   married_tax_brackets: {
     0: 0.005,
     2000: 0.01,
     5000: 0.02,
     7500: 0.03,
     9800: 0.04,
     12200: 0.05
   }
  },
  {text: 'Oregon',
   single_tax_brackets: {
     0: 0.05,
     3350: 0.07,
     8450: 0.09,
     125000: 0.099
   },
   married_tax_brackets: {
     0: 0.05,
     6700: 0.07,
     16900: 0.09,
     250000: 0.099
   }
  },
  {text: 'Pennsylvania',
   single_tax_brackets: {
    0: 0.0307
  },
  married_tax_brackets: {
    0: 0.0307
  }
   },
  {text: 'Rhode Island',
   single_tax_brackets: {
     0: 0.0375,
     61300: 0.0475,
     139400: 0.0599
   },
   married_tax_brackets: {
     0: 0.0375,
     61300: 0.0475,
     139400: 0.0599
   }
  },
  {text: 'South Carolina',
   single_tax_brackets: {
     0: 0,
     2930: 0.03,
     5860: 0.04,
     8790: 0.05,
     11720: 0.06,
     14650: 0.07
   },
   married_tax_brackets: {
     0: 0,
     2930: 0.03,
     5860: 0.04,
     8790: 0.05,
     11720: 0.06,
     14650: 0.07
   }
  },
  {text: 'South Dakota',
   single_tax_brackets: {
     0: 0
   },
   married_tax_brackets: {
     0: 0
   }
  },
  {text: 'Tennessee',
   single_tax_brackets: {
     0: 0.05
   },
   married_tax_brackets: {
     0: 0.05
   }
  },
  {text: 'Texas',
   single_tax_brackets: {
     0: 0
   },
   married_tax_brackets: {
     0: 0
   }
   },
  {text: 'Utah',
   single_tax_brackets: {
     0: 0.05
   },
   married_tax_brackets: {
     0: 0.05
   }
  },
  {text: 'Vermont',
   single_tax_brackets: {
     0: 0.0355,
     37950: 0.068,
     91900: 0.078,
     191650: 0.088,
     416700: 0.0895
   },
   married_tax_brackets: {
     0: 0.0355,
     63350: 0.068,
     152100: 0.078,
     233350: 0.088,
     416700: 0.0895
   }
  },
  {text: 'Virginia',
   single_tax_brackets: {
     0: 0.02,
     3000: 0.03,
     5000: 0.05,
     17000: 0.0575
   },
   married_tax_brackets: {
     0: 0.02,
     3000: 0.03,
     5000: 0.05,
     17000: 0.0575
   }
  },
  {text: 'Washington',
   single_tax_brackets: {
     0: 0
   },
   married_tax_brackets: {
     0: 0
   }
  },
  {text: 'West Virginia',
   single_tax_brackets: {
     0: 0.03,
     10000: 0.04,
     25000: 0.045,
     40000: 0.06,
     60000: 0.065
   },
   married_tax_brackets: {
     0: 0.03,
     10000: 0.04,
     25000: 0.045,
     40000: 0.06,
     60000: 0.065
   }
  },
  {text: 'Wisconsin',
   single_tax_brackets: {
     0: 0.04,
     11230: 0.0584,
     22470: 0.0627,
     247350: 0.0765
   },
   married_tax_brackets: {
     0: 0.04,
     14890: 0.0584,
     29960: 0.0627,
     329810: 0.0765
   }
  },
  {text: 'Wyoming',
   single_tax_brackets: {
     0: 0
   },
   married_tax_brackets: {
     0: 0
   }
  },
];

// export default states;
module.exports = states;
