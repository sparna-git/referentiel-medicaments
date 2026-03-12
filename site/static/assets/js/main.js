document.addEventListener("DOMContentLoaded", () => {
  // =============================================================================
  // 1. DOM REFERENCES
  // =============================================================================
  const sparnatural = document.querySelector("spar-natural");
  const historyComponent = document.querySelector("sparnatural-history");
  const sparnaturalTextQuery = document.querySelector("sparnatural-text-query");
  const displayEndpoint =
    document.querySelector("#displayEndpoint") ||
    document.querySelector("#endpoint");
  const selectExamples = document.getElementById("select-examples");

  if (!sparnatural) {
    console.error("spar-natural not found");
    return;
  }

  // =============================================================================
  // 2. STATE & CONFIGURATION
  // =============================================================================
  let lastQueryJson = null;
  const lang =
    new URLSearchParams(window.location.search).get("lang") || "fr";

  // Set language on components
  sparnatural.setAttribute("lang", lang);
  historyComponent?.setAttribute("lang", lang);
  sparnaturalTextQuery?.setAttribute("lang", lang);

  // Display endpoint link
  if (displayEndpoint) {
    displayEndpoint.href = sparnatural.getAttribute("endpoint");
    displayEndpoint.textContent = sparnatural.getAttribute("endpoint");
  }

  // =============================================================================
  // 3. YASQE SETUP
  // =============================================================================
  const yasqe = new Yasqe(document.getElementById("yasqe"), {
    requestConfig: {
      endpoint: sparnatural.getAttribute("endpoint"),
      method: "GET",
    },
    copyEndpointOnNewTab: false,
  });

  // =============================================================================
  // 4. YASR SETUP
  // =============================================================================
  Yasr.registerPlugin("TableX", SparnaturalYasguiPlugins.TableX);
  Yasr.registerPlugin("Grid", SparnaturalYasguiPlugins.GridPlugin);
  if (SparnaturalYasguiPlugins.MapPlugin) {
    Yasr.registerPlugin("Map", SparnaturalYasguiPlugins.MapPlugin);
  }
  Yasr.registerPlugin("Stats", SparnaturalYasguiPlugins.StatsPlugin);
  if (typeof Timeline !== "undefined") {
    Yasr.registerPlugin("Timeline", Timeline);
  }
  delete Yasr.plugins["table"];

  // Build plugin order based on what's available
  const pluginOrder = ["TableX", "Grid"];
  if (SparnaturalYasguiPlugins.MapPlugin) pluginOrder.push("Map");
  pluginOrder.push("Stats");
  if (typeof Timeline !== "undefined") pluginOrder.push("Timeline");

  const yasr = new Yasr(document.getElementById("yasr"), {
    pluginOrder,
    defaultPlugin: "TableX",
  });

  // Set lang on YASR plugins
  for (const name of ["TableX", "Grid", "Stats"]) {
    if (yasr.plugins[name]?.config) {
      yasr.plugins[name].config.lang = lang;
    }
  }

  // Link YASQE response to YASR
  yasqe.on("queryResponse", (_, response, duration) => {
    yasr.setResponse(response, duration);
    sparnatural.enablePlayBtn();
  });

  // =============================================================================
  // 5. SPARNATURAL EVENT HANDLERS
  // =============================================================================

  // --- Init ---
  sparnatural.addEventListener("init", () => {
    for (const plugin in yasr.plugins) {
      yasr.plugins[plugin]?.notifyConfiguration?.(
        sparnatural.sparnatural.specProvider,
      );
    }
    historyComponent?.notifyConfiguration(
      sparnatural.sparnatural.specProvider,
    );
    sparnaturalTextQuery?.notifyConfiguration(
      sparnatural.sparnatural.specProvider,
    );
    loadQueryFromUrl();
  });

  // --- Query Updated ---
  sparnatural.addEventListener("queryUpdated", (event) => {
    yasqe.setValue(sparnatural.expandSparql(event.detail.queryString));
    lastQueryJson = event.detail.queryJson;

    for (const plugin in yasr.plugins) {
      yasr.plugins[plugin]?.notifyQuery?.(event.detail.queryJson);
    }

    document.getElementById("query-json").value = JSON.stringify(
      event.detail.queryJson,
    );
  });

  // --- Submit ---
  sparnatural.addEventListener("submit", () => {
    sparnatural.disablePlayBtn();
    yasqe.query();
    if (lastQueryJson) {
      historyComponent?.saveQuery(lastQueryJson);
    }
  });

  // =============================================================================
  // 6. UI ACTIONS
  // =============================================================================

  // --- Toggle SPARQL ---
  document.getElementById("sparql-toggle")?.addEventListener("click", (e) => {
    e.preventDefault();
    const yasqeEl = document.getElementById("yasqe");
    const icon = document.getElementById("sparql-toggle-icon");
    if (yasqeEl.style.display === "none") {
      yasqeEl.style.display = "block";
      yasqe.refresh();
      if (icon) icon.className = "fad fa-eye-slash fa-fw";
    } else {
      yasqeEl.style.display = "none";
      if (icon) icon.className = "fad fa-eye fa-fw";
    }
  });

  // --- Share ---
  document.getElementById("share")?.addEventListener("click", (e) => {
    e.preventDefault();
    const compressCodec = JsonUrl("lzma");

    compressCodec
      .compress(document.getElementById("query-json").value)
      .then((result) => {
        const url = window.location.pathname + "?query=" + result;
        const link = document.getElementById("share-link");
        link.href = url;
        link.textContent =
          lang === "fr" ? "Requête Sparnatural" : "Sparnatural Query";
        new bootstrap.Modal(document.getElementById("shareModal")).show();
      });
  });

  // --- Export ---
  document.getElementById("export")?.addEventListener("click", (e) => {
    e.preventDefault();
    const jsonString = JSON.stringify(
      JSON.parse(document.getElementById("query-json").value),
      null,
      2,
    );
    document.getElementById("export-json").value = jsonString;
    new bootstrap.Modal(document.getElementById("exportModal")).show();
  });

  // --- Import ---
  document.getElementById("import")?.addEventListener("click", (e) => {
    e.preventDefault();
    new bootstrap.Modal(document.getElementById("importModal")).show();
  });

  document.getElementById("importButton")?.addEventListener("click", () => {
    const json = JSON.parse(document.getElementById("import-json").value);
    sparnatural.loadQuery(json);
    bootstrap.Modal.getInstance(document.getElementById("importModal"))?.hide();
  });

  // =============================================================================
  // 7. HISTORY & TEXT QUERY HANDLERS
  // =============================================================================

  historyComponent?.addEventListener("loadQuery", (event) => {
    sparnatural.loadQuery(event.detail.query);
  });

  document.getElementById("myCustomButton")?.addEventListener("click", () => {
    historyComponent?.openHistoryModal();
  });

  sparnaturalTextQuery?.addEventListener("loadQuery", (event) => {
    const query = event.detail.query;
    sparnatural.loadQuery(query);

    if (!hasNotFound(query)) {
      setTimeout(() => sparnatural.dispatchEvent(new Event("submit")), 300);
    } else {
      console.log("Query contains URI_NOT_FOUND — loaded but not submitted.");
    }
  });

  // =============================================================================
  // 8. SAMPLE QUERIES
  // =============================================================================
  if (selectExamples) {
    // Dynamic option creation from queries array (if available)
    if (typeof queries !== "undefined" && Array.isArray(queries)) {
      queries.forEach((q, index) => {
        const label =
          lang === "fr"
            ? q.label_fr || q.label_en
            : q.label_en || q.label_fr;
        const option = document.createElement("option");
        option.value = index;
        option.textContent = label;
        selectExamples.appendChild(option);
      });
    }

    selectExamples.addEventListener("change", (e) => {
      const key = e.target.value;
      if (key === "none" || key === "") return;

      // Object format (sampleQueries global from sampleQueries.js)
      if (typeof sampleQueries !== "undefined" && sampleQueries[key]) {
        sparnatural.loadQuery(sampleQueries[key]);
      }
      // Array format (queries global)
      else if (typeof queries !== "undefined" && queries[key]) {
        sparnatural.loadQuery(queries[key].query);
      }
    });
  }

  // =============================================================================
  // 9. ADVANCED / SIMPLE TOGGLE
  // =============================================================================
  document
    .getElementById("advanced-simple")
    ?.addEventListener("click", (e) => {
      e.preventDefault();
      const ADVANCED_SRC =
        "../configs/RUIM-SHACL-postprocessed.ttl ../configs/RUIM-statistics.ttl";
      const SIMPLE_SRC = "../configs/sparnatural-config.ttl";

      if (sparnatural.getAttribute("src") === SIMPLE_SRC) {
        sparnatural.setAttribute(
          "prefixes",
          "skos:http://www.w3.org/2004/02/skos/core# dct:http://purl.org/dc/terms/",
        );
        sparnatural.setAttribute(
          "typePredicate",
          "<http://www.w3.org/1999/02/22-rdf-syntax-ns#type>",
        );
        sparnatural.setAttribute("src", ADVANCED_SRC);
        e.target.textContent = "Recherche simple";
      } else {
        sparnatural.setAttribute(
          "prefixes",
          "med:http://data.esante.gouv.fr/ansm/medicament/ skos:http://www.w3.org/2004/02/skos/core# dct:http://purl.org/dc/terms/",
        );
        sparnatural.setAttribute(
          "typePredicate",
          "<http://www.w3.org/2000/01/rdf-schema#subClassOf>",
        );
        sparnatural.setAttribute("src", SIMPLE_SRC);
        e.target.textContent = "Recherche avancée";
      }
    });

  // =============================================================================
  // 10. HELPER FUNCTIONS
  // =============================================================================

  function loadQueryFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has("query")) return;

    const compressedJson = urlParams.get("query");
    const compressCodec = JsonUrl("lzma");

    compressCodec.decompress(compressedJson).then((json) => {
      const queryJson = JSON.parse(json);

      sparnatural.loadQuery(queryJson);
      sparnatural.disablePlayBtn();

      yasqe.setValue(
        sparnatural.expandSparql(
          sparnatural.sparnatural.queryBuilder.buildQuery(queryJson),
        ),
      );

      sparnatural.executeSparql(
        yasqe.getValue(),
        (finalResult) => {
          yasr.setResponse(finalResult);
          sparnatural.enablePlayBtn();
        },
        (error) => {
          console.error("Error executing SPARQL from shared URL", error);
          sparnatural.enablePlayBtn();
        },
      );
    });
  }

  function hasNotFound(node) {
    if (!node) return false;
    if (
      node.line?.criterias?.some(
        (v) =>
          v.criteria?.rdfTerm?.value ===
          "https://services.sparnatural.eu/api/v1/URI_NOT_FOUND",
      )
    ) {
      return true;
    }
    if (node.branches?.some(hasNotFound)) return true;
    if (node.children?.some(hasNotFound)) return true;
    return false;
  }
});
