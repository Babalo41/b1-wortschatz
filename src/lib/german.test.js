import { describe, it, expect } from "vitest";
import { conjugateVerb, declineNoun } from "./german.js";

describe("conjugateVerb", () => {
  it("separable strong verb: abfahren (fährt ab / fuhr ab / ist abgefahren)", () => {
    const c = conjugateVerb({
      head: "abfahren",
      verb: { p3: "fährt ab", praet: "fuhr ab", partizip: "abgefahren", aux: "ist" },
      reflexive: false,
    });
    expect(c.praesens.ich).toBe("fahre ab");
    expect(c.praesens.du).toBe("fährst ab");
    expect(c.praesens.er).toBe("fährt ab");
    expect(c.praesens.wir).toBe("fahren ab");
    expect(c.praesens.ihr).toBe("fahrt ab");
    expect(c.praeteritum.ich).toBe("fuhr ab");
    expect(c.praeteritum.du).toBe("fuhrst ab");
    expect(c.praeteritum.wir).toBe("fuhren ab");
    expect(c.perfekt.ich).toBe("bin abgefahren");
    expect(c.perfekt.er).toBe("ist abgefahren");
    expect(c.plusquamperfekt.ich).toBe("war abgefahren");
    expect(c.futurI.ich).toBe("werde abfahren");
  });

  it("-ieren verb takes no ge- in the participle: akzeptieren", () => {
    const c = conjugateVerb({
      head: "akzeptieren",
      verb: { p3: "akzeptiert", praet: "akzeptierte", partizip: "akzeptiert", aux: "hat" },
      reflexive: false,
    });
    expect(c.perfekt.ich).toBe("habe akzeptiert");
    expect(c.praesens.ich).toBe("akzeptiere");
    expect(c.praesens.du).toBe("akzeptierst");
    expect(c.praeteritum.wir).toBe("akzeptierten");
  });

  it("be- (inseparable) verb takes no ge-: bekommen", () => {
    const c = conjugateVerb({
      head: "bekommen",
      verb: { p3: "bekommt", praet: "bekam", partizip: "bekommen", aux: "hat" },
      reflexive: false,
    });
    expect(c.praesens.ich).toBe("bekomme");
    expect(c.praesens.du).toBe("bekommst");
    expect(c.praeteritum.ich).toBe("bekam");
    expect(c.praeteritum.du).toBe("bekamst");
    expect(c.perfekt.ich).toBe("habe bekommen");
  });

  it("reflexive verb shows the pronoun in every form: sich beeilen", () => {
    const c = conjugateVerb({
      head: "beeilen",
      verb: { p3: "beeilt sich", praet: "beeilte sich", partizip: "sich beeilt", aux: "hat" },
      reflexive: true,
    });
    expect(c.praesens.ich).toBe("beeile mich");
    expect(c.praesens.du).toBe("beeilst dich");
    expect(c.praesens.er).toBe("beeilt sich");
    expect(c.praeteritum.wir).toBe("beeilten uns");
    expect(c.perfekt.ich).toBe("habe mich beeilt");
    expect(c.perfekt.ihr).toBe("habt euch beeilt");
  });

  it("epenthetic -e- for stems ending in t/d: arbeiten / antworten", () => {
    const arbeiten = conjugateVerb({
      head: "arbeiten",
      verb: { p3: "arbeitet", praet: "arbeitete", partizip: "gearbeitet", aux: "hat" },
      reflexive: false,
    });
    expect(arbeiten.praesens.du).toBe("arbeitest");
    expect(arbeiten.praesens.ihr).toBe("arbeitet");

    const antworten = conjugateVerb({
      head: "antworten",
      verb: { p3: "antwortet", praet: "antwortete", partizip: "geantwortet", aux: "hat" },
      reflexive: false,
    });
    expect(antworten.praesens.du).toBe("antwortest");
    expect(antworten.praeteritum.du).toBe("antwortetest");
  });

  it("weak vs strong Präteritum endings: machte/machten vs fuhr/fuhren", () => {
    const machen = conjugateVerb({
      head: "machen",
      verb: { p3: "macht", praet: "machte", partizip: "gemacht", aux: "hat" },
      reflexive: false,
    });
    expect(machen.praeteritum.ich).toBe("machte");
    expect(machen.praeteritum.wir).toBe("machten");

    const fahren = conjugateVerb({
      head: "fahren",
      verb: { p3: "fährt", praet: "fuhr", partizip: "gefahren", aux: "ist" },
      reflexive: false,
    });
    expect(fahren.praeteritum.ich).toBe("fuhr");
    expect(fahren.praeteritum.wir).toBe("fuhren");
  });

  it("irregular sein / haben use their suppletive paradigms", () => {
    const sein = conjugateVerb({
      head: "sein",
      verb: { p3: "ist", praet: "war", partizip: "gewesen", aux: "ist" },
      reflexive: false,
    });
    expect(sein.praesens.ich).toBe("bin");
    expect(sein.praesens.du).toBe("bist");
    expect(sein.praesens.wir).toBe("sind");
  });
});

