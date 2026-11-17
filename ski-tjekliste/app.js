(function () {
  "use strict";

  // Hvert punkt: [id, navn, antal (valgfri), note (valgfri), mærkat (valgfri)]
  var CATEGORIES = [
    {
      id: "udstyr",
      title: "Skiudstyr",
      desc: "Det tunge grej. Tjek det i god tid, så der er tid til service eller nyt udstyr.",
      items: [
        ["ski", "Ski eller snowboard", "", "Få slebet kanter og lagt voks på før sæsonen"],
        ["stoevler", "Skistøvler eller snowboardstøvler", "", "Prøv dem på med skisokker, før du tager af sted"],
        ["binding", "Bindinger tjekket og indstillet", "", "DIN-værdi indstillet efter vægt, højde og niveau i en skibutik"],
        ["stave", "Skistave", "", ""],
        ["hjelm", "Hjelm", "", "Udskift efter et hårdt slag, også selv om den ser hel ud"],
        ["briller", "Skibriller", "", ""],
        ["linse", "Ekstra linse til dårlig sigt", "", "Lys linse til overskyet vejr og snefald"],
        ["solbriller", "Solbriller", "", "Til frokost på terrassen og forårsski"],
        ["ryg", "Rygskjold", "", "Især hvis du kører i parken eller off-piste"],
        ["skitaske", "Skitaske", "", "Med plads til to par ski, hvis du har flere"],
        ["stoevletaske", "Støvletaske", "", ""],
        ["skilaas", "Skilås", "", "Ski bliver stjålet fra stativerne ved restauranter"]
      ]
    },
    {
      id: "skitoej",
      title: "Skitøj",
      desc: "Ydertøjet, du har på hver dag på bjerget.",
      items: [
        ["jakke", "Skijakke", "1", "Vand- og vindtæt med hætte, der kan være over hjelmen"],
        ["bukser", "Skibukser eller salopetter", "1", ""],
        ["bukser2", "Ekstra par skibukser", "1", "Rart, når det første par er vådt eller skal vaskes"],
        ["handsker", "Skihandsker", "1", ""],
        ["luffer", "Luffer til kolde dage", "1", "Holder bedre på varmen end handsker"],
        ["handsker2", "Ekstra par handsker", "1", "Så du altid har et tørt par"],
        ["inderhandsker", "Tynde inderhandsker", "1", ""],
        ["halsedisse", "Halsedisse", "2", ""],
        ["balaclava", "Balaclava", "1", "Til blæst og meget lave temperaturer"],
        ["hue", "Tynd hue til under hjelmen", "1", ""],
        ["skisokker", "Skisokker", "5 til 7 par", "Uld eller uldblanding. Kun ét par ad gangen i støvlen"]
      ]
    },
    {
      id: "lag",
      title: "Inderlag og mellemlag",
      desc: "Lagdeling er det, der holder dig varm og tør. Undgå bomuld inderst.",
      items: [
        ["uldtroeje", "Uldundertrøje, lange ærmer", "3", "Merinould lugter mindre og kan bruges flere dage"],
        ["uldbukser", "Uldunderbukser", "2 til 3", ""],
        ["fleece", "Fleecetrøje eller tynd uldtrøje", "2", "Mellemlag"],
        ["dunvest", "Let dunjakke eller dunvest", "1", "Til de koldeste dage under skijakken"],
        ["sportsundertoej", "Sportsundertøj", "", "Fx sports-bh eller tætsiddende underbukser"]
      ]
    },
    {
      id: "hverdag",
      title: "Hverdagstøj",
      desc: "Til fridage, aftener og livet i byen. Tænk praktisk og i lag.",
      items: [
        ["vinterjakke", "Vinterjakke til hverdag", "1", "Så skijakken kan tørre efter dagen på bjerget"],
        ["vinterstoevler", "Vinterstøvler med god sål", "1", "Vandtætte og med greb på is"],
        ["broddere", "Isbrodder til støvlerne", "", "Gader og fortove kan være glatte hele vinteren"],
        ["sko", "Sneakers eller indendørssko", "1", ""],
        ["hjemmesko", "Hjemmesko", "1", ""],
        ["lange-bukser", "Lange bukser", "3 til 4", ""],
        ["troejer", "Varme trøjer eller hættetrøjer", "3 til 4", ""],
        ["tshirts", "T-shirts", "7", ""],
        ["undertoej", "Undertøj", "10 til 14", "Ca. to ugers forbrug, så du ikke skal vaske hele tiden"],
        ["sokker", "Almindelige sokker", "10", ""],
        ["nattoej", "Nattøj", "", ""],
        ["traeningstoej", "Træningstøj", "", ""],
        ["festtoej", "Tøj til fest og aftener ude", "", ""],
        ["badetoej", "Badetøj", "", "Til spa, svømmehal eller varme kilder"],
        ["hverdagshue", "Hue, halstørklæde og vanter til hverdag", "", ""]
      ]
    },
    {
      id: "pleje",
      title: "Helbred og personlig pleje",
      desc: "Solen er stærk i højden, og luften er tør.",
      items: [
        ["solcreme", "Solcreme, høj faktor", "", "SPF 50 anbefales. Sne reflekterer en stor del af UV-strålingen"],
        ["laebe", "Læbepomade med solfaktor", "2", ""],
        ["fugtcreme", "Fugtighedscreme", "", "Kulde og tør luft udtørrer huden"],
        ["medicin", "Personlig medicin til hele perioden", "", "Tal med lægen om recepter, hvis du er væk i flere måneder"],
        ["foerstehjaelp", "Lille førstehjælpssæt", "", "Plaster, vabelplaster, elastikbind og smertestillende"],
        ["linser", "Kontaktlinser og ekstra briller", "", ""],
        ["toilet", "Toiletartikler", "", "Tandbørste, tandpasta, shampoo, deodorant, barbergrej"],
        ["oerepropper", "Ørepropper", "", "Til delte værelser og tynde vægge"],
        ["haarelastik", "Hårelastikker og hårbørste", "", ""]
      ]
    },
    {
      id: "dokumenter",
      title: "Dokumenter og økonomi",
      desc: "Det, der er dyrest at glemme.",
      items: [
        ["pas", "Pas eller ID-kort", "", "Tjek at det er gyldigt i hele perioden"],
        ["sygesikring", "Det blå EU-sygesikringskort", "", "Gælder i EU, EØS og Schweiz. Bestilles gratis på borger.dk"],
        ["forsikring", "Rejseforsikring, der dækker vintersport", "", "Tjek dækning ved off-piste, redning og hjemtransport. Mange forsikringer har en grænse for rejsens længde"],
        ["liftkort", "Sæsonkort eller liftkort", "", "Sæsonkort er ofte billigst, når de købes tidligt"],
        ["koerekort", "Kørekort", "", ""],
        ["betalingskort", "Betalingskort og lidt kontanter", "", "Gerne to forskellige kort, hvis det ene bliver spærret"],
        ["kopier", "Kopi af pas og forsikring", "", "Gem dem også digitalt"],
        ["kontrakt", "Arbejdskontrakt", "", "Hvis du skal arbejde en sæson", "sæsonarbejde"],
        ["bolig", "Lejekontrakt eller bekræftelse på bolig", "", ""],
        ["skikort-kursus", "Bevis for skilærer- eller lavinekursus", "", "", "sæsonarbejde"]
      ]
    },
    {
      id: "elektronik",
      title: "Elektronik",
      desc: "Kulde tømmer batterier hurtigt.",
      items: [
        ["telefon", "Telefon og oplader", "", ""],
        ["powerbank", "Powerbank", "", "Hold den og telefonen i en inderlomme tæt på kroppen"],
        ["adapter", "Rejseadapter", "", "Schweiz og Storbritannien bruger andre stik end resten af Europa"],
        ["forlaenger", "Forlængerledning med flere stik", "", ""],
        ["hovedtelefoner", "Hovedtelefoner", "", ""],
        ["computer", "Computer eller tablet og oplader", "", ""],
        ["kamera", "Actionkamera og holder til hjelmen", "", ""],
        ["apps", "Apps hentet før afrejse", "", "Skiområdets app, vejrudsigt og lavinevarsel for området"]
      ]
    },
    {
      id: "lavine",
      title: "Sikkerhed off-piste",
      desc: "Kun hvis du kører uden for de præparerede pister. Udstyret hjælper kun, hvis du har øvet dig i at bruge det.",
      items: [
        ["sender", "Lavinesender", "", "Skift batterier ved sæsonstart", "off-piste"],
        ["sonde", "Lavinesonde", "", "", "off-piste"],
        ["skovl", "Lavineskovl", "", "", "off-piste"],
        ["rygsaek", "Rygsæk til udstyret", "", "Eventuelt med airbag", "off-piste"],
        ["kursus", "Lavinekursus gennemført", "", "", "off-piste"],
        ["nummer", "Nødnummer gemt i telefonen", "", "112 virker i hele EU og i Schweiz", "off-piste"]
      ]
    },
    {
      id: "vedligehold",
      title: "Vedligehold og reparation",
      desc: "Små ting, der sparer en tur til butikken.",
      items: [
        ["voks", "Skivoks", "", ""],
        ["skraber", "Voksskraber", "", ""],
        ["kantsliber", "Kantsliber", "", ""],
        ["multitool", "Multitool eller skruetrækker", "", "Til bindinger og hjelm"],
        ["gaffa", "Gaffatape", "", "Hurtig lapning af jakke og bukser"],
        ["imprægnering", "Imprægneringsspray eller vaskemiddel til skitøj", "", "Genopfrisker vandtætheden i løbet af sæsonen"],
        ["syting", "Lille sysæt", "", ""]
      ]
    },
    {
      id: "bolig",
      title: "Bolig og dagligdag",
      desc: "Gør det nemmere at bo et sted i flere måneder.",
      items: [
        ["stoevletoerrer", "Støvletørrer", "", "Tørre støvler hver morgen gør en stor forskel"],
        ["haandklaede", "Håndklæder", "2", ""],
        ["sengetoej", "Sengetøj", "", "Hvis det ikke følger med boligen"],
        ["vasketoej", "Vaskepose til snavset tøj", "", ""],
        ["termokop", "Termokop eller termoflaske", "", ""],
        ["drikkedunk", "Drikkedunk", "", ""],
        ["madkasse", "Madkasse", "", "Madpakke på bjerget sparer mange penge over en sæson"],
        ["haengelaas", "Hængelås til skab", "", "Til personaleskabe og vandrehjem"],
        ["dagstaske", "Lille rygsæk til dagen", "", ""]
      ]
    },
    {
      id: "foer",
      title: "Før du rejser",
      desc: "Opgaver, der skal klares hjemmefra.",
      items: [
        ["service", "Ski og støvler til service", "", ""],
        ["forsikring-tjek", "Rejseforsikring tjekket eller udvidet", "", ""],
        ["sygesikring-bestil", "Blåt sygesikringskort bestilt", "", "Det kan tage et par uger at få det"],
        ["liftkort-koeb", "Sæsonkort købt eller bestilt", "", ""],
        ["bank", "Banken orienteret om ophold i udlandet", "", ""],
        ["mobil", "Mobilabonnement tjekket for roaming", "", "Roaming i EU er inkluderet i de fleste danske abonnementer. Schweiz er ikke en del af EU-ordningen"],
        ["post", "Post og regninger ordnet", "", "Fx digital post, adresseændring eller nogen, der tømmer postkassen"],
        ["bolig-hjemme", "Aftale om boligen derhjemme", "", "Fremleje, opsigelse eller nogen, der kigger efter den"],
        ["transport", "Transport til skiområdet bestilt", "", "Fly, tog, bus eller bil med vinterdæk og snekæder"],
        ["laege", "Tandlæge og læge besøgt", "", "Det er nemmere at klare hjemme end i udlandet"]
      ]
    }
  ];

  var STORAGE_KEY = "skisaeson-tjekliste-v1";

  function loadState() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        return {
          checked: parsed.checked || {},
          custom: parsed.custom || {},
          hideDone: !!parsed.hideDone
        };
      }
    } catch (e) { /* lagring ikke tilgængelig */ }
    return { checked: {}, custom: {}, hideDone: false };
  }

  function saveState() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) { /* lagring ikke tilgængelig */ }
  }

  var state = loadState();

  function itemsFor(cat) {
    var base = cat.items.map(function (it) {
      return { key: cat.id + ":" + it[0], name: it[1], qty: it[2], note: it[3], tag: it[4], custom: false };
    });
    var extra = (state.custom[cat.id] || []).map(function (c) {
      return { key: cat.id + ":egen:" + c.id, name: c.name, qty: "", note: "", tag: "", custom: true, customId: c.id };
    });
    return base.concat(extra);
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") node.textContent = attrs[k];
        else if (k === "class") node.className = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function render() {
    var list = document.getElementById("list");
    var jump = document.getElementById("jump");
    list.textContent = "";
    jump.textContent = "";

    CATEGORIES.forEach(function (cat) {
      var items = itemsFor(cat);

      jump.appendChild(el("li", null, [el("a", { href: "#" + cat.id, text: cat.title })]));

      var countEl = el("span", { class: "cat-count", id: "count-" + cat.id });
      var head = el("div", { class: "cat-head" }, [
        el("div", null, [
          el("h2", { text: cat.title }),
          cat.desc ? el("p", { text: cat.desc }) : null
        ]),
        countEl
      ]);

      var ul = el("ul", { class: "items" });
      items.forEach(function (it) {
        var inputId = "cb-" + it.key.replace(/[^a-zA-Z0-9_-]/g, "-");
        var cb = el("input", { type: "checkbox", id: inputId });
        cb.checked = !!state.checked[it.key];

        var nameSpan = el("span", { class: "item-name", text: it.name });
        if (it.qty) nameSpan.appendChild(el("span", { class: "qty", text: "  (" + it.qty + ")" }));
        if (it.tag) nameSpan.appendChild(el("span", { class: "tag", text: it.tag }));
        if (it.custom) nameSpan.appendChild(el("span", { class: "tag", text: "egen" }));

        var label = el("label", { for: inputId }, [
          cb,
          el("span", { class: "item-text" }, [
            nameSpan,
            it.note ? el("span", { class: "item-note", text: it.note }) : null
          ])
        ]);

        var li = el("li", { class: "item" + (cb.checked ? " checked" : "") }, [label]);

        cb.addEventListener("change", function () {
          if (cb.checked) state.checked[it.key] = true;
          else delete state.checked[it.key];
          li.classList.toggle("checked", cb.checked);
          saveState();
          updateCounts();
        });

        if (it.custom) {
          var rm = el("button", { type: "button", class: "remove", text: "Fjern" });
          rm.setAttribute("aria-label", "Fjern " + it.name);
          rm.addEventListener("click", function () {
            state.custom[cat.id] = (state.custom[cat.id] || []).filter(function (c) { return c.id !== it.customId; });
            delete state.checked[it.key];
            saveState();
            render();
          });
          li.appendChild(rm);
        }

        ul.appendChild(li);
      });

      var input = el("input", { type: "text", placeholder: "Tilføj eget punkt", maxlength: "120" });
      input.setAttribute("aria-label", "Tilføj eget punkt til " + cat.title);
      var form = el("form", { class: "add-form" }, [
        input,
        el("button", { type: "submit", class: "btn btn-primary", text: "Tilføj" })
      ]);
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = input.value.trim();
        if (!name) return;
        if (!state.custom[cat.id]) state.custom[cat.id] = [];
        state.custom[cat.id].push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), name: name });
        saveState();
        render();
        var again = document.querySelector("#" + cat.id + " .add-form input");
        if (again) again.focus();
      });

      list.appendChild(el("section", { class: "category", id: cat.id }, [head, ul, form]));
    });

    updateCounts();
  }

  function updateCounts() {
    var total = 0;
    var done = 0;
    CATEGORIES.forEach(function (cat) {
      var items = itemsFor(cat);
      var catDone = items.filter(function (it) { return state.checked[it.key]; }).length;
      total += items.length;
      done += catDone;
      var c = document.getElementById("count-" + cat.id);
      if (c) {
        c.textContent = catDone + " / " + items.length;
        c.classList.toggle("complete", items.length > 0 && catDone === items.length);
      }
    });
    var pct = total ? Math.round((done / total) * 100) : 0;
    document.getElementById("done-count").textContent = done;
    document.getElementById("total-count").textContent = total;
    document.getElementById("percent").textContent = pct + " %";
    document.getElementById("bar-fill").style.width = pct + "%";
  }

  function exportText() {
    var lines = ["SKISÆSON TJEKLISTE", ""];
    CATEGORIES.forEach(function (cat) {
      lines.push(cat.title.toUpperCase());
      itemsFor(cat).forEach(function (it) {
        var mark = state.checked[it.key] ? "[x] " : "[ ] ";
        var line = mark + it.name + (it.qty ? " (" + it.qty + ")" : "");
        if (it.note) line += ": " + it.note;
        lines.push(line);
      });
      lines.push("");
    });
    var blob = new Blob([lines.join("\r\n")], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "skisaeson-tjekliste.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  var hideToggle = document.getElementById("hide-done");
  hideToggle.checked = state.hideDone;
  document.body.classList.toggle("hide-done", state.hideDone);
  hideToggle.addEventListener("change", function () {
    state.hideDone = hideToggle.checked;
    document.body.classList.toggle("hide-done", state.hideDone);
    saveState();
  });

  document.getElementById("print-btn").addEventListener("click", function () { window.print(); });
  document.getElementById("export-btn").addEventListener("click", exportText);
  document.getElementById("reset-btn").addEventListener("click", function () {
    if (window.confirm("Vil du fjerne alle flueben? Dine egne punkter bliver liggende.")) {
      state.checked = {};
      saveState();
      render();
    }
  });

  render();
})();
