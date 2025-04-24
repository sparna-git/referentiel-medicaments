var sampleQueries = {
	"example.1" :
	{
  "distinct": true,
  "variables": [
    { "termType": "Variable", "value": "SpecialitePharmaceutique_1"},
    { "termType": "Variable", "value": "CIP_6"},
    { "termType": "Variable", "value": "UCD_10"}
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "SpecialitePharmaceutique_1",
        "p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_codeATC",
        "o": "CodeATC_2",
        "sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
        "oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#ATC",
        "values": [
          {
            "label": "J01DC02",
            "regex": "J01DC02"
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
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "Presentation_4",
            "p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation_CIP13",
            "o": "CIP_6",
            "sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Presentation",
            "oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Code",
            "values": []
          },
          "children": []
        }
      ]
    },
    {
      "line": {
        "s": "SpecialitePharmaceutique_1",
        "p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_aPourUniteDeDispensation",
        "o": "UniteCommuneDeDispensation_8",
        "sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
        "oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#UniteCommuneDeDispensation",
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "UniteCommuneDeDispensation_8",
            "p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#UniteCommuneDeDispensation_codeUCD13",
            "o": "UCD_10",
            "sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#UniteCommuneDeDispensation",
            "oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Code",
            "values": []
          },
          "children": []
        }
      ]
    }
  ]
}
	,
	"example.2":
{
  "distinct": true,
  "variables": [
    { "termType": "Variable", "value": "Substance_1" },
    { "termType": "Variable", "value": "CodeSMS_6" }
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
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "SpecialitePharmaceutique_2",
            "p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_codeATC",
            "o": "CodeATC_4",
            "sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
            "oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Code",
            "values": [
              {
                "label": "C09AA04",
                "regex": "C09AA04"
              }
            ]
          },
          "children": []
        }
      ]
    },
    {
      "line": {
        "s": "Substance_1",
        "p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Substance_codeSMS",
        "o": "CodeSMS_6",
        "sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Substance",
        "oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Code",
        "values": []
      },
      "children": [],
      "optional": true
    }
  ]
}
	,
	"example.3":
{
  "distinct": true,
  "variables": [
    { "termType": "Variable", "value": "CodeATC_2" }
  ],
  "order": null,
  "branches": [
    {
      "line": {
        "s": "SpecialitePharmaceutique_1",
        "p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_labelATC",
        "o": "CodeATC_2",
        "sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
        "oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Code",
        "values": [
          {
            "label": "betamethasone",
            "regex": "betamethasone"
          }
        ]
      },
      "children": []
    }
  ]
}
	,
	"example.4":
{
  "distinct": true,
  "variables": [
    { "termType": "Variable", "value": "SpecialitePharmaceutique_1" }
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
        "values": [
          {
            "label": "vaccin",
            "regex": "vaccin"
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
        "values": [
          {
            "label": "covid",
            "regex": "covid"
          }
        ]
      },
      "children": []
    }
  ]
}
	,
	"example.5":
{
  "distinct": true,
  "variables": [
    { "termType": "Variable", "value": "Evenement_1" },
    { "termType": "Variable", "value": "SpecialitePharmaceutique_2" }
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
        "values": [
          {
            "label": "FORTUM 2 g, poudre pour solution injectable (IV) ou pour perfusion",
            "rdfTerm": {
              "type": "uri",
              "value": "http://data.esante.gouv.fr/ansm/medicament/SpecialitePharmaceutique_69443806"
            }
          }
        ]
      },
      "children": []
    }
  ]
}
	,
	"example.6":
{
  "distinct": true,
  "variables": [
    { "termType": "Variable", "value": "Presentation_1" },
    { "termType": "Variable", "value": "Substance_4" },
    { "termType": "Variable", "value": "TypeProcedure_6" }
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
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "SpecialitePharmaceutique_2",
            "p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_substanceActive",
            "o": "Substance_4",
            "sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
            "oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Substance",
            "values": [
              {
                "label": "ézétimibe",
                "rdfTerm": {
                  "type": "uri",
                  "value": "http://data.esante.gouv.fr/ansm/medicament/Substance_73242"
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
            "values": [
              {
                "label": "Autorisation d'importation parallèle d’une spécialité pharmaceutique en vue de la mise sur le marché en France (300)",
                "rdfTerm": {
                  "type": "uri",
                  "value": "http://data.esante.gouv.fr/ansm/medicament/TypeProcedure_31"
                }
              }
            ]
          },
          "children": []
        }
      ]
    }
  ]
}
	,
	"example.7":
{
  "distinct": true,
  "variables": [
    { "termType": "Variable", "value": "Presentation_1" }
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
        "values": [
          {
            "label": "metformine",
            "regex": "metformine"
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
        "values": [
          {
            "label": "1000",
            "regex": "1000"
          }
        ]
      },
      "children": []
    }
  ]
},
	"example.8":
{
  "distinct": true,
  "variables": [
    { "termType": "Variable", "value": "Substance_1" },
    { "termType": "Variable", "value": "Text_4" }
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
        "values": []
      },
      "children": [
        {
          "line": {
            "s": "SpecialitePharmaceutique_2",
            "p": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique_label",
            "o": "Text_4",
            "sType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#SpecialitePharmaceutique",
            "oType": "https://sparna-git.github.io/referentiel-medicaments/configs/sparnatural-config.ttl#Text",
            "values": [
              {
                "label": "humex rhume",
                "regex": "humex rhume"
              }
            ]
          },
          "children": []
        }
      ]
    }
  ]
}
	};