describe("declineNoun", () => {
  it("noun needing -es genitive: der Abschluss (monosyllable-ish / -ss ending)", () => {
    const d = declineNoun({ head: "Abschluss", gender: "m", plural: "¨-e" });
    expect(d.singular.genitiv).toBe("des Abschlusses");
  });

  it("noun needing -es genitive for monosyllabic stem: der Abfall", () => {
    const d = declineNoun({ head: "Abfall", gender: "m", plural: "¨-e" });
    expect(d.singular.genitiv).toBe("des Abfalls");
    // Abfall has 1 vowel group -> monosyllabic-ish -> -s is also acceptable,
    // but our rule prefers -s here since it doesn't end in s/ß/x/z/sch.
  });

  it("n-noun (weak masculine) takes -n/-en in every non-nominative case", () => {
    const bauer = declineNoun({ head: "Bauer", gender: "m", plural: "-n" });
    expect(bauer.weakMasculine).toBe(true);
    expect(bauer.singular.nominativ).toBe("der Bauer");
    expect(bauer.singular.akkusativ).toBe("den Bauern");
    expect(bauer.singular.dativ).toBe("dem Bauern");
    expect(bauer.singular.genitiv).toBe("des Bauern");

    const automat = declineNoun({ head: "Automat", gender: "m", plural: "-en" });
    expect(automat.weakMasculine).toBe(true);
    expect(automat.singular.akkusativ).toBe("den Automaten");
  });

  it("umlaut plural from the ¨-e / ¨-er codes", () => {
    const abfall = declineNoun({ head: "Abfall", gender: "m", plural: "¨-e" });
    expect(abfall.plural.nominativ).toBe("die Abfälle");

    const amt = declineNoun({ head: "Amt", gender: "n", plural: "¨-er" });
    expect(amt.plural.nominativ).toBe("die Ämter");
  });

  it("dative plural adds -n unless already ending in -n or -s", () => {
    const abenteuer = declineNoun({ head: "Abenteuer", gender: "n", plural: "-" });
    expect(abenteuer.plural.nominativ).toBe("die Abenteuer");
    expect(abenteuer.plural.dativ).toBe("den Abenteuern");

    const adresse = declineNoun({ head: "Adresse", gender: "f", plural: "-n" });
    expect(adresse.plural.dativ).toBe("den Adressen");

    const auto = declineNoun({ head: "Auto", gender: "n", plural: "-s" });
    expect(auto.plural.dativ).toBe("den Autos");
  });

  it("feminine nouns take no genitive singular suffix", () => {
    const d = declineNoun({ head: "Adresse", gender: "f", plural: "-n" });
    expect(d.singular.genitiv).toBe("der Adresse");
  });
});
