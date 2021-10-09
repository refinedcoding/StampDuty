var data = {
    'stamp-duty-lib': {
        'stampduty': {
            'state': {
                'qld': {
                    'id': 'qld',
                    'mortgageRegistrationFee': 197,
                    'titleSearchFee': 20.45,
                    'landTransferFee': [
                        {
                            'rangeFrom': 0,
                            'rangeTo': 180000,
                            'fee': 197,
                            'extra': 0,
                            'per': 1,
                            'partThereOf': true,
                            'appliedToTotal': false
                        },
                        {
                            'rangeFrom': 180001,
                            'rangeTo': 999999999,
                            'fee': 197,
                            'extra': 37,
                            'per': 10000,
                            'partThereOf': true,
                            'appliedToTotal': false
                        }],
                    'minStampDutyAmt': 0,
                    'foreignBuyer':
                        {'rate': 7, 'name': 'Additional foreign acquirer duty'},
                    'stampDuty': [
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 350000,
                                    'fee': 0,
                                    'extra': 1,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 350001,
                                    'rangeTo': 540000,
                                    'fee': 3500,
                                    'extra': 3.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 540001,
                                    'rangeTo': 1000000,
                                    'fee': 10150,
                                    'extra': 4.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 1000001,
                                    'rangeTo': 999999999,
                                    'fee': 30850,
                                    'extra': 5.75,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                }],
                            'type': 'primary, foreign-primary', 'desc': 'home-transfer-duty-concession'
                        },
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 5000,
                                    'fee': 0,
                                    'extra': 0,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 5001,
                                    'rangeTo': 75000,
                                    'fee': 0,
                                    'extra': 1.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 75001,
                                    'rangeTo': 540000,
                                    'fee': 1050,
                                    'extra': 3.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 540001,
                                    'rangeTo': 1000000,
                                    'fee': 17325,
                                    'extra': 4.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 1000001,
                                    'rangeTo': 999999999,
                                    'fee': 38025,
                                    'extra': 5.75,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                }],
                            'type': 'investment, primary-land, foreign-investment', 'desc': 'home-transfer-duty'
                        }],
                    'concession': [
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 504999.99,
                                    'amount': 8750
                                },
                                {'rangeFrom': 505000, 'rangeTo': 509999.99, 'amount': 7875},
                                {
                                    'rangeFrom': 510000,
                                    'rangeTo': 514999.99,
                                    'amount': 7000
                                },
                                {'rangeFrom': 515000, 'rangeTo': 519999.99, 'amount': 6125},
                                {
                                    'rangeFrom': 520000,
                                    'rangeTo': 524999.99,
                                    'amount': 5250
                                },
                                {'rangeFrom': 525000, 'rangeTo': 529999.99, 'amount': 4375},
                                {
                                    'rangeFrom': 530000,
                                    'rangeTo': 534999.99,
                                    'amount': 3500
                                },
                                {'rangeFrom': 535000, 'rangeTo': 539999.99, 'amount': 2625},
                                {
                                    'rangeFrom': 540000,
                                    'rangeTo': 544999.99,
                                    'amount': 1750
                                },
                                {'rangeFrom': 545000, 'rangeTo': 549999.99, 'amount': 875},
                                {
                                    'rangeFrom': 550000,
                                    'rangeTo': 999999999,
                                    'amount': 0
                                }],
                            'type': 'foreign-primary-existing-fho, foreign-primary-new-fho, primary-existing-fho, primary-new-fho',
                            'desc': 'first-home-concession'
                        },
                        {
                            'threshold': [
                                {'rangeFrom': 0, 'rangeTo': 249999.99, 'amount': 7175},
                                {
                                    'rangeFrom': 250000,
                                    'rangeTo': 259999.99,
                                    'amount': 7175
                                },
                                {'rangeFrom': 260000, 'rangeTo': 269999.99, 'amount': 6700},
                                {
                                    'rangeFrom': 270000,
                                    'rangeTo': 279999.99,
                                    'amount': 6225
                                },
                                {'rangeFrom': 280000, 'rangeTo': 289999.99, 'amount': 5750},
                                {
                                    'rangeFrom': 290000,
                                    'rangeTo': 299999.99,
                                    'amount': 5275
                                },
                                {'rangeFrom': 300000, 'rangeTo': 309999.99, 'amount': 4800},
                                {
                                    'rangeFrom': 310000,
                                    'rangeTo': 319999.99,
                                    'amount': 4325
                                },
                                {'rangeFrom': 320000, 'rangeTo': 329999.99, 'amount': 3850},
                                {
                                    'rangeFrom': 330000,
                                    'rangeTo': 339999.99,
                                    'amount': 3375
                                },
                                {'rangeFrom': 340000, 'rangeTo': 349999.99, 'amount': 2900},
                                {
                                    'rangeFrom': 350000,
                                    'rangeTo': 359999.99,
                                    'amount': 2425
                                },
                                {'rangeFrom': 360000, 'rangeTo': 369999.99, 'amount': 1950},
                                {
                                    'rangeFrom': 370000,
                                    'rangeTo': 379999.99,
                                    'amount': 1475
                                },
                                {'rangeFrom': 380000, 'rangeTo': 389999.99, 'amount': 1000},
                                {
                                    'rangeFrom': 390000,
                                    'rangeTo': 399999.99,
                                    'amount': 525
                                },
                                {'rangeFrom': 400000, 'rangeTo': 999999999, 'amount': 0}],
                            'type': 'foreign-primary-land-fho, primary-land-fho',
                            'desc': 'first-home-vacant-land-concession'
                        }],
                    'grant': [
                        {
                            'threshold': [
                                {'rangeFrom': 0, 'rangeTo': 749999, 'amount': 15000},
                                {
                                    'rangeFrom': 750000,
                                    'rangeTo': 999999999,
                                    'amount': 0
                                }],
                            'type': 'primary-new-fho, primary-land-fho',
                            'name': 'First Home Owners\' Grant',
                            'desc': 'fho-grant'
                        }],
                    'notes': '<p>For more information see the <a target=\'_blank\' rel=\'noopener\' href=\'https://www.qld.gov.au/housing/buying-owning-home/advice-buying-home/transfer-duty\'>Queensland Government transfer duty</a> and <a target=\'_blank\' rel=\'noopener\' href=\'https://www.qld.gov.au/housing/buying-owning-home/financial-help-concessions/qld-first-home-grant\'>Queensland First Home Owners\' Grant</a> websites.</p>',
                    'useConstructionCostInFhog': false
                },
                'vic': {
                    'id': 'vic',
                    'mortgageRegistrationFee': 121.4,
                    'titleSearchFee': 36.2,
                    'landTransferFee': [
                        {
                            'rangeFrom': 0,
                            'rangeTo': 999999999,
                            'fee': 99.9,
                            'extra': 2.34,
                            'per': 1000,
                            'max': 3610,
                            'partThereOf': false,
                            'appliedToTotal': false
                        }],
                    'minStampDutyAmt': 0,
                    'foreignBuyer':
                        {'rate': 8, 'name': 'Foreign purchaser additional duty'},
                    'stampDuty': [
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 25000,
                                    'fee': 0,
                                    'extra': 0.014,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 25001,
                                    'rangeTo': 130000,
                                    'fee': 350,
                                    'extra': 0.024,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 130001,
                                    'rangeTo': 440000,
                                    'fee': 2870,
                                    'extra': 0.05,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 440001,
                                    'rangeTo': 550000,
                                    'fee': 18370,
                                    'extra': 0.06,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 550001,
                                    'rangeTo': 960000,
                                    'fee': 28070,
                                    'extra': 0.06,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 960001,
                                    'rangeTo': 2000000,
                                    'fee': 0,
                                    'extra': 0.055,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'appliedToTotal': true,
                                    'roundPrecision': 2
                                },
                                {
                                    'rangeFrom': 2000001,
                                    'rangeTo': 999999999,
                                    'fee': 110000,
                                    'extra': 0.065,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                }],
                            'type': 'primary, foreign-primary', 'desc': 'ppr-rates'
                        },
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 25000,
                                    'fee': 0,
                                    'extra': 0.014,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 25001,
                                    'rangeTo': 130000,
                                    'fee': 350,
                                    'extra': 0.024,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 130001,
                                    'rangeTo': 960000,
                                    'fee': 2870,
                                    'extra': 0.06,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 960001,
                                    'rangeTo': 2000000,
                                    'fee': 0,
                                    'extra': 0.055,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'appliedToTotal': true,
                                    'roundPrecision': 2
                                },
                                {
                                    'rangeFrom': 2000001,
                                    'rangeTo': 999999999,
                                    'fee': 110000,
                                    'extra': 0.065,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                }],
                            'type': 'investment, foreign-investment', 'desc': 'non-ppr-rates'
                        },
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 600000,
                                    'fee': 0,
                                    'extra': 0,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 600001,
                                    'rangeTo': 750000,
                                    'fee': 31070,
                                    'extra': 0.06,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'proRata': 'total',
                                    'roundPrecision': 0,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 750001,
                                    'rangeTo': 960000,
                                    'fee': 40070,
                                    'extra': 0.06,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 960001,
                                    'rangeTo': 2000000,
                                    'fee': 0,
                                    'extra': 0.055,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'appliedToTotal': true,
                                    'roundPrecision': 2
                                },
                                {
                                    'rangeFrom': 2000001,
                                    'rangeTo': 999999999,
                                    'fee': 110000,
                                    'extra': 0.065,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                }],
                            'type': 'primary-existing-fho, primary-new-fho, primary-land-fho',
                            'desc': 'fho-duty-reduction'
                        }],
                    'concession': [
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 1000000,
                                    'amount': 0,
                                    'percentage': 0.5,
                                    'max': 0
                                }],
                            'type': 'primary-new-melbourne, investment-new-melbourne, foreign-primary-new-melbourne, foreign-investment-new-melbourne',
                            'desc': 'melbourne-city-land-transfer-duty-waiver'
                        }],
                    'grant': [
                        {
                            'threshold': [
                                {'rangeFrom': 0, 'rangeTo': 750000, 'amount': 10000},
                                {
                                    'rangeFrom': 750001,
                                    'rangeTo': 999999999,
                                    'amount': 0
                                }],
                            'type': 'primary-new-fho, primary-land-fho',
                            'name': 'First Home Owner Grant',
                            'desc': 'fhog'
                        }],
                    'notes': '<p>A land transfer duty waiver of 50% may be available for new residential properties sold within the City of Melbourne local government area with a dutiable value of up to $1 million for contracts entered into between 1 July 2021 and 30 June 2022.</p><p>For more information see the State Revenue Office Victoria <a target=\'_blank\' rel=\'noopener\' href=\'https://www.sro.vic.gov.au/land-transfer-duty\'>Land Transfer Duty</a> website.</p>',
                    'useConstructionCostInFhog': false
                },
                'nsw': {
                    'id': 'nsw',
                    'mortgageRegistrationFee': 147.7,
                    'titleSearchFee': 15.1,
                    'landTransferFee': [
                        {
                            'rangeFrom': 0,
                            'rangeTo': 999999999,
                            'fee': 147.7,
                            'extra': 0,
                            'per': 0,
                            'max': -1,
                            'partThereOf': true,
                            'roundPrecision': 2
                        }],
                    'minStampDutyAmt': 10,
                    'useConstructionCostInFhog': true,
                    'foreignBuyer':
                        {'rate': 8, 'name': 'Surcharge purchaser duty'},
                    'stampDuty': [
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 14000,
                                    'fee': 0,
                                    'extra': 1.25,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 14001,
                                    'rangeTo': 32000,
                                    'fee': 175,
                                    'extra': 1.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 32001,
                                    'rangeTo': 85000,
                                    'fee': 445,
                                    'extra': 1.75,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 85001,
                                    'rangeTo': 319000,
                                    'fee': 1372,
                                    'extra': 3.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 319001,
                                    'rangeTo': 1064000,
                                    'fee': 9562,
                                    'extra': 4.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 1064001,
                                    'rangeTo': 3194000,
                                    'fee': 43087,
                                    'extra': 5.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 3194001,
                                    'rangeTo': 999999999,
                                    'fee': 160237,
                                    'extra': 7,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                }],
                            'type': 'primary, investment, foreign-primary, foreign-investment',
                            'desc': 'land-transfer-rates'
                        },
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 650000,
                                    'fee': 0,
                                    'extra': 0,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 650001,
                                    'rangeTo': 800000,
                                    'fee': 24457,
                                    'extra': 4.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'proRata': 'previousBandDiscount',
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 800001,
                                    'rangeTo': 1064000,
                                    'fee': 31207,
                                    'extra': 4.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 1064001,
                                    'rangeTo': 3194000,
                                    'fee': 43087,
                                    'extra': 5.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 3194001,
                                    'rangeTo': 999999999,
                                    'fee': 160237,
                                    'extra': 7,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                }],
                            'type': 'primary-new-fho, primary-existing-fho',
                            'desc': 'first-home-buyers-assistance'
                        },
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 350000,
                                    'fee': 0,
                                    'extra': 0,
                                    'per': 1,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 350001,
                                    'rangeTo': 450000,
                                    'fee': 10957,
                                    'extra': 4.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'proRata': 'previousBandDiscount',
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 450001,
                                    'rangeTo': 1064000,
                                    'fee': 15457,
                                    'extra': 4.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 1064001,
                                    'rangeTo': 3194000,
                                    'fee': 43087,
                                    'extra': 5.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 3194001,
                                    'rangeTo': 999999999,
                                    'fee': 160237,
                                    'extra': 7,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                }],
                            'type': 'primary-land-fho', 'desc': 'first-home-land-concession'
                        }],
                    'grant': [
                        {
                            'threshold': [
                                {'rangeFrom': 0, 'rangeTo': 600000, 'amount': 10000},
                                {
                                    'rangeFrom': 600001,
                                    'rangeTo': 999999999,
                                    'amount': 0
                                }],
                            'type': 'primary-new-fho', 'name': 'First Home Owner Grant', 'desc': 'fhog-new'
                        },
                        {
                            'threshold': [
                                {'rangeFrom': 0, 'rangeTo': 750000, 'amount': 10000},
                                {
                                    'rangeFrom': 750001,
                                    'rangeTo': 999999999,
                                    'amount': 0
                                }],
                            'type': 'primary-land-fho', 'name': 'First Home Owner Grant', 'desc': 'fhog-land'
                        }],
                    'notes': '<p>For more information see the <a target=\'_blank\' rel=\'noopener\' href=\'https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/transfer-duty\'>Revenue NSW transfer duty website</a>.</p>'
                },
                'act': {
                    'id': 'act',
                    'mortgageRegistrationFee': 155,
                    'titleSearchFee': 31,
                    'landTransferFee': [
                        {
                            'rangeFrom': 0,
                            'rangeTo': 999999999,
                            'fee': 416,
                            'extra': 0,
                            'per': 0,
                            'max': -1,
                            'partThereOf': true,
                            'roundPrecision': 2
                        }],
                    'minStampDutyAmt': 0,
                    'stampDuty': [
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 200000,
                                    'fee': 0,
                                    'extra': 1.2,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 200001,
                                    'rangeTo': 300000,
                                    'fee': 2400,
                                    'extra': 2.2,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 300001,
                                    'rangeTo': 500000,
                                    'fee': 4600,
                                    'extra': 3.4,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 500001,
                                    'rangeTo': 750000,
                                    'fee': 11400,
                                    'extra': 4.32,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 750001,
                                    'rangeTo': 1000000,
                                    'fee': 22200,
                                    'extra': 5.9,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 1000001,
                                    'rangeTo': 1455000,
                                    'fee': 36950,
                                    'extra': 6.4,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 1455001,
                                    'rangeTo': 999999999,
                                    'fee': 0,
                                    'extra': 4.54,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'appliedToTotal': true,
                                    'roundPrecision': 2
                                }],
                            'type': 'investment', 'desc': 'non-commercial-transfer-duty'
                        },
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 200000,
                                    'fee': 0,
                                    'extra': 0.68,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 200001,
                                    'rangeTo': 300000,
                                    'fee': 1360,
                                    'extra': 2.2,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 300001,
                                    'rangeTo': 500000,
                                    'fee': 3560,
                                    'extra': 3.4,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 500001,
                                    'rangeTo': 750000,
                                    'fee': 10360,
                                    'extra': 4.32,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 750001,
                                    'rangeTo': 1000000,
                                    'fee': 21160,
                                    'extra': 5.9,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 1000001,
                                    'rangeTo': 1455000,
                                    'fee': 35910,
                                    'extra': 6.4,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 1455001,
                                    'rangeTo': 999999999,
                                    'fee': 0,
                                    'extra': 4.54,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'appliedToTotal': true,
                                    'roundPrecision': 2
                                }],
                            'type': 'primary', 'desc': 'non-commercial-transfer-duty-owner-occupier'
                        },
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 1000000,
                                    'fee': 0,
                                    'extra': 0,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 1000001,
                                    'rangeTo': 1455000,
                                    'fee': 0,
                                    'extra': 6.4,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 1455001,
                                    'rangeTo': 999999999,
                                    'fee': -35910,
                                    'extra': 4.54,
                                    'per': 100,
                                    'max': -1,
                                    'appliedToTotal': true,
                                    'roundPrecision': 2,
                                    'partThereOf': false
                                }],
                            'type': 'primary-new-fho, primary-land-fho, primary-existing-fho',
                            'desc': 'home-buyer-concession-scheme'
                        }],
                    'notes': '<p>Eligibility for the <a target=\'_blank\' rel=\'noopener\' href=\'https://www.revenue.act.gov.au/home-buyer-assistance/home-buyer-concession-scheme\'>home buyer concession scheme</a> is determined by income, the number of dependent children and property ownership in the last 2 years. This calculator assumes all \'First Home Buyers\' are eligible for the home buyer concession scheme.</p><p>For more information see the <a target=\'_blank\' rel=\'noopener\' href=\'https://www.revenue.act.gov.au/duties/conveyance-duty\'>ACT Revenue Office website</a>.</p>',
                    'useConstructionCostInFhog': false
                },
                'sa': {
                    'id': 'sa',
                    'mortgageRegistrationFee': 176,
                    'titleSearchFee': 31.25,
                    'landTransferFee': [
                        {
                            'rangeFrom': 0,
                            'rangeTo': 5000,
                            'fee': 176,
                            'extra': 0,
                            'per': 1,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 5001,
                            'rangeTo': 20000,
                            'fee': 196,
                            'extra': 0,
                            'per': 1,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 20001,
                            'rangeTo': 40000,
                            'fee': 216,
                            'extra': 0,
                            'per': 1,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 40001,
                            'rangeTo': 50000,
                            'fee': 303,
                            'extra': 0,
                            'per': 1,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 50001,
                            'rangeTo': 999999999,
                            'fee': 303,
                            'extra': 89.5,
                            'per': 10000,
                            'partThereOf': true
                        }],
                    'minStampDutyAmt': 0,
                    'useConstructionCostInFhog': true,
                    'foreignBuyer':
                        {'rate': 7, 'name': 'Foreign ownership surcharge'},
                    'stampDuty': [
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 12000,
                                    'fee': 0,
                                    'extra': 1,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 12001,
                                    'rangeTo': 30000,
                                    'fee': 120,
                                    'extra': 2,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 30001,
                                    'rangeTo': 50000,
                                    'fee': 480,
                                    'extra': 3,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 50001,
                                    'rangeTo': 100000,
                                    'fee': 1080,
                                    'extra': 3.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 100001,
                                    'rangeTo': 200000,
                                    'fee': 2830,
                                    'extra': 4,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 200001,
                                    'rangeTo': 250000,
                                    'fee': 6830,
                                    'extra': 4.25,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 250001,
                                    'rangeTo': 300000,
                                    'fee': 8955,
                                    'extra': 4.75,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 300001,
                                    'rangeTo': 500000,
                                    'fee': 11330,
                                    'extra': 5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 500001,
                                    'rangeTo': 999999999,
                                    'fee': 21330,
                                    'extra': 5.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                }],
                            'desc': 'rate-of-stamp-duty'
                        }],
                    'grant': [
                        {
                            'threshold': [
                                {'rangeFrom': 0, 'rangeTo': 575000, 'amount': 15000},
                                {
                                    'rangeFrom': 575001,
                                    'rangeTo': 999999999,
                                    'amount': 0
                                }],
                            'type': 'primary-new-fho, primary-land-fho',
                            'name': 'First Home Owner Grant',
                            'desc': 'fhog'
                        }],
                    'notes': '<p>For more information see the <a target=\'_blank\' rel=\'noopener\' href=\'https://www.revenuesa.sa.gov.au/taxes-and-duties/stamp-duties/real-property-land\'>Revenue SA website</a>. </p>'
                },
                'tas': {
                    'id': 'tas',
                    'mortgageRegistrationFee': 141.07,
                    'titleSearchFee': 33,
                    'landTransferFee': [
                        {
                            'rangeFrom': 0,
                            'rangeTo': 999999999,
                            'fee': 216.15,
                            'extra': 0,
                            'per': 0,
                            'max': -1,
                            'partThereOf': true,
                            'roundPrecision': 2
                        }],
                    'foreignBuyer':
                        {'rate': 8, 'name': 'Foreign Investor Duty Surcharge (FIDS)'},
                    'stampDuty': [
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 3000,
                                    'fee': 50,
                                    'extra': 0,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 3001,
                                    'rangeTo': 25000,
                                    'fee': 50,
                                    'extra': 1.75,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 25001,
                                    'rangeTo': 75000,
                                    'fee': 435,
                                    'extra': 2.25,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 75001,
                                    'rangeTo': 200000,
                                    'fee': 1560,
                                    'extra': 3.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 200001,
                                    'rangeTo': 375000,
                                    'fee': 5935,
                                    'extra': 4,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 375001,
                                    'rangeTo': 725000,
                                    'fee': 12935,
                                    'extra': 4.25,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 725001,
                                    'rangeTo': 999999999,
                                    'fee': 27810,
                                    'extra': 4.5,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                }],
                            'desc': 'rates-of-duty'
                        }],
                    'concession': [
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 500000,
                                    'amount': 0,
                                    'percentage': 0.5,
                                    'max': 0
                                }],
                            'type': 'primary-existing-fho', 'desc': 'fho-duty-concession'
                        }],
                    'grant': [
                        {
                            'threshold': [
                                {'rangeFrom': 0, 'rangeTo': 999999999, 'amount': 30000}],
                            'type': 'primary-new-fho, primary-land-fho',
                            'name': 'First Home Owner Grant',
                            'desc': 'fhog'
                        }],
                    'notes': '<p>For more information see the <a target=\'_blank\' rel=\'noopener\' href=\'https://www.sro.tas.gov.au/property-transfer-duties\'>State Revenue office of Tasmania website</a>.</p>',
                    'useConstructionCostInFhog': false
                },
                'nt': {
                    'id': 'nt',
                    'mortgageRegistrationFee': 152,
                    'titleSearchFee': 35,
                    'landTransferFee': [
                        {
                            'rangeFrom': 0,
                            'rangeTo': 999999999,
                            'fee': 152,
                            'extra': 0,
                            'per': 0,
                            'max': -1,
                            'partThereOf': true,
                            'roundPrecision': 2
                        }],
                    'stampDuty': [
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 525000,
                                    'fee': 0,
                                    'extra': 0,
                                    'per': 0,
                                    'constant': 0.06571441,
                                    'multiplier': 15,
                                    'divisor': 1000,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'partThereOf': false,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 525001,
                                    'rangeTo': 2999999.99,
                                    'fee': 0,
                                    'extra': 4.95,
                                    'per': 100,
                                    'appliedToTotal': true,
                                    'constant': -1,
                                    'multiplier': -1,
                                    'divisor': -1,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'partThereOf': false
                                },
                                {
                                    'rangeFrom': 3000000,
                                    'rangeTo': 4999999.99,
                                    'fee': 0,
                                    'extra': 5.75,
                                    'per': 100,
                                    'appliedToTotal': true,
                                    'constant': -1,
                                    'multiplier': -1,
                                    'divisor': -1,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'partThereOf': false
                                },
                                {
                                    'rangeFrom': 5000000,
                                    'rangeTo': 999999999,
                                    'fee': 0,
                                    'extra': 5.95,
                                    'per': 100,
                                    'appliedToTotal': true,
                                    'constant': -1,
                                    'multiplier': -1,
                                    'divisor': -1,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'partThereOf': false
                                }],
                            'desc': 'rates-of-duty'
                        }],
                    'grant': [
                        {
                            'threshold': [
                                {'rangeFrom': 0, 'rangeTo': 999999999, 'amount': 10000}],
                            'type': 'primary-new-fho, primary-land-fho',
                            'name': 'First Home Owner Grant',
                            'desc': 'fhog'
                        }],
                    'notes': '<p>For more information see the <a target=\'_blank\' rel=\'noopener\' href=\'https://nt.gov.au/property\'>Northern Territory housing, property and land website</a>.</p>',
                    'useConstructionCostInFhog': false
                },
                'wa': {
                    'id': 'wa',
                    'mortgageRegistrationFee': 181.3,
                    'titleSearchFee': 27.2,
                    'landTransferFee': [
                        {
                            'rangeFrom': 0,
                            'rangeTo': 85000,
                            'fee': 181.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 85001,
                            'rangeTo': 120000,
                            'fee': 191.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 120001,
                            'rangeTo': 200000,
                            'fee': 211.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 200001,
                            'rangeTo': 300000,
                            'fee': 231.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 300001,
                            'rangeTo': 400000,
                            'fee': 251.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 400001,
                            'rangeTo': 500000,
                            'fee': 271.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 500001,
                            'rangeTo': 600000,
                            'fee': 291.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 600001,
                            'rangeTo': 700000,
                            'fee': 311.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 700001,
                            'rangeTo': 800000,
                            'fee': 331.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 800001,
                            'rangeTo': 900000,
                            'fee': 351.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 900001,
                            'rangeTo': 1000000,
                            'fee': 371.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 1000001,
                            'rangeTo': 1100000,
                            'fee': 391.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 1100001,
                            'rangeTo': 1200000,
                            'fee': 411.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 1200001,
                            'rangeTo': 1300000,
                            'fee': 431.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 1300001,
                            'rangeTo': 1400000,
                            'fee': 451.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 1400001,
                            'rangeTo': 1500000,
                            'fee': 471.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 1500001,
                            'rangeTo': 1600000,
                            'fee': 491.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 1600001,
                            'rangeTo': 1700000,
                            'fee': 511.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 1700001,
                            'rangeTo': 1800000,
                            'fee': 531.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 1800001,
                            'rangeTo': 1900000,
                            'fee': 551.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 1900001,
                            'rangeTo': 2000000,
                            'fee': 571.3,
                            'extra': 0,
                            'per': 0,
                            'partThereOf': true
                        },
                        {
                            'rangeFrom': 2000001,
                            'rangeTo': 999999999,
                            'fee': 571.3,
                            'extra': 20,
                            'per': 100000,
                            'partThereOf': true
                        }],
                    'foreignBuyer':
                        {'rate': 7, 'name': 'Foreign Buyers Duty'},
                    'stampDuty': [
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 120000,
                                    'fee': 0,
                                    'extra': 1.9,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 120001,
                                    'rangeTo': 150000,
                                    'fee': 2280,
                                    'extra': 2.85,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 150001,
                                    'rangeTo': 360000,
                                    'fee': 3135,
                                    'extra': 3.8,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 360001,
                                    'rangeTo': 725000,
                                    'fee': 11115,
                                    'extra': 4.75,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 725001,
                                    'rangeTo': 999999999,
                                    'fee': 28453,
                                    'extra': 5.15,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                }],
                            'type': 'primary, investment', 'desc': 'residential-rate-of-duty'
                        },
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 430000,
                                    'fee': 0,
                                    'extra': 0,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 430001,
                                    'rangeTo': 530000,
                                    'fee': 0,
                                    'extra': 19.19,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 530001,
                                    'rangeTo': 725000,
                                    'fee': 19190,
                                    'extra': 4.75,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 725001,
                                    'rangeTo': 999999999,
                                    'fee': 28453,
                                    'extra': 5.15,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                }],
                            'type': 'primary-existing-fho, primary-new-fho', 'desc': 'first-home-concession'
                        },
                        {
                            'threshold': [
                                {
                                    'rangeFrom': 0,
                                    'rangeTo': 300000,
                                    'fee': 0,
                                    'extra': 0,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 300001,
                                    'rangeTo': 400000,
                                    'fee': 0,
                                    'extra': 13.01,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 400001,
                                    'rangeTo': 725000,
                                    'fee': 13015,
                                    'extra': 4.75,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                },
                                {
                                    'rangeFrom': 725001,
                                    'rangeTo': 999999999,
                                    'fee': 28453,
                                    'extra': 5.15,
                                    'per': 100,
                                    'partThereOf': true,
                                    'max': -1,
                                    'roundPrecision': 2,
                                    'appliedToTotal': false
                                }],
                            'type': 'primary-land-fho', 'desc': 'first-home-vacant-land-concession'
                        }],
                    'grant': [
                        {
                            'threshold': [
                                {'rangeFrom': 0, 'rangeTo': 750000, 'amount': 10000},
                                {
                                    'rangeFrom': 750001,
                                    'rangeTo': 999999999,
                                    'amount': 0
                                }],
                            'type': 'primary-new-fho, primary-land-fho',
                            'name': 'First Home Owner Grant',
                            'desc': 'fhog'
                        }],
                    'notes': '<p>This calculator assumes all properties are South of the 26th parallel.</p><p>For more information see the Western Australia <a target=\'_blank\' rel=\'noopener\' href=\'https://www.wa.gov.au/organisation/department-of-finance/transfer-duty-assessment\'>Department of Finance transfer duty assessment website</a>.</p>',
                    'useConstructionCostInFhog': false
                }
            }
        },
        'stateData': {
            'vic': {
                'text': {
                    'isRegional': 'Do you live in regional Victoria?',
                    'regionalAreasTrigger': '<a href=\'http://www.sro.vic.gov.au/regional\' target=\'_blank\'>Which areas are regional?</a>'
                },
                'regionalAreas': ['Alpine Shire Council']
            }
        },
        'insuranceStampDuty': [
            {'id': 'nsw', 'rate': 0},
            {'id': 'act', 'rate': 0},
            {'id': 'vic', 'rate': 0.1},
            {'id': 'nt', 'rate': 0.1},
            {'id': 'wa', 'rate': 0.1},
            {'id': 'sa', 'rate': 0.11},
            {'id': 'tas', 'rate': 0.1},
            {'id': 'qld', 'rate': 0.09}],
        'governmentFeesMortgageDischarge': [
            {'id': 'nsw', 'fee': 146.4},
            {'id': 'qld', 'fee': 195},
            {'id': 'vic', 'fee': 119.7},
            {'id': 'act', 'fee': 153},
            {'id': 'sa', 'fee': 173},
            {'id': 'nt', 'fee': 149},
            {'id': 'wa', 'fee': 178.2},
            {'id': 'tas', 'fee': 171.72}]
    },
    'wiwo-shared-lib': {
        'PREFER_SHARED_CONTENT': true,
        'callToActionLocation': 'bottom',
        'disclaimerEnabled': true,
        'locale': {
            'currency': '$',
            'interestSuffix': '$0 p.a.',
            'percentInputSuffix': ' p.a.',
            'plurals': {
                'term': {
                    'year':
                        {'1': '$0 year', 'other': '$0 years', 'separator': ', '},
                    'month':
                        {'1': '$0 month', 'other': '$0 months'}
                }
            }
        },
        'appUtils':
            {'share': 'Share or save your results', 'information': 'About this calculator', 'print': 'Print'},
        'dialog':
            {'ok': 'Close'},
        'accessibility':
            {'tabToSlider': true},
        'callToActionEnabled': false,
        'products':
            {'productGroupsEnabled': false, 'hideProductGroups': false},
        'admin':
            {
                'diagnostics':
                    {'enabled': false, 'trace': false}
            }
    },
    'customer-collector': {
        'defaults':
            {'contactNumberType': 'mobile'},
        'parameters': {
            'contactNumberTypes': [
                {'id': 'mobile', 'label': 'Mobile'},
                {'id': 'home', 'label': 'Home'}],
            'contactTimeOptions': [
                {'id': 'morning', 'label': 'Morning between 9 and 11'},
                {
                    'id': 'noon',
                    'label': '11:30am to early afternoon'
                },
                {'id': 'afternoon', 'label': 'Afternoon up until 5pm'},
                {
                    'id': 'evening',
                    'label': 'After 5 up to 9pm'
                },
                {'id': 'emailOnly', 'label': 'Only by email'},
                {
                    'id': 'anytime',
                    'label': 'Anytime of day by phone is fine'
                }],
            'integrations': [
                {
                    'id': 'crm',
                    'collectorType': 'crm',
                    'requestForm': 'crm',
                    'isDefault': true,
                    'viewData': [
                        {
                            'text': {
                                'title': 'Let our experts help you',
                                'leader': 'Securely send this calculator\'s information through and we\'ll be able to quickly help you to the financial outcomes you want.',
                                'sendSuccess': {
                                    'title': 'Message has been sent',
                                    'message': '<p>Thanks! We\'ll be in contact.</p><p>You can save a copy of this calculator or close it now.</p>'
                                },
                                'sendError': {
                                    'title': 'Message couldn\'t be sent',
                                    'message': '<p>Oops.. something has gone wrong.</p><p>We don\'t store your data so keep a copy and try send it later or contact us now.</p>'
                                }
                            },
                            'formValidation': {
                                'required': ['firstName', 'lastName', 'email', 'contactNumber', 'contactNumberType', 'contactTime'],
                                'hidden': ['message']
                            }
                        }]
                },
                {
                    'id': 'email',
                    'collectorType': 'email',
                    'requestForm': 'email',
                    'viewData': [
                        {
                            'text': {
                                'title': 'Email',
                                'leader': 'Send a copy of your data to yourself or a friend.',
                                'sendSuccess': {
                                    'title': 'Email has been sent',
                                    'message': 'Thanks! We\'ve sent a link with all of your data to your nominated email address.'
                                },
                                'sendError': {
                                    'title': 'Email couldn\'t be sent',
                                    'message': 'Oops.. something has gone wrong. Please try again later.'
                                }
                            },
                            'formValidation': {
                                'required': ['firstName', 'email'],
                                'optional': ['lastName', 'message'],
                                'hidden': ['contactNumber', 'contactNumberType', 'contactTime']
                            }
                        }],
                    'isDefault': false
                },
                {
                    'id': 'emailUser',
                    'collectorType': 'emailUser',
                    'requestForm': 'email',
                    'extendsType': 'email',
                    'isDefault': false
                }]
        },
        'text': {
            'controls': {
                'firstName': 'First name',
                'lastName': 'Last name',
                'email': 'Email',
                'email2': 'Send to email address',
                'postcode': 'Postcode',
                'dealership': 'Quoting Dalership (if applicable)',
                'dealershipContact': 'Dealership Contact (if applicable)',
                'contactNumber': 'Contact number',
                'contactNumberType': 'Contact type',
                'message': 'Message',
                'contactTime': 'When is the best time for us to contact you',
                'sendInProgress': 'Sending your request...',
                'submit': 'Submit',
                'cancel': 'Cancel',
                'finish': 'OK'
            },
            'shareLink': {
                'urlType': 'auto',
                'modalContent': '<h4 class=\'lead\'>Copy this link to share your results.</h4>',
                'modalContentFailure': '<h4>Sorry, we couldn\'t generate a share URL - please try again later.</h4>',
                'shareLinkLabel': 'Copy',
                'closeLabel': 'Close'
            },
            'validation': {
                'firstName': 'Required',
                'lastName': 'Required',
                'email': 'Required',
                'contactNumber': 'Required',
                'contactNumberType': 'Required',
                'dealership': 'Required',
                'dealershipContact': 'Required',
                'contactTime': 'Required',
                'message': 'Required',
                'postcode': 'Enter a four-digit postcode'
            }
        },
        'integration':
            {'logOnly': true}
    },
    'wiwo-stampduty': {
        'defaults': {
            'teaser':
                {'expanded': true},
            'sdStateModel': {
                'dutyModels': [
                    {
                        'inputModel': {
                            'propertyState': 'nsw',
                            'propertyPurpose': 'primary',
                            'firstHomeType': 'fho-existing',
                            'firstHomeBuyer': 'no',
                            'purchasePrice': 500000,
                            'constructionCost': 0,
                            'isRegional': 'no',
                            'foreignBuyer': 'no'
                        }
                    }]
            }
        },
        'parameters': {
            'inputConstraints': {
                'allowConstructionCost': true,
                'purchasePrice': {
                    'constraints': [
                        {'id': 'min', 'value': 10000, 'step': 1000},
                        {
                            'id': '5%',
                            'value': 100000,
                            'step': 5000
                        },
                        {'id': '75%', 'value': 1500000, 'step': 100000},
                        {'id': 'max', 'value': 10000000, 'step': -1}]
                },
                'allowForeignBuyer': false
            },
            'yesNoBooleanType': [
                {'id': 'yes', 'label': 'Yes', 'value': true},
                {
                    'id': 'no',
                    'label': 'No',
                    'value': false
                }],
            'stateTerritoryType': [
                {'id': 'nsw', 'label': 'New South Wales', 'shortLabel': 'NSW'},
                {
                    'id': 'qld',
                    'label': 'Queensland',
                    'shortLabel': 'QLD'
                },
                {'id': 'vic', 'label': 'Victoria', 'shortLabel': 'VIC'},
                {
                    'id': 'sa',
                    'label': 'South Australia',
                    'shortLabel': 'SA'
                },
                {'id': 'wa', 'label': 'Western Australia', 'shortLabel': 'WA'},
                {
                    'id': 'nt',
                    'label': 'Northern Territory',
                    'shortLabel': 'NT'
                },
                {'id': 'act', 'label': 'Australian Capital Territory', 'shortLabel': 'ACT'},
                {
                    'id': 'tas',
                    'label': 'Tasmania',
                    'shortLabel': 'TAS'
                }],
            'propertyPurposeType': [
                {'id': 'primary', 'label': 'To live in'},
                {
                    'id': 'investment',
                    'label': 'As an investment'
                }],
            'firstHomeType': [
                {'id': 'fho-existing', 'label': 'Existing home'},
                {
                    'id': 'fho-new',
                    'label': 'New home'
                },
                {'id': 'fho-land', 'label': 'Vacant land'}]
        },
        'text': {
            'assumptions':
                {'content': '<h3>Assumptions</h3><p>This Stamp Duty calculator estimates eligibility for government grants and concessions based on the your status as a first home buyer and the type of property you are purchasing. It is assumed that all the eligibility requirements are satisfied in order to receive the grant or concession. </p> You should contact the Office of State Revenue in your state or territory to confirm your eligibility. </p><p> Calculator by <a href=\'http://www.widgetworks.com.au\' target=\'_blank\'>Widget Works</a></p>'},
            'disclaimer': {
                'content': '<h3>Disclaimer</h3><p>The results from this calculator should be used as an indication only. The results do not represent either quotes or pre-qualifications for any product. Eligibility for Government grants are subject to specific conditions relevant in each state or territory. These specific conditions are not catered for in this calculator. Information such as default figures and charges used in the assumptions are subject to change.</p>',
                'showDisclaimer': false
            },
            'dialog':
                {'ok': 'Close'},
            'controls': {
                'buying': {
                    'labels': {
                        'propertyState': 'State or territory',
                        'propertyPurpose': 'Purpose',
                        'firstHomeBuyer': 'Are you a First Home Buyer?',
                        'foreignBuyer': 'Are you a Foreign Purchaser?',
                        'firstHomeType': 'Property type',
                        'purchasePrice': 'Property value',
                        'constructionCost': 'How much will building cost?',
                        'govtFeesSubtotal': 'Fees & charges',
                        'grantTitle': 'You may be eligible for a',
                        'mortgageRegistrationFee': 'Mortgage registration fee',
                        'transferFee': 'Transfer fee',
                        'titleSearchFee': 'Title search fee',
                        'stampDuty': 'Stamp duty'
                    }
                },
                'appUtils':
                    {
                        'labels':
                            {'print': 'Print', 'information': 'Information'}
                    },
                'teaserLead': 'How much is stamp duty on my next house?',
                'teaserAction': 'Show me',
                'currency': '$',
                'percentage': '%',
                'callToAction':
                    {'enabled': false}
            },
            'tooltips': [
                {
                    'id': 'propertyState',
                    'tooltip': 'Enter the state or territory you are purchasing the property in.'
                },
                {
                    'id': 'propertyPurpose',
                    'tooltip': 'Enter if you are planning to live in the property (primary residence) or have it as an investment.'
                },
                {
                    'id': 'firstHomeBuyer',
                    'tooltip': 'Are you eligible for First Home Buyer grants and/or concessions? There are specific eligibility rules for each state which will also need to be reviewed.'
                },
                {
                    'id': 'firstHomeBuyerResult',
                    'tooltip': 'You should contact the Office of State Revenue in your state or territory to confirm your eligibility.'
                },
                {
                    'id': 'firstHomeType',
                    'tooltip': 'Are you buying an existing home, a newly established home or purchasing vacant land with the intention of building a home?'
                },
                {'id': 'purchasePrice', 'tooltip': 'Enter the purchase price of the property.'}]
        },
        'admin':
            {
                'diagnostics':
                    {'enabled': true, 'segmentID': '14o2B8gOdmtl9v6Wzg22mArbG0JzES5Q', 'trace': false}
            }
    },
    'stamp-duty-content': {
        'notes': {
            'showNotes': true,
            'state': {
                'qld': '{{ data.stampDutyResult.notes }}',
                'vic': '{{ data.stampDutyResult.notes }}',
                'nsw': '{{ data.stampDutyResult.notes }}',
                'act': '{{ data.stampDutyResult.notes }}',
                'sa': '{{ data.stampDutyResult.notes }}',
                'tas': '{{ data.stampDutyResult.notes }}',
                'nt': '{{ data.stampDutyResult.notes }}',
                'wa': '{{ data.stampDutyResult.notes }}'
            }
        }
    }
};

