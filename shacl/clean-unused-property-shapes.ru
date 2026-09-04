PREFIX shacl-play: <https://shacl-play.sparna.fr/ontology#>
PREFIX sh: <http://www.w3.org/ns/shacl#>
PREFIX acl: <http://www.w3.org/ns/auth/acl#>
PREFIX dcat: <http://www.w3.org/ns/dcat#>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX dpv: <http://www.w3.org/ns/dpv#>
PREFIX prov: <http://www.w3.org/ns/prov#>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX eu-dga: <https://w3id.org/dpv/legal/eu/dga#>
DELETE {
    ?s ?p ?o .
    ?x sh:property ?s .
} WHERE {
    ?s sh:path ?anything .
    FILTER NOT EXISTS { ?s shacl-play:background-color "#EAF1DD" }
    ?s ?p ?o .
    ?x sh:property ?s .
}
;
DELETE {
    ?s ?p ?o
} WHERE {
    ?s a sh:NodeShape .
    FILTER NOT EXISTS { ?s sh:property ?something }
    ?s ?p ?o
}