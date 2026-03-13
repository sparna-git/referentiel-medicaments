var sampleQueries = {
	"example.1": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "SpecialitePharmaceutique_1"
			},
			{
				"termType": "Variable",
				"value": "Code_12"
			},
			{
				"termType": "Variable",
				"value": "Code_6"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_classificationATC",
					"o": "ATC_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#ATC",
					"criterias": [
						{
							"label": "J01DC02 - céfuroxime",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/whocc/atc/J01DC02"
								}
							}
						}
					]
				},
				"children": []
			},
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_aPourPresentation",
					"o": "Presentation_4",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation",
					"criterias": []
				},
				"children": [
					{
						"line": {
							"s": "Presentation_4",
							"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation_CIP13",
							"o": "Code_6",
							"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation",
							"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Code",
							"criterias": []
						},
						"children": []
					}
				]
			},
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_aPourUniteDeDispensation",
					"o": "UniteCommuneDeDispensation_10",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#UniteCommuneDeDispensation",
					"criterias": []
				},
				"children": [
					{
						"line": {
							"s": "UniteCommuneDeDispensation_10",
							"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#UniteCommuneDeDispensation_codeUCD13",
							"o": "Code_12",
							"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#UniteCommuneDeDispensation",
							"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Code",
							"criterias": []
						},
						"children": []
					}
				]
			}
		]
	},
	"example.2": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "SpecialitePharmaceutique_1"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_label",
					"o": "Text_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Text",
					"criterias": [
						{
							"label": "vaccin",
							"criteria": {
								"search": "vaccin"
							}
						}
					]
				},
				"children": []
			},
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_label",
					"o": "Text_4",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Text",
					"criterias": [
						{
							"label": "covid",
							"criteria": {
								"search": "covid"
							}
						}
					]
				},
				"children": []
			}
		]
	},
	"example.3": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "Evenement_1"
			},
			{
				"termType": "Variable",
				"value": "SpecialitePharmaceutique_2"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "Evenement_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Evenement_concerne",
					"o": "SpecialitePharmaceutique_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Evenement",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"criterias": [
						{
							"label": "FORTUM 2 g, poudre pour solution injectable (IV) ou pour perfusion",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique_69443806"
								}
							}
						}
					]
				},
				"children": []
			}
		]
	},
	"example.4": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "Presentation_1"
			},
			{
				"termType": "Variable",
				"value": "Substance_4"
			},
			{
				"termType": "Variable",
				"value": "TypeProcedure_6"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "Presentation_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation_presente",
					"o": "SpecialitePharmaceutique_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"criterias": []
				},
				"children": [
					{
						"line": {
							"s": "SpecialitePharmaceutique_2",
							"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_substanceActive",
							"o": "Substance_4",
							"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
							"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Substance",
							"criterias": [
								{
									"label": "ézétimibe",
									"criteria": {
										"rdfTerm": {
											"type": "uri",
											"value": "http://data.esante.gouv.fr/ansm/medicament/Substance_73242"
										}
									}
								}
							]
						},
						"children": []
					},
					{
						"line": {
							"s": "SpecialitePharmaceutique_2",
							"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_typeProcedureCourante",
							"o": "TypeProcedure_6",
							"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
							"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#TypeProcedure",
							"criterias": [
								{
									"label": "Autorisation d'importation parallèle d’une spécialité pharmaceutique en vue de la mise sur le marché en France (300)",
									"criteria": {
										"rdfTerm": {
											"type": "uri",
											"value": "http://data.esante.gouv.fr/ansm/medicament/TypeProcedure_31"
										}
									}
								}
							]
						},
						"children": []
					}
				]
			}
		]
	},
	"example.5": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "Presentation_1"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "Presentation_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_label",
					"o": "Text_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Text",
					"criterias": [
						{
							"label": "metformine",
							"criteria": {
								"search": "metformine"
							}
						}
					]
				},
				"children": []
			},
			{
				"line": {
					"s": "Presentation_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation_label",
					"o": "Text_4",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Text",
					"criterias": [
						{
							"label": "1000",
							"criteria": {
								"search": "1000"
							}
						}
					]
				},
				"children": []
			}
		]
	},
	"example.6": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "Substance_1"
			},
			{
				"termType": "Variable",
				"value": "Text_4"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "Substance_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Substance_estSubstanceActiveDans",
					"o": "SpecialitePharmaceutique_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Substance",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"criterias": []
				},
				"children": [
					{
						"line": {
							"s": "SpecialitePharmaceutique_2",
							"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_label",
							"o": "Text_4",
							"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
							"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Text",
							"criterias": [
								{
									"label": "humex rhume",
									"criteria": {
										"search": "humex rhume"
									}
								}
							]
						},
						"children": []
					}
				]
			}
		]
	},
	"example.7": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "Presentation_1"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "Presentation_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation_label",
					"o": "Text_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Text",
					"criterias": [
						{
							"label": "multidose",
							"criteria": {
								"search": "multidose"
							}
						}
					]
				},
				"children": []
			},
			{
				"line": {
					"s": "Presentation_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation_presente",
					"o": "SpecialitePharmaceutique_4",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"criterias": []
				},
				"children": [
					{
						"line": {
							"s": "SpecialitePharmaceutique_4",
							"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_voie",
							"o": "Voie_7",
							"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
							"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Voie",
							"criterias": [
								{
									"label": "intramusculaire (611)",
									"criteria": {
										"rdfTerm": {
											"type": "uri",
											"value": "http://data.esante.gouv.fr/ansm/medicament/Voie_13"
										}
									}
								},
								{
									"label": "intraveineuse (2225)",
									"criteria": {
										"rdfTerm": {
											"type": "uri",
											"value": "http://data.esante.gouv.fr/ansm/medicament/Voie_16"
										}
									}
								}
							]
						},
						"children": []
					}
				]
			}
		]
	},
	"example.8": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "SpecialitePharmaceutique_1"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_typeProcedureCourante",
					"o": "TypeProcedure_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#TypeProcedure",
					"criterias": [
						{
							"label": "Autorisation d",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/TypeProcedure_31"
								}
							}
						}
					]
				},
				"children": []
			}
		]
	},
	"example.9": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "SpecialitePharmaceutique_1"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_statutCourant",
					"o": "StatutSpecialite_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#StatutSpecialite",
					"criterias": [
						{
							"label": "Suspension (11)",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/StatutSpecialite_10"
								}
							}
						}
					]
				},
				"children": []
			}
		]
	},
	"example.10": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "SpecialitePharmaceutique_1"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_label",
					"o": "Text_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Text",
					"criterias": []
				},
				"children": []
			},
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_SAouFT",
					"o": "Substance_5",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Substance",
					"criterias": [
						{
							"label": "ibuprofène",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/Substance_02092"
								}
							}
						},
						{
							"label": "ibuprofène sodique dihydraté",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/Substance_23609"
								}
							}
						},
						{
							"label": "lysinate d'ibuprofène",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/Substance_29909"
								}
							}
						}
					]
				},
				"children": []
			},
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_voie",
					"o": "Voie_7",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Voie",
					"criterias": [
						{
							"label": "orale (9981)",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/Voie_20"
								}
							}
						}
					]
				},
				"children": []
			}
		]
	},
	"example.11": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "SpecialitePharmaceutique_1"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_classificationATC",
					"o": "ATC_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#ATC",
					"criterias": [
						{
							"label": "A07AA11 - rifaximine",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/whocc/atc/A07AA11"
								}
							}
						},
						{
							"label": "J01 - antibactériens à usage systémique",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/whocc/atc/J01"
								}
							}
						},
						{
							"label": "J06BC - anticorps monoclonaux antibactériens",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/whocc/atc/J06BC"
								}
							}
						}
					]
				},
				"children": []
			}
		]
	},
	"example.12": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "SpecialitePharmaceutique_1"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_voie",
					"o": "Voie_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Voie",
					"criterias": [
						{
							"label": "orale (9981)",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/Voie_20"
								}
							}
						}
					]
				},
				"children": []
			},
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_voie",
					"o": "Voie_5",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Voie",
					"criterias": [
						{
							"label": "intramusculaire (611)",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/Voie_13"
								}
							}
						}
					]
				},
				"children": []
			},
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_voie",
					"o": "Voie_8",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Voie",
					"criterias": [
						{
							"label": "intraveineuse (2225)",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/Voie_16"
								}
							}
						}
					]
				},
				"children": []
			}
		]
	},
	"example.13": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "UniteCommuneDeDispensation_1"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "UniteCommuneDeDispensation_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#UniteCommuneDeDispensation_uniteDeDispensationDe",
					"o": "SpecialitePharmaceutique_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#UniteCommuneDeDispensation",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"criterias": []
				},
				"children": [
					{
						"line": {
							"s": "SpecialitePharmaceutique_2",
							"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_classificationATC",
							"o": "ATC_5",
							"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
							"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#ATC",
							"criterias": [
								{
									"label": "C02KX - antihypertenseurs pour l'hypertension artérielle pulmonaire",
									"criteria": {
										"rdfTerm": {
											"type": "uri",
											"value": "http://data.esante.gouv.fr/whocc/atc/C02KX"
										}
									}
								}
							]
						},
						"children": []
					}
				]
			}
		]
	},
	"example.14": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "GroupeGenerique_1"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "GroupeGenerique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#GroupeGenerique_label",
					"o": "Text_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#GroupeGenerique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Text",
					"criterias": [
						{
							"label": "perindopril",
							"criteria": {
								"search": "perindopril"
							}
						}
					]
				},
				"children": []
			}
		]
	},
	"example.15": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "SpecialitePharmaceutique_1"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_SAouFT",
					"o": "Substance_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Substance",
					"criterias": [
						{
							"label": "chlorhydrate de fluoxétine",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/Substance_07560"
								}
							}
						},
						{
							"label": "fluoxétine",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/Substance_48800"
								}
							}
						}
					]
				},
				"children": []
			},
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_aPourPresentation",
					"o": "Presentation_4",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation",
					"criterias": []
				},
				"children": [
					{
						"line": {
							"s": "Presentation_4",
							"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation_label",
							"o": "Text_7",
							"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation",
							"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Text",
							"criterias": [
								{
									"label": "sécable",
									"criteria": {
										"search": "sécable"
									}
								}
							]
						},
						"children": []
					}
				]
			}
		]
	},
	"example.16": {
		"distinct": true,
		"variables": [
			{
				"termType": "Variable",
				"value": "SpecialitePharmaceutique_1"
			}
		],
		"order": null,
		"branches": [
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_SAouFT",
					"o": "Substance_2",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Substance",
					"criterias": []
				},
				"children": [
					{
						"line": {
							"s": "Substance_2",
							"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Substance_label",
							"o": "Text_4",
							"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Substance",
							"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Text",
							"criterias": [
								{
									"label": "potassi",
									"criteria": {
										"search": "potassi"
									}
								}
							]
						},
						"children": []
					}
				]
			},
			{
				"line": {
					"s": "SpecialitePharmaceutique_1",
					"p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_voie",
					"o": "Voie_6",
					"sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
					"oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Voie",
					"criterias": [
						{
							"label": "intraveineuse (2225)",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/Voie_16"
								}
							}
						},
						{
							"label": "intramusculaire (611)",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/Voie_13"
								}
							}
						},
						{
							"label": "orale (9981)",
							"criteria": {
								"rdfTerm": {
									"type": "uri",
									"value": "http://data.esante.gouv.fr/ansm/medicament/Voie_20"
								}
							}
						}
					]
				},
				"children": []
			}
		]
	}
};