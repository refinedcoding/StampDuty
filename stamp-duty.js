// Stamp Duty Calculator

const State = {
    ACT:    0,
    NSW:    1,
    NT:     2,
    QLD:    3,
    SA:     4,
    TAS:    5,
    VIC:    6,
    WA:     7
};

const FirstBuy = [
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1]
];

const PropertyUse = {
    LIVE: 0,
    INVEST: 1
};

const PropertyType = {
    EXISTING: 0,
    NEW: 1,
    LAND: 2
};

// PropertyUse * 3 + PropertyType
const RateMapping = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

var MAX = Number.MAX_VALUE;

const Rate = [
    [   // ACT
        [
            [     -1,  200000, 1.20,     0, 20],
            [ 200000,  300000, 2.20,  2400,  0],
            [ 300000,  500000, 3.40,  4600,  0],
            [ 500000,  750000, 4.32, 11400,  0],
            [ 750000, 1000000, 5.90, 22200,  0],
            [1000000, 1455000, 6.40, 36950,  0],
            [1455000,     MAX, 4.54,     0,  0]
        ]
    ],
    [   // NSW
        [
            [    -1,	14000, 1.25,	 0, 0],
            [ 14000,	31000, 1.50,   175, 0],
            [ 31000,	83000, 1.75,   430, 0],
            [ 83000,   310000, 3.50,  1340, 0],
            [ 310000, 1033000, 4.50,  9285, 0],
            [1033000,	  MAX, 5.50, 41820, 0]
        ]
    ],
    [   // NT
        [
            [    -1,	525000,	    1.5,	0,	0],
            [525000,	3000000,	4.95,	0,	0],
            [30000000,	5000000,	5.75,	0,	0],
            [5000000,	    MAX,	5.95,	0,	0]
        ]
    ],
    [   // QLD
        [
            [   -1,	    5000,	0,	0,	0],
            [5000,	    75000,	1.5,	0,	0],
            [75000, 	540000,	3.5,	1050,	0],
            [540000,	1000000, 4.5,	17325,	0],
            [1000000,	MAX,	5.75,	38025,	0]
        ]
    ],
    [   // SA
        [
            [-1,	    12000,	1,	0,	0],
            [12000,	    30000,	2,	120,	0],
            [30000,	    50000,	3,	480,	0],
            [50000,	    100000,	3.5,	1080,	0],
            [100000,	200000,	4,	2830,	0],
            [200000,	250000,	4.25,	6830,	0],
            [250000,	300000,	4.75,	8955,	0],
            [300000,	500000,	5,	11330,	0],
            [500000,	MAX,	5.5,	21330,	0]
        ]
    ],
    [   // TAS
        [
            [     -1,    3000,    0,     0, 50],
            [   3000,   25000, 1.75,    50,  0],
            [  25000,   75000, 2.25,   435,  0],
            [  75000,  200000, 3.50,  1560,  0],
            [ 200000,  375000, 4.00,  5935,  0],
            [ 375000,  725000, 4.25, 12395,  0],
            [ 725000,     MAX, 4.50, 27810,  0]
        ]
    ],
    [   // VIC
        [   // Primary
            [-1,	    25000,	1.4,	0,	0],
            [25000,     130000,	2.4,	350,	0],
            [130000,	440000,	5.0,	2870,	0],
            [440000,	550000,	6.0,	18370,	0],
        ],
        [   // Investment
            [-1,	    25000,	1.4,	0,	0],
            [25000,     130000,	2.4,	350,	0],
            [130000,	960000,	6.0,	2870,	0],
            [960000,   2000000,	5.5,	0,	0],
            [2000000,	MAX,	6.5,	110000,	0]
        ]
    ],
    [   // WA
        [
            [   -1,	    80000,	1.9,	0,	0],
            [80000,	    100000,	2.85,	1520,	0],
            [100000,	250000,	3.8,	2090,	0],
            [250000,	500000,	4.75,	7790,	0],
            [500000,	MAX,	5.15,	19665,	0]
        ]
    ]
];

function calcStampDuty(propertyUse, state, propertyType, propertyValue, saving, firstHomeBuyer) {
    var rateIndex = RateMapping[state][propertyUse * 3 + propertyType];
    var rates = Rate[state][rateIndex];
    var n = rates.length, i = 0;
    for ( ; i < n && rates[i][1] < propertyValue; i++) {
    }
    var rate = rates[i];
    var duty = rate[3] == 0 ? propertyValue * rate[2] / 100.0 : (propertyValue - rate[0]) * rate[2] / 100.0 + rate[3];
    duty *= FirstBuy[state][+ firstHomeBuyer];
    return Math.max(duty, rate[4]);
}

console.assert(1200 === calcStampDuty(PropertyUse.LIVE, State.ACT, PropertyType.NEW, 100000, 200000, true));
console.assert(3500 === calcStampDuty(PropertyUse.LIVE, State.ACT, PropertyType.EXISTING, 250000, 200000, false));
console.assert(8000 === calcStampDuty(PropertyUse.LIVE, State.ACT, PropertyType.LAND, 400000, 200000, true));
console.assert(15720 === calcStampDuty(PropertyUse.LIVE, State.ACT, PropertyType.NEW, 600000, 200000, false));
console.assert(25150 === calcStampDuty(PropertyUse.LIVE, State.ACT, PropertyType.EXISTING, 800000, 200000, false));
console.assert(36950 === calcStampDuty(PropertyUse.LIVE, State.ACT, PropertyType.LAND, 1000000, 200000, true));
console.assert(68100 === calcStampDuty(PropertyUse.INVEST, State.ACT, PropertyType.EXISTING, 1500000, 200000, false));
console.log(calcStampDuty(PropertyUse.LIVE, State.ACT, PropertyType.EXISTING, 1500000, 200000, true));
