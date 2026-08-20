// German verb conjugation and noun declension, generated at runtime from
// the seed data extracted from the official Wortliste PDF.
//
// Design principle: NEVER invent grammar. Every irregular/lexical form we
// need (3rd-person present, 3rd-person Präteritum, participle, auxiliary,
// plural code) comes straight from the PDF extraction. This module only
// derives the REGULAR, RULE-GOVERNED forms (the other five persons of each
// tense, the declined noun forms) from those seed facts.

const VOWELS = "aeiouäöü";

function endsWithAny(s, suffixes) {
  return suffixes.some((suf) => s.endsWith(suf));
}

// Whether an epenthetic -e- is needed before a consonant-initial ending
// (st/t) -- e.g. "arbeit" + st -> "arbeitest", "regn" + t -> "regnet".
function needsEpenthetic(stem) {
  if (stem.endsWith("t") || stem.endsWith("d")) return true;
  const last = stem[stem.length - 1];
  const prev = stem[stem.length - 2];
  if ((last === "n" || last === "m") && prev && !"lrhmn".includes(prev) && !VOWELS.includes(prev)) {
    return true;
  }
  return false;
}

// Fully irregular present-tense verbs (ich/du/er) common at B1. Everything
// not listed here is derived from the infinitive + the PDF-supplied p3.
const IRREGULAR_PRESENT = {
  sein: { ich: "bin", du: "bist", er: "ist", wir: "sind", ihr: "seid", sie: "sind" },
  haben: { ich: "habe", du: "hast", er: "hat", wir: "haben", ihr: "habt", sie: "haben" },
  werden: { ich: "werde", du: "wirst", er: "wird", wir: "werden", ihr: "werdet", sie: "werden" },
  können: { ich: "kann", du: "kannst", er: "kann", wir: "können", ihr: "könnt", sie: "können" },
  müssen: { ich: "muss", du: "musst", er: "muss", wir: "müssen", ihr: "müsst", sie: "müssen" },
  dürfen: { ich: "darf", du: "darfst", er: "darf", wir: "dürfen", ihr: "dürft", sie: "dürfen" },
  sollen: { ich: "soll", du: "sollst", er: "soll", wir: "sollen", ihr: "sollt", sie: "sollen" },
  wollen: { ich: "will", du: "willst", er: "will", wir: "wollen", ihr: "wollt", sie: "wollen" },
  mögen: { ich: "mag", du: "magst", er: "mag", wir: "mögen", ihr: "mögt", sie: "mögen" },
  wissen: { ich: "weiß", du: "weißt", er: "weiß", wir: "wissen", ihr: "wisst", sie: "wissen" },
};

const IRREGULAR_PRETERITE_AUX = {
  sein: { ich: "war", du: "warst", er: "war", wir: "waren", ihr: "wart", sie: "waren" },
  haben: { ich: "hatte", du: "hattest", er: "hatte", wir: "hatten", ihr: "hattet", sie: "hatten" },
};

const PERSONS = ["ich", "du", "er", "wir", "ihr", "sie"];

// Common separable verb prefixes (used only to sanity-check the split we
// derive from comparing infinitive vs. the PDF's p3 form).
const SEPARABLE_PREFIXES = [
  "ab", "an", "auf", "aus", "bei", "durch", "ein", "empor", "entlang", "fern",
  "fest", "fort", "gegenüber", "her", "herab", "heran", "herauf", "heraus",
  "herbei", "herein", "herüber", "herum", "herunter", "hervor", "hin", "hinab",
  "hinauf", "hinaus", "hinein", "hinüber", "hinunter", "hinzu", "los", "mit",
  "nach", "nieder", "vor", "vorbei", "vorüber", "weg", "weiter", "zu",
  "zurecht", "zurück", "zusammen",
];

function stripFinalN(word) {
  if (word.endsWith("en")) return word.slice(0, -2);
  if (word.endsWith("n")) return word.slice(0, -1);
  return word;
}

/**
 * Split "abfahren" + p3 "fährt ab" into { prefix: "ab", baseInfinitive: "fahren" }.
 * Returns prefix: null if not separable.
 */
function splitSeparable(infinitive, p3) {
  if (!p3 || !p3.includes(" ")) return { prefix: null, baseInfinitive: infinitive };
  const parts = p3.trim().split(/\s+/);
  const lastWord = parts[parts.length - 1];
  if (SEPARABLE_PREFIXES.includes(lastWord) && infinitive.startsWith(lastWord)) {
    return { prefix: lastWord, baseInfinitive: infinitive.slice(lastWord.length) };
  }
  return { prefix: null, baseInfinitive: infinitive };
}

function reflexivePronoun(person) {
  return { ich: "mich", du: "dich", er: "sich", wir: "uns", ihr: "euch", sie: "sich" }[person];
}

const REFLEXIVE_PRONOUNS = new Set(["mich", "dich", "sich", "uns", "euch"]);