var t = {
    'inputModel': {
        'homeType': 'existing',
        'propertyState': 'qld',
        'propertyPurpose': 'primary',
        'firstHomeBuyer': false,
        'purchasePrice': 10000,
        'constructionCost': 0,
        'showConstructionCost': false,
        'isRegional': false,
        'showIsRegional': false,
        'isMelbourne': false,
        'showIsMelbourne': false,
        'foreignBuyer': false,
        'showForeignBuyer': false
    },
    'stampDutyResult': {
        'stateId': 'qld',
        'mortgageRegistrationFee': 197,
        'titleSearchFee': 20.45,
        'landTransferFee': 197,
        'minStampDutyAmt': 0,
        'stampDuty': 100,
        'grant': 0,
        'notes': '<p>For more information see the <a target=\'_blank\' rel=\'noopener\' href=\'https://www.qld.gov.au/housing/buying-owning-home/advice-buying-home/transfer-duty\'>Queensland Government transfer duty</a> and <a target=\'_blank\' rel=\'noopener\' href=\'https://www.qld.gov.au/housing/buying-owning-home/financial-help-concessions/qld-first-home-grant\'>Queensland First Home Owners\' Grant</a> websites.</p>',
        'extraCharges': [],
        'totalExtraCharges': 0,
        'totalGovtFees': 514.45,
        'stampDutyExConcession': 100,
        'concession': 0,
        '_concessionAmountRaw': 0,
        '_stampDutyDesc': 'home-transfer-duty-concession',
        '_concessionDesc': '',
        '_grantDesc': '',
        '_purchasePriceData': {
            'purchasePrice': 10000,
            'concessionPrice': 10000,
            'grantPrice': 10000,
            'totalPurchasePrice': 10000
        }
    },
    'notesModel': {
        'id': 'qld',
        'showNotes': true,
        'content': '<p>For more information see the <a target=\'_blank\' rel=\'noopener\' href=\'https://www.qld.gov.au/housing/buying-owning-home/advice-buying-home/transfer-duty\'>Queensland Government transfer duty</a> and <a target=\'_blank\' rel=\'noopener\' href=\'https://www.qld.gov.au/housing/buying-owning-home/financial-help-concessions/qld-first-home-grant\'>Queensland First Home Owners\' Grant</a> websites.</p>'
    },
    'notesTemplate': {
        'showNotes': true,
        'state': {
            'qld': '{{ data.stampDutyResult.notes }}',
            'vic': '{{ data.stampDutyResult.notes }}',
            'nsw': '{{ data.stampDutyResult.notes }}',
            'act': '{{ data.stampDutyResult.notes }}',
            'sa': '{{ data.stampDutyResult.notes }}',
            'tas': '{{ data.stampDutyResult.notes }}',
            'nt': '{{ data.stampDutyResult.notes }}',
            'wa': '{{ data.stampDutyResult.notes }}'
        }
    },
    '$$hashKey': 'object:13'
};

