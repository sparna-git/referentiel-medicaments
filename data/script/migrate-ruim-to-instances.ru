PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX med: <http://data.esante.gouv.fr/ansm/medicament/>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
DELETE {
	?x rdfs:subClassOf ?class .
	?x a owl:Class .
}
INSERT {
	?x a ?class .
}
WHERE {
	?x rdfs:subClassOf ?class .
	?x a owl:Class .
	VALUES ?class {
		med:Autorisation
		med:ChangementDeStatut
		med:DosagePresentation
		med:DosageConcentration
		med:Element
		med:ElementPresentation
		med:Evenement
		med:ExpressionDeDosage
		med:Forme
		med:Gamme
		med:GroupeGenerique
		med:JustificationNiveauPrescriptibilite
		med:JustificationNiveauVirtualisation
		med:BlankNode_LabelWithDates
		med:NiveauPrescriptibilite
		med:NiveauVirtualisation
		med:Organisation
		med:PPhParSubstance
		med:PPhParSubstanceDosage
		med:PPhParSubstanceForme
		med:PPhParSubstanceDosageForme
		med:PrescriptionEnDC
		med:Presentation
		med:SpecialitePharmaceutique
		med:StatutSpecialite
		med:Substance
		# med:TypeEvenement
		# ci-dessous tous les sous-types d'événement
		med:Evenement_Autorisation
		med:Evenement_CPC
		med:Evenement_ChangementDeCommercialisation
		med:Evenement_ChangementDeProcedure
		med:Evenement_ChangementDeStatut
		med:Evenement_NouvelleIndication
		med:TypeContenant
		med:TypeDose
		med:TypeProcedure
		med:Unite
		med:UniteCommuneDeDispensation
		med:UniteDePresentation
		med:Voie
	}
}
;
# Supprime les liens subClassOf entre Presentation et SpecialitePharmaceutique
DELETE {
	?pres rdfs:subClassOf ?spe .
}
WHERE {
	?pres rdfs:subClassOf ?spe .
	?pres a med:Presentation .
	?spe a med:SpecialitePharmaceutique .
}
;
# Supprime les liens subClassOf entre ElementPresentation et Element
DELETE {
	?eltPres rdfs:subClassOf ?eltSpe .
}
WHERE {
	?eltPres rdfs:subClassOf ?eltSpe .
	?eltPres a med:ElementPresentation .
	?eltSpe a med:Element .
}