// Strip a trailing reflexive pronoun from a PDF-supplied form, e.g.
// "beeilt sich" -> "beeilt", "amüsierte sich" -> "amüsierte". Needed
// before separable-prefix detection so it doesn't mistake "sich" for a
// prefix, and before deriving du/er forms from the bare verb form.
function stripReflexivePronoun(form) {
  if (!form) return form;
  let parts = form.trim().split(/\s+/);
  if (parts.length > 1 && REFLEXIVE_PRONOUNS.has(parts[parts.length - 1])) {
    parts = parts.slice(0, -1);
  } else if (parts.length > 1 && REFLEXIVE_PRONOUNS.has(parts[0])) {
    // e.g. participle written as "sich beeilt" (aux comes before it)
    parts = parts.slice(1);
  }
  return parts.join(" ");
}

function withExtras(base, { reflexive, prefix }) {
  const out = {};
  for (const p of PERSONS) {
    let form = base[p];
    if (reflexive) form += " " + reflexivePronoun(p);
    if (prefix) form += " " + prefix;
    out[p] = form;
  }
  return out;
}

function conjugatePresentPersons(infinitive, p3raw) {
  const p3 = stripReflexivePronoun(p3raw);
  const { prefix, baseInfinitive } = splitSeparable(infinitive, p3);
  const p3Bare = prefix ? p3.trim().split(/\s+/)[0] : p3;
  const infinBare = prefix ? baseInfinitive : infinitive;

  if (IRREGULAR_PRESENT[infinBare]) {
    return { forms: IRREGULAR_PRESENT[infinBare], prefix };
  }

  const stem = stripFinalN(infinBare);

  // du/er derived from the PDF-verified p3 (already carries any
  // vowel change, e.g. fährt, nimmt, läuft).
  let p3Stem = p3Bare;
  if (p3Stem.endsWith("t")) p3Stem = p3Stem.slice(0, -1);

  const forms = {
    ich: stem + "e",
    du: p3Stem + (needsEpenthetic(p3Stem) ? "est" : "st"),
    er: p3Bare,
    wir: infinBare,
    ihr: stem + (needsEpenthetic(stem) ? "et" : "t"),
    sie: infinBare,
  };
  return { forms, prefix };
}

function conjugatePreteritePersons(infinitive, praetRaw) {
  const praet = stripReflexivePronoun(praetRaw);
  const { prefix, baseInfinitive } = splitSeparable(infinitive, praet);
  const infinBare = prefix ? baseInfinitive : infinitive;
  const bareStem = stripFinalN(infinBare);

  if (IRREGULAR_PRETERITE_AUX[infinBare]) {
    return { forms: IRREGULAR_PRETERITE_AUX[infinBare], prefix };
  }

  const stem = prefix ? praet.trim().split(/\s+/)[0] : praet;

  const forms = {
    ich: stem,
    du: stem + (needsEpenthetic(stem) && !stem.endsWith("te") && !stem.endsWith("de") ? "est" : "st"),
    er: stem,
    wir: stem + (stem.endsWith("e") ? "n" : "en"),
    ihr: stem + (needsEpenthetic(stem) && !stem.endsWith("te") && !stem.endsWith("de") ? "et" : stem.endsWith("e") ? "t" : "t"),
    sie: stem + (stem.endsWith("e") ? "n" : "en"),
  };
  void bareStem;
  return { forms, prefix };
}

/**
 * Build the full conjugation table for a verb entry
 * ({ head, verb: { p3, praet, partizip, aux }, reflexive }).
 */
export function conjugateVerb(entry) {
  const { head: infinitive, verb, reflexive } = entry;
  if (!verb) return null;
  const { p3, praet, partizip, aux } = verb;

  const present = conjugatePresentPersons(infinitive, p3);
  const preterite = conjugatePreteritePersons(infinitive, praet);
  const prefix = present.prefix || preterite.prefix;

  const praesens = withExtras(present.forms, { reflexive, prefix });
  const praeteritum = withExtras(preterite.forms, { reflexive, prefix });

  // aux is the PDF-supplied token "hat" / "ist" / "hat/ist" -- map to the
  // actual auxiliary infinitive to conjugate it in all persons.
  const auxToken = (aux || "hat").split("/")[0];
  const auxInfinitive = auxToken === "ist" ? "sein" : "haben";
  const auxPresent = IRREGULAR_PRESENT[auxInfinitive];
  const auxPreterite = IRREGULAR_PRETERITE_AUX[auxInfinitive];

  const bareParticiple = stripReflexivePronoun(partizip);

  const perfekt = {};
  const plusquamperfekt = {};
  const futurI = {};
  for (const p of PERSONS) {
    const refl = reflexive ? " " + reflexivePronoun(p) : "";
    perfekt[p] = `${auxPresent[p]}${refl} ${bareParticiple}`;
    plusquamperfekt[p] = `${auxPreterite[p]}${refl} ${bareParticiple}`;
    const werdenForm = IRREGULAR_PRESENT.werden[p];
    futurI[p] = `${werdenForm}${refl} ${infinitive}`;
  }

  return { praesens, praeteritum, perfekt, plusquamperfekt, futurI, aux, prefix, reflexive: !!reflexive };
}

// ---------------------------------------------------------------------
// Noun declension
// ---------------------------------------------------------------------