var determineEffPurposeId = function (t, e) {
    var n = t;
    return e !== 'none' && (n = [n, e.split('-').slice(-1)[0]].join('-')), n;
};

var _getUnique = function (t) {
    for (var e = {}, n = [], i = 0, r = t.length; i < r; i++) {
        var o = t[i];
        o && !e[o] && (n.push(o), e[o] = !0);
    }
    return n;
};

var getRangeLookupList = function (purpose, homeType, firstHomeOwner, foreignBuyer, isMelbourne, n) {
    var i = determineEffPurposeId(purpose, homeType), r = '';
    foreignBuyer && (r = 'foreign-');
    var o = '';
    isMelbourne && (o = '-melbourne');
    var a = '-only';
    firstHomeOwner && (a = '-fho');
    var s = _getUnique([o ? '' + r + i + a + o : null, '' + r + i + a, o ? '' + r + i + o : null, '' + r + i, '' + r + purpose, i, purpose, n]);
    return s;
};

function match(a, b) {
    for (var i in a) {
        for (var j in b) {
            if (a[i] == b[j]) {
                return true;
            }
        }
    }
    return false;
}

/**
 * Calculate Deposit
 * @param state: qld, vic, nsw, act, sa, tas, nt, wa
 * @param propertyUse: primary, investment
 * @param propertyType: existing, new, land
 * @param propertyValue, e.g. 500,000
 * @param firstHomeOwner / foreignBuyer / isMelbourne, true or false
 */
