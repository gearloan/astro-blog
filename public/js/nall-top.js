var jsonQueryDB = `
{
"figures": {
"1.1": {
  "graphType": "list",
  "graphTitle": "General Aviation Accidents in [[YEAR]]",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "overall",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N"
  },
  "fields": [
    {
      "fieldName": "Number of accidents",
      "parameter": "accidents",
      "unit": ""
    },
    {
      "fieldName": "Number of aircraft",
      "parameter": "aircraft",
      "unit": ""
    },
    {
      "fieldName": "Number of fatal accidents",
      "parameter": "fatalAccidents",
      "unit": ""
    },
    {
      "fieldName": "Lethality (%)",
      "parameter": "lethality",
      "unit": ""
    },
    {
      "fieldName": "Fatalities",
      "parameter": "fatalities",
      "unit": ""
    }
  ],
  "footnotes": [
    "*Each aircraft involved in a collision is counted separately."
  ],
  "figureNumber": "1.1"
},
"1.2": {
  "figureNumber": "1.2",
  "graphType": "area",
  "graphTitle": "General Aviation Accident Trends [[YEAR-RANGE]]",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "endYear": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Total"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.3": {
  "figureNumber": "1.3",
  "graphType": "area",
  "graphTitle": "General Aviation Accident Rates [[YEAR-RANGE]]",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "endYear": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Total"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "accidentRate",
        "label": "Total Accident Rate (per 100,000 hours)"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidentRate",
        "label": "Fatal Accident Rate (per 100,000 hours)"
      }
    }
  ]
},
"1.4": {
  "figureNumber": "1.4",
  "graphType": "chart",
  "graphTitle": "General Aviation Accidents in [[YEAR]]",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "majorCauses",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "majorCause"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ]
  ]
},
"1.5": {
  "figureNumber": "1.5",
  "graphType": "chart",
  "graphTitle": "Aircraft class",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"1.6": {
  "figureNumber": "1.6",
  "graphType": "chart",
  "graphTitle": "Type of operation",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "typeOperation",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "typeOperation"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatalities",
        "parameter": "fatalities"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalities",
        "unit": "%"
      }
    ]
  ]
},
"1.7": {
  "figureNumber": "1.7",
  "graphType": "chart",
  "graphTitle": "Flight Conditions",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "flightConditions",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "conditions"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatalities",
        "parameter": "fatalities"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalities",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*Night fields include dusk."
  ]
},
"1.8": {
  "figureNumber": "1.8",
  "graphType": "chart",
  "graphTitle": "Pilots involved",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "pilotsInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "certLevel"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*CFI on board and IFR pilot on board include single-pilot flights."
  ]
},
"1.9": {
  "figureNumber": "1.9",
  "graphType": "area",
  "graphTitle": "Pilot-related Accident trend",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "PilotRelated"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.10": {
  "figureNumber": "1.10",
  "graphType": "area",
  "graphTitle": "Pilot-related Accident Rates",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "endYear": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "PilotRelated"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "accidentRate",
        "label": "Total Accident Rate (per 100,000 hours)"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidentRate",
        "label": "Fatal Accident Rate (per 100,000 hours)"
      }
    }
  ]
},
"1.11": {
  "figureNumber": "1.11",
  "graphType": "bar",
  "graphTitle": "Major types of accidents",
  "altTitles": [
    {
      "2021": {
        "graphTitle": "Major types of accidents"
      }
    }
  ],
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "PilotRelated"
  },
  "layers": [
    {
      "x": {
        "parameter": "subType",
        "label": "Accident Type"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.1.1": {
  "figureNumber": "1.1.1",
  "graphType": "area",
  "graphTitle": "Landing Accident Trend",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "endYear": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Landing"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.1.2": {
  "figureNumber": "1.1.2",
  "graphType": "bar",
  "graphTitle": "Types of Landing Accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Landing"
  },
  "layers": [
    {
      "x": {
        "parameter": "subType",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.1.3": {
  "figureNumber": "1.1.3",
  "graphType": "chart",
  "graphTitle": "Aircraft involved in landing accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Landing"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"1.1.4": {
  "figureNumber": "1.1.4",
  "graphType": "chart",
  "graphTitle": "Flight conditions of landing accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "flightConditions",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Landing"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "conditions"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*Night fields include dusk"
  ]
},
"1.1.5": {
  "figureNumber": "1.1.5",
  "graphType": "chart",
  "graphTitle": "Pilots involved in landing accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "pilotsInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Landing"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "certLevel"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*'CFI on board' and 'IFR pilot on board' include single-pilot flights."
  ]
},
"1.2.1": {
  "figureNumber": "1.2.1",
  "graphType": "chart",
  "graphTitle": "'Other' and unclassified accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Other/Unknown"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "subType"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "totalAccidents"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"1.2.1b": {
  "figureNumber": "1.2.1b",
  "graphType": "chart",
  "graphTitle": "All 'Other' and unclassified accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "subType"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "totalAccidents"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "includeItems": [
    "Mechanical",
    "Not yet assigned",
    "Go-around",
    "Taxi",
    "Pre-flight",
    "Cruise",
    "Collision",
    "Incapacitation",
    "Other (power loss)"
  ]
},
"1.3.1": {
  "figureNumber": "1.3.1",
  "graphType": "area",
  "graphTitle": "Takeoff and climb accident trend",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Take-off"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.3.2": {
  "figureNumber": "1.3.2",
  "graphType": "bar",
  "graphTitle": "Types of takeoff and climb accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Take-off"
  },
  "layers": [
    {
      "x": {
        "parameter": "subType",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.3.3": {
  "figureNumber": "1.3.3",
  "graphType": "chart",
  "graphTitle": "Aircraft involved in takeoff and climb accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Take-off"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"1.3.4": {
  "figureNumber": "1.3.4",
  "graphType": "chart",
  "graphTitle": "Flight conditions of takeoff and climb accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "flightConditions",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Take-off"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "conditions"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*Night fields include dusk"
  ]
},
"1.3.5": {
  "figureNumber": "1.3.5",
  "graphType": "chart",
  "graphTitle": "Pilots involved in takeoff and climb accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "pilotsInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Take-off"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "certLevel"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*'CFI on board' and 'IFR pilot on board' include single-pilot flights."
  ]
},
"1.4.1": {
  "figureNumber": "1.4.1",
  "graphType": "area",
  "graphTitle": "Fuel management accident trend",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Fuel management"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.4.2": {
  "figureNumber": "1.4.2",
  "graphType": "bar",
  "graphTitle": "Types of fuel management accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Fuel management"
  },
  "layers": [
    {
      "x": {
        "parameter": "subType",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.4.3": {
  "figureNumber": "1.4.3",
  "graphType": "chart",
  "graphTitle": "Aircraft involved in fuel management accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Fuel management"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"1.4.4": {
  "figureNumber": "1.4.4",
  "graphType": "chart",
  "graphTitle": "Flight conditions of fuel management accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "flightConditions",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Fuel management"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "conditions"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*Night fields include dusk"
  ]
},
"1.4.5": {
  "figureNumber": "1.4.5",
  "graphType": "chart",
  "graphTitle": "Pilots involved in fuel management accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "pilotsInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Fuel management"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "certLevel"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*'CFI on board' and 'IFR pilot on board' include single-pilot flights."
  ]
},
"1.5.1": {
  "figureNumber": "1.5.1",
  "graphType": "area",
  "graphTitle": "Maneuvering accident trend",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Maneuvering"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.5.2": {
  "figureNumber": "1.5.2",
  "graphType": "bar",
  "graphTitle": "Types of maneuvering accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Maneuvering"
  },
  "layers": [
    {
      "x": {
        "parameter": "subType",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.5.3": {
  "figureNumber": "1.5.3",
  "graphType": "chart",
  "graphTitle": "Aircraft involved in maneuvering accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Maneuvering"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"1.5.4": {
  "figureNumber": "1.5.4",
  "graphType": "chart",
  "graphTitle": "Flight conditions of maneuvering accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "flightConditions",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Maneuvering"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "conditions"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*Night fields include dusk"
  ]
},
"1.5.5": {
  "figureNumber": "1.5.5",
  "graphType": "chart",
  "graphTitle": "Pilots involved in maneuvering accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "pilotsInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Maneuvering"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "certLevel"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*'CFI on board' and 'IFR pilot on board' include single-pilot flights."
  ]
},
"1.6.1": {
  "figureNumber": "1.6.1",
  "graphType": "area",
  "graphTitle": "Descent and approach accident trend",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Descent / approach"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.6.2": {
  "figureNumber": "1.6.2",
  "graphType": "bar",
  "graphTitle": "Types of descent and approach accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Descent / approach"
  },
  "layers": [
    {
      "x": {
        "parameter": "subType",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.6.3": {
  "figureNumber": "1.6.3",
  "graphType": "chart",
  "graphTitle": "Aircraft involved in descent and approach accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Descent / approach"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"1.6.4": {
  "figureNumber": "1.6.4",
  "graphType": "chart",
  "graphTitle": "Flight conditions of descent and approach accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "flightConditions",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Descent / approach"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "conditions"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*Night fields include dusk"
  ]
},
"1.6.5": {
  "figureNumber": "1.6.5",
  "graphType": "chart",
  "graphTitle": "Pilots involved in descent and approach accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "pilotsInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Descent / approach"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "certLevel"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*'CFI on board' and 'IFR pilot on board' include single-pilot flights."
  ]
},
"1.7.1": {
  "figureNumber": "1.7.1",
  "graphType": "area",
  "graphTitle": "Weather accident trend",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Weather"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.7.2": {
  "figureNumber": "1.7.2",
  "graphType": "bar",
  "graphTitle": "Types of weather accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Weather"
  },
  "layers": [
    {
      "x": {
        "parameter": "subType",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.7.3": {
  "figureNumber": "1.7.3",
  "graphType": "chart",
  "graphTitle": "Aircraft involved in weather accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Weather"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"1.7.4": {
  "figureNumber": "1.7.4",
  "graphType": "chart",
  "graphTitle": "Flight conditions of weather accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "flightConditions",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Weather"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "conditions"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*Night fields include dusk"
  ]
},
"1.7.5": {
  "figureNumber": "1.7.5",
  "graphType": "chart",
  "graphTitle": "Pilots involved in weather accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "pilotsInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Weather"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "certLevel"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*'CFI on board' and 'IFR pilot on board' include single-pilot flights."
  ]
},
"1.8.1": {
  "figureNumber": "1.8.1",
  "graphType": "area",
  "graphTitle": "Mechanical accident trend",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Mechanical"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.8.2": {
  "figureNumber": "1.8.2",
  "graphType": "bar",
  "graphTitle": "Types of mechanical accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Mechanical"
  },
  "layers": [
    {
      "x": {
        "parameter": "subType",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.8.3": {
  "figureNumber": "1.8.3",
  "graphType": "chart",
  "graphTitle": "Aircraft involved in mechanical accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Mechanical"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"1.8.4": {
  "figureNumber": "1.8.4",
  "graphType": "chart",
  "graphTitle": "Flight conditions of mechanical accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "flightConditions",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Mechanical"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "conditions"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*Night fields include dusk"
  ]
},
"1.8.5": {
  "figureNumber": "1.8.5",
  "graphType": "chart",
  "graphTitle": "Pilots involved in mechanical accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "pilotsInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Mechanical"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "certLevel"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*'CFI on board' and 'IFR pilot on board' include single-pilot flights."
  ]
},
"1.9.1": {
  "figureNumber": "1.9.1",
  "graphType": "area",
  "graphTitle": "Enroute accident trend",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Enroute"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.9.2": {
  "figureNumber": "1.9.2",
  "graphType": "bar",
  "graphTitle": "Types of enroute accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Enroute"
  },
  "layers": [
    {
      "x": {
        "parameter": "subType",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.9.3": {
  "figureNumber": "1.9.3",
  "graphType": "chart",
  "graphTitle": "Aircraft involved in enroute accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Enroute"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"1.9.4": {
  "figureNumber": "1.9.4",
  "graphType": "chart",
  "graphTitle": "Flight conditions of enroute accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "flightConditions",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Enroute"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "conditions"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*Night fields include dusk"
  ]
},
"1.9.5": {
  "figureNumber": "1.9.5",
  "graphType": "chart",
  "graphTitle": "Pilots involved in enroute accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "pilotsInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Enroute"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "certLevel"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*'CFI on board' and 'IFR pilot on board' include single-pilot flights."
  ]
},
"1.10.1": {
  "figureNumber": "1.10.1",
  "graphType": "area",
  "graphTitle": "Preflight and taxi accident trend",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Preflight and Taxi"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.10.2": {
  "figureNumber": "1.10.2",
  "graphType": "bar",
  "graphTitle": "Types of preflight and taxi accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Preflight and Taxi"
  },
  "layers": [
    {
      "x": {
        "parameter": "subType",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"1.10.3": {
  "figureNumber": "1.10.3",
  "graphType": "chart",
  "graphTitle": "Aircraft involved in preflight and taxi accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Preflight and Taxi"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"1.10.4": {
  "figureNumber": "1.10.4",
  "graphType": "chart",
  "graphTitle": "Flight conditions of preflight and taxi accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "flightConditions",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Preflight and Taxi"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "conditions"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*Night fields include dusk"
  ]
},
"1.10.5": {
  "figureNumber": "1.10.5",
  "graphType": "chart",
  "graphTitle": "Pilots involved in preflight and taxi accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "pilotsInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "Preflight and Taxi"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "certLevel"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*'CFI on board' and 'IFR pilot on board' include single-pilot flights."
  ]
},
"2.1": {
  "figureNumber": "2.1",
  "graphType": "list",
  "graphTitle": "General Aviation Accidents in [[YEAR]]",
  "graphSubtitle": "Commercial fixed-wing",
  "url": "overall",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "Y"
  },
  "fields": [
    {
      "fieldName": "Number of accidents",
      "parameter": "accidents",
      "unit": ""
    },
    {
      "fieldName": "Number of aircraft",
      "parameter": "aircraft",
      "unit": ""
    },
    {
      "fieldName": "Number of fatal accidents",
      "parameter": "fatalAccidents",
      "unit": ""
    },
    {
      "fieldName": "Lethality (%)",
      "parameter": "lethality",
      "unit": ""
    },
    {
      "fieldName": "Fatalities",
      "parameter": "fatalities",
      "unit": ""
    }
  ],
  "footnotes": [
    "*Each aircraft involved in a collision is counted separately."
  ]
},
"2.2": {
  "figureNumber": "2.2",
  "graphType": "area",
  "graphTitle": "General Aviation Accident Trends [[YEAR-RANGE]]",
  "graphSubtitle": "Commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "endYear": "2021",
    "category": "Airplane",
    "commercial": "Y",
    "accidentType": "Total"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"2.3": {
  "figureNumber": "2.3",
  "graphType": "area",
  "graphTitle": "General Aviation Accident Rates [[YEAR-RANGE]]",
  "graphSubtitle": "Commercial fixed-wing",
  "url": "trend",
  "queryParams": {
    "endYear": "2021",
    "category": "Airplane",
    "commercial": "Y",
    "accidentType": "Total"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "accidentRate",
        "label": "Total Accident Rate (per 100,000 hours)"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidentRate",
        "label": "Fatal Accident Rate (per 100,000 hours)"
      }
    }
  ]
},
"2.4": {
  "figureNumber": "2.4",
  "graphType": "chart",
  "graphTitle": "General Aviation Accidents in [[YEAR]]",
  "graphSubtitle": "Commercial fixed-wing",
  "url": "majorCauses",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "Y"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "majorCause"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ]
  ]
},
"2.5": {
  "figureNumber": "2.5",
  "graphType": "parts",
  "farParts": [
    "135",
    "137"
  ],
  "graphTitle": "Aircraft class",
  "graphSubtitle": "Commercial fixed-wing",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "Y",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"2.6": {
  "figureNumber": "2.6",
  "graphType": "parts",
  "farParts": [
    "135",
    "137"
  ],
  "graphTitle": "Flight Conditions",
  "graphSubtitle": "Commercial fixed-wing",
  "url": "flightConditions",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "Y",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "conditions"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatalities",
        "parameter": "fatalities"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalities",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*Night fields include dusk."
  ]
},
"2.7": {
  "figureNumber": "2.7",
  "graphType": "parts",
  "farParts": [
    "135",
    "137"
  ],
  "graphTitle": "Pilots involved in commercial fixed-wing accidents",
  "graphSubtitle": "Commercial fixed-wing",
  "url": "pilotsInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "Y",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "certLevel"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*CFI on board and IFR pilot on board include single-pilot flights."
  ]
},
"2.8": {
  "figureNumber": "2.8",
  "graphType": "parts",
  "farParts": [
    "135",
    "137"
  ],
  "graphTitle": "Types of Commercial fixed-wing accidents",
  "graphSubtitle": "Non-commercial fixed-wing",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "Y",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "subType"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "totalAccidents"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"3.1": {
  "figureNumber": "3.1",
  "graphType": "list",
  "graphTitle": "General Aviation Accidents in [[YEAR]]",
  "graphSubtitle": "Non-commercial helicopter",
  "url": "overall",
  "queryParams": {
    "year": "2021",
    "category": "Helicopter",
    "commercial": "N"
  },
  "fields": [
    {
      "fieldName": "Number of accidents",
      "parameter": "accidents",
      "unit": ""
    },
    {
      "fieldName": "Number of aircraft",
      "parameter": "aircraft",
      "unit": ""
    },
    {
      "fieldName": "Number of fatal accidents",
      "parameter": "fatalAccidents",
      "unit": ""
    },
    {
      "fieldName": "Lethality (%)",
      "parameter": "lethality",
      "unit": ""
    },
    {
      "fieldName": "Fatalities",
      "parameter": "fatalities",
      "unit": ""
    }
  ],
  "footnotes": [
    "*Each aircraft involved in a collision is counted separately."
  ]
},
"3.2": {
  "figureNumber": "3.2",
  "graphType": "chart",
  "graphTitle": "Major causes: Helicopter general aviation accidents",
  "graphSubtitle": "Non-commercial helicopter",
  "url": "majorCauses",
  "queryParams": {
    "year": "2021",
    "category": "Helicopter",
    "commercial": "N"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "majorCause"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ]
  ]
},
"3.3": {
  "figureNumber": "3.3",
  "graphType": "area",
  "graphTitle": "General Aviation Accident Trends [[YEAR-RANGE]]",
  "graphSubtitle": "Non-commercial helicopter",
  "url": "trend",
  "queryParams": {
    "endYear": "2021",
    "category": "Helicopter",
    "commercial": "N",
    "accidentType": "Total"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"3.4": {
  "figureNumber": "3.4",
  "graphType": "area",
  "graphTitle": "General Aviation Accident Rates [[YEAR-RANGE]]",
  "graphSubtitle": "Non-commercial helicopter",
  "url": "trend",
  "queryParams": {
    "endYear": "2021",
    "category": "Helicopter",
    "commercial": "N",
    "accidentType": "Total"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "accidentRate",
        "label": "Total Accident Rate (per 100,000 hours)"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidentRate",
        "label": "Fatal Accident Rate (per 100,000 hours)"
      }
    }
  ]
},
"3.5": {
  "figureNumber": "3.5",
  "graphType": "chart",
  "graphTitle": "Aircraft class",
  "graphSubtitle": "Non-commercial helicopter",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Helicopter",
    "commercial": "N",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatalities",
        "parameter": "fatalities"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalities",
        "unit": "%"
      }
    ]
  ]
},
"3.6": {
  "figureNumber": "3.6",
  "graphType": "chart",
  "graphTitle": "Type of operation",
  "graphSubtitle": "Non-commercial helicopter",
  "url": "typeOperation",
  "queryParams": {
    "year": "2021",
    "category": "Helicopter",
    "commercial": "N",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "typeOperation"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatalities",
        "parameter": "fatalities"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalities",
        "unit": "%"
      }
    ]
  ]
},
"3.7": {
  "figureNumber": "3.7",
  "graphType": "chart",
  "graphTitle": "Flight Conditions",
  "graphSubtitle": "Non-commercial helicopter",
  "url": "flightConditions",
  "queryParams": {
    "year": "2021",
    "category": "Helicopter",
    "commercial": "N",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "conditions"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatalities",
        "parameter": "fatalities"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalities",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*Night fields include dusk."
  ]
},
"3.8": {
  "figureNumber": "3.8",
  "graphType": "chart",
  "graphTitle": "Pilots involved",
  "graphSubtitle": "Non-commercial helicopter",
  "url": "pilotsInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Helicopter",
    "commercial": "N",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "certLevel"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*CFI on board and IFR pilot on board include single-pilot flights."
  ]
},
"3.9": {
  "figureNumber": "3.9",
  "graphType": "chart",
  "graphTitle": "Types of non-commercial helicopter accidents",
  "graphSubtitle": "Non-commercial helicopter",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Helicopter",
    "commercial": "N",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "subType"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "totalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"4.1": {
  "figureNumber": "4.1",
  "graphType": "list",
  "graphTitle": "General Aviation Accidents in [[YEAR]]",
  "graphSubtitle": "Commercial helicopter",
  "url": "overall",
  "queryParams": {
    "year": "2021",
    "category": "Helicopter",
    "commercial": "Y"
  },
  "fields": [
    {
      "fieldName": "Number of accidents",
      "parameter": "accidents",
      "unit": ""
    },
    {
      "fieldName": "Number of aircraft*",
      "parameter": "aircraft",
      "unit": ""
    },
    {
      "fieldName": "Number of fatal accidents",
      "parameter": "fatalAccidents",
      "unit": ""
    },
    {
      "fieldName": "Lethality (%)",
      "parameter": "lethality",
      "unit": ""
    },
    {
      "fieldName": "Fatalities",
      "parameter": "fatalities",
      "unit": ""
    }
  ],
  "footnotes": [
    "*Each aircraft involved in a collision is counted separately."
  ]
},
"4.2": {
  "figureNumber": "4.2",
  "graphType": "chart",
  "graphTitle": "Major causes: Helicopter general aviation accidents",
  "graphSubtitle": "Commercial helicopter",
  "url": "majorCauses",
  "queryParams": {
    "year": "2021",
    "category": "Helicopter",
    "commercial": "Y"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "majorCause"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ]
  ]
},
"4.3": {
  "figureNumber": "4.3",
  "graphType": "area",
  "graphTitle": "General Aviation Accident Trends [[YEAR-RANGE]]",
  "graphSubtitle": "Commercial helicopter",
  "url": "trend",
  "queryParams": {
    "endYear": "2021",
    "category": "Helicopter",
    "commercial": "Y",
    "accidentType": "Total"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"4.4": {
  "figureNumber": "4.4",
  "graphType": "area",
  "graphTitle": "General Aviation Accident Rates [[YEAR-RANGE]]",
  "graphSubtitle": "Commercial helicopter",
  "url": "trend",
  "queryParams": {
    "endYear": "2021",
    "category": "Helicopter",
    "commercial": "Y",
    "accidentType": "Total"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "accidentRate",
        "label": "Total Accident Rate (per 100,000 hours)"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidentRate",
        "label": "Fatal Accident Rate (per 100,000 hours)"
      }
    }
  ]
},
"4.5": {
  "figureNumber": "4.5",
  "graphType": "parts",
  "farParts": [
    "133",
    "135",
    "137"
  ],
  "graphTitle": "Aircraft class",
  "graphSubtitle": "Commercial Helicopter",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Helicopter",
    "commercial": "Y",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"4.6": {
  "figureNumber": "4.6",
  "graphType": "parts",
  "farParts": [
    "133",
    "135",
    "137"
  ],
  "graphTitle": "Flight Conditions",
  "graphSubtitle": "Commercial Helicopter",
  "url": "flightConditions",
  "queryParams": {
    "year": "2021",
    "category": "Helicopter",
    "commercial": "Y",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "conditions"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatalities",
        "parameter": "fatalities"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalities",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*Night fields include dusk."
  ]
},
"4.7": {
  "figureNumber": "4.7",
  "graphType": "parts",
  "farParts": [
    "133",
    "135",
    "137"
  ],
  "graphTitle": "Pilots involved in commercial helicopter accidents",
  "graphSubtitle": "Commercial Helicopter",
  "url": "pilotsInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Helicopter",
    "commercial": "Y",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "certLevel"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ],
  "footnotes": [
    "*CFI on board and IFR pilot on board include single-pilot flights."
  ]
},
"4.8": {
  "figureNumber": "4.8",
  "graphType": "parts",
  "farParts": [
    "133",
    "135",
    "137"
  ],
  "graphTitle": "Types of Commercial helicopter accidents",
  "graphSubtitle": "Commercial Helicopter",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Helicopter",
    "commercial": "Y",
    "accidentType": "Total"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "subType"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "totalAccidents"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"5.1": {
  "figureNumber": "5.1",
  "graphType": "area",
  "graphTitle": "Fixed-wing amateur-built accident trend",
  "graphSubtitle": "Sport/Experimental",
  "url": "trend",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "LightSport"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "totalAccidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"5.2": {
  "figureNumber": "5.2",
  "graphType": "chart",
  "graphTitle": "Types of fixed-wing amateur-built accidents",
  "graphSubtitle": "Sport/Experimental",
  "url": "accidentsOneYear",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "LightSport"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "subType"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "totalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"5.3": {
  "figureNumber": "5.3",
  "graphType": "chart",
  "graphTitle": "Types of amateur-built aircraft involved in accidents",
  "graphSubtitle": "Sport/Experimental",
  "url": "aircraftInvolved",
  "queryParams": {
    "year": "2021",
    "category": "Airplane",
    "commercial": "N",
    "accidentType": "LightSport"
  },
  "fields": [
    [
      {
        "fieldName": "",
        "parameter": "aircraftSubClass"
      }
    ],
    [
      {
        "fieldName": "Accidents",
        "parameter": "accidents"
      },
      {
        "fieldName": "",
        "parameter": "pctAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Fatal Accidents",
        "parameter": "fatalAccidents"
      },
      {
        "fieldName": "",
        "parameter": "pctFatalAccidents",
        "unit": "%"
      }
    ],
    [
      {
        "fieldName": "Lethality",
        "parameter": "lethality",
        "unit": "%"
      }
    ]
  ]
},
"Summary 1": {
  "figureNumber": "Summary 1",
  "hideFigureNumber": true,
  "graphType": "summary",
  "graphTitle": "General Aviation Accident Trends [[YEAR-RANGE]]",
  "graphSubtitle": "Overall Summary",
  "url": "summary",
  "queryParams": {
    "startYear": "2007",
    "endYear": "2021"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "accidents",
        "label": "Total Accidents"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidents",
        "label": "Fatal Accidents"
      }
    }
  ]
},
"Summary 2": {
  "figureNumber": "Summary 2",
  "hideFigureNumber": true,
  "graphType": "summaryrates",
  "graphTitle": "General Aviation Accident Rates [[YEAR-RANGE]]",
  "graphSubtitle": "Overall Summary",
  "url": "summary",
  "queryParams": {
    "startYear": "2010",
    "endYear": "2021"
  },
  "layers": [
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "accidentRate",
        "label": "Total Accident Rate (per 100,000 hours)"
      }
    },
    {
      "x": {
        "parameter": "eventYear",
        "label": "Year"
      },
      "y": {
        "parameter": "fatalAccidentRate",
        "label": "Fatal Accident Rate (per 100,000 hours)"
      }
    }
  ]
},
"Text-Intro": {
  "figureNumber": "Text-Intro",
  "graphType": "text",
  "id": "reportText-intro"
},
"Text-Intro-NCFW": {
  "figureNumber": "Text-Intro-NCFW",
  "graphType": "text",
  "id": "reportText-intro-ncfw"
},
"Text-Intro-CFW": {
  "figureNumber": "Text-Intro-CFW",
  "graphType": "text",
  "id": "reportText-intro-cfw"
},
"Text-Intro-NCH": {
  "figureNumber": "Text-Intro-NCH",
  "graphType": "text",
  "id": "reportText-intro-nch"
},
"Text-Intro-CH": {
  "figureNumber": "Text-Intro-CH",
  "graphType": "text",
  "id": "reportText-intro-ch"
}
}
}
  `;

var jsonCacheDB = {};

jsonCacheDB['2017'] = `{"Text-Intro":{},"Summary 1":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidents":1240,"aircraft":1258,"fatalAccidents":221,"fatalaties":391,"lethality":17.8,"accidentHours":19777000,"accidentRate":6.27,"fatalAccidentRate":1.12},{"eventYear":2008,"category":"Airplane","commercial":"Y","accidents":128,"aircraft":130,"fatalAccidents":15,"fatalaties":30,"lethality":11.7,"accidentHours":2802000,"accidentRate":4.57,"fatalAccidentRate":0.54},{"eventYear":2008,"category":"Helicopter","commercial":"N","accidents":115,"aircraft":115,"fatalAccidents":23,"fatalaties":48,"lethality":20,"accidentHours":1746000,"accidentRate":6.59,"fatalAccidentRate":1.32},{"eventYear":2008,"category":"Helicopter","commercial":"Y","accidents":30,"aircraft":31,"fatalAccidents":7,"fatalaties":28,"lethality":23.3,"accidentHours":1476000,"accidentRate":2.03,"fatalAccidentRate":0.47},{"eventYear":2009,"category":"Airplane","commercial":"N","accidents":1180,"aircraft":1189,"fatalAccidents":230,"fatalaties":405,"lethality":19.5,"accidentHours":17892000,"accidentRate":6.6,"fatalAccidentRate":1.29},{"eventYear":2009,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":83,"fatalAccidents":2,"fatalaties":2,"lethality":2.4,"accidentHours":2689000,"accidentRate":3.05,"fatalAccidentRate":0.07},{"eventYear":2009,"category":"Helicopter","commercial":"N","accidents":125,"aircraft":125,"fatalAccidents":16,"fatalaties":29,"lethality":12.8,"accidentHours":1744000,"accidentRate":7.17,"fatalAccidentRate":0.92},{"eventYear":2009,"category":"Helicopter","commercial":"Y","accidents":30,"aircraft":30,"fatalAccidents":3,"fatalaties":10,"lethality":10,"accidentHours":1259000,"accidentRate":2.38,"fatalAccidentRate":0.24},{"eventYear":2010,"category":"Airplane","commercial":"N","accidents":1160,"aircraft":1170,"fatalAccidents":214,"fatalaties":359,"lethality":18.4,"accidentHours":18423000,"accidentRate":6.3,"fatalAccidentRate":1.16},{"eventYear":2010,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":83,"fatalAccidents":6,"fatalaties":13,"lethality":7.3,"accidentHours":2792000,"accidentRate":2.94,"fatalAccidentRate":0.21},{"eventYear":2010,"category":"Helicopter","commercial":"N","accidents":99,"aircraft":99,"fatalAccidents":19,"fatalaties":38,"lethality":19.2,"accidentHours":1872000,"accidentRate":5.29,"fatalAccidentRate":1.01},{"eventYear":2010,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":5,"fatalaties":7,"lethality":14.7,"accidentHours":1533000,"accidentRate":2.22,"fatalAccidentRate":0.33},{"eventYear":2011,"category":"Airplane","commercial":"N","accidents":1185,"aircraft":1198,"fatalAccidents":226,"fatalaties":395,"lethality":19.1,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidents":115,"aircraft":118,"fatalAccidents":16,"fatalaties":28,"lethality":13.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidents":101,"aircraft":101,"fatalAccidents":10,"fatalaties":12,"lethality":9.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":7,"fatalaties":20,"lethality":20.6,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidents":1155,"aircraft":1164,"fatalAccidents":214,"fatalaties":332,"lethality":18.5,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.21},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":84,"fatalAccidents":8,"fatalaties":8,"lethality":9.8,"accidentHours":3011000,"accidentRate":2.72,"fatalAccidentRate":0.27},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidents":124,"aircraft":126,"fatalAccidents":19,"fatalaties":29,"lethality":15.3,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":5,"lethality":8.6,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Airplane","commercial":"N","accidents":964,"aircraft":973,"fatalAccidents":167,"fatalaties":284,"lethality":17.3,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidents":81,"aircraft":81,"fatalAccidents":11,"fatalaties":27,"lethality":13.6,"accidentHours":3238000,"accidentRate":2.5,"fatalAccidentRate":0.34},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidents":104,"aircraft":104,"fatalAccidents":20,"fatalaties":42,"lethality":19.2,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidents":39,"aircraft":39,"fatalAccidents":6,"fatalaties":7,"lethality":15.4,"accidentHours":1525000,"accidentRate":2.56,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Airplane","commercial":"N","accidents":969,"aircraft":976,"fatalAccidents":197,"fatalaties":308,"lethality":20.3,"accidentHours":16474000,"accidentRate":5.88,"fatalAccidentRate":1.2},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":11,"fatalaties":17,"lethality":16.4,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidents":107,"aircraft":107,"fatalAccidents":13,"fatalaties":21,"lethality":12.1,"accidentHours":1719000,"accidentRate":6.22,"fatalAccidentRate":0.76},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":7,"fatalaties":11,"lethality":20,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Airplane","commercial":"N","accidents":975,"aircraft":985,"fatalAccidents":196,"fatalaties":331,"lethality":20.1,"accidentHours":17375000,"accidentRate":5.61,"fatalAccidentRate":1.13},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":8,"fatalaties":16,"lethality":10.5,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidents":90,"aircraft":90,"fatalAccidents":10,"fatalaties":16,"lethality":11.1,"accidentHours":1748000,"accidentRate":5.15,"fatalAccidentRate":0.57},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidents":37,"aircraft":37,"fatalAccidents":7,"fatalaties":12,"lethality":18.9,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Airplane","commercial":"N","accidents":1050,"aircraft":1066,"fatalAccidents":159,"fatalaties":282,"lethality":15.1,"accidentHours":18277000,"accidentRate":5.74,"fatalAccidentRate":0.87},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidents":65,"aircraft":66,"fatalAccidents":19,"fatalaties":34,"lethality":29.2,"accidentHours":3234000,"accidentRate":2.01,"fatalAccidentRate":0.59},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidents":77,"aircraft":77,"fatalAccidents":12,"fatalaties":19,"lethality":15.6,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":6,"lethality":8.6,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Airplane","commercial":"N","accidents":1002,"aircraft":1012,"fatalAccidents":162,"fatalaties":268,"lethality":16.2,"accidentHours":18092000,"accidentRate":5.54,"fatalAccidentRate":0.9},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":11,"fatalaties":14,"lethality":14.5,"accidentHours":3632000,"accidentRate":2.09,"fatalAccidentRate":0.3},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidents":88,"aircraft":88,"fatalAccidents":13,"fatalaties":18,"lethality":14.8,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidents":38,"aircraft":38,"fatalAccidents":5,"fatalaties":11,"lethality":13.2,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34}],"Summary 2":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidents":1240,"aircraft":1258,"fatalAccidents":221,"fatalaties":391,"lethality":17.8,"accidentHours":19777000,"accidentRate":6.27,"fatalAccidentRate":1.12},{"eventYear":2008,"category":"Airplane","commercial":"Y","accidents":128,"aircraft":130,"fatalAccidents":15,"fatalaties":30,"lethality":11.7,"accidentHours":2802000,"accidentRate":4.57,"fatalAccidentRate":0.54},{"eventYear":2008,"category":"Helicopter","commercial":"N","accidents":115,"aircraft":115,"fatalAccidents":23,"fatalaties":48,"lethality":20,"accidentHours":1746000,"accidentRate":6.59,"fatalAccidentRate":1.32},{"eventYear":2008,"category":"Helicopter","commercial":"Y","accidents":30,"aircraft":31,"fatalAccidents":7,"fatalaties":28,"lethality":23.3,"accidentHours":1476000,"accidentRate":2.03,"fatalAccidentRate":0.47},{"eventYear":2009,"category":"Airplane","commercial":"N","accidents":1180,"aircraft":1189,"fatalAccidents":230,"fatalaties":405,"lethality":19.5,"accidentHours":17892000,"accidentRate":6.6,"fatalAccidentRate":1.29},{"eventYear":2009,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":83,"fatalAccidents":2,"fatalaties":2,"lethality":2.4,"accidentHours":2689000,"accidentRate":3.05,"fatalAccidentRate":0.07},{"eventYear":2009,"category":"Helicopter","commercial":"N","accidents":125,"aircraft":125,"fatalAccidents":16,"fatalaties":29,"lethality":12.8,"accidentHours":1744000,"accidentRate":7.17,"fatalAccidentRate":0.92},{"eventYear":2009,"category":"Helicopter","commercial":"Y","accidents":30,"aircraft":30,"fatalAccidents":3,"fatalaties":10,"lethality":10,"accidentHours":1259000,"accidentRate":2.38,"fatalAccidentRate":0.24},{"eventYear":2010,"category":"Airplane","commercial":"N","accidents":1160,"aircraft":1170,"fatalAccidents":214,"fatalaties":359,"lethality":18.4,"accidentHours":18423000,"accidentRate":6.3,"fatalAccidentRate":1.16},{"eventYear":2010,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":83,"fatalAccidents":6,"fatalaties":13,"lethality":7.3,"accidentHours":2792000,"accidentRate":2.94,"fatalAccidentRate":0.21},{"eventYear":2010,"category":"Helicopter","commercial":"N","accidents":99,"aircraft":99,"fatalAccidents":19,"fatalaties":38,"lethality":19.2,"accidentHours":1872000,"accidentRate":5.29,"fatalAccidentRate":1.01},{"eventYear":2010,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":5,"fatalaties":7,"lethality":14.7,"accidentHours":1533000,"accidentRate":2.22,"fatalAccidentRate":0.33},{"eventYear":2011,"category":"Airplane","commercial":"N","accidents":1185,"aircraft":1198,"fatalAccidents":226,"fatalaties":395,"lethality":19.1,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidents":115,"aircraft":118,"fatalAccidents":16,"fatalaties":28,"lethality":13.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidents":101,"aircraft":101,"fatalAccidents":10,"fatalaties":12,"lethality":9.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":7,"fatalaties":20,"lethality":20.6,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidents":1155,"aircraft":1164,"fatalAccidents":214,"fatalaties":332,"lethality":18.5,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.21},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":84,"fatalAccidents":8,"fatalaties":8,"lethality":9.8,"accidentHours":3011000,"accidentRate":2.72,"fatalAccidentRate":0.27},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidents":124,"aircraft":126,"fatalAccidents":19,"fatalaties":29,"lethality":15.3,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":5,"lethality":8.6,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Airplane","commercial":"N","accidents":964,"aircraft":973,"fatalAccidents":167,"fatalaties":284,"lethality":17.3,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidents":81,"aircraft":81,"fatalAccidents":11,"fatalaties":27,"lethality":13.6,"accidentHours":3238000,"accidentRate":2.5,"fatalAccidentRate":0.34},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidents":104,"aircraft":104,"fatalAccidents":20,"fatalaties":42,"lethality":19.2,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidents":39,"aircraft":39,"fatalAccidents":6,"fatalaties":7,"lethality":15.4,"accidentHours":1525000,"accidentRate":2.56,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Airplane","commercial":"N","accidents":969,"aircraft":976,"fatalAccidents":197,"fatalaties":308,"lethality":20.3,"accidentHours":16474000,"accidentRate":5.88,"fatalAccidentRate":1.2},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":11,"fatalaties":17,"lethality":16.4,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidents":107,"aircraft":107,"fatalAccidents":13,"fatalaties":21,"lethality":12.1,"accidentHours":1719000,"accidentRate":6.22,"fatalAccidentRate":0.76},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":7,"fatalaties":11,"lethality":20,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Airplane","commercial":"N","accidents":975,"aircraft":985,"fatalAccidents":196,"fatalaties":331,"lethality":20.1,"accidentHours":17375000,"accidentRate":5.61,"fatalAccidentRate":1.13},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":8,"fatalaties":16,"lethality":10.5,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidents":90,"aircraft":90,"fatalAccidents":10,"fatalaties":16,"lethality":11.1,"accidentHours":1748000,"accidentRate":5.15,"fatalAccidentRate":0.57},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidents":37,"aircraft":37,"fatalAccidents":7,"fatalaties":12,"lethality":18.9,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Airplane","commercial":"N","accidents":1050,"aircraft":1066,"fatalAccidents":159,"fatalaties":282,"lethality":15.1,"accidentHours":18277000,"accidentRate":5.74,"fatalAccidentRate":0.87},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidents":65,"aircraft":66,"fatalAccidents":19,"fatalaties":34,"lethality":29.2,"accidentHours":3234000,"accidentRate":2.01,"fatalAccidentRate":0.59},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidents":77,"aircraft":77,"fatalAccidents":12,"fatalaties":19,"lethality":15.6,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":6,"lethality":8.6,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Airplane","commercial":"N","accidents":1002,"aircraft":1012,"fatalAccidents":162,"fatalaties":268,"lethality":16.2,"accidentHours":18092000,"accidentRate":5.54,"fatalAccidentRate":0.9},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":11,"fatalaties":14,"lethality":14.5,"accidentHours":3632000,"accidentRate":2.09,"fatalAccidentRate":0.3},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidents":88,"aircraft":88,"fatalAccidents":13,"fatalaties":18,"lethality":14.8,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidents":38,"aircraft":38,"fatalAccidents":5,"fatalaties":11,"lethality":13.2,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34}],"Text-Intro-NCFW":{},"1.1":{"accidents":1002,"aircraft":1012,"fatalAccidents":162,"lethality":16.2,"fatalities":270,"params":{"year":"2017","category":"Airplane","commercial":"N"}},"1.2":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1240,"fatalAccidents":221,"accidentHours":19777000,"accidentRate":6.27,"fatalAccidentRate":1.12},{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1180,"fatalAccidents":232,"accidentHours":17892000,"accidentRate":6.6,"fatalAccidentRate":1.3},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1160,"fatalAccidents":214,"accidentHours":18423000,"accidentRate":6.3,"fatalAccidentRate":1.16},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1185,"fatalAccidents":226,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1155,"fatalAccidents":214,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.21},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":964,"fatalAccidents":167,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":969,"fatalAccidents":197,"accidentHours":16474000,"accidentRate":5.88,"fatalAccidentRate":1.2},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":975,"fatalAccidents":196,"accidentHours":17375000,"accidentRate":5.61,"fatalAccidentRate":1.13},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1050,"fatalAccidents":160,"accidentHours":18277000,"accidentRate":5.74,"fatalAccidentRate":0.88},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1002,"fatalAccidents":162,"accidentHours":18092000,"accidentRate":5.54,"fatalAccidentRate":0.9}],"1.3":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1240,"fatalAccidents":221,"accidentHours":19777000,"accidentRate":6.27,"fatalAccidentRate":1.12},{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1180,"fatalAccidents":232,"accidentHours":17892000,"accidentRate":6.6,"fatalAccidentRate":1.3},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1160,"fatalAccidents":214,"accidentHours":18423000,"accidentRate":6.3,"fatalAccidentRate":1.16},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1185,"fatalAccidents":226,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1155,"fatalAccidents":214,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.21},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":964,"fatalAccidents":167,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":969,"fatalAccidents":197,"accidentHours":16474000,"accidentRate":5.88,"fatalAccidentRate":1.2},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":975,"fatalAccidents":196,"accidentHours":17375000,"accidentRate":5.61,"fatalAccidentRate":1.13},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1050,"fatalAccidents":160,"accidentHours":18277000,"accidentRate":5.74,"fatalAccidentRate":0.88},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1002,"fatalAccidents":162,"accidentHours":18092000,"accidentRate":5.54,"fatalAccidentRate":0.9}],"1.4":[{"eventYear":2017,"category":"Airplane","commercial":"N","majorCause":"Pilot-Related","sortOrder":1,"accidents":709,"pctAccidents":70.8,"fatalAccidents":128,"pctFatalAccidents":79,"fatalities":219,"pctFatalities":81.7,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","majorCause":"Mechanical","sortOrder":2,"accidents":177,"pctAccidents":17.7,"fatalAccidents":13,"pctFatalAccidents":8,"fatalities":18,"pctFatalities":6.7,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","majorCause":"Other/Unknown","sortOrder":3,"accidents":116,"pctAccidents":11.6,"fatalAccidents":21,"pctFatalAccidents":13,"fatalities":31,"pctFatalities":11.6,"lethality":0}],"1.5":[{"accidentType":"Total","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":709,"pctAccidents":71,"fatalAccidents":99,"pctFatalAccidents":60.7,"fatalities":143,"pctFatalities":53.4,"lethality":14},{"accidentType":"Total","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":300,"pctAccidents":30.1,"fatalAccidents":30,"pctFatalAccidents":18.4,"fatalities":41,"pctFatalities":15.3,"lethality":10},{"accidentType":"Total","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":199,"pctAccidents":19.9,"fatalAccidents":43,"pctFatalAccidents":26.4,"fatalities":79,"pctFatalities":29.5,"lethality":21.6},{"accidentType":"Total","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":47,"pctAccidents":4.7,"fatalAccidents":10,"pctFatalAccidents":6.1,"fatalities":26,"pctFatalities":9.7,"lethality":21.3},{"accidentType":"Total","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":71,"pctAccidents":7.1,"fatalAccidents":18,"pctFatalAccidents":11,"fatalities":42,"pctFatalities":15.7,"lethality":25.4},{"accidentType":"Total","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":7,"pctAccidents":0.7,"fatalAccidents":2,"pctFatalAccidents":1.2,"fatalities":4,"pctFatalities":1.5,"lethality":28.6},{"accidentType":"Total","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":19,"pctAccidents":1.9,"fatalAccidents":3,"pctFatalAccidents":1.8,"fatalities":4,"pctFatalities":1.5,"lethality":15.8}],"1.6":[{"sortOrder":1,"typeOperation":"Aerial Application","accidents":1,"pctAccidents":0.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":1,"typeOperation":"Personal","accidents":759,"pctAccidents":75.7,"fatalAccidents":134,"pctFatalAccidents":82.7,"fatalities":221,"pctFatalities":82.5,"lethality":17.7},{"sortOrder":2,"typeOperation":"Instructional","accidents":168,"pctAccidents":16.8,"fatalAccidents":21,"pctFatalAccidents":13,"fatalities":35,"pctFatalities":13.1,"lethality":12.5},{"sortOrder":3,"typeOperation":"Public Use","accidents":4,"pctAccidents":0.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":4,"typeOperation":"Positioning","accidents":11,"pctAccidents":1.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"typeOperation":"Aerial Observation","accidents":5,"pctAccidents":0.5,"fatalAccidents":1,"pctFatalAccidents":0.6,"fatalities":1,"pctFatalities":0.4,"lethality":20},{"sortOrder":6,"typeOperation":"Business","accidents":24,"pctAccidents":2.4,"fatalAccidents":5,"pctFatalAccidents":3.1,"fatalities":10,"pctFatalities":3.7,"lethality":20.8},{"sortOrder":8,"typeOperation":"Other work use","accidents":19,"pctAccidents":1.9,"fatalAccidents":1,"pctFatalAccidents":0.6,"fatalities":1,"pctFatalities":0.4,"lethality":5.3},{"sortOrder":9,"typeOperation":"Other or unknown","accidents":11,"pctAccidents":1.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.7":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":874,"pctAccidents":87.2,"fatalAccidents":122,"pctFatalAccidents":75.3,"fatalities":181,"pctFatalities":67.5,"lethality":14},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":68,"pctAccidents":6.8,"fatalAccidents":12,"pctFatalAccidents":7.4,"fatalities":25,"pctFatalities":9.3,"lethality":17.6},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":29,"pctAccidents":2.9,"fatalAccidents":16,"pctFatalAccidents":9.9,"fatalities":43,"pctFatalities":16,"lethality":55.2},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":14,"pctAccidents":1.4,"fatalAccidents":8,"pctFatalAccidents":4.9,"fatalities":14,"pctFatalities":5.2,"lethality":57.1},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":17,"pctAccidents":1.7,"fatalAccidents":4,"pctFatalAccidents":2.5,"fatalities":5,"pctFatalities":1.9,"lethality":23.5}],"1.8":[{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":144,"pctAccidents":14.2,"fatalAccidents":25,"pctFatalAccidents":15.5,"fatalities":44,"pctFatalities":16.5,"lethality":17.4},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":255,"pctAccidents":25.2,"fatalAccidents":49,"pctFatalAccidents":30.4,"fatalities":80,"pctFatalities":30.1,"lethality":19.2},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":510,"pctAccidents":50.4,"fatalAccidents":78,"pctFatalAccidents":48.4,"fatalities":132,"pctFatalities":49.6,"lethality":15.3},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":19,"pctAccidents":1.9,"fatalAccidents":5,"pctFatalAccidents":3.1,"fatalities":6,"pctFatalities":2.3,"lethality":26.3},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":58,"pctAccidents":5.7,"fatalAccidents":4,"pctFatalAccidents":2.5,"fatalities":4,"pctFatalities":1.5,"lethality":6.9},{"accidentType":"Total","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":26,"pctAccidents":2.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":159,"pctAccidents":15.7,"fatalAccidents":36,"pctFatalAccidents":22.4,"fatalities":63,"pctFatalities":23.7,"lethality":22.6},{"accidentType":"Total","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":226,"pctAccidents":22.3,"fatalAccidents":40,"pctFatalAccidents":24.8,"fatalities":73,"pctFatalities":27.4,"lethality":17.7},{"accidentType":"Total","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":533,"pctAccidents":52.7,"fatalAccidents":97,"pctFatalAccidents":60.2,"fatalities":166,"pctFatalities":62.4,"lethality":18.2}],"1.9":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":921,"fatalAccidents":176,"accidentHours":19777000,"accidentRate":4.66,"fatalAccidentRate":0.89},{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":873,"fatalAccidents":174,"accidentHours":17892000,"accidentRate":4.88,"fatalAccidentRate":0.97},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":882,"fatalAccidents":170,"accidentHours":18423000,"accidentRate":4.79,"fatalAccidentRate":0.92},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":916,"fatalAccidents":184,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":864,"fatalAccidents":167,"accidentHours":17758000,"accidentRate":4.87,"fatalAccidentRate":0.94},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":714,"fatalAccidents":124,"accidentHours":16554000,"accidentRate":4.31,"fatalAccidentRate":0.75},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":725,"fatalAccidents":148,"accidentHours":16474000,"accidentRate":4.4,"fatalAccidentRate":0.9},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":722,"fatalAccidents":146,"accidentHours":17375000,"accidentRate":4.16,"fatalAccidentRate":0.84},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":760,"fatalAccidents":117,"accidentHours":18277000,"accidentRate":4.16,"fatalAccidentRate":0.64},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":709,"fatalAccidents":128,"accidentHours":18092000,"accidentRate":3.92,"fatalAccidentRate":0.71}],"1.10":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":921,"fatalAccidents":176,"accidentHours":19777000,"accidentRate":4.66,"fatalAccidentRate":0.89},{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":873,"fatalAccidents":174,"accidentHours":17892000,"accidentRate":4.88,"fatalAccidentRate":0.97},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":882,"fatalAccidents":170,"accidentHours":18423000,"accidentRate":4.79,"fatalAccidentRate":0.92},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":916,"fatalAccidents":184,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":864,"fatalAccidents":167,"accidentHours":17758000,"accidentRate":4.87,"fatalAccidentRate":0.94},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":714,"fatalAccidents":124,"accidentHours":16554000,"accidentRate":4.31,"fatalAccidentRate":0.75},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":725,"fatalAccidents":148,"accidentHours":16474000,"accidentRate":4.4,"fatalAccidentRate":0.9},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":722,"fatalAccidents":146,"accidentHours":17375000,"accidentRate":4.16,"fatalAccidentRate":0.84},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":760,"fatalAccidents":117,"accidentHours":18277000,"accidentRate":4.16,"fatalAccidentRate":0.64},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":709,"fatalAccidents":128,"accidentHours":18092000,"accidentRate":3.92,"fatalAccidentRate":0.71}],"1.11":[{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Landing","totalAccidents":314,"fatalAccidents":3,"fatalities":3,"pctAccidents":44.3,"pctFatalAccidents":2.3,"pctFatalities":1.4,"lethality":1},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Take-off","totalAccidents":113,"fatalAccidents":21,"fatalities":39,"pctAccidents":15.9,"pctFatalAccidents":16.4,"pctFatalities":17.8,"lethality":18.6},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Other","totalAccidents":105,"fatalAccidents":27,"fatalities":38,"pctAccidents":14.8,"pctFatalAccidents":21.1,"pctFatalities":17.4,"lethality":25.7},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Fuel management","totalAccidents":53,"fatalAccidents":6,"fatalities":7,"pctAccidents":7.5,"pctFatalAccidents":4.7,"pctFatalities":3.2,"lethality":11.3},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Descent / approach","totalAccidents":44,"fatalAccidents":11,"fatalities":19,"pctAccidents":6.2,"pctFatalAccidents":8.6,"pctFatalities":8.7,"lethality":25},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Weather","totalAccidents":42,"fatalAccidents":32,"fatalities":69,"pctAccidents":5.9,"pctFatalAccidents":25,"pctFatalities":31.5,"lethality":76.2},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Maneuvering","totalAccidents":38,"fatalAccidents":28,"fatalities":44,"pctAccidents":5.4,"pctFatalAccidents":21.9,"pctFatalities":20.1,"lethality":73.7}],"1.1.1":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":414,"fatalAccidents":4,"accidentHours":19777000,"accidentRate":2.09,"fatalAccidentRate":0.02},{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":349,"fatalAccidents":3,"accidentHours":17892000,"accidentRate":1.95,"fatalAccidentRate":0.02},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":361,"fatalAccidents":9,"accidentHours":18423000,"accidentRate":1.96,"fatalAccidentRate":0.05},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":367,"fatalAccidents":2,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":344,"fatalAccidents":7,"accidentHours":17758000,"accidentRate":1.94,"fatalAccidentRate":0.04},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":281,"fatalAccidents":3,"accidentHours":16554000,"accidentRate":1.7,"fatalAccidentRate":0.02},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":279,"fatalAccidents":5,"accidentHours":16474000,"accidentRate":1.69,"fatalAccidentRate":0.03},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":260,"fatalAccidents":1,"accidentHours":17375000,"accidentRate":1.5,"fatalAccidentRate":0.01},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":335,"fatalAccidents":6,"accidentHours":18277000,"accidentRate":1.83,"fatalAccidentRate":0.03},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":314,"fatalAccidents":3,"accidentHours":18092000,"accidentRate":1.74,"fatalAccidentRate":0.02}],"1.1.2":[{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Loss of control","totalAccidents":170,"fatalAccidents":2,"fatalities":2,"pctAccidents":54.1,"pctFatalAccidents":66.7,"pctFatalities":66.7,"lethality":1.2},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- stall","totalAccidents":45,"fatalAccidents":0,"fatalities":0,"pctAccidents":14.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Hard -- other","totalAccidents":31,"fatalAccidents":0,"fatalities":0,"pctAccidents":9.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Runway conditions","totalAccidents":19,"fatalAccidents":0,"fatalities":0,"pctAccidents":6.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- long","totalAccidents":16,"fatalAccidents":1,"fatalities":1,"pctAccidents":5.1,"pctFatalAccidents":33.3,"pctFatalities":33.3,"lethality":6.3},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Gear operation","totalAccidents":15,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.8,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Short -- other","totalAccidents":8,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Unknown","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- short","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Bird or animal strike","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.1.3":[{"accidentType":"Landing","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":246,"pctAccidents":77.4,"fatalAccidents":1,"pctFatalAccidents":100,"fatalities":1,"pctFatalities":100,"lethality":0.4},{"accidentType":"Landing","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":126,"pctAccidents":39.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":48,"pctAccidents":15.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":15,"pctAccidents":4.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":17,"pctAccidents":5.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":2,"pctAccidents":0.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":7,"pctAccidents":2.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.1.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":293,"pctAccidents":93.3,"fatalAccidents":3,"pctFatalAccidents":100,"fatalities":3,"pctFatalities":100,"lethality":1},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":18,"pctAccidents":5.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":2,"pctAccidents":0.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":1,"pctAccidents":0.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.1.5":[{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":38,"pctAccidents":12.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":73,"pctAccidents":23.2,"fatalAccidents":3,"pctFatalAccidents":100,"fatalities":3,"pctFatalities":100,"lethality":4.1},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":161,"pctAccidents":51.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":5,"pctAccidents":1.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":33,"pctAccidents":10.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":4,"pctAccidents":1.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":42,"pctAccidents":13.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":70,"pctAccidents":22.3,"fatalAccidents":1,"pctFatalAccidents":33.3,"fatalities":1,"pctFatalities":33.3,"lethality":1.4},{"accidentType":"Landing","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":166,"pctAccidents":52.9,"fatalAccidents":2,"pctFatalAccidents":66.7,"fatalities":2,"pctFatalities":66.7,"lethality":1.2}],"1.2.1":[{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Other (power loss)","totalAccidents":60,"fatalAccidents":12,"fatalities":16,"pctAccidents":51.7,"pctFatalAccidents":57.1,"pctFatalities":51.6,"lethality":20},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Other","totalAccidents":36,"fatalAccidents":9,"fatalities":15,"pctAccidents":31,"pctFatalAccidents":42.9,"pctFatalities":48.4,"lethality":25},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Landing","totalAccidents":9,"fatalAccidents":0,"fatalities":0,"pctAccidents":7.8,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Take-off","totalAccidents":5,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Taxi","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Collision","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Descent / approach","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Pre-flight","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.3.1":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":134,"fatalAccidents":23,"accidentHours":19777000,"accidentRate":0.68,"fatalAccidentRate":0.12},{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":151,"fatalAccidents":22,"accidentHours":17892000,"accidentRate":0.84,"fatalAccidentRate":0.12},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":135,"fatalAccidents":23,"accidentHours":18423000,"accidentRate":0.73,"fatalAccidentRate":0.12},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":143,"fatalAccidents":25,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":145,"fatalAccidents":18,"accidentHours":17758000,"accidentRate":0.82,"fatalAccidentRate":0.1},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":119,"fatalAccidents":9,"accidentHours":16554000,"accidentRate":0.72,"fatalAccidentRate":0.05},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":115,"fatalAccidents":27,"accidentHours":16474000,"accidentRate":0.7,"fatalAccidentRate":0.16},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":108,"fatalAccidents":19,"accidentHours":17375000,"accidentRate":0.62,"fatalAccidentRate":0.11},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":123,"fatalAccidents":24,"accidentHours":18277000,"accidentRate":0.67,"fatalAccidentRate":0.13},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":113,"fatalAccidents":21,"accidentHours":18092000,"accidentRate":0.62,"fatalAccidentRate":0.12}],"1.3.2":[{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Loss of control","totalAccidents":51,"fatalAccidents":5,"fatalities":9,"pctAccidents":45.1,"pctFatalAccidents":23.8,"pctFatalities":23.1,"lethality":9.8},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Stalled or settled on take-off","totalAccidents":24,"fatalAccidents":8,"fatalities":17,"pctAccidents":21.2,"pctFatalAccidents":38.1,"pctFatalities":43.6,"lethality":33.3},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Runway conditions","totalAccidents":13,"fatalAccidents":1,"fatalities":1,"pctAccidents":11.5,"pctFatalAccidents":4.8,"pctFatalities":2.6,"lethality":7.7},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Aircraft configuration","totalAccidents":8,"fatalAccidents":2,"fatalities":3,"pctAccidents":7.1,"pctFatalAccidents":9.5,"pctFatalities":7.7,"lethality":25},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Delayed abort","totalAccidents":6,"fatalAccidents":1,"fatalities":2,"pctAccidents":5.3,"pctFatalAccidents":4.8,"pctFatalities":5.1,"lethality":16.7},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Weight / density altitude","totalAccidents":4,"fatalAccidents":2,"fatalities":3,"pctAccidents":3.5,"pctFatalAccidents":9.5,"pctFatalities":7.7,"lethality":50},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Collided with object","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":3.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Unknown","totalAccidents":3,"fatalAccidents":2,"fatalities":4,"pctAccidents":2.7,"pctFatalAccidents":9.5,"pctFatalities":10.3,"lethality":66.7}],"1.3.3":[{"accidentType":"Take-off","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":87,"pctAccidents":78.4,"fatalAccidents":11,"pctFatalAccidents":52.4,"fatalities":19,"pctFatalities":48.7,"lethality":12.6},{"accidentType":"Take-off","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":41,"pctAccidents":36.9,"fatalAccidents":3,"pctFatalAccidents":14.3,"fatalities":7,"pctFatalities":17.9,"lethality":7.3},{"accidentType":"Take-off","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":15,"pctAccidents":13.5,"fatalAccidents":7,"pctFatalAccidents":33.3,"fatalities":14,"pctFatalities":35.9,"lethality":46.7},{"accidentType":"Take-off","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":2,"pctAccidents":1.8,"fatalAccidents":2,"pctFatalAccidents":9.5,"fatalities":6,"pctFatalities":15.4,"lethality":100},{"accidentType":"Take-off","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":5,"pctAccidents":4.5,"fatalAccidents":2,"pctFatalAccidents":9.5,"fatalities":4,"pctFatalities":10.3,"lethality":40},{"accidentType":"Take-off","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":4,"pctAccidents":3.6,"fatalAccidents":1,"pctFatalAccidents":4.8,"fatalities":2,"pctFatalities":5.1,"lethality":25}],"1.3.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":108,"pctAccidents":95.6,"fatalAccidents":18,"pctFatalAccidents":85.7,"fatalities":34,"pctFatalities":87.2,"lethality":16.7},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":5,"pctAccidents":4.4,"fatalAccidents":3,"pctFatalAccidents":14.3,"fatalities":5,"pctFatalities":12.8,"lethality":60}],"1.3.5":[{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":17,"pctAccidents":15,"fatalAccidents":3,"pctFatalAccidents":14.3,"fatalities":5,"pctFatalities":12.8,"lethality":17.6},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":25,"pctAccidents":22.1,"fatalAccidents":8,"pctFatalAccidents":38.1,"fatalities":15,"pctFatalities":38.5,"lethality":32},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":60,"pctAccidents":53.1,"fatalAccidents":10,"pctFatalAccidents":47.6,"fatalities":19,"pctFatalities":48.7,"lethality":16.7},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":3,"pctAccidents":2.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":7,"pctAccidents":6.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Take-off","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":0.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Take-off","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":22,"pctAccidents":19.5,"fatalAccidents":5,"pctFatalAccidents":23.8,"fatalities":8,"pctFatalities":20.5,"lethality":22.7},{"accidentType":"Take-off","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":28,"pctAccidents":24.8,"fatalAccidents":7,"pctFatalAccidents":33.3,"fatalities":13,"pctFatalities":33.3,"lethality":25},{"accidentType":"Take-off","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":55,"pctAccidents":48.7,"fatalAccidents":15,"pctFatalAccidents":71.4,"fatalities":29,"pctFatalities":74.4,"lethality":27.3}],"1.4.1":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":75,"fatalAccidents":8,"accidentHours":19777000,"accidentRate":0.38,"fatalAccidentRate":0.04},{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":87,"fatalAccidents":15,"accidentHours":17892000,"accidentRate":0.49,"fatalAccidentRate":0.08},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":94,"fatalAccidents":13,"accidentHours":18423000,"accidentRate":0.51,"fatalAccidentRate":0.07},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":96,"fatalAccidents":14,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":79,"fatalAccidents":10,"accidentHours":17758000,"accidentRate":0.44,"fatalAccidentRate":0.06},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":69,"fatalAccidents":10,"accidentHours":16554000,"accidentRate":0.42,"fatalAccidentRate":0.06},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":77,"fatalAccidents":7,"accidentHours":16474000,"accidentRate":0.47,"fatalAccidentRate":0.04},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":81,"fatalAccidents":14,"accidentHours":17375000,"accidentRate":0.47,"fatalAccidentRate":0.08},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":67,"fatalAccidents":7,"accidentHours":18277000,"accidentRate":0.37,"fatalAccidentRate":0.04},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":53,"fatalAccidents":6,"accidentHours":18092000,"accidentRate":0.29,"fatalAccidentRate":0.03}],"1.4.2":[{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Systems operation","totalAccidents":28,"fatalAccidents":3,"fatalities":3,"pctAccidents":52.8,"pctFatalAccidents":50,"pctFatalities":42.9,"lethality":10.7},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Flight planning","totalAccidents":21,"fatalAccidents":2,"fatalities":3,"pctAccidents":39.6,"pctFatalAccidents":33.3,"pctFatalities":42.9,"lethality":9.5},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Contamination","totalAccidents":4,"fatalAccidents":1,"fatalities":1,"pctAccidents":7.5,"pctFatalAccidents":16.7,"pctFatalities":14.3,"lethality":25}],"1.4.3":[{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":30,"pctAccidents":58.8,"fatalAccidents":3,"pctFatalAccidents":60,"fatalities":4,"pctFatalities":66.7,"lethality":10},{"accidentType":"Fuel management","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":7,"pctAccidents":13.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":15,"pctAccidents":29.4,"fatalAccidents":2,"pctFatalAccidents":40,"fatalities":2,"pctFatalities":33.3,"lethality":13.3},{"accidentType":"Fuel management","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":4,"pctAccidents":7.8,"fatalAccidents":1,"pctFatalAccidents":20,"fatalities":1,"pctFatalities":16.7,"lethality":25},{"accidentType":"Fuel management","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":6,"pctAccidents":11.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":1,"pctAccidents":2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.4.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":47,"pctAccidents":88.7,"fatalAccidents":6,"pctFatalAccidents":100,"fatalities":7,"pctFatalities":100,"lethality":12.8},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":4,"pctAccidents":7.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":1,"pctAccidents":1.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":1,"pctAccidents":1.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.4.5":[{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":7,"pctAccidents":13.2,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":1,"pctFatalities":14.3,"lethality":14.3},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":21,"pctAccidents":39.6,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":1,"pctFatalities":14.3,"lethality":4.8},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":23,"pctAccidents":43.4,"fatalAccidents":4,"pctFatalAccidents":66.7,"fatalities":5,"pctFatalities":71.4,"lethality":17.4},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":1,"pctAccidents":1.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":1.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":11,"pctAccidents":20.8,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":1,"pctFatalities":14.3,"lethality":9.1},{"accidentType":"Fuel management","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":14,"pctAccidents":26.4,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":1,"pctFatalities":14.3,"lethality":7.1},{"accidentType":"Fuel management","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":32,"pctAccidents":60.4,"fatalAccidents":3,"pctFatalAccidents":50,"fatalities":3,"pctFatalities":42.9,"lethality":9.4}],"1.5.1":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":68,"fatalAccidents":46,"accidentHours":19777000,"accidentRate":0.34,"fatalAccidentRate":0.23},{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":74,"fatalAccidents":41,"accidentHours":17892000,"accidentRate":0.41,"fatalAccidentRate":0.23},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":57,"fatalAccidents":31,"accidentHours":18423000,"accidentRate":0.31,"fatalAccidentRate":0.17},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":58,"fatalAccidents":35,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":54,"fatalAccidents":31,"accidentHours":17758000,"accidentRate":0.3,"fatalAccidentRate":0.17},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":46,"fatalAccidents":25,"accidentHours":16554000,"accidentRate":0.28,"fatalAccidentRate":0.15},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":54,"fatalAccidents":29,"accidentHours":16474000,"accidentRate":0.33,"fatalAccidentRate":0.18},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":43,"fatalAccidents":32,"accidentHours":17375000,"accidentRate":0.25,"fatalAccidentRate":0.18},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":44,"fatalAccidents":25,"accidentHours":18277000,"accidentRate":0.24,"fatalAccidentRate":0.14},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":38,"fatalAccidents":28,"accidentHours":18092000,"accidentRate":0.21,"fatalAccidentRate":0.15}],"1.5.2":[{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Stall / LOC","totalAccidents":15,"fatalAccidents":12,"fatalities":20,"pctAccidents":39.5,"pctFatalAccidents":42.9,"pctFatalities":45.5,"lethality":80},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Wires / structures / terrain","totalAccidents":15,"fatalAccidents":8,"fatalities":11,"pctAccidents":39.5,"pctFatalAccidents":28.6,"pctFatalities":25,"lethality":53.3},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Aerobatics","totalAccidents":5,"fatalAccidents":5,"fatalities":8,"pctAccidents":13.2,"pctFatalAccidents":17.9,"pctFatalities":18.2,"lethality":100},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Mountains / canyons","totalAccidents":3,"fatalAccidents":3,"fatalities":5,"pctAccidents":7.9,"pctFatalAccidents":10.7,"pctFatalities":11.4,"lethality":100}],"1.5.3":[{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":27,"pctAccidents":79.4,"fatalAccidents":20,"pctFatalAccidents":74.1,"fatalities":32,"pctFatalities":74.4,"lethality":74.1},{"accidentType":"Maneuvering","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":13,"pctAccidents":38.2,"fatalAccidents":8,"pctFatalAccidents":29.6,"fatalities":12,"pctFatalities":27.9,"lethality":61.5},{"accidentType":"Maneuvering","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":3,"pctAccidents":8.8,"fatalAccidents":4,"pctFatalAccidents":14.8,"fatalities":6,"pctFatalities":14,"lethality":133.3},{"accidentType":"Maneuvering","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":2,"pctAccidents":5.9,"fatalAccidents":2,"pctFatalAccidents":7.4,"fatalities":4,"pctFatalities":9.3,"lethality":100},{"accidentType":"Maneuvering","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":1,"pctAccidents":2.9,"fatalAccidents":1,"pctFatalAccidents":3.7,"fatalities":2,"pctFatalities":4.7,"lethality":100},{"accidentType":"Maneuvering","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":2,"pctAccidents":5.9,"fatalAccidents":1,"pctFatalAccidents":3.7,"fatalities":1,"pctFatalities":2.3,"lethality":50}],"1.5.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":38,"pctAccidents":100,"fatalAccidents":28,"pctFatalAccidents":100,"fatalities":44,"pctFatalities":100,"lethality":73.7}],"1.5.5":[{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":4,"pctAccidents":10.5,"fatalAccidents":4,"pctFatalAccidents":14.3,"fatalities":6,"pctFatalities":13.6,"lethality":100},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":14,"pctAccidents":36.8,"fatalAccidents":12,"pctFatalAccidents":42.9,"fatalities":21,"pctFatalities":47.7,"lethality":85.7},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":18,"pctAccidents":47.4,"fatalAccidents":11,"pctFatalAccidents":39.3,"fatalities":16,"pctFatalities":36.4,"lethality":61.1},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":1,"pctAccidents":2.6,"fatalAccidents":1,"pctFatalAccidents":3.6,"fatalities":1,"pctFatalities":2.3,"lethality":100},{"accidentType":"Maneuvering","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":2.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Maneuvering","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":11,"pctAccidents":28.9,"fatalAccidents":10,"pctFatalAccidents":35.7,"fatalities":19,"pctFatalities":43.2,"lethality":90.9},{"accidentType":"Maneuvering","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":9,"pctAccidents":23.7,"fatalAccidents":8,"pctFatalAccidents":28.6,"fatalities":16,"pctFatalities":36.4,"lethality":88.9},{"accidentType":"Maneuvering","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":21,"pctAccidents":55.3,"fatalAccidents":18,"pctFatalAccidents":64.3,"fatalities":29,"pctFatalities":65.9,"lethality":85.7}],"1.6.1":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":53,"fatalAccidents":25,"accidentHours":19777000,"accidentRate":0.27,"fatalAccidentRate":0.13},{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":44,"fatalAccidents":17,"accidentHours":17892000,"accidentRate":0.25,"fatalAccidentRate":0.1},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":46,"fatalAccidents":25,"accidentHours":18423000,"accidentRate":0.25,"fatalAccidentRate":0.14},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":57,"fatalAccidents":25,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":52,"fatalAccidents":24,"accidentHours":17758000,"accidentRate":0.29,"fatalAccidentRate":0.14},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":32,"fatalAccidents":15,"accidentHours":16554000,"accidentRate":0.19,"fatalAccidentRate":0.09},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":46,"fatalAccidents":14,"accidentHours":16474000,"accidentRate":0.28,"fatalAccidentRate":0.08},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":44,"fatalAccidents":15,"accidentHours":17375000,"accidentRate":0.25,"fatalAccidentRate":0.09},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":39,"fatalAccidents":11,"accidentHours":18277000,"accidentRate":0.21,"fatalAccidentRate":0.06},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":44,"fatalAccidents":11,"accidentHours":18092000,"accidentRate":0.24,"fatalAccidentRate":0.06}],"1.6.2":[{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Collisions","totalAccidents":17,"fatalAccidents":2,"fatalities":3,"pctAccidents":38.6,"pctFatalAccidents":18.2,"pctFatalities":15.8,"lethality":11.8},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Loss of power","totalAccidents":10,"fatalAccidents":0,"fatalities":0,"pctAccidents":22.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Stalls / spins","totalAccidents":10,"fatalAccidents":5,"fatalities":7,"pctAccidents":22.7,"pctFatalAccidents":45.5,"pctFatalities":36.8,"lethality":50},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Deficient IAPs","totalAccidents":5,"fatalAccidents":2,"fatalities":7,"pctAccidents":11.4,"pctFatalAccidents":18.2,"pctFatalities":36.8,"lethality":40},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Gusts / wake turbulence","totalAccidents":2,"fatalAccidents":2,"fatalities":2,"pctAccidents":4.5,"pctFatalAccidents":18.2,"pctFatalities":10.5,"lethality":100}],"1.6.3":[{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":29,"pctAccidents":65.9,"fatalAccidents":4,"pctFatalAccidents":40,"fatalities":4,"pctFatalities":22.2,"lethality":13.8},{"accidentType":"Descent / approach","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":9,"pctAccidents":20.5,"fatalAccidents":1,"pctFatalAccidents":10,"fatalities":1,"pctFatalities":5.6,"lethality":11.1},{"accidentType":"Descent / approach","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":8,"pctAccidents":18.2,"fatalAccidents":3,"pctFatalAccidents":30,"fatalities":8,"pctFatalities":44.4,"lethality":37.5},{"accidentType":"Descent / approach","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":1,"pctAccidents":2.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Descent / approach","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":7,"pctAccidents":15.9,"fatalAccidents":3,"pctFatalAccidents":30,"fatalities":6,"pctFatalities":33.3,"lethality":42.9}],"1.6.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":31,"pctAccidents":70.5,"fatalAccidents":8,"pctFatalAccidents":72.7,"fatalities":12,"pctFatalities":63.2,"lethality":25.8},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":9,"pctAccidents":20.5,"fatalAccidents":2,"pctFatalAccidents":18.2,"fatalities":3,"pctFatalities":15.8,"lethality":22.2},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":2,"pctAccidents":4.5,"fatalAccidents":1,"pctFatalAccidents":9.1,"fatalities":4,"pctFatalities":21.1,"lethality":50},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":2,"pctAccidents":4.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.6.5":[{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":6,"pctAccidents":13.6,"fatalAccidents":2,"pctFatalAccidents":18.2,"fatalities":5,"pctFatalities":26.3,"lethality":33.3},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":15,"pctAccidents":34.1,"fatalAccidents":6,"pctFatalAccidents":54.5,"fatalities":10,"pctFatalities":52.6,"lethality":40},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":21,"pctAccidents":47.7,"fatalAccidents":3,"pctFatalAccidents":27.3,"fatalities":4,"pctFatalities":21.1,"lethality":14.3},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":2,"pctAccidents":4.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Descent / approach","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":7,"pctAccidents":15.9,"fatalAccidents":4,"pctFatalAccidents":36.4,"fatalities":8,"pctFatalities":42.1,"lethality":57.1},{"accidentType":"Descent / approach","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":10,"pctAccidents":22.7,"fatalAccidents":3,"pctFatalAccidents":27.3,"fatalities":7,"pctFatalities":36.8,"lethality":30},{"accidentType":"Descent / approach","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":26,"pctAccidents":59.1,"fatalAccidents":9,"pctFatalAccidents":81.8,"fatalities":17,"pctFatalities":89.5,"lethality":34.6}],"1.7.1":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":54,"fatalAccidents":37,"accidentHours":19777000,"accidentRate":0.27,"fatalAccidentRate":0.19},{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":65,"fatalAccidents":47,"accidentHours":17892000,"accidentRate":0.36,"fatalAccidentRate":0.26},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":50,"fatalAccidents":34,"accidentHours":18423000,"accidentRate":0.27,"fatalAccidentRate":0.18},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":54,"fatalAccidents":41,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":49,"fatalAccidents":36,"accidentHours":17758000,"accidentRate":0.28,"fatalAccidentRate":0.2},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":39,"fatalAccidents":28,"accidentHours":16554000,"accidentRate":0.24,"fatalAccidentRate":0.17},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":33,"fatalAccidents":28,"accidentHours":16474000,"accidentRate":0.2,"fatalAccidentRate":0.17},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":38,"fatalAccidents":30,"accidentHours":17375000,"accidentRate":0.22,"fatalAccidentRate":0.17},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":23,"fatalAccidents":13,"accidentHours":18277000,"accidentRate":0.13,"fatalAccidentRate":0.07},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":42,"fatalAccidents":32,"accidentHours":18092000,"accidentRate":0.23,"fatalAccidentRate":0.18}],"1.7.2":[{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"VFR into IMC","totalAccidents":28,"fatalAccidents":22,"fatalities":45,"pctAccidents":66.7,"pctFatalAccidents":68.8,"pctFatalities":65.2,"lethality":78.6},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Poor IFR technique","totalAccidents":7,"fatalAccidents":7,"fatalities":20,"pctAccidents":16.7,"pctFatalAccidents":21.9,"pctFatalities":29,"lethality":100},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Icing","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":7.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Unknown","totalAccidents":2,"fatalAccidents":2,"fatalities":3,"pctAccidents":4.8,"pctFatalAccidents":6.3,"pctFatalities":4.3,"lethality":100},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Thunderstorm","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.4,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Turbulence","totalAccidents":1,"fatalAccidents":1,"fatalities":1,"pctAccidents":2.4,"pctFatalAccidents":3.1,"pctFatalities":1.4,"lethality":100}],"1.7.3":[{"accidentType":"Weather","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":26,"pctAccidents":61.9,"fatalAccidents":17,"pctFatalAccidents":53.1,"fatalities":32,"pctFatalities":46.4,"lethality":65.4},{"accidentType":"Weather","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":4,"pctAccidents":9.5,"fatalAccidents":2,"pctFatalAccidents":6.3,"fatalities":2,"pctFatalities":2.9,"lethality":50},{"accidentType":"Weather","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":11,"pctAccidents":26.2,"fatalAccidents":10,"pctFatalAccidents":31.3,"fatalities":22,"pctFatalities":31.9,"lethality":90.9},{"accidentType":"Weather","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":4,"pctAccidents":9.5,"fatalAccidents":4,"pctFatalAccidents":12.5,"fatalities":13,"pctFatalities":18.8,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":5,"pctAccidents":11.9,"fatalAccidents":5,"pctFatalAccidents":15.6,"fatalities":15,"pctFatalities":21.7,"lethality":100}],"1.7.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":9,"pctAccidents":21.4,"fatalAccidents":6,"pctFatalAccidents":18.8,"fatalities":10,"pctFatalities":14.5,"lethality":66.7},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":3,"pctAccidents":7.1,"fatalAccidents":2,"pctFatalAccidents":6.3,"fatalities":4,"pctFatalities":5.8,"lethality":66.7},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":19,"pctAccidents":45.2,"fatalAccidents":15,"pctFatalAccidents":46.9,"fatalities":39,"pctFatalities":56.5,"lethality":78.9},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":9,"pctAccidents":21.4,"fatalAccidents":7,"pctFatalAccidents":21.9,"fatalities":13,"pctFatalities":18.8,"lethality":77.8},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":2,"pctAccidents":4.8,"fatalAccidents":2,"pctFatalAccidents":6.3,"fatalities":3,"pctFatalities":4.3,"lethality":100}],"1.7.5":[{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":2,"pctAccidents":4.8,"fatalAccidents":1,"pctFatalAccidents":3.1,"fatalities":4,"pctFatalities":5.8,"lethality":50},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":4,"pctAccidents":9.5,"fatalAccidents":4,"pctFatalAccidents":12.5,"fatalities":5,"pctFatalities":7.2,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":33,"pctAccidents":78.6,"fatalAccidents":24,"pctFatalAccidents":75,"fatalities":56,"pctFatalities":81.2,"lethality":72.7},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":2,"pctAccidents":4.8,"fatalAccidents":2,"pctFatalAccidents":6.3,"fatalities":3,"pctFatalities":4.3,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":1,"pctAccidents":2.4,"fatalAccidents":1,"pctFatalAccidents":3.1,"fatalities":1,"pctFatalities":1.4,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":3,"pctAccidents":7.1,"fatalAccidents":2,"pctFatalAccidents":6.3,"fatalities":4,"pctFatalities":5.8,"lethality":66.7},{"accidentType":"Weather","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":3,"pctAccidents":7.1,"fatalAccidents":2,"pctFatalAccidents":6.3,"fatalities":6,"pctFatalities":8.7,"lethality":66.7},{"accidentType":"Weather","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":20,"pctAccidents":47.6,"fatalAccidents":13,"pctFatalAccidents":40.6,"fatalities":27,"pctFatalities":39.1,"lethality":65}],"1.8.1":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":172,"fatalAccidents":15,"accidentHours":19777000,"accidentRate":0.87,"fatalAccidentRate":0.08},{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":166,"fatalAccidents":22,"accidentHours":17892000,"accidentRate":0.93,"fatalAccidentRate":0.12},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":153,"fatalAccidents":17,"accidentHours":18423000,"accidentRate":0.83,"fatalAccidentRate":0.09},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":149,"fatalAccidents":13,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":156,"fatalAccidents":11,"accidentHours":17758000,"accidentRate":0.88,"fatalAccidentRate":0.06},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":132,"fatalAccidents":12,"accidentHours":16554000,"accidentRate":0.8,"fatalAccidentRate":0.07},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":128,"fatalAccidents":16,"accidentHours":16474000,"accidentRate":0.78,"fatalAccidentRate":0.1},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":141,"fatalAccidents":17,"accidentHours":17375000,"accidentRate":0.81,"fatalAccidentRate":0.1},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":179,"fatalAccidents":16,"accidentHours":18277000,"accidentRate":0.98,"fatalAccidentRate":0.09},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":177,"fatalAccidents":13,"accidentHours":18092000,"accidentRate":0.98,"fatalAccidentRate":0.07}],"1.8.2":[{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Powerplant","totalAccidents":75,"fatalAccidents":3,"fatalities":7,"pctAccidents":42.4,"pctFatalAccidents":23.1,"pctFatalities":38.9,"lethality":4},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Fuel system","totalAccidents":39,"fatalAccidents":6,"fatalities":7,"pctAccidents":22,"pctFatalAccidents":46.2,"pctFatalities":38.9,"lethality":15.4},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Gear and brakes","totalAccidents":39,"fatalAccidents":0,"fatalities":0,"pctAccidents":22,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Airframe","totalAccidents":12,"fatalAccidents":3,"fatalities":3,"pctAccidents":6.8,"pctFatalAccidents":23.1,"pctFatalities":16.7,"lethality":25},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Electrical","totalAccidents":9,"fatalAccidents":0,"fatalities":0,"pctAccidents":5.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Unknown","totalAccidents":2,"fatalAccidents":1,"fatalities":1,"pctAccidents":1.1,"pctFatalAccidents":7.7,"pctFatalities":5.6,"lethality":50},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Instruments","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.8.3":[{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":102,"pctAccidents":60,"fatalAccidents":6,"pctFatalAccidents":50,"fatalities":6,"pctFatalities":35.3,"lethality":5.9},{"accidentType":"Mechanical","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":37,"pctAccidents":21.8,"fatalAccidents":3,"pctFatalAccidents":25,"fatalities":3,"pctFatalities":17.6,"lethality":8.1},{"accidentType":"Mechanical","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":47,"pctAccidents":27.6,"fatalAccidents":4,"pctFatalAccidents":33.3,"fatalities":9,"pctFatalities":52.9,"lethality":8.5},{"accidentType":"Mechanical","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":12,"pctAccidents":7.1,"fatalAccidents":1,"pctFatalAccidents":8.3,"fatalities":3,"pctFatalities":17.6,"lethality":8.3},{"accidentType":"Mechanical","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":17,"pctAccidents":10,"fatalAccidents":1,"pctFatalAccidents":8.3,"fatalities":1,"pctFatalities":5.9,"lethality":5.9},{"accidentType":"Mechanical","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":1,"pctAccidents":0.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":4,"pctAccidents":2.4,"fatalAccidents":1,"pctFatalAccidents":8.3,"fatalities":1,"pctFatalities":5.9,"lethality":25}],"1.8.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":156,"pctAccidents":88.1,"fatalAccidents":11,"pctFatalAccidents":84.6,"fatalities":14,"pctFatalities":77.8,"lethality":7.1},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":12,"pctAccidents":6.8,"fatalAccidents":2,"pctFatalAccidents":15.4,"fatalities":4,"pctFatalities":22.2,"lethality":16.7},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":1,"pctAccidents":0.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":8,"pctAccidents":4.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.8.5":[{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":33,"pctAccidents":18.6,"fatalAccidents":5,"pctFatalAccidents":41.7,"fatalities":8,"pctFatalities":47.1,"lethality":15.2},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":52,"pctAccidents":29.4,"fatalAccidents":3,"pctFatalAccidents":25,"fatalities":5,"pctFatalities":29.4,"lethality":5.8},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":78,"pctAccidents":44.1,"fatalAccidents":4,"pctFatalAccidents":33.3,"fatalities":4,"pctFatalities":23.5,"lethality":5.1},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":4,"pctAccidents":2.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":2,"pctAccidents":1.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":8,"pctAccidents":4.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":29,"pctAccidents":16.4,"fatalAccidents":3,"pctFatalAccidents":25,"fatalities":5,"pctFatalities":29.4,"lethality":10.3},{"accidentType":"Mechanical","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":45,"pctAccidents":25.4,"fatalAccidents":6,"pctFatalAccidents":50,"fatalities":9,"pctFatalities":52.9,"lethality":13.3},{"accidentType":"Mechanical","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":97,"pctAccidents":54.8,"fatalAccidents":9,"pctFatalAccidents":75,"fatalities":14,"pctFatalities":82.4,"lethality":9.3}],"Text-Intro-CFW":{},"2.1":{"accidents":76,"aircraft":76,"fatalAccidents":11,"lethality":14.5,"fatalities":14,"params":{"year":"2017","category":"Airplane","commercial":"Y"}},"2.2":[{"eventYear":2008,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":128,"fatalAccidents":15,"accidentHours":2802000,"accidentRate":4.57,"fatalAccidentRate":0.54},{"eventYear":2009,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":2,"accidentHours":2689000,"accidentRate":3.05,"fatalAccidentRate":0.07},{"eventYear":2010,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":6,"accidentHours":2792000,"accidentRate":2.94,"fatalAccidentRate":0.21},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":115,"fatalAccidents":16,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":8,"accidentHours":3011000,"accidentRate":2.72,"fatalAccidentRate":0.27},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":81,"fatalAccidents":11,"accidentHours":3238000,"accidentRate":2.5,"fatalAccidentRate":0.34},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":11,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":8,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":65,"fatalAccidents":19,"accidentHours":3234000,"accidentRate":2.01,"fatalAccidentRate":0.59},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":11,"accidentHours":3632000,"accidentRate":2.09,"fatalAccidentRate":0.3}],"2.3":[{"eventYear":2008,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":128,"fatalAccidents":15,"accidentHours":2802000,"accidentRate":4.57,"fatalAccidentRate":0.54},{"eventYear":2009,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":2,"accidentHours":2689000,"accidentRate":3.05,"fatalAccidentRate":0.07},{"eventYear":2010,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":6,"accidentHours":2792000,"accidentRate":2.94,"fatalAccidentRate":0.21},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":115,"fatalAccidents":16,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":8,"accidentHours":3011000,"accidentRate":2.72,"fatalAccidentRate":0.27},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":81,"fatalAccidents":11,"accidentHours":3238000,"accidentRate":2.5,"fatalAccidentRate":0.34},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":11,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":8,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":65,"fatalAccidents":19,"accidentHours":3234000,"accidentRate":2.01,"fatalAccidentRate":0.59},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":11,"accidentHours":3632000,"accidentRate":2.09,"fatalAccidentRate":0.3}],"2.4":[{"eventYear":2017,"category":"Airplane","commercial":"Y","majorCause":"Pilot-Related","sortOrder":1,"accidents":45,"pctAccidents":59.2,"fatalAccidents":8,"pctFatalAccidents":72.7,"fatalities":11,"pctFatalities":78.6,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"Y","majorCause":"Mechanical","sortOrder":2,"accidents":12,"pctAccidents":15.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"Y","majorCause":"Other/Unknown","sortOrder":3,"accidents":19,"pctAccidents":25,"fatalAccidents":3,"pctFatalAccidents":27.3,"fatalities":3,"pctFatalities":21.4,"lethality":0}],"2.5":[{"accidentType":"Total","farPart":"135","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":22,"pctAccidents":61.1,"fatalAccidents":2,"pctFatalAccidents":40,"fatalities":2,"pctFatalities":25,"lethality":9.1},{"accidentType":"Total","farPart":"137","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":40,"pctAccidents":100,"fatalAccidents":6,"pctFatalAccidents":100,"fatalities":6,"pctFatalities":100,"lethality":15},{"accidentType":"Total","farPart":"135","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":6,"pctAccidents":16.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":38,"pctAccidents":95,"fatalAccidents":6,"pctFatalAccidents":100,"fatalities":6,"pctFatalities":100,"lethality":15.8},{"accidentType":"Total","farPart":"135","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":4,"pctAccidents":11.1,"fatalAccidents":1,"pctFatalAccidents":20,"fatalities":3,"pctFatalities":37.5,"lethality":25},{"accidentType":"Total","farPart":"135","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":1,"pctAccidents":2.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":9,"pctAccidents":25,"fatalAccidents":1,"pctFatalAccidents":20,"fatalities":1,"pctFatalities":12.5,"lethality":11.1},{"accidentType":"Total","farPart":"135","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":1,"pctAccidents":2.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":2.8,"fatalAccidents":1,"pctFatalAccidents":20,"fatalities":2,"pctFatalities":25,"lethality":100}],"2.6":[{"sortOrder":1,"farPart":"135","conditions":"Day VMC","accidents":25,"pctAccidents":69.4,"fatalAccidents":1,"pctFatalAccidents":20,"fatalities":1,"pctFatalities":12.5,"lethality":4},{"sortOrder":1,"farPart":"137","conditions":"Day VMC","accidents":37,"pctAccidents":92.5,"fatalAccidents":4,"pctFatalAccidents":66.7,"fatalities":4,"pctFatalities":66.7,"lethality":10.8},{"sortOrder":2,"farPart":"135","conditions":"Night VMC","accidents":2,"pctAccidents":5.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":3,"farPart":"135","conditions":"Day IMC","accidents":6,"pctAccidents":16.7,"fatalAccidents":3,"pctFatalAccidents":60,"fatalities":4,"pctFatalities":50,"lethality":50},{"sortOrder":3,"farPart":"137","conditions":"Day IMC","accidents":3,"pctAccidents":7.5,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":2,"pctFatalities":33.3,"lethality":66.7},{"sortOrder":4,"farPart":"135","conditions":"Night IMC","accidents":3,"pctAccidents":8.3,"fatalAccidents":1,"pctFatalAccidents":20,"fatalities":3,"pctFatalities":37.5,"lethality":33.3}],"2.7":[{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"ATP","accidents":12,"pctAccidents":33.3,"fatalAccidents":3,"pctFatalAccidents":60,"fatalities":6,"pctFatalities":75,"lethality":25},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"ATP","accidents":1,"pctAccidents":2.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"Commercial","accidents":24,"pctAccidents":66.7,"fatalAccidents":2,"pctFatalAccidents":40,"fatalities":2,"pctFatalities":25,"lethality":8.3},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"Commercial","accidents":39,"pctAccidents":97.5,"fatalAccidents":6,"pctFatalAccidents":100,"fatalities":6,"pctFatalities":100,"lethality":15.4},{"accidentType":"Total","farPart":"135","sortOrder":3,"certLevel":"Second pilot on board","accidents":4,"pctAccidents":11.1,"fatalAccidents":2,"pctFatalAccidents":40,"fatalities":5,"pctFatalities":62.5,"lethality":50},{"accidentType":"Total","farPart":"137","sortOrder":4,"certLevel":"CFI on board","accidents":4,"pctAccidents":10,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":1,"pctFatalities":16.7,"lethality":25},{"accidentType":"Total","farPart":"135","sortOrder":4,"certLevel":"CFI on board","accidents":18,"pctAccidents":50,"fatalAccidents":4,"pctFatalAccidents":80,"fatalities":6,"pctFatalities":75,"lethality":22.2},{"accidentType":"Total","farPart":"135","sortOrder":5,"certLevel":"IFR pilot on board","accidents":36,"pctAccidents":100,"fatalAccidents":5,"pctFatalAccidents":100,"fatalities":8,"pctFatalities":100,"lethality":13.9},{"accidentType":"Total","farPart":"137","sortOrder":5,"certLevel":"IFR pilot on board","accidents":20,"pctAccidents":50,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":2,"pctFatalities":33.3,"lethality":10}],"Text-Intro-NCH":{},"3.1":{"accidents":88,"aircraft":88,"fatalAccidents":13,"lethality":14.8,"fatalities":18,"params":{"year":"2017","category":"Helicopter","commercial":"N"}},"3.2":[{"eventYear":2017,"category":"Helicopter","commercial":"N","majorCause":"Pilot-Related","sortOrder":1,"accidents":72,"pctAccidents":81.8,"fatalAccidents":13,"pctFatalAccidents":100,"fatalities":18,"pctFatalities":100,"lethality":0},{"eventYear":2017,"category":"Helicopter","commercial":"N","majorCause":"Mechanical","sortOrder":2,"accidents":12,"pctAccidents":13.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Helicopter","commercial":"N","majorCause":"Other/Unknown","sortOrder":3,"accidents":4,"pctAccidents":4.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"3.3":[{"eventYear":2008,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":115,"fatalAccidents":23,"accidentHours":1746000,"accidentRate":6.59,"fatalAccidentRate":1.32},{"eventYear":2009,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":125,"fatalAccidents":16,"accidentHours":1744000,"accidentRate":7.17,"fatalAccidentRate":0.92},{"eventYear":2010,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":99,"fatalAccidents":20,"accidentHours":1872000,"accidentRate":5.29,"fatalAccidentRate":1.07},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":101,"fatalAccidents":11,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":124,"fatalAccidents":19,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":104,"fatalAccidents":20,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":107,"fatalAccidents":14,"accidentHours":1719000,"accidentRate":6.22,"fatalAccidentRate":0.81},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":90,"fatalAccidents":10,"accidentHours":1748000,"accidentRate":5.15,"fatalAccidentRate":0.57},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":77,"fatalAccidents":12,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":88,"fatalAccidents":13,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7}],"3.4":[{"eventYear":2008,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":115,"fatalAccidents":23,"accidentHours":1746000,"accidentRate":6.59,"fatalAccidentRate":1.32},{"eventYear":2009,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":125,"fatalAccidents":16,"accidentHours":1744000,"accidentRate":7.17,"fatalAccidentRate":0.92},{"eventYear":2010,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":99,"fatalAccidents":20,"accidentHours":1872000,"accidentRate":5.29,"fatalAccidentRate":1.07},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":101,"fatalAccidents":11,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":124,"fatalAccidents":19,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":104,"fatalAccidents":20,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":107,"fatalAccidents":14,"accidentHours":1719000,"accidentRate":6.22,"fatalAccidentRate":0.81},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":90,"fatalAccidents":10,"accidentHours":1748000,"accidentRate":5.15,"fatalAccidentRate":0.57},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":77,"fatalAccidents":12,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":88,"fatalAccidents":13,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7}],"3.5":[{"accidentType":"Total","farPart":"091","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":3,"pctAccidents":3.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":62,"pctAccidents":70.5,"fatalAccidents":8,"pctFatalAccidents":61.5,"fatalities":11,"pctFatalities":61.1,"lethality":12.9},{"accidentType":"Total","farPart":"091","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":20,"pctAccidents":22.7,"fatalAccidents":3,"pctFatalAccidents":23.1,"fatalities":4,"pctFatalities":22.2,"lethality":15},{"accidentType":"Total","farPart":"091","sortOrder":4,"isAggragate":1,"aircraftClass":"Multi-engine turbine","aircraftSubClass":"Multi-engine turbine","accidents":3,"pctAccidents":3.4,"fatalAccidents":2,"pctFatalAccidents":15.4,"fatalities":3,"pctFatalities":16.7,"lethality":66.7}],"3.6":[{"sortOrder":1,"typeOperation":"Air Drop","accidents":1,"pctAccidents":1.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":1,"typeOperation":"Fire Fighting","accidents":1,"pctAccidents":1.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":1,"typeOperation":"Personal","accidents":27,"pctAccidents":30.7,"fatalAccidents":6,"pctFatalAccidents":46.2,"fatalities":8,"pctFatalities":44.4,"lethality":22.2},{"sortOrder":2,"typeOperation":"Instructional","accidents":29,"pctAccidents":33,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":2,"pctFatalities":11.1,"lethality":3.4},{"sortOrder":3,"typeOperation":"Public Use","accidents":5,"pctAccidents":5.7,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":2,"pctFatalities":11.1,"lethality":20},{"sortOrder":4,"typeOperation":"Positioning","accidents":7,"pctAccidents":8,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":1,"pctFatalities":5.6,"lethality":14.3},{"sortOrder":5,"typeOperation":"Aerial Observation","accidents":5,"pctAccidents":5.7,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":2,"pctFatalities":11.1,"lethality":20},{"sortOrder":6,"typeOperation":"Business","accidents":6,"pctAccidents":6.8,"fatalAccidents":2,"pctFatalAccidents":15.4,"fatalities":2,"pctFatalities":11.1,"lethality":33.3},{"sortOrder":8,"typeOperation":"Other work use","accidents":7,"pctAccidents":8,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":1,"pctFatalities":5.6,"lethality":14.3}],"3.7":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":77,"pctAccidents":87.5,"fatalAccidents":9,"pctFatalAccidents":69.2,"fatalities":11,"pctFatalities":61.1,"lethality":11.7},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":6,"pctAccidents":6.8,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":2,"pctFatalities":11.1,"lethality":16.7},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":2,"pctAccidents":2.3,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":1,"pctFatalities":5.6,"lethality":50},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":2,"pctAccidents":2.3,"fatalAccidents":2,"pctFatalAccidents":15.4,"fatalities":4,"pctFatalities":22.2,"lethality":100},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":1,"pctAccidents":1.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"3.8":[{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":15,"pctAccidents":17,"fatalAccidents":2,"pctFatalAccidents":15.4,"fatalities":3,"pctFatalities":16.7,"lethality":13.3},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":47,"pctAccidents":53.4,"fatalAccidents":7,"pctFatalAccidents":53.8,"fatalities":10,"pctFatalities":55.6,"lethality":14.9},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":20,"pctAccidents":22.7,"fatalAccidents":4,"pctFatalAccidents":30.8,"fatalities":5,"pctFatalities":27.8,"lethality":20},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":4,"pctAccidents":4.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":2,"pctAccidents":2.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":26,"pctAccidents":29.5,"fatalAccidents":2,"pctFatalAccidents":15.4,"fatalities":4,"pctFatalities":22.2,"lethality":7.7},{"accidentType":"Total","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":43,"pctAccidents":48.9,"fatalAccidents":4,"pctFatalAccidents":30.8,"fatalities":7,"pctFatalities":38.9,"lethality":9.3},{"accidentType":"Total","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":60,"pctAccidents":68.2,"fatalAccidents":10,"pctFatalAccidents":76.9,"fatalities":15,"pctFatalities":83.3,"lethality":16.7}],"3.9":[{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Rotorcraft aerodynamics","totalAccidents":29,"fatalAccidents":4,"fatalities":7,"pctAccidents":33,"pctFatalAccidents":30.8,"pctFatalities":38.9,"lethality":13.8},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Mechanical","totalAccidents":12,"fatalAccidents":0,"fatalities":0,"pctAccidents":13.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Maneuvering","totalAccidents":11,"fatalAccidents":4,"fatalities":4,"pctAccidents":12.5,"pctFatalAccidents":30.8,"pctFatalities":22.2,"lethality":36.4},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Landing","totalAccidents":6,"fatalAccidents":0,"fatalities":0,"pctAccidents":6.8,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Take-off / climb","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Taxi / ground operations","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Not yet assigned","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Other / miscellaneous","totalAccidents":4,"fatalAccidents":3,"fatalities":4,"pctAccidents":4.5,"pctFatalAccidents":23.1,"pctFatalities":22.2,"lethality":75},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Pre-flight / static","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Fuel management","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"External load","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Weather","totalAccidents":2,"fatalAccidents":1,"fatalities":2,"pctAccidents":2.3,"pctFatalAccidents":7.7,"pctFatalities":11.1,"lethality":50},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Collision","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Descent / approach","totalAccidents":1,"fatalAccidents":1,"fatalities":1,"pctAccidents":1.1,"pctFatalAccidents":7.7,"pctFatalities":5.6,"lethality":100}],"Text-Intro-CH":{},"4.1":{"accidents":38,"aircraft":38,"fatalAccidents":5,"lethality":13.2,"fatalities":11,"params":{"year":"2017","category":"Helicopter","commercial":"Y"}},"4.2":[{"eventYear":2017,"category":"Helicopter","commercial":"Y","majorCause":"Pilot-Related","sortOrder":1,"accidents":28,"pctAccidents":73.7,"fatalAccidents":4,"pctFatalAccidents":80,"fatalities":7,"pctFatalities":63.6,"lethality":0},{"eventYear":2017,"category":"Helicopter","commercial":"Y","majorCause":"Mechanical","sortOrder":2,"accidents":4,"pctAccidents":10.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Helicopter","commercial":"Y","majorCause":"Other/Unknown","sortOrder":3,"accidents":6,"pctAccidents":15.8,"fatalAccidents":1,"pctFatalAccidents":20,"fatalities":4,"pctFatalities":36.4,"lethality":0}],"4.3":[{"eventYear":2008,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":30,"fatalAccidents":7,"accidentHours":1476000,"accidentRate":2.03,"fatalAccidentRate":0.47},{"eventYear":2009,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":30,"fatalAccidents":4,"accidentHours":1259000,"accidentRate":2.38,"fatalAccidentRate":0.32},{"eventYear":2010,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":5,"accidentHours":1533000,"accidentRate":2.22,"fatalAccidentRate":0.33},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":7,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":39,"fatalAccidents":6,"accidentHours":1525000,"accidentRate":2.56,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":7,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":37,"fatalAccidents":7,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":38,"fatalAccidents":5,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34}],"4.4":[{"eventYear":2008,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":30,"fatalAccidents":7,"accidentHours":1476000,"accidentRate":2.03,"fatalAccidentRate":0.47},{"eventYear":2009,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":30,"fatalAccidents":4,"accidentHours":1259000,"accidentRate":2.38,"fatalAccidentRate":0.32},{"eventYear":2010,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":5,"accidentHours":1533000,"accidentRate":2.22,"fatalAccidentRate":0.33},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":7,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":39,"fatalAccidents":6,"accidentHours":1525000,"accidentRate":2.56,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":7,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":37,"fatalAccidents":7,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":38,"fatalAccidents":5,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34}],"4.5":[{"accidentType":"Total","farPart":"137","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":4.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":2,"pctAccidents":16.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":1,"pctAccidents":8.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":13,"pctAccidents":59.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":5,"pctAccidents":41.7,"fatalAccidents":2,"pctFatalAccidents":66.7,"fatalities":4,"pctFatalities":50,"lethality":40},{"accidentType":"Total","farPart":"137","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":8,"pctAccidents":36.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":4,"pctAccidents":100,"fatalAccidents":2,"pctFatalAccidents":100,"fatalities":3,"pctFatalities":100,"lethality":50},{"accidentType":"Total","farPart":"135","sortOrder":4,"isAggragate":1,"aircraftClass":"Multi-engine turbine","aircraftSubClass":"Multi-engine turbine","accidents":4,"pctAccidents":33.3,"fatalAccidents":1,"pctFatalAccidents":33.3,"fatalities":4,"pctFatalities":50,"lethality":25}],"4.6":[{"sortOrder":1,"farPart":"133","conditions":"Day VMC","accidents":4,"pctAccidents":100,"fatalAccidents":2,"pctFatalAccidents":100,"fatalities":3,"pctFatalities":100,"lethality":50},{"sortOrder":1,"farPart":"135","conditions":"Day VMC","accidents":9,"pctAccidents":75,"fatalAccidents":1,"pctFatalAccidents":33.3,"fatalities":4,"pctFatalities":50,"lethality":11.1},{"sortOrder":1,"farPart":"137","conditions":"Day VMC","accidents":21,"pctAccidents":95.5,"fatalAccidents":0,"pctFatalAccidents":null,"fatalities":0,"pctFatalities":null,"lethality":0},{"sortOrder":2,"farPart":"135","conditions":"Night VMC","accidents":2,"pctAccidents":16.7,"fatalAccidents":1,"pctFatalAccidents":33.3,"fatalities":3,"pctFatalities":37.5,"lethality":50},{"sortOrder":2,"farPart":"137","conditions":"Night VMC","accidents":1,"pctAccidents":4.5,"fatalAccidents":0,"pctFatalAccidents":null,"fatalities":0,"pctFatalities":null,"lethality":0},{"sortOrder":4,"farPart":"135","conditions":"Night IMC","accidents":1,"pctAccidents":8.3,"fatalAccidents":1,"pctFatalAccidents":33.3,"fatalities":1,"pctFatalities":12.5,"lethality":100}],"4.7":{},"5.1":[{"eventYear":2008,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":224,"fatalAccidents":61,"accidentHours":19777000,"accidentRate":1.13,"fatalAccidentRate":0.31},{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":247,"fatalAccidents":70,"accidentHours":17892000,"accidentRate":1.38,"fatalAccidentRate":0.39},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":198,"fatalAccidents":47,"accidentHours":18423000,"accidentRate":1.07,"fatalAccidentRate":0.26},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":236,"fatalAccidents":59,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":222,"fatalAccidents":54,"accidentHours":17758000,"accidentRate":1.25,"fatalAccidentRate":0.3},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":161,"fatalAccidents":31,"accidentHours":16554000,"accidentRate":0.97,"fatalAccidentRate":0.19},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":195,"fatalAccidents":59,"accidentHours":16474000,"accidentRate":1.18,"fatalAccidentRate":0.36},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":166,"fatalAccidents":42,"accidentHours":17375000,"accidentRate":0.96,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":164,"fatalAccidents":30,"accidentHours":18277000,"accidentRate":0.9,"fatalAccidentRate":0.16},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":182,"fatalAccidents":32,"accidentHours":18092000,"accidentRate":1.01,"fatalAccidentRate":0.18}],"5.2":[{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Mechanical","totalAccidents":44,"fatalAccidents":6,"fatalities":6,"pctAccidents":24.2,"pctFatalAccidents":18.8,"pctFatalities":16.2,"lethality":13.6},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Landing","totalAccidents":36,"fatalAccidents":1,"fatalities":1,"pctAccidents":19.8,"pctFatalAccidents":3.1,"pctFatalities":2.7,"lethality":2.8},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Take-off","totalAccidents":28,"fatalAccidents":3,"fatalities":3,"pctAccidents":15.4,"pctFatalAccidents":9.4,"pctFatalities":8.1,"lethality":10.7},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Other (power loss)","totalAccidents":17,"fatalAccidents":5,"fatalities":6,"pctAccidents":9.3,"pctFatalAccidents":15.6,"pctFatalities":16.2,"lethality":29.4},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Other","totalAccidents":11,"fatalAccidents":3,"fatalities":3,"pctAccidents":6,"pctFatalAccidents":9.4,"pctFatalities":8.1,"lethality":27.3},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Descent / approach","totalAccidents":10,"fatalAccidents":3,"fatalities":4,"pctAccidents":5.5,"pctFatalAccidents":9.4,"pctFatalities":10.8,"lethality":30},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Maneuvering","totalAccidents":9,"fatalAccidents":5,"fatalities":6,"pctAccidents":4.9,"pctFatalAccidents":15.6,"pctFatalities":16.2,"lethality":55.6},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Go-around","totalAccidents":7,"fatalAccidents":1,"fatalities":1,"pctAccidents":3.8,"pctFatalAccidents":3.1,"pctFatalities":2.7,"lethality":14.3},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Pre-flight","totalAccidents":5,"fatalAccidents":1,"fatalities":1,"pctAccidents":2.7,"pctFatalAccidents":3.1,"pctFatalities":2.7,"lethality":20},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Taxi","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Weather","totalAccidents":3,"fatalAccidents":2,"fatalities":3,"pctAccidents":1.6,"pctFatalAccidents":6.3,"pctFatalities":8.1,"lethality":66.7},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Fuel management","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Collision","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Cruise","totalAccidents":2,"fatalAccidents":1,"fatalities":2,"pctAccidents":1.1,"pctFatalAccidents":3.1,"pctFatalities":5.4,"lethality":50},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Incapacitation","totalAccidents":2,"fatalAccidents":1,"fatalities":1,"pctAccidents":1.1,"pctFatalAccidents":3.1,"pctFatalities":2.7,"lethality":50}],"5.3":[{"accidentType":"LightSport","farPart":"091","sortOrder":0,"isAggragate":1,"aircraftClass":"E-LSA","aircraftSubClass":"E-LSA","accidents":23,"pctAccidents":12.8,"fatalAccidents":3,"pctFatalAccidents":10,"fatalities":3,"pctFatalities":8.6,"lethality":13},{"accidentType":"LightSport","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":140,"pctAccidents":77.8,"fatalAccidents":23,"pctFatalAccidents":76.7,"fatalities":27,"pctFatalities":77.1,"lethality":16.4},{"accidentType":"LightSport","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":77,"pctAccidents":42.8,"fatalAccidents":10,"pctFatalAccidents":33.3,"fatalities":12,"pctFatalities":34.3,"lethality":13},{"accidentType":"LightSport","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":16,"pctAccidents":8.9,"fatalAccidents":4,"pctFatalAccidents":13.3,"fatalities":5,"pctFatalities":14.3,"lethality":25},{"accidentType":"LightSport","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":2,"pctAccidents":1.1,"fatalAccidents":1,"pctFatalAccidents":3.3,"fatalities":1,"pctFatalities":2.9,"lethality":50},{"accidentType":"LightSport","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":1,"pctAccidents":0.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}]}`;

jsonCacheDB['2018'] = `{"Text-Intro":{},"Summary 1":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidents":1180,"aircraft":1189,"fatalAccidents":230,"fatalaties":405,"lethality":19.5,"accidentHours":17892000,"accidentRate":6.6,"fatalAccidentRate":1.29},{"eventYear":2009,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":83,"fatalAccidents":2,"fatalaties":2,"lethality":2.4,"accidentHours":2689000,"accidentRate":3.05,"fatalAccidentRate":0.07},{"eventYear":2009,"category":"Helicopter","commercial":"N","accidents":125,"aircraft":125,"fatalAccidents":16,"fatalaties":29,"lethality":12.8,"accidentHours":1744000,"accidentRate":7.17,"fatalAccidentRate":0.92},{"eventYear":2009,"category":"Helicopter","commercial":"Y","accidents":30,"aircraft":30,"fatalAccidents":3,"fatalaties":10,"lethality":10,"accidentHours":1259000,"accidentRate":2.38,"fatalAccidentRate":0.24},{"eventYear":2010,"category":"Airplane","commercial":"N","accidents":1160,"aircraft":1170,"fatalAccidents":214,"fatalaties":359,"lethality":18.4,"accidentHours":18423000,"accidentRate":6.3,"fatalAccidentRate":1.16},{"eventYear":2010,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":83,"fatalAccidents":6,"fatalaties":13,"lethality":7.3,"accidentHours":2792000,"accidentRate":2.94,"fatalAccidentRate":0.21},{"eventYear":2010,"category":"Helicopter","commercial":"N","accidents":99,"aircraft":99,"fatalAccidents":19,"fatalaties":38,"lethality":19.2,"accidentHours":1872000,"accidentRate":5.29,"fatalAccidentRate":1.01},{"eventYear":2010,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":5,"fatalaties":7,"lethality":14.7,"accidentHours":1533000,"accidentRate":2.22,"fatalAccidentRate":0.33},{"eventYear":2011,"category":"Airplane","commercial":"N","accidents":1185,"aircraft":1198,"fatalAccidents":226,"fatalaties":395,"lethality":19.1,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidents":115,"aircraft":118,"fatalAccidents":16,"fatalaties":28,"lethality":13.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidents":101,"aircraft":101,"fatalAccidents":10,"fatalaties":12,"lethality":9.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":7,"fatalaties":20,"lethality":20.6,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidents":1155,"aircraft":1164,"fatalAccidents":214,"fatalaties":332,"lethality":18.5,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.21},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":84,"fatalAccidents":8,"fatalaties":8,"lethality":9.8,"accidentHours":3011000,"accidentRate":2.72,"fatalAccidentRate":0.27},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidents":124,"aircraft":126,"fatalAccidents":19,"fatalaties":29,"lethality":15.3,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":5,"lethality":8.6,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Airplane","commercial":"N","accidents":964,"aircraft":973,"fatalAccidents":167,"fatalaties":284,"lethality":17.3,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidents":81,"aircraft":81,"fatalAccidents":11,"fatalaties":27,"lethality":13.6,"accidentHours":3238000,"accidentRate":2.5,"fatalAccidentRate":0.34},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidents":104,"aircraft":104,"fatalAccidents":20,"fatalaties":42,"lethality":19.2,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidents":39,"aircraft":39,"fatalAccidents":6,"fatalaties":7,"lethality":15.4,"accidentHours":1525000,"accidentRate":2.56,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Airplane","commercial":"N","accidents":969,"aircraft":976,"fatalAccidents":197,"fatalaties":308,"lethality":20.3,"accidentHours":16474000,"accidentRate":5.88,"fatalAccidentRate":1.2},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":11,"fatalaties":17,"lethality":16.4,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidents":107,"aircraft":107,"fatalAccidents":13,"fatalaties":21,"lethality":12.1,"accidentHours":1719000,"accidentRate":6.22,"fatalAccidentRate":0.76},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":7,"fatalaties":11,"lethality":20,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Airplane","commercial":"N","accidents":975,"aircraft":985,"fatalAccidents":196,"fatalaties":331,"lethality":20.1,"accidentHours":17375000,"accidentRate":5.61,"fatalAccidentRate":1.13},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":8,"fatalaties":16,"lethality":10.5,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidents":90,"aircraft":90,"fatalAccidents":10,"fatalaties":16,"lethality":11.1,"accidentHours":1748000,"accidentRate":5.15,"fatalAccidentRate":0.57},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidents":37,"aircraft":37,"fatalAccidents":7,"fatalaties":12,"lethality":18.9,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Airplane","commercial":"N","accidents":1050,"aircraft":1066,"fatalAccidents":159,"fatalaties":282,"lethality":15.1,"accidentHours":18277000,"accidentRate":5.74,"fatalAccidentRate":0.87},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidents":65,"aircraft":66,"fatalAccidents":19,"fatalaties":34,"lethality":29.2,"accidentHours":3234000,"accidentRate":2.01,"fatalAccidentRate":0.59},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidents":77,"aircraft":77,"fatalAccidents":12,"fatalaties":19,"lethality":15.6,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":6,"lethality":8.6,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Airplane","commercial":"N","accidents":1002,"aircraft":1012,"fatalAccidents":162,"fatalaties":268,"lethality":16.2,"accidentHours":18092000,"accidentRate":5.54,"fatalAccidentRate":0.9},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":11,"fatalaties":14,"lethality":14.5,"accidentHours":3632000,"accidentRate":2.09,"fatalAccidentRate":0.3},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidents":88,"aircraft":88,"fatalAccidents":13,"fatalaties":18,"lethality":14.8,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidents":38,"aircraft":38,"fatalAccidents":5,"fatalaties":11,"lethality":13.2,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Airplane","commercial":"N","accidents":1234,"aircraft":1048,"fatalAccidents":166,"fatalaties":273,"lethality":16.1,"accidentHours":18862725,"accidentRate":5.48,"fatalAccidentRate":0.88},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidents":63,"aircraft":63,"fatalAccidents":9,"fatalaties":13,"lethality":14.3,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.25},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidents":94,"aircraft":94,"fatalAccidents":17,"fatalaties":38,"lethality":18.1,"accidentHours":2922453,"accidentRate":3.22,"fatalAccidentRate":0.58},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":7,"fatalaties":11,"lethality":20.6,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48}],"Summary 2":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidents":1180,"aircraft":1189,"fatalAccidents":230,"fatalaties":405,"lethality":19.5,"accidentHours":17892000,"accidentRate":6.6,"fatalAccidentRate":1.29},{"eventYear":2009,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":83,"fatalAccidents":2,"fatalaties":2,"lethality":2.4,"accidentHours":2689000,"accidentRate":3.05,"fatalAccidentRate":0.07},{"eventYear":2009,"category":"Helicopter","commercial":"N","accidents":125,"aircraft":125,"fatalAccidents":16,"fatalaties":29,"lethality":12.8,"accidentHours":1744000,"accidentRate":7.17,"fatalAccidentRate":0.92},{"eventYear":2009,"category":"Helicopter","commercial":"Y","accidents":30,"aircraft":30,"fatalAccidents":3,"fatalaties":10,"lethality":10,"accidentHours":1259000,"accidentRate":2.38,"fatalAccidentRate":0.24},{"eventYear":2010,"category":"Airplane","commercial":"N","accidents":1160,"aircraft":1170,"fatalAccidents":214,"fatalaties":359,"lethality":18.4,"accidentHours":18423000,"accidentRate":6.3,"fatalAccidentRate":1.16},{"eventYear":2010,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":83,"fatalAccidents":6,"fatalaties":13,"lethality":7.3,"accidentHours":2792000,"accidentRate":2.94,"fatalAccidentRate":0.21},{"eventYear":2010,"category":"Helicopter","commercial":"N","accidents":99,"aircraft":99,"fatalAccidents":19,"fatalaties":38,"lethality":19.2,"accidentHours":1872000,"accidentRate":5.29,"fatalAccidentRate":1.01},{"eventYear":2010,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":5,"fatalaties":7,"lethality":14.7,"accidentHours":1533000,"accidentRate":2.22,"fatalAccidentRate":0.33},{"eventYear":2011,"category":"Airplane","commercial":"N","accidents":1185,"aircraft":1198,"fatalAccidents":226,"fatalaties":395,"lethality":19.1,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidents":115,"aircraft":118,"fatalAccidents":16,"fatalaties":28,"lethality":13.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidents":101,"aircraft":101,"fatalAccidents":10,"fatalaties":12,"lethality":9.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":7,"fatalaties":20,"lethality":20.6,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidents":1155,"aircraft":1164,"fatalAccidents":214,"fatalaties":332,"lethality":18.5,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.21},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":84,"fatalAccidents":8,"fatalaties":8,"lethality":9.8,"accidentHours":3011000,"accidentRate":2.72,"fatalAccidentRate":0.27},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidents":124,"aircraft":126,"fatalAccidents":19,"fatalaties":29,"lethality":15.3,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":5,"lethality":8.6,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Airplane","commercial":"N","accidents":964,"aircraft":973,"fatalAccidents":167,"fatalaties":284,"lethality":17.3,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidents":81,"aircraft":81,"fatalAccidents":11,"fatalaties":27,"lethality":13.6,"accidentHours":3238000,"accidentRate":2.5,"fatalAccidentRate":0.34},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidents":104,"aircraft":104,"fatalAccidents":20,"fatalaties":42,"lethality":19.2,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidents":39,"aircraft":39,"fatalAccidents":6,"fatalaties":7,"lethality":15.4,"accidentHours":1525000,"accidentRate":2.56,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Airplane","commercial":"N","accidents":969,"aircraft":976,"fatalAccidents":197,"fatalaties":308,"lethality":20.3,"accidentHours":16474000,"accidentRate":5.88,"fatalAccidentRate":1.2},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":11,"fatalaties":17,"lethality":16.4,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidents":107,"aircraft":107,"fatalAccidents":13,"fatalaties":21,"lethality":12.1,"accidentHours":1719000,"accidentRate":6.22,"fatalAccidentRate":0.76},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":7,"fatalaties":11,"lethality":20,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Airplane","commercial":"N","accidents":975,"aircraft":985,"fatalAccidents":196,"fatalaties":331,"lethality":20.1,"accidentHours":17375000,"accidentRate":5.61,"fatalAccidentRate":1.13},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":8,"fatalaties":16,"lethality":10.5,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidents":90,"aircraft":90,"fatalAccidents":10,"fatalaties":16,"lethality":11.1,"accidentHours":1748000,"accidentRate":5.15,"fatalAccidentRate":0.57},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidents":37,"aircraft":37,"fatalAccidents":7,"fatalaties":12,"lethality":18.9,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Airplane","commercial":"N","accidents":1050,"aircraft":1066,"fatalAccidents":159,"fatalaties":282,"lethality":15.1,"accidentHours":18277000,"accidentRate":5.74,"fatalAccidentRate":0.87},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidents":65,"aircraft":66,"fatalAccidents":19,"fatalaties":34,"lethality":29.2,"accidentHours":3234000,"accidentRate":2.01,"fatalAccidentRate":0.59},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidents":77,"aircraft":77,"fatalAccidents":12,"fatalaties":19,"lethality":15.6,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":6,"lethality":8.6,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Airplane","commercial":"N","accidents":1002,"aircraft":1012,"fatalAccidents":162,"fatalaties":268,"lethality":16.2,"accidentHours":18092000,"accidentRate":5.54,"fatalAccidentRate":0.9},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":11,"fatalaties":14,"lethality":14.5,"accidentHours":3632000,"accidentRate":2.09,"fatalAccidentRate":0.3},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidents":88,"aircraft":88,"fatalAccidents":13,"fatalaties":18,"lethality":14.8,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidents":38,"aircraft":38,"fatalAccidents":5,"fatalaties":11,"lethality":13.2,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Airplane","commercial":"N","accidents":1033,"aircraft":1048,"fatalAccidents":166,"fatalaties":273,"lethality":16.1,"accidentHours":18862725,"accidentRate":5.48,"fatalAccidentRate":0.88},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidents":63,"aircraft":63,"fatalAccidents":9,"fatalaties":13,"lethality":14.3,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.25},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidents":94,"aircraft":94,"fatalAccidents":17,"fatalaties":38,"lethality":18.1,"accidentHours":2922453,"accidentRate":3.22,"fatalAccidentRate":0.58},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":7,"fatalaties":11,"lethality":20.6,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48}],"Text-Intro-NCFW":{},"1.1":{"accidents":1033,"aircraft":1048,"fatalAccidents":166,"lethality":16.1,"fatalities":277,"params":{"year":"2018","category":"Airplane","commercial":"N"}},"1.2":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1180,"fatalAccidents":232,"accidentHours":17892000,"accidentRate":6.6,"fatalAccidentRate":1.3},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1160,"fatalAccidents":214,"accidentHours":18423000,"accidentRate":6.3,"fatalAccidentRate":1.16},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1185,"fatalAccidents":226,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1155,"fatalAccidents":214,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.21},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":964,"fatalAccidents":167,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":969,"fatalAccidents":197,"accidentHours":16474000,"accidentRate":5.88,"fatalAccidentRate":1.2},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":975,"fatalAccidents":196,"accidentHours":17375000,"accidentRate":5.61,"fatalAccidentRate":1.13},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1050,"fatalAccidents":160,"accidentHours":18277000,"accidentRate":5.74,"fatalAccidentRate":0.88},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1002,"fatalAccidents":162,"accidentHours":18092000,"accidentRate":5.54,"fatalAccidentRate":0.9},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1033,"fatalAccidents":166,"accidentHours":18862725,"accidentRate":5.48,"fatalAccidentRate":0.88}],"1.3":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1180,"fatalAccidents":232,"accidentHours":17892000,"accidentRate":6.6,"fatalAccidentRate":1.3},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1160,"fatalAccidents":214,"accidentHours":18423000,"accidentRate":6.3,"fatalAccidentRate":1.16},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1185,"fatalAccidents":226,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1155,"fatalAccidents":214,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.21},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":964,"fatalAccidents":167,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":969,"fatalAccidents":197,"accidentHours":16474000,"accidentRate":5.88,"fatalAccidentRate":1.2},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":975,"fatalAccidents":196,"accidentHours":17375000,"accidentRate":5.61,"fatalAccidentRate":1.13},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1050,"fatalAccidents":160,"accidentHours":18277000,"accidentRate":5.74,"fatalAccidentRate":0.88},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1002,"fatalAccidents":162,"accidentHours":18092000,"accidentRate":5.54,"fatalAccidentRate":0.9},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1033,"fatalAccidents":166,"accidentHours":18862725,"accidentRate":5.48,"fatalAccidentRate":0.88}],"1.4":[{"eventYear":2018,"category":"Airplane","commercial":"N","majorCause":"Pilot-Related","sortOrder":1,"accidents":675,"pctAccidents":65.5,"fatalAccidents":89,"pctFatalAccidents":54.3,"fatalities":144,"pctFatalities":53.3,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","majorCause":"Mechanical","sortOrder":2,"accidents":186,"pctAccidents":18,"fatalAccidents":11,"pctFatalAccidents":6.7,"fatalities":17,"pctFatalities":6.3,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","majorCause":"Other/Unknown","sortOrder":3,"accidents":170,"pctAccidents":16.5,"fatalAccidents":64,"pctFatalAccidents":39,"fatalities":109,"pctFatalities":40.4,"lethality":0}],"1.5":[{"accidentType":"Total","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":711,"pctAccidents":68.2,"fatalAccidents":80,"pctFatalAccidents":47.9,"fatalities":114,"pctFatalities":41.8,"lethality":11.3},{"accidentType":"Total","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":295,"pctAccidents":28.3,"fatalAccidents":29,"pctFatalAccidents":17.4,"fatalities":38,"pctFatalities":13.9,"lethality":9.8},{"accidentType":"Total","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":207,"pctAccidents":19.9,"fatalAccidents":53,"pctFatalAccidents":31.7,"fatalities":89,"pctFatalities":32.6,"lethality":25.6},{"accidentType":"Total","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":28,"pctAccidents":2.7,"fatalAccidents":6,"pctFatalAccidents":3.6,"fatalities":14,"pctFatalities":5.1,"lethality":21.4},{"accidentType":"Total","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":91,"pctAccidents":8.7,"fatalAccidents":28,"pctFatalAccidents":16.8,"fatalities":58,"pctFatalities":21.2,"lethality":30.8},{"accidentType":"Total","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":6,"pctAccidents":0.6,"fatalAccidents":1,"pctFatalAccidents":0.6,"fatalities":1,"pctFatalities":0.4,"lethality":16.7},{"accidentType":"Total","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":33,"pctAccidents":3.2,"fatalAccidents":6,"pctFatalAccidents":3.6,"fatalities":12,"pctFatalities":4.4,"lethality":18.2}],"1.6":[{"sortOrder":1,"typeOperation":"Air Drop","accidents":1,"pctAccidents":0.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":1,"typeOperation":"Personal","accidents":769,"pctAccidents":74.4,"fatalAccidents":134,"pctFatalAccidents":80.7,"fatalities":213,"pctFatalities":78,"lethality":17.4},{"sortOrder":2,"typeOperation":"Instructional","accidents":172,"pctAccidents":16.7,"fatalAccidents":12,"pctFatalAccidents":7.2,"fatalities":24,"pctFatalities":8.8,"lethality":7},{"sortOrder":3,"typeOperation":"Public Use","accidents":5,"pctAccidents":0.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":4,"typeOperation":"Positioning","accidents":15,"pctAccidents":1.5,"fatalAccidents":4,"pctFatalAccidents":2.4,"fatalities":7,"pctFatalities":2.6,"lethality":26.7},{"sortOrder":5,"typeOperation":"Aerial Observation","accidents":13,"pctAccidents":1.3,"fatalAccidents":3,"pctFatalAccidents":1.8,"fatalities":4,"pctFatalities":1.5,"lethality":23.1},{"sortOrder":6,"typeOperation":"Business","accidents":19,"pctAccidents":1.8,"fatalAccidents":7,"pctFatalAccidents":4.2,"fatalities":15,"pctFatalities":5.5,"lethality":36.8},{"sortOrder":7,"typeOperation":"Executive/Corporate","accidents":3,"pctAccidents":0.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":8,"typeOperation":"Other work use","accidents":28,"pctAccidents":2.7,"fatalAccidents":4,"pctFatalAccidents":2.4,"fatalities":5,"pctFatalities":1.8,"lethality":14.3},{"sortOrder":9,"typeOperation":"Other or unknown","accidents":8,"pctAccidents":0.8,"fatalAccidents":2,"pctFatalAccidents":1.2,"fatalities":5,"pctFatalities":1.8,"lethality":25}],"1.7":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":881,"pctAccidents":85.5,"fatalAccidents":109,"pctFatalAccidents":66.5,"fatalities":166,"pctFatalities":61.5,"lethality":12.4},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":85,"pctAccidents":8.2,"fatalAccidents":27,"pctFatalAccidents":16.5,"fatalities":48,"pctFatalities":17.8,"lethality":31.8},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":20,"pctAccidents":1.9,"fatalAccidents":14,"pctFatalAccidents":8.5,"fatalities":27,"pctFatalities":10,"lethality":70},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":14,"pctAccidents":1.4,"fatalAccidents":7,"pctFatalAccidents":4.3,"fatalities":13,"pctFatalities":4.8,"lethality":50},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":31,"pctAccidents":3,"fatalAccidents":7,"pctFatalAccidents":4.3,"fatalities":16,"pctFatalities":5.9,"lethality":22.6}],"1.8":[{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":156,"pctAccidents":14.9,"fatalAccidents":25,"pctFatalAccidents":15.5,"fatalities":41,"pctFatalities":15.7,"lethality":16},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":249,"pctAccidents":23.8,"fatalAccidents":46,"pctFatalAccidents":28.6,"fatalities":75,"pctFatalities":28.7,"lethality":18.5},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":489,"pctAccidents":46.7,"fatalAccidents":83,"pctFatalAccidents":51.6,"fatalities":137,"pctFatalities":52.5,"lethality":17},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":26,"pctAccidents":2.5,"fatalAccidents":2,"pctFatalAccidents":1.2,"fatalities":2,"pctFatalities":0.8,"lethality":7.7},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":92,"pctAccidents":8.8,"fatalAccidents":5,"pctFatalAccidents":3.1,"fatalities":6,"pctFatalities":2.3,"lethality":5.4},{"accidentType":"Total","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":36,"pctAccidents":3.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":159,"pctAccidents":15.2,"fatalAccidents":34,"pctFatalAccidents":21.1,"fatalities":74,"pctFatalities":28.4,"lethality":21.4},{"accidentType":"Total","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":253,"pctAccidents":24.1,"fatalAccidents":41,"pctFatalAccidents":25.5,"fatalities":80,"pctFatalities":30.7,"lethality":16.2},{"accidentType":"Total","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":573,"pctAccidents":54.7,"fatalAccidents":104,"pctFatalAccidents":64.6,"fatalities":178,"pctFatalities":68.2,"lethality":18.2}],"1.9":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":873,"fatalAccidents":174,"accidentHours":17892000,"accidentRate":4.88,"fatalAccidentRate":0.97},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":882,"fatalAccidents":170,"accidentHours":18423000,"accidentRate":4.79,"fatalAccidentRate":0.92},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":916,"fatalAccidents":184,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":864,"fatalAccidents":167,"accidentHours":17758000,"accidentRate":4.87,"fatalAccidentRate":0.94},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":714,"fatalAccidents":124,"accidentHours":16554000,"accidentRate":4.31,"fatalAccidentRate":0.75},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":725,"fatalAccidents":148,"accidentHours":16474000,"accidentRate":4.4,"fatalAccidentRate":0.9},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":722,"fatalAccidents":146,"accidentHours":17375000,"accidentRate":4.16,"fatalAccidentRate":0.84},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":760,"fatalAccidents":117,"accidentHours":18277000,"accidentRate":4.16,"fatalAccidentRate":0.64},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":709,"fatalAccidents":128,"accidentHours":18092000,"accidentRate":3.92,"fatalAccidentRate":0.71},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":679,"fatalAccidents":89,"accidentHours":18862725,"accidentRate":3.6,"fatalAccidentRate":0.47}],"1.10":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":873,"fatalAccidents":174,"accidentHours":17892000,"accidentRate":4.88,"fatalAccidentRate":0.97},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":882,"fatalAccidents":170,"accidentHours":18423000,"accidentRate":4.79,"fatalAccidentRate":0.92},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":916,"fatalAccidents":184,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":864,"fatalAccidents":167,"accidentHours":17758000,"accidentRate":4.87,"fatalAccidentRate":0.94},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":714,"fatalAccidents":124,"accidentHours":16554000,"accidentRate":4.31,"fatalAccidentRate":0.75},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":725,"fatalAccidents":148,"accidentHours":16474000,"accidentRate":4.4,"fatalAccidentRate":0.9},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":722,"fatalAccidents":146,"accidentHours":17375000,"accidentRate":4.16,"fatalAccidentRate":0.84},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":760,"fatalAccidents":117,"accidentHours":18277000,"accidentRate":4.16,"fatalAccidentRate":0.64},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":709,"fatalAccidents":128,"accidentHours":18092000,"accidentRate":3.92,"fatalAccidentRate":0.71},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":679,"fatalAccidents":89,"accidentHours":18862725,"accidentRate":3.6,"fatalAccidentRate":0.47}],"1.11":[{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Landing","totalAccidents":322,"fatalAccidents":1,"fatalities":1,"pctAccidents":47.7,"pctFatalAccidents":1.1,"pctFatalities":0.7,"lethality":0.3},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Take-off","totalAccidents":111,"fatalAccidents":23,"fatalities":30,"pctAccidents":16.4,"pctFatalAccidents":25.8,"pctFatalities":20.8,"lethality":20.7},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Other","totalAccidents":82,"fatalAccidents":8,"fatalities":15,"pctAccidents":12.1,"pctFatalAccidents":9,"pctFatalities":10.4,"lethality":9.8},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Descent / approach","totalAccidents":58,"fatalAccidents":18,"fatalities":33,"pctAccidents":8.6,"pctFatalAccidents":20.2,"pctFatalities":22.9,"lethality":31},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Fuel management","totalAccidents":56,"fatalAccidents":7,"fatalities":8,"pctAccidents":8.3,"pctFatalAccidents":7.9,"pctFatalities":5.6,"lethality":12.5},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Maneuvering","totalAccidents":23,"fatalAccidents":11,"fatalities":17,"pctAccidents":3.4,"pctFatalAccidents":12.4,"pctFatalities":11.8,"lethality":47.8},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Weather","totalAccidents":23,"fatalAccidents":21,"fatalities":40,"pctAccidents":3.4,"pctFatalAccidents":23.6,"pctFatalities":27.8,"lethality":91.3}],"1.1.1":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":349,"fatalAccidents":3,"accidentHours":17892000,"accidentRate":1.95,"fatalAccidentRate":0.02},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":361,"fatalAccidents":9,"accidentHours":18423000,"accidentRate":1.96,"fatalAccidentRate":0.05},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":367,"fatalAccidents":2,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":344,"fatalAccidents":7,"accidentHours":17758000,"accidentRate":1.94,"fatalAccidentRate":0.04},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":281,"fatalAccidents":3,"accidentHours":16554000,"accidentRate":1.7,"fatalAccidentRate":0.02},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":279,"fatalAccidents":5,"accidentHours":16474000,"accidentRate":1.69,"fatalAccidentRate":0.03},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":260,"fatalAccidents":1,"accidentHours":17375000,"accidentRate":1.5,"fatalAccidentRate":0.01},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":335,"fatalAccidents":6,"accidentHours":18277000,"accidentRate":1.83,"fatalAccidentRate":0.03},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":314,"fatalAccidents":3,"accidentHours":18092000,"accidentRate":1.74,"fatalAccidentRate":0.02},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":322,"fatalAccidents":1,"accidentHours":18862725,"accidentRate":1.71,"fatalAccidentRate":0.01}],"1.1.2":[{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Loss of control","totalAccidents":177,"fatalAccidents":0,"fatalities":0,"pctAccidents":55,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- stall","totalAccidents":52,"fatalAccidents":1,"fatalities":1,"pctAccidents":16.1,"pctFatalAccidents":100,"pctFatalities":100,"lethality":1.9},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Hard -- other","totalAccidents":35,"fatalAccidents":0,"fatalities":0,"pctAccidents":10.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Gear operation","totalAccidents":24,"fatalAccidents":0,"fatalities":0,"pctAccidents":7.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- long","totalAccidents":12,"fatalAccidents":0,"fatalities":0,"pctAccidents":3.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Runway conditions","totalAccidents":12,"fatalAccidents":0,"fatalities":0,"pctAccidents":3.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Short -- other","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Long -- other","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Unknown","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Bird or animal strike","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.1.3":[{"accidentType":"Landing","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":246,"pctAccidents":75,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":1,"pctFatalities":50,"lethality":0.4},{"accidentType":"Landing","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":127,"pctAccidents":38.7,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":1,"pctFatalities":50,"lethality":0.8},{"accidentType":"Landing","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":48,"pctAccidents":14.6,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":1,"pctFatalities":50,"lethality":2.1},{"accidentType":"Landing","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":5,"pctAccidents":1.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":21,"pctAccidents":6.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":1,"pctAccidents":0.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":13,"pctAccidents":4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.1.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":298,"pctAccidents":92.5,"fatalAccidents":1,"pctFatalAccidents":100,"fatalities":1,"pctFatalities":100,"lethality":0.3},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":20,"pctAccidents":6.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":2,"pctAccidents":0.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":2,"pctAccidents":0.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.1.5":[{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":39,"pctAccidents":12.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":67,"pctAccidents":20.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":168,"pctAccidents":52.2,"fatalAccidents":2,"pctFatalAccidents":100,"fatalities":2,"pctFatalities":100,"lethality":1.2},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":10,"pctAccidents":3.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":38,"pctAccidents":11.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":54,"pctAccidents":16.8,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":1,"pctFatalities":50,"lethality":1.9},{"accidentType":"Landing","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":79,"pctAccidents":24.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":169,"pctAccidents":52.5,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":1,"pctFatalities":50,"lethality":0.6}],"1.2.1":[{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Other","totalAccidents":81,"fatalAccidents":48,"fatalities":84,"pctAccidents":47.6,"pctFatalAccidents":75,"pctFatalities":77.1,"lethality":59.3},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Other (power loss)","totalAccidents":37,"fatalAccidents":8,"fatalities":12,"pctAccidents":21.8,"pctFatalAccidents":12.5,"pctFatalities":11,"lethality":21.6},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Take-off","totalAccidents":11,"fatalAccidents":0,"fatalities":0,"pctAccidents":6.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Collision","totalAccidents":8,"fatalAccidents":2,"fatalities":5,"pctAccidents":4.7,"pctFatalAccidents":3.1,"pctFatalities":4.6,"lethality":25},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Landing","totalAccidents":7,"fatalAccidents":1,"fatalities":1,"pctAccidents":4.1,"pctFatalAccidents":1.6,"pctFatalities":0.9,"lethality":14.3},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Not yet assigned","totalAccidents":7,"fatalAccidents":2,"fatalities":3,"pctAccidents":4.1,"pctFatalAccidents":3.1,"pctFatalities":2.8,"lethality":28.6},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Weather","totalAccidents":5,"fatalAccidents":1,"fatalities":2,"pctAccidents":2.9,"pctFatalAccidents":1.6,"pctFatalities":1.8,"lethality":20},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Descent / approach","totalAccidents":4,"fatalAccidents":2,"fatalities":2,"pctAccidents":2.4,"pctFatalAccidents":3.1,"pctFatalities":1.8,"lethality":50},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Go-around","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.8,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Taxi","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.8,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Maneuvering","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.2,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Fuel management","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Cruise","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.3.1":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":151,"fatalAccidents":22,"accidentHours":17892000,"accidentRate":0.84,"fatalAccidentRate":0.12},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":135,"fatalAccidents":23,"accidentHours":18423000,"accidentRate":0.73,"fatalAccidentRate":0.12},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":143,"fatalAccidents":25,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":145,"fatalAccidents":18,"accidentHours":17758000,"accidentRate":0.82,"fatalAccidentRate":0.1},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":119,"fatalAccidents":9,"accidentHours":16554000,"accidentRate":0.72,"fatalAccidentRate":0.05},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":115,"fatalAccidents":27,"accidentHours":16474000,"accidentRate":0.7,"fatalAccidentRate":0.16},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":108,"fatalAccidents":19,"accidentHours":17375000,"accidentRate":0.62,"fatalAccidentRate":0.11},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":123,"fatalAccidents":24,"accidentHours":18277000,"accidentRate":0.67,"fatalAccidentRate":0.13},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":113,"fatalAccidents":21,"accidentHours":18092000,"accidentRate":0.62,"fatalAccidentRate":0.12},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":111,"fatalAccidents":23,"accidentHours":18862725,"accidentRate":0.59,"fatalAccidentRate":0.12}],"1.3.2":[{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Loss of control","totalAccidents":42,"fatalAccidents":4,"fatalities":6,"pctAccidents":37.8,"pctFatalAccidents":17.4,"pctFatalities":20,"lethality":9.5},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Stalled or settled on take-off","totalAccidents":31,"fatalAccidents":14,"fatalities":18,"pctAccidents":27.9,"pctFatalAccidents":60.9,"pctFatalities":60,"lethality":45.2},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Runway conditions","totalAccidents":11,"fatalAccidents":0,"fatalities":0,"pctAccidents":9.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Aircraft configuration","totalAccidents":9,"fatalAccidents":3,"fatalities":3,"pctAccidents":8.1,"pctFatalAccidents":13,"pctFatalities":10,"lethality":33.3},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Weight / density altitude","totalAccidents":6,"fatalAccidents":0,"fatalities":0,"pctAccidents":5.4,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Collided with object","totalAccidents":5,"fatalAccidents":1,"fatalities":2,"pctAccidents":4.5,"pctFatalAccidents":4.3,"pctFatalities":6.7,"lethality":20},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Delayed abort","totalAccidents":5,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Unknown","totalAccidents":2,"fatalAccidents":1,"fatalities":1,"pctAccidents":1.8,"pctFatalAccidents":4.3,"pctFatalities":3.3,"lethality":50}],"1.3.3":[{"accidentType":"Take-off","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":90,"pctAccidents":78.9,"fatalAccidents":15,"pctFatalAccidents":68.2,"fatalities":20,"pctFatalities":69,"lethality":16.7},{"accidentType":"Take-off","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":36,"pctAccidents":31.6,"fatalAccidents":6,"pctFatalAccidents":27.3,"fatalities":9,"pctFatalities":31,"lethality":16.7},{"accidentType":"Take-off","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":16,"pctAccidents":14,"fatalAccidents":5,"pctFatalAccidents":22.7,"fatalities":7,"pctFatalities":24.1,"lethality":31.3},{"accidentType":"Take-off","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":1,"pctAccidents":0.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Take-off","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":5,"pctAccidents":4.4,"fatalAccidents":2,"pctFatalAccidents":9.1,"fatalities":2,"pctFatalities":6.9,"lethality":40},{"accidentType":"Take-off","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":3,"pctAccidents":2.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.3.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":105,"pctAccidents":94.6,"fatalAccidents":20,"pctFatalAccidents":87,"fatalities":26,"pctFatalities":86.7,"lethality":19},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":5,"pctAccidents":4.5,"fatalAccidents":2,"pctFatalAccidents":8.7,"fatalities":3,"pctFatalities":10,"lethality":40},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":1,"pctAccidents":0.9,"fatalAccidents":1,"pctFatalAccidents":4.3,"fatalities":1,"pctFatalities":3.3,"lethality":100}],"1.3.5":[{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":14,"pctAccidents":12.6,"fatalAccidents":2,"pctFatalAccidents":8.7,"fatalities":2,"pctFatalities":6.7,"lethality":14.3},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":26,"pctAccidents":23.4,"fatalAccidents":3,"pctFatalAccidents":13,"fatalities":4,"pctFatalities":13.3,"lethality":11.5},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":56,"pctAccidents":50.5,"fatalAccidents":14,"pctFatalAccidents":60.9,"fatalities":19,"pctFatalities":63.3,"lethality":25},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":1,"pctAccidents":0.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":14,"pctAccidents":12.6,"fatalAccidents":4,"pctFatalAccidents":17.4,"fatalities":5,"pctFatalities":16.7,"lethality":28.6},{"accidentType":"Take-off","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":19,"pctAccidents":17.1,"fatalAccidents":5,"pctFatalAccidents":21.7,"fatalities":8,"pctFatalities":26.7,"lethality":26.3},{"accidentType":"Take-off","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":25,"pctAccidents":22.5,"fatalAccidents":1,"pctFatalAccidents":4.3,"fatalities":1,"pctFatalities":3.3,"lethality":4},{"accidentType":"Take-off","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":62,"pctAccidents":55.9,"fatalAccidents":10,"pctFatalAccidents":43.5,"fatalities":12,"pctFatalities":40,"lethality":16.1}],"1.4.1":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":87,"fatalAccidents":15,"accidentHours":17892000,"accidentRate":0.49,"fatalAccidentRate":0.08},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":94,"fatalAccidents":13,"accidentHours":18423000,"accidentRate":0.51,"fatalAccidentRate":0.07},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":96,"fatalAccidents":14,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":79,"fatalAccidents":10,"accidentHours":17758000,"accidentRate":0.44,"fatalAccidentRate":0.06},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":69,"fatalAccidents":10,"accidentHours":16554000,"accidentRate":0.42,"fatalAccidentRate":0.06},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":77,"fatalAccidents":7,"accidentHours":16474000,"accidentRate":0.47,"fatalAccidentRate":0.04},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":81,"fatalAccidents":14,"accidentHours":17375000,"accidentRate":0.47,"fatalAccidentRate":0.08},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":67,"fatalAccidents":7,"accidentHours":18277000,"accidentRate":0.37,"fatalAccidentRate":0.04},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":53,"fatalAccidents":6,"accidentHours":18092000,"accidentRate":0.29,"fatalAccidentRate":0.03},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":56,"fatalAccidents":7,"accidentHours":18862725,"accidentRate":0.3,"fatalAccidentRate":0.04}],"1.4.2":[{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Flight planning","totalAccidents":33,"fatalAccidents":3,"fatalities":4,"pctAccidents":58.9,"pctFatalAccidents":42.9,"pctFatalities":50,"lethality":9.1},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Systems operation","totalAccidents":22,"fatalAccidents":3,"fatalities":3,"pctAccidents":39.3,"pctFatalAccidents":42.9,"pctFatalities":37.5,"lethality":13.6},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Contamination","totalAccidents":1,"fatalAccidents":1,"fatalities":1,"pctAccidents":1.8,"pctFatalAccidents":14.3,"pctFatalities":12.5,"lethality":100}],"1.4.3":[{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":37,"pctAccidents":66.1,"fatalAccidents":4,"pctFatalAccidents":57.1,"fatalities":4,"pctFatalities":50,"lethality":10.8},{"accidentType":"Fuel management","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":14,"pctAccidents":25,"fatalAccidents":1,"pctFatalAccidents":14.3,"fatalities":1,"pctFatalities":12.5,"lethality":7.1},{"accidentType":"Fuel management","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":12,"pctAccidents":21.4,"fatalAccidents":2,"pctFatalAccidents":28.6,"fatalities":3,"pctFatalities":37.5,"lethality":16.7},{"accidentType":"Fuel management","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":1,"pctAccidents":1.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":6,"pctAccidents":10.7,"fatalAccidents":1,"pctFatalAccidents":14.3,"fatalities":1,"pctFatalities":12.5,"lethality":16.7},{"accidentType":"Fuel management","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":1.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.4.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":46,"pctAccidents":82.1,"fatalAccidents":4,"pctFatalAccidents":57.1,"fatalities":5,"pctFatalities":62.5,"lethality":8.7},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":10,"pctAccidents":17.9,"fatalAccidents":3,"pctFatalAccidents":42.9,"fatalities":3,"pctFatalities":37.5,"lethality":30}],"1.4.5":[{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":14,"pctAccidents":25,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":14,"pctAccidents":25,"fatalAccidents":4,"pctFatalAccidents":57.1,"fatalities":4,"pctFatalities":50,"lethality":28.6},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":25,"pctAccidents":44.6,"fatalAccidents":3,"pctFatalAccidents":42.9,"fatalities":4,"pctFatalities":50,"lethality":12},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":2,"pctAccidents":3.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":1.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":4,"pctAccidents":7.1,"fatalAccidents":1,"pctFatalAccidents":14.3,"fatalities":1,"pctFatalities":12.5,"lethality":25},{"accidentType":"Fuel management","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":15,"pctAccidents":26.8,"fatalAccidents":2,"pctFatalAccidents":28.6,"fatalities":2,"pctFatalities":25,"lethality":13.3},{"accidentType":"Fuel management","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":34,"pctAccidents":60.7,"fatalAccidents":5,"pctFatalAccidents":71.4,"fatalities":5,"pctFatalities":62.5,"lethality":14.7}],"1.5.1":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":74,"fatalAccidents":41,"accidentHours":17892000,"accidentRate":0.41,"fatalAccidentRate":0.23},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":57,"fatalAccidents":31,"accidentHours":18423000,"accidentRate":0.31,"fatalAccidentRate":0.17},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":58,"fatalAccidents":35,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":54,"fatalAccidents":31,"accidentHours":17758000,"accidentRate":0.3,"fatalAccidentRate":0.17},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":46,"fatalAccidents":25,"accidentHours":16554000,"accidentRate":0.28,"fatalAccidentRate":0.15},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":54,"fatalAccidents":29,"accidentHours":16474000,"accidentRate":0.33,"fatalAccidentRate":0.18},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":43,"fatalAccidents":32,"accidentHours":17375000,"accidentRate":0.25,"fatalAccidentRate":0.18},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":44,"fatalAccidents":25,"accidentHours":18277000,"accidentRate":0.24,"fatalAccidentRate":0.14},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":38,"fatalAccidents":28,"accidentHours":18092000,"accidentRate":0.21,"fatalAccidentRate":0.15},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":23,"fatalAccidents":11,"accidentHours":18862725,"accidentRate":0.12,"fatalAccidentRate":0.06}],"1.5.2":[{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Wires / structures / terrain","totalAccidents":15,"fatalAccidents":6,"fatalities":10,"pctAccidents":65.2,"pctFatalAccidents":54.5,"pctFatalities":58.8,"lethality":40},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Stall / LOC","totalAccidents":5,"fatalAccidents":3,"fatalities":5,"pctAccidents":21.7,"pctFatalAccidents":27.3,"pctFatalities":29.4,"lethality":60},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Unknown","totalAccidents":2,"fatalAccidents":1,"fatalities":1,"pctAccidents":8.7,"pctFatalAccidents":9.1,"pctFatalities":5.9,"lethality":50},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Aerobatics","totalAccidents":1,"fatalAccidents":1,"fatalities":1,"pctAccidents":4.3,"pctFatalAccidents":9.1,"pctFatalities":5.9,"lethality":100}],"1.5.3":[{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":19,"pctAccidents":79.2,"fatalAccidents":7,"pctFatalAccidents":63.6,"fatalities":8,"pctFatalities":47.1,"lethality":36.8},{"accidentType":"Maneuvering","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":11,"pctAccidents":45.8,"fatalAccidents":3,"pctFatalAccidents":27.3,"fatalities":3,"pctFatalities":17.6,"lethality":27.3},{"accidentType":"Maneuvering","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":4,"pctAccidents":16.7,"fatalAccidents":3,"pctFatalAccidents":27.3,"fatalities":6,"pctFatalities":35.3,"lethality":75},{"accidentType":"Maneuvering","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":1,"pctAccidents":4.2,"fatalAccidents":1,"pctFatalAccidents":9.1,"fatalities":3,"pctFatalities":17.6,"lethality":100}],"1.5.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":20,"pctAccidents":87,"fatalAccidents":10,"pctFatalAccidents":90.9,"fatalities":14,"pctFatalities":82.4,"lethality":50},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":3,"pctAccidents":13,"fatalAccidents":1,"pctFatalAccidents":9.1,"fatalities":3,"pctFatalities":17.6,"lethality":33.3}],"1.5.5":[{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":3,"pctAccidents":13,"fatalAccidents":2,"pctFatalAccidents":18.2,"fatalities":5,"pctFatalities":29.4,"lethality":66.7},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":9,"pctAccidents":39.1,"fatalAccidents":5,"pctFatalAccidents":45.5,"fatalities":7,"pctFatalities":41.2,"lethality":55.6},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":10,"pctAccidents":43.5,"fatalAccidents":4,"pctFatalAccidents":36.4,"fatalities":5,"pctFatalities":29.4,"lethality":40},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":1,"pctAccidents":4.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Maneuvering","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":3,"pctAccidents":13,"fatalAccidents":2,"pctFatalAccidents":18.2,"fatalities":5,"pctFatalities":29.4,"lethality":66.7},{"accidentType":"Maneuvering","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":11,"pctAccidents":47.8,"fatalAccidents":5,"pctFatalAccidents":45.5,"fatalities":9,"pctFatalities":52.9,"lethality":45.5},{"accidentType":"Maneuvering","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":16,"pctAccidents":69.6,"fatalAccidents":10,"pctFatalAccidents":90.9,"fatalities":16,"pctFatalities":94.1,"lethality":62.5}],"1.6.1":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":44,"fatalAccidents":17,"accidentHours":17892000,"accidentRate":0.25,"fatalAccidentRate":0.1},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":46,"fatalAccidents":25,"accidentHours":18423000,"accidentRate":0.25,"fatalAccidentRate":0.14},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":57,"fatalAccidents":25,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":52,"fatalAccidents":24,"accidentHours":17758000,"accidentRate":0.29,"fatalAccidentRate":0.14},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":32,"fatalAccidents":15,"accidentHours":16554000,"accidentRate":0.19,"fatalAccidentRate":0.09},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":46,"fatalAccidents":14,"accidentHours":16474000,"accidentRate":0.28,"fatalAccidentRate":0.08},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":44,"fatalAccidents":15,"accidentHours":17375000,"accidentRate":0.25,"fatalAccidentRate":0.09},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":39,"fatalAccidents":11,"accidentHours":18277000,"accidentRate":0.21,"fatalAccidentRate":0.06},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":44,"fatalAccidents":11,"accidentHours":18092000,"accidentRate":0.24,"fatalAccidentRate":0.06},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":58,"fatalAccidents":18,"accidentHours":18862725,"accidentRate":0.31,"fatalAccidentRate":0.1}],"1.6.2":[{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Collisions","totalAccidents":21,"fatalAccidents":5,"fatalities":9,"pctAccidents":36.2,"pctFatalAccidents":27.8,"pctFatalities":27.3,"lethality":23.8},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Stalls / spins","totalAccidents":20,"fatalAccidents":9,"fatalities":16,"pctAccidents":34.5,"pctFatalAccidents":50,"pctFatalities":48.5,"lethality":45},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Loss of power","totalAccidents":11,"fatalAccidents":1,"fatalities":1,"pctAccidents":19,"pctFatalAccidents":5.6,"pctFatalities":3,"lethality":9.1},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Deficient IAPs","totalAccidents":4,"fatalAccidents":3,"fatalities":7,"pctAccidents":6.9,"pctFatalAccidents":16.7,"pctFatalities":21.2,"lethality":75},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Gusts / wake turbulence","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":3.4,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.6.3":[{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":41,"pctAccidents":69.5,"fatalAccidents":11,"pctFatalAccidents":55,"fatalities":19,"pctFatalities":54.3,"lethality":26.8},{"accidentType":"Descent / approach","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":17,"pctAccidents":28.8,"fatalAccidents":4,"pctFatalAccidents":20,"fatalities":5,"pctFatalities":14.3,"lethality":23.5},{"accidentType":"Descent / approach","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":14,"pctAccidents":23.7,"fatalAccidents":7,"pctFatalAccidents":35,"fatalities":13,"pctFatalities":37.1,"lethality":50},{"accidentType":"Descent / approach","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":2,"pctAccidents":3.4,"fatalAccidents":2,"pctFatalAccidents":10,"fatalities":6,"pctFatalities":17.1,"lethality":100},{"accidentType":"Descent / approach","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":4,"pctAccidents":6.8,"fatalAccidents":2,"pctFatalAccidents":10,"fatalities":3,"pctFatalities":8.6,"lethality":50}],"1.6.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":41,"pctAccidents":70.7,"fatalAccidents":10,"pctFatalAccidents":55.6,"fatalities":16,"pctFatalities":48.5,"lethality":24.4},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":12,"pctAccidents":20.7,"fatalAccidents":4,"pctFatalAccidents":22.2,"fatalities":8,"pctFatalities":24.2,"lethality":33.3},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":3,"pctAccidents":5.2,"fatalAccidents":3,"pctFatalAccidents":16.7,"fatalities":8,"pctFatalities":24.2,"lethality":100},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":2,"pctAccidents":3.4,"fatalAccidents":1,"pctFatalAccidents":5.6,"fatalities":1,"pctFatalities":3,"lethality":50}],"1.6.5":[{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":5,"pctAccidents":8.6,"fatalAccidents":2,"pctFatalAccidents":10.5,"fatalities":2,"pctFatalities":6.1,"lethality":40},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":10,"pctAccidents":17.2,"fatalAccidents":2,"pctFatalAccidents":10.5,"fatalities":5,"pctFatalities":15.2,"lethality":20},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":35,"pctAccidents":60.3,"fatalAccidents":15,"pctFatalAccidents":78.9,"fatalities":26,"pctFatalities":78.8,"lethality":42.9},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":3,"pctAccidents":5.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":4,"pctAccidents":6.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Descent / approach","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":1.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Descent / approach","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":8,"pctAccidents":13.8,"fatalAccidents":6,"pctFatalAccidents":31.6,"fatalities":11,"pctFatalities":33.3,"lethality":75},{"accidentType":"Descent / approach","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":11,"pctAccidents":19,"fatalAccidents":4,"pctFatalAccidents":21.1,"fatalities":6,"pctFatalities":18.2,"lethality":36.4},{"accidentType":"Descent / approach","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":31,"pctAccidents":53.4,"fatalAccidents":13,"pctFatalAccidents":68.4,"fatalities":23,"pctFatalities":69.7,"lethality":41.9}],"1.7.1":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":65,"fatalAccidents":47,"accidentHours":17892000,"accidentRate":0.36,"fatalAccidentRate":0.26},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":50,"fatalAccidents":34,"accidentHours":18423000,"accidentRate":0.27,"fatalAccidentRate":0.18},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":54,"fatalAccidents":41,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":49,"fatalAccidents":36,"accidentHours":17758000,"accidentRate":0.28,"fatalAccidentRate":0.2},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":39,"fatalAccidents":28,"accidentHours":16554000,"accidentRate":0.24,"fatalAccidentRate":0.17},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":33,"fatalAccidents":28,"accidentHours":16474000,"accidentRate":0.2,"fatalAccidentRate":0.17},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":38,"fatalAccidents":30,"accidentHours":17375000,"accidentRate":0.22,"fatalAccidentRate":0.17},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":23,"fatalAccidents":13,"accidentHours":18277000,"accidentRate":0.13,"fatalAccidentRate":0.07},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":42,"fatalAccidents":32,"accidentHours":18092000,"accidentRate":0.23,"fatalAccidentRate":0.18},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":23,"fatalAccidents":21,"accidentHours":18862725,"accidentRate":0.12,"fatalAccidentRate":0.11}],"1.7.2":[{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"VFR into IMC","totalAccidents":14,"fatalAccidents":13,"fatalities":22,"pctAccidents":60.9,"pctFatalAccidents":61.9,"pctFatalities":55,"lethality":92.9},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Icing","totalAccidents":3,"fatalAccidents":2,"fatalities":4,"pctAccidents":13,"pctFatalAccidents":9.5,"pctFatalities":10,"lethality":66.7},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Poor IFR technique","totalAccidents":3,"fatalAccidents":3,"fatalities":5,"pctAccidents":13,"pctFatalAccidents":14.3,"pctFatalities":12.5,"lethality":100},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Thunderstorm","totalAccidents":1,"fatalAccidents":1,"fatalities":4,"pctAccidents":4.3,"pctFatalAccidents":4.8,"pctFatalities":10,"lethality":100},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Turbulence","totalAccidents":1,"fatalAccidents":1,"fatalities":2,"pctAccidents":4.3,"pctFatalAccidents":4.8,"pctFatalities":5,"lethality":100},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Unknown","totalAccidents":1,"fatalAccidents":1,"fatalities":3,"pctAccidents":4.3,"pctFatalAccidents":4.8,"pctFatalities":7.5,"lethality":100}],"1.7.3":[{"accidentType":"Weather","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":6,"pctAccidents":22.2,"fatalAccidents":5,"pctFatalAccidents":22.7,"fatalities":6,"pctFatalities":14.3,"lethality":83.3},{"accidentType":"Weather","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":2,"pctAccidents":7.4,"fatalAccidents":2,"pctFatalAccidents":9.1,"fatalities":3,"pctFatalities":7.1,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":9,"pctAccidents":33.3,"fatalAccidents":8,"pctFatalAccidents":36.4,"fatalities":17,"pctFatalities":40.5,"lethality":88.9},{"accidentType":"Weather","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":11,"pctAccidents":40.7,"fatalAccidents":9,"pctFatalAccidents":40.9,"fatalities":19,"pctFatalities":45.2,"lethality":81.8},{"accidentType":"Weather","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":3.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.7.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":9,"pctAccidents":39.1,"fatalAccidents":7,"pctFatalAccidents":33.3,"fatalities":12,"pctFatalities":30,"lethality":77.8},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":1,"pctAccidents":4.3,"fatalAccidents":1,"pctFatalAccidents":4.8,"fatalities":1,"pctFatalities":2.5,"lethality":100},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":7,"pctAccidents":30.4,"fatalAccidents":7,"pctFatalAccidents":33.3,"fatalities":13,"pctFatalities":32.5,"lethality":100},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":3,"pctAccidents":13,"fatalAccidents":3,"pctFatalAccidents":14.3,"fatalities":5,"pctFatalities":12.5,"lethality":100},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":3,"pctAccidents":13,"fatalAccidents":3,"pctFatalAccidents":14.3,"fatalities":9,"pctFatalities":22.5,"lethality":100}],"1.7.5":[{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":2,"pctAccidents":8.7,"fatalAccidents":2,"pctFatalAccidents":9.1,"fatalities":4,"pctFatalities":9.5,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":10,"pctAccidents":43.5,"fatalAccidents":9,"pctFatalAccidents":40.9,"fatalities":19,"pctFatalities":45.2,"lethality":90},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":11,"pctAccidents":47.8,"fatalAccidents":11,"pctFatalAccidents":50,"fatalities":19,"pctFatalities":45.2,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":5,"pctAccidents":21.7,"fatalAccidents":3,"pctFatalAccidents":13.6,"fatalities":7,"pctFatalities":16.7,"lethality":60},{"accidentType":"Weather","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":6,"pctAccidents":26.1,"fatalAccidents":5,"pctFatalAccidents":22.7,"fatalities":11,"pctFatalities":26.2,"lethality":83.3},{"accidentType":"Weather","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":20,"pctAccidents":87,"fatalAccidents":16,"pctFatalAccidents":72.7,"fatalities":31,"pctFatalities":73.8,"lethality":80}],"1.8.1":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":166,"fatalAccidents":22,"accidentHours":17892000,"accidentRate":0.93,"fatalAccidentRate":0.12},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":153,"fatalAccidents":17,"accidentHours":18423000,"accidentRate":0.83,"fatalAccidentRate":0.09},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":149,"fatalAccidents":13,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":156,"fatalAccidents":11,"accidentHours":17758000,"accidentRate":0.88,"fatalAccidentRate":0.06},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":132,"fatalAccidents":12,"accidentHours":16554000,"accidentRate":0.8,"fatalAccidentRate":0.07},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":128,"fatalAccidents":16,"accidentHours":16474000,"accidentRate":0.78,"fatalAccidentRate":0.1},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":141,"fatalAccidents":17,"accidentHours":17375000,"accidentRate":0.81,"fatalAccidentRate":0.1},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":179,"fatalAccidents":16,"accidentHours":18277000,"accidentRate":0.98,"fatalAccidentRate":0.09},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":177,"fatalAccidents":13,"accidentHours":18092000,"accidentRate":0.98,"fatalAccidentRate":0.07},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":186,"fatalAccidents":11,"accidentHours":18862725,"accidentRate":0.99,"fatalAccidentRate":0.06}],"1.8.2":[{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Powerplant","totalAccidents":117,"fatalAccidents":5,"fatalities":8,"pctAccidents":62.9,"pctFatalAccidents":45.5,"pctFatalities":47.1,"lethality":4.3},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Gear and brakes","totalAccidents":39,"fatalAccidents":0,"fatalities":0,"pctAccidents":21,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Fuel system","totalAccidents":16,"fatalAccidents":1,"fatalities":1,"pctAccidents":8.6,"pctFatalAccidents":9.1,"pctFatalities":5.9,"lethality":6.3},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Airframe","totalAccidents":7,"fatalAccidents":3,"fatalities":5,"pctAccidents":3.8,"pctFatalAccidents":27.3,"pctFatalities":29.4,"lethality":42.9},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Electrical","totalAccidents":6,"fatalAccidents":1,"fatalities":2,"pctAccidents":3.2,"pctFatalAccidents":9.1,"pctFatalities":11.8,"lethality":16.7},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Unknown","totalAccidents":1,"fatalAccidents":1,"fatalities":1,"pctAccidents":0.5,"pctFatalAccidents":9.1,"pctFatalities":5.9,"lethality":100}],"1.8.3":[{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":117,"pctAccidents":62.9,"fatalAccidents":5,"pctFatalAccidents":45.5,"fatalities":7,"pctFatalities":41.2,"lethality":4.3},{"accidentType":"Mechanical","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":35,"pctAccidents":18.8,"fatalAccidents":1,"pctFatalAccidents":9.1,"fatalities":1,"pctFatalities":5.9,"lethality":2.9},{"accidentType":"Mechanical","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":47,"pctAccidents":25.3,"fatalAccidents":5,"pctFatalAccidents":45.5,"fatalities":9,"pctFatalities":52.9,"lethality":10.6},{"accidentType":"Mechanical","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":11,"pctAccidents":5.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":18,"pctAccidents":9.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":2,"pctAccidents":1.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":4,"pctAccidents":2.2,"fatalAccidents":1,"pctFatalAccidents":9.1,"fatalities":1,"pctFatalities":5.9,"lethality":25}],"1.8.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":166,"pctAccidents":89.2,"fatalAccidents":10,"pctFatalAccidents":90.9,"fatalities":16,"pctFatalities":94.1,"lethality":6},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":9,"pctAccidents":4.8,"fatalAccidents":1,"pctFatalAccidents":9.1,"fatalities":1,"pctFatalities":5.9,"lethality":11.1},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":1,"pctAccidents":0.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":10,"pctAccidents":5.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.8.5":[{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":32,"pctAccidents":17.2,"fatalAccidents":5,"pctFatalAccidents":45.5,"fatalities":6,"pctFatalities":35.3,"lethality":15.6},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":52,"pctAccidents":28,"fatalAccidents":3,"pctFatalAccidents":27.3,"fatalities":4,"pctFatalities":23.5,"lethality":5.8},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":77,"pctAccidents":41.4,"fatalAccidents":3,"pctFatalAccidents":27.3,"fatalities":7,"pctFatalities":41.2,"lethality":3.9},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":6,"pctAccidents":3.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":9,"pctAccidents":4.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":10,"pctAccidents":5.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":21,"pctAccidents":11.3,"fatalAccidents":2,"pctFatalAccidents":18.2,"fatalities":3,"pctFatalities":17.6,"lethality":9.5},{"accidentType":"Mechanical","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":44,"pctAccidents":23.7,"fatalAccidents":5,"pctFatalAccidents":45.5,"fatalities":6,"pctFatalities":35.3,"lethality":11.4},{"accidentType":"Mechanical","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":102,"pctAccidents":54.8,"fatalAccidents":8,"pctFatalAccidents":72.7,"fatalities":10,"pctFatalities":58.8,"lethality":7.8}],"Text-Intro-CFW":{},"2.1":{"accidents":63,"aircraft":63,"fatalAccidents":10,"lethality":15.9,"fatalities":14,"params":{"year":"2018","category":"Airplane","commercial":"Y"}},"2.2":[{"eventYear":2009,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":2,"accidentHours":2689000,"accidentRate":3.05,"fatalAccidentRate":0.07},{"eventYear":2010,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":6,"accidentHours":2792000,"accidentRate":2.94,"fatalAccidentRate":0.21},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":115,"fatalAccidents":16,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":8,"accidentHours":3011000,"accidentRate":2.72,"fatalAccidentRate":0.27},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":81,"fatalAccidents":11,"accidentHours":3238000,"accidentRate":2.5,"fatalAccidentRate":0.34},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":11,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":8,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":65,"fatalAccidents":19,"accidentHours":3234000,"accidentRate":2.01,"fatalAccidentRate":0.59},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":11,"accidentHours":3632000,"accidentRate":2.09,"fatalAccidentRate":0.3},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":63,"fatalAccidents":10,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.28}],"2.3":[{"eventYear":2009,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":2,"accidentHours":2689000,"accidentRate":3.05,"fatalAccidentRate":0.07},{"eventYear":2010,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":6,"accidentHours":2792000,"accidentRate":2.94,"fatalAccidentRate":0.21},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":115,"fatalAccidents":16,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":8,"accidentHours":3011000,"accidentRate":2.72,"fatalAccidentRate":0.27},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":81,"fatalAccidents":11,"accidentHours":3238000,"accidentRate":2.5,"fatalAccidentRate":0.34},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":11,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":8,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":65,"fatalAccidents":19,"accidentHours":3234000,"accidentRate":2.01,"fatalAccidentRate":0.59},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":11,"accidentHours":3632000,"accidentRate":2.09,"fatalAccidentRate":0.3},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":63,"fatalAccidents":10,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.28}],"2.4":[{"eventYear":2018,"category":"Airplane","commercial":"Y","majorCause":"Pilot-Related","sortOrder":1,"accidents":39,"pctAccidents":61.9,"fatalAccidents":7,"pctFatalAccidents":70,"fatalities":11,"pctFatalities":78.6,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"Y","majorCause":"Mechanical","sortOrder":2,"accidents":11,"pctAccidents":17.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"Y","majorCause":"Other/Unknown","sortOrder":3,"accidents":13,"pctAccidents":20.6,"fatalAccidents":3,"pctFatalAccidents":30,"fatalities":3,"pctFatalities":21.4,"lethality":0}],"2.5":[{"accidentType":"Total","farPart":"135","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":16,"pctAccidents":69.6,"fatalAccidents":4,"pctFatalAccidents":100,"fatalities":7,"pctFatalities":100,"lethality":25},{"accidentType":"Total","farPart":"137","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":40,"pctAccidents":null,"fatalAccidents":6,"pctFatalAccidents":0,"fatalities":6,"pctFatalities":0,"lethality":15},{"accidentType":"Total","farPart":"135","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":8,"pctAccidents":34.8,"fatalAccidents":2,"pctFatalAccidents":50,"fatalities":6,"pctFatalities":85.7,"lethality":25},{"accidentType":"Total","farPart":"135","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":4,"pctAccidents":17.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":2,"pctAccidents":8.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":3,"pctAccidents":13,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"2.6":[{"sortOrder":1,"farPart":"135","conditions":"Day VMC","accidents":17,"pctAccidents":73.9,"fatalAccidents":4,"pctFatalAccidents":100,"fatalities":8,"pctFatalities":100,"lethality":23.5},{"sortOrder":1,"farPart":"137","conditions":"Day VMC","accidents":39,"pctAccidents":97.5,"fatalAccidents":6,"pctFatalAccidents":100,"fatalities":6,"pctFatalities":100,"lethality":15.4},{"sortOrder":3,"farPart":"135","conditions":"Day IMC","accidents":3,"pctAccidents":13,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":4,"farPart":"135","conditions":"Night IMC","accidents":1,"pctAccidents":4.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"135","conditions":"Unknown","accidents":2,"pctAccidents":8.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"137","conditions":"Unknown","accidents":1,"pctAccidents":2.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"2.7":[{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"ATP","accidents":11,"pctAccidents":47.8,"fatalAccidents":2,"pctFatalAccidents":50,"fatalities":2,"pctFatalities":28.6,"lethality":18.2},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"ATP","accidents":1,"pctAccidents":2.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"Commercial","accidents":11,"pctAccidents":47.8,"fatalAccidents":2,"pctFatalAccidents":50,"fatalities":5,"pctFatalities":71.4,"lethality":18.2},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"Commercial","accidents":38,"pctAccidents":95,"fatalAccidents":6,"pctFatalAccidents":100,"fatalities":6,"pctFatalities":100,"lethality":15.8},{"accidentType":"Total","farPart":"135","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":4.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":2.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":3,"certLevel":"Second pilot on board","accidents":3,"pctAccidents":13,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":4,"certLevel":"CFI on board","accidents":5,"pctAccidents":12.5,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":1,"pctFatalities":16.7,"lethality":20},{"accidentType":"Total","farPart":"135","sortOrder":4,"certLevel":"CFI on board","accidents":9,"pctAccidents":39.1,"fatalAccidents":3,"pctFatalAccidents":75,"fatalities":3,"pctFatalities":42.9,"lethality":33.3},{"accidentType":"Total","farPart":"135","sortOrder":5,"certLevel":"IFR pilot on board","accidents":18,"pctAccidents":78.3,"fatalAccidents":4,"pctFatalAccidents":100,"fatalities":8,"pctFatalities":114.3,"lethality":22.2},{"accidentType":"Total","farPart":"137","sortOrder":5,"certLevel":"IFR pilot on board","accidents":18,"pctAccidents":45,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":1,"pctFatalities":16.7,"lethality":5.6}],"Text-Intro-NCH":{},"3.1":{"accidents":94,"aircraft":94,"fatalAccidents":17,"lethality":18.1,"fatalities":38,"params":{"year":"2018","category":"Helicopter","commercial":"N"}},"3.2":[{"eventYear":2018,"category":"Helicopter","commercial":"N","majorCause":"Pilot-Related","sortOrder":1,"accidents":60,"pctAccidents":64.5,"fatalAccidents":14,"pctFatalAccidents":82.4,"fatalities":34,"pctFatalities":89.5,"lethality":0},{"eventYear":2018,"category":"Helicopter","commercial":"N","majorCause":"Mechanical","sortOrder":2,"accidents":8,"pctAccidents":8.6,"fatalAccidents":1,"pctFatalAccidents":5.9,"fatalities":1,"pctFatalities":2.6,"lethality":0},{"eventYear":2018,"category":"Helicopter","commercial":"N","majorCause":"Other/Unknown","sortOrder":3,"accidents":25,"pctAccidents":26.9,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":3,"pctFatalities":7.9,"lethality":0}],"3.3":[{"eventYear":2009,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":125,"fatalAccidents":16,"accidentHours":1744000,"accidentRate":7.17,"fatalAccidentRate":0.92},{"eventYear":2010,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":99,"fatalAccidents":20,"accidentHours":1872000,"accidentRate":5.29,"fatalAccidentRate":1.07},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":101,"fatalAccidents":11,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":124,"fatalAccidents":19,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":104,"fatalAccidents":20,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":107,"fatalAccidents":14,"accidentHours":1719000,"accidentRate":6.22,"fatalAccidentRate":0.81},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":90,"fatalAccidents":10,"accidentHours":1748000,"accidentRate":5.15,"fatalAccidentRate":0.57},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":77,"fatalAccidents":12,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":88,"fatalAccidents":13,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":94,"fatalAccidents":17,"accidentHours":2922453,"accidentRate":3.22,"fatalAccidentRate":0.58}],"3.4":[{"eventYear":2009,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":125,"fatalAccidents":16,"accidentHours":1744000,"accidentRate":7.17,"fatalAccidentRate":0.92},{"eventYear":2010,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":99,"fatalAccidents":20,"accidentHours":1872000,"accidentRate":5.29,"fatalAccidentRate":1.07},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":101,"fatalAccidents":11,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":124,"fatalAccidents":19,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":104,"fatalAccidents":20,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":107,"fatalAccidents":14,"accidentHours":1719000,"accidentRate":6.22,"fatalAccidentRate":0.81},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":90,"fatalAccidents":10,"accidentHours":1748000,"accidentRate":5.15,"fatalAccidentRate":0.57},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":77,"fatalAccidents":12,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":88,"fatalAccidents":13,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":94,"fatalAccidents":17,"accidentHours":2922453,"accidentRate":3.22,"fatalAccidentRate":0.58}],"3.5":[{"accidentType":"Total","farPart":"091","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":6,"pctAccidents":6.6,"fatalAccidents":1,"pctFatalAccidents":5.9,"fatalities":1,"pctFatalities":2.6,"lethality":16.7},{"accidentType":"Total","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":54,"pctAccidents":59.3,"fatalAccidents":4,"pctFatalAccidents":23.5,"fatalities":7,"pctFatalities":18.4,"lethality":7.4},{"accidentType":"Total","farPart":"091","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":31,"pctAccidents":34.1,"fatalAccidents":12,"pctFatalAccidents":70.6,"fatalities":30,"pctFatalities":78.9,"lethality":38.7}],"3.6":[{"sortOrder":1,"typeOperation":"Fire Fighting","accidents":1,"pctAccidents":1.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":1,"typeOperation":"Personal","accidents":35,"pctAccidents":37.2,"fatalAccidents":7,"pctFatalAccidents":41.2,"fatalities":18,"pctFatalities":47.4,"lethality":20},{"sortOrder":2,"typeOperation":"Instructional","accidents":22,"pctAccidents":23.4,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":3,"pctFatalities":7.9,"lethality":9.1},{"sortOrder":3,"typeOperation":"Public Use","accidents":2,"pctAccidents":2.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":4,"typeOperation":"Positioning","accidents":6,"pctAccidents":6.4,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":5,"pctFatalities":13.2,"lethality":33.3},{"sortOrder":5,"typeOperation":"Aerial Observation","accidents":11,"pctAccidents":11.7,"fatalAccidents":3,"pctFatalAccidents":17.6,"fatalities":5,"pctFatalities":13.2,"lethality":27.3},{"sortOrder":6,"typeOperation":"Business","accidents":6,"pctAccidents":6.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":8,"typeOperation":"Other work use","accidents":11,"pctAccidents":11.7,"fatalAccidents":3,"pctFatalAccidents":17.6,"fatalities":7,"pctFatalities":18.4,"lethality":27.3}],"3.7":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":81,"pctAccidents":87.1,"fatalAccidents":12,"pctFatalAccidents":70.6,"fatalities":20,"pctFatalities":52.6,"lethality":14.8},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":5,"pctAccidents":5.4,"fatalAccidents":4,"pctFatalAccidents":23.5,"fatalities":16,"pctFatalities":42.1,"lethality":80},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":1,"pctAccidents":1.1,"fatalAccidents":1,"pctFatalAccidents":5.9,"fatalities":2,"pctFatalities":5.3,"lethality":100},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":6,"pctAccidents":6.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"3.8":[{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":13,"pctAccidents":13.8,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":4,"pctFatalities":10.5,"lethality":15.4},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":59,"pctAccidents":62.8,"fatalAccidents":12,"pctFatalAccidents":70.6,"fatalities":27,"pctFatalities":71.1,"lethality":20.3},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":14,"pctAccidents":14.9,"fatalAccidents":3,"pctFatalAccidents":17.6,"fatalities":7,"pctFatalities":18.4,"lethality":21.4},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":2,"pctAccidents":2.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":6,"pctAccidents":6.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":19,"pctAccidents":20.2,"fatalAccidents":4,"pctFatalAccidents":23.5,"fatalities":12,"pctFatalities":31.6,"lethality":21.1},{"accidentType":"Total","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":45,"pctAccidents":47.9,"fatalAccidents":9,"pctFatalAccidents":52.9,"fatalities":21,"pctFatalities":55.3,"lethality":20},{"accidentType":"Total","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":60,"pctAccidents":63.8,"fatalAccidents":15,"pctFatalAccidents":88.2,"fatalities":36,"pctFatalities":94.7,"lethality":25}],"3.9":[{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Not yet assigned","totalAccidents":25,"fatalAccidents":2,"fatalities":3,"pctAccidents":26.9,"pctFatalAccidents":11.8,"pctFatalities":7.9,"lethality":8},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Other / miscellaneous","totalAccidents":14,"fatalAccidents":4,"fatalities":11,"pctAccidents":15.1,"pctFatalAccidents":23.5,"pctFatalities":28.9,"lethality":28.6},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Maneuvering","totalAccidents":13,"fatalAccidents":2,"fatalities":4,"pctAccidents":14,"pctFatalAccidents":11.8,"pctFatalities":10.5,"lethality":15.4},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Rotorcraft aerodynamics","totalAccidents":11,"fatalAccidents":1,"fatalities":3,"pctAccidents":11.8,"pctFatalAccidents":5.9,"pctFatalities":7.9,"lethality":9.1},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Mechanical","totalAccidents":8,"fatalAccidents":1,"fatalities":1,"pctAccidents":8.6,"pctFatalAccidents":5.9,"pctFatalities":2.6,"lethality":12.5},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Landing","totalAccidents":6,"fatalAccidents":1,"fatalities":1,"pctAccidents":6.5,"pctFatalAccidents":5.9,"pctFatalities":2.6,"lethality":16.7},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Taxi / ground operations","totalAccidents":5,"fatalAccidents":2,"fatalities":2,"pctAccidents":5.4,"pctFatalAccidents":11.8,"pctFatalities":5.3,"lethality":40},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Take-off / climb","totalAccidents":3,"fatalAccidents":1,"fatalities":3,"pctAccidents":3.2,"pctFatalAccidents":5.9,"pctFatalities":7.9,"lethality":33.3},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Weather","totalAccidents":2,"fatalAccidents":1,"fatalities":2,"pctAccidents":2.2,"pctFatalAccidents":5.9,"pctFatalities":5.3,"lethality":50},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Cruise","totalAccidents":2,"fatalAccidents":2,"fatalities":8,"pctAccidents":2.2,"pctFatalAccidents":11.8,"pctFatalities":21.1,"lethality":100},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Pre-flight / static","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.2,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Fuel management","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Collision","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"Text-Intro-CH":{},"4.1":{"accidents":34,"aircraft":34,"fatalAccidents":7,"lethality":20.6,"fatalities":11,"params":{"year":"2018","category":"Helicopter","commercial":"Y"}},"4.2":[{"eventYear":2018,"category":"Helicopter","commercial":"Y","majorCause":"Pilot-Related","sortOrder":1,"accidents":26,"pctAccidents":76.5,"fatalAccidents":4,"pctFatalAccidents":57.1,"fatalities":6,"pctFatalities":54.5,"lethality":0},{"eventYear":2018,"category":"Helicopter","commercial":"Y","majorCause":"Mechanical","sortOrder":2,"accidents":1,"pctAccidents":2.9,"fatalAccidents":1,"pctFatalAccidents":14.3,"fatalities":1,"pctFatalities":9.1,"lethality":0},{"eventYear":2018,"category":"Helicopter","commercial":"Y","majorCause":"Other/Unknown","sortOrder":3,"accidents":7,"pctAccidents":20.6,"fatalAccidents":2,"pctFatalAccidents":28.6,"fatalities":4,"pctFatalities":36.4,"lethality":0}],"4.3":[{"eventYear":2009,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":30,"fatalAccidents":4,"accidentHours":1259000,"accidentRate":2.38,"fatalAccidentRate":0.32},{"eventYear":2010,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":5,"accidentHours":1533000,"accidentRate":2.22,"fatalAccidentRate":0.33},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":7,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":39,"fatalAccidents":6,"accidentHours":1525000,"accidentRate":2.56,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":7,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":37,"fatalAccidents":7,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":38,"fatalAccidents":5,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":7,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48}],"4.4":[{"eventYear":2009,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":30,"fatalAccidents":4,"accidentHours":1259000,"accidentRate":2.38,"fatalAccidentRate":0.32},{"eventYear":2010,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":5,"accidentHours":1533000,"accidentRate":2.22,"fatalAccidentRate":0.33},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":7,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":39,"fatalAccidents":6,"accidentHours":1525000,"accidentRate":2.56,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":7,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":37,"fatalAccidents":7,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":38,"fatalAccidents":5,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":7,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48}],"4.5":[{"accidentType":"Total","farPart":"133","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":2,"pctAccidents":22.2,"fatalAccidents":1,"pctFatalAccidents":25,"fatalities":1,"pctFatalities":16.7,"lethality":50},{"accidentType":"Total","farPart":"137","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":10,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":3,"pctAccidents":21.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":1,"pctAccidents":11.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":2,"pctAccidents":14.3,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":1,"pctFatalities":25,"lethality":50},{"accidentType":"Total","farPart":"137","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":6,"pctAccidents":60,"fatalAccidents":1,"pctFatalAccidents":100,"fatalities":1,"pctFatalities":100,"lethality":16.7},{"accidentType":"Total","farPart":"135","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":5,"pctAccidents":35.7,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":3,"pctFatalities":75,"lethality":20},{"accidentType":"Total","farPart":"133","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":5,"pctAccidents":55.6,"fatalAccidents":2,"pctFatalAccidents":50,"fatalities":3,"pctFatalities":50,"lethality":40},{"accidentType":"Total","farPart":"137","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":3,"pctAccidents":30,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":4,"isAggragate":1,"aircraftClass":"Multi-engine turbine","aircraftSubClass":"Multi-engine turbine","accidents":4,"pctAccidents":28.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":4,"isAggragate":1,"aircraftClass":"Multi-engine turbine","aircraftSubClass":"Multi-engine turbine","accidents":1,"pctAccidents":11.1,"fatalAccidents":1,"pctFatalAccidents":25,"fatalities":2,"pctFatalities":33.3,"lethality":100}],"4.6":[{"sortOrder":1,"farPart":"133","conditions":"Day VMC","accidents":8,"pctAccidents":80,"fatalAccidents":3,"pctFatalAccidents":75,"fatalities":5,"pctFatalities":83.3,"lethality":37.5},{"sortOrder":1,"farPart":"135","conditions":"Day VMC","accidents":9,"pctAccidents":64.3,"fatalAccidents":2,"pctFatalAccidents":100,"fatalities":4,"pctFatalities":100,"lethality":22.2},{"sortOrder":1,"farPart":"137","conditions":"Day VMC","accidents":7,"pctAccidents":70,"fatalAccidents":1,"pctFatalAccidents":100,"fatalities":1,"pctFatalities":100,"lethality":14.3},{"sortOrder":2,"farPart":"135","conditions":"Night VMC","accidents":3,"pctAccidents":21.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":2,"farPart":"137","conditions":"Night VMC","accidents":3,"pctAccidents":30,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":3,"farPart":"135","conditions":"Day IMC","accidents":1,"pctAccidents":7.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"133","conditions":"Unknown","accidents":2,"pctAccidents":20,"fatalAccidents":1,"pctFatalAccidents":25,"fatalities":1,"pctFatalities":16.7,"lethality":50},{"sortOrder":5,"farPart":"135","conditions":"Unknown","accidents":1,"pctAccidents":7.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"4.7":[{"accidentType":"Total","farPart":"133","sortOrder":1,"certLevel":"ATP","accidents":1,"pctAccidents":10,"fatalAccidents":1,"pctFatalAccidents":33.3,"fatalities":2,"pctFatalities":40,"lethality":100},{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"ATP","accidents":2,"pctAccidents":14.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"Commercial","accidents":10,"pctAccidents":100,"fatalAccidents":1,"pctFatalAccidents":100,"fatalities":1,"pctFatalities":100,"lethality":10},{"accidentType":"Total","farPart":"133","sortOrder":1,"certLevel":"Commercial","accidents":7,"pctAccidents":70,"fatalAccidents":2,"pctFatalAccidents":66.7,"fatalities":3,"pctFatalities":60,"lethality":28.6},{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"Commercial","accidents":11,"pctAccidents":78.6,"fatalAccidents":2,"pctFatalAccidents":100,"fatalities":4,"pctFatalities":100,"lethality":18.2},{"accidentType":"Total","farPart":"133","sortOrder":2,"certLevel":"Other or unknown","accidents":2,"pctAccidents":20,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":7.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":3,"certLevel":"Second pilot on board","accidents":1,"pctAccidents":7.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":3,"certLevel":"Second pilot on board","accidents":1,"pctAccidents":10,"fatalAccidents":1,"pctFatalAccidents":33.3,"fatalities":2,"pctFatalities":40,"lethality":100},{"accidentType":"Total","farPart":"135","sortOrder":4,"certLevel":"CFI on board","accidents":8,"pctAccidents":57.1,"fatalAccidents":2,"pctFatalAccidents":100,"fatalities":4,"pctFatalities":100,"lethality":25},{"accidentType":"Total","farPart":"133","sortOrder":4,"certLevel":"CFI on board","accidents":5,"pctAccidents":50,"fatalAccidents":2,"pctFatalAccidents":66.7,"fatalities":3,"pctFatalities":60,"lethality":40},{"accidentType":"Total","farPart":"137","sortOrder":4,"certLevel":"CFI on board","accidents":7,"pctAccidents":70,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":5,"certLevel":"IFR pilot on board","accidents":8,"pctAccidents":80,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":5,"certLevel":"IFR pilot on board","accidents":7,"pctAccidents":70,"fatalAccidents":3,"pctFatalAccidents":100,"fatalities":5,"pctFatalities":100,"lethality":42.9},{"accidentType":"Total","farPart":"135","sortOrder":5,"certLevel":"IFR pilot on board","accidents":13,"pctAccidents":92.9,"fatalAccidents":2,"pctFatalAccidents":100,"fatalities":4,"pctFatalities":100,"lethality":15.4}],"5.1":[{"eventYear":2009,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":247,"fatalAccidents":70,"accidentHours":17892000,"accidentRate":1.38,"fatalAccidentRate":0.39},{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":198,"fatalAccidents":47,"accidentHours":18423000,"accidentRate":1.07,"fatalAccidentRate":0.26},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":236,"fatalAccidents":59,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":222,"fatalAccidents":54,"accidentHours":17758000,"accidentRate":1.25,"fatalAccidentRate":0.3},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":161,"fatalAccidents":31,"accidentHours":16554000,"accidentRate":0.97,"fatalAccidentRate":0.19},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":195,"fatalAccidents":59,"accidentHours":16474000,"accidentRate":1.18,"fatalAccidentRate":0.36},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":166,"fatalAccidents":42,"accidentHours":17375000,"accidentRate":0.96,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":164,"fatalAccidents":30,"accidentHours":18277000,"accidentRate":0.9,"fatalAccidentRate":0.16},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":182,"fatalAccidents":32,"accidentHours":18092000,"accidentRate":1.01,"fatalAccidentRate":0.18},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":157,"fatalAccidents":34,"accidentHours":18862725,"accidentRate":0.83,"fatalAccidentRate":0.18}],"5.2":[{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Landing","totalAccidents":36,"fatalAccidents":2,"fatalities":2,"pctAccidents":22.9,"pctFatalAccidents":5.9,"pctFatalities":4.3,"lethality":5.6},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Mechanical","totalAccidents":34,"fatalAccidents":5,"fatalities":10,"pctAccidents":21.7,"pctFatalAccidents":14.7,"pctFatalities":21.3,"lethality":14.7},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Take-off","totalAccidents":21,"fatalAccidents":6,"fatalities":8,"pctAccidents":13.4,"pctFatalAccidents":17.6,"pctFatalities":17,"lethality":28.6},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Other","totalAccidents":18,"fatalAccidents":10,"fatalities":11,"pctAccidents":11.5,"pctFatalAccidents":29.4,"pctFatalities":23.4,"lethality":55.6},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Descent / approach","totalAccidents":16,"fatalAccidents":6,"fatalities":9,"pctAccidents":10.2,"pctFatalAccidents":17.6,"pctFatalities":19.1,"lethality":37.5},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Maneuvering","totalAccidents":8,"fatalAccidents":1,"fatalities":1,"pctAccidents":5.1,"pctFatalAccidents":2.9,"pctFatalities":2.1,"lethality":12.5},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Fuel management","totalAccidents":5,"fatalAccidents":0,"fatalities":0,"pctAccidents":3.2,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Go-around","totalAccidents":5,"fatalAccidents":0,"fatalities":0,"pctAccidents":3.2,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Other (power loss)","totalAccidents":4,"fatalAccidents":1,"fatalities":1,"pctAccidents":2.5,"pctFatalAccidents":2.9,"pctFatalities":2.1,"lethality":25},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Pre-flight","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Weather","totalAccidents":3,"fatalAccidents":1,"fatalities":2,"pctAccidents":1.9,"pctFatalAccidents":2.9,"pctFatalities":4.3,"lethality":33.3},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Cruise","totalAccidents":2,"fatalAccidents":2,"fatalities":3,"pctAccidents":1.3,"pctFatalAccidents":5.9,"pctFatalities":6.4,"lethality":100},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Collision","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"5.3":[{"accidentType":"LightSport","farPart":"091","sortOrder":0,"isAggragate":1,"aircraftClass":"E-LSA","aircraftSubClass":"E-LSA","accidents":16,"pctAccidents":10.2,"fatalAccidents":2,"pctFatalAccidents":5.9,"fatalities":3,"pctFatalities":6.4,"lethality":12.5},{"accidentType":"LightSport","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":118,"pctAccidents":75.2,"fatalAccidents":27,"pctFatalAccidents":79.4,"fatalities":36,"pctFatalities":76.6,"lethality":22.9},{"accidentType":"LightSport","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":62,"pctAccidents":39.5,"fatalAccidents":14,"pctFatalAccidents":41.2,"fatalities":17,"pctFatalities":36.2,"lethality":22.6},{"accidentType":"LightSport","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":20,"pctAccidents":12.7,"fatalAccidents":4,"pctFatalAccidents":11.8,"fatalities":7,"pctFatalities":14.9,"lethality":20},{"accidentType":"LightSport","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":3,"pctAccidents":1.9,"fatalAccidents":1,"pctFatalAccidents":2.9,"fatalities":1,"pctFatalities":2.1,"lethality":33.3}]}`;
jsonCacheDB['2019'] = `{"Text-Intro":{},"Summary 1":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidents":1157,"aircraft":1167,"fatalAccidents":214,"fatalaties":359,"lethality":18.5,"accidentHours":18423000,"accidentRate":6.28,"fatalAccidentRate":1.16},{"eventYear":2010,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":83,"fatalAccidents":6,"fatalaties":13,"lethality":7.3,"accidentHours":2792000,"accidentRate":2.94,"fatalAccidentRate":0.21},{"eventYear":2010,"category":"Helicopter","commercial":"N","accidents":99,"aircraft":99,"fatalAccidents":19,"fatalaties":38,"lethality":19.2,"accidentHours":1872000,"accidentRate":5.29,"fatalAccidentRate":1.01},{"eventYear":2010,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":5,"fatalaties":7,"lethality":14.7,"accidentHours":1533000,"accidentRate":2.22,"fatalAccidentRate":0.33},{"eventYear":2011,"category":"Airplane","commercial":"N","accidents":1182,"aircraft":1195,"fatalAccidents":225,"fatalaties":394,"lethality":19,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidents":115,"aircraft":118,"fatalAccidents":16,"fatalaties":28,"lethality":13.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidents":101,"aircraft":101,"fatalAccidents":10,"fatalaties":12,"lethality":9.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidents":31,"aircraft":31,"fatalAccidents":7,"fatalaties":20,"lethality":22.6,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidents":1154,"aircraft":1163,"fatalAccidents":213,"fatalaties":329,"lethality":18.5,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidents":81,"aircraft":83,"fatalAccidents":7,"fatalaties":7,"lethality":8.6,"accidentHours":3011000,"accidentRate":2.69,"fatalAccidentRate":0.23},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidents":124,"aircraft":126,"fatalAccidents":19,"fatalaties":29,"lethality":15.3,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":5,"lethality":8.6,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Airplane","commercial":"N","accidents":964,"aircraft":973,"fatalAccidents":167,"fatalaties":284,"lethality":17.3,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidents":80,"aircraft":80,"fatalAccidents":10,"fatalaties":25,"lethality":12.5,"accidentHours":3238000,"accidentRate":2.47,"fatalAccidentRate":0.31},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidents":104,"aircraft":104,"fatalAccidents":20,"fatalaties":42,"lethality":19.2,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidents":40,"aircraft":40,"fatalAccidents":6,"fatalaties":7,"lethality":15,"accidentHours":1525000,"accidentRate":2.62,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Airplane","commercial":"N","accidents":966,"aircraft":973,"fatalAccidents":196,"fatalaties":306,"lethality":20.3,"accidentHours":16474000,"accidentRate":5.86,"fatalAccidentRate":1.19},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":11,"fatalaties":17,"lethality":16.4,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidents":106,"aircraft":106,"fatalAccidents":12,"fatalaties":19,"lethality":11.3,"accidentHours":1719000,"accidentRate":6.17,"fatalAccidentRate":0.7},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":7,"fatalaties":11,"lethality":20,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Airplane","commercial":"N","accidents":973,"aircraft":983,"fatalAccidents":195,"fatalaties":329,"lethality":20,"accidentHours":17375000,"accidentRate":5.6,"fatalAccidentRate":1.12},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":8,"fatalaties":16,"lethality":10.5,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidents":91,"aircraft":91,"fatalAccidents":11,"fatalaties":18,"lethality":12.1,"accidentHours":1748000,"accidentRate":5.21,"fatalAccidentRate":0.63},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidents":37,"aircraft":37,"fatalAccidents":7,"fatalaties":12,"lethality":18.9,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Airplane","commercial":"N","accidents":1048,"aircraft":1064,"fatalAccidents":158,"fatalaties":281,"lethality":15.1,"accidentHours":18277000,"accidentRate":5.73,"fatalAccidentRate":0.86},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidents":64,"aircraft":65,"fatalAccidents":19,"fatalaties":34,"lethality":29.7,"accidentHours":3234000,"accidentRate":1.98,"fatalAccidentRate":0.59},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidents":77,"aircraft":77,"fatalAccidents":12,"fatalaties":19,"lethality":15.6,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":6,"lethality":8.6,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Airplane","commercial":"N","accidents":1001,"aircraft":1011,"fatalAccidents":162,"fatalaties":268,"lethality":16.2,"accidentHours":18092000,"accidentRate":5.53,"fatalAccidentRate":0.9},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidents":74,"aircraft":74,"fatalAccidents":11,"fatalaties":14,"lethality":14.9,"accidentHours":3632000,"accidentRate":2.04,"fatalAccidentRate":0.3},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidents":88,"aircraft":88,"fatalAccidents":13,"fatalaties":18,"lethality":14.8,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidents":38,"aircraft":38,"fatalAccidents":5,"fatalaties":11,"lethality":13.2,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Airplane","commercial":"N","accidents":1031,"aircraft":1046,"fatalAccidents":167,"fatalaties":274,"lethality":16.2,"accidentHours":18862725,"accidentRate":5.47,"fatalAccidentRate":0.89},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidents":63,"aircraft":63,"fatalAccidents":9,"fatalaties":13,"lethality":14.3,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.25},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidents":92,"aircraft":92,"fatalAccidents":16,"fatalaties":36,"lethality":17.4,"accidentHours":1453417,"accidentRate":6.33,"fatalAccidentRate":1.1},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":7,"fatalaties":13,"lethality":20.6,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48},{"eventYear":2019,"category":"Airplane","commercial":"N","accidents":988,"aircraft":999,"fatalAccidents":179,"fatalaties":305,"lethality":18.1,"accidentHours":17587290,"accidentRate":5.62,"fatalAccidentRate":1.02},{"eventYear":2019,"category":"Airplane","commercial":"Y","accidents":57,"aircraft":59,"fatalAccidents":10,"fatalaties":19,"lethality":17.5,"accidentHours":3389706,"accidentRate":1.68,"fatalAccidentRate":0.3},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidents":81,"aircraft":82,"fatalAccidents":14,"fatalaties":21,"lethality":17.3,"accidentHours":1425895,"accidentRate":5.68,"fatalAccidentRate":0.98},{"eventYear":2019,"category":"Helicopter","commercial":"Y","accidents":43,"aircraft":43,"fatalAccidents":9,"fatalaties":21,"lethality":20.9,"accidentHours":1570636,"accidentRate":2.74,"fatalAccidentRate":0.57}],"Summary 2":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidents":1157,"aircraft":1167,"fatalAccidents":214,"fatalaties":359,"lethality":18.5,"accidentHours":18423000,"accidentRate":6.28,"fatalAccidentRate":1.16},{"eventYear":2010,"category":"Airplane","commercial":"Y","accidents":82,"aircraft":83,"fatalAccidents":6,"fatalaties":13,"lethality":7.3,"accidentHours":2792000,"accidentRate":2.94,"fatalAccidentRate":0.21},{"eventYear":2010,"category":"Helicopter","commercial":"N","accidents":99,"aircraft":99,"fatalAccidents":19,"fatalaties":38,"lethality":19.2,"accidentHours":1872000,"accidentRate":5.29,"fatalAccidentRate":1.01},{"eventYear":2010,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":5,"fatalaties":7,"lethality":14.7,"accidentHours":1533000,"accidentRate":2.22,"fatalAccidentRate":0.33},{"eventYear":2011,"category":"Airplane","commercial":"N","accidents":1182,"aircraft":1195,"fatalAccidents":225,"fatalaties":394,"lethality":19,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidents":115,"aircraft":118,"fatalAccidents":16,"fatalaties":28,"lethality":13.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidents":101,"aircraft":101,"fatalAccidents":10,"fatalaties":12,"lethality":9.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidents":31,"aircraft":31,"fatalAccidents":7,"fatalaties":20,"lethality":22.6,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidents":1154,"aircraft":1163,"fatalAccidents":213,"fatalaties":329,"lethality":18.5,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidents":81,"aircraft":83,"fatalAccidents":7,"fatalaties":7,"lethality":8.6,"accidentHours":3011000,"accidentRate":2.69,"fatalAccidentRate":0.23},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidents":124,"aircraft":126,"fatalAccidents":19,"fatalaties":29,"lethality":15.3,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":5,"lethality":8.6,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Airplane","commercial":"N","accidents":964,"aircraft":973,"fatalAccidents":167,"fatalaties":284,"lethality":17.3,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidents":80,"aircraft":80,"fatalAccidents":10,"fatalaties":25,"lethality":12.5,"accidentHours":3238000,"accidentRate":2.47,"fatalAccidentRate":0.31},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidents":104,"aircraft":104,"fatalAccidents":20,"fatalaties":42,"lethality":19.2,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidents":40,"aircraft":40,"fatalAccidents":6,"fatalaties":7,"lethality":15,"accidentHours":1525000,"accidentRate":2.62,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Airplane","commercial":"N","accidents":966,"aircraft":973,"fatalAccidents":196,"fatalaties":306,"lethality":20.3,"accidentHours":16474000,"accidentRate":5.86,"fatalAccidentRate":1.19},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":11,"fatalaties":17,"lethality":16.4,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidents":106,"aircraft":106,"fatalAccidents":12,"fatalaties":19,"lethality":11.3,"accidentHours":1719000,"accidentRate":6.17,"fatalAccidentRate":0.7},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":7,"fatalaties":11,"lethality":20,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Airplane","commercial":"N","accidents":973,"aircraft":983,"fatalAccidents":195,"fatalaties":329,"lethality":20,"accidentHours":17375000,"accidentRate":5.6,"fatalAccidentRate":1.12},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":8,"fatalaties":16,"lethality":10.5,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidents":91,"aircraft":91,"fatalAccidents":11,"fatalaties":18,"lethality":12.1,"accidentHours":1748000,"accidentRate":5.21,"fatalAccidentRate":0.63},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidents":37,"aircraft":37,"fatalAccidents":7,"fatalaties":12,"lethality":18.9,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Airplane","commercial":"N","accidents":1048,"aircraft":1064,"fatalAccidents":158,"fatalaties":281,"lethality":15.1,"accidentHours":18277000,"accidentRate":5.73,"fatalAccidentRate":0.86},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidents":64,"aircraft":65,"fatalAccidents":19,"fatalaties":34,"lethality":29.7,"accidentHours":3234000,"accidentRate":1.98,"fatalAccidentRate":0.59},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidents":77,"aircraft":77,"fatalAccidents":12,"fatalaties":19,"lethality":15.6,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":6,"lethality":8.6,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Airplane","commercial":"N","accidents":1001,"aircraft":1011,"fatalAccidents":162,"fatalaties":268,"lethality":16.2,"accidentHours":18092000,"accidentRate":5.53,"fatalAccidentRate":0.9},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidents":74,"aircraft":74,"fatalAccidents":11,"fatalaties":14,"lethality":14.9,"accidentHours":3632000,"accidentRate":2.04,"fatalAccidentRate":0.3},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidents":88,"aircraft":88,"fatalAccidents":13,"fatalaties":18,"lethality":14.8,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidents":38,"aircraft":38,"fatalAccidents":5,"fatalaties":11,"lethality":13.2,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Airplane","commercial":"N","accidents":1031,"aircraft":1046,"fatalAccidents":167,"fatalaties":274,"lethality":16.2,"accidentHours":18862725,"accidentRate":5.47,"fatalAccidentRate":0.89},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidents":63,"aircraft":63,"fatalAccidents":9,"fatalaties":13,"lethality":14.3,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.25},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidents":92,"aircraft":92,"fatalAccidents":16,"fatalaties":36,"lethality":17.4,"accidentHours":1453417,"accidentRate":6.33,"fatalAccidentRate":1.1},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":7,"fatalaties":13,"lethality":20.6,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48},{"eventYear":2019,"category":"Airplane","commercial":"N","accidents":988,"aircraft":999,"fatalAccidents":179,"fatalaties":305,"lethality":18.1,"accidentHours":17587290,"accidentRate":5.62,"fatalAccidentRate":1.02},{"eventYear":2019,"category":"Airplane","commercial":"Y","accidents":57,"aircraft":59,"fatalAccidents":10,"fatalaties":19,"lethality":17.5,"accidentHours":3389706,"accidentRate":1.68,"fatalAccidentRate":0.3},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidents":81,"aircraft":82,"fatalAccidents":14,"fatalaties":21,"lethality":17.3,"accidentHours":1425895,"accidentRate":5.68,"fatalAccidentRate":0.98},{"eventYear":2019,"category":"Helicopter","commercial":"Y","accidents":43,"aircraft":43,"fatalAccidents":9,"fatalaties":21,"lethality":20.9,"accidentHours":1570636,"accidentRate":2.74,"fatalAccidentRate":0.57}],"Text-Intro-NCFW":{},"1.1":{"accidents":988,"aircraft":999,"fatalAccidents":179,"lethality":18.1,"fatalities":307,"params":{"year":2019,"category":"Airplane","commercial":"N"}},"1.2":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1157,"fatalAccidents":214,"accidentHours":18423000,"accidentRate":6.28,"fatalAccidentRate":1.16},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1182,"fatalAccidents":225,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1154,"fatalAccidents":213,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":964,"fatalAccidents":167,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":966,"fatalAccidents":196,"accidentHours":16474000,"accidentRate":5.86,"fatalAccidentRate":1.19},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":973,"fatalAccidents":195,"accidentHours":17375000,"accidentRate":5.6,"fatalAccidentRate":1.12},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1048,"fatalAccidents":159,"accidentHours":18277000,"accidentRate":5.73,"fatalAccidentRate":0.87},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1001,"fatalAccidents":162,"accidentHours":18092000,"accidentRate":5.53,"fatalAccidentRate":0.9},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1031,"fatalAccidents":167,"accidentHours":18862725,"accidentRate":5.47,"fatalAccidentRate":0.89},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":988,"fatalAccidents":179,"accidentHours":17587290,"accidentRate":5.62,"fatalAccidentRate":1.02}],"1.3":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1157,"fatalAccidents":214,"accidentHours":18423000,"accidentRate":6.28,"fatalAccidentRate":1.16},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1182,"fatalAccidents":225,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1154,"fatalAccidents":213,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":964,"fatalAccidents":167,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":966,"fatalAccidents":196,"accidentHours":16474000,"accidentRate":5.86,"fatalAccidentRate":1.19},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":973,"fatalAccidents":195,"accidentHours":17375000,"accidentRate":5.6,"fatalAccidentRate":1.12},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1048,"fatalAccidents":159,"accidentHours":18277000,"accidentRate":5.73,"fatalAccidentRate":0.87},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1001,"fatalAccidents":162,"accidentHours":18092000,"accidentRate":5.53,"fatalAccidentRate":0.9},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1031,"fatalAccidents":167,"accidentHours":18862725,"accidentRate":5.47,"fatalAccidentRate":0.89},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":988,"fatalAccidents":179,"accidentHours":17587290,"accidentRate":5.62,"fatalAccidentRate":1.02}],"1.4":[{"eventYear":2019,"category":"Airplane","commercial":"N","majorCause":"Pilot-Related","sortOrder":1,"accidents":614,"pctAccidents":62.1,"fatalAccidents":88,"pctFatalAccidents":49.2,"fatalities":155,"pctFatalities":50.8,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","majorCause":"Mechanical","sortOrder":2,"accidents":194,"pctAccidents":19.6,"fatalAccidents":15,"pctFatalAccidents":8.4,"fatalities":21,"pctFatalities":6.9,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","majorCause":"Other/Unknown","sortOrder":3,"accidents":180,"pctAccidents":18.2,"fatalAccidents":76,"pctFatalAccidents":42.5,"fatalities":129,"pctFatalities":42.3,"lethality":0}],"1.5":[{"accidentType":"Total","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":710,"pctAccidents":71.1,"fatalAccidents":95,"pctFatalAccidents":52.5,"fatalities":134,"pctFatalities":43.9,"lethality":13.4},{"accidentType":"Total","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":307,"pctAccidents":30.7,"fatalAccidents":34,"pctFatalAccidents":18.8,"fatalities":46,"pctFatalities":15.1,"lethality":11.1},{"accidentType":"Total","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":184,"pctAccidents":18.4,"fatalAccidents":49,"pctFatalAccidents":27.1,"fatalities":88,"pctFatalities":28.9,"lethality":26.6},{"accidentType":"Total","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":19,"pctAccidents":1.9,"fatalAccidents":2,"pctFatalAccidents":1.1,"fatalities":2,"pctFatalities":0.7,"lethality":10.5},{"accidentType":"Total","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":85,"pctAccidents":8.5,"fatalAccidents":32,"pctFatalAccidents":17.7,"fatalities":78,"pctFatalities":25.6,"lethality":37.6},{"accidentType":"Total","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":9,"pctAccidents":0.9,"fatalAccidents":3,"pctFatalAccidents":1.7,"fatalities":8,"pctFatalities":2.6,"lethality":33.3},{"accidentType":"Total","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":20,"pctAccidents":2,"fatalAccidents":5,"pctFatalAccidents":2.8,"fatalities":5,"pctFatalities":1.6,"lethality":25}],"1.6":[{"sortOrder":1,"typeOperation":"Fire Fighting","accidents":1,"pctAccidents":0.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":1,"typeOperation":"Personal","accidents":730,"pctAccidents":73.9,"fatalAccidents":139,"pctFatalAccidents":77.7,"fatalities":219,"pctFatalities":71.8,"lethality":19},{"sortOrder":2,"typeOperation":"Instructional","accidents":187,"pctAccidents":18.9,"fatalAccidents":17,"pctFatalAccidents":9.5,"fatalities":27,"pctFatalities":8.9,"lethality":9.1},{"sortOrder":3,"typeOperation":"Public Use","accidents":3,"pctAccidents":0.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":4,"typeOperation":"Positioning","accidents":10,"pctAccidents":1,"fatalAccidents":1,"pctFatalAccidents":0.6,"fatalities":1,"pctFatalities":0.3,"lethality":10},{"sortOrder":5,"typeOperation":"Aerial Observation","accidents":11,"pctAccidents":1.1,"fatalAccidents":4,"pctFatalAccidents":2.2,"fatalities":6,"pctFatalities":2,"lethality":36.4},{"sortOrder":6,"typeOperation":"Business","accidents":23,"pctAccidents":2.3,"fatalAccidents":11,"pctFatalAccidents":6.1,"fatalities":27,"pctFatalities":8.9,"lethality":47.8},{"sortOrder":7,"typeOperation":"Executive/Corporate","accidents":2,"pctAccidents":0.2,"fatalAccidents":1,"pctFatalAccidents":0.6,"fatalities":5,"pctFatalities":1.6,"lethality":50},{"sortOrder":8,"typeOperation":"Other work use","accidents":12,"pctAccidents":1.2,"fatalAccidents":2,"pctFatalAccidents":1.1,"fatalities":2,"pctFatalities":0.7,"lethality":16.7},{"sortOrder":9,"typeOperation":"Other or unknown","accidents":9,"pctAccidents":0.9,"fatalAccidents":4,"pctFatalAccidents":2.2,"fatalities":18,"pctFatalities":5.9,"lethality":44.4}],"1.7":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":817,"pctAccidents":82.7,"fatalAccidents":109,"pctFatalAccidents":60.9,"fatalities":169,"pctFatalities":55.4,"lethality":13.3},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":65,"pctAccidents":6.6,"fatalAccidents":22,"pctFatalAccidents":12.3,"fatalities":39,"pctFatalities":12.8,"lethality":33.8},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":33,"pctAccidents":3.3,"fatalAccidents":24,"pctFatalAccidents":13.4,"fatalities":61,"pctFatalities":20,"lethality":72.7},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":7,"pctAccidents":0.7,"fatalAccidents":5,"pctFatalAccidents":2.8,"fatalities":8,"pctFatalities":2.6,"lethality":71.4},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":66,"pctAccidents":6.7,"fatalAccidents":19,"pctFatalAccidents":10.6,"fatalities":28,"pctFatalities":9.2,"lethality":28.8}],"1.8":[{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":121,"pctAccidents":12.1,"fatalAccidents":25,"pctFatalAccidents":13.8,"fatalities":39,"pctFatalities":12.8,"lethality":20.7},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":269,"pctAccidents":26.9,"fatalAccidents":57,"pctFatalAccidents":31.5,"fatalities":111,"pctFatalities":36.4,"lethality":21.2},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":441,"pctAccidents":44.1,"fatalAccidents":75,"pctFatalAccidents":41.4,"fatalities":122,"pctFatalities":40,"lethality":17},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":20,"pctAccidents":2,"fatalAccidents":3,"pctFatalAccidents":1.7,"fatalities":4,"pctFatalities":1.3,"lethality":15},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":84,"pctAccidents":8.4,"fatalAccidents":8,"pctFatalAccidents":4.4,"fatalities":12,"pctFatalities":3.9,"lethality":9.5},{"accidentType":"Total","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":64,"pctAccidents":6.4,"fatalAccidents":13,"pctFatalAccidents":7.2,"fatalities":17,"pctFatalities":5.6,"lethality":20.3},{"accidentType":"Total","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":147,"pctAccidents":14.7,"fatalAccidents":29,"pctFatalAccidents":16,"fatalities":59,"pctFatalities":19.3,"lethality":19.7},{"accidentType":"Total","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":250,"pctAccidents":25,"fatalAccidents":41,"pctFatalAccidents":22.7,"fatalities":75,"pctFatalities":24.6,"lethality":16.4},{"accidentType":"Total","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":542,"pctAccidents":54.3,"fatalAccidents":107,"pctFatalAccidents":59.1,"fatalities":209,"pctFatalities":68.5,"lethality":19.7}],"1.9":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":882,"fatalAccidents":170,"accidentHours":18423000,"accidentRate":4.79,"fatalAccidentRate":0.92},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":914,"fatalAccidents":183,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":863,"fatalAccidents":166,"accidentHours":17758000,"accidentRate":4.86,"fatalAccidentRate":0.93},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":714,"fatalAccidents":124,"accidentHours":16554000,"accidentRate":4.31,"fatalAccidentRate":0.75},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":724,"fatalAccidents":148,"accidentHours":16474000,"accidentRate":4.39,"fatalAccidentRate":0.9},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":721,"fatalAccidents":146,"accidentHours":17375000,"accidentRate":4.15,"fatalAccidentRate":0.84},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":760,"fatalAccidents":117,"accidentHours":18277000,"accidentRate":4.16,"fatalAccidentRate":0.64},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":714,"fatalAccidents":128,"accidentHours":18092000,"accidentRate":3.95,"fatalAccidentRate":0.71},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":724,"fatalAccidents":104,"accidentHours":18862725,"accidentRate":3.84,"fatalAccidentRate":0.55},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":614,"fatalAccidents":88,"accidentHours":17587290,"accidentRate":3.49,"fatalAccidentRate":0.5}],"1.10":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":882,"fatalAccidents":170,"accidentHours":18423000,"accidentRate":4.79,"fatalAccidentRate":0.92},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":914,"fatalAccidents":183,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":863,"fatalAccidents":166,"accidentHours":17758000,"accidentRate":4.86,"fatalAccidentRate":0.93},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":714,"fatalAccidents":124,"accidentHours":16554000,"accidentRate":4.31,"fatalAccidentRate":0.75},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":724,"fatalAccidents":148,"accidentHours":16474000,"accidentRate":4.39,"fatalAccidentRate":0.9},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":721,"fatalAccidents":146,"accidentHours":17375000,"accidentRate":4.15,"fatalAccidentRate":0.84},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":760,"fatalAccidents":117,"accidentHours":18277000,"accidentRate":4.16,"fatalAccidentRate":0.64},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":714,"fatalAccidents":128,"accidentHours":18092000,"accidentRate":3.95,"fatalAccidentRate":0.71},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":724,"fatalAccidents":104,"accidentHours":18862725,"accidentRate":3.84,"fatalAccidentRate":0.55},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":614,"fatalAccidents":88,"accidentHours":17587290,"accidentRate":3.49,"fatalAccidentRate":0.5}],"1.11":[{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Landing","totalAccidents":308,"fatalAccidents":5,"fatalities":6,"pctAccidents":45.2,"pctFatalAccidents":4.6,"pctFatalities":3.2,"lethality":1.6},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Take-off","totalAccidents":115,"fatalAccidents":16,"fatalities":35,"pctAccidents":16.9,"pctFatalAccidents":14.7,"pctFatalities":18.4,"lethality":13.9},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Other","totalAccidents":96,"fatalAccidents":19,"fatalities":28,"pctAccidents":14.1,"pctFatalAccidents":17.4,"pctFatalities":14.7,"lethality":19.8},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Fuel management","totalAccidents":58,"fatalAccidents":8,"fatalities":16,"pctAccidents":8.5,"pctFatalAccidents":7.3,"pctFatalities":8.4,"lethality":13.8},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Maneuvering","totalAccidents":36,"fatalAccidents":20,"fatalities":28,"pctAccidents":5.3,"pctFatalAccidents":18.3,"pctFatalities":14.7,"lethality":55.6},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Descent / approach","totalAccidents":34,"fatalAccidents":11,"fatalities":21,"pctAccidents":5,"pctFatalAccidents":10.1,"pctFatalities":11.1,"lethality":32.4},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Weather","totalAccidents":34,"fatalAccidents":30,"fatalities":56,"pctAccidents":5,"pctFatalAccidents":27.5,"pctFatalities":29.5,"lethality":88.2}],"1.1.1":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":361,"fatalAccidents":9,"accidentHours":18423000,"accidentRate":1.96,"fatalAccidentRate":0.05},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":367,"fatalAccidents":2,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":344,"fatalAccidents":7,"accidentHours":17758000,"accidentRate":1.94,"fatalAccidentRate":0.04},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":281,"fatalAccidents":3,"accidentHours":16554000,"accidentRate":1.7,"fatalAccidentRate":0.02},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":280,"fatalAccidents":5,"accidentHours":16474000,"accidentRate":1.7,"fatalAccidentRate":0.03},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":260,"fatalAccidents":1,"accidentHours":17375000,"accidentRate":1.5,"fatalAccidentRate":0.01},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":337,"fatalAccidents":6,"accidentHours":18277000,"accidentRate":1.84,"fatalAccidentRate":0.03},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":322,"fatalAccidents":3,"accidentHours":18092000,"accidentRate":1.78,"fatalAccidentRate":0.02},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":333,"fatalAccidents":2,"accidentHours":18862725,"accidentRate":1.77,"fatalAccidentRate":0.01},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":308,"fatalAccidents":5,"accidentHours":17587290,"accidentRate":1.75,"fatalAccidentRate":0.03}],"1.1.2":[{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Loss of control","totalAccidents":163,"fatalAccidents":0,"fatalities":0,"pctAccidents":52.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- stall","totalAccidents":42,"fatalAccidents":0,"fatalities":0,"pctAccidents":13.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Hard -- other","totalAccidents":30,"fatalAccidents":0,"fatalities":0,"pctAccidents":9.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Runway conditions","totalAccidents":25,"fatalAccidents":0,"fatalities":0,"pctAccidents":8.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Gear operation","totalAccidents":23,"fatalAccidents":2,"fatalities":2,"pctAccidents":7.5,"pctFatalAccidents":40,"pctFatalities":33.3,"lethality":8.7},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- long","totalAccidents":12,"fatalAccidents":0,"fatalities":0,"pctAccidents":3.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Short -- other","totalAccidents":4,"fatalAccidents":1,"fatalities":1,"pctAccidents":1.3,"pctFatalAccidents":20,"pctFatalities":16.7,"lethality":25},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Unknown","totalAccidents":4,"fatalAccidents":1,"fatalities":1,"pctAccidents":1.3,"pctFatalAccidents":20,"pctFatalities":16.7,"lethality":25},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- short","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Bird or animal strike","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Collided with object","totalAccidents":1,"fatalAccidents":1,"fatalities":2,"pctAccidents":0.3,"pctFatalAccidents":20,"pctFatalities":33.3,"lethality":100},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Long -- other","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.1.3":[{"accidentType":"Landing","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":251,"pctAccidents":81.5,"fatalAccidents":3,"pctFatalAccidents":60,"fatalities":4,"pctFatalities":66.7,"lethality":1.2},{"accidentType":"Landing","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":133,"pctAccidents":43.2,"fatalAccidents":3,"pctFatalAccidents":60,"fatalities":4,"pctFatalities":66.7,"lethality":2.3},{"accidentType":"Landing","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":33,"pctAccidents":10.7,"fatalAccidents":1,"pctFatalAccidents":20,"fatalities":1,"pctFatalities":16.7,"lethality":3},{"accidentType":"Landing","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":4,"pctAccidents":1.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":18,"pctAccidents":5.8,"fatalAccidents":1,"pctFatalAccidents":20,"fatalities":1,"pctFatalities":16.7,"lethality":5.6},{"accidentType":"Landing","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":1,"pctAccidents":0.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":6,"pctAccidents":1.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.1.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":290,"pctAccidents":94.2,"fatalAccidents":5,"pctFatalAccidents":100,"fatalities":6,"pctFatalities":100,"lethality":1.7},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":11,"pctAccidents":3.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":7,"pctAccidents":2.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.1.5":[{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":34,"pctAccidents":11,"fatalAccidents":2,"pctFatalAccidents":40,"fatalities":2,"pctFatalities":33.3,"lethality":5.9},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":76,"pctAccidents":24.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":142,"pctAccidents":46.1,"fatalAccidents":3,"pctFatalAccidents":60,"fatalities":4,"pctFatalities":66.7,"lethality":2.1},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":4,"pctAccidents":1.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":46,"pctAccidents":14.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":6,"pctAccidents":1.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":46,"pctAccidents":14.9,"fatalAccidents":2,"pctFatalAccidents":40,"fatalities":2,"pctFatalities":33.3,"lethality":4.3},{"accidentType":"Landing","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":73,"pctAccidents":23.7,"fatalAccidents":2,"pctFatalAccidents":40,"fatalities":2,"pctFatalities":33.3,"lethality":2.7},{"accidentType":"Landing","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":158,"pctAccidents":51.3,"fatalAccidents":3,"pctFatalAccidents":60,"fatalities":3,"pctFatalities":50,"lethality":1.9}],"1.2.1":[{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Other","totalAccidents":88,"fatalAccidents":52,"fatalities":82,"pctAccidents":48.9,"pctFatalAccidents":68.4,"pctFatalities":63.6,"lethality":59.1},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Landing","totalAccidents":22,"fatalAccidents":2,"fatalities":3,"pctAccidents":12.2,"pctFatalAccidents":2.6,"pctFatalities":2.3,"lethality":9.1},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Other (power loss)","totalAccidents":14,"fatalAccidents":1,"fatalities":2,"pctAccidents":7.8,"pctFatalAccidents":1.3,"pctFatalities":1.6,"lethality":7.1},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Descent / approach","totalAccidents":12,"fatalAccidents":7,"fatalities":13,"pctAccidents":6.7,"pctFatalAccidents":9.2,"pctFatalities":10.1,"lethality":58.3},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Take-off","totalAccidents":10,"fatalAccidents":1,"fatalities":1,"pctAccidents":5.6,"pctFatalAccidents":1.3,"pctFatalities":0.8,"lethality":10},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Weather","totalAccidents":8,"fatalAccidents":6,"fatalities":10,"pctAccidents":4.4,"pctFatalAccidents":7.9,"pctFatalities":7.8,"lethality":75},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Fuel management","totalAccidents":8,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.4,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Maneuvering","totalAccidents":7,"fatalAccidents":5,"fatalities":8,"pctAccidents":3.9,"pctFatalAccidents":6.6,"pctFatalities":6.2,"lethality":71.4},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Collision","totalAccidents":4,"fatalAccidents":1,"fatalities":1,"pctAccidents":2.2,"pctFatalAccidents":1.3,"pctFatalities":0.8,"lethality":25},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Pre-flight","totalAccidents":3,"fatalAccidents":1,"fatalities":9,"pctAccidents":1.7,"pctFatalAccidents":1.3,"pctFatalities":7,"lethality":33.3},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Go-around","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Cruise","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Taxi","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.3.1":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":136,"fatalAccidents":23,"accidentHours":18423000,"accidentRate":0.74,"fatalAccidentRate":0.12},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":144,"fatalAccidents":25,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":145,"fatalAccidents":18,"accidentHours":17758000,"accidentRate":0.82,"fatalAccidentRate":0.1},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":119,"fatalAccidents":9,"accidentHours":16554000,"accidentRate":0.72,"fatalAccidentRate":0.05},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":116,"fatalAccidents":27,"accidentHours":16474000,"accidentRate":0.7,"fatalAccidentRate":0.16},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":109,"fatalAccidents":19,"accidentHours":17375000,"accidentRate":0.63,"fatalAccidentRate":0.11},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":125,"fatalAccidents":24,"accidentHours":18277000,"accidentRate":0.68,"fatalAccidentRate":0.13},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":118,"fatalAccidents":21,"accidentHours":18092000,"accidentRate":0.65,"fatalAccidentRate":0.12},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":129,"fatalAccidents":26,"accidentHours":18862725,"accidentRate":0.68,"fatalAccidentRate":0.14},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":115,"fatalAccidents":16,"accidentHours":17587290,"accidentRate":0.65,"fatalAccidentRate":0.09}],"1.3.2":[{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Loss of control","totalAccidents":39,"fatalAccidents":2,"fatalities":3,"pctAccidents":33.9,"pctFatalAccidents":12.5,"pctFatalities":8.6,"lethality":5.1},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Stalled or settled on take-off","totalAccidents":38,"fatalAccidents":10,"fatalities":23,"pctAccidents":33,"pctFatalAccidents":62.5,"pctFatalities":65.7,"lethality":26.3},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Runway conditions","totalAccidents":13,"fatalAccidents":0,"fatalities":0,"pctAccidents":11.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Collided with object","totalAccidents":10,"fatalAccidents":1,"fatalities":3,"pctAccidents":8.7,"pctFatalAccidents":6.3,"pctFatalities":8.6,"lethality":10},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Weight / density altitude","totalAccidents":6,"fatalAccidents":2,"fatalities":4,"pctAccidents":5.2,"pctFatalAccidents":12.5,"pctFatalities":11.4,"lethality":33.3},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Aircraft configuration","totalAccidents":6,"fatalAccidents":1,"fatalities":2,"pctAccidents":5.2,"pctFatalAccidents":6.3,"pctFatalities":5.7,"lethality":16.7},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Delayed abort","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.3.3":[{"accidentType":"Take-off","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":91,"pctAccidents":79.1,"fatalAccidents":10,"pctFatalAccidents":62.5,"fatalities":15,"pctFatalities":42.9,"lethality":11},{"accidentType":"Take-off","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":50,"pctAccidents":43.5,"fatalAccidents":7,"pctFatalAccidents":43.8,"fatalities":10,"pctFatalities":28.6,"lethality":14},{"accidentType":"Take-off","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":13,"pctAccidents":11.3,"fatalAccidents":2,"pctFatalAccidents":12.5,"fatalities":4,"pctFatalities":11.4,"lethality":15.4},{"accidentType":"Take-off","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":1,"pctAccidents":0.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Take-off","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":10,"pctAccidents":8.7,"fatalAccidents":3,"pctFatalAccidents":18.8,"fatalities":15,"pctFatalities":42.9,"lethality":30},{"accidentType":"Take-off","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":1,"pctAccidents":0.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Take-off","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":0.9,"fatalAccidents":1,"pctFatalAccidents":6.3,"fatalities":1,"pctFatalities":2.9,"lethality":100}],"1.3.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":109,"pctAccidents":94.8,"fatalAccidents":14,"pctFatalAccidents":87.5,"fatalities":31,"pctFatalities":88.6,"lethality":12.8},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":1,"pctAccidents":0.9,"fatalAccidents":1,"pctFatalAccidents":6.3,"fatalities":2,"pctFatalities":5.7,"lethality":100},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":3,"pctAccidents":2.6,"fatalAccidents":1,"pctFatalAccidents":6.3,"fatalities":2,"pctFatalities":5.7,"lethality":33.3},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":2,"pctAccidents":1.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.3.5":[{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":12,"pctAccidents":10.4,"fatalAccidents":3,"pctFatalAccidents":18.8,"fatalities":6,"pctFatalities":17.1,"lethality":25},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":29,"pctAccidents":25.2,"fatalAccidents":5,"pctFatalAccidents":31.3,"fatalities":18,"pctFatalities":51.4,"lethality":17.2},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":53,"pctAccidents":46.1,"fatalAccidents":3,"pctFatalAccidents":18.8,"fatalities":5,"pctFatalities":14.3,"lethality":5.7},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":5,"pctAccidents":4.3,"fatalAccidents":2,"pctFatalAccidents":12.5,"fatalities":2,"pctFatalities":5.7,"lethality":40},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":12,"pctAccidents":10.4,"fatalAccidents":1,"pctFatalAccidents":6.3,"fatalities":2,"pctFatalities":5.7,"lethality":8.3},{"accidentType":"Take-off","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":4,"pctAccidents":3.5,"fatalAccidents":2,"pctFatalAccidents":12.5,"fatalities":2,"pctFatalities":5.7,"lethality":50},{"accidentType":"Take-off","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":25,"pctAccidents":21.7,"fatalAccidents":3,"pctFatalAccidents":18.8,"fatalities":6,"pctFatalities":17.1,"lethality":12},{"accidentType":"Take-off","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":32,"pctAccidents":27.8,"fatalAccidents":4,"pctFatalAccidents":25,"fatalities":8,"pctFatalities":22.9,"lethality":12.5},{"accidentType":"Take-off","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":56,"pctAccidents":48.7,"fatalAccidents":8,"pctFatalAccidents":50,"fatalities":25,"pctFatalities":71.4,"lethality":14.3}],"1.4.1":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":94,"fatalAccidents":13,"accidentHours":18423000,"accidentRate":0.51,"fatalAccidentRate":0.07},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":96,"fatalAccidents":14,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":79,"fatalAccidents":10,"accidentHours":17758000,"accidentRate":0.44,"fatalAccidentRate":0.06},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":69,"fatalAccidents":10,"accidentHours":16554000,"accidentRate":0.42,"fatalAccidentRate":0.06},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":77,"fatalAccidents":7,"accidentHours":16474000,"accidentRate":0.47,"fatalAccidentRate":0.04},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":81,"fatalAccidents":14,"accidentHours":17375000,"accidentRate":0.47,"fatalAccidentRate":0.08},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":67,"fatalAccidents":7,"accidentHours":18277000,"accidentRate":0.37,"fatalAccidentRate":0.04},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":54,"fatalAccidents":6,"accidentHours":18092000,"accidentRate":0.3,"fatalAccidentRate":0.03},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":63,"fatalAccidents":8,"accidentHours":18862725,"accidentRate":0.33,"fatalAccidentRate":0.04},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":58,"fatalAccidents":8,"accidentHours":17587290,"accidentRate":0.33,"fatalAccidentRate":0.05}],"1.4.2":[{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Flight planning","totalAccidents":32,"fatalAccidents":4,"fatalities":12,"pctAccidents":55.2,"pctFatalAccidents":50,"pctFatalities":75,"lethality":12.5},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Systems operation","totalAccidents":26,"fatalAccidents":4,"fatalities":4,"pctAccidents":44.8,"pctFatalAccidents":50,"pctFatalities":25,"lethality":15.4}],"1.4.3":[{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":42,"pctAccidents":72.4,"fatalAccidents":4,"pctFatalAccidents":50,"fatalities":5,"pctFatalities":31.3,"lethality":9.5},{"accidentType":"Fuel management","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":9,"pctAccidents":15.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":8,"pctAccidents":13.8,"fatalAccidents":1,"pctFatalAccidents":12.5,"fatalities":1,"pctFatalities":6.3,"lethality":12.5},{"accidentType":"Fuel management","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":1,"pctAccidents":1.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":7,"pctAccidents":12.1,"fatalAccidents":3,"pctFatalAccidents":37.5,"fatalities":10,"pctFatalities":62.5,"lethality":42.9},{"accidentType":"Fuel management","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":1.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.4.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":46,"pctAccidents":79.3,"fatalAccidents":5,"pctFatalAccidents":62.5,"fatalities":8,"pctFatalities":50,"lethality":10.9},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":8,"pctAccidents":13.8,"fatalAccidents":1,"pctFatalAccidents":12.5,"fatalities":1,"pctFatalities":6.3,"lethality":12.5},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":1,"pctAccidents":1.7,"fatalAccidents":1,"pctFatalAccidents":12.5,"fatalities":6,"pctFatalities":37.5,"lethality":100},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":1,"pctAccidents":1.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":2,"pctAccidents":3.4,"fatalAccidents":1,"pctFatalAccidents":12.5,"fatalities":1,"pctFatalities":6.3,"lethality":50}],"1.4.5":[{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":10,"pctAccidents":17.2,"fatalAccidents":1,"pctFatalAccidents":12.5,"fatalities":6,"pctFatalities":37.5,"lethality":10},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":16,"pctAccidents":27.6,"fatalAccidents":3,"pctFatalAccidents":37.5,"fatalities":5,"pctFatalities":31.3,"lethality":18.8},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":26,"pctAccidents":44.8,"fatalAccidents":3,"pctFatalAccidents":37.5,"fatalities":4,"pctFatalities":25,"lethality":11.5},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":3,"pctAccidents":5.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":3,"pctAccidents":5.2,"fatalAccidents":1,"pctFatalAccidents":12.5,"fatalities":1,"pctFatalities":6.3,"lethality":33.3},{"accidentType":"Fuel management","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":5,"pctAccidents":8.6,"fatalAccidents":1,"pctFatalAccidents":12.5,"fatalities":3,"pctFatalities":18.8,"lethality":20},{"accidentType":"Fuel management","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":15,"pctAccidents":25.9,"fatalAccidents":2,"pctFatalAccidents":25,"fatalities":2,"pctFatalities":12.5,"lethality":13.3},{"accidentType":"Fuel management","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":33,"pctAccidents":56.9,"fatalAccidents":6,"pctFatalAccidents":75,"fatalities":14,"pctFatalities":87.5,"lethality":18.2}],"1.5.1":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":57,"fatalAccidents":31,"accidentHours":18423000,"accidentRate":0.31,"fatalAccidentRate":0.17},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":58,"fatalAccidents":35,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":54,"fatalAccidents":31,"accidentHours":17758000,"accidentRate":0.3,"fatalAccidentRate":0.17},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":46,"fatalAccidents":25,"accidentHours":16554000,"accidentRate":0.28,"fatalAccidentRate":0.15},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":54,"fatalAccidents":29,"accidentHours":16474000,"accidentRate":0.33,"fatalAccidentRate":0.18},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":43,"fatalAccidents":32,"accidentHours":17375000,"accidentRate":0.25,"fatalAccidentRate":0.18},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":44,"fatalAccidents":25,"accidentHours":18277000,"accidentRate":0.24,"fatalAccidentRate":0.14},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":38,"fatalAccidents":28,"accidentHours":18092000,"accidentRate":0.21,"fatalAccidentRate":0.15},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":31,"fatalAccidents":16,"accidentHours":18862725,"accidentRate":0.16,"fatalAccidentRate":0.08},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":36,"fatalAccidents":20,"accidentHours":17587290,"accidentRate":0.2,"fatalAccidentRate":0.11}],"1.5.2":[{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Stall / LOC","totalAccidents":22,"fatalAccidents":12,"fatalities":17,"pctAccidents":61.1,"pctFatalAccidents":60,"pctFatalities":60.7,"lethality":54.5},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Wires / structures / terrain","totalAccidents":10,"fatalAccidents":5,"fatalities":7,"pctAccidents":27.8,"pctFatalAccidents":25,"pctFatalities":25,"lethality":50},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Aerobatics","totalAccidents":3,"fatalAccidents":3,"fatalities":4,"pctAccidents":8.3,"pctFatalAccidents":15,"pctFatalities":14.3,"lethality":100},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Unknown","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.8,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.5.3":[{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":28,"pctAccidents":77.8,"fatalAccidents":14,"pctFatalAccidents":70,"fatalities":19,"pctFatalities":67.9,"lethality":50},{"accidentType":"Maneuvering","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":14,"pctAccidents":38.9,"fatalAccidents":6,"pctFatalAccidents":30,"fatalities":8,"pctFatalities":28.6,"lethality":42.9},{"accidentType":"Maneuvering","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":6,"pctAccidents":16.7,"fatalAccidents":4,"pctFatalAccidents":20,"fatalities":7,"pctFatalities":25,"lethality":66.7},{"accidentType":"Maneuvering","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":1,"pctAccidents":2.8,"fatalAccidents":1,"pctFatalAccidents":5,"fatalities":1,"pctFatalities":3.6,"lethality":100},{"accidentType":"Maneuvering","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":2,"pctAccidents":5.6,"fatalAccidents":2,"pctFatalAccidents":10,"fatalities":2,"pctFatalities":7.1,"lethality":100}],"1.5.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":34,"pctAccidents":94.4,"fatalAccidents":19,"pctFatalAccidents":95,"fatalities":26,"pctFatalities":92.9,"lethality":55.9},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":2,"pctAccidents":5.6,"fatalAccidents":1,"pctFatalAccidents":5,"fatalities":2,"pctFatalities":7.1,"lethality":50}],"1.5.5":[{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":5,"pctAccidents":13.9,"fatalAccidents":3,"pctFatalAccidents":15,"fatalities":3,"pctFatalities":10.7,"lethality":60},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":18,"pctAccidents":50,"fatalAccidents":9,"pctFatalAccidents":45,"fatalities":14,"pctFatalities":50,"lethality":50},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":10,"pctAccidents":27.8,"fatalAccidents":5,"pctFatalAccidents":25,"fatalities":8,"pctFatalities":28.6,"lethality":50},{"accidentType":"Maneuvering","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":3,"pctAccidents":8.3,"fatalAccidents":3,"pctFatalAccidents":15,"fatalities":3,"pctFatalities":10.7,"lethality":100},{"accidentType":"Maneuvering","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":5,"pctAccidents":13.9,"fatalAccidents":4,"pctFatalAccidents":20,"fatalities":7,"pctFatalities":25,"lethality":80},{"accidentType":"Maneuvering","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":15,"pctAccidents":41.7,"fatalAccidents":8,"pctFatalAccidents":40,"fatalities":12,"pctFatalities":42.9,"lethality":53.3},{"accidentType":"Maneuvering","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":23,"pctAccidents":63.9,"fatalAccidents":12,"pctFatalAccidents":60,"fatalities":17,"pctFatalities":60.7,"lethality":52.2}],"1.6.1":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":46,"fatalAccidents":25,"accidentHours":18423000,"accidentRate":0.25,"fatalAccidentRate":0.14},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":57,"fatalAccidents":25,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":52,"fatalAccidents":24,"accidentHours":17758000,"accidentRate":0.29,"fatalAccidentRate":0.14},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":33,"fatalAccidents":15,"accidentHours":16554000,"accidentRate":0.2,"fatalAccidentRate":0.09},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":46,"fatalAccidents":14,"accidentHours":16474000,"accidentRate":0.28,"fatalAccidentRate":0.08},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":44,"fatalAccidents":15,"accidentHours":17375000,"accidentRate":0.25,"fatalAccidentRate":0.09},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":39,"fatalAccidents":11,"accidentHours":18277000,"accidentRate":0.21,"fatalAccidentRate":0.06},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":45,"fatalAccidents":11,"accidentHours":18092000,"accidentRate":0.25,"fatalAccidentRate":0.06},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":64,"fatalAccidents":21,"accidentHours":18862725,"accidentRate":0.34,"fatalAccidentRate":0.11},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":34,"fatalAccidents":11,"accidentHours":17587290,"accidentRate":0.19,"fatalAccidentRate":0.06}],"1.6.2":[{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Collisions","totalAccidents":16,"fatalAccidents":2,"fatalities":2,"pctAccidents":47.1,"pctFatalAccidents":18.2,"pctFatalities":9.5,"lethality":12.5},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Stalls / spins","totalAccidents":11,"fatalAccidents":6,"fatalities":11,"pctAccidents":32.4,"pctFatalAccidents":54.5,"pctFatalities":52.4,"lethality":54.5},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Deficient IAPs","totalAccidents":4,"fatalAccidents":3,"fatalities":8,"pctAccidents":11.8,"pctFatalAccidents":27.3,"pctFatalities":38.1,"lethality":75},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Loss of power","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":5.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Gusts / wake turbulence","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.6.3":[{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":23,"pctAccidents":67.6,"fatalAccidents":6,"pctFatalAccidents":54.5,"fatalities":8,"pctFatalities":38.1,"lethality":26.1},{"accidentType":"Descent / approach","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":13,"pctAccidents":38.2,"fatalAccidents":1,"pctFatalAccidents":9.1,"fatalities":1,"pctFatalities":4.8,"lethality":7.7},{"accidentType":"Descent / approach","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":7,"pctAccidents":20.6,"fatalAccidents":2,"pctFatalAccidents":18.2,"fatalities":6,"pctFatalities":28.6,"lethality":28.6},{"accidentType":"Descent / approach","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":4,"pctAccidents":11.8,"fatalAccidents":3,"pctFatalAccidents":27.3,"fatalities":7,"pctFatalities":33.3,"lethality":75}],"1.6.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":22,"pctAccidents":64.7,"fatalAccidents":6,"pctFatalAccidents":54.5,"fatalities":11,"pctFatalities":52.4,"lethality":27.3},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":6,"pctAccidents":17.6,"fatalAccidents":2,"pctFatalAccidents":18.2,"fatalities":3,"pctFatalities":14.3,"lethality":33.3},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":2,"pctAccidents":5.9,"fatalAccidents":2,"pctFatalAccidents":18.2,"fatalities":6,"pctFatalities":28.6,"lethality":100},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":1,"pctAccidents":2.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":3,"pctAccidents":8.8,"fatalAccidents":1,"pctFatalAccidents":9.1,"fatalities":1,"pctFatalities":4.8,"lethality":33.3}],"1.6.5":[{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":3,"pctAccidents":8.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":11,"pctAccidents":32.4,"fatalAccidents":5,"pctFatalAccidents":45.5,"fatalities":13,"pctFatalities":61.9,"lethality":45.5},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":16,"pctAccidents":47.1,"fatalAccidents":6,"pctFatalAccidents":54.5,"fatalities":8,"pctFatalities":38.1,"lethality":37.5},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":2,"pctAccidents":5.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Descent / approach","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":2,"pctAccidents":5.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Descent / approach","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":6,"pctAccidents":17.6,"fatalAccidents":2,"pctFatalAccidents":18.2,"fatalities":6,"pctFatalities":28.6,"lethality":33.3},{"accidentType":"Descent / approach","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":12,"pctAccidents":35.3,"fatalAccidents":3,"pctFatalAccidents":27.3,"fatalities":11,"pctFatalities":52.4,"lethality":25},{"accidentType":"Descent / approach","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":21,"pctAccidents":61.8,"fatalAccidents":7,"pctFatalAccidents":63.6,"fatalities":17,"pctFatalities":81,"lethality":33.3}],"1.7.1":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":50,"fatalAccidents":34,"accidentHours":18423000,"accidentRate":0.27,"fatalAccidentRate":0.18},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":54,"fatalAccidents":40,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":50,"fatalAccidents":37,"accidentHours":17758000,"accidentRate":0.28,"fatalAccidentRate":0.21},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":41,"fatalAccidents":30,"accidentHours":16554000,"accidentRate":0.25,"fatalAccidentRate":0.18},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":36,"fatalAccidents":28,"accidentHours":16474000,"accidentRate":0.22,"fatalAccidentRate":0.17},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":40,"fatalAccidents":30,"accidentHours":17375000,"accidentRate":0.23,"fatalAccidentRate":0.17},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":24,"fatalAccidents":13,"accidentHours":18277000,"accidentRate":0.13,"fatalAccidentRate":0.07},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":42,"fatalAccidents":32,"accidentHours":18092000,"accidentRate":0.23,"fatalAccidentRate":0.18},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":29,"fatalAccidents":24,"accidentHours":18862725,"accidentRate":0.15,"fatalAccidentRate":0.13},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":34,"fatalAccidents":30,"accidentHours":17587290,"accidentRate":0.19,"fatalAccidentRate":0.17}],"1.7.2":[{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"VFR into IMC","totalAccidents":19,"fatalAccidents":18,"fatalities":33,"pctAccidents":55.9,"pctFatalAccidents":60,"pctFatalities":58.9,"lethality":94.7},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Poor IFR technique","totalAccidents":6,"fatalAccidents":6,"fatalities":12,"pctAccidents":17.6,"pctFatalAccidents":20,"pctFatalities":21.4,"lethality":100},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Thunderstorm","totalAccidents":4,"fatalAccidents":2,"fatalities":6,"pctAccidents":11.8,"pctFatalAccidents":6.7,"pctFatalities":10.7,"lethality":50},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Icing","totalAccidents":3,"fatalAccidents":3,"fatalities":4,"pctAccidents":8.8,"pctFatalAccidents":10,"pctFatalities":7.1,"lethality":100},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Turbulence","totalAccidents":2,"fatalAccidents":1,"fatalities":1,"pctAccidents":5.9,"pctFatalAccidents":3.3,"pctFatalities":1.8,"lethality":50}],"1.7.3":[{"accidentType":"Weather","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":15,"pctAccidents":44.1,"fatalAccidents":12,"pctFatalAccidents":40,"fatalities":19,"pctFatalities":33.9,"lethality":80},{"accidentType":"Weather","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":1,"pctAccidents":2.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Weather","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":13,"pctAccidents":38.2,"fatalAccidents":12,"pctFatalAccidents":40,"fatalities":21,"pctFatalities":37.5,"lethality":92.3},{"accidentType":"Weather","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":6,"pctAccidents":17.6,"fatalAccidents":6,"pctFatalAccidents":20,"fatalities":16,"pctFatalities":28.6,"lethality":100}],"1.7.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":7,"pctAccidents":20.6,"fatalAccidents":5,"pctFatalAccidents":16.7,"fatalities":11,"pctFatalities":19.6,"lethality":71.4},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":1,"pctAccidents":2.9,"fatalAccidents":1,"pctFatalAccidents":3.3,"fatalities":1,"pctFatalities":1.8,"lethality":100},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":16,"pctAccidents":47.1,"fatalAccidents":14,"pctFatalAccidents":46.7,"fatalities":28,"pctFatalities":50,"lethality":87.5},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":4,"pctAccidents":11.8,"fatalAccidents":4,"pctFatalAccidents":13.3,"fatalities":7,"pctFatalities":12.5,"lethality":100},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":6,"pctAccidents":17.6,"fatalAccidents":6,"pctFatalAccidents":20,"fatalities":9,"pctFatalities":16.1,"lethality":100}],"1.7.5":[{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":2,"pctAccidents":5.9,"fatalAccidents":1,"pctFatalAccidents":3.3,"fatalities":1,"pctFatalities":1.8,"lethality":50},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":12,"pctAccidents":35.3,"fatalAccidents":9,"pctFatalAccidents":30,"fatalities":17,"pctFatalities":30.4,"lethality":75},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":18,"pctAccidents":52.9,"fatalAccidents":18,"pctFatalAccidents":60,"fatalities":36,"pctFatalities":64.3,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":1,"pctAccidents":2.9,"fatalAccidents":1,"pctFatalAccidents":3.3,"fatalities":1,"pctFatalities":1.8,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":2.9,"fatalAccidents":1,"pctFatalAccidents":3.3,"fatalities":1,"pctFatalities":1.8,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":3,"pctAccidents":8.8,"fatalAccidents":3,"pctFatalAccidents":10,"fatalities":7,"pctFatalities":12.5,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":5,"pctAccidents":14.7,"fatalAccidents":3,"pctFatalAccidents":10,"fatalities":5,"pctFatalities":8.9,"lethality":60},{"accidentType":"Weather","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":24,"pctAccidents":70.6,"fatalAccidents":20,"pctFatalAccidents":66.7,"fatalities":40,"pctFatalities":71.4,"lethality":83.3}],"1.8.1":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":153,"fatalAccidents":17,"accidentHours":18423000,"accidentRate":0.83,"fatalAccidentRate":0.09},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":149,"fatalAccidents":13,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":156,"fatalAccidents":11,"accidentHours":17758000,"accidentRate":0.88,"fatalAccidentRate":0.06},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":132,"fatalAccidents":12,"accidentHours":16554000,"accidentRate":0.8,"fatalAccidentRate":0.07},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":128,"fatalAccidents":16,"accidentHours":16474000,"accidentRate":0.78,"fatalAccidentRate":0.1},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":141,"fatalAccidents":17,"accidentHours":17375000,"accidentRate":0.81,"fatalAccidentRate":0.1},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":176,"fatalAccidents":16,"accidentHours":18277000,"accidentRate":0.96,"fatalAccidentRate":0.09},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":173,"fatalAccidents":14,"accidentHours":18092000,"accidentRate":0.96,"fatalAccidentRate":0.08},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":175,"fatalAccidents":11,"accidentHours":18862725,"accidentRate":0.93,"fatalAccidentRate":0.06},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":194,"fatalAccidents":15,"accidentHours":17587290,"accidentRate":1.1,"fatalAccidentRate":0.09}],"1.8.2":[{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Powerplant","totalAccidents":132,"fatalAccidents":9,"fatalities":12,"pctAccidents":68,"pctFatalAccidents":60,"pctFatalities":57.1,"lethality":6.8},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Gear and brakes","totalAccidents":27,"fatalAccidents":0,"fatalities":0,"pctAccidents":13.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Airframe","totalAccidents":15,"fatalAccidents":2,"fatalities":3,"pctAccidents":7.7,"pctFatalAccidents":13.3,"pctFatalities":14.3,"lethality":13.3},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Electrical","totalAccidents":8,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Fuel system","totalAccidents":8,"fatalAccidents":2,"fatalities":3,"pctAccidents":4.1,"pctFatalAccidents":13.3,"pctFatalities":14.3,"lethality":25},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Instruments","totalAccidents":3,"fatalAccidents":2,"fatalities":3,"pctAccidents":1.5,"pctFatalAccidents":13.3,"pctFatalities":14.3,"lethality":66.7},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Unknown","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.8.3":[{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":107,"pctAccidents":55.4,"fatalAccidents":3,"pctFatalAccidents":20,"fatalities":3,"pctFatalities":14.3,"lethality":2.8},{"accidentType":"Mechanical","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":43,"pctAccidents":22.3,"fatalAccidents":1,"pctFatalAccidents":6.7,"fatalities":1,"pctFatalities":4.8,"lethality":2.3},{"accidentType":"Mechanical","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":59,"pctAccidents":30.6,"fatalAccidents":6,"pctFatalAccidents":40,"fatalities":9,"pctFatalities":42.9,"lethality":10.2},{"accidentType":"Mechanical","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":9,"pctAccidents":4.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":21,"pctAccidents":10.9,"fatalAccidents":6,"pctFatalAccidents":40,"fatalities":9,"pctFatalities":42.9,"lethality":28.6},{"accidentType":"Mechanical","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":5,"pctAccidents":2.6,"fatalAccidents":2,"pctFatalAccidents":13.3,"fatalities":3,"pctFatalities":14.3,"lethality":40},{"accidentType":"Mechanical","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":6,"pctAccidents":3.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.8.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":150,"pctAccidents":77.3,"fatalAccidents":10,"pctFatalAccidents":66.7,"fatalities":12,"pctFatalities":57.1,"lethality":6.7},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":10,"pctAccidents":5.2,"fatalAccidents":2,"pctFatalAccidents":13.3,"fatalities":5,"pctFatalities":23.8,"lethality":20},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":4,"pctAccidents":2.1,"fatalAccidents":1,"pctFatalAccidents":6.7,"fatalities":2,"pctFatalities":9.5,"lethality":25},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":30,"pctAccidents":15.5,"fatalAccidents":2,"pctFatalAccidents":13.3,"fatalities":2,"pctFatalities":9.5,"lethality":6.7}],"1.8.5":[{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":26,"pctAccidents":13.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":55,"pctAccidents":28.4,"fatalAccidents":8,"pctFatalAccidents":53.3,"fatalities":10,"pctFatalities":47.6,"lethality":14.5},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":78,"pctAccidents":40.2,"fatalAccidents":7,"pctFatalAccidents":46.7,"fatalities":11,"pctFatalities":52.4,"lethality":9},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":2,"pctAccidents":1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":6,"pctAccidents":3.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":27,"pctAccidents":13.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":23,"pctAccidents":11.9,"fatalAccidents":2,"pctFatalAccidents":13.3,"fatalities":4,"pctFatalities":19,"lethality":8.7},{"accidentType":"Mechanical","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":48,"pctAccidents":24.7,"fatalAccidents":3,"pctFatalAccidents":20,"fatalities":5,"pctFatalities":23.8,"lethality":6.3},{"accidentType":"Mechanical","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":114,"pctAccidents":58.8,"fatalAccidents":12,"pctFatalAccidents":80,"fatalities":18,"pctFatalities":85.7,"lethality":10.5}],"Text-Intro-CFW":{},"2.1":{"accidents":57,"aircraft":59,"fatalAccidents":10,"lethality":17.5,"fatalities":27,"params":{"year":2019,"category":"Airplane","commercial":"Y"}},"2.2":[{"eventYear":2010,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":6,"accidentHours":2792000,"accidentRate":2.94,"fatalAccidentRate":0.21},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":115,"fatalAccidents":16,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":81,"fatalAccidents":7,"accidentHours":3011000,"accidentRate":2.69,"fatalAccidentRate":0.23},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":80,"fatalAccidents":10,"accidentHours":3238000,"accidentRate":2.47,"fatalAccidentRate":0.31},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":11,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":8,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":64,"fatalAccidents":19,"accidentHours":3234000,"accidentRate":1.98,"fatalAccidentRate":0.59},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":74,"fatalAccidents":11,"accidentHours":3632000,"accidentRate":2.04,"fatalAccidentRate":0.3},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":63,"fatalAccidents":10,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.28},{"eventYear":2019,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":57,"fatalAccidents":10,"accidentHours":3389706,"accidentRate":1.68,"fatalAccidentRate":0.3}],"2.3":[{"eventYear":2010,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":82,"fatalAccidents":6,"accidentHours":2792000,"accidentRate":2.94,"fatalAccidentRate":0.21},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":115,"fatalAccidents":16,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":81,"fatalAccidents":7,"accidentHours":3011000,"accidentRate":2.69,"fatalAccidentRate":0.23},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":80,"fatalAccidents":10,"accidentHours":3238000,"accidentRate":2.47,"fatalAccidentRate":0.31},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":11,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":8,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":64,"fatalAccidents":19,"accidentHours":3234000,"accidentRate":1.98,"fatalAccidentRate":0.59},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":74,"fatalAccidents":11,"accidentHours":3632000,"accidentRate":2.04,"fatalAccidentRate":0.3},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":63,"fatalAccidents":10,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.28},{"eventYear":2019,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":57,"fatalAccidents":10,"accidentHours":3389706,"accidentRate":1.68,"fatalAccidentRate":0.3}],"2.4":[{"eventYear":2019,"category":"Airplane","commercial":"Y","majorCause":"Pilot-Related","sortOrder":1,"accidents":33,"pctAccidents":57.9,"fatalAccidents":3,"pctFatalAccidents":30,"fatalities":4,"pctFatalities":21.1,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"Y","majorCause":"Mechanical","sortOrder":2,"accidents":12,"pctAccidents":21.1,"fatalAccidents":1,"pctFatalAccidents":10,"fatalities":1,"pctFatalities":5.3,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"Y","majorCause":"Other/Unknown","sortOrder":3,"accidents":12,"pctAccidents":21.1,"fatalAccidents":6,"pctFatalAccidents":60,"fatalities":14,"pctFatalities":73.7,"lethality":0}],"2.5":[{"accidentType":"Total","farPart":"135","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":17,"pctAccidents":73.9,"fatalAccidents":5,"pctFatalAccidents":83.3,"fatalities":10,"pctFatalities":76.9,"lethality":29.4},{"accidentType":"Total","farPart":"137","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":36,"pctAccidents":100,"fatalAccidents":6,"pctFatalAccidents":100,"fatalities":6,"pctFatalities":100,"lethality":16.7},{"accidentType":"Total","farPart":"135","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":8,"pctAccidents":34.8,"fatalAccidents":4,"pctFatalAccidents":66.7,"fatalities":9,"pctFatalities":69.2,"lethality":50},{"accidentType":"Total","farPart":"137","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":34,"pctAccidents":94.4,"fatalAccidents":5,"pctFatalAccidents":83.3,"fatalities":5,"pctFatalities":83.3,"lethality":14.7},{"accidentType":"Total","farPart":"135","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":2,"pctAccidents":8.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":3,"pctAccidents":13,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":3,"pctFatalities":23.1,"lethality":33.3},{"accidentType":"Total","farPart":"135","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":2,"pctAccidents":8.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":4.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"2.6":[{"sortOrder":1,"farPart":"135","conditions":"Day VMC","accidents":17,"pctAccidents":77.3,"fatalAccidents":3,"pctFatalAccidents":60,"fatalities":9,"pctFatalities":69.2,"lethality":17.6},{"sortOrder":1,"farPart":"137","conditions":"Day VMC","accidents":32,"pctAccidents":91.4,"fatalAccidents":4,"pctFatalAccidents":80,"fatalities":5,"pctFatalities":83.3,"lethality":12.5},{"sortOrder":2,"farPart":"135","conditions":"Night VMC","accidents":2,"pctAccidents":9.1,"fatalAccidents":2,"pctFatalAccidents":40,"fatalities":4,"pctFatalities":30.8,"lethality":100},{"sortOrder":3,"farPart":"137","conditions":"Day IMC","accidents":1,"pctAccidents":2.9,"fatalAccidents":1,"pctFatalAccidents":20,"fatalities":1,"pctFatalities":16.7,"lethality":100},{"sortOrder":5,"farPart":"135","conditions":"Unknown","accidents":3,"pctAccidents":13.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"137","conditions":"Unknown","accidents":2,"pctAccidents":5.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"2.7":[{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"ATP","accidents":8,"pctAccidents":34.8,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":1,"pctFatalities":7.7,"lethality":25},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"ATP","accidents":1,"pctAccidents":2.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"Commercial","accidents":33,"pctAccidents":91.7,"fatalAccidents":4,"pctFatalAccidents":66.7,"fatalities":4,"pctFatalities":66.7,"lethality":12.1},{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"Commercial","accidents":9,"pctAccidents":39.1,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":8,"pctFatalities":61.5,"lethality":22.2},{"accidentType":"Total","farPart":"135","sortOrder":2,"certLevel":"Other or unknown","accidents":6,"pctAccidents":26.1,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":4,"pctFatalities":30.8,"lethality":33.3},{"accidentType":"Total","farPart":"137","sortOrder":2,"certLevel":"Other or unknown","accidents":2,"pctAccidents":5.6,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":2,"pctFatalities":33.3,"lethality":100},{"accidentType":"Total","farPart":"135","sortOrder":3,"certLevel":"Second pilot on board","accidents":2,"pctAccidents":8.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":4,"certLevel":"CFI on board","accidents":4,"pctAccidents":11.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":4,"certLevel":"CFI on board","accidents":7,"pctAccidents":30.4,"fatalAccidents":3,"pctFatalAccidents":50,"fatalities":13,"pctFatalities":100,"lethality":42.9},{"accidentType":"Total","farPart":"135","sortOrder":5,"certLevel":"IFR pilot on board","accidents":17,"pctAccidents":73.9,"fatalAccidents":4,"pctFatalAccidents":66.7,"fatalities":15,"pctFatalities":115.4,"lethality":23.5},{"accidentType":"Total","farPart":"137","sortOrder":5,"certLevel":"IFR pilot on board","accidents":14,"pctAccidents":38.9,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":2,"pctFatalities":33.3,"lethality":14.3}],"Text-Intro-NCH":{},"3.1":{"accidents":81,"aircraft":82,"fatalAccidents":14,"lethality":17.3,"fatalities":23,"params":{"year":2019,"category":"Helicopter","commercial":"N"}},"3.2":[{"eventYear":2019,"category":"Helicopter","commercial":"N","majorCause":"Pilot-Related","sortOrder":1,"accidents":42,"pctAccidents":51.9,"fatalAccidents":1,"pctFatalAccidents":7.1,"fatalities":2,"pctFatalities":9.5,"lethality":0},{"eventYear":2019,"category":"Helicopter","commercial":"N","majorCause":"Mechanical","sortOrder":2,"accidents":4,"pctAccidents":4.9,"fatalAccidents":2,"pctFatalAccidents":14.3,"fatalities":2,"pctFatalities":9.5,"lethality":0},{"eventYear":2019,"category":"Helicopter","commercial":"N","majorCause":"Other/Unknown","sortOrder":3,"accidents":35,"pctAccidents":43.2,"fatalAccidents":11,"pctFatalAccidents":78.6,"fatalities":17,"pctFatalities":81,"lethality":0}],"3.3":[{"eventYear":2010,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":99,"fatalAccidents":20,"accidentHours":1872000,"accidentRate":5.29,"fatalAccidentRate":1.07},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":101,"fatalAccidents":11,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":124,"fatalAccidents":19,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":104,"fatalAccidents":20,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":106,"fatalAccidents":13,"accidentHours":1719000,"accidentRate":6.17,"fatalAccidentRate":0.76},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":91,"fatalAccidents":11,"accidentHours":1748000,"accidentRate":5.21,"fatalAccidentRate":0.63},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":77,"fatalAccidents":12,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":88,"fatalAccidents":13,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":92,"fatalAccidents":16,"accidentHours":1453417,"accidentRate":6.33,"fatalAccidentRate":1.1},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":81,"fatalAccidents":14,"accidentHours":1425895,"accidentRate":5.68,"fatalAccidentRate":0.98}],"3.4":[{"eventYear":2010,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":99,"fatalAccidents":20,"accidentHours":1872000,"accidentRate":5.29,"fatalAccidentRate":1.07},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":101,"fatalAccidents":11,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":124,"fatalAccidents":19,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":104,"fatalAccidents":20,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":106,"fatalAccidents":13,"accidentHours":1719000,"accidentRate":6.17,"fatalAccidentRate":0.76},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":91,"fatalAccidents":11,"accidentHours":1748000,"accidentRate":5.21,"fatalAccidentRate":0.63},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":77,"fatalAccidents":12,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":88,"fatalAccidents":13,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":92,"fatalAccidents":16,"accidentHours":1453417,"accidentRate":6.33,"fatalAccidentRate":1.1},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":81,"fatalAccidents":14,"accidentHours":1425895,"accidentRate":5.68,"fatalAccidentRate":0.98}],"3.5":[{"accidentType":"Total","farPart":"091","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":16,"pctAccidents":19.5,"fatalAccidents":3,"pctFatalAccidents":20,"fatalities":3,"pctFatalities":14.3,"lethality":18.8},{"accidentType":"Total","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":47,"pctAccidents":57.3,"fatalAccidents":9,"pctFatalAccidents":60,"fatalities":14,"pctFatalities":66.7,"lethality":19.1},{"accidentType":"Total","farPart":"091","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":16,"pctAccidents":19.5,"fatalAccidents":2,"pctFatalAccidents":13.3,"fatalities":3,"pctFatalities":14.3,"lethality":12.5},{"accidentType":"Total","farPart":"091","sortOrder":4,"isAggragate":1,"aircraftClass":"Multi-engine turbine","aircraftSubClass":"Multi-engine turbine","accidents":3,"pctAccidents":3.7,"fatalAccidents":1,"pctFatalAccidents":6.7,"fatalities":1,"pctFatalities":4.8,"lethality":33.3}],"3.6":[{"sortOrder":1,"typeOperation":"Personal","accidents":29,"pctAccidents":35.8,"fatalAccidents":7,"pctFatalAccidents":50,"fatalities":10,"pctFatalities":47.6,"lethality":24.1},{"sortOrder":2,"typeOperation":"Instructional","accidents":22,"pctAccidents":27.2,"fatalAccidents":2,"pctFatalAccidents":14.3,"fatalities":3,"pctFatalities":14.3,"lethality":9.1},{"sortOrder":3,"typeOperation":"Public Use","accidents":7,"pctAccidents":8.6,"fatalAccidents":1,"pctFatalAccidents":7.1,"fatalities":1,"pctFatalities":4.8,"lethality":14.3},{"sortOrder":4,"typeOperation":"Positioning","accidents":5,"pctAccidents":6.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"typeOperation":"Aerial Observation","accidents":7,"pctAccidents":8.6,"fatalAccidents":1,"pctFatalAccidents":7.1,"fatalities":3,"pctFatalities":14.3,"lethality":14.3},{"sortOrder":6,"typeOperation":"Business","accidents":3,"pctAccidents":3.7,"fatalAccidents":1,"pctFatalAccidents":7.1,"fatalities":2,"pctFatalities":9.5,"lethality":33.3},{"sortOrder":7,"typeOperation":"Executive/Corporate","accidents":1,"pctAccidents":1.2,"fatalAccidents":1,"pctFatalAccidents":7.1,"fatalities":1,"pctFatalities":4.8,"lethality":100},{"sortOrder":8,"typeOperation":"Other work use","accidents":7,"pctAccidents":8.6,"fatalAccidents":1,"pctFatalAccidents":7.1,"fatalities":1,"pctFatalities":4.8,"lethality":14.3}],"3.7":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":61,"pctAccidents":75.3,"fatalAccidents":7,"pctFatalAccidents":50,"fatalities":10,"pctFatalities":47.6,"lethality":11.5},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":5,"pctAccidents":6.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":3,"pctAccidents":3.7,"fatalAccidents":2,"pctFatalAccidents":14.3,"fatalities":3,"pctFatalities":14.3,"lethality":66.7},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":1,"pctAccidents":1.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":11,"pctAccidents":13.6,"fatalAccidents":5,"pctFatalAccidents":35.7,"fatalities":8,"pctFatalities":38.1,"lethality":45.5}],"3.8":[{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":8,"pctAccidents":9.8,"fatalAccidents":2,"pctFatalAccidents":13.3,"fatalities":3,"pctFatalities":14.3,"lethality":25},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":42,"pctAccidents":51.2,"fatalAccidents":4,"pctFatalAccidents":26.7,"fatalities":5,"pctFatalities":23.8,"lethality":9.5},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":12,"pctAccidents":14.6,"fatalAccidents":2,"pctFatalAccidents":13.3,"fatalities":4,"pctFatalities":19,"lethality":16.7},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":4,"pctAccidents":4.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":16,"pctAccidents":19.5,"fatalAccidents":7,"pctFatalAccidents":46.7,"fatalities":9,"pctFatalities":42.9,"lethality":43.8},{"accidentType":"Total","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":18,"pctAccidents":22,"fatalAccidents":2,"pctFatalAccidents":13.3,"fatalities":3,"pctFatalities":14.3,"lethality":11.1},{"accidentType":"Total","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":31,"pctAccidents":37.8,"fatalAccidents":5,"pctFatalAccidents":33.3,"fatalities":7,"pctFatalities":33.3,"lethality":16.1},{"accidentType":"Total","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":35,"pctAccidents":42.7,"fatalAccidents":4,"pctFatalAccidents":26.7,"fatalities":6,"pctFatalities":28.6,"lethality":11.4}],"3.9":[{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Not yet assigned","totalAccidents":35,"fatalAccidents":11,"fatalities":17,"pctAccidents":43.2,"pctFatalAccidents":78.6,"pctFatalities":81,"lethality":31.4},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Rotorcraft aerodynamics","totalAccidents":15,"fatalAccidents":0,"fatalities":0,"pctAccidents":18.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Maneuvering","totalAccidents":8,"fatalAccidents":0,"fatalities":0,"pctAccidents":9.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Landing","totalAccidents":5,"fatalAccidents":0,"fatalities":0,"pctAccidents":6.2,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Mechanical","totalAccidents":4,"fatalAccidents":2,"fatalities":2,"pctAccidents":4.9,"pctFatalAccidents":14.3,"pctFatalities":9.5,"lethality":50},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Other / miscellaneous","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Taxi / ground operations","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":3.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Weather","totalAccidents":3,"fatalAccidents":1,"fatalities":2,"pctAccidents":3.7,"pctFatalAccidents":7.1,"pctFatalities":9.5,"lethality":33.3},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Take-off / climb","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Pre-flight / static","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.2,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Descent / approach","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.2,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"Text-Intro-CH":{},"4.1":{"accidents":43,"aircraft":43,"fatalAccidents":9,"lethality":20.9,"fatalities":21,"params":{"year":2019,"category":"Helicopter","commercial":"Y"}},"4.2":[{"eventYear":2019,"category":"Helicopter","commercial":"Y","majorCause":"Pilot-Related","sortOrder":1,"accidents":26,"pctAccidents":60.5,"fatalAccidents":4,"pctFatalAccidents":44.4,"fatalities":10,"pctFatalities":47.6,"lethality":0},{"eventYear":2019,"category":"Helicopter","commercial":"Y","majorCause":"Mechanical","sortOrder":2,"accidents":5,"pctAccidents":11.6,"fatalAccidents":2,"pctFatalAccidents":22.2,"fatalities":2,"pctFatalities":9.5,"lethality":0},{"eventYear":2019,"category":"Helicopter","commercial":"Y","majorCause":"Other/Unknown","sortOrder":3,"accidents":12,"pctAccidents":27.9,"fatalAccidents":3,"pctFatalAccidents":33.3,"fatalities":9,"pctFatalities":42.9,"lethality":0}],"4.3":[{"eventYear":2010,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":5,"accidentHours":1533000,"accidentRate":2.22,"fatalAccidentRate":0.33},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":31,"fatalAccidents":7,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":40,"fatalAccidents":6,"accidentHours":1525000,"accidentRate":2.62,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":7,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":37,"fatalAccidents":7,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":38,"fatalAccidents":5,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":7,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48},{"eventYear":2019,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":43,"fatalAccidents":9,"accidentHours":1570636,"accidentRate":2.74,"fatalAccidentRate":0.57}],"4.4":[{"eventYear":2010,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":5,"accidentHours":1533000,"accidentRate":2.22,"fatalAccidentRate":0.33},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":31,"fatalAccidents":7,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":40,"fatalAccidents":6,"accidentHours":1525000,"accidentRate":2.62,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":7,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":37,"fatalAccidents":7,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":38,"fatalAccidents":5,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":7,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48},{"eventYear":2019,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":43,"fatalAccidents":9,"accidentHours":1570636,"accidentRate":2.74,"fatalAccidentRate":0.57}],"4.5":[{"accidentType":"Total","farPart":"135","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":2,"pctAccidents":14.3,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":7,"pctFatalities":38.9,"lethality":50},{"accidentType":"Total","farPart":"137","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":3,"pctAccidents":12,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":12,"pctAccidents":48,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":1,"pctAccidents":25,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":1,"pctAccidents":7.1,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":3,"pctFatalities":16.7,"lethality":100},{"accidentType":"Total","farPart":"135","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":8,"pctAccidents":57.1,"fatalAccidents":3,"pctFatalAccidents":50,"fatalities":6,"pctFatalities":33.3,"lethality":37.5},{"accidentType":"Total","farPart":"133","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":3,"pctAccidents":75,"fatalAccidents":2,"pctFatalAccidents":100,"fatalities":2,"pctFatalities":100,"lethality":66.7},{"accidentType":"Total","farPart":"137","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":10,"pctAccidents":40,"fatalAccidents":1,"pctFatalAccidents":100,"fatalities":1,"pctFatalities":100,"lethality":10},{"accidentType":"Total","farPart":"135","sortOrder":4,"isAggragate":1,"aircraftClass":"Multi-engine turbine","aircraftSubClass":"Multi-engine turbine","accidents":3,"pctAccidents":21.4,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":2,"pctFatalities":11.1,"lethality":33.3}],"4.6":[{"sortOrder":1,"farPart":"133","conditions":"Day VMC","accidents":4,"pctAccidents":100,"fatalAccidents":2,"pctFatalAccidents":100,"fatalities":2,"pctFatalities":100,"lethality":50},{"sortOrder":1,"farPart":"135","conditions":"Day VMC","accidents":5,"pctAccidents":35.7,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":3,"pctFatalities":16.7,"lethality":20},{"sortOrder":1,"farPart":"137","conditions":"Day VMC","accidents":22,"pctAccidents":88,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":2,"farPart":"135","conditions":"Night VMC","accidents":3,"pctAccidents":21.4,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":1,"pctFatalities":5.6,"lethality":33.3},{"sortOrder":2,"farPart":"137","conditions":"Night VMC","accidents":1,"pctAccidents":4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":3,"farPart":"135","conditions":"Day IMC","accidents":1,"pctAccidents":7.1,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":2,"pctFatalities":11.1,"lethality":100},{"sortOrder":4,"farPart":"135","conditions":"Night IMC","accidents":1,"pctAccidents":7.1,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":2,"pctFatalities":11.1,"lethality":100},{"sortOrder":5,"farPart":"135","conditions":"Unknown","accidents":4,"pctAccidents":28.6,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":10,"pctFatalities":55.6,"lethality":50},{"sortOrder":5,"farPart":"137","conditions":"Unknown","accidents":2,"pctAccidents":8,"fatalAccidents":1,"pctFatalAccidents":100,"fatalities":1,"pctFatalities":100,"lethality":50}],"4.7":[{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"ATP","accidents":2,"pctAccidents":14.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"ATP","accidents":3,"pctAccidents":12,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"Commercial","accidents":21,"pctAccidents":84,"fatalAccidents":1,"pctFatalAccidents":100,"fatalities":1,"pctFatalities":100,"lethality":4.8},{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"Commercial","accidents":11,"pctAccidents":78.6,"fatalAccidents":6,"pctFatalAccidents":100,"fatalities":18,"pctFatalities":100,"lethality":54.5},{"accidentType":"Total","farPart":"133","sortOrder":1,"certLevel":"Commercial","accidents":4,"pctAccidents":100,"fatalAccidents":2,"pctFatalAccidents":100,"fatalities":2,"pctFatalities":100,"lethality":50},{"accidentType":"Total","farPart":"135","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":7.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":3,"certLevel":"Second pilot on board","accidents":1,"pctAccidents":7.1,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":2,"pctFatalities":11.1,"lethality":100},{"accidentType":"Total","farPart":"133","sortOrder":4,"certLevel":"CFI on board","accidents":3,"pctAccidents":75,"fatalAccidents":2,"pctFatalAccidents":100,"fatalities":2,"pctFatalities":100,"lethality":66.7},{"accidentType":"Total","farPart":"137","sortOrder":4,"certLevel":"CFI on board","accidents":11,"pctAccidents":44,"fatalAccidents":1,"pctFatalAccidents":100,"fatalities":1,"pctFatalities":100,"lethality":9.1},{"accidentType":"Total","farPart":"135","sortOrder":4,"certLevel":"CFI on board","accidents":7,"pctAccidents":50,"fatalAccidents":3,"pctFatalAccidents":50,"fatalities":7,"pctFatalities":38.9,"lethality":42.9},{"accidentType":"Total","farPart":"135","sortOrder":5,"certLevel":"IFR pilot on board","accidents":11,"pctAccidents":78.6,"fatalAccidents":5,"pctFatalAccidents":83.3,"fatalities":11,"pctFatalities":61.1,"lethality":45.5},{"accidentType":"Total","farPart":"137","sortOrder":5,"certLevel":"IFR pilot on board","accidents":18,"pctAccidents":72,"fatalAccidents":1,"pctFatalAccidents":100,"fatalities":1,"pctFatalities":100,"lethality":5.6},{"accidentType":"Total","farPart":"133","sortOrder":5,"certLevel":"IFR pilot on board","accidents":2,"pctAccidents":50,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":1,"pctFatalities":50,"lethality":50}],"5.1":[{"eventYear":2010,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":198,"fatalAccidents":47,"accidentHours":18423000,"accidentRate":1.07,"fatalAccidentRate":0.26},{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":236,"fatalAccidents":59,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":222,"fatalAccidents":54,"accidentHours":17758000,"accidentRate":1.25,"fatalAccidentRate":0.3},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":161,"fatalAccidents":31,"accidentHours":16554000,"accidentRate":0.97,"fatalAccidentRate":0.19},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":195,"fatalAccidents":59,"accidentHours":16474000,"accidentRate":1.18,"fatalAccidentRate":0.36},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":166,"fatalAccidents":42,"accidentHours":17375000,"accidentRate":0.96,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":162,"fatalAccidents":29,"accidentHours":18277000,"accidentRate":0.89,"fatalAccidentRate":0.16},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":183,"fatalAccidents":32,"accidentHours":18092000,"accidentRate":1.01,"fatalAccidentRate":0.18},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":165,"fatalAccidents":35,"accidentHours":18862725,"accidentRate":0.87,"fatalAccidentRate":0.19},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":159,"fatalAccidents":32,"accidentHours":17587290,"accidentRate":0.9,"fatalAccidentRate":0.18}],"5.2":[{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Landing","totalAccidents":41,"fatalAccidents":1,"fatalities":1,"pctAccidents":26.1,"pctFatalAccidents":3.1,"pctFatalities":2.4,"lethality":2.4},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Mechanical","totalAccidents":32,"fatalAccidents":2,"fatalities":2,"pctAccidents":20.4,"pctFatalAccidents":6.3,"pctFatalities":4.8,"lethality":6.3},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Take-off","totalAccidents":20,"fatalAccidents":5,"fatalities":6,"pctAccidents":12.7,"pctFatalAccidents":15.6,"pctFatalities":14.3,"lethality":25},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Other","totalAccidents":19,"fatalAccidents":10,"fatalities":14,"pctAccidents":12.1,"pctFatalAccidents":31.3,"pctFatalities":33.3,"lethality":52.6},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Maneuvering","totalAccidents":9,"fatalAccidents":6,"fatalities":9,"pctAccidents":5.7,"pctFatalAccidents":18.8,"pctFatalities":21.4,"lethality":66.7},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Descent / approach","totalAccidents":9,"fatalAccidents":3,"fatalities":4,"pctAccidents":5.7,"pctFatalAccidents":9.4,"pctFatalities":9.5,"lethality":33.3},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Fuel management","totalAccidents":7,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Pre-flight","totalAccidents":6,"fatalAccidents":1,"fatalities":1,"pctAccidents":3.8,"pctFatalAccidents":3.1,"pctFatalities":2.4,"lethality":16.7},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Taxi","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Go-around","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Other (power loss)","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Cruise","totalAccidents":2,"fatalAccidents":1,"fatalities":1,"pctAccidents":1.3,"pctFatalAccidents":3.1,"pctFatalities":2.4,"lethality":50},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Weather","totalAccidents":2,"fatalAccidents":2,"fatalities":3,"pctAccidents":1.3,"pctFatalAccidents":6.3,"pctFatalities":7.1,"lethality":100},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Collision","totalAccidents":1,"fatalAccidents":1,"fatalities":1,"pctAccidents":0.6,"pctFatalAccidents":3.1,"pctFatalities":2.4,"lethality":100}],"5.3":[{"accidentType":"LightSport","farPart":"091","sortOrder":0,"isAggragate":1,"aircraftClass":"E-LSA","aircraftSubClass":"E-LSA","accidents":6,"pctAccidents":3.8,"fatalAccidents":2,"pctFatalAccidents":6.1,"fatalities":3,"pctFatalities":7.1,"lethality":33.3},{"accidentType":"LightSport","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":137,"pctAccidents":85.6,"fatalAccidents":25,"pctFatalAccidents":75.8,"fatalities":32,"pctFatalities":76.2,"lethality":18.2},{"accidentType":"LightSport","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":84,"pctAccidents":52.5,"fatalAccidents":16,"pctFatalAccidents":48.5,"fatalities":20,"pctFatalities":47.6,"lethality":19},{"accidentType":"LightSport","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":14,"pctAccidents":8.8,"fatalAccidents":4,"pctFatalAccidents":12.1,"fatalities":5,"pctFatalities":11.9,"lethality":28.6},{"accidentType":"LightSport","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":1,"pctAccidents":0.6,"fatalAccidents":1,"pctFatalAccidents":3,"fatalities":1,"pctFatalities":2.4,"lethality":100},{"accidentType":"LightSport","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":2,"pctAccidents":1.3,"fatalAccidents":1,"pctFatalAccidents":3,"fatalities":1,"pctFatalities":2.4,"lethality":50}]}`;

jsonCacheDB['2020'] = '{"Text-Intro":{},"Summary 1":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidents":1182,"aircraft":1195,"fatalAccidents":225,"fatalaties":394,"lethality":19,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidents":115,"aircraft":118,"fatalAccidents":16,"fatalaties":28,"lethality":13.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidents":101,"aircraft":101,"fatalAccidents":10,"fatalaties":12,"lethality":9.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidents":31,"aircraft":31,"fatalAccidents":7,"fatalaties":20,"lethality":22.6,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidents":1154,"aircraft":1163,"fatalAccidents":213,"fatalaties":329,"lethality":18.5,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidents":81,"aircraft":83,"fatalAccidents":7,"fatalaties":7,"lethality":8.6,"accidentHours":3011000,"accidentRate":2.69,"fatalAccidentRate":0.23},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidents":124,"aircraft":126,"fatalAccidents":19,"fatalaties":29,"lethality":15.3,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":5,"lethality":8.6,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Airplane","commercial":"N","accidents":964,"aircraft":973,"fatalAccidents":167,"fatalaties":284,"lethality":17.3,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidents":80,"aircraft":80,"fatalAccidents":10,"fatalaties":24,"lethality":12.5,"accidentHours":3238000,"accidentRate":2.47,"fatalAccidentRate":0.31},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidents":104,"aircraft":104,"fatalAccidents":20,"fatalaties":42,"lethality":19.2,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidents":40,"aircraft":40,"fatalAccidents":6,"fatalaties":7,"lethality":15,"accidentHours":1525000,"accidentRate":2.62,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Airplane","commercial":"N","accidents":966,"aircraft":973,"fatalAccidents":196,"fatalaties":306,"lethality":20.3,"accidentHours":16474000,"accidentRate":5.86,"fatalAccidentRate":1.19},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":11,"fatalaties":17,"lethality":16.4,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidents":106,"aircraft":106,"fatalAccidents":12,"fatalaties":19,"lethality":11.3,"accidentHours":1719000,"accidentRate":6.17,"fatalAccidentRate":0.7},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":7,"fatalaties":11,"lethality":20,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Airplane","commercial":"N","accidents":973,"aircraft":983,"fatalAccidents":195,"fatalaties":329,"lethality":20,"accidentHours":17375000,"accidentRate":5.6,"fatalAccidentRate":1.12},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":8,"fatalaties":16,"lethality":10.5,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidents":91,"aircraft":91,"fatalAccidents":11,"fatalaties":18,"lethality":12.1,"accidentHours":1748000,"accidentRate":5.21,"fatalAccidentRate":0.63},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidents":37,"aircraft":37,"fatalAccidents":7,"fatalaties":12,"lethality":18.9,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Airplane","commercial":"N","accidents":1048,"aircraft":1064,"fatalAccidents":158,"fatalaties":281,"lethality":15.1,"accidentHours":18277000,"accidentRate":5.73,"fatalAccidentRate":0.86},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidents":64,"aircraft":65,"fatalAccidents":19,"fatalaties":34,"lethality":29.7,"accidentHours":3234000,"accidentRate":1.98,"fatalAccidentRate":0.59},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidents":77,"aircraft":77,"fatalAccidents":12,"fatalaties":19,"lethality":15.6,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":6,"lethality":8.6,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Airplane","commercial":"N","accidents":1001,"aircraft":1011,"fatalAccidents":162,"fatalaties":268,"lethality":16.2,"accidentHours":18092000,"accidentRate":5.53,"fatalAccidentRate":0.9},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidents":74,"aircraft":74,"fatalAccidents":11,"fatalaties":14,"lethality":14.9,"accidentHours":3632000,"accidentRate":2.04,"fatalAccidentRate":0.3},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidents":88,"aircraft":88,"fatalAccidents":13,"fatalaties":18,"lethality":14.8,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidents":38,"aircraft":38,"fatalAccidents":5,"fatalaties":11,"lethality":13.2,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Airplane","commercial":"N","accidents":1032,"aircraft":1047,"fatalAccidents":167,"fatalaties":274,"lethality":16.2,"accidentHours":18862725,"accidentRate":5.47,"fatalAccidentRate":0.89},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidents":63,"aircraft":63,"fatalAccidents":9,"fatalaties":13,"lethality":14.3,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.25},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidents":92,"aircraft":92,"fatalAccidents":16,"fatalaties":36,"lethality":17.4,"accidentHours":1453417,"accidentRate":6.33,"fatalAccidentRate":1.1},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":7,"fatalaties":13,"lethality":20.6,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48},{"eventYear":2019,"category":"Airplane","commercial":"N","accidents":988,"aircraft":999,"fatalAccidents":180,"fatalaties":306,"lethality":18.2,"accidentHours":17587290,"accidentRate":5.62,"fatalAccidentRate":1.02},{"eventYear":2019,"category":"Airplane","commercial":"Y","accidents":55,"aircraft":57,"fatalAccidents":10,"fatalaties":19,"lethality":18.2,"accidentHours":3389706,"accidentRate":1.62,"fatalAccidentRate":0.3},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidents":80,"aircraft":81,"fatalAccidents":14,"fatalaties":21,"lethality":17.5,"accidentHours":1425895,"accidentRate":5.61,"fatalAccidentRate":0.98},{"eventYear":2019,"category":"Helicopter","commercial":"Y","accidents":44,"aircraft":44,"fatalAccidents":10,"fatalaties":23,"lethality":22.7,"accidentHours":1570636,"accidentRate":2.8,"fatalAccidentRate":0.64},{"eventYear":2020,"category":"Airplane","commercial":"N","accidents":892,"aircraft":897,"fatalAccidents":154,"fatalaties":255,"lethality":17.3,"accidentHours":16911260,"accidentRate":5.27,"fatalAccidentRate":0.91},{"eventYear":2020,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":13,"fatalaties":24,"lethality":19.4,"accidentHours":3086406,"accidentRate":2.17,"fatalAccidentRate":0.42},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidents":62,"aircraft":62,"fatalAccidents":13,"fatalaties":18,"lethality":21,"accidentHours":1313051,"accidentRate":4.72,"fatalAccidentRate":0.99},{"eventYear":2020,"category":"Helicopter","commercial":"Y","accidents":30,"aircraft":30,"fatalAccidents":7,"fatalaties":17,"lethality":23.3,"accidentHours":1095265,"accidentRate":2.74,"fatalAccidentRate":0.64}],"Summary 2":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidents":1182,"aircraft":1195,"fatalAccidents":225,"fatalaties":394,"lethality":19,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Airplane","commercial":"Y","accidents":115,"aircraft":118,"fatalAccidents":16,"fatalaties":28,"lethality":13.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"N","accidents":101,"aircraft":101,"fatalAccidents":10,"fatalaties":12,"lethality":9.9,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidents":31,"aircraft":31,"fatalAccidents":7,"fatalaties":20,"lethality":22.6,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidents":1154,"aircraft":1163,"fatalAccidents":213,"fatalaties":329,"lethality":18.5,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidents":81,"aircraft":83,"fatalAccidents":7,"fatalaties":7,"lethality":8.6,"accidentHours":3011000,"accidentRate":2.69,"fatalAccidentRate":0.23},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidents":124,"aircraft":126,"fatalAccidents":19,"fatalaties":29,"lethality":15.3,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":5,"lethality":8.6,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Airplane","commercial":"N","accidents":964,"aircraft":973,"fatalAccidents":167,"fatalaties":284,"lethality":17.3,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidents":80,"aircraft":80,"fatalAccidents":10,"fatalaties":24,"lethality":12.5,"accidentHours":3238000,"accidentRate":2.47,"fatalAccidentRate":0.31},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidents":104,"aircraft":104,"fatalAccidents":20,"fatalaties":42,"lethality":19.2,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidents":40,"aircraft":40,"fatalAccidents":6,"fatalaties":7,"lethality":15,"accidentHours":1525000,"accidentRate":2.62,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Airplane","commercial":"N","accidents":966,"aircraft":973,"fatalAccidents":196,"fatalaties":306,"lethality":20.3,"accidentHours":16474000,"accidentRate":5.86,"fatalAccidentRate":1.19},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":11,"fatalaties":17,"lethality":16.4,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidents":106,"aircraft":106,"fatalAccidents":12,"fatalaties":19,"lethality":11.3,"accidentHours":1719000,"accidentRate":6.17,"fatalAccidentRate":0.7},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":7,"fatalaties":11,"lethality":20,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Airplane","commercial":"N","accidents":973,"aircraft":983,"fatalAccidents":195,"fatalaties":329,"lethality":20,"accidentHours":17375000,"accidentRate":5.6,"fatalAccidentRate":1.12},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":8,"fatalaties":16,"lethality":10.5,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidents":91,"aircraft":91,"fatalAccidents":11,"fatalaties":18,"lethality":12.1,"accidentHours":1748000,"accidentRate":5.21,"fatalAccidentRate":0.63},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidents":37,"aircraft":37,"fatalAccidents":7,"fatalaties":12,"lethality":18.9,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Airplane","commercial":"N","accidents":1048,"aircraft":1064,"fatalAccidents":158,"fatalaties":281,"lethality":15.1,"accidentHours":18277000,"accidentRate":5.73,"fatalAccidentRate":0.86},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidents":64,"aircraft":65,"fatalAccidents":19,"fatalaties":34,"lethality":29.7,"accidentHours":3234000,"accidentRate":1.98,"fatalAccidentRate":0.59},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidents":77,"aircraft":77,"fatalAccidents":12,"fatalaties":19,"lethality":15.6,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":6,"lethality":8.6,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Airplane","commercial":"N","accidents":1001,"aircraft":1011,"fatalAccidents":162,"fatalaties":268,"lethality":16.2,"accidentHours":18092000,"accidentRate":5.53,"fatalAccidentRate":0.9},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidents":74,"aircraft":74,"fatalAccidents":11,"fatalaties":14,"lethality":14.9,"accidentHours":3632000,"accidentRate":2.04,"fatalAccidentRate":0.3},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidents":88,"aircraft":88,"fatalAccidents":13,"fatalaties":18,"lethality":14.8,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidents":38,"aircraft":38,"fatalAccidents":5,"fatalaties":11,"lethality":13.2,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Airplane","commercial":"N","accidents":1032,"aircraft":1047,"fatalAccidents":167,"fatalaties":274,"lethality":16.2,"accidentHours":18862725,"accidentRate":5.47,"fatalAccidentRate":0.89},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidents":63,"aircraft":63,"fatalAccidents":9,"fatalaties":13,"lethality":14.3,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.25},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidents":92,"aircraft":92,"fatalAccidents":16,"fatalaties":36,"lethality":17.4,"accidentHours":1453417,"accidentRate":6.33,"fatalAccidentRate":1.1},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":7,"fatalaties":13,"lethality":20.6,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48},{"eventYear":2019,"category":"Airplane","commercial":"N","accidents":988,"aircraft":999,"fatalAccidents":180,"fatalaties":306,"lethality":18.2,"accidentHours":17587290,"accidentRate":5.62,"fatalAccidentRate":1.02},{"eventYear":2019,"category":"Airplane","commercial":"Y","accidents":55,"aircraft":57,"fatalAccidents":10,"fatalaties":19,"lethality":18.2,"accidentHours":3389706,"accidentRate":1.62,"fatalAccidentRate":0.3},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidents":80,"aircraft":81,"fatalAccidents":14,"fatalaties":21,"lethality":17.5,"accidentHours":1425895,"accidentRate":5.61,"fatalAccidentRate":0.98},{"eventYear":2019,"category":"Helicopter","commercial":"Y","accidents":44,"aircraft":44,"fatalAccidents":10,"fatalaties":23,"lethality":22.7,"accidentHours":1570636,"accidentRate":2.8,"fatalAccidentRate":0.64},{"eventYear":2020,"category":"Airplane","commercial":"N","accidents":892,"aircraft":897,"fatalAccidents":154,"fatalaties":255,"lethality":17.3,"accidentHours":16911260,"accidentRate":5.27,"fatalAccidentRate":0.91},{"eventYear":2020,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":13,"fatalaties":24,"lethality":19.4,"accidentHours":3086406,"accidentRate":2.17,"fatalAccidentRate":0.42},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidents":62,"aircraft":62,"fatalAccidents":13,"fatalaties":18,"lethality":21,"accidentHours":1313051,"accidentRate":4.72,"fatalAccidentRate":0.99},{"eventYear":2020,"category":"Helicopter","commercial":"Y","accidents":30,"aircraft":30,"fatalAccidents":7,"fatalaties":17,"lethality":23.3,"accidentHours":1095265,"accidentRate":2.74,"fatalAccidentRate":0.64}],"Text-Intro-NCFW":{},"1.1":{"accidents":892,"aircraft":897,"fatalAccidents":156,"lethality":17.5,"fatalities":273,"params":{"year":2020,"category":"Airplane","commercial":"N"}},"1.2":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1182,"fatalAccidents":225,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1154,"fatalAccidents":213,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":964,"fatalAccidents":167,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":966,"fatalAccidents":196,"accidentHours":16474000,"accidentRate":5.86,"fatalAccidentRate":1.19},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":973,"fatalAccidents":195,"accidentHours":17375000,"accidentRate":5.6,"fatalAccidentRate":1.12},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1048,"fatalAccidents":159,"accidentHours":18277000,"accidentRate":5.73,"fatalAccidentRate":0.87},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1001,"fatalAccidents":162,"accidentHours":18092000,"accidentRate":5.53,"fatalAccidentRate":0.9},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1032,"fatalAccidents":167,"accidentHours":18862725,"accidentRate":5.47,"fatalAccidentRate":0.89},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":988,"fatalAccidents":180,"accidentHours":17587290,"accidentRate":5.62,"fatalAccidentRate":1.02},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":892,"fatalAccidents":156,"accidentHours":16911260,"accidentRate":5.27,"fatalAccidentRate":0.92}],"1.3":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1182,"fatalAccidents":225,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1154,"fatalAccidents":213,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":964,"fatalAccidents":167,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":966,"fatalAccidents":196,"accidentHours":16474000,"accidentRate":5.86,"fatalAccidentRate":1.19},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":973,"fatalAccidents":195,"accidentHours":17375000,"accidentRate":5.6,"fatalAccidentRate":1.12},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1048,"fatalAccidents":159,"accidentHours":18277000,"accidentRate":5.73,"fatalAccidentRate":0.87},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1001,"fatalAccidents":162,"accidentHours":18092000,"accidentRate":5.53,"fatalAccidentRate":0.9},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1032,"fatalAccidents":167,"accidentHours":18862725,"accidentRate":5.47,"fatalAccidentRate":0.89},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":988,"fatalAccidents":180,"accidentHours":17587290,"accidentRate":5.62,"fatalAccidentRate":1.02},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":892,"fatalAccidents":156,"accidentHours":16911260,"accidentRate":5.27,"fatalAccidentRate":0.92}],"1.4":[{"eventYear":2020,"category":"Airplane","commercial":"N","majorCause":"Pilot-Related","sortOrder":1,"accidents":614,"pctAccidents":69.1,"fatalAccidents":79,"pctFatalAccidents":51.6,"fatalities":130,"pctFatalities":50,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","majorCause":"Mechanical","sortOrder":2,"accidents":153,"pctAccidents":17.2,"fatalAccidents":14,"pctFatalAccidents":9.2,"fatalities":20,"pctFatalities":7.7,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","majorCause":"Other/Unknown","sortOrder":3,"accidents":122,"pctAccidents":13.7,"fatalAccidents":60,"pctFatalAccidents":39.2,"fatalities":110,"pctFatalities":42.3,"lethality":0}],"1.5":[{"accidentType":"Total","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":652,"pctAccidents":72.7,"fatalAccidents":92,"pctFatalAccidents":58.2,"fatalities":138,"pctFatalities":54.1,"lethality":14.1},{"accidentType":"Total","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":285,"pctAccidents":31.8,"fatalAccidents":30,"pctFatalAccidents":19,"fatalities":36,"pctFatalities":14.1,"lethality":10.5},{"accidentType":"Total","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":177,"pctAccidents":19.7,"fatalAccidents":46,"pctFatalAccidents":29.1,"fatalities":83,"pctFatalities":32.5,"lethality":26},{"accidentType":"Total","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":28,"pctAccidents":3.1,"fatalAccidents":10,"pctFatalAccidents":6.3,"fatalities":26,"pctFatalities":10.2,"lethality":35.7},{"accidentType":"Total","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":59,"pctAccidents":6.6,"fatalAccidents":16,"pctFatalAccidents":10.1,"fatalities":29,"pctFatalities":11.4,"lethality":27.1},{"accidentType":"Total","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":5,"pctAccidents":0.6,"fatalAccidents":3,"pctFatalAccidents":1.9,"fatalities":7,"pctFatalities":2.7,"lethality":60},{"accidentType":"Total","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":9,"pctAccidents":1,"fatalAccidents":4,"pctFatalAccidents":2.5,"fatalities":5,"pctFatalities":2,"lethality":44.4}],"1.6":[{"sortOrder":1,"typeOperation":null,"accidents":2,"pctAccidents":0.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":1,"typeOperation":"Aerial Application","accidents":2,"pctAccidents":0.2,"fatalAccidents":1,"pctFatalAccidents":0.6,"fatalities":1,"pctFatalities":0.4,"lethality":50},{"sortOrder":1,"typeOperation":"Personal","accidents":684,"pctAccidents":76.7,"fatalAccidents":129,"pctFatalAccidents":83.8,"fatalities":214,"pctFatalities":84.6,"lethality":18.9},{"sortOrder":2,"typeOperation":"Instructional","accidents":152,"pctAccidents":17,"fatalAccidents":12,"pctFatalAccidents":7.8,"fatalities":19,"pctFatalities":7.5,"lethality":7.9},{"sortOrder":3,"typeOperation":"Public Use","accidents":3,"pctAccidents":0.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":4,"typeOperation":"Positioning","accidents":12,"pctAccidents":1.3,"fatalAccidents":2,"pctFatalAccidents":1.3,"fatalities":2,"pctFatalities":0.8,"lethality":16.7},{"sortOrder":5,"typeOperation":"Aerial Observation","accidents":8,"pctAccidents":0.9,"fatalAccidents":2,"pctFatalAccidents":1.3,"fatalities":4,"pctFatalities":1.6,"lethality":25},{"sortOrder":6,"typeOperation":"Business","accidents":9,"pctAccidents":1,"fatalAccidents":5,"pctFatalAccidents":3.2,"fatalities":10,"pctFatalities":4,"lethality":55.6},{"sortOrder":7,"typeOperation":"Executive/Corporate","accidents":3,"pctAccidents":0.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":8,"typeOperation":"Other work use","accidents":14,"pctAccidents":1.6,"fatalAccidents":3,"pctFatalAccidents":1.9,"fatalities":3,"pctFatalities":1.2,"lethality":21.4},{"sortOrder":9,"typeOperation":"Other or unknown","accidents":3,"pctAccidents":0.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.7":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":760,"pctAccidents":85.5,"fatalAccidents":107,"pctFatalAccidents":69.9,"fatalities":178,"pctFatalities":68.5,"lethality":14.1},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":71,"pctAccidents":8,"fatalAccidents":10,"pctFatalAccidents":6.5,"fatalities":15,"pctFatalities":5.8,"lethality":14.1},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":24,"pctAccidents":2.7,"fatalAccidents":14,"pctFatalAccidents":9.2,"fatalities":32,"pctFatalities":12.3,"lethality":58.3},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":12,"pctAccidents":1.3,"fatalAccidents":11,"pctFatalAccidents":7.2,"fatalities":18,"pctFatalities":6.9,"lethality":91.7},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":22,"pctAccidents":2.5,"fatalAccidents":11,"pctFatalAccidents":7.2,"fatalities":17,"pctFatalities":6.5,"lethality":50}],"1.8":[{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":121,"pctAccidents":13.5,"fatalAccidents":15,"pctFatalAccidents":9.5,"fatalities":27,"pctFatalities":10.6,"lethality":12.4},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":194,"pctAccidents":21.6,"fatalAccidents":25,"pctFatalAccidents":15.8,"fatalities":46,"pctFatalities":18,"lethality":12.9},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":386,"pctAccidents":43,"fatalAccidents":66,"pctFatalAccidents":41.8,"fatalities":106,"pctFatalities":41.6,"lethality":17.1},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":14,"pctAccidents":1.6,"fatalAccidents":5,"pctFatalAccidents":3.2,"fatalities":7,"pctFatalities":2.7,"lethality":35.7},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":64,"pctAccidents":7.1,"fatalAccidents":6,"pctFatalAccidents":3.8,"fatalities":7,"pctFatalities":2.7,"lethality":9.4},{"accidentType":"Total","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":118,"pctAccidents":13.2,"fatalAccidents":41,"pctFatalAccidents":25.9,"fatalities":62,"pctFatalities":24.3,"lethality":34.7},{"accidentType":"Total","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":136,"pctAccidents":15.2,"fatalAccidents":24,"pctFatalAccidents":15.2,"fatalities":49,"pctFatalities":19.2,"lethality":17.6},{"accidentType":"Total","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":216,"pctAccidents":24.1,"fatalAccidents":24,"pctFatalAccidents":15.2,"fatalities":44,"pctFatalities":17.3,"lethality":11.1},{"accidentType":"Total","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":442,"pctAccidents":49.3,"fatalAccidents":67,"pctFatalAccidents":42.4,"fatalities":119,"pctFatalities":46.7,"lethality":15.2}],"1.9":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":914,"fatalAccidents":183,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":863,"fatalAccidents":166,"accidentHours":17758000,"accidentRate":4.86,"fatalAccidentRate":0.93},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":714,"fatalAccidents":124,"accidentHours":16554000,"accidentRate":4.31,"fatalAccidentRate":0.75},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":724,"fatalAccidents":148,"accidentHours":16474000,"accidentRate":4.39,"fatalAccidentRate":0.9},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":721,"fatalAccidents":146,"accidentHours":17375000,"accidentRate":4.15,"fatalAccidentRate":0.84},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":769,"fatalAccidents":117,"accidentHours":18277000,"accidentRate":4.21,"fatalAccidentRate":0.64},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":735,"fatalAccidents":128,"accidentHours":18092000,"accidentRate":4.06,"fatalAccidentRate":0.71},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":776,"fatalAccidents":125,"accidentHours":18862725,"accidentRate":4.11,"fatalAccidentRate":0.66},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":691,"fatalAccidents":118,"accidentHours":17587290,"accidentRate":3.93,"fatalAccidentRate":0.67},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":614,"fatalAccidents":79,"accidentHours":16911260,"accidentRate":3.63,"fatalAccidentRate":0.47}],"1.10":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":914,"fatalAccidents":183,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":863,"fatalAccidents":166,"accidentHours":17758000,"accidentRate":4.86,"fatalAccidentRate":0.93},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":714,"fatalAccidents":124,"accidentHours":16554000,"accidentRate":4.31,"fatalAccidentRate":0.75},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":724,"fatalAccidents":148,"accidentHours":16474000,"accidentRate":4.39,"fatalAccidentRate":0.9},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":721,"fatalAccidents":146,"accidentHours":17375000,"accidentRate":4.15,"fatalAccidentRate":0.84},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":769,"fatalAccidents":117,"accidentHours":18277000,"accidentRate":4.21,"fatalAccidentRate":0.64},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":735,"fatalAccidents":128,"accidentHours":18092000,"accidentRate":4.06,"fatalAccidentRate":0.71},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":776,"fatalAccidents":125,"accidentHours":18862725,"accidentRate":4.11,"fatalAccidentRate":0.66},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":691,"fatalAccidents":118,"accidentHours":17587290,"accidentRate":3.93,"fatalAccidentRate":0.67},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":614,"fatalAccidents":79,"accidentHours":16911260,"accidentRate":3.63,"fatalAccidentRate":0.47}],"1.11":[{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Landing","totalAccidents":307,"fatalAccidents":3,"fatalities":6,"pctAccidents":46.8,"pctFatalAccidents":3.1,"pctFatalities":3.7,"lethality":1},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Take-off","totalAccidents":131,"fatalAccidents":16,"fatalities":28,"pctAccidents":20,"pctFatalAccidents":16.7,"pctFatalities":17.4,"lethality":12.2},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Fuel management","totalAccidents":58,"fatalAccidents":8,"fatalities":10,"pctAccidents":8.8,"pctFatalAccidents":8.3,"pctFatalities":6.2,"lethality":13.8},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Other","totalAccidents":53,"fatalAccidents":12,"fatalities":19,"pctAccidents":8.1,"pctFatalAccidents":12.5,"pctFatalities":11.8,"lethality":22.6},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Descent / approach","totalAccidents":45,"fatalAccidents":24,"fatalities":41,"pctAccidents":6.9,"pctFatalAccidents":25,"pctFatalities":25.5,"lethality":53.3},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Maneuvering","totalAccidents":39,"fatalAccidents":16,"fatalities":25,"pctAccidents":5.9,"pctFatalAccidents":16.7,"pctFatalities":15.5,"lethality":41},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Weather","totalAccidents":23,"fatalAccidents":17,"fatalities":32,"pctAccidents":3.5,"pctFatalAccidents":17.7,"pctFatalities":19.9,"lethality":73.9}],"1.1.1":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":367,"fatalAccidents":2,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":344,"fatalAccidents":7,"accidentHours":17758000,"accidentRate":1.94,"fatalAccidentRate":0.04},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":281,"fatalAccidents":3,"accidentHours":16554000,"accidentRate":1.7,"fatalAccidentRate":0.02},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":280,"fatalAccidents":5,"accidentHours":16474000,"accidentRate":1.7,"fatalAccidentRate":0.03},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":260,"fatalAccidents":1,"accidentHours":17375000,"accidentRate":1.5,"fatalAccidentRate":0.01},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":338,"fatalAccidents":6,"accidentHours":18277000,"accidentRate":1.85,"fatalAccidentRate":0.03},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":325,"fatalAccidents":3,"accidentHours":18092000,"accidentRate":1.8,"fatalAccidentRate":0.02},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":336,"fatalAccidents":2,"accidentHours":18862725,"accidentRate":1.78,"fatalAccidentRate":0.01},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":313,"fatalAccidents":5,"accidentHours":17587290,"accidentRate":1.78,"fatalAccidentRate":0.03},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":307,"fatalAccidents":3,"accidentHours":16911260,"accidentRate":1.82,"fatalAccidentRate":0.02}],"1.1.2":[{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Loss of control","totalAccidents":138,"fatalAccidents":0,"fatalities":0,"pctAccidents":45,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- stall","totalAccidents":47,"fatalAccidents":0,"fatalities":0,"pctAccidents":15.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Runway conditions","totalAccidents":35,"fatalAccidents":2,"fatalities":4,"pctAccidents":11.4,"pctFatalAccidents":66.7,"pctFatalities":66.7,"lethality":5.7},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Hard -- other","totalAccidents":30,"fatalAccidents":0,"fatalities":0,"pctAccidents":9.8,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Gear operation","totalAccidents":21,"fatalAccidents":0,"fatalities":0,"pctAccidents":6.8,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- long","totalAccidents":17,"fatalAccidents":1,"fatalities":2,"pctAccidents":5.5,"pctFatalAccidents":33.3,"pctFatalities":33.3,"lethality":5.9},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Unknown","totalAccidents":7,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Short -- other","totalAccidents":6,"fatalAccidents":0,"fatalities":0,"pctAccidents":2,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- short","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Collided with object","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Long -- other","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.1.3":[{"accidentType":"Landing","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":246,"pctAccidents":80.1,"fatalAccidents":2,"pctFatalAccidents":66.7,"fatalities":3,"pctFatalities":50,"lethality":0.8},{"accidentType":"Landing","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":130,"pctAccidents":42.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":39,"pctAccidents":12.7,"fatalAccidents":1,"pctFatalAccidents":33.3,"fatalities":3,"pctFatalities":50,"lethality":2.6},{"accidentType":"Landing","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":7,"pctAccidents":2.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":18,"pctAccidents":5.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":4,"pctAccidents":1.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.1.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":280,"pctAccidents":91.2,"fatalAccidents":3,"pctFatalAccidents":100,"fatalities":6,"pctFatalities":100,"lethality":1.1},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":20,"pctAccidents":6.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":3,"pctAccidents":1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":1,"pctAccidents":0.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":3,"pctAccidents":1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.1.5":[{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":43,"pctAccidents":14,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":62,"pctAccidents":20.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":151,"pctAccidents":49.2,"fatalAccidents":3,"pctFatalAccidents":100,"fatalities":6,"pctFatalities":100,"lethality":2},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":5,"pctAccidents":1.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":31,"pctAccidents":10.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":15,"pctAccidents":4.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":51,"pctAccidents":16.6,"fatalAccidents":1,"pctFatalAccidents":33.3,"fatalities":2,"pctFatalities":33.3,"lethality":2},{"accidentType":"Landing","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":80,"pctAccidents":26.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":161,"pctAccidents":52.4,"fatalAccidents":1,"pctFatalAccidents":33.3,"fatalities":2,"pctFatalities":33.3,"lethality":0.6}],"1.2.1":[{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Other","totalAccidents":50,"fatalAccidents":35,"fatalities":56,"pctAccidents":41,"pctFatalAccidents":58.3,"pctFatalities":50.9,"lethality":70},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Other (power loss)","totalAccidents":20,"fatalAccidents":3,"fatalities":4,"pctAccidents":16.4,"pctFatalAccidents":5,"pctFatalities":3.6,"lethality":15},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Landing","totalAccidents":10,"fatalAccidents":0,"fatalities":0,"pctAccidents":8.2,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Descent / approach","totalAccidents":8,"fatalAccidents":7,"fatalities":12,"pctAccidents":6.6,"pctFatalAccidents":11.7,"pctFatalities":10.9,"lethality":87.5},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Fuel management","totalAccidents":8,"fatalAccidents":2,"fatalities":2,"pctAccidents":6.6,"pctFatalAccidents":3.3,"pctFatalities":1.8,"lethality":25},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Weather","totalAccidents":7,"fatalAccidents":6,"fatalities":14,"pctAccidents":5.7,"pctFatalAccidents":10,"pctFatalities":12.7,"lethality":85.7},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Take-off","totalAccidents":6,"fatalAccidents":2,"fatalities":3,"pctAccidents":4.9,"pctFatalAccidents":3.3,"pctFatalities":2.7,"lethality":33.3},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Collision","totalAccidents":5,"fatalAccidents":4,"fatalities":18,"pctAccidents":4.1,"pctFatalAccidents":6.7,"pctFatalities":16.4,"lethality":80},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Taxi","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Maneuvering","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Not yet assigned","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.8,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Cruise","totalAccidents":1,"fatalAccidents":1,"fatalities":1,"pctAccidents":0.8,"pctFatalAccidents":1.7,"pctFatalities":0.9,"lethality":100}],"1.3.1":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":144,"fatalAccidents":25,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":145,"fatalAccidents":18,"accidentHours":17758000,"accidentRate":0.82,"fatalAccidentRate":0.1},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":119,"fatalAccidents":9,"accidentHours":16554000,"accidentRate":0.72,"fatalAccidentRate":0.05},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":116,"fatalAccidents":27,"accidentHours":16474000,"accidentRate":0.7,"fatalAccidentRate":0.16},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":109,"fatalAccidents":19,"accidentHours":17375000,"accidentRate":0.63,"fatalAccidentRate":0.11},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":125,"fatalAccidents":24,"accidentHours":18277000,"accidentRate":0.68,"fatalAccidentRate":0.13},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":122,"fatalAccidents":21,"accidentHours":18092000,"accidentRate":0.67,"fatalAccidentRate":0.12},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":137,"fatalAccidents":28,"accidentHours":18862725,"accidentRate":0.73,"fatalAccidentRate":0.15},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":122,"fatalAccidents":20,"accidentHours":17587290,"accidentRate":0.69,"fatalAccidentRate":0.11},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":131,"fatalAccidents":16,"accidentHours":16911260,"accidentRate":0.77,"fatalAccidentRate":0.09}],"1.3.2":[{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Loss of control","totalAccidents":53,"fatalAccidents":4,"fatalities":5,"pctAccidents":40.5,"pctFatalAccidents":25,"pctFatalities":17.9,"lethality":7.5},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Stalled or settled on take-off","totalAccidents":36,"fatalAccidents":7,"fatalities":16,"pctAccidents":27.5,"pctFatalAccidents":43.8,"pctFatalities":57.1,"lethality":19.4},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Aircraft configuration","totalAccidents":10,"fatalAccidents":0,"fatalities":0,"pctAccidents":7.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Collided with object","totalAccidents":8,"fatalAccidents":2,"fatalities":3,"pctAccidents":6.1,"pctFatalAccidents":12.5,"pctFatalities":10.7,"lethality":25},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Delayed abort","totalAccidents":8,"fatalAccidents":1,"fatalities":1,"pctAccidents":6.1,"pctFatalAccidents":6.3,"pctFatalities":3.6,"lethality":12.5},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Runway conditions","totalAccidents":8,"fatalAccidents":0,"fatalities":0,"pctAccidents":6.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Weight / density altitude","totalAccidents":7,"fatalAccidents":1,"fatalities":1,"pctAccidents":5.3,"pctFatalAccidents":6.3,"pctFatalities":3.6,"lethality":14.3},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Unknown","totalAccidents":1,"fatalAccidents":1,"fatalities":2,"pctAccidents":0.8,"pctFatalAccidents":6.3,"pctFatalities":7.1,"lethality":100}],"1.3.3":[{"accidentType":"Take-off","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":101,"pctAccidents":77.1,"fatalAccidents":11,"pctFatalAccidents":68.8,"fatalities":18,"pctFatalities":64.3,"lethality":10.9},{"accidentType":"Take-off","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":46,"pctAccidents":35.1,"fatalAccidents":3,"pctFatalAccidents":18.8,"fatalities":4,"pctFatalities":14.3,"lethality":6.5},{"accidentType":"Take-off","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":21,"pctAccidents":16,"fatalAccidents":4,"pctFatalAccidents":25,"fatalities":9,"pctFatalities":32.1,"lethality":19},{"accidentType":"Take-off","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":3,"pctAccidents":2.3,"fatalAccidents":1,"pctFatalAccidents":6.3,"fatalities":4,"pctFatalities":14.3,"lethality":33.3},{"accidentType":"Take-off","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":8,"pctAccidents":6.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Take-off","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":0.8,"fatalAccidents":1,"pctFatalAccidents":6.3,"fatalities":1,"pctFatalities":3.6,"lethality":100}],"1.3.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":121,"pctAccidents":92.4,"fatalAccidents":14,"pctFatalAccidents":87.5,"fatalities":25,"pctFatalities":89.3,"lethality":11.6},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":10,"pctAccidents":7.6,"fatalAccidents":2,"pctFatalAccidents":12.5,"fatalities":3,"pctFatalities":10.7,"lethality":20}],"1.3.5":[{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":19,"pctAccidents":14.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":28,"pctAccidents":21.4,"fatalAccidents":3,"pctFatalAccidents":18.8,"fatalities":7,"pctFatalities":25,"lethality":10.7},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":58,"pctAccidents":44.3,"fatalAccidents":8,"pctFatalAccidents":50,"fatalities":14,"pctFatalities":50,"lethality":13.8},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":3,"pctAccidents":2.3,"fatalAccidents":2,"pctFatalAccidents":12.5,"fatalities":3,"pctFatalities":10.7,"lethality":66.7},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":12,"pctAccidents":9.2,"fatalAccidents":1,"pctFatalAccidents":6.3,"fatalities":2,"pctFatalities":7.1,"lethality":8.3},{"accidentType":"Take-off","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":11,"pctAccidents":8.4,"fatalAccidents":2,"pctFatalAccidents":12.5,"fatalities":2,"pctFatalities":7.1,"lethality":18.2},{"accidentType":"Take-off","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":22,"pctAccidents":16.8,"fatalAccidents":4,"pctFatalAccidents":25,"fatalities":10,"pctFatalities":35.7,"lethality":18.2},{"accidentType":"Take-off","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":32,"pctAccidents":24.4,"fatalAccidents":3,"pctFatalAccidents":18.8,"fatalities":5,"pctFatalities":17.9,"lethality":9.4},{"accidentType":"Take-off","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":67,"pctAccidents":51.1,"fatalAccidents":6,"pctFatalAccidents":37.5,"fatalities":12,"pctFatalities":42.9,"lethality":9}],"1.4.1":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":96,"fatalAccidents":14,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":79,"fatalAccidents":10,"accidentHours":17758000,"accidentRate":0.44,"fatalAccidentRate":0.06},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":69,"fatalAccidents":10,"accidentHours":16554000,"accidentRate":0.42,"fatalAccidentRate":0.06},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":77,"fatalAccidents":7,"accidentHours":16474000,"accidentRate":0.47,"fatalAccidentRate":0.04},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":81,"fatalAccidents":14,"accidentHours":17375000,"accidentRate":0.47,"fatalAccidentRate":0.08},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":69,"fatalAccidents":7,"accidentHours":18277000,"accidentRate":0.38,"fatalAccidentRate":0.04},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":57,"fatalAccidents":6,"accidentHours":18092000,"accidentRate":0.32,"fatalAccidentRate":0.03},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":70,"fatalAccidents":9,"accidentHours":18862725,"accidentRate":0.37,"fatalAccidentRate":0.05},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":69,"fatalAccidents":9,"accidentHours":17587290,"accidentRate":0.39,"fatalAccidentRate":0.05},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":58,"fatalAccidents":8,"accidentHours":16911260,"accidentRate":0.34,"fatalAccidentRate":0.05}],"1.4.2":[{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Flight planning","totalAccidents":38,"fatalAccidents":4,"fatalities":4,"pctAccidents":65.5,"pctFatalAccidents":50,"pctFatalities":40,"lethality":10.5},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Systems operation","totalAccidents":19,"fatalAccidents":4,"fatalities":6,"pctAccidents":32.8,"pctFatalAccidents":50,"pctFatalities":60,"lethality":21.1},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Contamination","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.4.3":[{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":34,"pctAccidents":58.6,"fatalAccidents":3,"pctFatalAccidents":37.5,"fatalities":3,"pctFatalities":30,"lethality":8.8},{"accidentType":"Fuel management","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":9,"pctAccidents":15.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":20,"pctAccidents":34.5,"fatalAccidents":4,"pctFatalAccidents":50,"fatalities":6,"pctFatalities":60,"lethality":20},{"accidentType":"Fuel management","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":3,"pctAccidents":5.2,"fatalAccidents":1,"pctFatalAccidents":12.5,"fatalities":1,"pctFatalities":10,"lethality":33.3},{"accidentType":"Fuel management","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":4,"pctAccidents":6.9,"fatalAccidents":1,"pctFatalAccidents":12.5,"fatalities":1,"pctFatalities":10,"lethality":25},{"accidentType":"Fuel management","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":1,"pctAccidents":1.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.4.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":46,"pctAccidents":79.3,"fatalAccidents":6,"pctFatalAccidents":75,"fatalities":8,"pctFatalities":80,"lethality":13},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":11,"pctAccidents":19,"fatalAccidents":2,"pctFatalAccidents":25,"fatalities":2,"pctFatalities":20,"lethality":18.2},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":1,"pctAccidents":1.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.4.5":[{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":7,"pctAccidents":12.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":12,"pctAccidents":20.7,"fatalAccidents":1,"pctFatalAccidents":12.5,"fatalities":1,"pctFatalities":10,"lethality":8.3},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":31,"pctAccidents":53.4,"fatalAccidents":6,"pctFatalAccidents":75,"fatalities":8,"pctFatalities":80,"lethality":19.4},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":2,"pctAccidents":3.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":6,"pctAccidents":10.3,"fatalAccidents":1,"pctFatalAccidents":12.5,"fatalities":1,"pctFatalities":10,"lethality":16.7},{"accidentType":"Fuel management","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":3,"pctAccidents":5.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":12,"pctAccidents":20.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":27,"pctAccidents":46.6,"fatalAccidents":6,"pctFatalAccidents":75,"fatalities":6,"pctFatalities":60,"lethality":22.2}],"1.5.1":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":58,"fatalAccidents":35,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":54,"fatalAccidents":31,"accidentHours":17758000,"accidentRate":0.3,"fatalAccidentRate":0.17},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":46,"fatalAccidents":25,"accidentHours":16554000,"accidentRate":0.28,"fatalAccidentRate":0.15},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":54,"fatalAccidents":29,"accidentHours":16474000,"accidentRate":0.33,"fatalAccidentRate":0.18},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":43,"fatalAccidents":32,"accidentHours":17375000,"accidentRate":0.25,"fatalAccidentRate":0.18},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":44,"fatalAccidents":25,"accidentHours":18277000,"accidentRate":0.24,"fatalAccidentRate":0.14},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":38,"fatalAccidents":28,"accidentHours":18092000,"accidentRate":0.21,"fatalAccidentRate":0.15},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":39,"fatalAccidents":21,"accidentHours":18862725,"accidentRate":0.21,"fatalAccidentRate":0.11},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":43,"fatalAccidents":25,"accidentHours":17587290,"accidentRate":0.24,"fatalAccidentRate":0.14},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":39,"fatalAccidents":16,"accidentHours":16911260,"accidentRate":0.23,"fatalAccidentRate":0.09}],"1.5.2":[{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Stall / LOC","totalAccidents":18,"fatalAccidents":11,"fatalities":14,"pctAccidents":46.2,"pctFatalAccidents":68.8,"pctFatalities":56,"lethality":61.1},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Wires / structures / terrain","totalAccidents":13,"fatalAccidents":1,"fatalities":1,"pctAccidents":33.3,"pctFatalAccidents":6.3,"pctFatalities":4,"lethality":7.7},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Aerobatics","totalAccidents":5,"fatalAccidents":4,"fatalities":10,"pctAccidents":12.8,"pctFatalAccidents":25,"pctFatalities":40,"lethality":80},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Unknown","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":5.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Mountains / canyons","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.5.3":[{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":34,"pctAccidents":87.2,"fatalAccidents":14,"pctFatalAccidents":87.5,"fatalities":23,"pctFatalities":92,"lethality":41.2},{"accidentType":"Maneuvering","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":16,"pctAccidents":41,"fatalAccidents":6,"pctFatalAccidents":37.5,"fatalities":8,"pctFatalities":32,"lethality":37.5},{"accidentType":"Maneuvering","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":5,"pctAccidents":12.8,"fatalAccidents":2,"pctFatalAccidents":12.5,"fatalities":2,"pctFatalities":8,"lethality":40},{"accidentType":"Maneuvering","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":1,"pctAccidents":2.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.5.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":38,"pctAccidents":97.4,"fatalAccidents":16,"pctFatalAccidents":100,"fatalities":25,"pctFatalities":100,"lethality":42.1},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":1,"pctAccidents":2.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.5.5":[{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":4,"pctAccidents":10.3,"fatalAccidents":3,"pctFatalAccidents":18.8,"fatalities":6,"pctFatalities":24,"lethality":75},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":10,"pctAccidents":25.6,"fatalAccidents":3,"pctFatalAccidents":18.8,"fatalities":4,"pctFatalities":16,"lethality":30},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":17,"pctAccidents":43.6,"fatalAccidents":8,"pctFatalAccidents":50,"fatalities":12,"pctFatalities":48,"lethality":47.1},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":1,"pctAccidents":2.6,"fatalAccidents":1,"pctFatalAccidents":6.3,"fatalities":2,"pctFatalities":8,"lethality":100},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":2,"pctAccidents":5.1,"fatalAccidents":1,"pctFatalAccidents":6.3,"fatalities":1,"pctFatalities":4,"lethality":50},{"accidentType":"Maneuvering","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":5,"pctAccidents":12.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Maneuvering","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":4,"pctAccidents":10.3,"fatalAccidents":2,"pctFatalAccidents":12.5,"fatalities":4,"pctFatalities":16,"lethality":50},{"accidentType":"Maneuvering","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":8,"pctAccidents":20.5,"fatalAccidents":3,"pctFatalAccidents":18.8,"fatalities":6,"pctFatalities":24,"lethality":37.5},{"accidentType":"Maneuvering","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":18,"pctAccidents":46.2,"fatalAccidents":7,"pctFatalAccidents":43.8,"fatalities":11,"pctFatalities":44,"lethality":38.9}],"1.6.1":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":57,"fatalAccidents":25,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":52,"fatalAccidents":24,"accidentHours":17758000,"accidentRate":0.29,"fatalAccidentRate":0.14},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":33,"fatalAccidents":15,"accidentHours":16554000,"accidentRate":0.2,"fatalAccidentRate":0.09},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":46,"fatalAccidents":14,"accidentHours":16474000,"accidentRate":0.28,"fatalAccidentRate":0.08},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":44,"fatalAccidents":15,"accidentHours":17375000,"accidentRate":0.25,"fatalAccidentRate":0.09},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":40,"fatalAccidents":11,"accidentHours":18277000,"accidentRate":0.22,"fatalAccidentRate":0.06},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":47,"fatalAccidents":11,"accidentHours":18092000,"accidentRate":0.26,"fatalAccidentRate":0.06},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":69,"fatalAccidents":25,"accidentHours":18862725,"accidentRate":0.37,"fatalAccidentRate":0.13},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":38,"fatalAccidents":14,"accidentHours":17587290,"accidentRate":0.22,"fatalAccidentRate":0.08},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":45,"fatalAccidents":24,"accidentHours":16911260,"accidentRate":0.27,"fatalAccidentRate":0.14}],"1.6.2":[{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Collisions","totalAccidents":17,"fatalAccidents":8,"fatalities":15,"pctAccidents":37.8,"pctFatalAccidents":33.3,"pctFatalities":36.6,"lethality":47.1},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Stalls / spins","totalAccidents":17,"fatalAccidents":13,"fatalities":22,"pctAccidents":37.8,"pctFatalAccidents":54.2,"pctFatalities":53.7,"lethality":76.5},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Gusts / wake turbulence","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":8.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Loss of power","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":8.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Deficient IAPs","totalAccidents":3,"fatalAccidents":3,"fatalities":4,"pctAccidents":6.7,"pctFatalAccidents":12.5,"pctFatalities":9.8,"lethality":100}],"1.6.3":[{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":32,"pctAccidents":71.1,"fatalAccidents":15,"pctFatalAccidents":62.5,"fatalities":25,"pctFatalities":61,"lethality":46.9},{"accidentType":"Descent / approach","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":7,"pctAccidents":15.6,"fatalAccidents":2,"pctFatalAccidents":8.3,"fatalities":4,"pctFatalities":9.8,"lethality":28.6},{"accidentType":"Descent / approach","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":10,"pctAccidents":22.2,"fatalAccidents":8,"pctFatalAccidents":33.3,"fatalities":13,"pctFatalities":31.7,"lethality":80},{"accidentType":"Descent / approach","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":1,"pctAccidents":2.2,"fatalAccidents":1,"pctFatalAccidents":4.2,"fatalities":1,"pctFatalities":2.4,"lethality":100},{"accidentType":"Descent / approach","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":3,"pctAccidents":6.7,"fatalAccidents":1,"pctFatalAccidents":4.2,"fatalities":3,"pctFatalities":7.3,"lethality":33.3}],"1.6.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":33,"pctAccidents":73.3,"fatalAccidents":14,"pctFatalAccidents":58.3,"fatalities":23,"pctFatalities":56.1,"lethality":42.4},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":5,"pctAccidents":11.1,"fatalAccidents":3,"pctFatalAccidents":12.5,"fatalities":4,"pctFatalities":9.8,"lethality":60},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":4,"pctAccidents":8.9,"fatalAccidents":4,"pctFatalAccidents":16.7,"fatalities":9,"pctFatalities":22,"lethality":100},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":2,"pctAccidents":4.4,"fatalAccidents":2,"pctFatalAccidents":8.3,"fatalities":2,"pctFatalities":4.9,"lethality":100},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":1,"pctAccidents":2.2,"fatalAccidents":1,"pctFatalAccidents":4.2,"fatalities":3,"pctFatalities":7.3,"lethality":100}],"1.6.5":[{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":3,"pctAccidents":6.7,"fatalAccidents":2,"pctFatalAccidents":8.3,"fatalities":4,"pctFatalities":9.8,"lethality":66.7},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":10,"pctAccidents":22.2,"fatalAccidents":4,"pctFatalAccidents":16.7,"fatalities":10,"pctFatalities":24.4,"lethality":40},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":22,"pctAccidents":48.9,"fatalAccidents":11,"pctFatalAccidents":45.8,"fatalities":17,"pctFatalities":41.5,"lethality":50},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":1,"pctAccidents":2.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":1,"pctAccidents":2.2,"fatalAccidents":1,"pctFatalAccidents":4.2,"fatalities":1,"pctFatalities":2.4,"lethality":100},{"accidentType":"Descent / approach","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":8,"pctAccidents":17.8,"fatalAccidents":6,"pctFatalAccidents":25,"fatalities":9,"pctFatalities":22,"lethality":75},{"accidentType":"Descent / approach","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":4,"pctAccidents":8.9,"fatalAccidents":2,"pctFatalAccidents":8.3,"fatalities":4,"pctFatalities":9.8,"lethality":50},{"accidentType":"Descent / approach","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":8,"pctAccidents":17.8,"fatalAccidents":3,"pctFatalAccidents":12.5,"fatalities":4,"pctFatalities":9.8,"lethality":37.5},{"accidentType":"Descent / approach","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":19,"pctAccidents":42.2,"fatalAccidents":12,"pctFatalAccidents":50,"fatalities":25,"pctFatalities":61,"lethality":63.2}],"1.7.1":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":54,"fatalAccidents":40,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":50,"fatalAccidents":37,"accidentHours":17758000,"accidentRate":0.28,"fatalAccidentRate":0.21},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":41,"fatalAccidents":30,"accidentHours":16554000,"accidentRate":0.25,"fatalAccidentRate":0.18},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":36,"fatalAccidents":28,"accidentHours":16474000,"accidentRate":0.22,"fatalAccidentRate":0.17},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":40,"fatalAccidents":30,"accidentHours":17375000,"accidentRate":0.23,"fatalAccidentRate":0.17},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":24,"fatalAccidents":13,"accidentHours":18277000,"accidentRate":0.13,"fatalAccidentRate":0.07},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":42,"fatalAccidents":32,"accidentHours":18092000,"accidentRate":0.23,"fatalAccidentRate":0.18},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":32,"fatalAccidents":27,"accidentHours":18862725,"accidentRate":0.17,"fatalAccidentRate":0.14},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":39,"fatalAccidents":35,"accidentHours":17587290,"accidentRate":0.22,"fatalAccidentRate":0.2},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":23,"fatalAccidents":17,"accidentHours":16911260,"accidentRate":0.14,"fatalAccidentRate":0.1}],"1.7.2":[{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"VFR into IMC","totalAccidents":11,"fatalAccidents":9,"fatalities":15,"pctAccidents":47.8,"pctFatalAccidents":52.9,"pctFatalities":46.9,"lethality":81.8},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Poor IFR technique","totalAccidents":8,"fatalAccidents":7,"fatalities":16,"pctAccidents":34.8,"pctFatalAccidents":41.2,"pctFatalities":50,"lethality":87.5},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Turbulence","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":13,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Icing","totalAccidents":1,"fatalAccidents":1,"fatalities":1,"pctAccidents":4.3,"pctFatalAccidents":5.9,"pctFatalities":3.1,"lethality":100}],"1.7.3":[{"accidentType":"Weather","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":14,"pctAccidents":60.9,"fatalAccidents":9,"pctFatalAccidents":52.9,"fatalities":15,"pctFatalities":46.9,"lethality":64.3},{"accidentType":"Weather","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":2,"pctAccidents":8.7,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":2,"pctFatalities":6.3,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":7,"pctAccidents":30.4,"fatalAccidents":6,"pctFatalAccidents":35.3,"fatalities":11,"pctFatalities":34.4,"lethality":85.7},{"accidentType":"Weather","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":1,"pctAccidents":4.3,"fatalAccidents":1,"pctFatalAccidents":5.9,"fatalities":2,"pctFatalities":6.3,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":2,"pctAccidents":8.7,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":6,"pctFatalities":18.8,"lethality":100}],"1.7.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":4,"pctAccidents":17.4,"fatalAccidents":1,"pctFatalAccidents":5.9,"fatalities":2,"pctFatalities":6.3,"lethality":25},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":1,"pctAccidents":4.3,"fatalAccidents":1,"pctFatalAccidents":5.9,"fatalities":1,"pctFatalities":3.1,"lethality":100},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":10,"pctAccidents":43.5,"fatalAccidents":8,"pctFatalAccidents":47.1,"fatalities":16,"pctFatalities":50,"lethality":80},{"sortOrder":4,"farPart":"091","conditions":"Night IMC","accidents":7,"pctAccidents":30.4,"fatalAccidents":7,"pctFatalAccidents":41.2,"fatalities":13,"pctFatalities":40.6,"lethality":100},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":1,"pctAccidents":4.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.7.5":[{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":2,"pctAccidents":8.7,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":5,"pctFatalities":15.6,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":1,"pctAccidents":4.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":14,"pctAccidents":60.9,"fatalAccidents":11,"pctFatalAccidents":64.7,"fatalities":20,"pctFatalities":62.5,"lethality":78.6},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":1,"pctAccidents":4.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":2,"pctAccidents":8.7,"fatalAccidents":1,"pctFatalAccidents":5.9,"fatalities":1,"pctFatalities":3.1,"lethality":50},{"accidentType":"Weather","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":3,"pctAccidents":13,"fatalAccidents":3,"pctFatalAccidents":17.6,"fatalities":6,"pctFatalities":18.8,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":2,"pctAccidents":8.7,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":4,"pctFatalities":12.5,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":2,"pctAccidents":8.7,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":5,"pctFatalities":15.6,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":8,"pctAccidents":34.8,"fatalAccidents":7,"pctFatalAccidents":41.2,"fatalities":14,"pctFatalities":43.8,"lethality":87.5}],"1.8.1":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":149,"fatalAccidents":13,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":156,"fatalAccidents":11,"accidentHours":17758000,"accidentRate":0.88,"fatalAccidentRate":0.06},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":132,"fatalAccidents":12,"accidentHours":16554000,"accidentRate":0.8,"fatalAccidentRate":0.07},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":128,"fatalAccidents":16,"accidentHours":16474000,"accidentRate":0.78,"fatalAccidentRate":0.1},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":141,"fatalAccidents":17,"accidentHours":17375000,"accidentRate":0.81,"fatalAccidentRate":0.1},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":170,"fatalAccidents":16,"accidentHours":18277000,"accidentRate":0.93,"fatalAccidentRate":0.09},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":157,"fatalAccidents":14,"accidentHours":18092000,"accidentRate":0.87,"fatalAccidentRate":0.08},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":154,"fatalAccidents":12,"accidentHours":18862725,"accidentRate":0.82,"fatalAccidentRate":0.06},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":167,"fatalAccidents":16,"accidentHours":17587290,"accidentRate":0.95,"fatalAccidentRate":0.09},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":153,"fatalAccidents":14,"accidentHours":16911260,"accidentRate":0.9,"fatalAccidentRate":0.08}],"1.8.2":[{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Powerplant","totalAccidents":77,"fatalAccidents":10,"fatalities":15,"pctAccidents":50.3,"pctFatalAccidents":71.4,"pctFatalities":75,"lethality":13},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Gear and brakes","totalAccidents":32,"fatalAccidents":0,"fatalities":0,"pctAccidents":20.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Fuel system","totalAccidents":26,"fatalAccidents":2,"fatalities":2,"pctAccidents":17,"pctFatalAccidents":14.3,"pctFatalities":10,"lethality":7.7},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Airframe","totalAccidents":10,"fatalAccidents":2,"fatalities":3,"pctAccidents":6.5,"pctFatalAccidents":14.3,"pctFatalities":15,"lethality":20},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Electrical","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Unknown","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":2,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Instruments","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.8.3":[{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":94,"pctAccidents":62.3,"fatalAccidents":4,"pctFatalAccidents":28.6,"fatalities":8,"pctFatalities":40,"lethality":4.3},{"accidentType":"Mechanical","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":39,"pctAccidents":25.8,"fatalAccidents":2,"pctFatalAccidents":14.3,"fatalities":4,"pctFatalities":20,"lethality":5.1},{"accidentType":"Mechanical","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":43,"pctAccidents":28.5,"fatalAccidents":6,"pctFatalAccidents":42.9,"fatalities":7,"pctFatalities":35,"lethality":14},{"accidentType":"Mechanical","farPart":"091","sortOrder":4,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":7,"pctAccidents":4.6,"fatalAccidents":2,"pctFatalAccidents":14.3,"fatalities":3,"pctFatalities":15,"lethality":28.6},{"accidentType":"Mechanical","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":13,"pctAccidents":8.6,"fatalAccidents":4,"pctFatalAccidents":28.6,"fatalities":5,"pctFatalities":25,"lethality":30.8},{"accidentType":"Mechanical","farPart":"091","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":1,"pctAccidents":0.7,"fatalAccidents":1,"pctFatalAccidents":7.1,"fatalities":1,"pctFatalities":5,"lethality":100},{"accidentType":"Mechanical","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":0.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.8.4":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":135,"pctAccidents":88.2,"fatalAccidents":14,"pctFatalAccidents":100,"fatalities":20,"pctFatalities":100,"lethality":10.4},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":10,"pctAccidents":6.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":3,"farPart":"091","conditions":"Day IMC","accidents":2,"pctAccidents":1.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"091","conditions":"Unknown","accidents":6,"pctAccidents":3.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.8.5":[{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":22,"pctAccidents":14.4,"fatalAccidents":1,"pctFatalAccidents":7.1,"fatalities":1,"pctFatalities":5,"lethality":4.5},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":50,"pctAccidents":32.7,"fatalAccidents":7,"pctFatalAccidents":50,"fatalities":11,"pctFatalities":55,"lethality":14},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":46,"pctAccidents":30.1,"fatalAccidents":5,"pctFatalAccidents":35.7,"fatalities":6,"pctFatalities":30,"lethality":10.9},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":2,"pctAccidents":1.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":33,"pctAccidents":21.6,"fatalAccidents":1,"pctFatalAccidents":7.1,"fatalities":2,"pctFatalities":10,"lethality":3},{"accidentType":"Mechanical","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":31,"pctAccidents":20.3,"fatalAccidents":7,"pctFatalAccidents":50,"fatalities":12,"pctFatalities":60,"lethality":22.6},{"accidentType":"Mechanical","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":45,"pctAccidents":29.4,"fatalAccidents":6,"pctFatalAccidents":42.9,"fatalities":10,"pctFatalities":50,"lethality":13.3},{"accidentType":"Mechanical","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":87,"pctAccidents":56.9,"fatalAccidents":11,"pctFatalAccidents":78.6,"fatalities":16,"pctFatalities":80,"lethality":12.6}],"Text-Intro-CFW":{},"2.1":{"accidents":67,"aircraft":67,"fatalAccidents":13,"lethality":19.4,"fatalities":24,"params":{"year":2020,"category":"Airplane","commercial":"Y"}},"2.2":[{"eventYear":2011,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":115,"fatalAccidents":16,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":81,"fatalAccidents":7,"accidentHours":3011000,"accidentRate":2.69,"fatalAccidentRate":0.23},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":80,"fatalAccidents":10,"accidentHours":3238000,"accidentRate":2.47,"fatalAccidentRate":0.31},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":11,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":8,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":64,"fatalAccidents":19,"accidentHours":3234000,"accidentRate":1.98,"fatalAccidentRate":0.59},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":74,"fatalAccidents":11,"accidentHours":3632000,"accidentRate":2.04,"fatalAccidentRate":0.3},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":63,"fatalAccidents":10,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.28},{"eventYear":2019,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":55,"fatalAccidents":10,"accidentHours":3389706,"accidentRate":1.62,"fatalAccidentRate":0.3},{"eventYear":2020,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":13,"accidentHours":3086406,"accidentRate":2.17,"fatalAccidentRate":0.42}],"2.3":[{"eventYear":2011,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":115,"fatalAccidents":16,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":81,"fatalAccidents":7,"accidentHours":3011000,"accidentRate":2.69,"fatalAccidentRate":0.23},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":80,"fatalAccidents":10,"accidentHours":3238000,"accidentRate":2.47,"fatalAccidentRate":0.31},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":11,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":8,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":64,"fatalAccidents":19,"accidentHours":3234000,"accidentRate":1.98,"fatalAccidentRate":0.59},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":74,"fatalAccidents":11,"accidentHours":3632000,"accidentRate":2.04,"fatalAccidentRate":0.3},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":63,"fatalAccidents":10,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.28},{"eventYear":2019,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":55,"fatalAccidents":10,"accidentHours":3389706,"accidentRate":1.62,"fatalAccidentRate":0.3},{"eventYear":2020,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":13,"accidentHours":3086406,"accidentRate":2.17,"fatalAccidentRate":0.42}],"2.4":[{"eventYear":2020,"category":"Airplane","commercial":"Y","majorCause":"Pilot-Related","sortOrder":1,"accidents":43,"pctAccidents":64.2,"fatalAccidents":9,"pctFatalAccidents":69.2,"fatalities":9,"pctFatalities":37.5,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"Y","majorCause":"Mechanical","sortOrder":2,"accidents":14,"pctAccidents":20.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"Y","majorCause":"Other/Unknown","sortOrder":3,"accidents":10,"pctAccidents":14.9,"fatalAccidents":4,"pctFatalAccidents":30.8,"fatalities":15,"pctFatalities":62.5,"lethality":0}],"2.5":[{"accidentType":"Total","farPart":"135","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":14,"pctAccidents":51.9,"fatalAccidents":4,"pctFatalAccidents":66.7,"fatalities":11,"pctFatalities":64.7,"lethality":28.6},{"accidentType":"Total","farPart":"135","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":7,"pctAccidents":25.9,"fatalAccidents":3,"pctFatalAccidents":50,"fatalities":10,"pctFatalities":58.8,"lethality":42.9},{"accidentType":"Total","farPart":"137","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":40,"pctAccidents":null,"fatalAccidents":7,"pctFatalAccidents":0,"fatalities":7,"pctFatalities":0,"lethality":17.5},{"accidentType":"Total","farPart":"135","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":2,"pctAccidents":7.4,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":5,"pctFatalities":29.4,"lethality":50},{"accidentType":"Total","farPart":"135","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":11,"pctAccidents":40.7,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":1,"pctFatalities":5.9,"lethality":9.1},{"accidentType":"Total","farPart":"135","sortOrder":6,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":2,"pctAccidents":7.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"2.6":[{"sortOrder":1,"farPart":"135","conditions":"Day VMC","accidents":12,"pctAccidents":44.4,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":9,"pctFatalities":52.9,"lethality":16.7},{"sortOrder":1,"farPart":"137","conditions":"Day VMC","accidents":37,"pctAccidents":92.5,"fatalAccidents":7,"pctFatalAccidents":100,"fatalities":7,"pctFatalities":100,"lethality":18.9},{"sortOrder":2,"farPart":"135","conditions":"Night VMC","accidents":8,"pctAccidents":29.6,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":1,"pctFatalities":5.9,"lethality":12.5},{"sortOrder":2,"farPart":"137","conditions":"Night VMC","accidents":1,"pctAccidents":2.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":3,"farPart":"135","conditions":"Day IMC","accidents":5,"pctAccidents":18.5,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":6,"pctFatalities":35.3,"lethality":40},{"sortOrder":4,"farPart":"135","conditions":"Night IMC","accidents":1,"pctAccidents":3.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"farPart":"135","conditions":"Unknown","accidents":1,"pctAccidents":3.7,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":1,"pctFatalities":5.9,"lethality":100},{"sortOrder":5,"farPart":"137","conditions":"Unknown","accidents":2,"pctAccidents":5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"2.7":[{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"ATP","accidents":8,"pctAccidents":29.6,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":1,"pctFatalities":5.9,"lethality":12.5},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"ATP","accidents":3,"pctAccidents":7.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"Commercial","accidents":13,"pctAccidents":48.1,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":2,"pctFatalities":11.8,"lethality":15.4},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"Commercial","accidents":35,"pctAccidents":87.5,"fatalAccidents":7,"pctFatalAccidents":100,"fatalities":7,"pctFatalities":100,"lethality":20},{"accidentType":"Total","farPart":"135","sortOrder":2,"certLevel":"Other or unknown","accidents":6,"pctAccidents":22.2,"fatalAccidents":3,"pctFatalAccidents":50,"fatalities":14,"pctFatalities":82.4,"lethality":50},{"accidentType":"Total","farPart":"137","sortOrder":2,"certLevel":"Other or unknown","accidents":2,"pctAccidents":5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":4,"certLevel":"CFI on board","accidents":9,"pctAccidents":22.5,"fatalAccidents":1,"pctFatalAccidents":14.3,"fatalities":1,"pctFatalities":14.3,"lethality":11.1},{"accidentType":"Total","farPart":"135","sortOrder":4,"certLevel":"CFI on board","accidents":12,"pctAccidents":44.4,"fatalAccidents":3,"pctFatalAccidents":50,"fatalities":7,"pctFatalities":41.2,"lethality":25},{"accidentType":"Total","farPart":"135","sortOrder":5,"certLevel":"IFR pilot on board","accidents":22,"pctAccidents":81.5,"fatalAccidents":4,"pctFatalAccidents":66.7,"fatalities":8,"pctFatalities":47.1,"lethality":18.2},{"accidentType":"Total","farPart":"137","sortOrder":5,"certLevel":"IFR pilot on board","accidents":16,"pctAccidents":40,"fatalAccidents":3,"pctFatalAccidents":42.9,"fatalities":3,"pctFatalities":42.9,"lethality":18.8}],"Text-Intro-NCH":{},"3.1":{"accidents":62,"aircraft":62,"fatalAccidents":13,"lethality":21,"fatalities":18,"params":{"year":2020,"category":"Helicopter","commercial":"N"}},"3.2":[{"eventYear":2020,"category":"Helicopter","commercial":"N","majorCause":"Pilot-Related","sortOrder":1,"accidents":45,"pctAccidents":72.6,"fatalAccidents":6,"pctFatalAccidents":46.2,"fatalities":8,"pctFatalities":80,"lethality":0},{"eventYear":2020,"category":"Helicopter","commercial":"N","majorCause":"Mechanical","sortOrder":2,"accidents":5,"pctAccidents":8.1,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":1,"pctFatalities":10,"lethality":0},{"eventYear":2020,"category":"Helicopter","commercial":"N","majorCause":"Other/Unknown","sortOrder":3,"accidents":12,"pctAccidents":19.4,"fatalAccidents":6,"pctFatalAccidents":46.2,"fatalities":1,"pctFatalities":10,"lethality":0}],"3.3":[{"eventYear":2011,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":101,"fatalAccidents":11,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":124,"fatalAccidents":19,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":104,"fatalAccidents":20,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":106,"fatalAccidents":13,"accidentHours":1719000,"accidentRate":6.17,"fatalAccidentRate":0.76},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":91,"fatalAccidents":11,"accidentHours":1748000,"accidentRate":5.21,"fatalAccidentRate":0.63},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":77,"fatalAccidents":12,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":88,"fatalAccidents":13,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":92,"fatalAccidents":16,"accidentHours":1453417,"accidentRate":6.33,"fatalAccidentRate":1.1},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":80,"fatalAccidents":14,"accidentHours":1425895,"accidentRate":5.61,"fatalAccidentRate":0.98},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":62,"fatalAccidents":13,"accidentHours":1313051,"accidentRate":4.72,"fatalAccidentRate":0.99}],"3.4":[{"eventYear":2011,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":101,"fatalAccidents":11,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":124,"fatalAccidents":19,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":104,"fatalAccidents":20,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":106,"fatalAccidents":13,"accidentHours":1719000,"accidentRate":6.17,"fatalAccidentRate":0.76},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":91,"fatalAccidents":11,"accidentHours":1748000,"accidentRate":5.21,"fatalAccidentRate":0.63},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":77,"fatalAccidents":12,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":88,"fatalAccidents":13,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":92,"fatalAccidents":16,"accidentHours":1453417,"accidentRate":6.33,"fatalAccidentRate":1.1},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":80,"fatalAccidents":14,"accidentHours":1425895,"accidentRate":5.61,"fatalAccidentRate":0.98},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":62,"fatalAccidents":13,"accidentHours":1313051,"accidentRate":4.72,"fatalAccidentRate":0.99}],"3.5":[{"accidentType":"Total","farPart":"091","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":12,"pctAccidents":19.7,"fatalAccidents":2,"pctFatalAccidents":15.4,"fatalities":5,"pctFatalities":27.8,"lethality":16.7},{"accidentType":"Total","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":28,"pctAccidents":45.9,"fatalAccidents":6,"pctFatalAccidents":46.2,"fatalities":7,"pctFatalities":38.9,"lethality":21.4},{"accidentType":"Total","farPart":"091","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":20,"pctAccidents":32.8,"fatalAccidents":5,"pctFatalAccidents":38.5,"fatalities":6,"pctFatalities":33.3,"lethality":25},{"accidentType":"Total","farPart":"091","sortOrder":4,"isAggragate":1,"aircraftClass":"Multi-engine turbine","aircraftSubClass":"Multi-engine turbine","accidents":1,"pctAccidents":1.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"3.6":[{"sortOrder":1,"typeOperation":"Aerial Application","accidents":1,"pctAccidents":1.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":1,"typeOperation":"Fire Fighting","accidents":1,"pctAccidents":1.6,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":1,"pctFatalities":5.6,"lethality":100},{"sortOrder":1,"typeOperation":"Personal","accidents":24,"pctAccidents":38.7,"fatalAccidents":4,"pctFatalAccidents":30.8,"fatalities":5,"pctFatalities":27.8,"lethality":16.7},{"sortOrder":2,"typeOperation":"Instructional","accidents":13,"pctAccidents":21,"fatalAccidents":3,"pctFatalAccidents":23.1,"fatalities":3,"pctFatalities":16.7,"lethality":23.1},{"sortOrder":3,"typeOperation":"Public Use","accidents":2,"pctAccidents":3.2,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":1,"pctFatalities":5.6,"lethality":50},{"sortOrder":4,"typeOperation":"Positioning","accidents":6,"pctAccidents":9.7,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":1,"pctFatalities":5.6,"lethality":16.7},{"sortOrder":5,"typeOperation":"Aerial Observation","accidents":8,"pctAccidents":12.9,"fatalAccidents":2,"pctFatalAccidents":15.4,"fatalities":5,"pctFatalities":27.8,"lethality":25},{"sortOrder":6,"typeOperation":"Business","accidents":5,"pctAccidents":8.1,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":2,"pctFatalities":11.1,"lethality":20},{"sortOrder":8,"typeOperation":"Other work use","accidents":2,"pctAccidents":3.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"3.7":[{"sortOrder":1,"farPart":"091","conditions":"Day VMC","accidents":47,"pctAccidents":75.8,"fatalAccidents":6,"pctFatalAccidents":46.2,"fatalities":7,"pctFatalities":38.9,"lethality":12.8},{"sortOrder":2,"farPart":"091","conditions":"Night VMC","accidents":4,"pctAccidents":6.5,"fatalAccidents":2,"pctFatalAccidents":15.4,"fatalities":3,"pctFatalities":16.7,"lethality":50},{"sortOrder":3,"farPart":"091","conditions":"Unknown","accidents":11,"pctAccidents":17.7,"fatalAccidents":5,"pctFatalAccidents":38.5,"fatalities":8,"pctFatalities":44.4}],"3.8":[{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":12,"pctAccidents":19.4,"fatalAccidents":4,"pctFatalAccidents":30.8,"fatalities":6,"pctFatalities":33.3,"lethality":33.3},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":32,"pctAccidents":51.6,"fatalAccidents":5,"pctFatalAccidents":38.5,"fatalities":6,"pctFatalities":33.3,"lethality":15.6},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":11,"pctAccidents":17.7,"fatalAccidents":2,"pctFatalAccidents":15.4,"fatalities":3,"pctFatalities":16.7,"lethality":18.2},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":3,"pctAccidents":4.8,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":1,"pctFatalities":5.6,"lethality":33.3},{"accidentType":"Total","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":4,"pctAccidents":6.5,"fatalAccidents":1,"pctFatalAccidents":7.7,"fatalities":2,"pctFatalities":11.1,"lethality":25},{"accidentType":"Total","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":10,"pctAccidents":16.1,"fatalAccidents":4,"pctFatalAccidents":30.8,"fatalities":4,"pctFatalities":22.2,"lethality":40},{"accidentType":"Total","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":26,"pctAccidents":41.9,"fatalAccidents":3,"pctFatalAccidents":23.1,"fatalities":3,"pctFatalities":16.7,"lethality":11.5},{"accidentType":"Total","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":40,"pctAccidents":64.5,"fatalAccidents":7,"pctFatalAccidents":53.8,"fatalities":7,"pctFatalities":38.9,"lethality":17.5}],"3.9":[{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Rotorcraft aerodynamics","totalAccidents":12,"fatalAccidents":3,"fatalities":4,"pctAccidents":19.4,"pctFatalAccidents":23.1,"pctFatalities":40,"lethality":25},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Maneuvering","totalAccidents":10,"fatalAccidents":1,"fatalities":2,"pctAccidents":16.1,"pctFatalAccidents":7.7,"pctFatalities":20,"lethality":10},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Landing","totalAccidents":6,"fatalAccidents":0,"fatalities":0,"pctAccidents":9.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Taxi / ground operations","totalAccidents":5,"fatalAccidents":0,"fatalities":0,"pctAccidents":8.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Mechanical","totalAccidents":5,"fatalAccidents":1,"fatalities":1,"pctAccidents":8.1,"pctFatalAccidents":7.7,"pctFatalities":10,"lethality":20},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Take-off / climb","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.8,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Weather","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.8,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Other / miscellaneous","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":3.2,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Pre-flight / static","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":3.2,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Not yet assigned","totalAccidents":12,"fatalAccidents":6,"fatalities":1,"pctAccidents":19.4,"pctFatalAccidents":46.2,"pctFatalities":10,"lethality":50},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Cruise","totalAccidents":1,"fatalAccidents":1,"fatalities":1,"pctAccidents":1.6,"pctFatalAccidents":7.7,"pctFatalities":10,"lethality":100},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Fuel management","totalAccidents":1,"fatalAccidents":1,"fatalities":1,"pctAccidents":1.6,"pctFatalAccidents":7.7,"pctFatalities":10,"lethality":100}],"Text-Intro-CH":{},"4.1":{"accidents":30,"aircraft":30,"fatalAccidents":7,"lethality":23.3,"fatalities":17,"params":{"year":2020,"category":"Helicopter","commercial":"Y"}},"4.2":[{"eventYear":2020,"category":"Helicopter","commercial":"Y","majorCause":"Pilot-Related","sortOrder":1,"accidents":15,"pctAccidents":50,"fatalAccidents":1,"pctFatalAccidents":14.3,"fatalities":9,"pctFatalities":100,"lethality":0},{"eventYear":2020,"category":"Helicopter","commercial":"Y","majorCause":"Mechanical","sortOrder":2,"accidents":4,"pctAccidents":13.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Helicopter","commercial":"Y","majorCause":"Other/Unknown","sortOrder":3,"accidents":11,"pctAccidents":36.7,"fatalAccidents":6,"pctFatalAccidents":85.7,"fatalities":0,"pctFatalities":0,"lethality":0}],"4.3":[{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":31,"fatalAccidents":7,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":40,"fatalAccidents":6,"accidentHours":1525000,"accidentRate":2.62,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":7,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":37,"fatalAccidents":7,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":38,"fatalAccidents":5,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":7,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48},{"eventYear":2019,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":44,"fatalAccidents":10,"accidentHours":1570636,"accidentRate":2.8,"fatalAccidentRate":0.64},{"eventYear":2020,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":30,"fatalAccidents":7,"accidentHours":1095265,"accidentRate":2.74,"fatalAccidentRate":0.64}],"4.4":[{"eventYear":2011,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":31,"fatalAccidents":7,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":40,"fatalAccidents":6,"accidentHours":1525000,"accidentRate":2.62,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":7,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":37,"fatalAccidents":7,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":38,"fatalAccidents":5,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":7,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48},{"eventYear":2019,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":44,"fatalAccidents":10,"accidentHours":1570636,"accidentRate":2.8,"fatalAccidentRate":0.64},{"eventYear":2020,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":30,"fatalAccidents":7,"accidentHours":1095265,"accidentRate":2.74,"fatalAccidentRate":0.64}],"4.5":[{"accidentType":"Total","farPart":"133","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":10,"fatalAccidents":2,"pctFatalAccidents":50,"fatalities":4,"pctFatalities":66.7,"lethality":200},{"accidentType":"Total","farPart":"135","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":2,"pctAccidents":22.2,"fatalAccidents":1,"pctFatalAccidents":100,"fatalities":9,"pctFatalities":100,"lethality":50},{"accidentType":"Total","farPart":"137","sortOrder":0,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":11.1,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":1,"pctFatalities":50,"lethality":100},{"accidentType":"Total","farPart":"135","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":2,"pctAccidents":22.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":4,"pctAccidents":44.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":9,"pctAccidents":90,"fatalAccidents":2,"pctFatalAccidents":50,"fatalities":2,"pctFatalities":33.3,"lethality":22.2},{"accidentType":"Total","farPart":"135","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":4,"pctAccidents":44.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":2,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":4,"pctAccidents":44.4,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":1,"pctFatalities":50,"lethality":25},{"accidentType":"Total","farPart":"135","sortOrder":4,"isAggragate":1,"aircraftClass":"Multi-engine turbine","aircraftSubClass":"Multi-engine turbine","accidents":1,"pctAccidents":11.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"4.6":[{"sortOrder":1,"farPart":"133","conditions":"Day VMC","accidents":6,"pctAccidents":54.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":2,"farPart":"133","conditions":"Unknown","accidents":5,"pctAccidents":45.5,"fatalAccidents":4,"pctFatalAccidents":100,"fatalities":6,"pctFatalities":100,"lethality":0},{"sortOrder":1,"farPart":"135","conditions":"Day VMC","accidents":6,"pctAccidents":60,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":1,"farPart":"137","conditions":"Day VMC","accidents":5,"pctAccidents":55.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":2,"farPart":"135","conditions":"Night VMC","accidents":1,"pctAccidents":10,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":2,"farPart":"137","conditions":"Night VMC","accidents":1,"pctAccidents":11.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":3,"farPart":"137","conditions":"Unknown","accidents":3,"pctAccidents":33.3,"fatalAccidents":2,"pctFatalAccidents":100,"fatalities":2,"pctFatalities":100,"lethality":0},{"sortOrder":3,"farPart":"135","conditions":"Day IMC","accidents":1,"pctAccidents":10,"fatalAccidents":1,"pctFatalAccidents":100,"fatalities":9,"pctFatalities":100,"lethality":100},{"sortOrder":4,"farPart":"135","conditions":"Unknown","accidents":2,"pctAccidents":20,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"4.7":[{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"ATP","accidents":2,"pctAccidents":22.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"Commercial","accidents":8,"pctAccidents":80,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":1,"certLevel":"Commercial","accidents":10,"pctAccidents":90.9,"fatalAccidents":3,"pctFatalAccidents":75,"fatalities":5,"pctFatalities":83.3,"lethality":30},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"Commercial","accidents":7,"pctAccidents":77.8,"fatalAccidents":2,"pctFatalAccidents":100,"fatalities":2,"pctFatalities":100,"lethality":28.6},{"accidentType":"Total","farPart":"133","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":9.1,"fatalAccidents":1,"pctFatalAccidents":25,"fatalities":1,"pctFatalities":16.7,"lethality":100},{"accidentType":"Total","farPart":"135","sortOrder":2,"certLevel":"Other or unknown","accidents":2,"pctAccidents":20,"fatalAccidents":1,"pctFatalAccidents":100,"fatalities":9,"pctFatalities":100,"lethality":50},{"accidentType":"Total","farPart":"135","sortOrder":3,"certLevel":"Second pilot on board","accidents":1,"pctAccidents":10,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":4,"certLevel":"CFI on board","accidents":4,"pctAccidents":36.4,"fatalAccidents":2,"pctFatalAccidents":50,"fatalities":4,"pctFatalities":66.7,"lethality":50},{"accidentType":"Total","farPart":"137","sortOrder":4,"certLevel":"CFI on board","accidents":4,"pctAccidents":44.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":4,"certLevel":"CFI on board","accidents":4,"pctAccidents":40,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":5,"certLevel":"IFR pilot on board","accidents":5,"pctAccidents":55.6,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":1,"pctFatalities":50,"lethality":20},{"accidentType":"Total","farPart":"133","sortOrder":5,"certLevel":"IFR pilot on board","accidents":6,"pctAccidents":54.5,"fatalAccidents":2,"pctFatalAccidents":50,"fatalities":4,"pctFatalities":66.7,"lethality":33.3},{"accidentType":"Total","farPart":"135","sortOrder":5,"certLevel":"IFR pilot on board","accidents":6,"pctAccidents":60,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"5.1":[{"eventYear":2011,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":236,"fatalAccidents":59,"accidentHours":null,"accidentRate":null,"fatalAccidentRate":null},{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":222,"fatalAccidents":54,"accidentHours":17758000,"accidentRate":1.25,"fatalAccidentRate":0.3},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":161,"fatalAccidents":31,"accidentHours":16554000,"accidentRate":0.97,"fatalAccidentRate":0.19},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":195,"fatalAccidents":59,"accidentHours":16474000,"accidentRate":1.18,"fatalAccidentRate":0.36},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":166,"fatalAccidents":42,"accidentHours":17375000,"accidentRate":0.96,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":162,"fatalAccidents":29,"accidentHours":18277000,"accidentRate":0.89,"fatalAccidentRate":0.16},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":183,"fatalAccidents":32,"accidentHours":18092000,"accidentRate":1.01,"fatalAccidentRate":0.18},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":170,"fatalAccidents":35,"accidentHours":18862725,"accidentRate":0.9,"fatalAccidentRate":0.19},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":160,"fatalAccidents":32,"accidentHours":17587290,"accidentRate":0.91,"fatalAccidentRate":0.18},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":149,"fatalAccidents":33,"accidentHours":16911260,"accidentRate":0.88,"fatalAccidentRate":0.2}],"5.2":[{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Landing","totalAccidents":44,"fatalAccidents":0,"fatalities":0,"pctAccidents":29.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Mechanical","totalAccidents":28,"fatalAccidents":2,"fatalities":3,"pctAccidents":18.9,"pctFatalAccidents":6.1,"pctFatalities":6.7,"lethality":7.1},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Take-off","totalAccidents":22,"fatalAccidents":5,"fatalities":8,"pctAccidents":14.9,"pctFatalAccidents":15.2,"pctFatalities":17.8,"lethality":22.7},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Other","totalAccidents":12,"fatalAccidents":5,"fatalities":6,"pctAccidents":8.1,"pctFatalAccidents":15.2,"pctFatalities":13.3,"lethality":41.7},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Maneuvering","totalAccidents":11,"fatalAccidents":8,"fatalities":11,"pctAccidents":7.4,"pctFatalAccidents":24.2,"pctFatalities":24.4,"lethality":72.7},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Descent / approach","totalAccidents":9,"fatalAccidents":5,"fatalities":8,"pctAccidents":6.1,"pctFatalAccidents":15.2,"pctFatalities":17.8,"lethality":55.6},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Pre-flight","totalAccidents":6,"fatalAccidents":1,"fatalities":1,"pctAccidents":4.1,"pctFatalAccidents":3,"pctFatalities":2.2,"lethality":16.7},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Fuel management","totalAccidents":5,"fatalAccidents":0,"fatalities":0,"pctAccidents":3.4,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Weather","totalAccidents":4,"fatalAccidents":2,"fatalities":3,"pctAccidents":2.7,"pctFatalAccidents":6.1,"pctFatalities":6.7,"lethality":50},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Cruise","totalAccidents":3,"fatalAccidents":2,"fatalities":2,"pctAccidents":2,"pctFatalAccidents":6.1,"pctFatalities":4.4,"lethality":66.7},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Other (power loss)","totalAccidents":2,"fatalAccidents":2,"fatalities":2,"pctAccidents":1.4,"pctFatalAccidents":6.1,"pctFatalities":4.4,"lethality":100},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Incapacitation","totalAccidents":1,"fatalAccidents":1,"fatalities":1,"pctAccidents":0.7,"pctFatalAccidents":3,"pctFatalities":2.2,"lethality":100},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Taxi","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"5.3":[{"accidentType":"LightSport","farPart":"091","sortOrder":0,"isAggragate":1,"aircraftClass":"E-LSA","aircraftSubClass":"E-LSA","accidents":13,"pctAccidents":8.7,"fatalAccidents":2,"pctFatalAccidents":6.1,"fatalities":2,"pctFatalities":4.4,"lethality":15.4},{"accidentType":"LightSport","farPart":"091","sortOrder":1,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":120,"pctAccidents":80.5,"fatalAccidents":27,"pctFatalAccidents":81.8,"fatalities":38,"pctFatalities":84.4,"lethality":22.5},{"accidentType":"LightSport","farPart":"091","sortOrder":2,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":69,"pctAccidents":46.3,"fatalAccidents":13,"pctFatalAccidents":39.4,"fatalities":17,"pctFatalities":37.8,"lethality":18.8},{"accidentType":"LightSport","farPart":"091","sortOrder":3,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":14,"pctAccidents":9.4,"fatalAccidents":4,"pctFatalAccidents":12.1,"fatalities":5,"pctFatalities":11.1,"lethality":28.6},{"accidentType":"LightSport","farPart":"091","sortOrder":5,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":1,"pctAccidents":0.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"LightSport","farPart":"091","sortOrder":7,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":0.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}]}';

jsonCacheDB['2021'] = '{"Text-Intro":{},"Summary 1":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidents":1154,"aircraft":1163,"fatalAccidents":213,"fatalaties":329,"lethality":18.5,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidents":81,"aircraft":83,"fatalAccidents":7,"fatalaties":7,"lethality":8.6,"accidentHours":3011000,"accidentRate":2.69,"fatalAccidentRate":0.23},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidents":124,"aircraft":126,"fatalAccidents":19,"fatalaties":29,"lethality":15.3,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":5,"lethality":8.6,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Airplane","commercial":"N","accidents":964,"aircraft":973,"fatalAccidents":167,"fatalaties":284,"lethality":17.3,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidents":80,"aircraft":80,"fatalAccidents":10,"fatalaties":24,"lethality":12.5,"accidentHours":3238000,"accidentRate":2.47,"fatalAccidentRate":0.31},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidents":104,"aircraft":104,"fatalAccidents":20,"fatalaties":42,"lethality":19.2,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidents":40,"aircraft":40,"fatalAccidents":6,"fatalaties":7,"lethality":15,"accidentHours":1525000,"accidentRate":2.62,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Airplane","commercial":"N","accidents":966,"aircraft":973,"fatalAccidents":196,"fatalaties":306,"lethality":20.3,"accidentHours":16474000,"accidentRate":5.86,"fatalAccidentRate":1.19},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":11,"fatalaties":17,"lethality":16.4,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidents":106,"aircraft":106,"fatalAccidents":12,"fatalaties":19,"lethality":11.3,"accidentHours":1719000,"accidentRate":6.17,"fatalAccidentRate":0.7},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":7,"fatalaties":11,"lethality":20,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Airplane","commercial":"N","accidents":973,"aircraft":983,"fatalAccidents":195,"fatalaties":329,"lethality":20,"accidentHours":17375000,"accidentRate":5.6,"fatalAccidentRate":1.12},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":8,"fatalaties":16,"lethality":10.5,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidents":91,"aircraft":91,"fatalAccidents":11,"fatalaties":18,"lethality":12.1,"accidentHours":1748000,"accidentRate":5.21,"fatalAccidentRate":0.63},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidents":37,"aircraft":37,"fatalAccidents":7,"fatalaties":12,"lethality":18.9,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Airplane","commercial":"N","accidents":1048,"aircraft":1064,"fatalAccidents":158,"fatalaties":281,"lethality":15.1,"accidentHours":18277000,"accidentRate":5.73,"fatalAccidentRate":0.86},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidents":64,"aircraft":65,"fatalAccidents":19,"fatalaties":34,"lethality":29.7,"accidentHours":3234000,"accidentRate":1.98,"fatalAccidentRate":0.59},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidents":77,"aircraft":77,"fatalAccidents":12,"fatalaties":19,"lethality":15.6,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":6,"lethality":8.6,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Airplane","commercial":"N","accidents":1001,"aircraft":1011,"fatalAccidents":162,"fatalaties":268,"lethality":16.2,"accidentHours":18092000,"accidentRate":5.53,"fatalAccidentRate":0.9},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidents":74,"aircraft":74,"fatalAccidents":11,"fatalaties":14,"lethality":14.9,"accidentHours":3632000,"accidentRate":2.04,"fatalAccidentRate":0.3},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidents":88,"aircraft":88,"fatalAccidents":13,"fatalaties":18,"lethality":14.8,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidents":38,"aircraft":38,"fatalAccidents":5,"fatalaties":11,"lethality":13.2,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Airplane","commercial":"N","accidents":1032,"aircraft":1047,"fatalAccidents":167,"fatalaties":274,"lethality":16.2,"accidentHours":18862725,"accidentRate":5.47,"fatalAccidentRate":0.89},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidents":63,"aircraft":63,"fatalAccidents":9,"fatalaties":13,"lethality":14.3,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.25},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidents":92,"aircraft":92,"fatalAccidents":16,"fatalaties":36,"lethality":17.4,"accidentHours":1453417,"accidentRate":6.33,"fatalAccidentRate":1.1},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":7,"fatalaties":13,"lethality":20.6,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48},{"eventYear":2019,"category":"Airplane","commercial":"N","accidents":987,"aircraft":998,"fatalAccidents":180,"fatalaties":306,"lethality":18.2,"accidentHours":17587290,"accidentRate":5.61,"fatalAccidentRate":1.02},{"eventYear":2019,"category":"Airplane","commercial":"Y","accidents":55,"aircraft":57,"fatalAccidents":10,"fatalaties":19,"lethality":18.2,"accidentHours":3389706,"accidentRate":1.62,"fatalAccidentRate":0.3},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidents":80,"aircraft":81,"fatalAccidents":14,"fatalaties":21,"lethality":17.5,"accidentHours":1425895,"accidentRate":5.61,"fatalAccidentRate":0.98},{"eventYear":2019,"category":"Helicopter","commercial":"Y","accidents":44,"aircraft":44,"fatalAccidents":10,"fatalaties":23,"lethality":22.7,"accidentHours":1570636,"accidentRate":2.8,"fatalAccidentRate":0.64},{"eventYear":2020,"category":"Airplane","commercial":"N","accidents":891,"aircraft":896,"fatalAccidents":155,"fatalaties":258,"lethality":17.4,"accidentHours":16911260,"accidentRate":5.27,"fatalAccidentRate":0.92},{"eventYear":2020,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":13,"fatalaties":24,"lethality":19.4,"accidentHours":3086406,"accidentRate":2.17,"fatalAccidentRate":0.42},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidents":62,"aircraft":62,"fatalAccidents":13,"fatalaties":18,"lethality":21,"accidentHours":1313051,"accidentRate":4.72,"fatalAccidentRate":0.99},{"eventYear":2020,"category":"Helicopter","commercial":"Y","accidents":30,"aircraft":30,"fatalAccidents":7,"fatalaties":17,"lethality":23.3,"accidentHours":1095265,"accidentRate":2.74,"fatalAccidentRate":0.64},{"eventYear":2021,"category":"Airplane","commercial":"N","accidents":938,"aircraft":944,"fatalAccidents":165,"fatalaties":264,"lethality":17.6,"accidentHours":19266967,"accidentRate":4.87,"fatalAccidentRate":0.86},{"eventYear":2021,"category":"Airplane","commercial":"Y","accidents":61,"aircraft":62,"fatalAccidents":14,"fatalaties":25,"lethality":23,"accidentHours":4261228,"accidentRate":1.43,"fatalAccidentRate":0.33},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidents":87,"aircraft":87,"fatalAccidents":17,"fatalaties":32,"lethality":19.5,"accidentHours":1288602,"accidentRate":6.75,"fatalAccidentRate":1.32},{"eventYear":2021,"category":"Helicopter","commercial":"Y","accidents":38,"aircraft":38,"fatalAccidents":6,"fatalaties":12,"lethality":15.8,"accidentHours":1467452,"accidentRate":2.59,"fatalAccidentRate":0.41}],"Summary 2":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidents":1154,"aircraft":1163,"fatalAccidents":213,"fatalaties":329,"lethality":18.5,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Airplane","commercial":"Y","accidents":81,"aircraft":83,"fatalAccidents":7,"fatalaties":7,"lethality":8.6,"accidentHours":3011000,"accidentRate":2.69,"fatalAccidentRate":0.23},{"eventYear":2012,"category":"Helicopter","commercial":"N","accidents":124,"aircraft":126,"fatalAccidents":19,"fatalaties":29,"lethality":15.3,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":5,"lethality":8.6,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Airplane","commercial":"N","accidents":964,"aircraft":973,"fatalAccidents":167,"fatalaties":284,"lethality":17.3,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidents":80,"aircraft":80,"fatalAccidents":10,"fatalaties":24,"lethality":12.5,"accidentHours":3238000,"accidentRate":2.47,"fatalAccidentRate":0.31},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidents":104,"aircraft":104,"fatalAccidents":20,"fatalaties":42,"lethality":19.2,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidents":40,"aircraft":40,"fatalAccidents":6,"fatalaties":7,"lethality":15,"accidentHours":1525000,"accidentRate":2.62,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Airplane","commercial":"N","accidents":966,"aircraft":973,"fatalAccidents":196,"fatalaties":306,"lethality":20.3,"accidentHours":16474000,"accidentRate":5.86,"fatalAccidentRate":1.19},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":11,"fatalaties":17,"lethality":16.4,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidents":106,"aircraft":106,"fatalAccidents":12,"fatalaties":19,"lethality":11.3,"accidentHours":1719000,"accidentRate":6.17,"fatalAccidentRate":0.7},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":7,"fatalaties":11,"lethality":20,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Airplane","commercial":"N","accidents":973,"aircraft":983,"fatalAccidents":195,"fatalaties":329,"lethality":20,"accidentHours":17375000,"accidentRate":5.6,"fatalAccidentRate":1.12},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidents":76,"aircraft":76,"fatalAccidents":8,"fatalaties":16,"lethality":10.5,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidents":91,"aircraft":91,"fatalAccidents":11,"fatalaties":18,"lethality":12.1,"accidentHours":1748000,"accidentRate":5.21,"fatalAccidentRate":0.63},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidents":37,"aircraft":37,"fatalAccidents":7,"fatalaties":12,"lethality":18.9,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Airplane","commercial":"N","accidents":1048,"aircraft":1064,"fatalAccidents":158,"fatalaties":281,"lethality":15.1,"accidentHours":18277000,"accidentRate":5.73,"fatalAccidentRate":0.86},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidents":64,"aircraft":65,"fatalAccidents":19,"fatalaties":34,"lethality":29.7,"accidentHours":3234000,"accidentRate":1.98,"fatalAccidentRate":0.59},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidents":77,"aircraft":77,"fatalAccidents":12,"fatalaties":19,"lethality":15.6,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidents":35,"aircraft":35,"fatalAccidents":3,"fatalaties":6,"lethality":8.6,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Airplane","commercial":"N","accidents":1001,"aircraft":1011,"fatalAccidents":162,"fatalaties":268,"lethality":16.2,"accidentHours":18092000,"accidentRate":5.53,"fatalAccidentRate":0.9},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidents":74,"aircraft":74,"fatalAccidents":11,"fatalaties":14,"lethality":14.9,"accidentHours":3632000,"accidentRate":2.04,"fatalAccidentRate":0.3},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidents":88,"aircraft":88,"fatalAccidents":13,"fatalaties":18,"lethality":14.8,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidents":38,"aircraft":38,"fatalAccidents":5,"fatalaties":11,"lethality":13.2,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Airplane","commercial":"N","accidents":1032,"aircraft":1047,"fatalAccidents":167,"fatalaties":274,"lethality":16.2,"accidentHours":18862725,"accidentRate":5.47,"fatalAccidentRate":0.89},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidents":63,"aircraft":63,"fatalAccidents":9,"fatalaties":13,"lethality":14.3,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.25},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidents":92,"aircraft":92,"fatalAccidents":16,"fatalaties":36,"lethality":17.4,"accidentHours":1453417,"accidentRate":6.33,"fatalAccidentRate":1.1},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidents":34,"aircraft":34,"fatalAccidents":7,"fatalaties":13,"lethality":20.6,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48},{"eventYear":2019,"category":"Airplane","commercial":"N","accidents":987,"aircraft":998,"fatalAccidents":180,"fatalaties":306,"lethality":18.2,"accidentHours":17587290,"accidentRate":5.61,"fatalAccidentRate":1.02},{"eventYear":2019,"category":"Airplane","commercial":"Y","accidents":55,"aircraft":57,"fatalAccidents":10,"fatalaties":19,"lethality":18.2,"accidentHours":3389706,"accidentRate":1.62,"fatalAccidentRate":0.3},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidents":80,"aircraft":81,"fatalAccidents":14,"fatalaties":21,"lethality":17.5,"accidentHours":1425895,"accidentRate":5.61,"fatalAccidentRate":0.98},{"eventYear":2019,"category":"Helicopter","commercial":"Y","accidents":44,"aircraft":44,"fatalAccidents":10,"fatalaties":23,"lethality":22.7,"accidentHours":1570636,"accidentRate":2.8,"fatalAccidentRate":0.64},{"eventYear":2020,"category":"Airplane","commercial":"N","accidents":891,"aircraft":896,"fatalAccidents":155,"fatalaties":258,"lethality":17.4,"accidentHours":16911260,"accidentRate":5.27,"fatalAccidentRate":0.92},{"eventYear":2020,"category":"Airplane","commercial":"Y","accidents":67,"aircraft":67,"fatalAccidents":13,"fatalaties":24,"lethality":19.4,"accidentHours":3086406,"accidentRate":2.17,"fatalAccidentRate":0.42},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidents":62,"aircraft":62,"fatalAccidents":13,"fatalaties":18,"lethality":21,"accidentHours":1313051,"accidentRate":4.72,"fatalAccidentRate":0.99},{"eventYear":2020,"category":"Helicopter","commercial":"Y","accidents":30,"aircraft":30,"fatalAccidents":7,"fatalaties":17,"lethality":23.3,"accidentHours":1095265,"accidentRate":2.74,"fatalAccidentRate":0.64},{"eventYear":2021,"category":"Airplane","commercial":"N","accidents":938,"aircraft":944,"fatalAccidents":165,"fatalaties":264,"lethality":17.6,"accidentHours":19266967,"accidentRate":4.87,"fatalAccidentRate":0.86},{"eventYear":2021,"category":"Airplane","commercial":"Y","accidents":61,"aircraft":62,"fatalAccidents":14,"fatalaties":25,"lethality":23,"accidentHours":4261228,"accidentRate":1.43,"fatalAccidentRate":0.33},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidents":87,"aircraft":87,"fatalAccidents":17,"fatalaties":32,"lethality":19.5,"accidentHours":1288602,"accidentRate":6.75,"fatalAccidentRate":1.32},{"eventYear":2021,"category":"Helicopter","commercial":"Y","accidents":38,"aircraft":38,"fatalAccidents":6,"fatalaties":12,"lethality":15.8,"accidentHours":1467452,"accidentRate":2.59,"fatalAccidentRate":0.41}],"Text-Intro-NCFW":{},"1.1":{"accidents":938,"aircraft":944,"fatalAccidents":166,"lethality":17.7,"fatalities":270,"params":{"year":2021,"category":"Airplane","commercial":"N"}},"1.2":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1154,"fatalAccidents":213,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":964,"fatalAccidents":167,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":966,"fatalAccidents":196,"accidentHours":16474000,"accidentRate":5.86,"fatalAccidentRate":1.19},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":973,"fatalAccidents":195,"accidentHours":17375000,"accidentRate":5.6,"fatalAccidentRate":1.12},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1048,"fatalAccidents":159,"accidentHours":18277000,"accidentRate":5.73,"fatalAccidentRate":0.87},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1001,"fatalAccidents":162,"accidentHours":18092000,"accidentRate":5.53,"fatalAccidentRate":0.9},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1032,"fatalAccidents":167,"accidentHours":18862725,"accidentRate":5.47,"fatalAccidentRate":0.89},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":987,"fatalAccidents":180,"accidentHours":17587290,"accidentRate":5.61,"fatalAccidentRate":1.02},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":891,"fatalAccidents":157,"accidentHours":16911260,"accidentRate":5.27,"fatalAccidentRate":0.93},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":938,"fatalAccidents":166,"accidentHours":19266967,"accidentRate":4.87,"fatalAccidentRate":0.86}],"1.3":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1154,"fatalAccidents":213,"accidentHours":17758000,"accidentRate":6.5,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":964,"fatalAccidents":167,"accidentHours":16554000,"accidentRate":5.82,"fatalAccidentRate":1.01},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":966,"fatalAccidents":196,"accidentHours":16474000,"accidentRate":5.86,"fatalAccidentRate":1.19},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":973,"fatalAccidents":195,"accidentHours":17375000,"accidentRate":5.6,"fatalAccidentRate":1.12},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1048,"fatalAccidents":159,"accidentHours":18277000,"accidentRate":5.73,"fatalAccidentRate":0.87},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1001,"fatalAccidents":162,"accidentHours":18092000,"accidentRate":5.53,"fatalAccidentRate":0.9},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":1032,"fatalAccidents":167,"accidentHours":18862725,"accidentRate":5.47,"fatalAccidentRate":0.89},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":987,"fatalAccidents":180,"accidentHours":17587290,"accidentRate":5.61,"fatalAccidentRate":1.02},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":891,"fatalAccidents":157,"accidentHours":16911260,"accidentRate":5.27,"fatalAccidentRate":0.93},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Total","totalAccidents":938,"fatalAccidents":166,"accidentHours":19266967,"accidentRate":4.87,"fatalAccidentRate":0.86}],"1.4":[{"eventYear":2021,"category":"Airplane","commercial":"N","majorCause":"Pilot-Related","sortOrder":1,"accidents":647,"pctAccidents":69,"fatalAccidents":103,"pctFatalAccidents":62,"fatalities":166,"pctFatalities":62.4,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","majorCause":"Mechanical","sortOrder":2,"accidents":151,"pctAccidents":16.1,"fatalAccidents":12,"pctFatalAccidents":7.2,"fatalities":16,"pctFatalities":6,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","majorCause":"Other/Unknown","sortOrder":3,"accidents":128,"pctAccidents":13.6,"fatalAccidents":46,"pctFatalAccidents":27.7,"fatalities":72,"pctFatalities":27.1,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","majorCause":null,"sortOrder":3,"accidents":12,"pctAccidents":1.3,"fatalAccidents":5,"pctFatalAccidents":3,"fatalities":12,"pctFatalities":4.5,"lethality":0}],"1.5":[{"accidentType":"Total","farPart":"UNK","sortOrder":71,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":100,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"091","sortOrder":9111,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":664,"pctAccidents":70.4,"fatalAccidents":85,"pctFatalAccidents":50.9,"fatalities":114,"pctFatalities":43.2,"lethality":12.8},{"accidentType":"Total","farPart":"091","sortOrder":9121,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":290,"pctAccidents":30.8,"fatalAccidents":33,"pctFatalAccidents":19.8,"fatalities":39,"pctFatalities":14.8,"lethality":11.4},{"accidentType":"Total","farPart":"091","sortOrder":9131,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":186,"pctAccidents":19.7,"fatalAccidents":52,"pctFatalAccidents":31.1,"fatalities":90,"pctFatalities":34.1,"lethality":28},{"accidentType":"Total","farPart":"091","sortOrder":9141,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":26,"pctAccidents":2.8,"fatalAccidents":8,"pctFatalAccidents":4.8,"fatalities":15,"pctFatalities":5.7,"lethality":30.8},{"accidentType":"Total","farPart":"091","sortOrder":9151,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":64,"pctAccidents":6.8,"fatalAccidents":19,"pctFatalAccidents":11.4,"fatalities":41,"pctFatalities":15.5,"lethality":29.7},{"accidentType":"Total","farPart":"091","sortOrder":9161,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":8,"pctAccidents":0.8,"fatalAccidents":3,"pctFatalAccidents":1.8,"fatalities":5,"pctFatalities":1.9,"lethality":37.5},{"accidentType":"Total","farPart":"091","sortOrder":9171,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":29,"pctAccidents":3.1,"fatalAccidents":11,"pctFatalAccidents":6.6,"fatalities":19,"pctFatalities":7.2,"lethality":37.9}],"1.6":[{"sortOrder":1,"typeOperation":null,"accidents":3,"pctAccidents":0.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":1,"typeOperation":"Aerial Application","accidents":1,"pctAccidents":0.1,"fatalAccidents":1,"pctFatalAccidents":0.6,"fatalities":1,"pctFatalities":0.4,"lethality":100},{"sortOrder":1,"typeOperation":"Fire Fighting","accidents":1,"pctAccidents":0.1,"fatalAccidents":1,"pctFatalAccidents":0.6,"fatalities":2,"pctFatalities":0.8,"lethality":100},{"sortOrder":1,"typeOperation":"Personal","accidents":715,"pctAccidents":76.2,"fatalAccidents":133,"pctFatalAccidents":80.6,"fatalities":211,"pctFatalities":81.2,"lethality":18.6},{"sortOrder":2,"typeOperation":"Instructional","accidents":161,"pctAccidents":17.2,"fatalAccidents":19,"pctFatalAccidents":11.5,"fatalities":27,"pctFatalities":10.4,"lethality":11.8},{"sortOrder":3,"typeOperation":"Public Use","accidents":5,"pctAccidents":0.5,"fatalAccidents":1,"pctFatalAccidents":0.6,"fatalities":1,"pctFatalities":0.4,"lethality":20},{"sortOrder":4,"typeOperation":"Positioning","accidents":11,"pctAccidents":1.2,"fatalAccidents":2,"pctFatalAccidents":1.2,"fatalities":5,"pctFatalities":1.9,"lethality":18.2},{"sortOrder":5,"typeOperation":"Aerial Observation","accidents":5,"pctAccidents":0.5,"fatalAccidents":3,"pctFatalAccidents":1.8,"fatalities":5,"pctFatalities":1.9,"lethality":60},{"sortOrder":6,"typeOperation":"Business","accidents":19,"pctAccidents":2,"fatalAccidents":2,"pctFatalAccidents":1.2,"fatalities":4,"pctFatalities":1.5,"lethality":10.5},{"sortOrder":7,"typeOperation":"Executive/Corporate","accidents":3,"pctAccidents":0.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":8,"typeOperation":"Other work use","accidents":10,"pctAccidents":1.1,"fatalAccidents":2,"pctFatalAccidents":1.2,"fatalities":3,"pctFatalities":1.2,"lethality":20},{"sortOrder":9,"typeOperation":"Other or unknown","accidents":4,"pctAccidents":0.4,"fatalAccidents":1,"pctFatalAccidents":0.6,"fatalities":1,"pctFatalities":0.4,"lethality":25}],"1.7":[{"sortOrder":9101,"farPart":"091","conditions":"Day VMC","accidents":834,"pctAccidents":88.9,"fatalAccidents":114,"pctFatalAccidents":3.6,"fatalities":165,"pctFatalities":4.5,"lethality":13.7},{"sortOrder":9102,"farPart":"091","conditions":"Night VMC","accidents":53,"pctAccidents":5.7,"fatalAccidents":17,"pctFatalAccidents":3.6,"fatalities":26,"pctFatalities":4.5,"lethality":32.1},{"sortOrder":9103,"farPart":"091","conditions":"Day IMC","accidents":23,"pctAccidents":2.5,"fatalAccidents":18,"pctFatalAccidents":3.6,"fatalities":41,"pctFatalities":4.5,"lethality":78.3},{"sortOrder":9104,"farPart":"091","conditions":"Night IMC","accidents":13,"pctAccidents":1.4,"fatalAccidents":11,"pctFatalAccidents":3.6,"fatalities":22,"pctFatalities":4.5,"lethality":84.6},{"sortOrder":9105,"farPart":"091","conditions":"Unknown","accidents":15,"pctAccidents":1.6,"fatalAccidents":6,"pctFatalAccidents":3.6,"fatalities":12,"pctFatalities":4.5,"lethality":40}],"1.8":[{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":127,"pctAccidents":13.5,"fatalAccidents":17,"pctFatalAccidents":10.2,"fatalities":24,"pctFatalities":9.1,"lethality":13.4},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":217,"pctAccidents":23,"fatalAccidents":28,"pctFatalAccidents":16.8,"fatalities":51,"pctFatalities":19.3,"lethality":12.9},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":402,"pctAccidents":42.6,"fatalAccidents":57,"pctFatalAccidents":34.1,"fatalities":87,"pctFatalities":33,"lethality":14.2},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":14,"pctAccidents":1.5,"fatalAccidents":2,"pctFatalAccidents":1.2,"fatalities":3,"pctFatalities":1.1,"lethality":14.3},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":63,"pctAccidents":6.7,"fatalAccidents":6,"pctFatalAccidents":3.6,"fatalities":8,"pctFatalities":3,"lethality":9.5},{"accidentType":"Total","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":120,"pctAccidents":12.7,"fatalAccidents":57,"pctFatalAccidents":34.1,"fatalities":91,"pctFatalities":34.5,"lethality":47.5},{"accidentType":"Total","farPart":"UNK","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":100,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":165,"pctAccidents":17.5,"fatalAccidents":30,"pctFatalAccidents":18,"fatalities":59,"pctFatalities":22.3,"lethality":18.2},{"accidentType":"Total","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":233,"pctAccidents":24.7,"fatalAccidents":30,"pctFatalAccidents":18,"fatalities":48,"pctFatalities":18.2,"lethality":12.9},{"accidentType":"Total","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":469,"pctAccidents":49.7,"fatalAccidents":76,"pctFatalAccidents":45.5,"fatalities":125,"pctFatalities":47.3,"lethality":16.2}],"1.9":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":863,"fatalAccidents":166,"accidentHours":17758000,"accidentRate":4.86,"fatalAccidentRate":0.93},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":714,"fatalAccidents":124,"accidentHours":16554000,"accidentRate":4.31,"fatalAccidentRate":0.75},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":724,"fatalAccidents":148,"accidentHours":16474000,"accidentRate":4.39,"fatalAccidentRate":0.9},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":721,"fatalAccidents":146,"accidentHours":17375000,"accidentRate":4.15,"fatalAccidentRate":0.84},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":768,"fatalAccidents":117,"accidentHours":18277000,"accidentRate":4.2,"fatalAccidentRate":0.64},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":735,"fatalAccidents":128,"accidentHours":18092000,"accidentRate":4.06,"fatalAccidentRate":0.71},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":792,"fatalAccidents":127,"accidentHours":18862725,"accidentRate":4.2,"fatalAccidentRate":0.67},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":771,"fatalAccidents":146,"accidentHours":17587290,"accidentRate":4.38,"fatalAccidentRate":0.83},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":694,"fatalAccidents":126,"accidentHours":16911260,"accidentRate":4.1,"fatalAccidentRate":0.75},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":647,"fatalAccidents":103,"accidentHours":19266967,"accidentRate":3.36,"fatalAccidentRate":0.53}],"1.10":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":863,"fatalAccidents":166,"accidentHours":17758000,"accidentRate":4.86,"fatalAccidentRate":0.93},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":714,"fatalAccidents":124,"accidentHours":16554000,"accidentRate":4.31,"fatalAccidentRate":0.75},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":724,"fatalAccidents":148,"accidentHours":16474000,"accidentRate":4.39,"fatalAccidentRate":0.9},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":721,"fatalAccidents":146,"accidentHours":17375000,"accidentRate":4.15,"fatalAccidentRate":0.84},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":768,"fatalAccidents":117,"accidentHours":18277000,"accidentRate":4.2,"fatalAccidentRate":0.64},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":735,"fatalAccidents":128,"accidentHours":18092000,"accidentRate":4.06,"fatalAccidentRate":0.71},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":792,"fatalAccidents":127,"accidentHours":18862725,"accidentRate":4.2,"fatalAccidentRate":0.67},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":771,"fatalAccidents":146,"accidentHours":17587290,"accidentRate":4.38,"fatalAccidentRate":0.83},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":694,"fatalAccidents":126,"accidentHours":16911260,"accidentRate":4.1,"fatalAccidentRate":0.75},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","totalAccidents":647,"fatalAccidents":103,"accidentHours":19266967,"accidentRate":3.36,"fatalAccidentRate":0.53}],"1.11":[{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Landing","totalAccidents":290,"fatalAccidents":9,"fatalities":14,"pctAccidents":42.6,"pctFatalAccidents":7,"pctFatalities":6.5,"lethality":3.1},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Take-off","totalAccidents":119,"fatalAccidents":23,"fatalities":38,"pctAccidents":17.5,"pctFatalAccidents":17.8,"pctFatalities":17.7,"lethality":19.3},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Other","totalAccidents":81,"fatalAccidents":18,"fatalities":29,"pctAccidents":11.9,"pctFatalAccidents":14,"pctFatalities":13.5,"lethality":22.2},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Fuel management","totalAccidents":70,"fatalAccidents":7,"fatalities":9,"pctAccidents":10.3,"pctFatalAccidents":5.4,"pctFatalities":4.2,"lethality":10},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Maneuvering","totalAccidents":48,"fatalAccidents":31,"fatalities":47,"pctAccidents":7,"pctFatalAccidents":24,"pctFatalities":21.9,"lethality":64.6},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Descent / approach","totalAccidents":43,"fatalAccidents":17,"fatalities":27,"pctAccidents":6.3,"pctFatalAccidents":13.2,"pctFatalities":12.6,"lethality":39.5},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"PilotRelated","subType":"Weather","totalAccidents":30,"fatalAccidents":24,"fatalities":51,"pctAccidents":4.4,"pctFatalAccidents":18.6,"pctFatalities":23.7,"lethality":80}],"1.1.1":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":344,"fatalAccidents":7,"accidentHours":17758000,"accidentRate":1.94,"fatalAccidentRate":0.04},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":281,"fatalAccidents":3,"accidentHours":16554000,"accidentRate":1.7,"fatalAccidentRate":0.02},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":280,"fatalAccidents":5,"accidentHours":16474000,"accidentRate":1.7,"fatalAccidentRate":0.03},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":260,"fatalAccidents":1,"accidentHours":17375000,"accidentRate":1.5,"fatalAccidentRate":0.01},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":338,"fatalAccidents":6,"accidentHours":18277000,"accidentRate":1.85,"fatalAccidentRate":0.03},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":325,"fatalAccidents":3,"accidentHours":18092000,"accidentRate":1.8,"fatalAccidentRate":0.02},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":338,"fatalAccidents":2,"accidentHours":18862725,"accidentRate":1.79,"fatalAccidentRate":0.01},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":315,"fatalAccidents":5,"accidentHours":17587290,"accidentRate":1.79,"fatalAccidentRate":0.03},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":301,"fatalAccidents":3,"accidentHours":16911260,"accidentRate":1.78,"fatalAccidentRate":0.02},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Landing","totalAccidents":290,"fatalAccidents":9,"accidentHours":19266967,"accidentRate":1.51,"fatalAccidentRate":0.05}],"1.1.2":[{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Loss of control","totalAccidents":147,"fatalAccidents":4,"fatalities":6,"pctAccidents":50.7,"pctFatalAccidents":44.4,"pctFatalities":42.9,"lethality":2.7},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- stall","totalAccidents":48,"fatalAccidents":1,"fatalities":2,"pctAccidents":16.6,"pctFatalAccidents":11.1,"pctFatalities":14.3,"lethality":2.1},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Gear operation","totalAccidents":22,"fatalAccidents":0,"fatalities":0,"pctAccidents":7.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Runway conditions","totalAccidents":20,"fatalAccidents":0,"fatalities":0,"pctAccidents":6.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Hard -- other","totalAccidents":18,"fatalAccidents":0,"fatalities":0,"pctAccidents":6.2,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- long","totalAccidents":13,"fatalAccidents":1,"fatalities":2,"pctAccidents":4.5,"pctFatalAccidents":11.1,"pctFatalities":14.3,"lethality":7.7},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Unknown","totalAccidents":9,"fatalAccidents":1,"fatalities":2,"pctAccidents":3.1,"pctFatalAccidents":11.1,"pctFatalities":14.3,"lethality":11.1},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Airspeed -- short","totalAccidents":6,"fatalAccidents":1,"fatalities":1,"pctAccidents":2.1,"pctFatalAccidents":11.1,"pctFatalities":7.1,"lethality":16.7},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Short -- other","totalAccidents":6,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Landing","subType":"Collided with object","totalAccidents":1,"fatalAccidents":1,"fatalities":1,"pctAccidents":0.3,"pctFatalAccidents":11.1,"pctFatalities":7.1,"lethality":100}],"1.1.3":[{"accidentType":"Landing","farPart":"091","sortOrder":9111,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":223,"pctAccidents":76.9,"fatalAccidents":3,"pctFatalAccidents":33.3,"fatalities":5,"pctFatalities":35.7,"lethality":1.3},{"accidentType":"Landing","farPart":"091","sortOrder":9121,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":104,"pctAccidents":35.9,"fatalAccidents":1,"pctFatalAccidents":11.1,"fatalities":1,"pctFatalities":7.1,"lethality":1},{"accidentType":"Landing","farPart":"091","sortOrder":9131,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":47,"pctAccidents":16.2,"fatalAccidents":5,"pctFatalAccidents":55.6,"fatalities":7,"pctFatalities":50,"lethality":10.6},{"accidentType":"Landing","farPart":"091","sortOrder":9141,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":7,"pctAccidents":2.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":9151,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":15,"pctAccidents":5.2,"fatalAccidents":1,"pctFatalAccidents":11.1,"fatalities":2,"pctFatalities":14.3,"lethality":6.7},{"accidentType":"Landing","farPart":"091","sortOrder":9171,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":5,"pctAccidents":1.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.1.4":[{"sortOrder":9101,"farPart":"091","conditions":"Day VMC","accidents":280,"pctAccidents":96.6,"fatalAccidents":8,"pctFatalAccidents":11.1,"fatalities":12,"pctFatalities":14.3,"lethality":2.9},{"sortOrder":9102,"farPart":"091","conditions":"Night VMC","accidents":8,"pctAccidents":2.8,"fatalAccidents":1,"pctFatalAccidents":11.1,"fatalities":2,"pctFatalities":14.3,"lethality":12.5},{"sortOrder":9103,"farPart":"091","conditions":"Day IMC","accidents":1,"pctAccidents":0.3,"fatalAccidents":0,"pctFatalAccidents":11.1,"fatalities":0,"pctFatalities":14.3,"lethality":0},{"sortOrder":9104,"farPart":"091","conditions":"Night IMC","accidents":1,"pctAccidents":0.3,"fatalAccidents":0,"pctFatalAccidents":11.1,"fatalities":0,"pctFatalities":14.3,"lethality":0}],"1.1.5":[{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":42,"pctAccidents":14.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":58,"pctAccidents":20,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":141,"pctAccidents":48.6,"fatalAccidents":5,"pctFatalAccidents":55.6,"fatalities":7,"pctFatalities":50,"lethality":3.5},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":7,"pctAccidents":2.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":33,"pctAccidents":11.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Landing","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":9,"pctAccidents":3.1,"fatalAccidents":4,"pctFatalAccidents":44.4,"fatalities":7,"pctFatalities":50,"lethality":44.4},{"accidentType":"Landing","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":47,"pctAccidents":16.2,"fatalAccidents":3,"pctFatalAccidents":33.3,"fatalities":4,"pctFatalities":28.6,"lethality":6.4},{"accidentType":"Landing","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":64,"pctAccidents":22.1,"fatalAccidents":1,"pctFatalAccidents":11.1,"fatalities":1,"pctFatalities":7.1,"lethality":1.6},{"accidentType":"Landing","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":134,"pctAccidents":46.2,"fatalAccidents":3,"pctFatalAccidents":33.3,"fatalities":4,"pctFatalities":28.6,"lethality":2.2}],"1.2.1":[{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Other (power loss)","totalAccidents":47,"fatalAccidents":2,"fatalities":2,"pctAccidents":36.7,"pctFatalAccidents":4.3,"pctFatalities":2.8,"lethality":4.3},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Other","totalAccidents":40,"fatalAccidents":16,"fatalities":17,"pctAccidents":31.3,"pctFatalAccidents":34.8,"pctFatalities":23.6,"lethality":40},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Take-off","totalAccidents":9,"fatalAccidents":7,"fatalities":17,"pctAccidents":7,"pctFatalAccidents":15.2,"pctFatalities":23.6,"lethality":77.8},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Maneuvering","totalAccidents":7,"fatalAccidents":7,"fatalities":10,"pctAccidents":5.5,"pctFatalAccidents":15.2,"pctFatalities":13.9,"lethality":100},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Weather","totalAccidents":7,"fatalAccidents":5,"fatalities":9,"pctAccidents":5.5,"pctFatalAccidents":10.9,"pctFatalities":12.5,"lethality":71.4},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Fuel management","totalAccidents":5,"fatalAccidents":1,"fatalities":1,"pctAccidents":3.9,"pctFatalAccidents":2.2,"pctFatalities":1.4,"lethality":20},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Landing","totalAccidents":4,"fatalAccidents":4,"fatalities":7,"pctAccidents":3.1,"pctFatalAccidents":8.7,"pctFatalities":9.7,"lethality":100},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Taxi","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":3.1,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Descent / approach","totalAccidents":2,"fatalAccidents":2,"fatalities":5,"pctAccidents":1.6,"pctFatalAccidents":4.3,"pctFatalities":6.9,"lethality":100},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Collision","totalAccidents":2,"fatalAccidents":1,"fatalities":2,"pctAccidents":1.6,"pctFatalAccidents":2.2,"pctFatalities":2.8,"lethality":50},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Other/Unknown","subType":"Cruise","totalAccidents":1,"fatalAccidents":1,"fatalities":2,"pctAccidents":0.8,"pctFatalAccidents":2.2,"pctFatalities":2.8,"lethality":100}],"1.3.1":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":145,"fatalAccidents":18,"accidentHours":17758000,"accidentRate":0.82,"fatalAccidentRate":0.1},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":119,"fatalAccidents":9,"accidentHours":16554000,"accidentRate":0.72,"fatalAccidentRate":0.05},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":116,"fatalAccidents":27,"accidentHours":16474000,"accidentRate":0.7,"fatalAccidentRate":0.16},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":109,"fatalAccidents":19,"accidentHours":17375000,"accidentRate":0.63,"fatalAccidentRate":0.11},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":124,"fatalAccidents":24,"accidentHours":18277000,"accidentRate":0.68,"fatalAccidentRate":0.13},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":122,"fatalAccidents":21,"accidentHours":18092000,"accidentRate":0.67,"fatalAccidentRate":0.12},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":135,"fatalAccidents":28,"accidentHours":18862725,"accidentRate":0.72,"fatalAccidentRate":0.15},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":133,"fatalAccidents":21,"accidentHours":17587290,"accidentRate":0.76,"fatalAccidentRate":0.12},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":140,"fatalAccidents":24,"accidentHours":16911260,"accidentRate":0.83,"fatalAccidentRate":0.14},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Take-off","totalAccidents":119,"fatalAccidents":23,"accidentHours":19266967,"accidentRate":0.62,"fatalAccidentRate":0.12}],"1.3.2":[{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Loss of control","totalAccidents":43,"fatalAccidents":3,"fatalities":4,"pctAccidents":36.1,"pctFatalAccidents":13,"pctFatalities":10.5,"lethality":7},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Stalled or settled on take-off","totalAccidents":30,"fatalAccidents":13,"fatalities":22,"pctAccidents":25.2,"pctFatalAccidents":56.5,"pctFatalities":57.9,"lethality":43.3},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Collided with object","totalAccidents":11,"fatalAccidents":4,"fatalities":7,"pctAccidents":9.2,"pctFatalAccidents":17.4,"pctFatalities":18.4,"lethality":36.4},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Delayed abort","totalAccidents":10,"fatalAccidents":0,"fatalities":0,"pctAccidents":8.4,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Weight / density altitude","totalAccidents":8,"fatalAccidents":2,"fatalities":2,"pctAccidents":6.7,"pctFatalAccidents":8.7,"pctFatalities":5.3,"lethality":25},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Aircraft configuration","totalAccidents":7,"fatalAccidents":0,"fatalities":0,"pctAccidents":5.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Runway conditions","totalAccidents":7,"fatalAccidents":0,"fatalities":0,"pctAccidents":5.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Take-off","subType":"Unknown","totalAccidents":3,"fatalAccidents":1,"fatalities":3,"pctAccidents":2.5,"pctFatalAccidents":4.3,"pctFatalities":7.9,"lethality":33.3}],"1.3.3":[{"accidentType":"Take-off","farPart":"091","sortOrder":9111,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":87,"pctAccidents":73.1,"fatalAccidents":13,"pctFatalAccidents":56.5,"fatalities":16,"pctFatalities":42.1,"lethality":14.9},{"accidentType":"Take-off","farPart":"091","sortOrder":9121,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":45,"pctAccidents":37.8,"fatalAccidents":7,"pctFatalAccidents":30.4,"fatalities":8,"pctFatalities":21.1,"lethality":15.6},{"accidentType":"Take-off","farPart":"091","sortOrder":9131,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":24,"pctAccidents":20.2,"fatalAccidents":7,"pctFatalAccidents":30.4,"fatalities":17,"pctFatalities":44.7,"lethality":29.2},{"accidentType":"Take-off","farPart":"091","sortOrder":9141,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":1,"pctAccidents":0.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Take-off","farPart":"091","sortOrder":9151,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":5,"pctAccidents":4.2,"fatalAccidents":1,"pctFatalAccidents":4.3,"fatalities":3,"pctFatalities":7.9,"lethality":20},{"accidentType":"Take-off","farPart":"091","sortOrder":9171,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":3,"pctAccidents":2.5,"fatalAccidents":2,"pctFatalAccidents":8.7,"fatalities":2,"pctFatalities":5.3,"lethality":66.7}],"1.3.4":[{"sortOrder":9101,"farPart":"091","conditions":"Day VMC","accidents":114,"pctAccidents":95.8,"fatalAccidents":21,"pctFatalAccidents":8.7,"fatalities":33,"pctFatalities":13.2,"lethality":18.4},{"sortOrder":9102,"farPart":"091","conditions":"Night VMC","accidents":5,"pctAccidents":4.2,"fatalAccidents":2,"pctFatalAccidents":8.7,"fatalities":5,"pctFatalities":13.2,"lethality":40}],"1.3.5":[{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":14,"pctAccidents":11.8,"fatalAccidents":1,"pctFatalAccidents":4.3,"fatalities":1,"pctFatalities":2.6,"lethality":7.1},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":27,"pctAccidents":22.7,"fatalAccidents":3,"pctFatalAccidents":13,"fatalities":5,"pctFatalities":13.2,"lethality":11.1},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":59,"pctAccidents":49.6,"fatalAccidents":12,"pctFatalAccidents":52.2,"fatalities":15,"pctFatalities":39.5,"lethality":20.3},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":1,"pctAccidents":0.8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Take-off","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":4,"pctAccidents":3.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Take-off","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":14,"pctAccidents":11.8,"fatalAccidents":7,"pctFatalAccidents":30.4,"fatalities":17,"pctFatalities":44.7,"lethality":50},{"accidentType":"Take-off","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":20,"pctAccidents":16.8,"fatalAccidents":5,"pctFatalAccidents":21.7,"fatalities":7,"pctFatalities":18.4,"lethality":25},{"accidentType":"Take-off","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":27,"pctAccidents":22.7,"fatalAccidents":3,"pctFatalAccidents":13,"fatalities":3,"pctFatalities":7.9,"lethality":11.1},{"accidentType":"Take-off","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":64,"pctAccidents":53.8,"fatalAccidents":11,"pctFatalAccidents":47.8,"fatalities":13,"pctFatalities":34.2,"lethality":17.2}],"1.4.1":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":79,"fatalAccidents":10,"accidentHours":17758000,"accidentRate":0.44,"fatalAccidentRate":0.06},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":69,"fatalAccidents":10,"accidentHours":16554000,"accidentRate":0.42,"fatalAccidentRate":0.06},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":77,"fatalAccidents":7,"accidentHours":16474000,"accidentRate":0.47,"fatalAccidentRate":0.04},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":81,"fatalAccidents":14,"accidentHours":17375000,"accidentRate":0.47,"fatalAccidentRate":0.08},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":69,"fatalAccidents":7,"accidentHours":18277000,"accidentRate":0.38,"fatalAccidentRate":0.04},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":57,"fatalAccidents":6,"accidentHours":18092000,"accidentRate":0.32,"fatalAccidentRate":0.03},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":73,"fatalAccidents":9,"accidentHours":18862725,"accidentRate":0.39,"fatalAccidentRate":0.05},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":74,"fatalAccidents":10,"accidentHours":17587290,"accidentRate":0.42,"fatalAccidentRate":0.06},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":69,"fatalAccidents":10,"accidentHours":16911260,"accidentRate":0.41,"fatalAccidentRate":0.06},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Fuel management","totalAccidents":70,"fatalAccidents":7,"accidentHours":19266967,"accidentRate":0.36,"fatalAccidentRate":0.04}],"1.4.2":[{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Systems operation","totalAccidents":40,"fatalAccidents":5,"fatalities":7,"pctAccidents":57.1,"pctFatalAccidents":71.4,"pctFatalities":77.8,"lethality":12.5},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Flight planning","totalAccidents":29,"fatalAccidents":2,"fatalities":2,"pctAccidents":41.4,"pctFatalAccidents":28.6,"pctFatalities":22.2,"lethality":6.9},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Fuel management","subType":"Contamination","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.4,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.4.3":[{"accidentType":"Fuel management","farPart":"091","sortOrder":9111,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":47,"pctAccidents":67.1,"fatalAccidents":3,"pctFatalAccidents":42.9,"fatalities":3,"pctFatalities":33.3,"lethality":6.4},{"accidentType":"Fuel management","farPart":"091","sortOrder":9121,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":16,"pctAccidents":22.9,"fatalAccidents":2,"pctFatalAccidents":28.6,"fatalities":2,"pctFatalities":22.2,"lethality":12.5},{"accidentType":"Fuel management","farPart":"091","sortOrder":9131,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":14,"pctAccidents":20,"fatalAccidents":4,"pctFatalAccidents":57.1,"fatalities":6,"pctFatalities":66.7,"lethality":28.6},{"accidentType":"Fuel management","farPart":"091","sortOrder":9141,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":4,"pctAccidents":5.7,"fatalAccidents":2,"pctFatalAccidents":28.6,"fatalities":4,"pctFatalities":44.4,"lethality":50},{"accidentType":"Fuel management","farPart":"091","sortOrder":9151,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":9,"pctAccidents":12.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":9161,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":1,"pctAccidents":1.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.4.4":[{"sortOrder":9101,"farPart":"091","conditions":"Day VMC","accidents":64,"pctAccidents":91.4,"fatalAccidents":6,"pctFatalAccidents":14.3,"fatalities":8,"pctFatalities":11.1,"lethality":9.4},{"sortOrder":9102,"farPart":"091","conditions":"Night VMC","accidents":5,"pctAccidents":7.1,"fatalAccidents":1,"pctFatalAccidents":14.3,"fatalities":1,"pctFatalities":11.1,"lethality":20},{"sortOrder":9103,"farPart":"091","conditions":"Day IMC","accidents":1,"pctAccidents":1.4,"fatalAccidents":0,"pctFatalAccidents":14.3,"fatalities":0,"pctFatalities":11.1,"lethality":0}],"1.4.5":[{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":8,"pctAccidents":11.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":15,"pctAccidents":21.4,"fatalAccidents":2,"pctFatalAccidents":28.6,"fatalities":2,"pctFatalities":22.2,"lethality":13.3},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":37,"pctAccidents":52.9,"fatalAccidents":3,"pctFatalAccidents":42.9,"fatalities":5,"pctFatalities":55.6,"lethality":8.1},{"accidentType":"Fuel management","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":6,"pctAccidents":8.6,"fatalAccidents":1,"pctFatalAccidents":14.3,"fatalities":1,"pctFatalities":11.1,"lethality":16.7},{"accidentType":"Fuel management","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":4,"pctAccidents":5.7,"fatalAccidents":1,"pctFatalAccidents":14.3,"fatalities":1,"pctFatalities":11.1,"lethality":25},{"accidentType":"Fuel management","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":14,"pctAccidents":20,"fatalAccidents":3,"pctFatalAccidents":42.9,"fatalities":5,"pctFatalities":55.6,"lethality":21.4},{"accidentType":"Fuel management","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":18,"pctAccidents":25.7,"fatalAccidents":2,"pctFatalAccidents":28.6,"fatalities":2,"pctFatalities":22.2,"lethality":11.1},{"accidentType":"Fuel management","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":38,"pctAccidents":54.3,"fatalAccidents":5,"pctFatalAccidents":71.4,"fatalities":7,"pctFatalities":77.8,"lethality":13.2}],"1.5.1":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":54,"fatalAccidents":31,"accidentHours":17758000,"accidentRate":0.3,"fatalAccidentRate":0.17},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":46,"fatalAccidents":25,"accidentHours":16554000,"accidentRate":0.28,"fatalAccidentRate":0.15},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":54,"fatalAccidents":29,"accidentHours":16474000,"accidentRate":0.33,"fatalAccidentRate":0.18},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":43,"fatalAccidents":32,"accidentHours":17375000,"accidentRate":0.25,"fatalAccidentRate":0.18},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":44,"fatalAccidents":25,"accidentHours":18277000,"accidentRate":0.24,"fatalAccidentRate":0.14},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":38,"fatalAccidents":28,"accidentHours":18092000,"accidentRate":0.21,"fatalAccidentRate":0.15},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":40,"fatalAccidents":21,"accidentHours":18862725,"accidentRate":0.21,"fatalAccidentRate":0.11},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":49,"fatalAccidents":29,"accidentHours":17587290,"accidentRate":0.28,"fatalAccidentRate":0.16},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":46,"fatalAccidents":22,"accidentHours":16911260,"accidentRate":0.27,"fatalAccidentRate":0.13},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","totalAccidents":48,"fatalAccidents":31,"accidentHours":19266967,"accidentRate":0.25,"fatalAccidentRate":0.16}],"1.5.2":[{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Stall / LOC","totalAccidents":23,"fatalAccidents":18,"fatalities":28,"pctAccidents":47.9,"pctFatalAccidents":58.1,"pctFatalities":59.6,"lethality":78.3},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Wires / structures / terrain","totalAccidents":15,"fatalAccidents":7,"fatalities":9,"pctAccidents":31.3,"pctFatalAccidents":22.6,"pctFatalities":19.1,"lethality":46.7},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Aerobatics","totalAccidents":5,"fatalAccidents":4,"fatalities":5,"pctAccidents":10.4,"pctFatalAccidents":12.9,"pctFatalities":10.6,"lethality":80},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Unknown","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":6.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Maneuvering","subType":"Mountains / canyons","totalAccidents":2,"fatalAccidents":2,"fatalities":5,"pctAccidents":4.2,"pctFatalAccidents":6.5,"pctFatalities":10.6,"lethality":100}],"1.5.3":[{"accidentType":"Maneuvering","farPart":"091","sortOrder":9111,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":33,"pctAccidents":68.8,"fatalAccidents":18,"pctFatalAccidents":58.1,"fatalities":28,"pctFatalities":59.6,"lethality":54.5},{"accidentType":"Maneuvering","farPart":"091","sortOrder":9121,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":15,"pctAccidents":31.3,"fatalAccidents":8,"pctFatalAccidents":25.8,"fatalities":10,"pctFatalities":21.3,"lethality":53.3},{"accidentType":"Maneuvering","farPart":"091","sortOrder":9131,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":9,"pctAccidents":18.8,"fatalAccidents":8,"pctFatalAccidents":25.8,"fatalities":11,"pctFatalities":23.4,"lethality":88.9},{"accidentType":"Maneuvering","farPart":"091","sortOrder":9141,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":1,"pctAccidents":2.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Maneuvering","farPart":"091","sortOrder":9151,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":3,"pctAccidents":6.3,"fatalAccidents":3,"pctFatalAccidents":9.7,"fatalities":5,"pctFatalities":10.6,"lethality":100},{"accidentType":"Maneuvering","farPart":"091","sortOrder":9161,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":1,"pctAccidents":2.1,"fatalAccidents":1,"pctFatalAccidents":3.2,"fatalities":2,"pctFatalities":4.3,"lethality":100},{"accidentType":"Maneuvering","farPart":"091","sortOrder":9171,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":3,"pctAccidents":6.3,"fatalAccidents":2,"pctFatalAccidents":6.5,"fatalities":3,"pctFatalities":6.4,"lethality":66.7}],"1.5.4":[{"sortOrder":9101,"farPart":"091","conditions":"Day VMC","accidents":43,"pctAccidents":89.6,"fatalAccidents":28,"pctFatalAccidents":3.2,"fatalities":43,"pctFatalities":4.3,"lethality":65.1},{"sortOrder":9102,"farPart":"091","conditions":"Night VMC","accidents":4,"pctAccidents":8.3,"fatalAccidents":2,"pctFatalAccidents":3.2,"fatalities":2,"pctFatalities":4.3,"lethality":50},{"sortOrder":9105,"farPart":"091","conditions":"Unknown","accidents":1,"pctAccidents":2.1,"fatalAccidents":1,"pctFatalAccidents":3.2,"fatalities":2,"pctFatalities":4.3,"lethality":100}],"1.5.5":[{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":9,"pctAccidents":18.8,"fatalAccidents":6,"pctFatalAccidents":19.4,"fatalities":7,"pctFatalities":14.9,"lethality":66.7},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":11,"pctAccidents":22.9,"fatalAccidents":8,"pctFatalAccidents":25.8,"fatalities":13,"pctFatalities":27.7,"lethality":72.7},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":14,"pctAccidents":29.2,"fatalAccidents":5,"pctFatalAccidents":16.1,"fatalities":9,"pctFatalities":19.1,"lethality":35.7},{"accidentType":"Maneuvering","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":3,"pctAccidents":6.3,"fatalAccidents":2,"pctFatalAccidents":6.5,"fatalities":3,"pctFatalities":6.4,"lethality":66.7},{"accidentType":"Maneuvering","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":11,"pctAccidents":22.9,"fatalAccidents":10,"pctFatalAccidents":32.3,"fatalities":15,"pctFatalities":31.9,"lethality":90.9},{"accidentType":"Maneuvering","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":8,"pctAccidents":16.7,"fatalAccidents":6,"pctFatalAccidents":19.4,"fatalities":12,"pctFatalities":25.5,"lethality":75},{"accidentType":"Maneuvering","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":12,"pctAccidents":25,"fatalAccidents":8,"pctFatalAccidents":25.8,"fatalities":14,"pctFatalities":29.8,"lethality":66.7},{"accidentType":"Maneuvering","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":21,"pctAccidents":43.8,"fatalAccidents":15,"pctFatalAccidents":48.4,"fatalities":24,"pctFatalities":51.1,"lethality":71.4}],"1.6.1":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":52,"fatalAccidents":24,"accidentHours":17758000,"accidentRate":0.29,"fatalAccidentRate":0.14},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":33,"fatalAccidents":15,"accidentHours":16554000,"accidentRate":0.2,"fatalAccidentRate":0.09},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":46,"fatalAccidents":14,"accidentHours":16474000,"accidentRate":0.28,"fatalAccidentRate":0.08},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":44,"fatalAccidents":15,"accidentHours":17375000,"accidentRate":0.25,"fatalAccidentRate":0.09},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":40,"fatalAccidents":11,"accidentHours":18277000,"accidentRate":0.22,"fatalAccidentRate":0.06},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":47,"fatalAccidents":11,"accidentHours":18092000,"accidentRate":0.26,"fatalAccidentRate":0.06},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":68,"fatalAccidents":25,"accidentHours":18862725,"accidentRate":0.36,"fatalAccidentRate":0.13},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":38,"fatalAccidents":15,"accidentHours":17587290,"accidentRate":0.22,"fatalAccidentRate":0.09},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":50,"fatalAccidents":27,"accidentHours":16911260,"accidentRate":0.3,"fatalAccidentRate":0.16},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","totalAccidents":43,"fatalAccidents":17,"accidentHours":19266967,"accidentRate":0.22,"fatalAccidentRate":0.09}],"1.6.2":[{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Collisions","totalAccidents":16,"fatalAccidents":8,"fatalities":12,"pctAccidents":37.2,"pctFatalAccidents":47.1,"pctFatalities":44.4,"lethality":50},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Stalls / spins","totalAccidents":14,"fatalAccidents":5,"fatalities":9,"pctAccidents":32.6,"pctFatalAccidents":29.4,"pctFatalities":33.3,"lethality":35.7},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Deficient IAPs","totalAccidents":5,"fatalAccidents":4,"fatalities":6,"pctAccidents":11.6,"pctFatalAccidents":23.5,"pctFatalities":22.2,"lethality":80},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Gusts / wake turbulence","totalAccidents":5,"fatalAccidents":0,"fatalities":0,"pctAccidents":11.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Descent / approach","subType":"Loss of power","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.6.3":[{"accidentType":"Descent / approach","farPart":"091","sortOrder":9111,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":29,"pctAccidents":67.4,"fatalAccidents":7,"pctFatalAccidents":41.2,"fatalities":8,"pctFatalities":29.6,"lethality":24.1},{"accidentType":"Descent / approach","farPart":"091","sortOrder":9121,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":17,"pctAccidents":39.5,"fatalAccidents":4,"pctFatalAccidents":23.5,"fatalities":4,"pctFatalities":14.8,"lethality":23.5},{"accidentType":"Descent / approach","farPart":"091","sortOrder":9131,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":10,"pctAccidents":23.3,"fatalAccidents":7,"pctFatalAccidents":41.2,"fatalities":11,"pctFatalities":40.7,"lethality":70},{"accidentType":"Descent / approach","farPart":"091","sortOrder":9141,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":1,"pctAccidents":2.3,"fatalAccidents":1,"pctFatalAccidents":5.9,"fatalities":3,"pctFatalities":11.1,"lethality":100},{"accidentType":"Descent / approach","farPart":"091","sortOrder":9151,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":3,"pctAccidents":7,"fatalAccidents":3,"pctFatalAccidents":17.6,"fatalities":8,"pctFatalities":29.6,"lethality":100},{"accidentType":"Descent / approach","farPart":"091","sortOrder":9171,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":2.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.6.4":[{"sortOrder":9101,"farPart":"091","conditions":"Day VMC","accidents":31,"pctAccidents":72.1,"fatalAccidents":7,"pctFatalAccidents":11.8,"fatalities":8,"pctFatalities":7.4,"lethality":22.6},{"sortOrder":9102,"farPart":"091","conditions":"Night VMC","accidents":3,"pctAccidents":7,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":2,"pctFatalities":7.4,"lethality":66.7},{"sortOrder":9103,"farPart":"091","conditions":"Day IMC","accidents":6,"pctAccidents":14,"fatalAccidents":5,"pctFatalAccidents":11.8,"fatalities":11,"pctFatalities":7.4,"lethality":83.3},{"sortOrder":9104,"farPart":"091","conditions":"Night IMC","accidents":3,"pctAccidents":7,"fatalAccidents":3,"pctFatalAccidents":11.8,"fatalities":6,"pctFatalities":7.4,"lethality":100}],"1.6.5":[{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":5,"pctAccidents":11.6,"fatalAccidents":3,"pctFatalAccidents":17.6,"fatalities":5,"pctFatalities":18.5,"lethality":60},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":10,"pctAccidents":23.3,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":3,"pctFatalities":11.1,"lethality":20},{"accidentType":"Descent / approach","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":25,"pctAccidents":58.1,"fatalAccidents":9,"pctFatalAccidents":52.9,"fatalities":13,"pctFatalities":48.1,"lethality":36},{"accidentType":"Descent / approach","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":3,"pctAccidents":7,"fatalAccidents":3,"pctFatalAccidents":17.6,"fatalities":6,"pctFatalities":22.2,"lethality":100},{"accidentType":"Descent / approach","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":13,"pctAccidents":30.2,"fatalAccidents":5,"pctFatalAccidents":29.4,"fatalities":9,"pctFatalities":33.3,"lethality":38.5},{"accidentType":"Descent / approach","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":11,"pctAccidents":25.6,"fatalAccidents":3,"pctFatalAccidents":17.6,"fatalities":4,"pctFatalities":14.8,"lethality":27.3},{"accidentType":"Descent / approach","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":24,"pctAccidents":55.8,"fatalAccidents":11,"pctFatalAccidents":64.7,"fatalities":16,"pctFatalities":59.3,"lethality":45.8}],"1.7.1":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":50,"fatalAccidents":37,"accidentHours":17758000,"accidentRate":0.28,"fatalAccidentRate":0.21},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":41,"fatalAccidents":30,"accidentHours":16554000,"accidentRate":0.25,"fatalAccidentRate":0.18},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":36,"fatalAccidents":28,"accidentHours":16474000,"accidentRate":0.22,"fatalAccidentRate":0.17},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":40,"fatalAccidents":30,"accidentHours":17375000,"accidentRate":0.23,"fatalAccidentRate":0.17},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":24,"fatalAccidents":13,"accidentHours":18277000,"accidentRate":0.13,"fatalAccidentRate":0.07},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":42,"fatalAccidents":32,"accidentHours":18092000,"accidentRate":0.23,"fatalAccidentRate":0.18},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":32,"fatalAccidents":27,"accidentHours":18862725,"accidentRate":0.17,"fatalAccidentRate":0.14},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":44,"fatalAccidents":39,"accidentHours":17587290,"accidentRate":0.25,"fatalAccidentRate":0.22},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":24,"fatalAccidents":19,"accidentHours":16911260,"accidentRate":0.14,"fatalAccidentRate":0.11},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Weather","totalAccidents":30,"fatalAccidents":24,"accidentHours":19266967,"accidentRate":0.16,"fatalAccidentRate":0.12}],"1.7.2":[{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"VFR into IMC","totalAccidents":12,"fatalAccidents":11,"fatalities":19,"pctAccidents":40,"pctFatalAccidents":45.8,"pctFatalities":37.3,"lethality":91.7},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Poor IFR technique","totalAccidents":7,"fatalAccidents":7,"fatalities":20,"pctAccidents":23.3,"pctFatalAccidents":29.2,"pctFatalities":39.2,"lethality":100},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Turbulence","totalAccidents":4,"fatalAccidents":2,"fatalities":3,"pctAccidents":13.3,"pctFatalAccidents":8.3,"pctFatalities":5.9,"lethality":50},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Icing","totalAccidents":3,"fatalAccidents":3,"fatalities":7,"pctAccidents":10,"pctFatalAccidents":12.5,"pctFatalities":13.7,"lethality":100},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Unknown","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":6.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Weather","subType":"Thunderstorm","totalAccidents":2,"fatalAccidents":1,"fatalities":2,"pctAccidents":6.7,"pctFatalAccidents":4.2,"pctFatalities":3.9,"lethality":50}],"1.7.3":[{"accidentType":"Weather","farPart":"091","sortOrder":9111,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":15,"pctAccidents":50,"fatalAccidents":9,"pctFatalAccidents":37.5,"fatalities":14,"pctFatalities":27.5,"lethality":60},{"accidentType":"Weather","farPart":"091","sortOrder":9121,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":2,"pctAccidents":6.7,"fatalAccidents":1,"pctFatalAccidents":4.2,"fatalities":2,"pctFatalities":3.9,"lethality":50},{"accidentType":"Weather","farPart":"091","sortOrder":9131,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":12,"pctAccidents":40,"fatalAccidents":12,"pctFatalAccidents":50,"fatalities":26,"pctFatalities":51,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":9141,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":2,"pctAccidents":6.7,"fatalAccidents":2,"pctFatalAccidents":8.3,"fatalities":3,"pctFatalities":5.9,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":9151,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":3,"pctAccidents":10,"fatalAccidents":3,"pctFatalAccidents":12.5,"fatalities":11,"pctFatalities":21.6,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":9161,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":1,"pctAccidents":3.3,"fatalAccidents":1,"pctFatalAccidents":4.2,"fatalities":2,"pctFatalities":3.9,"lethality":100}],"1.7.4":[{"sortOrder":9101,"farPart":"091","conditions":"Day VMC","accidents":5,"pctAccidents":16.7,"fatalAccidents":3,"pctFatalAccidents":4.2,"fatalities":5,"pctFatalities":3.9,"lethality":60},{"sortOrder":9102,"farPart":"091","conditions":"Night VMC","accidents":2,"pctAccidents":6.7,"fatalAccidents":0,"pctFatalAccidents":4.2,"fatalities":0,"pctFatalities":3.9,"lethality":0},{"sortOrder":9103,"farPart":"091","conditions":"Day IMC","accidents":14,"pctAccidents":46.7,"fatalAccidents":13,"pctFatalAccidents":4.2,"fatalities":30,"pctFatalities":3.9,"lethality":92.9},{"sortOrder":9104,"farPart":"091","conditions":"Night IMC","accidents":7,"pctAccidents":23.3,"fatalAccidents":7,"pctFatalAccidents":4.2,"fatalities":14,"pctFatalities":3.9,"lethality":100},{"sortOrder":9105,"farPart":"091","conditions":"Unknown","accidents":2,"pctAccidents":6.7,"fatalAccidents":1,"pctFatalAccidents":4.2,"fatalities":2,"pctFatalities":3.9,"lethality":50}],"1.7.5":[{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":2,"pctAccidents":6.7,"fatalAccidents":1,"pctFatalAccidents":4.2,"fatalities":2,"pctFatalities":3.9,"lethality":50},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":5,"pctAccidents":16.7,"fatalAccidents":4,"pctFatalAccidents":16.7,"fatalities":14,"pctFatalities":27.5,"lethality":80},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":14,"pctAccidents":46.7,"fatalAccidents":11,"pctFatalAccidents":45.8,"fatalities":21,"pctFatalities":41.2,"lethality":78.6},{"accidentType":"Weather","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":3,"pctAccidents":10,"fatalAccidents":3,"pctFatalAccidents":12.5,"fatalities":5,"pctFatalities":9.8,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":6,"pctAccidents":20,"fatalAccidents":5,"pctFatalAccidents":20.8,"fatalities":9,"pctFatalities":17.6,"lethality":83.3},{"accidentType":"Weather","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":2,"pctAccidents":6.7,"fatalAccidents":2,"pctFatalAccidents":8.3,"fatalities":11,"pctFatalities":21.6,"lethality":100},{"accidentType":"Weather","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":3,"pctAccidents":10,"fatalAccidents":2,"pctFatalAccidents":8.3,"fatalities":6,"pctFatalities":11.8,"lethality":66.7},{"accidentType":"Weather","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":13,"pctAccidents":43.3,"fatalAccidents":11,"pctFatalAccidents":45.8,"fatalities":30,"pctFatalities":58.8,"lethality":84.6}],"1.8.1":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":156,"fatalAccidents":11,"accidentHours":17758000,"accidentRate":0.88,"fatalAccidentRate":0.06},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":132,"fatalAccidents":12,"accidentHours":16554000,"accidentRate":0.8,"fatalAccidentRate":0.07},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":128,"fatalAccidents":16,"accidentHours":16474000,"accidentRate":0.78,"fatalAccidentRate":0.1},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":141,"fatalAccidents":17,"accidentHours":17375000,"accidentRate":0.81,"fatalAccidentRate":0.1},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":170,"fatalAccidents":16,"accidentHours":18277000,"accidentRate":0.93,"fatalAccidentRate":0.09},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":156,"fatalAccidents":14,"accidentHours":18092000,"accidentRate":0.86,"fatalAccidentRate":0.08},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":145,"fatalAccidents":12,"accidentHours":18862725,"accidentRate":0.77,"fatalAccidentRate":0.06},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":132,"fatalAccidents":15,"accidentHours":17587290,"accidentRate":0.75,"fatalAccidentRate":0.09},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":140,"fatalAccidents":17,"accidentHours":16911260,"accidentRate":0.83,"fatalAccidentRate":0.1},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Mechanical","totalAccidents":151,"fatalAccidents":12,"accidentHours":19266967,"accidentRate":0.78,"fatalAccidentRate":0.06}],"1.8.2":[{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Powerplant","totalAccidents":57,"fatalAccidents":6,"fatalities":9,"pctAccidents":37.7,"pctFatalAccidents":50,"pctFatalities":56.3,"lethality":10.5},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Gear and brakes","totalAccidents":34,"fatalAccidents":0,"fatalities":0,"pctAccidents":22.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Fuel system","totalAccidents":23,"fatalAccidents":1,"fatalities":1,"pctAccidents":15.2,"pctFatalAccidents":8.3,"pctFatalities":6.3,"lethality":4.3},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Airframe","totalAccidents":22,"fatalAccidents":3,"fatalities":4,"pctAccidents":14.6,"pctFatalAccidents":25,"pctFatalities":25,"lethality":13.6},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Electrical","totalAccidents":10,"fatalAccidents":0,"fatalities":0,"pctAccidents":6.6,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Unknown","totalAccidents":4,"fatalAccidents":2,"fatalities":2,"pctAccidents":2.6,"pctFatalAccidents":16.7,"pctFatalities":12.5,"lethality":50},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"Mechanical","subType":"Instruments","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":0.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"1.8.3":[{"accidentType":"Mechanical","farPart":"091","sortOrder":9111,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":90,"pctAccidents":60.8,"fatalAccidents":4,"pctFatalAccidents":36.4,"fatalities":4,"pctFatalities":26.7,"lethality":4.4},{"accidentType":"Mechanical","farPart":"091","sortOrder":9121,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":35,"pctAccidents":23.6,"fatalAccidents":1,"pctFatalAccidents":9.1,"fatalities":1,"pctFatalities":6.7,"lethality":2.9},{"accidentType":"Mechanical","farPart":"091","sortOrder":9131,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":44,"pctAccidents":29.7,"fatalAccidents":5,"pctFatalAccidents":45.5,"fatalities":7,"pctFatalities":46.7,"lethality":11.4},{"accidentType":"Mechanical","farPart":"091","sortOrder":9141,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":8,"pctAccidents":5.4,"fatalAccidents":3,"pctFatalAccidents":27.3,"fatalities":5,"pctFatalities":33.3,"lethality":37.5},{"accidentType":"Mechanical","farPart":"091","sortOrder":9151,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":12,"pctAccidents":8.1,"fatalAccidents":2,"pctFatalAccidents":18.2,"fatalities":4,"pctFatalities":26.7,"lethality":16.7},{"accidentType":"Mechanical","farPart":"091","sortOrder":9161,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":1,"pctAccidents":0.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":9171,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":2,"pctAccidents":1.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.8.4":[{"sortOrder":9101,"farPart":"091","conditions":"Day VMC","accidents":142,"pctAccidents":94,"fatalAccidents":11,"pctFatalAccidents":0,"fatalities":14,"pctFatalities":0,"lethality":7.7},{"sortOrder":9102,"farPart":"091","conditions":"Night VMC","accidents":4,"pctAccidents":2.6,"fatalAccidents":1,"pctFatalAccidents":0,"fatalities":2,"pctFatalities":0,"lethality":25},{"sortOrder":9103,"farPart":"091","conditions":"Day IMC","accidents":1,"pctAccidents":0.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":9104,"farPart":"091","conditions":"Night IMC","accidents":1,"pctAccidents":0.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":9105,"farPart":"091","conditions":"Unknown","accidents":3,"pctAccidents":2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"1.8.5":[{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":20,"pctAccidents":13.2,"fatalAccidents":4,"pctFatalAccidents":33.3,"fatalities":6,"pctFatalities":37.5,"lethality":20},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":48,"pctAccidents":31.8,"fatalAccidents":2,"pctFatalAccidents":16.7,"fatalities":3,"pctFatalities":18.8,"lethality":4.2},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":46,"pctAccidents":30.5,"fatalAccidents":2,"pctFatalAccidents":16.7,"fatalities":2,"pctFatalities":12.5,"lethality":4.3},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":1,"pctAccidents":0.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Mechanical","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":9,"pctAccidents":6,"fatalAccidents":1,"pctFatalAccidents":8.3,"fatalities":1,"pctFatalities":6.3,"lethality":11.1},{"accidentType":"Mechanical","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":27,"pctAccidents":17.9,"fatalAccidents":3,"pctFatalAccidents":25,"fatalities":4,"pctFatalities":25,"lethality":11.1},{"accidentType":"Mechanical","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":33,"pctAccidents":21.9,"fatalAccidents":3,"pctFatalAccidents":25,"fatalities":6,"pctFatalities":37.5,"lethality":9.1},{"accidentType":"Mechanical","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":43,"pctAccidents":28.5,"fatalAccidents":4,"pctFatalAccidents":33.3,"fatalities":7,"pctFatalities":43.8,"lethality":9.3},{"accidentType":"Mechanical","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":84,"pctAccidents":55.6,"fatalAccidents":6,"pctFatalAccidents":50,"fatalities":9,"pctFatalities":56.3,"lethality":7.1}],"Text-Intro-CFW":{},"2.1":{"accidents":61,"aircraft":62,"fatalAccidents":14,"lethality":23,"fatalities":25,"params":{"year":2021,"category":"Airplane","commercial":"Y"}},"2.2":[{"eventYear":2012,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":81,"fatalAccidents":7,"accidentHours":3011000,"accidentRate":2.69,"fatalAccidentRate":0.23},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":80,"fatalAccidents":10,"accidentHours":3238000,"accidentRate":2.47,"fatalAccidentRate":0.31},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":11,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":8,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":64,"fatalAccidents":19,"accidentHours":3234000,"accidentRate":1.98,"fatalAccidentRate":0.59},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":74,"fatalAccidents":11,"accidentHours":3632000,"accidentRate":2.04,"fatalAccidentRate":0.3},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":63,"fatalAccidents":10,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.28},{"eventYear":2019,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":55,"fatalAccidents":10,"accidentHours":3389706,"accidentRate":1.62,"fatalAccidentRate":0.3},{"eventYear":2020,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":13,"accidentHours":3086406,"accidentRate":2.17,"fatalAccidentRate":0.42},{"eventYear":2021,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":61,"fatalAccidents":14,"accidentHours":4261228,"accidentRate":1.43,"fatalAccidentRate":0.33}],"2.3":[{"eventYear":2012,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":81,"fatalAccidents":7,"accidentHours":3011000,"accidentRate":2.69,"fatalAccidentRate":0.23},{"eventYear":2013,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":80,"fatalAccidents":10,"accidentHours":3238000,"accidentRate":2.47,"fatalAccidentRate":0.31},{"eventYear":2014,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":11,"accidentHours":3397000,"accidentRate":1.97,"fatalAccidentRate":0.32},{"eventYear":2015,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":76,"fatalAccidents":8,"accidentHours":3311000,"accidentRate":2.3,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":64,"fatalAccidents":19,"accidentHours":3234000,"accidentRate":1.98,"fatalAccidentRate":0.59},{"eventYear":2017,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":74,"fatalAccidents":11,"accidentHours":3632000,"accidentRate":2.04,"fatalAccidentRate":0.3},{"eventYear":2018,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":63,"fatalAccidents":10,"accidentHours":3589913,"accidentRate":1.75,"fatalAccidentRate":0.28},{"eventYear":2019,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":55,"fatalAccidents":10,"accidentHours":3389706,"accidentRate":1.62,"fatalAccidentRate":0.3},{"eventYear":2020,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":67,"fatalAccidents":13,"accidentHours":3086406,"accidentRate":2.17,"fatalAccidentRate":0.42},{"eventYear":2021,"category":"Airplane","commercial":"Y","accidentType":"Total","totalAccidents":61,"fatalAccidents":14,"accidentHours":4261228,"accidentRate":1.43,"fatalAccidentRate":0.33}],"2.4":[{"eventYear":2021,"category":"Airplane","commercial":"Y","majorCause":"Pilot-Related","sortOrder":1,"accidents":38,"pctAccidents":62.3,"fatalAccidents":5,"pctFatalAccidents":35.7,"fatalities":11,"pctFatalities":44,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"Y","majorCause":"Mechanical","sortOrder":2,"accidents":10,"pctAccidents":16.4,"fatalAccidents":3,"pctFatalAccidents":21.4,"fatalities":4,"pctFatalities":16,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"Y","majorCause":"Other/Unknown","sortOrder":3,"accidents":9,"pctAccidents":14.8,"fatalAccidents":4,"pctFatalAccidents":28.6,"fatalities":8,"pctFatalities":32,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"Y","majorCause":null,"sortOrder":3,"accidents":4,"pctAccidents":6.6,"fatalAccidents":2,"pctFatalAccidents":14.3,"fatalities":2,"pctFatalities":8,"lethality":0}],"2.5":[{"accidentType":"Total","farPart":"135","sortOrder":13511,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":15,"pctAccidents":51.7,"fatalAccidents":3,"pctFatalAccidents":50,"fatalities":10,"pctFatalities":58.8,"lethality":20},{"accidentType":"Total","farPart":"135","sortOrder":13521,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":4,"pctAccidents":13.8,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":8,"pctFatalities":47.1,"lethality":50},{"accidentType":"Total","farPart":"135","sortOrder":13531,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":3,"pctAccidents":10.3,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":2,"pctFatalities":11.8,"lethality":33.3},{"accidentType":"Total","farPart":"135","sortOrder":13541,"isAggragate":0,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine turbine","accidents":2,"pctAccidents":6.9,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":2,"pctFatalities":11.8,"lethality":50},{"accidentType":"Total","farPart":"135","sortOrder":13551,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":11,"pctAccidents":37.9,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":5,"pctFatalities":29.4,"lethality":18.2},{"accidentType":"Total","farPart":"135","sortOrder":13561,"isAggragate":0,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine turbine","accidents":5,"pctAccidents":17.2,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":1,"pctFatalities":5.9,"lethality":20},{"accidentType":"Total","farPart":"137","sortOrder":13720,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":29,"pctAccidents":87.9,"fatalAccidents":6,"pctFatalAccidents":75,"fatalities":6,"pctFatalities":75,"lethality":20.7},{"accidentType":"Total","farPart":"137","sortOrder":13721,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":29,"pctAccidents":87.9,"fatalAccidents":6,"pctFatalAccidents":75,"fatalities":6,"pctFatalities":75,"lethality":20.7},{"accidentType":"Total","farPart":"137","sortOrder":13771,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":4,"pctAccidents":12.1,"fatalAccidents":2,"pctFatalAccidents":25,"fatalities":2,"pctFatalities":25,"lethality":50}],"2.6":[{"sortOrder":13501,"farPart":"135","conditions":"Day VMC","accidents":22,"pctAccidents":75.9,"fatalAccidents":4,"pctFatalAccidents":37.5,"fatalities":10,"pctFatalities":37.5,"lethality":18.2},{"sortOrder":13502,"farPart":"135","conditions":"Night VMC","accidents":3,"pctAccidents":10.3,"fatalAccidents":1,"pctFatalAccidents":37.5,"fatalities":1,"pctFatalities":37.5,"lethality":33.3},{"sortOrder":13503,"farPart":"135","conditions":"Day IMC","accidents":4,"pctAccidents":13.8,"fatalAccidents":1,"pctFatalAccidents":37.5,"fatalities":6,"pctFatalities":37.5,"lethality":25},{"sortOrder":13701,"farPart":"137","conditions":"Day VMC","accidents":26,"pctAccidents":81.3,"fatalAccidents":5,"pctFatalAccidents":37.5,"fatalities":5,"pctFatalities":37.5,"lethality":19.2},{"sortOrder":13702,"farPart":"137","conditions":"Night VMC","accidents":1,"pctAccidents":3.1,"fatalAccidents":0,"pctFatalAccidents":37.5,"fatalities":0,"pctFatalities":37.5,"lethality":0},{"sortOrder":13705,"farPart":"137","conditions":"Unknown","accidents":5,"pctAccidents":15.6,"fatalAccidents":3,"pctFatalAccidents":37.5,"fatalities":3,"pctFatalities":37.5,"lethality":60}],"2.7":[{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"ATP","accidents":11,"pctAccidents":37.9,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":6,"pctFatalities":35.3,"lethality":9.1},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"ATP","accidents":4,"pctAccidents":12.1,"fatalAccidents":1,"pctFatalAccidents":12.5,"fatalities":1,"pctFatalities":12.5,"lethality":25},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"Commercial","accidents":23,"pctAccidents":69.7,"fatalAccidents":4,"pctFatalAccidents":50,"fatalities":4,"pctFatalities":50,"lethality":17.4},{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"Commercial","accidents":12,"pctAccidents":41.4,"fatalAccidents":2,"pctFatalAccidents":33.3,"fatalities":4,"pctFatalities":23.5,"lethality":16.7},{"accidentType":"Total","farPart":"135","sortOrder":2,"certLevel":"Other or unknown","accidents":6,"pctAccidents":20.7,"fatalAccidents":3,"pctFatalAccidents":50,"fatalities":7,"pctFatalities":41.2,"lethality":50},{"accidentType":"Total","farPart":"137","sortOrder":2,"certLevel":"Other or unknown","accidents":6,"pctAccidents":18.2,"fatalAccidents":3,"pctFatalAccidents":37.5,"fatalities":3,"pctFatalities":37.5,"lethality":50},{"accidentType":"Total","farPart":"137","sortOrder":4,"certLevel":"CFI on board","accidents":9,"pctAccidents":27.3,"fatalAccidents":2,"pctFatalAccidents":25,"fatalities":2,"pctFatalities":25,"lethality":22.2},{"accidentType":"Total","farPart":"135","sortOrder":4,"certLevel":"CFI on board","accidents":9,"pctAccidents":31,"fatalAccidents":1,"pctFatalAccidents":16.7,"fatalities":2,"pctFatalities":11.8,"lethality":11.1},{"accidentType":"Total","farPart":"135","sortOrder":5,"certLevel":"IFR pilot on board","accidents":23,"pctAccidents":79.3,"fatalAccidents":3,"pctFatalAccidents":50,"fatalities":10,"pctFatalities":58.8,"lethality":13},{"accidentType":"Total","farPart":"137","sortOrder":5,"certLevel":"IFR pilot on board","accidents":16,"pctAccidents":48.5,"fatalAccidents":2,"pctFatalAccidents":25,"fatalities":2,"pctFatalities":25,"lethality":12.5}],"Text-Intro-NCH":{},"3.1":{"accidents":87,"aircraft":87,"fatalAccidents":17,"lethality":19.5,"fatalities":32,"params":{"year":2021,"category":"Helicopter","commercial":"N"}},"3.2":[{"eventYear":2021,"category":"Helicopter","commercial":"N","majorCause":"Pilot-Related","sortOrder":1,"accidents":67,"pctAccidents":89.3,"fatalAccidents":9,"pctFatalAccidents":90,"fatalities":14,"pctFatalities":77.8,"lethality":0},{"eventYear":2021,"category":"Helicopter","commercial":"N","majorCause":"Mechanical","sortOrder":2,"accidents":8,"pctAccidents":10.7,"fatalAccidents":1,"pctFatalAccidents":10,"fatalities":4,"pctFatalities":22.2,"lethality":0}],"3.3":[{"eventYear":2012,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":124,"fatalAccidents":19,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":104,"fatalAccidents":20,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":106,"fatalAccidents":13,"accidentHours":1719000,"accidentRate":6.17,"fatalAccidentRate":0.76},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":91,"fatalAccidents":11,"accidentHours":1748000,"accidentRate":5.21,"fatalAccidentRate":0.63},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":77,"fatalAccidents":12,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":88,"fatalAccidents":13,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":92,"fatalAccidents":16,"accidentHours":1453417,"accidentRate":6.33,"fatalAccidentRate":1.1},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":80,"fatalAccidents":14,"accidentHours":1425895,"accidentRate":5.61,"fatalAccidentRate":0.98},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":62,"fatalAccidents":13,"accidentHours":1313051,"accidentRate":4.72,"fatalAccidentRate":0.99},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":87,"fatalAccidents":17,"accidentHours":1288602,"accidentRate":6.75,"fatalAccidentRate":1.32}],"3.4":[{"eventYear":2012,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":124,"fatalAccidents":19,"accidentHours":1584000,"accidentRate":7.83,"fatalAccidentRate":1.2},{"eventYear":2013,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":104,"fatalAccidents":20,"accidentHours":1424000,"accidentRate":7.3,"fatalAccidentRate":1.4},{"eventYear":2014,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":106,"fatalAccidents":13,"accidentHours":1719000,"accidentRate":6.17,"fatalAccidentRate":0.76},{"eventYear":2015,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":91,"fatalAccidents":11,"accidentHours":1748000,"accidentRate":5.21,"fatalAccidentRate":0.63},{"eventYear":2016,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":77,"fatalAccidents":12,"accidentHours":1715000,"accidentRate":4.49,"fatalAccidentRate":0.7},{"eventYear":2017,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":88,"fatalAccidents":13,"accidentHours":1864000,"accidentRate":4.72,"fatalAccidentRate":0.7},{"eventYear":2018,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":92,"fatalAccidents":16,"accidentHours":1453417,"accidentRate":6.33,"fatalAccidentRate":1.1},{"eventYear":2019,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":80,"fatalAccidents":14,"accidentHours":1425895,"accidentRate":5.61,"fatalAccidentRate":0.98},{"eventYear":2020,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":62,"fatalAccidents":13,"accidentHours":1313051,"accidentRate":4.72,"fatalAccidentRate":0.99},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","totalAccidents":87,"fatalAccidents":17,"accidentHours":1288602,"accidentRate":6.75,"fatalAccidentRate":1.32}],"3.5":[{"accidentType":"Total","farPart":"091","sortOrder":9101,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":38,"pctAccidents":44.2,"fatalAccidents":4,"pctFatalAccidents":23.5,"fatalities":6,"pctFatalities":18.8,"lethality":10.5},{"accidentType":"Total","farPart":"091","sortOrder":9102,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":27,"pctAccidents":31.4,"fatalAccidents":4,"pctFatalAccidents":23.5,"fatalities":7,"pctFatalities":21.9,"lethality":14.8},{"accidentType":"Total","farPart":"091","sortOrder":9104,"isAggragate":1,"aircraftClass":"Multi-engine turbine","aircraftSubClass":"Multi-engine turbine","accidents":5,"pctAccidents":5.8,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":5,"pctFatalities":15.6,"lethality":40},{"accidentType":"Total","farPart":"091","sortOrder":9105,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":16,"pctAccidents":18.6,"fatalAccidents":7,"pctFatalAccidents":41.2,"fatalities":14,"pctFatalities":43.8,"lethality":43.8},{"accidentType":"Total","farPart":"107","sortOrder":10705,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":100,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"3.6":[{"sortOrder":1,"typeOperation":null,"accidents":3,"pctAccidents":3.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":1,"typeOperation":"Aerial Application","accidents":1,"pctAccidents":1.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":1,"typeOperation":"Personal","accidents":37,"pctAccidents":42.5,"fatalAccidents":12,"pctFatalAccidents":70.6,"fatalities":20,"pctFatalities":62.5,"lethality":32.4},{"sortOrder":2,"typeOperation":"Instructional","accidents":20,"pctAccidents":23,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":6,"pctFatalities":18.8,"lethality":10},{"sortOrder":3,"typeOperation":"Public Use","accidents":5,"pctAccidents":5.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":4,"typeOperation":"Positioning","accidents":5,"pctAccidents":5.7,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":5,"typeOperation":"Aerial Observation","accidents":8,"pctAccidents":9.2,"fatalAccidents":3,"pctFatalAccidents":17.6,"fatalities":6,"pctFatalities":18.8,"lethality":37.5},{"sortOrder":6,"typeOperation":"Business","accidents":1,"pctAccidents":1.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":8,"typeOperation":"Other work use","accidents":7,"pctAccidents":8,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"3.7":[{"sortOrder":9101,"farPart":"091","conditions":"Day VMC","accidents":72,"pctAccidents":83.7,"fatalAccidents":12,"pctFatalAccidents":11.8,"fatalities":23,"pctFatalities":6.3,"lethality":16.7},{"sortOrder":9102,"farPart":"091","conditions":"Night VMC","accidents":7,"pctAccidents":8.1,"fatalAccidents":0,"pctFatalAccidents":11.8,"fatalities":0,"pctFatalities":6.3,"lethality":0},{"sortOrder":9103,"farPart":"091","conditions":"Day IMC","accidents":2,"pctAccidents":2.3,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":3,"pctFatalities":6.3,"lethality":100},{"sortOrder":9104,"farPart":"091","conditions":"Night IMC","accidents":1,"pctAccidents":1.2,"fatalAccidents":1,"pctFatalAccidents":11.8,"fatalities":4,"pctFatalities":6.3,"lethality":100},{"sortOrder":9105,"farPart":"091","conditions":"Unknown","accidents":4,"pctAccidents":4.7,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":2,"pctFatalities":6.3,"lethality":50},{"sortOrder":10701,"farPart":"107","conditions":"Day VMC","accidents":1,"pctAccidents":100,"fatalAccidents":0,"pctFatalAccidents":11.8,"fatalities":0,"pctFatalities":6.3,"lethality":0}],"3.8":[{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"ATP","accidents":9,"pctAccidents":10.5,"fatalAccidents":1,"pctFatalAccidents":5.9,"fatalities":1,"pctFatalities":3.1,"lethality":11.1},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Commercial","accidents":42,"pctAccidents":48.8,"fatalAccidents":6,"pctFatalAccidents":35.3,"fatalities":12,"pctFatalities":37.5,"lethality":14.3},{"accidentType":"Total","farPart":"107","sortOrder":1,"certLevel":"Private","accidents":1,"pctAccidents":100,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Private","accidents":18,"pctAccidents":20.9,"fatalAccidents":2,"pctFatalAccidents":11.8,"fatalities":3,"pctFatalities":9.4,"lethality":11.1},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Sport","accidents":1,"pctAccidents":1.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"091","sortOrder":1,"certLevel":"Student","accidents":3,"pctAccidents":3.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"091","sortOrder":2,"certLevel":"Other or unknown","accidents":13,"pctAccidents":15.1,"fatalAccidents":8,"pctFatalAccidents":47.1,"fatalities":16,"pctFatalities":50,"lethality":61.5},{"accidentType":"Total","farPart":"091","sortOrder":3,"certLevel":"Second pilot on board","accidents":18,"pctAccidents":20.9,"fatalAccidents":3,"pctFatalAccidents":17.6,"fatalities":6,"pctFatalities":18.8,"lethality":16.7},{"accidentType":"Total","farPart":"091","sortOrder":4,"certLevel":"CFI on board","accidents":34,"pctAccidents":39.5,"fatalAccidents":4,"pctFatalAccidents":23.5,"fatalities":7,"pctFatalities":21.9,"lethality":11.8},{"accidentType":"Total","farPart":"091","sortOrder":5,"certLevel":"IFR pilot on board","accidents":50,"pctAccidents":58.1,"fatalAccidents":8,"pctFatalAccidents":47.1,"fatalities":14,"pctFatalities":43.8,"lethality":16}],"3.9":[{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Rotorcraft aerodynamics","totalAccidents":23,"fatalAccidents":3,"fatalities":4,"pctAccidents":30.7,"pctFatalAccidents":30,"pctFatalities":22.2,"lethality":13},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Maneuvering","totalAccidents":13,"fatalAccidents":1,"fatalities":1,"pctAccidents":17.3,"pctFatalAccidents":10,"pctFatalities":5.6,"lethality":7.7},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Mechanical","totalAccidents":8,"fatalAccidents":1,"fatalities":4,"pctAccidents":10.7,"pctFatalAccidents":10,"pctFatalities":22.2,"lethality":12.5},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Weather","totalAccidents":7,"fatalAccidents":3,"fatalities":4,"pctAccidents":9.3,"pctFatalAccidents":30,"pctFatalities":22.2,"lethality":42.9},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Landing","totalAccidents":6,"fatalAccidents":0,"fatalities":0,"pctAccidents":8,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Other / miscellaneous","totalAccidents":6,"fatalAccidents":1,"fatalities":1,"pctAccidents":8,"pctFatalAccidents":10,"pctFatalities":5.6,"lethality":16.7},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Take-off / climb","totalAccidents":4,"fatalAccidents":0,"fatalities":0,"pctAccidents":5.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Taxi / ground operations","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":4,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Descent / approach","totalAccidents":2,"fatalAccidents":0,"fatalities":0,"pctAccidents":2.7,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"External load","totalAccidents":1,"fatalAccidents":1,"fatalities":4,"pctAccidents":1.3,"pctFatalAccidents":10,"pctFatalities":22.2,"lethality":100},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Fuel management","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Helicopter","commercial":"N","accidentType":"Total","subType":"Pre-flight / static","totalAccidents":1,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.3,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0}],"Text-Intro-CH":{},"4.1":{"accidents":38,"aircraft":38,"fatalAccidents":6,"lethality":15.8,"fatalities":12,"params":{"year":2021,"category":"Helicopter","commercial":"Y"}},"4.2":[{"eventYear":2021,"category":"Helicopter","commercial":"Y","majorCause":"Pilot-Related","sortOrder":1,"accidents":33,"pctAccidents":97.1,"fatalAccidents":4,"pctFatalAccidents":100,"fatalities":6,"pctFatalities":100,"lethality":0},{"eventYear":2021,"category":"Helicopter","commercial":"Y","majorCause":"Mechanical","sortOrder":2,"accidents":1,"pctAccidents":2.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}],"4.3":[{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":40,"fatalAccidents":6,"accidentHours":1525000,"accidentRate":2.62,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":7,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":37,"fatalAccidents":7,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":38,"fatalAccidents":5,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":7,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48},{"eventYear":2019,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":44,"fatalAccidents":10,"accidentHours":1570636,"accidentRate":2.8,"fatalAccidentRate":0.64},{"eventYear":2020,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":30,"fatalAccidents":7,"accidentHours":1095265,"accidentRate":2.74,"fatalAccidentRate":0.64},{"eventYear":2021,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":38,"fatalAccidents":6,"accidentHours":1467452,"accidentRate":2.59,"fatalAccidentRate":0.41}],"4.4":[{"eventYear":2012,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1870000,"accidentRate":1.87,"fatalAccidentRate":0.16},{"eventYear":2013,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":40,"fatalAccidents":6,"accidentHours":1525000,"accidentRate":2.62,"fatalAccidentRate":0.39},{"eventYear":2014,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":7,"accidentHours":1523000,"accidentRate":2.3,"fatalAccidentRate":0.46},{"eventYear":2015,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":37,"fatalAccidents":7,"accidentHours":1546000,"accidentRate":2.39,"fatalAccidentRate":0.45},{"eventYear":2016,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":35,"fatalAccidents":3,"accidentHours":1412000,"accidentRate":2.48,"fatalAccidentRate":0.21},{"eventYear":2017,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":38,"fatalAccidents":5,"accidentHours":1456000,"accidentRate":2.61,"fatalAccidentRate":0.34},{"eventYear":2018,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":34,"fatalAccidents":7,"accidentHours":1469036,"accidentRate":2.31,"fatalAccidentRate":0.48},{"eventYear":2019,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":44,"fatalAccidents":10,"accidentHours":1570636,"accidentRate":2.8,"fatalAccidentRate":0.64},{"eventYear":2020,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":30,"fatalAccidents":7,"accidentHours":1095265,"accidentRate":2.74,"fatalAccidentRate":0.64},{"eventYear":2021,"category":"Helicopter","commercial":"Y","accidentType":"Total","totalAccidents":38,"fatalAccidents":6,"accidentHours":1467452,"accidentRate":2.59,"fatalAccidentRate":0.41}],"4.5":[{"accidentType":"Total","farPart":"133","sortOrder":13301,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":1,"pctAccidents":14.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":13302,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":3,"pctAccidents":42.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":13304,"isAggragate":1,"aircraftClass":"Multi-engine turbine","aircraftSubClass":"Multi-engine turbine","accidents":1,"pctAccidents":14.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":13305,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":2,"pctAccidents":28.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":13501,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":1,"pctAccidents":11.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":13502,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":6,"pctAccidents":66.7,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":3,"pctFatalities":37.5,"lethality":16.7},{"accidentType":"Total","farPart":"135","sortOrder":13504,"isAggragate":1,"aircraftClass":"Multi-engine turbine","aircraftSubClass":"Multi-engine turbine","accidents":1,"pctAccidents":11.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":13505,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":11.1,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":5,"pctFatalities":62.5,"lethality":100},{"accidentType":"Total","farPart":"137","sortOrder":13701,"isAggragate":1,"aircraftClass":"Single-engine reciprocating","aircraftSubClass":"Single-engine reciprocating","accidents":6,"pctAccidents":27.3,"fatalAccidents":1,"pctFatalAccidents":25,"fatalities":1,"pctFatalities":25,"lethality":16.7},{"accidentType":"Total","farPart":"137","sortOrder":13702,"isAggragate":1,"aircraftClass":"Single-engine turbine","aircraftSubClass":"Single-engine turbine","accidents":13,"pctAccidents":59.1,"fatalAccidents":2,"pctFatalAccidents":50,"fatalities":2,"pctFatalities":50,"lethality":15.4},{"accidentType":"Total","farPart":"137","sortOrder":13705,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":3,"pctAccidents":13.6,"fatalAccidents":1,"pctFatalAccidents":25,"fatalities":1,"pctFatalities":25,"lethality":33.3}],"4.6":[{"sortOrder":13301,"farPart":"133","conditions":"Day VMC","accidents":7,"pctAccidents":100,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":13501,"farPart":"135","conditions":"Day VMC","accidents":7,"pctAccidents":77.8,"fatalAccidents":1,"pctFatalAccidents":0,"fatalities":5,"pctFatalities":0,"lethality":14.3},{"sortOrder":13502,"farPart":"135","conditions":"Night VMC","accidents":1,"pctAccidents":11.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"sortOrder":13504,"farPart":"135","conditions":"Night IMC","accidents":1,"pctAccidents":11.1,"fatalAccidents":1,"pctFatalAccidents":0,"fatalities":3,"pctFatalities":0,"lethality":100},{"sortOrder":13701,"farPart":"137","conditions":"Day VMC","accidents":22,"pctAccidents":100,"fatalAccidents":4,"pctFatalAccidents":0,"fatalities":4,"pctFatalities":0,"lethality":18.2}],"4.7":[{"accidentType":"Total","farPart":"133","sortOrder":1,"certLevel":"ATP","accidents":1,"pctAccidents":14.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"ATP","accidents":2,"pctAccidents":22.2,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"ATP","accidents":2,"pctAccidents":9.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"137","sortOrder":1,"certLevel":"Commercial","accidents":18,"pctAccidents":81.8,"fatalAccidents":3,"pctFatalAccidents":75,"fatalities":3,"pctFatalities":75,"lethality":16.7},{"accidentType":"Total","farPart":"135","sortOrder":1,"certLevel":"Commercial","accidents":6,"pctAccidents":66.7,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":3,"pctFatalities":37.5,"lethality":16.7},{"accidentType":"Total","farPart":"133","sortOrder":1,"certLevel":"Commercial","accidents":5,"pctAccidents":71.4,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":14.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":2,"certLevel":"Other or unknown","accidents":1,"pctAccidents":11.1,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":5,"pctFatalities":62.5,"lethality":100},{"accidentType":"Total","farPart":"137","sortOrder":2,"certLevel":"Other or unknown","accidents":2,"pctAccidents":9.1,"fatalAccidents":1,"pctFatalAccidents":25,"fatalities":1,"pctFatalities":25,"lethality":50},{"accidentType":"Total","farPart":"133","sortOrder":3,"certLevel":"Second pilot on board","accidents":1,"pctAccidents":14.3,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":3,"certLevel":"Second pilot on board","accidents":1,"pctAccidents":11.1,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":3,"pctFatalities":37.5,"lethality":100},{"accidentType":"Total","farPart":"137","sortOrder":4,"certLevel":"CFI on board","accidents":9,"pctAccidents":40.9,"fatalAccidents":1,"pctFatalAccidents":25,"fatalities":1,"pctFatalities":25,"lethality":11.1},{"accidentType":"Total","farPart":"135","sortOrder":4,"certLevel":"CFI on board","accidents":6,"pctAccidents":66.7,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":3,"pctFatalities":37.5,"lethality":16.7},{"accidentType":"Total","farPart":"133","sortOrder":4,"certLevel":"CFI on board","accidents":3,"pctAccidents":42.9,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"133","sortOrder":5,"certLevel":"IFR pilot on board","accidents":4,"pctAccidents":57.1,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"Total","farPart":"135","sortOrder":5,"certLevel":"IFR pilot on board","accidents":8,"pctAccidents":88.9,"fatalAccidents":1,"pctFatalAccidents":50,"fatalities":3,"pctFatalities":37.5,"lethality":12.5},{"accidentType":"Total","farPart":"137","sortOrder":5,"certLevel":"IFR pilot on board","accidents":11,"pctAccidents":50,"fatalAccidents":2,"pctFatalAccidents":50,"fatalities":2,"pctFatalities":50,"lethality":18.2}],"5.1":[{"eventYear":2012,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":222,"fatalAccidents":54,"accidentHours":17758000,"accidentRate":1.25,"fatalAccidentRate":0.3},{"eventYear":2013,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":161,"fatalAccidents":31,"accidentHours":16554000,"accidentRate":0.97,"fatalAccidentRate":0.19},{"eventYear":2014,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":195,"fatalAccidents":59,"accidentHours":16474000,"accidentRate":1.18,"fatalAccidentRate":0.36},{"eventYear":2015,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":166,"fatalAccidents":42,"accidentHours":17375000,"accidentRate":0.96,"fatalAccidentRate":0.24},{"eventYear":2016,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":162,"fatalAccidents":29,"accidentHours":18277000,"accidentRate":0.89,"fatalAccidentRate":0.16},{"eventYear":2017,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":183,"fatalAccidents":32,"accidentHours":18092000,"accidentRate":1.01,"fatalAccidentRate":0.18},{"eventYear":2018,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":174,"fatalAccidents":35,"accidentHours":18862725,"accidentRate":0.92,"fatalAccidentRate":0.19},{"eventYear":2019,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":164,"fatalAccidents":33,"accidentHours":17587290,"accidentRate":0.93,"fatalAccidentRate":0.19},{"eventYear":2020,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":150,"fatalAccidents":34,"accidentHours":16911260,"accidentRate":0.89,"fatalAccidentRate":0.2},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","totalAccidents":157,"fatalAccidents":33,"accidentHours":19266967,"accidentRate":0.81,"fatalAccidentRate":0.17}],"5.2":[{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Landing","totalAccidents":41,"fatalAccidents":2,"fatalities":3,"pctAccidents":26.1,"pctFatalAccidents":6.1,"pctFatalities":7.1,"lethality":4.9},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Mechanical","totalAccidents":30,"fatalAccidents":4,"fatalities":5,"pctAccidents":19.1,"pctFatalAccidents":12.1,"pctFatalities":11.9,"lethality":13.3},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Take-off","totalAccidents":15,"fatalAccidents":5,"fatalities":5,"pctAccidents":9.6,"pctFatalAccidents":15.2,"pctFatalities":11.9,"lethality":33.3},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Other","totalAccidents":12,"fatalAccidents":4,"fatalities":4,"pctAccidents":7.6,"pctFatalAccidents":12.1,"pctFatalities":9.5,"lethality":33.3},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Fuel management","totalAccidents":12,"fatalAccidents":1,"fatalities":1,"pctAccidents":7.6,"pctFatalAccidents":3,"pctFatalities":2.4,"lethality":8.3},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Other (power loss)","totalAccidents":10,"fatalAccidents":1,"fatalities":1,"pctAccidents":6.4,"pctFatalAccidents":3,"pctFatalities":2.4,"lethality":10},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Maneuvering","totalAccidents":10,"fatalAccidents":6,"fatalities":8,"pctAccidents":6.4,"pctFatalAccidents":18.2,"pctFatalities":19,"lethality":60},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Descent / approach","totalAccidents":8,"fatalAccidents":5,"fatalities":6,"pctAccidents":5.1,"pctFatalAccidents":15.2,"pctFatalities":14.3,"lethality":62.5},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Pre-flight","totalAccidents":7,"fatalAccidents":0,"fatalities":0,"pctAccidents":4.5,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Cruise","totalAccidents":3,"fatalAccidents":1,"fatalities":1,"pctAccidents":1.9,"pctFatalAccidents":3,"pctFatalities":2.4,"lethality":33.3},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Taxi","totalAccidents":3,"fatalAccidents":0,"fatalities":0,"pctAccidents":1.9,"pctFatalAccidents":0,"pctFatalities":0,"lethality":0},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Weather","totalAccidents":2,"fatalAccidents":2,"fatalities":4,"pctAccidents":1.3,"pctFatalAccidents":6.1,"pctFatalities":9.5,"lethality":100},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Go-around","totalAccidents":2,"fatalAccidents":1,"fatalities":2,"pctAccidents":1.3,"pctFatalAccidents":3,"pctFatalities":4.8,"lethality":50},{"eventYear":2021,"category":"Airplane","commercial":"N","accidentType":"LightSport","subType":"Incapacitation","totalAccidents":2,"fatalAccidents":1,"fatalities":2,"pctAccidents":1.3,"pctFatalAccidents":3,"pctFatalities":4.8,"lethality":50}],"5.3":[{"accidentType":"LightSport","farPart":"091","sortOrder":9100,"isAggragate":1,"aircraftClass":"E-LSA","aircraftSubClass":"E-LSA","accidents":12,"pctAccidents":7.5,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0},{"accidentType":"LightSport","farPart":"091","sortOrder":9111,"isAggragate":1,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"Single-engine fixed-gear","accidents":123,"pctAccidents":77.4,"fatalAccidents":24,"pctFatalAccidents":72.7,"fatalities":30,"pctFatalities":71.4,"lethality":19.5},{"accidentType":"LightSport","farPart":"091","sortOrder":9121,"isAggragate":0,"aircraftClass":"Single-engine fixed-gear","aircraftSubClass":"SEF tailwheel","accidents":74,"pctAccidents":46.5,"fatalAccidents":14,"pctFatalAccidents":42.4,"fatalities":17,"pctFatalities":40.5,"lethality":18.9},{"accidentType":"LightSport","farPart":"091","sortOrder":9131,"isAggragate":1,"aircraftClass":"Single-engine retractable","aircraftSubClass":"Single-engine retractable","accidents":22,"pctAccidents":13.8,"fatalAccidents":8,"pctFatalAccidents":24.2,"fatalities":10,"pctFatalities":23.8,"lethality":36.4},{"accidentType":"LightSport","farPart":"091","sortOrder":9151,"isAggragate":1,"aircraftClass":"Multiengine","aircraftSubClass":"Multiengine","accidents":1,"pctAccidents":0.6,"fatalAccidents":1,"pctFatalAccidents":3,"fatalities":2,"pctFatalities":4.8,"lethality":100},{"accidentType":"LightSport","farPart":"091","sortOrder":9171,"isAggragate":1,"aircraftClass":"Unknown","aircraftSubClass":"Unknown","accidents":1,"pctAccidents":0.6,"fatalAccidents":0,"pctFatalAccidents":0,"fatalities":0,"pctFatalities":0,"lethality":0}]}'