const N_NOUN_LIST = new Set([
  "Herr", "Mensch", "Nachbar", "Kollege", "Junge", "Kunde", "Name", "Gedanke",
  "Friede", "Wille", "Buchstabe", "Automat", "Präsident", "Elefant",
  "Polizist", "Journalist", "Tourist", "Pilot", "Astronaut", "Bauer",
  "Held", "Fotograf", "Philosoph", "Biologe", "Kollege", "Experte",
  "Interessent", "Praktikant", "Student", "Patient", "Klient", "Kandidat",
  "Assistent", "Dozent", "Konsument", "Produzent", "Demonstrant",
]);

const N_NOUN_SUFFIXES = ["ant", "ent", "ist", "oge", "nom", "graf", "soph", "arch"];

function isWeakMasculineNoun(entry) {
  if (entry.gender !== "m") return false;
  if (!entry.plural || !["-n", "-en"].includes(entry.plural)) return false;
  if (N_NOUN_LIST.has(entry.head)) return true;
  return entry.head.endsWith("e") || endsWithAny(entry.head, N_NOUN_SUFFIXES);
}

function applyPluralCode(head, code) {
  if (!code || code === "(Pl.)") return head;
  if (code === "-") return umlaut(head, false);
  if (code.startsWith("¨")) {
    const suffix = code.slice(1).replace(/^-/, "");
    return umlaut(head, true) + suffix;
  }
  if (code.includes("/")) {
    // multiple valid forms, e.g. "-s/-e" -- use the first for the
    // generated table and let the UI note alternates if desired.
    return applyPluralCode(head, code.split("/")[0]);
  }
  const suffix = code.replace(/^-/, "");
  return head + suffix;
}

function umlaut(word, apply) {
  if (!apply) return word;
  const map = { a: "ä", o: "ö", u: "ü", A: "Ä", O: "Ö", U: "Ü" };
  // umlaut the LAST occurrence of a/o/u (or "au" -> "äu") in the stem
  const lower = word.toLowerCase();
  const auIdx = lower.lastIndexOf("au");
  if (auIdx !== -1) {
    const replacement = word[auIdx] === word[auIdx].toUpperCase() ? "Äu" : "äu";
    return word.slice(0, auIdx) + replacement + word.slice(auIdx + 2);
  }
  for (let i = word.length - 1; i >= 0; i--) {
    if (map[word[i]]) {
      return word.slice(0, i) + map[word[i]] + word.slice(i + 1);
    }
  }
  return word;
}

function genitiveSingularSuffix(stem) {
  if (endsWithAny(stem, ["s", "ß", "x", "z", "sch"])) return "es";
  // monosyllabic stems also prefer -es (des Manns/Mannes, des Kinds/Kindes)
  const vowelGroups = (stem.match(/[aeiouäöüAEIOUÄÖÜ]+/g) || []).length;
  if (vowelGroups <= 1) return "es";
  return "s";
}

/**
 * Build the declension table for a noun entry
 * ({ head, gender, plural }). gender must be 'm' | 'f' | 'n'.
 */
export function declineNoun(entry) {
  const { head, gender, plural } = entry;
  if (!gender) return null;

  const weak = isWeakMasculineNoun(entry);
  const article = { m: "der", f: "die", n: "das" }[gender];
  const articleAkk = gender === "m" ? "den" : article;
  const articleDat = gender === "f" ? "der" : gender === "m" ? "dem" : "dem";
  const articleGen = gender === "f" ? "der" : gender === "m" ? "des" : "des";

  let singular;
  if (weak) {
    // Nouns already ending in an unstressed syllable (-e, -er, -el) just
    // add -n (Kunde->Kunden, Bauer->Bauern); others add -en (Mensch->
    // Menschen, Präsident->Präsidenten).
    const weakSuffix = endsWithAny(head, ["e", "er", "el"]) ? "n" : "en";
    singular = {
      nominativ: `${article} ${head}`,
      akkusativ: `${articleAkk} ${head}${weakSuffix}`,
      dativ: `${articleDat} ${head}${weakSuffix}`,
      genitiv: `${articleGen} ${head}${weakSuffix}`,
    };
  } else {
    const genSuffix = gender === "f" ? "" : genitiveSingularSuffix(head);
    singular = {
      nominativ: `${article} ${head}`,
      akkusativ: `${articleAkk} ${head}`,
      dativ: `${articleDat} ${head}`,
      genitiv: `${articleGen} ${head}${genSuffix}`,
    };
  }

  const pluralNoun = plural ? applyPluralCode(head, plural) : null;
  let pluralForms = null;
  if (pluralNoun) {
    const datPlural = endsWithAny(pluralNoun, ["n", "s"]) ? pluralNoun : pluralNoun + "n";
    pluralForms = {
      nominativ: `die ${pluralNoun}`,
      akkusativ: `die ${pluralNoun}`,
      dativ: `den ${datPlural}`,
      genitiv: `der ${pluralNoun}`,
    };
  }

  return { singular, plural: pluralForms, weakMasculine: weak };
}