function calc(state, propertyUse, propertyType, propertyValue, saving, firstHomeBuyer, foreignBuyer, isMelbourne) {
    var states = data['stamp-duty-lib'].stampduty.state;
    var types = getRangeLookupList(propertyUse, propertyType, firstHomeBuyer, false, false);
    console.log('Types: ' + types);
    var info = states[state];
    var mortgate = info.mortgageRegistrationFee;
    var title = info.titleSearchFee;
    var stamps = info.stampDuty;
    var transfers = info.landTransferFee;
    var grants = info.grant;

    var transfer = 0;
    for (var i in transfers) {
        var t = transfers[i];
        if (t.rangeFrom <= propertyValue && propertyValue <= t.rangeTo) {
            transfer = t.fee;
            if (t.per != 0) {
                transfer += (propertyValue - t.rangeFrom + 1) * t.extra / t.per;
                break;
            }
        }
    }

    var grant = 0, look = true;
    for (var i = 0; i < grants.length && look; i ++) {
        var g = grants[i];
        var grantTypes = g.type.split(',');
        for (var j in grantTypes) {
            grantTypes[i] = grantTypes[j].trim();
        }
        if (match(types, grantTypes)) {
            var ranges = g.threshold;
            for (var j = 0; j < ranges.length && look; j ++) {
                var r = ranges[j];
                if (r.rangeFrom <= propertyValue && propertyValue <= r.rangeTo) {
                    grant = r.amount;
                    look = false;
                }
            }
        }
    }

    var stamp = 0, look = true;
    for (var i = 0; i < stamps.length && look; i ++) {
        var s = stamps[i];
        var stampTypes = s.type.split(',');
        for (var j in stampTypes) {
            stampTypes[i] = stampTypes[j].trim();
        }
        if (match(types, stampTypes)) {
            var ranges = s.threshold;
            for (var j = 0; j < ranges.length && look; j ++) {
                var r = ranges[j];
                if (r.rangeFrom <= propertyValue && propertyValue <= r.rangeTo) {
                    stamp = r.fee;
                    if (r.per != 0) {
                        stamp += (propertyValue - r.rangeFrom + 1) * r.extra / r.per;
                        break;
                    }
                    look = false;
                }
            }
        }
    }

    return { 'stampDuty': stamp, 'mortgage': mortgate, 'transfer': transfer, 'title':title, 'grant': grant, 'deposit': saving + grant - stamp - mortgate- transfer - title}
}

// TODO-test-array
console.log(getRangeLookupList('primary', 'existing', true, false, false));
console.log(calc('nsw', 'primary', 'new', 600000, 200000, true, false, false));
console.log(calc('nsw', 'primary', 'new', 1000000, 200000, true, false, false));