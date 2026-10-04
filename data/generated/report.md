# Glossary extraction report NWn_B1_Glossar_Englisch (1).pdf

Every entry is listed in PDF order. `id` matches the JSON; `page`/`label` locate it in the PDF.

| Chapter | Entries | OK | WARN | ERROR |
|---|---|---|---|---|
| 1 | 128 | 119 | 9 | 0 |
| 2 | 149 | 118 | 27 | 4 |
| 3 | 202 | 183 | 17 | 2 |
| 4 | 182 | 155 | 22 | 5 |
| 5 | 210 | 181 | 20 | 9 |
| 6 | 142 | 129 | 11 | 2 |
| 7 | 162 | 143 | 15 | 4 |
| 8 | 199 | 178 | 17 | 4 |
| 9 | 171 | 146 | 24 | 1 |
| 10 | 179 | 158 | 19 | 2 |
| 11 | 127 | 104 | 22 | 1 |
| 12 | 133 | 112 | 16 | 5 |

## Needs checking (258)

| id | page | label | level | German (parsed) | English | raw OCR (German) | issues |
|---|---|---|---|---|---|---|---|
| ch1-021 | 1 | 2 | WARN | der Urlaubsgruß — die Urlaubsgrüße | greetings from abroad | der YrlaubsgruB, "-e | WARN auto_corrected: 'Yrlaubsgruß' -> 'Urlaubsgruß' (checked with Wiktionary) |
| ch1-029 | 1 | 3b | WARN | der Urlaubstyp — die Urlaubstypen | holiday type | der rlaubstyp, -en | WARN auto_corrected: 'Rlaubstyp' -> 'Urlaubstyp' (checked with Wiktionary) |
| ch1-036 | 1 | 4a | WARN | die Urlaubsplanung — die Urlaubsplanungen | holiday planning | die rlaubsplanung, -en | WARN auto_corrected: 'Rlaubsplanung' -> 'Urlaubsplanung' (checked with Wiktionary) |
| ch1-037 | 1 | 4a | WARN | wieso | why | wies | WARN auto_corrected: 'wies' -> 'wieso' (second OCR model, longer reading) |
| ch1-061 | 2 | 8b | WARN | enttäuscht | disappointed | enttáuscht | WARN auto_corrected: 'enttáuscht' -> 'enttäuscht' (checked with Wiktionary) |
| ch1-080 | 2 | 9a | WARN | schiefgehen | to go wrong | schieflgehen, es geht schief, ging schief, ist schiefgegangen | WARN auto_corrected: 'schieflgehen' -> 'schiefgehen' (checked with Wiktionary) |
| ch1-093 | 3 | 12b | WARN | der Tiergarten — die Tiergärten | z00 | der Tiergarten, "- | WARN ocr_low_confidence: OCR confidence 0.63 < 0.85 |
| ch1-098 | 3 | 13a | WARN | begeistert | enthusiatic | begeistert | WARN english_spelling: unknown English word(s): enthusiatic |
| ch1-122 | 3 | 13b | WARN | mitarbeiten | to assist | mitlarbeiten | WARN auto_corrected: 'mitlarbeiten' -> 'mitarbeiten' (checked with Wiktionary) |
| ch2-010 | 4 | 1b | WARN | der Transport — die Transport | transport | der Transport, - | WARN plural_mismatch: plural 'die Transport' but Wiktionary has: Transporte |
| ch2-011 | 4 | 1b UB | WARN | anschließen | to connect | anlschlieBen, er schlieBt an, schloss an, hat angeschlossen (Er schlieBt den Lautsprecher an den Laptop an.) | WARN auto_corrected: 'anlschließen' -> 'anschließen' (checked with Wiktionary) |
| ch2-012 | 4 | 1b UB | WARN | aufladen | to charge | auflladen, er ládt auf, lud auf, hat aufgeladen | WARN auto_corrected: 'auflladen' -> 'aufladen' (checked with Wiktionary) |
| ch2-014 | 4 | 1b UB | WARN | einsetzen | to insert | einlsetzen (eine Batterie ins Handy einsetzen) | WARN auto_corrected: 'einlsetzen' -> 'einsetzen' (checked with Wiktionary) |
| ch2-015 | 4 | 1b UB | WARN | einstecken | to plug (in) | einlstecken | WARN auto_corrected: 'einlstecken' -> 'einstecken' (checked with Wiktionary) |
| ch2-024 | 4 | 3a | WARN | herunterfallen | to fall | herunterlfallen, er fällt herunter, fiel herunter, ist heruntergefallen | WARN auto_corrected: 'herunterlfallen' -> 'herunterfallen' (checked with Wiktionary) |
| ch2-026 | 4 | 3a | WARN | kaputtgehen | to break to be worth it | kaputtlgehen, er geht kaputt, ging kaputt, ist kaputtgegangen kommen, er kommt, kam, ist gekommen to come (to come onto the market (auf den Markt kommen) lohnen (sich) | WARN auto_corrected: 'kaputtlgehen' -> 'kaputtgehen' (checked with Wiktionary) |
| ch2-032 | 4 | 3e | WARN | nähen | to sew | nähen | WARN ocr_low_confidence: OCR confidence 0.83 < 0.85 |
| ch2-037 | 5 | 4a | WARN | die Powerbank — die Powerbanks | powerbank | die Powerbank, -s | WARN english_spelling: unknown English word(s): powerbank |
| ch2-041 | 5 | 4b | ERROR | ssipos | so that | ssipos | ERROR unknown_word: 'ssipos' not in Wiktionary; did you mean: assipos, ossipos |
| ch2-043 | 5 | 5a UB | WARN | anhaben | to wear | anlhaben, er hat an, hatte an, hat angehabt | WARN auto_corrected: 'anlhaben' -> 'anhaben' (checked with Wiktionary) |
| ch2-044 | 5 | 5a UB | WARN | anschalten | to switch on | an/schalten | WARN auto_corrected: 'an/schalten' -> 'anschalten' (checked with Wiktionary) |
| ch2-045 | 5 | 5a UB | WARN | dabeihaben | to have sth with oneself | dabeihaben | WARN english_spelling: unknown English word(s): sth |
| ch2-051 | 5 | 5a UB | WARN | das Girokonto — die Girokontokonten | checking account | das Girokonto, -konten | WARN plural_mismatch: plural 'die Girokontokonten' but Wiktionary has: Girokonten, Girokontos, Girokonti |
| ch2-053 | 5 | 5a UB | WARN | nachsehen | to have a look | nach/sehen, er sieht nach, sah nach, hat nachgesehen | WARN auto_corrected: 'nach/sehen' -> 'nachsehen' (checked with Wiktionary) |
| ch2-058 | 5 | 5a UB | ERROR | zurúcklgehen | to go back | zurúcklgehen, er geht zurück, ging zurück, ist zurückgegangen | ERROR unknown_word: 'zurúcklgehen' not in Wiktionary |
| ch2-059 | 5 | 5a UB | ERROR | zurúckzahlen | to pay back | zurúckzahlen | ERROR unknown_word: 'zurúckzahlen' not in Wiktionary |
| ch2-075 | 5 | 6b | WARN | hinsehen | to look | hinlsehen, er sieht hin, sah hin, hat hingesehen | WARN auto_corrected: 'hinlsehen' -> 'hinsehen' (checked with Wiktionary) |
| ch2-081 | 6 | 6b | WARN | die Nutzung — die Nutzungen | usage | die Nutzung, -en sicher (Durch die Alarmanlage fühlen sich safe (The inhabitants feel safe because of the | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Nutzungen |
| ch2-093 | 6 | 6d | WARN | anpassen | to adjust | anIpassen (an + A.) | WARN auto_corrected: 'anIpassen' -> 'anpassen' (checked with Wiktionary) |
| ch2-094 | 6 | 6d | WARN | einschalten | to switch on | ein/schalten | WARN auto_corrected: 'ein/schalten' -> 'einschalten' (checked with Wiktionary) |
| ch2-095 | 6 | 6d | WARN | Hightech | high tech | Hightech (Sg. ohne Artikel) | WARN english_spelling: unknown English word(s): tech |
| ch2-099 | 6 | 7a | ERROR | zo | despite | (9 +) zo | WARN ocr_low_confidence: OCR confidence 0.77 < 0.85; ERROR unknown_word: 'zo' not in Wiktionary |
| ch2-113 | 6 | 9c | WARN | seltsam | ppo | seltsam | WARN english_spelling: unknown English word(s): ppo |
| ch2-115 | 6 | 10a | WARN | davon | hier in etwa: of it | davon | WARN english_spelling: unknown English word(s): etwa, hier |
| ch2-121 | 6 | 10b | WARN | ansprechen | to speak to | anlsprechen, er spricht an, sprach an, hat angesprochen (Werbung spricht sehr oft Gefühle an.) | WARN auto_corrected: 'anlsprechen' -> 'ansprechen' (checked with Wiktionary) |
| ch2-125 | 7 | 10b | WARN | dabei | hier keine bersetzung | dabei (Werbung hilft dabei, dass Kunden bestimmte Produkte kaufen.) | WARN english_spelling: unknown English word(s): bersetzung, hier, keine |
| ch2-130 | 7 | 10b | WARN | das Kaufverhalten — die Kaufverhalten | shopping behaviour | das Kaufverhalten, - | WARN english_spelling: unknown English word(s): behaviour |
| ch2-135 | 7 | 10b | WARN | das Verhalten — die Verhalten | behaviour | das Verhalten, - | WARN english_spelling: unknown English word(s): behaviour |
| ch2-141 | 7 | 11 | WARN | Finnland | Finnland | Finnland | WARN english_spelling: unknown English word(s): finnland |
| ch2-143 | 7 | 11 | WARN | das Kinderprodukt — die Kinderprodukte | children's product | das Kinderprodukt, -e | WARN english_spelling: unknown English word(s): children's |
| ch3-009 | 7 | 1a | WARN | die Hygiene | hygene | die Hygiene (Sg.) | WARN english_spelling: unknown English word(s): hygene |
| ch3-018 | 7 | 1a | WARN | die Unterrichtsform — die Unterrichtsformen | form of instruction | die Vnterrichtsform, -en | WARN auto_corrected: 'Vnterrichtsform' -> 'Unterrichtsform' (checked with Wiktionary) |
| ch3-024 | 8 | 2 UB | WARN | die Diät — die Diäten | diet | die Diát, -en | WARN auto_corrected: 'Diát' -> 'Diät' (checked with Wiktionary) |
| ch3-025 | 8 | 2 UB | WARN | sich ernähren | to eat, to nourish | ernáhren (sich) | WARN auto_corrected: 'sich ernáhren' -> 'sich ernähren' (checked with Wiktionary) |
| ch3-026 | 8 | 2 UB | WARN | die Ernährung | nutrition | die Ernáhrung (Sg.) | WARN auto_corrected: 'Ernáhrung' -> 'Ernährung' (checked with Wiktionary) |
| ch3-032 | 8 | 2 UB | WARN | das Nahrungsmittel — die Nahrungsmittel | pooj | das Nahrungsmittel, - | WARN ocr_low_confidence: OCR confidence 0.82 < 0.85; WARN english_spelling: unknown English word(s): pooj |
| ch3-043 | 8 | 3b | WARN | gewohnt | 1onsn | gewohnt | WARN ocr_low_confidence: OCR confidence 0.76 < 0.85 |
| ch3-060 | 8 | 3c | WARN | sich einsetzen | to support | ein/setzen (sich) (für/gegen + A.) (sich für den Schutz der Wildtiere einsetzen) | WARN auto_corrected: 'sich ein/setzen' -> 'sich einsetzen' (checked with Wiktionary) |
| ch3-081 | 9 | 3c | WARN | ehren | to honour | ehren | WARN english_spelling: unknown English word(s): honour |
| ch3-085 | 9 | 3c | WARN | gelähmt | paralyzed | geláhmt | WARN auto_corrected: 'geláhmt' -> 'gelähmt' (checked with Wiktionary) |
| ch3-108 | 9 | 3c | WARN | der Weltmeister — die Weltmeistere | world champion (m) | der Weltmeister, -e | WARN plural_mismatch: plural 'die Weltmeistere' but Wiktionary has: Weltmeister |
| ch3-112 | 9 | 4b | ERROR | das Vergangene | past | das Vergangene (Sg.) | ERROR unknown_word: 'Vergangene' not in Wiktionary |
| ch3-135 | 10 | 6a | WARN | das Klinikum | clinic, hospital | das Klinikum, Kliniken | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it) |
| ch3-145 | 10 | 6d | WARN | aufgeben | to forsake | auflgeben, er gibt auf, gab auf, hat aufgegeben | WARN auto_corrected: 'auflgeben' -> 'aufgeben' (checked with Wiktionary) |
| ch3-148 | 10 | 6d | WARN | wegziehen | to move away | weglziehen, er zieht weg, zog weg, ist weggezogen | WARN auto_corrected: 'weglziehen' -> 'wegziehen' (checked with Wiktionary) |
| ch3-166 | 11 | 9c | WARN | aussuchen | to choose | aus/suchen | WARN auto_corrected: 'aus/suchen' -> 'aussuchen' (checked with Wiktionary) |
| ch3-169 | 11 | 10a | WARN | das Benehmen | behaviour | das Benehmen (Sg.) | WARN english_spelling: unknown English word(s): behaviour |
| ch3-171 | 11 | 10b | WARN | aufhalten | to hold open | auflhalten, er hält auf, hielt auf, hat aufgehalten (Es ist höflich, anderen Menschen die Tür aufzuhalten.) | WARN auto_corrected: 'auflhalten' -> 'aufhalten' (checked with Wiktionary) |
| ch3-179 | 11 | 10b | ERROR | die Gescháftsfrau — die Gescháftsfrauen | business woman | die Gescháftsfrau, -en | ERROR unknown_word: 'Gescháftsfrau' not in Wiktionary |
| ch4-002 | 12 | 1b | WARN | austragen | to deliver (to deliver post) | ausltragen, er trágt aus, trug aus, hat ausgetragen (Post austragen) | WARN auto_corrected: 'ausltragen' -> 'austragen' (checked with Wiktionary) |
| ch4-003 | 12 | 1b | WARN | der Briefträger — die Briefträger | postal carrier (m) | der Brieftráger, - | WARN auto_corrected: 'Brieftráger' -> 'Briefträger' (checked with Wiktionary) |
| ch4-011 | 12 | 1b | WARN | die Mechatronikern — die Mechatronikernnen | mechanical electronics engineer (f) | die Mechatronikerin, -nen | WARN auto_corrected: 'Mechatronikerin' -> 'Mechatronikern' (checked with Wiktionary) |
| ch4-013 | 12 | 1b | WARN | zustellen | to deliver | zulstellen | WARN auto_corrected: 'zulstellen' -> 'zustellen' (checked with Wiktionary) |
| ch4-016 | 12 | 1a UB | WARN | anbauen | to cultivate, to attach | an/bauen | WARN auto_corrected: 'an/bauen' -> 'anbauen' (checked with Wiktionary) |
| ch4-018 | 12 | 1a UB | WARN | die Anlage — die Anlagen | attachment, facility, ehibit | die Anlage, -n | WARN english_spelling: unknown English word(s): ehibit |
| ch4-021 | 12 | 1a UB | WARN | der Elektroingenieur — die Elektroingenieur | electrical engineer (m) | der Elektroingenieur, - | WARN plural_mismatch: plural 'die Elektroingenieur' but Wiktionary has: Elektroingenieure |
| ch4-045 | 12 | 1a UB | WARN | das Urteil — die Urteile | verdict | das Yrteil, -e | WARN auto_corrected: 'Yrteil' -> 'Urteil' (checked with Wiktionary) |
| ch4-050 | 12 | 1c | WARN | ernst nehmen | to take sth seriously | ernst nehmen, er nimmt ernst, nahm ernst, hat ernst genommen | WARN english_spelling: unknown English word(s): sth |
| ch4-051 | 12 | 3 | WARN | aushalten | to cope (with) | auslhalten, er hált aus, hielt aus, hat ausgehalten | WARN auto_corrected: 'auslhalten' -> 'aushalten' (checked with Wiktionary) |
| ch4-055 | 13 | 5a | WARN | freinehmen | to take time off | freilnehmen, er nimmt frei, nahm frei, hat freigenommen | WARN auto_corrected: 'freilnehmen' -> 'freinehmen' (checked with Wiktionary) |
| ch4-059 | 13 | 6a UB | WARN | färben | to colour | färben | WARN english_spelling: unknown English word(s): colour |
| ch4-070 | 13 | 6c | ERROR | schútten | to spill | schútten (Peinlich, heute habe ich einem Kollegen aus Versehen Kaffee über das Hemd geschüttet.) | ERROR unknown_word: 'schútten' not in Wiktionary |
| ch4-073 | 13 | 6c | ERROR | zusammen/sitzen | to sit with | zusammen/sitzen, er sitzt zusammen, saß zusammen, ist zusammengesessen | ERROR unknown_word: 'zusammen/sitzen' not in Wiktionary |
| ch4-080 | 13 | 8b | ERROR | abschreiben |  | ablschreiben, er schreibt ab, schrieb ab, to copy hat abgeschrieben | ERROR no_english: English translation is empty; WARN auto_corrected: 'ablschreiben' -> 'abschreiben' (checked with Wiktionary) |
| ch4-082 | 13 | 8b | WARN | ankommen | to depend on | anlkommen (auf + D.), es kommt an, kam an, ist angekommen | WARN auto_corrected: 'anlkommen' -> 'ankommen' (checked with Wiktionary) |
| ch4-083 | 13 | 8b | WARN | aussagekräftig | meaningful | aussagekráftig | WARN auto_corrected: 'aussagekráftig' -> 'aussagekräftig' (checked with Wiktionary) |
| ch4-089 | 13 | 8b | WARN | darum | hier keine direkte bersetzung | darum(Könntest du dich darum kümmern, dass unser Kunde pünktlich zum Flughafen kommt?) | WARN english_spelling: unknown English word(s): bersetzung, direkte, hier, keine |
| ch4-101 | 14 | 8b | ERROR | mit/schicken | to send along | mit/schicken | ERROR unknown_word: 'mit/schicken' not in Wiktionary |
| ch4-126 | 14 | 10a | ERROR | kleinmachen | to belittle oneself | kleinmachen | ERROR unknown_word: 'kleinmachen' not in Wiktionary |
| ch4-127 | 14 | 10a | WARN | überzeugen | to convince | úberzeugen (von + D.) | WARN auto_corrected: 'úberzeugen' -> 'überzeugen' (checked with Wiktionary) |
| ch4-133 | 14 | 12a | WARN | der Nachtportier | night porter (m) | der Nachtportier, -s/-e | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it) |
| ch4-142 | 15 | 12b | WARN | vorbeikommen | to come over in person | vorbeilkommen, er kommt vorbei, kam vorbei, ist vorbeigekommen | WARN auto_corrected: 'vorbeilkommen' -> 'vorbeikommen' (checked with Wiktionary) |
| ch4-155 | 15 | 13b | WARN | die Fähigkeit — die Fähigkeiten | ability | die Föhigkeit, -en | WARN auto_corrected: 'Föhigkeit' -> 'Fähigkeit' (checked with Wiktionary) |
| ch4-156 | 15 | 13b | WARN | der Faktor — die Faktoren | factor | der Faktor, Faktoren | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Faktoren |
| ch4-178 | 15 | 13b | WARN | vorziehen | to prefer | vorlziehen, er zieht vor, zog vor, hat vorgezogen | WARN auto_corrected: 'vorlziehen' -> 'vorziehen' (checked with Wiktionary) |
| ch4-179 | 15 | 13b | WARN | der Wecker — die Wecker | alarm to count numerous furious to collect (to set the alarm clock; Punctuality counts as one of the most important characteristics of an applicant.) | der Wecker, - (den Wecker stellen záhlen (zu + D.) (Pünktlichkeit záhlt zu den wichtigsten Eigenschaften eines Bewerbers.) zghlreich zornig zusammen/stellen | WARN ocr_low_confidence: OCR confidence 0.59 < 0.85; WARN english_from_alt: used second OCR model: 'alarm to count numerous srouns to collect (to set the alarm clock; Punctuality counts as one of the most important characteristics of an applicant.)' -> 'alarm to count numerous furious to collect (to set the alarm clock; Punctuality counts as one of the most important characteristics of an applicant.)' |
| ch5-007 | 16 | 1a | WARN | europäisch | European | europáisch | WARN auto_corrected: 'europáisch' -> 'europäisch' (checked with Wiktionary) |
| ch5-012 | 16 | 1a | WARN | mitrechnen | to include | mitlrechnen | WARN auto_corrected: 'mitlrechnen' -> 'mitrechnen' (checked with Wiktionary) |
| ch5-014 | 16 | 1a | WARN | der Rekord — die Rekord | record | der Rekord, - | WARN plural_mismatch: plural 'die Rekord' but Wiktionary has: Rekorde |
| ch5-033 | 16 | 2b UB | ERROR | durch/setzen | to push through, to force | durch/setzen | ERROR unknown_word: 'durch/setzen' not in Wiktionary |
| ch5-034 | 16 | 2b UB | WARN | durchstreichen | to cross out | durchlstreichen, er streicht durch, strich durch, hat durchgestrichen | WARN auto_corrected: 'durchlstreichen' -> 'durchstreichen' (checked with Wiktionary) |
| ch5-046 | 17 | 2b UB | WARN | ökologisch | ecological | 8kologisch | WARN auto_corrected: '8kologisch' -> 'ökologisch' (checked with Wiktionary) |
| ch5-047 | 17 | 2b UB | WARN | die Ressource — die Ressourcen | ressource | die Ressource, -n | WARN english_spelling: unknown English word(s): ressource |
| ch5-048 | 17 | 2b UB | WARN | schädlich | harmful | schádlich | WARN auto_corrected: 'schádlich' -> 'schädlich' (checked with Wiktionary) |
| ch5-050 | 17 | 2b UB | WARN | der Umweltschutz | environmental protection | der Vmweltschutz (Sg.) | WARN auto_corrected: 'Vmweltschutz' -> 'Umweltschutz' (checked with Wiktionary) |
| ch5-051 | 17 | 2b UB | WARN | die Umweltverschmutzung | pollution (environmental) | die Vmweltverschmutzung (Sg.) | WARN auto_corrected: 'Vmweltverschmutzung' -> 'Umweltverschmutzung' (checked with Wiktionary) |
| ch5-062 | 17 | 4a | WARN | die Glasflasche — die Glasflaschen | glas bottle | die Glasflasche, -n | WARN english_spelling: unknown English word(s): glas |
| ch5-076 | 17 | 4b | WARN | die Ökobilanz — die Ökobilanzen | ecobalance, life-cycle assessment | die ökobilanz, -en | WARN english_spelling: unknown English word(s): ecobalance |
| ch5-095 | 18 | 8a | ERROR | erháltlich | to be available | erháltlich | ERROR unknown_word: 'erháltlich' not in Wiktionary |
| ch5-114 | 18 | 8a | WARN | das Solarpanel — die Solarpanel | solar panel | das Solarpanel, - | WARN plural_mismatch: plural 'die Solarpanel' but Wiktionary has: Solarpanels |
| ch5-116 | 18 | 8a | ERROR | das Start-up — die Start-ups | start-up | das Start-up, -s | ERROR unknown_word: 'Up' not in Wiktionary |
| ch5-124 | 18 | 8a | ERROR | zurück/bekommen | to get back | zurück/bekommen, er bekommt zurück, bekam zurück, hat zurückbekommen | ERROR unknown_word: 'zurück/bekommen' not in Wiktionary |
| ch5-125 | 18 | 8a | ERROR | zurúck/bringen | to bring back | zurúck/bringen, er bringt zurúck, brachte zurück, hat zurückgebracht | ERROR unknown_word: 'zurúck/bringen' not in Wiktionary |
| ch5-136 | 19 | 10 | ERROR | die Ansicht — die Ansichten |  | die Ansicht, -en (Ich bin der Ansicht, dass opinion (I'm of the opinion, that...) ...) | ERROR no_english: English translation is empty |
| ch5-137 | 19 | 10 | WARN | das Argument — die Argument | argument | das Argument, - | WARN plural_mismatch: plural 'die Argument' but Wiktionary has: Argumente |
| ch5-141 | 19 | 10 | ERROR | tsuösun | for free | tsuösun | WARN ocr_low_confidence: OCR confidence 0.83 < 0.85; ERROR unknown_word: 'tsuösun' not in Wiktionary |
| ch5-142 | 19 | 10 | WARN | die Uni-Mensa | university cafeteria | die Uni-Mensa, -Mensen | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it) |
| ch5-162 | 19 | 12a | ERROR | das Gedáchtnis | memory | das Gedáchtnis (Sg.) | ERROR unknown_word: 'Gedáchtnis' not in Wiktionary |
| ch5-167 | 19 | 13a | WARN | aufklären | to inform | aufkláren | WARN auto_corrected: 'aufkláren' -> 'aufklären' (checked with Wiktionary) |
| ch5-175 | 19 | 13a | ERROR | geschútzt | protected | geschútzt | ERROR unknown_word: 'geschútzt' not in Wiktionary |
| ch5-186 | 20 | 13a | WARN | das Nachbardorf — die Nachbardörfer | neighbouring village | das Nachbardorf, "-er | WARN english_spelling: unknown English word(s): neighbouring |
| ch5-199 | 20 | 13c | WARN | sich anschließen | to follow | anlschlieBen (sich), er schlieBt an, schloss an, hat angeschlossen (Beim Plogging kann man sich einer Gruppe anschlieBen.) | WARN auto_corrected: 'sich anlschließen' -> 'sich anschließen' (checked with Wiktionary) |
| ch5-200 | 20 | 13c | WARN | aufheben | to pick up | auflheben, er hebt auf, hob auf, hat aufgehoben | WARN auto_corrected: 'auflheben' -> 'aufheben' (checked with Wiktionary) |
| ch5-203 | 20 | 13c | WARN | das Plogging | plogging | das Plogging (Sg.) | WARN english_spelling: unknown English word(s): plogging |
| ch5-210 | 20 | 13e | WARN | die Umweltaktion — die Umweltaktionen | environmental campaign | die mweltaktion, -en | WARN auto_corrected: 'Mweltaktion' -> 'Umweltaktion' (checked with Wiktionary) |
| ch6-019 | 21 | 3a | WARN | sich vornehmen | to plan to do sth | vorlnehmen (sich), er nimmt vor, nahm vor, hat vorgenommen | WARN auto_corrected: 'sich vorlnehmen' -> 'sich vornehmen' (checked with Wiktionary); WARN english_spelling: unknown English word(s): sth |
| ch6-045 | 21 | 5b | WARN | der Pädagoge — die Pädagogen | educator (m) | der Pádagoge, -n | WARN auto_corrected: 'Pádagoge' -> 'Pädagoge' (checked with Wiktionary) |
| ch6-050 | 21 | 7b | WARN | sich aufhalten | to be | auflhalten (sich), er hált auf, hielt auf, hat aufgehalten (Sie hált sich viel in der Küche der WG auf.) | WARN auto_corrected: 'sich auflhalten' -> 'sich aufhalten' (checked with Wiktionary) |
| ch6-051 | 21 | 7b | WARN | ausgehen | to assume | auslgehen (von + D.), er geht aus, ging aus, ist ausgegangen (Experten gehen davon aus, dass ...) | WARN auto_corrected: 'auslgehen' -> 'ausgehen' (checked with Wiktionary) |
| ch6-069 | 22 | 7b | WARN | das Mikro-Wohnen | mikro living | das Mikro-Wohnen (Sg.) | WARN english_spelling: unknown English word(s): mikro |
| ch6-086 | 22 | 7c UB | ERROR | die Kindertagesstátte — die Kindertagesstátten | kindergarten | die Kindertagesstátte, -n | ERROR unknown_word: 'Kindertagesstátte' not in Wiktionary |
| ch6-089 | 22 | 7c UB | WARN | der Tierpark — die Tierparks | z00 | der Tierpark, -s | WARN ocr_low_confidence: OCR confidence 0.78 < 0.85 |
| ch6-093 | 22 | 8a | WARN | umformulieren | to rephrase | um/formulieren | WARN auto_corrected: 'um/formulieren' -> 'umformulieren' (checked with Wiktionary) |
| ch6-103 | 22 | 9b | WARN | der Rhythmus — die Rhythmen | rhythm | der Rhythmus, Rhythmen | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Rhythmen |
| ch6-109 | 23 | 9c | ERROR | der Lage — die Lagen | moment.) | der Lage, mich zu bewegen.) | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); ERROR article_mismatch: article 'der' but Wiktionary says die; WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Lagen |
| ch6-111 | 23 | 9c | WARN | nachdenken | to think (about) | nachldenken , er denkt nach, dachte nach, hat nachgedacht | WARN auto_corrected: 'nachldenken' -> 'nachdenken' (checked with Wiktionary) |
| ch6-135 | 23 | 10b | WARN | mitsingen | to sing along | mitlsingen, er singt mit, sang mit, hat mitgesungen | WARN auto_corrected: 'mitlsingen' -> 'mitsingen' (checked with Wiktionary) |
| ch6-142 | 23 | 10b | WARN | der Internationalismus — die Internationalismen | internationalism | der Internationalismus, Internationalismen | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Internationalismen |
| ch7-015 | 24 | 1a | WARN | die Pflicht — die Pflichten | duty | die Pflicht, -en | WARN ocr_low_confidence: OCR confidence 0.69 < 0.85; WARN english_from_alt: used second OCR model: 'Anp' -> 'duty' |
| ch7-016 | 24 | 1a | ERROR | der Prásident — die Prásidenten | president (m) | der Prásident, -en | ERROR unknown_word: 'Prásident' not in Wiktionary |
| ch7-021 | 24 | 1a | WARN | die Spätschicht — die Spätschichten | late shift | die Spátschicht, -en | WARN auto_corrected: 'Spátschicht' -> 'Spätschicht' (checked with Wiktionary) |
| ch7-027 | 24 | 2a | ERROR | hervorheben |  | hervorlheben, er hebt hervor, hob hervor, to highlight hat hervorgehoben | ERROR no_english: English translation is empty; WARN auto_corrected: 'hervorlheben' -> 'hervorheben' (checked with Wiktionary) |
| ch7-034 | 24 | 2b | WARN | die Clique — die Cliquen | clique busy at work.) against | die Clique, -n eingespannt sein (Meine Freunde und ich to be very busy (My friends and I are all very sind alle beruflich stark eingespannt.) entgegen (+ G.) | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Cliquen |
| ch7-040 | 24 | 2b | WARN | guttun | to benefit | gutltun, er tut gut, tat gut, hat gutgetan | WARN auto_corrected: 'gutltun' -> 'guttun' (checked with Wiktionary) |
| ch7-050 | 25 | 2b | WARN | zusammenstoßen | to crash together | zusammenlstoBen, er stöBt zusammen, stieB zusammen, ist zusammengestoBen | WARN auto_corrected: 'zusammenlstoßen' -> 'zusammenstoßen' (checked with Wiktionary) |
| ch7-051 | 25 | 2b | ERROR | zusammen/wohnen | to live together | zusammen/wohnen | ERROR unknown_word: 'zusammen/wohnen' not in Wiktionary |
| ch7-061 | 25 | 6c | WARN | wahrend | while | wahrend (Ich putze, während ich telefoniere.) | WARN ocr_disagree: OCR models read 'wahrend' and 'während' - both are real words, check the PDF |
| ch7-069 | 25 | 8a | WARN | die Goldwaage — die Goldwaagen | hier keine bersetzung | die Goldwaage, -n (Leg doch nicht jedes Wort auf die Goldwaage!) | WARN english_spelling: unknown English word(s): bersetzung, hier, keine |
| ch7-073 | 25 | 8a | WARN | nachgeben | to give in | nachlgeben, er gibt nach, gab nach, hat nachgegeben | WARN auto_corrected: 'nachlgeben' -> 'nachgeben' (checked with Wiktionary) |
| ch7-075 | 25 | 8a | WARN | der Streit — die Streite | arguement | der streit, -e | WARN english_spelling: unknown English word(s): arguement |
| ch7-079 | 25 | 9a | WARN | das Streitgespräch — die Streitgespräche | argument | das Streitgespräch, -e übertreiben, er übertreibt, úbertrieb, hat to exaggerate übertrieben | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Streitgespräche |
| ch7-081 | 26 | 10a | WARN | die Modalpartikel — die Modalpartikel | modal particle | die Modalpartikel, - | WARN plural_mismatch: plural 'die Modalpartikel' but Wiktionary has: Modalpartikeln |
| ch7-108 | 26 | 11b | WARN | kommerziell | comercial | kommerziell | WARN english_spelling: unknown English word(s): comercial |
| ch7-143 | 27 | 12b | ERROR | zurúckbrúllen | to roar back | zurúckbrúllen | ERROR unknown_word: 'zurúckbrúllen' not in Wiktionary |
| ch7-149 | 27 | 12c | WARN | vorsingen | to sing | vorlsingen, er singt vor, sang vor, hat vorgesungen | WARN auto_corrected: 'vorlsingen' -> 'vorsingen' (checked with Wiktionary) |
| ch7-150 | 27 | 12 UB | WARN | die Ente — die Enten | duck | die Ente, -n | WARN ocr_low_confidence: OCR confidence 0.66 < 0.85; WARN english_from_alt: used second OCR model: 'dunp' -> 'duck' |
| ch7-162 | 27 | 13b | WARN | das Tempus — die Tempora | tense | das Tempus, Tempora | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Tempora |
| ch8-001 | 27 | 1a | WARN | sich anstrengen | to show effort | an/strengen (sich) | WARN auto_corrected: 'sich an/strengen' -> 'sich anstrengen' (checked with Wiktionary) |
| ch8-006 | 27 | 1a | WARN | eincremen | to put on | einlcremen | WARN auto_corrected: 'einlcremen' -> 'eincremen' (checked with Wiktionary) |
| ch8-030 | 28 | 1b | ERROR | zusammen/zählen | to add | zusammen/zählen | ERROR unknown_word: 'zusammen/zählen' not in Wiktionary |
| ch8-034 | 28 | 2a | WARN | die Brust — die Brüste | chest | die Brust, "-e einlnehmen, er nimmt ein, nahm ein, hat to take (to take medicine) eingenommen (Medikamente einnehmen) | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Brüste |
| ch8-037 | 28 | 2a | WARN | krankschreiben | to sign sb off work, to take sick leave | kranklschreiben, er schreibt krank, schrieb krank, hat krankgeschrieben | WARN auto_corrected: 'kranklschreiben' -> 'krankschreiben' (checked with Wiktionary) |
| ch8-053 | 28 | 3c | ERROR | schwindelig/schwindlig | 4zz!p | schwindelig/schwindlig | WARN ocr_low_confidence: OCR confidence 0.83 < 0.85; ERROR unknown_word: 'schwindelig/schwindlig' not in Wiktionary |
| ch8-060 | 29 | 5b | WARN | der Apparat — die Apparate | appratus, machine | der Apparat, -e | WARN english_spelling: unknown English word(s): appratus |
| ch8-062 | 29 | 5b | WARN | aufteilen | to divide | auflteilen | WARN auto_corrected: 'auflteilen' -> 'aufteilen' (checked with Wiktionary) |
| ch8-071 | 29 | 5b | WARN | diätisch | dietary (dietary food) | diátisch (diátische Ernáhrung) | WARN auto_corrected: 'diátisch' -> 'diätisch' (checked with Wiktionary) |
| ch8-077 | 29 | 5b | WARN | das Festnetz | landline | das Festnetz (Sg.) | WARN english_spelling: unknown English word(s): landline |
| ch8-078 | 29 | 5b | ERROR | grundsátzlich | in general | grundsátzlich | ERROR unknown_word: 'grundsátzlich' not in Wiktionary |
| ch8-091 | 29 | 5b | WARN | der Schlafanzug — die Schlafanzüge | pyjamas | der Schlafanzug, "-e | WARN english_spelling: unknown English word(s): pyjamas |
| ch8-098 | 29 | 5b | WARN | die Zahnpasta — die Zahnpastapasten | toothpaste | die Zahnpasta, -pasten | WARN plural_mismatch: plural 'die Zahnpastapasten' but Wiktionary has: Zahnpasten |
| ch8-099 | 29 | 5b | WARN | der Zimmernachbar — die Zimmernachbarn | next-door neighbour (m) | der Zimmernachbar, -n | WARN english_spelling: unknown English word(s): neighbour |
| ch8-100 | 29 | 5b | WARN | die Zimmernachbarin — die Zimmernachbarinnen | next-door neighbour (f) | die Zimmernachbarin, -nen | WARN english_spelling: unknown English word(s): neighbour |
| ch8-108 | 30 | 6b | WARN | auslösen | to elicit | aus/lösen | WARN auto_corrected: 'aus/lösen' -> 'auslösen' (checked with Wiktionary) |
| ch8-133 | 30 | 6b | ERROR | Salsa | salsa music | Salsa (Sg.) (ohne Artikel) | ERROR unknown_word: 'Salsa' not in Wiktionary |
| ch8-174 | 31 | 12a | WARN | sich ausdenken | to think of | ausldenken (sich), er denkt aus, dachte aus, hat ausgedacht | WARN auto_corrected: 'sich ausldenken' -> 'sich ausdenken' (checked with Wiktionary) |
| ch8-176 | 31 | 12a | WARN | überprüfen | to check | úberprüfen | WARN auto_corrected: 'úberprüfen' -> 'überprüfen' (checked with Wiktionary) |
| ch8-180 | 31 | 13a | WARN | sich ausbreiten | to spread | aus/breiten (sich) | WARN auto_corrected: 'sich aus/breiten' -> 'sich ausbreiten' (checked with Wiktionary) |
| ch8-197 | 31 | 13a | WARN | die Villa — die Villen | mansion | die Villa, Villen | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Villen |
| ch9-002 | 32 | 1b | WARN | anregen | to inspire | anIregen (zu + D.) | WARN auto_corrected: 'anIregen' -> 'anregen' (checked with Wiktionary) |
| ch9-006 | 32 | 1b | WARN | das Graffito — die Graffiti | graffiti | das Graffito, Graffiti | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Graffiti |
| ch9-012 | 32 | 1b | WARN | das Kunstwerk — die Kunstwerk | artwork | das Kunstwerk, - | WARN plural_mismatch: plural 'die Kunstwerk' but Wiktionary has: Kunstwerke |
| ch9-018 | 32 | 1b | WARN | weiterentwickeln | to evolve | weiterlentwickeln | WARN auto_corrected: 'weiterlentwickeln' -> 'weiterentwickeln' (checked with Wiktionary) |
| ch9-021 | 32 | 2b | WARN | das Kunstobjekt — die Kunstobjekt | artwork | das Kunstobjekt, - | WARN plural_mismatch: plural 'die Kunstobjekt' but Wiktionary has: Kunstobjekte |
| ch9-038 | 32 | 3b | WARN | hernkommen | to approach | heran/kommen (an + A.), er kommt heran, kam heran, ist herangekommen | WARN auto_corrected: 'heran/kommen' -> 'hernkommen' (checked with Wiktionary) |
| ch9-065 | 33 | 7a UB | WARN | auftreten | to perform | aufltreten, er tritt auf, trat auf, ist aufgetreten | WARN auto_corrected: 'aufltreten' -> 'auftreten' (checked with Wiktionary) |
| ch9-073 | 33 | 7a UB | WARN | der Geschmack | flavour | der Geschmack (Sg.) | WARN english_spelling: unknown English word(s): flavour |
| ch9-074 | 33 | 7a UB | WARN | herumspringen | to jump around | herumlspringen, er springt herum, sprang herum, ist herumgesprungen | WARN auto_corrected: 'herumlspringen' -> 'herumspringen' (checked with Wiktionary) |
| ch9-084 | 33 | 7b | WARN | das Aquarell — die Aquarelle | watercolour | das Aquarell, -e | WARN english_spelling: unknown English word(s): watercolour |
| ch9-087 | 33 | 7b | WARN | brasilianisch | Brasilian | brasilianisch | WARN english_spelling: unknown English word(s): brasilian |
| ch9-090 | 33 | 7b | WARN | die Ölfarbe — die Ölfarben | oil colour | die ölfarbe, -n | WARN english_spelling: unknown English word(s): colour |
| ch9-095 | 34 | 7b | WARN | umsetzen | to realize | um/setzen | WARN auto_corrected: 'um/setzen' -> 'umsetzen' (checked with Wiktionary) |
| ch9-096 | 34 | 7b | WARN | das Upcycling | upcycling | das Upcycling (Sg.) | WARN english_spelling: unknown English word(s): upcycling |
| ch9-102 | 34 | 7d | ERROR | der/die Teilnehmende — die Teilnehmenden | participant | der/die Teilnehmende, -n | ERROR article_mismatch: article 'der/die' but Wiktionary says das |
| ch9-107 | 34 | 8a | WARN | armliegen | to lie around | rumlliegen, er liegt rum, lag rum, hat/ist rumgelegen | WARN auto_corrected: 'rumlliegen' -> 'armliegen' (checked with Wiktionary) |
| ch9-119 | 34 | 10b | WARN | das Impro-Theater — die Impro-Theater | improv theatre | das Impro-Theater, - | WARN english_spelling: unknown English word(s): improv |
| ch9-131 | 34 | 10d | WARN | die Umleitung — die Umleitungen | diversion | die Ymleitung, -en | WARN auto_corrected: 'Ymleitung' -> 'Umleitung' (checked with Wiktionary) |
| ch9-144 | 35 | 12b | WARN | die Nachbarschaft | neighbourhood | die Nachbarschaft (Sg.) | WARN english_spelling: unknown English word(s): neighbourhood |
| ch9-153 | 35 | 12b | WARN | das Virus — die Viren | virus | das Virus, Viren | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Viren |
| ch9-156 | 35 | 12b | WARN | zusehen | to watch | zulsehen, er sieht zu, sah zu, hat zugesehen | WARN auto_corrected: 'zulsehen' -> 'zusehen' (checked with Wiktionary) |
| ch9-157 | 35 | 13b | WARN | einsperren | to lock sb in | einlsperren | WARN auto_corrected: 'einlsperren' -> 'einsperren' (checked with Wiktionary) |
| ch9-163 | 35 | 13b | WARN | die Jägerin — die Jägerinnen | hunter (f) | die Jágerin, -nen | WARN auto_corrected: 'Jágerin' -> 'Jägerin' (checked with Wiktionary) |
| ch9-169 | 35 | 13b | WARN | vorbeifliegen | to fly past | vorbeilfliegen, er fliegt vorbei, flog vorbei, ist vorbeigeflogen | WARN auto_corrected: 'vorbeilfliegen' -> 'vorbeifliegen' (checked with Wiktionary) |
| ch9-171 | 35 | 13b | WARN | k&k relativieren | to relativise | k&k relativieren | WARN english_spelling: unknown English word(s): relativise |
| ch10-009 | 35 | 1a | WARN | der Wert — die Werte | value (Which values are important in a society?) | der Wert, -e Welche Werte sind in einer Gesellschaft wichtig?) | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Werte |
| ch10-041 | 36 | 3b | WARN | ausbilden | to train | aus/bilden | WARN auto_corrected: 'aus/bilden' -> 'ausbilden' (checked with Wiktionary) |
| ch10-061 | 37 | 3b | WARN | die Patenschaft | sponsorship, godparenthood | die Patenschaft (Sg.) | WARN english_spelling: unknown English word(s): godparenthood |
| ch10-082 | 37 | 3c UB | WARN | der Pudding | pudding | der Pudding, -e/-s | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it) |
| ch10-088 | 37 | 3c UB | ERROR | die Zwetschge/Zwetschke — die Zwetschge/Zwetschken | plum | die Zwetschge/Zwetschke, -n | ERROR unknown_word: 'Zwetschge/Zwetschke' not in Wiktionary |
| ch10-101 | 37 | 7b | WARN | abziehen | to be deducted | ablziehen, er zieht ab, zog ab, hat abgezogen | WARN auto_corrected: 'ablziehen' -> 'abziehen' (checked with Wiktionary) |
| ch10-112 | 38 | 7b | WARN | herausfinden | to find out | herauslfinden, er findet heraus, fand heraus, hat herausgefunden | WARN auto_corrected: 'herauslfinden' -> 'herausfinden' (checked with Wiktionary) |
| ch10-122 | 38 | 7b | WARN | zulassen | to be admitted | zullassen, er lásst zu, ließ zu, hat zugelassen | WARN auto_corrected: 'zullassen' -> 'zulassen' (checked with Wiktionary) |
| ch10-124 | 38 | 7b | WARN | zuverlässig | reliable | zuverlássig | WARN auto_corrected: 'zuverlássig' -> 'zuverlässig' (checked with Wiktionary) |
| ch10-125 | 38 | 7c | ERROR | mitlorganisieren | to help organise | mitlorganisieren | ERROR unknown_word: 'mitlorganisieren' not in Wiktionary; WARN english_spelling: unknown English word(s): organise |
| ch10-126 | 38 | 7c | WARN | der Organisator — die Organisatoren | organiser (m) | der Organisator, Organisatoren | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Organisatoren; WARN english_spelling: unknown English word(s): organiser |
| ch10-127 | 38 | 7c | WARN | die Organisatorin — die Organisatorinnen | organiser (f) | die Organisatorin, -nen | WARN english_spelling: unknown English word(s): organiser |
| ch10-129 | 38 | 7d | WARN | hingehen | to go | hinlgehen, er geht hin, ging hin, ist hingegangen | WARN auto_corrected: 'hinlgehen' -> 'hingehen' (checked with Wiktionary) |
| ch10-132 | 38 | 8b | WARN | ab-räumen | to clear | ab-ráumen | WARN auto_corrected: 'ab-ráumen' -> 'ab-räumen' (checked with Wiktionary) |
| ch10-141 | 38 | 10b | WARN | beitreten | to join | beiltreten, er tritt bei, trat bei, ist beigetreten | WARN auto_corrected: 'beiltreten' -> 'beitreten' (checked with Wiktionary) |
| ch10-155 | 39 | 10b | WARN | der Skeptiker — die Skeptiker | sceptic (m) | der Skeptiker, - | WARN english_spelling: unknown English word(s): sceptic |
| ch10-156 | 39 | 10b | WARN | die Skeptikerin — die Skeptikerinnen | sceptic (f) | die Skeptikerin, -nen | WARN english_spelling: unknown English word(s): sceptic |
| ch10-160 | 39 | 10b | WARN | zunächst | initially | zunáchst | WARN auto_corrected: 'zunáchst' -> 'zunächst' (checked with Wiktionary) |
| ch10-169 | 39 | 11a | WARN | die Solidarität | solidarity | die Solidaritát (Sg.) | WARN auto_corrected: 'Solidaritát' -> 'Solidarität' (checked with Wiktionary) |
| ch10-175 | 39 | 11b | WARN | der Faden — die Fäden | in etwa: the train | der Faden, "- (den Faden verlieren) | WARN english_spelling: unknown English word(s): etwa |
| ch10-176 | 39 | 11b | WARN | der Humor | humour | der Humor (Sg.) (Nimm die Situation mit Humor und mach einfach weiter.) | WARN english_spelling: unknown English word(s): humour |
| ch11-001 | 39 | 1b | WARN | das Bürogebäude — die Bürogebäude | office building | das Büragebáude, - | WARN auto_corrected: 'Büragebáude' -> 'Bürogebäude' (checked with Wiktionary) |
| ch11-006 | 39 | 1b | WARN | der Schmutz | u!p | der Schmutz (Sg.) | WARN ocr_low_confidence: OCR confidence 0.72 < 0.85 |
| ch11-007 | 39 | 1b | WARN | das Tempo | speed | das Tempo, Tempi | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it) |
| ch11-010 | 39 | 4b | WARN | angehen | to concern | anlgehen, er geht an, ging an, ist angegangen (Was ich mache, das geht keinen was an.) | WARN auto_corrected: 'anlgehen' -> 'angehen' (checked with Wiktionary) |
| ch11-025 | 40 | 6b | WARN | der Dienst — die Dienste | duty | der Dienst, -e | WARN ocr_low_confidence: OCR confidence 0.66 < 0.85; WARN english_from_alt: used second OCR model: 'Anp' -> 'duty' |
| ch11-026 | 40 | 6b | WARN | einliefern | admitted | einlliefern | WARN auto_corrected: 'einlliefern' -> 'einliefern' (checked with Wiktionary) |
| ch11-029 | 40 | 6b | WARN | herunterfahren | to shut (down) | herunterlfahren, er fährt herunter, fuhr herunter, ist heruntergefahren | WARN auto_corrected: 'herunterlfahren' -> 'herunterfahren' (checked with Wiktionary) |
| ch11-040 | 40 | 6b | WARN | die Übergabe — die Übergaben | handover | die bergabe, -n | WARN auto_corrected: 'Bergabe' -> 'Übergabe' (checked with Wiktionary) |
| ch11-047 | 40 | 8b | WARN | abhängen | to be dependent on | ablhängen (von + D.), er hängt ab, hing ab, hat abgehangen | WARN auto_corrected: 'ablhängen' -> 'abhängen' (checked with Wiktionary) |
| ch11-051 | 40 | 8b | WARN | die Diversität | diversity | die Diversitát (Sg.) | WARN auto_corrected: 'Diversitát' -> 'Diversität' (checked with Wiktionary) |
| ch11-054 | 40 | 8b | WARN | festlegen | to determine | festllegen | WARN auto_corrected: 'festllegen' -> 'festlegen' (checked with Wiktionary) |
| ch11-073 | 41 | 10 | WARN | ausreden | to finish speaking | auslreden (jemanden ausreden lassen) | WARN auto_corrected: 'auslreden' -> 'ausreden' (checked with Wiktionary) |
| ch11-076 | 41 | 10 | WARN | die Diskussion — die Diskussionen | discussion | die Diskussion, -en einlgehen (auf + D.), er geht ein, ging ein, to react to (to react to a point of view) ist eingegangen (auf einen Standpunkt eingehen) | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Diskussionen |
| ch11-078 | 41 | 10 | WARN | die Open-Air-Arena — die Arenen | open air arena | die Open-Air-Arena, -Arenen | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Arenen |
| ch11-082 | 41 | 10 | WARN | die Sporthalle — die Sporthallen | gym (nasium) | die Sporthalle, -n | WARN english_spelling: unknown English word(s): nasium |
| ch11-084 | 41 | 10 | ERROR | die Stadtrátin — die Stadtrátinnen | city council member (f) | die Stadtrátin, -nen | ERROR unknown_word: 'Stadtrátin' not in Wiktionary |
| ch11-089 | 41 | 12b | WARN | abbiegen | to turn | ablbiegen, er biegt ab, bog ab, ist abgebogen | WARN auto_corrected: 'ablbiegen' -> 'abbiegen' (checked with Wiktionary) |
| ch11-095 | 41 | 12b | WARN | die Fassade — die Fassaden | facaded | die Fassade, -n | WARN english_spelling: unknown English word(s): facaded |
| ch11-096 | 41 | 12b | WARN | der Favorit — die Favoriten | favourite (m) | der Favorit, -en | WARN english_spelling: unknown English word(s): favourite |
| ch11-097 | 41 | 12b | WARN | die Favoritin — die Favoritinnen | favourite (f) | die Favoritin, -nen | WARN english_spelling: unknown English word(s): favourite |
| ch11-106 | 42 | 12b | WARN | der Mittelpunkt — die Mittelpunkte | centre | der Mittelpunkt, -e (im Mittelpunkt stehen) | WARN english_spelling: unknown English word(s): centre |
| ch11-110 | 42 | 12b | WARN | rauffahren | to drive up | rauflfahren, er fährt rauf, fuhr rauf, ist raufgefahren | WARN auto_corrected: 'rauflfahren' -> 'rauffahren' (checked with Wiktionary) |
| ch11-112 | 42 | 12b | WARN | armfahren | to drive around | rumlfahren, er fährt rum, fuhr rum, ist rumgefahren | WARN auto_corrected: 'rumlfahren' -> 'armfahren' (checked with Wiktionary) |
| ch12-004 | 42 | 3a | WARN | einzahlen | to deposit | ein/zahlen | WARN auto_corrected: 'ein/zahlen' -> 'einzahlen' (checked with Wiktionary) |
| ch12-009 | 42 | 3b UB | WARN | angeben | to state | anlgeben, er gibt an, gab an, hat angegeben (Bitte geben Sie Ihren Namen an.) | WARN auto_corrected: 'anlgeben' -> 'angeben' (checked with Wiktionary) |
| ch12-011 | 42 | 3b UB | WARN | die BC — die BCs | SWIFT-BIC | die BIC, -s | WARN auto_corrected: 'BIC' -> 'BC' (checked with Wiktionary) |
| ch12-022 | 43 | 3c | WARN | abhängig | dependent | abhángig | WARN auto_corrected: 'abhángig' -> 'abhängig' (checked with Wiktionary) |
| ch12-027 | 43 | 3d | ERROR | das Qnline-Banking | online banking | das Qnline-Banking (Sg.) | ERROR article_mismatch: article 'das' but Wiktionary says der |
| ch12-031 | 43 | 4a | WARN | aufnehmen | to take out | auflnehmen, er nimmt auf, nahm auf, hat aufgenommen (Ich möchte gern einen Kredit aufnehmen.) | WARN auto_corrected: 'auflnehmen' -> 'aufnehmen' (checked with Wiktionary) |
| ch12-033 | 43 | 5a | WARN | anfallen | to arise | anlfallen, er fällt an, fiel an, ist angefallen | WARN auto_corrected: 'anlfallen' -> 'anfallen' (checked with Wiktionary) |
| ch12-037 | 43 | 5a | WARN | sich einloggen | to log in | einlloggen (sich) | WARN auto_corrected: 'sich einlloggen' -> 'sich einloggen' (checked with Wiktionary) |
| ch12-038 | 43 | 5a | WARN | eintragen | to register | einltragen, er trágt ein, trug ein, hat eingetragen | WARN auto_corrected: 'einltragen' -> 'eintragen' (checked with Wiktionary) |
| ch12-042 | 43 | 5a | ERROR | der Log-in — die Log-ins | log-in | der Log-in, -s | ERROR unknown_word: 'In' not in Wiktionary; did you mean: n, Ion |
| ch12-045 | 43 | 5c | WARN | gutschreiben | to credit | gutlschreiben, er schreibt gut, schrieb gut, hat gutgeschrieben (einen Betrag auf dem Konto gutschreiben) | WARN auto_corrected: 'gutlschreiben' -> 'gutschreiben' (checked with Wiktionary) |
| ch12-074 | 44 | 7a | WARN | das Umweltproblem — die Umweltprobleme | environmental problem | das Vmweltproblem, -e | WARN auto_corrected: 'Vmweltproblem' -> 'Umweltproblem' (checked with Wiktionary) |
| ch12-089 | 44 | 10a | WARN | einwerfen | to insert | einlwerfen, er wirft ein, warf ein, hat eingeworfen | WARN auto_corrected: 'einlwerfen' -> 'einwerfen' (checked with Wiktionary) |
| ch12-093 | 44 | 10a | ERROR | das Kieingeld | small change | das Kieingeld (Sg.) | ERROR unknown_word: 'Kieingeld' not in Wiktionary |
| ch12-094 | 44 | 10a | WARN | nachprüfen | to check | nachlprüfen | WARN auto_corrected: 'nachlprüfen' -> 'nachprüfen' (checked with Wiktionary) |
| ch12-095 | 44 | 10a | WARN | der Staub der Vorwurf — die Staub der Vorwürfe | 1snp | der Staub (Sg.) der Vorwurf, "-e (Niemand kann mir einen accusation (Nobody can accuse me, right?) Vorwurf machen, oder?) | WARN ocr_low_confidence: OCR confidence 0.81 < 0.85 |
| ch12-096 | 44 | 10a | ERROR | weiterverschenken | to pass on as a gift | weiterverschenken | ERROR unknown_word: 'weiterverschenken' not in Wiktionary |
| ch12-097 | 44 | 10a | WARN | der Zeitungskasten | newspaper rack | der Zeitungskasten, | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it) |
| ch12-106 | 45 | 11b | WARN | ausziehen | to move out of | auslziehen, er zieht aus, zog aus, ist ausgezogen (Wann zieht ihr aus der Wohnung aus?) | WARN auto_corrected: 'auslziehen' -> 'ausziehen' (checked with Wiktionary) |
| ch12-117 | 45 | 11b | ERROR | der Nachtwáchter — die Nachtwáchter | night watchman | der Nachtwáchter, - | ERROR unknown_word: 'Nachtwáchter' not in Wiktionary |
| ch12-118 | 45 | 11b | WARN | die Nachtwächterin — die Nachtwächterinnen | night watchwoman | die Nachtwächterin, -nen | WARN english_spelling: unknown English word(s): watchwoman |

## All entries (1984)

| id | page | label | level | German (parsed) | English | raw OCR (German) | issues |
|---|---|---|---|---|---|---|---|
| ch1-001 | 1 | 1a UB | OK | faulenzen | to lounge around | faulenzen |  |
| ch1-002 | 1 | 1a UB | OK | giftig | poisonous | giftig |  |
| ch1-003 | 1 | 1a UB | OK | der Himmel — die Himmel | sky | der Himmel, |  |
| ch1-004 | 1 | 1a UB | OK | im Freien | outdoors | im Freien |  |
| ch1-005 | 1 | 1a UB | OK | das Insekt — die Insekten | insect | das Insekt, -en |  |
| ch1-006 | 1 | 1a UB | OK | das Netz — die Netze | net | das Netz, -e (Er hat nachts ein Netz vor dem Zelt.) |  |
| ch1-007 | 1 | 1a UB | OK | der Pilz — die Pilze | mushroom | der Pilz, -e |  |
| ch1-008 | 1 | 1a UB | OK | der Schutz | protection | der schutz (Sg.) |  |
| ch1-009 | 1 | 1a UB | OK | zelten | to camp | zelten |  |
| ch1-010 | 1 | 2 | OK | angenehm | pleasant | angenehm |  |
| ch1-011 | 1 | 2 | OK | die Aussicht — die Aussichten | view | die Aussicht, -en |  |
| ch1-012 | 1 | 2 | OK | dabei sein | to be | dabei sein (für + A.) (Im Urlaub am Meer ist für jeden etwas dabei.) |  |
| ch1-013 | 1 | 2 | OK | drüben | over there | drüben |  |
| ch1-014 | 1 | 2 | OK | das Erlebnis — die Erlebnisse | experience | das Erlebnis, -se |  |
| ch1-015 | 1 | 2 | OK | der Genuss | treat | der Genuss (Sg.) |  |
| ch1-016 | 1 | 2 | OK | herrlich | glorious | herrlich |  |
| ch1-017 | 1 | 2 | OK | die Küste — die Küsten | coast | die Küste, -n |  |
| ch1-018 | 1 | 2 | OK | reif | ripe | reif |  |
| ch1-019 | 1 | 2 | OK | der Sand | sand | der Sand (Sg.) |  |
| ch1-020 | 1 | 2 | OK | die Traube — die Trauben | grape | die Traube, -n |  |
| ch1-021 | 1 | 2 | WARN | der Urlaubsgruß — die Urlaubsgrüße | greetings from abroad | der YrlaubsgruB, "-e | WARN auto_corrected: 'Yrlaubsgruß' -> 'Urlaubsgruß' (checked with Wiktionary) |
| ch1-022 | 1 | 3b | OK | derselbe, dasselbe, dieselbe | the same | derselbe, dasselbe, dieselbe |  |
| ch1-023 | 1 | 3b | OK | die Entfernung — die Entfernungen | distance | die Entfernung, -en |  |
| ch1-024 | 1 | 3b | OK | das Ferienhaus — die Ferienhäuser | holiday home | das Ferienhaus, "er |  |
| ch1-025 | 1 | 3b | OK | gründlich | thorough | gründlich |  |
| ch1-026 | 1 | 3b | OK | rechtzeitig | on time | rechtzeitig |  |
| ch1-027 | 1 | 3b | OK | schick | fancy | schick |  |
| ch1-028 | 1 | 3b | OK | der Typ — die Typen | type | der Typ, -en |  |
| ch1-029 | 1 | 3b | WARN | der Urlaubstyp — die Urlaubstypen | holiday type | der rlaubstyp, -en | WARN auto_corrected: 'Rlaubstyp' -> 'Urlaubstyp' (checked with Wiktionary) |
| ch1-030 | 1 | 3b | OK | das Urlaubsziel — die Urlaubsziele | holiday destination | das Urlaubsziel, -e |  |
| ch1-031 | 1 | 4a | OK | der Chat — die Chats | chat | der Chat, -s |  |
| ch1-032 | 1 | 4a | OK | sich erholen | to relax | erholen (sich) |  |
| ch1-033 | 1 | 4a | OK | der Kompromiss — die Kompromisse | compromise | der Kompromiss, -e |  |
| ch1-034 | 1 | 4a | OK | meinetwegen | fine with me | meinetwegen |  |
| ch1-035 | 1 | 4a | OK | sorry | sorry | sorry (ugs.) |  |
| ch1-036 | 1 | 4a | WARN | die Urlaubsplanung — die Urlaubsplanungen | holiday planning | die rlaubsplanung, -en | WARN auto_corrected: 'Rlaubsplanung' -> 'Urlaubsplanung' (checked with Wiktionary) |
| ch1-037 | 1 | 4a | WARN | wieso | why | wies | WARN auto_corrected: 'wies' -> 'wieso' (second OCR model, longer reading) |
| ch1-038 | 1 | 4a | OK | zu | to | zu (Ich habe keine Lust, lange nach einer Ferienwohnung zu suchen.) |  |
| ch1-039 | 1 | 5a | OK | entspannend | relaxing | entspannend |  |
| ch1-040 | 1 | 5c | OK | erfahren | to learn | erfahren, er erfáhrt, erfuhr, hat erfahren |  |
| ch1-041 | 1 | 6a | OK | die Schifffahrt — die Schifffahrten | boat trip | die Schifffahrt, -en |  |
| ch1-042 | 1 | 6a | OK | das Wellnesshotel — die Wellnesshotels | spa hotel | das Wellnesshotel, -s |  |
| ch1-043 | 2 | 7 | OK | ca. | approx. (approximately) | ca. |  |
| ch1-044 | 2 | 7 | OK | enthalten sein | to be included | enthalten sein (in + D.) |  |
| ch1-045 | 2 | 7 | OK | die Fahrtzeit — die Fahrtzeiten | travel time | die Fahrtzeit, -en |  |
| ch1-046 | 2 | 7 | OK | das Gästehaus — die Gästehäuser | guest house | das Gästehaus, "-er |  |
| ch1-047 | 2 | 7 | OK | die Halbpension | half board | die Halbpension (Sg.) |  |
| ch1-048 | 2 | 7 | OK | höchstens | at the most | höchstens |  |
| ch1-049 | 2 | 7 | OK | der Reisebüro-Mitarbeiter — die Reisebüro-Mitarbeiter | travel agent (m) | der Reisebüro-Mitarbeiter, - |  |
| ch1-050 | 2 | 7 | OK | die Reisebüro-Mitarbeiterin — die Reisebüro-Mitarbeiterinnen | travel agent (f) | die Reisebüro-Mitarbeiterin, -nen |  |
| ch1-051 | 2 | 7 | OK | der Skibus — die Skibusse | ski bus | der Skibus, -se |  |
| ch1-052 | 2 | 7 | OK | das Skigebiet — die Skigebiete | ski resort | das Skigebiet, -e |  |
| ch1-053 | 2 | 7 | OK | der Skilift — die Skilifte | ski lift | der Skilift, -e |  |
| ch1-054 | 2 | 7 | OK | die Vollpension | full board | die Vollpension (Sg.) |  |
| ch1-055 | 2 | 7 | OK | der Wellness-Bereich — die Wellness-Bereiche | spa area | der Wellness-Bereich, -e |  |
| ch1-056 | 2 | 7 | OK | der Winterurlaub — die Winterurlaube | winter holiday | der Winterurlaub, -e |  |
| ch1-057 | 2 | 8b | OK | die Badewanne — die Badewannen | bathtub | die Badewanne, -n |  |
| ch1-058 | 2 | 8b | OK | das Boot — die Boote | boat | das Boot, -e |  |
| ch1-059 | 2 | 8b | OK | da | as | da (Da Rothenburg so bekannt ist, kommen viele Touristen in die Stadt.) |  |
| ch1-060 | 2 | 8b | OK | der Einfall — die Einfälle | idea | der Einfall, "e |  |
| ch1-061 | 2 | 8b | WARN | enttäuscht | disappointed | enttáuscht | WARN auto_corrected: 'enttáuscht' -> 'enttäuscht' (checked with Wiktionary) |
| ch1-062 | 2 | 8b | OK | der Forumstext — die Forumstexte | texts in the forum | der Forumstext, -e |  |
| ch1-063 | 2 | 8b | OK | jedenfalls | in any case | jedenfalls |  |
| ch1-064 | 2 | 8b | OK | liegen | to be in the lead | liegen, er liegt, lag, hat gelegen (In Umfragen liegen meistens groBe Städte vorn.) |  |
| ch1-065 | 2 | 8b | OK | obwohl | although/even though | obwohl |  |
| ch1-066 | 2 | 8b | OK | offenbar | obvious | offenbar |  |
| ch1-067 | 2 | 8b | OK | solche, solchen | such | solche, solchen |  |
| ch1-068 | 2 | 8b | OK | spazieren | to go for a walk | spazieren |  |
| ch1-069 | 2 | 8b | OK | die Stadtatmosphäre | city atmosphere | die Stadtatmosphäre (Sg.) |  |
| ch1-070 | 2 | 8b | OK | die Strandpromenade — die Strandpromenaden | beach side promenade | die Strandpromenade, -n |  |
| ch1-071 | 2 | 8b | OK | weg sein | to be gone | weg sein |  |
| ch1-072 | 2 | 8c | OK | der Strandurlaub — die Strandurlaube | holiday at the beach | der Strandurlaub, -e |  |
| ch1-073 | 2 | 9a | OK | das Abenteuer — die Abenteuer | adventure | das Abenteuer, - |  |
| ch1-074 | 2 | 9a | OK | aufbauen | to build | aufbauen |  |
| ch1-075 | 2 | 9a | OK | die Bild-Geschichte | picture story | die Bild-Geschichte, -n Bock (Sg. ohne Artikel, ugs.) (keinen Bock hier: to feel like (to not feel like something) mehr auf etwas haben) |  |
| ch1-076 | 2 | 9a | OK | brennen | to burn | brennen, er brennt, brannte, hat gebrannt |  |
| ch1-077 | 2 | 9a | OK | der Eimer — die Eimer | spout | der Eimer, - (Es regnet! Der ganze Ausflug ist im Eimer!) |  |
| ch1-078 | 2 | 9a | OK | der Kofferraum — die Kofferräume | car boot | der Kofferraum,"e |  |
| ch1-079 | 2 | 9a | OK | mehrfach | repeatedly | mehrfach |  |
| ch1-080 | 2 | 9a | WARN | schiefgehen | to go wrong | schieflgehen, es geht schief, ging schief, ist schiefgegangen | WARN auto_corrected: 'schieflgehen' -> 'schiefgehen' (checked with Wiktionary) |
| ch1-081 | 2 | 9a | OK | tragen | to carry | tragen, er trágt, trug, hat getragen (Gepäck zum Auto tragen) |  |
| ch1-082 | 2 | 9a | OK | verzweifelt | desperate | verzweifelt |  |
| ch1-083 | 2 | 9a | OK | die Wiese — die Wiesen | meadow | die Wiese, -n |  |
| ch1-084 | 2 | 9a | OK | das Zeug | stuff | das Zeug (Sg.) |  |
| ch1-085 | 2 | 9c | OK | fest machen | to fasten | fest machen |  |
| ch1-086 | 2 | 9c | OK | die Perspektive — die Perspektiven | perspective | die Perspektive, -n |  |
| ch1-087 | 3 | 10c | OK | diktieren | to dictate | diktieren |  |
| ch1-088 | 3 | 11a | OK | auf | up (Listen up!) | auf (Ohren auf!) |  |
| ch1-089 | 3 | 11a | OK | der ICE — die ICEs | ICE | der ICE, -s |  |
| ch1-090 | 3 | 11a | OK | die Zugnummer — die Zugnummern | train number | die Zugnummer, -n |  |
| ch1-091 | 3 | 12b | OK | die Bushaltestelle — die Bushaltestellen | bus stop | die Bushaltestelle, -n |  |
| ch1-092 | 3 | 12b | OK | das Gepäckband — die Gepäckbänder | baggage conveyor belt | das Gepäckband, "-er |  |
| ch1-093 | 3 | 12b | WARN | der Tiergarten — die Tiergärten | z00 | der Tiergarten, "- | WARN ocr_low_confidence: OCR confidence 0.63 < 0.85 |
| ch1-094 | 3 | 12c | OK | der Hauptbahnhof — die Hauptbahnhöfe | central station | der Hauptbahnhof, "-e |  |
| ch1-095 | 3 | 13a | OK | die Alm — die Almen | alpine pasture (alp) | die Alm, -en |  |
| ch1-096 | 3 | 13a | OK | der Almsommer — die Almsommer | summer on the alp | der Almsommer, - |  |
| ch1-097 | 3 | 13a | OK | der Almurlaub — die Almurlaube | holiday on the alp | der Almurlaub, -e |  |
| ch1-098 | 3 | 13a | WARN | begeistert | enthusiatic | begeistert | WARN english_spelling: unknown English word(s): enthusiatic |
| ch1-099 | 3 | 13a | OK | beinahe | almost | beinahe |  |
| ch1-100 | 3 | 13a | OK | eher | rather | eher (Insgesamt ist es eher einsam hier auf der Alm.) |  |
| ch1-101 | 3 | 13a | OK | die Einsamkeit | solitude | die Einsamkeit (Sg.) |  |
| ch1-102 | 3 | 13a | OK | der Empfang | reception | der Empfang (Sg.) (Hier auf dem Berg gibt es keinen Empfang für Handys.) |  |
| ch1-103 | 3 | 13a | OK | sich entschließen | to decide | entschlieBen (sich) (zu + D.), er entschlieBt, entschloss, hat entschlossen |  |
| ch1-104 | 3 | 13a | OK | erholt | relaxed, recovered | erholt |  |
| ch1-105 | 3 | 13a | OK | sich erkälten | to have a cold | erkälten (sich) |  |
| ch1-106 | 3 | 13a | OK | falls | in case | falls |  |
| ch1-107 | 3 | 13a | OK | das Gebirge — die Gebirge | mountains, mountain range | das Gebirge, - |  |
| ch1-108 | 3 | 13a | OK | gegen heimlfahren | around | gegen (Wir treffen uns gegen 8 Uhr, okay?) heimlfahren, er fährt heim, fuhr heim, istto go home heimgefahren |  |
| ch1-109 | 3 | 13a | OK | das Heimweh | homesickness | das Heimweh (Sg.) |  |
| ch1-110 | 3 | 13a | OK | hierher | here | hierher |  |
| ch1-111 | 3 | 13a | OK | die Hütte — die Hütten | hut/lodge | die Hütte, -n |  |
| ch1-112 | 3 | 13a | OK | die Käserei — die Käsereien | cheese factory | die Käserei, -en |  |
| ch1-113 | 3 | 13a | OK | melken | to milk | melken |  |
| ch1-114 | 3 | 13a | OK | momentan | at the moment | momentan |  |
| ch1-115 | 3 | 13a | OK | die Neuigkeit — die Neuigkeiten | news | die Neuigkeit, -en |  |
| ch1-116 | 3 | 13a | OK | der Rückblick — die Rückblicke | review | der Rückblick, -e |  |
| ch1-117 | 3 | 13a | OK | der Sonnenaufgang — die Sonnenaufgänge | sunrise | der Sonnenaufgang, "-e |  |
| ch1-118 | 3 | 13a | OK | der Terminkalender — die Terminkalender | diary | der Terminkalender, - |  |
| ch1-119 | 3 | 13a | OK | vorbei sein | to be over | vorbei sein |  |
| ch1-120 | 3 | 13a | OK | der Zeitpunkt — die Zeitpunkte | time (point in) | der Zeitpunkt, -e |  |
| ch1-121 | 3 | 13b | OK | der Almaufenthalt — die Almaufenthalte | visit to an alp | der Almaufenthalt, -e |  |
| ch1-122 | 3 | 13b | WARN | mitarbeiten | to assist | mitlarbeiten | WARN auto_corrected: 'mitlarbeiten' -> 'mitarbeiten' (checked with Wiktionary) |
| ch1-123 | 3 | 13c | OK | der Ferienclub — die Ferienclubs | holiday club | der Ferienclub, -s |  |
| ch1-124 | 3 | 13c | OK | der Olivenbaum — die Olivenbäume | olive tree | der Olivenbaum, "-e |  |
| ch1-125 | 3 | 13c | OK | die Weihnachtsferien — die Weihnachtsferien | Christmas holidays | die Weihnachtsferien (Pl.) |  |
| ch1-126 | 3 | 13c | OK | k&k die Abneigung, -en | dislike | k&k die Abneigung, -en |  |
| ch1-127 | 3 | 13c | OK | der Kausalsatz — die Kausalsätze | causal clause | der Kausalsatz, "e |  |
| ch1-128 | 3 | 13c | OK | der Konzessivsatz — die Konzessivsätze | concessive clause | der Konzessivsatz,"e |  |
| ch2-001 | 4 | 1a | OK | benötigen | to need | benötigen |  |
| ch2-002 | 4 | 1a | OK | der Fingerabdruck — die Fingerabdrücke | finger print | der Fingerabdruck,"e |  |
| ch2-003 | 4 | 1a | OK | der Funkkopfhörer — die Funkkopfhörer | wireless headphones | der Funkkopfhörer, - |  |
| ch2-004 | 4 | 1a | OK | das Lastenfahrrad — die Lastenfahrräder | freight bicycle | das Lastenfahrrad, "-er |  |
| ch2-005 | 4 | 1a | OK | der Sprachassistent — die Sprachassistenten | language assistant | der Sprachassistent, -en |  |
| ch2-006 | 4 | 1a | OK | der Steh-Sitz-Tisch — die Steh-Sitz-Tische | stand-sit-table | der Steh-Sitz-Tisch, -e |  |
| ch2-007 | 4 | 1a | OK | der Türöffner — die Türöffner | door opener | der Türöffner, - |  |
| ch2-008 | 4 | 1b | OK | der Slogan — die Slogans | slogan | der Slogan, -s |  |
| ch2-009 | 4 | 1b | OK | die Taste — die Tasten | key | die Taste, -n |  |
| ch2-010 | 4 | 1b | WARN | der Transport — die Transport | transport | der Transport, - | WARN plural_mismatch: plural 'die Transport' but Wiktionary has: Transporte |
| ch2-011 | 4 | 1b UB | WARN | anschließen | to connect | anlschlieBen, er schlieBt an, schloss an, hat angeschlossen (Er schlieBt den Lautsprecher an den Laptop an.) | WARN auto_corrected: 'anlschließen' -> 'anschließen' (checked with Wiktionary) |
| ch2-012 | 4 | 1b UB | WARN | aufladen | to charge | auflladen, er ládt auf, lud auf, hat aufgeladen | WARN auto_corrected: 'auflladen' -> 'aufladen' (checked with Wiktionary) |
| ch2-013 | 4 | 1b UB | OK | bedienen | to use | bedienen |  |
| ch2-014 | 4 | 1b UB | WARN | einsetzen | to insert | einlsetzen (eine Batterie ins Handy einsetzen) | WARN auto_corrected: 'einlsetzen' -> 'einsetzen' (checked with Wiktionary) |
| ch2-015 | 4 | 1b UB | WARN | einstecken | to plug (in) | einlstecken | WARN auto_corrected: 'einlstecken' -> 'einstecken' (checked with Wiktionary) |
| ch2-016 | 4 | 1b UB | OK | installieren | to install | installieren |  |
| ch2-017 | 4 | 1b UB | OK | schalten | to switch | schalten (das Handy stumm schalten) |  |
| ch2-018 | 4 | 1b UB | OK | stumm | mute | stumm (das Handy stumm schalten) |  |
| ch2-019 | 4 | 3a | OK | die Anleitung — die Anleitungen | instruction | die Anleitung, -en |  |
| ch2-020 | 4 | 3a | OK | sich anschaffen | to get | anschaffen (sich) |  |
| ch2-021 | 4 | 3a | OK | bloß | only | bloB |  |
| ch2-022 | 4 | 3a | OK | die Frage — die Fragen | question | die Frage, -n (vor einer Frage stehen) |  |
| ch2-023 | 4 | 3a | OK | der Handyladen — die Handyläden | mobile phone shop | der Handyladen, "- |  |
| ch2-024 | 4 | 3a | WARN | herunterfallen | to fall | herunterlfallen, er fällt herunter, fiel herunter, ist heruntergefallen | WARN auto_corrected: 'herunterlfallen' -> 'herunterfallen' (checked with Wiktionary) |
| ch2-025 | 4 | 3a | OK | irgendetwas | something | irgendetwas |  |
| ch2-026 | 4 | 3a | WARN | kaputtgehen | to break to be worth it | kaputtlgehen, er geht kaputt, ging kaputt, ist kaputtgegangen kommen, er kommt, kam, ist gekommen to come (to come onto the market (auf den Markt kommen) lohnen (sich) | WARN auto_corrected: 'kaputtlgehen' -> 'kaputtgehen' (checked with Wiktionary) |
| ch2-027 | 4 | 3a | OK | das Sonderangebot — die Sonderangebote | special offer | das Sonderangebot, -e |  |
| ch2-028 | 4 | 3a | OK | der Staubsauger — die Staubsauger | vacuum cleaner | der Staubsauger, - |  |
| ch2-029 | 4 | 3a | OK | stehen | to be confronted with | stehen, er steht, stand, hat gestanden (vor einer Frage stehen) |  |
| ch2-030 | 4 | 3a | OK | technisch | technical | technisch |  |
| ch2-031 | 4 | 3e | OK | der Knopf — die Knöpfe | button | der Knopf, "-e |  |
| ch2-032 | 4 | 3e | WARN | nähen | to sew | nähen | WARN ocr_low_confidence: OCR confidence 0.83 < 0.85 |
| ch2-033 | 4 | 3e | OK | reinigen | to clean | reinigen |  |
| ch2-034 | 4 | 3e | OK | streichen | to paint | streichen, er streicht, strich, hat gestrichen |  |
| ch2-035 | 4 | 4a | OK | der Kopfhörer — die Kopfhörer | headphones | der Kopfhörer, - |  |
| ch2-036 | 4 | 4a | OK | das Ladekabel — die Ladekabel | charger | das Ladekabel, - |  |
| ch2-037 | 5 | 4a | WARN | die Powerbank — die Powerbanks | powerbank | die Powerbank, -s | WARN english_spelling: unknown English word(s): powerbank |
| ch2-038 | 5 | 4b | OK | daher | therefore | daher |  |
| ch2-039 | 5 | 4b | OK | darum ) deswegen | that's why | darum (Max' Lautsprecher geht nicht, darum lásst er ihn reparieren.)) deswegen |  |
| ch2-040 | 5 | 4b | OK | der Handyakku — die Handyakkus | mobile phone battery | der Handyakku, -s |  |
| ch2-041 | 5 | 4b | ERROR | ssipos | so that | ssipos | ERROR unknown_word: 'ssipos' not in Wiktionary; did you mean: assipos, ossipos |
| ch2-042 | 5 | 4b | OK | der Stick — die Sticks | USB | der Stick, -s |  |
| ch2-043 | 5 | 5a UB | WARN | anhaben | to wear | anlhaben, er hat an, hatte an, hat angehabt | WARN auto_corrected: 'anlhaben' -> 'anhaben' (checked with Wiktionary) |
| ch2-044 | 5 | 5a UB | WARN | anschalten | to switch on | an/schalten | WARN auto_corrected: 'an/schalten' -> 'anschalten' (checked with Wiktionary) |
| ch2-045 | 5 | 5a UB | WARN | dabeihaben | to have sth with oneself | dabeihaben | WARN english_spelling: unknown English word(s): sth |
| ch2-046 | 5 | 5a UB | OK | diesmal | this time | diesmal |  |
| ch2-047 | 5 | 5a UB | OK | die EC-Karte — die EC-Karten | debit card | die EC-Karte, -n |  |
| ch2-048 | 5 | 5a UB | OK | die Gebrauchsanweisung — die Gebrauchsanweisungen | instructions | die Gebrauchsanweisung, -en |  |
| ch2-049 | 5 | 5a UB | OK | die Geheimzahl — die Geheimzahlen | PIN | die Geheimzahl, -en |  |
| ch2-050 | 5 | 5a UB | OK | der Geldautomat — die Geldautomaten | ATM (automatic teller machine) | der Geldautomat, -en |  |
| ch2-051 | 5 | 5a UB | WARN | das Girokonto — die Girokontokonten | checking account | das Girokonto, -konten | WARN plural_mismatch: plural 'die Girokontokonten' but Wiktionary has: Girokonten, Girokontos, Girokonti |
| ch2-052 | 5 | 5a UB | OK | gratis | free | gratis |  |
| ch2-053 | 5 | 5a UB | WARN | nachsehen | to have a look | nach/sehen, er sieht nach, sah nach, hat nachgesehen | WARN auto_corrected: 'nach/sehen' -> 'nachsehen' (checked with Wiktionary) |
| ch2-054 | 5 | 5a UB | OK | das Portemonnaie — die Portemonnaies | wallet | das Portemonnaie, -s |  |
| ch2-055 | 5 | 5a UB | OK | der Rabatt — die Rabatte | discount | der Rabatt, -e |  |
| ch2-056 | 5 | 5a UB | OK | rein | pure | rein (Es war reines Glück, dass ich mein Handy wieder gefunden habe.) |  |
| ch2-057 | 5 | 5a UB | OK | verraten | to reveal | verraten, er verrát, verriet, hat verraten |  |
| ch2-058 | 5 | 5a UB | ERROR | zurúcklgehen | to go back | zurúcklgehen, er geht zurück, ging zurück, ist zurückgegangen | ERROR unknown_word: 'zurúcklgehen' not in Wiktionary |
| ch2-059 | 5 | 5a UB | ERROR | zurúckzahlen | to pay back | zurúckzahlen | ERROR unknown_word: 'zurúckzahlen' not in Wiktionary |
| ch2-060 | 5 | 5b | OK | die Garantie — die Garantien | warranty | die Garantie, -n |  |
| ch2-061 | 5 | 5b | OK | laden | to charge | laden, er lädt, lud, hat geladen (Mein Handy ist fast leer, ich muss es laden.) |  |
| ch2-062 | 5 | 5b | OK | die Quittung — die Quittungen | receipt | die Quittung, -en |  |
| ch2-063 | 5 | 5b | OK | reklamieren | to complain/exchange | reklamieren |  |
| ch2-064 | 5 | 5c | OK | testen | to test | testen |  |
| ch2-065 | 5 | 6a | OK | die Technologie — die Technologien | technology | die Technologie, -n |  |
| ch2-066 | 5 | 6a | OK | die Vorstellung — die Vorstellungen | idea/suggestion | die Vorstellung, -en (Hast du eine Vorstellung, wie eine smarte Wohnung aussieht?) |  |
| ch2-067 | 5 | 6b | OK | die Alarmanlage — die Alarmanlagen | alarm (system) | die Alarmanlage, -n |  |
| ch2-068 | 5 | 6b | OK | die Ausnahme — die Ausnahmen | exception | die Ausnahme, -n |  |
| ch2-069 | 5 | 6b | OK | bemerken | to notice | bemerken |  |
| ch2-070 | 5 | 6b | OK | bereits | already | bereits |  |
| ch2-071 | 5 | 6b | OK | berühren | to touch | berühren |  |
| ch2-072 | 5 | 6b | OK | der Einbruch — die Einbrüche | break-in | der Einbruch, "-e |  |
| ch2-073 | 5 | 6b | OK | gleichzeitig | simultaneous | gleichzeitig |  |
| ch2-074 | 5 | 6b | OK | die Haustür — die Haustüren | front door | die Haustür, -en |  |
| ch2-075 | 5 | 6b | WARN | hinsehen | to look | hinlsehen, er sieht hin, sah hin, hat hingesehen | WARN auto_corrected: 'hinlsehen' -> 'hinsehen' (checked with Wiktionary) |
| ch2-076 | 5 | 6b | OK | die Jalousie — die Jalousien | shutter | die Jalousie, -n |  |
| ch2-077 | 5 | 6b | OK | machen | to make | machen (zu + D.) (Wir haben die Wohnung zu einem Smart Home gemacht.) |  |
| ch2-078 | 6 | 6b | OK | das Magazin — die Magazine | magazine | das Magazin, -e |  |
| ch2-079 | 6 | 6b | OK | der Monitor — die Monitoren | monitor | der Monitor, -en |  |
| ch2-080 | 6 | 6b | OK | der Neubau — die Neubauten | new building | der Neubau, -ten |  |
| ch2-081 | 6 | 6b | WARN | die Nutzung — die Nutzungen | usage | die Nutzung, -en sicher (Durch die Alarmanlage fühlen sich safe (The inhabitants feel safe because of the | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Nutzungen |
| ch2-082 | 6 | 6b | OK | die Bewohner sicher.) | alarm system.) | die Bewohner sicher.) |  |
| ch2-083 | 6 | 6b | OK | smart | smart | smart |  |
| ch2-084 | 6 | 6b | OK | das Smart Home — die Smart Homes | smart home | das Smart Home, -s |  |
| ch2-085 | 6 | 6b | OK | steuern | to control | steuern |  |
| ch2-086 | 6 | 6b | OK | der Tagesablauf — die Tagesabläufe | daily routine | der Tagesablauf, "-e |  |
| ch2-087 | 6 | 6b | OK | die Videonachricht — die Videonachrichten | video message | die Videonachricht, -en |  |
| ch2-088 | 6 | 6b | OK | die Wand — die Wände | wall | die Wand, "-e |  |
| ch2-089 | 6 | 6b | OK | die Zentrale — die Zentralen | headquarters | die Zentrale, -n |  |
| ch2-090 | 6 | 6c | OK | kommen | to come | kommen, er kommt, kam, ist gekommen (zu Besuch kommen) |  |
| ch2-091 | 6 | 6c | OK | wessen | whose | wessen |  |
| ch2-092 | 6 | 6c | OK | zu Besuch kommen | to come for a visit | zu Besuch kommen |  |
| ch2-093 | 6 | 6d | WARN | anpassen | to adjust | anIpassen (an + A.) | WARN auto_corrected: 'anIpassen' -> 'anpassen' (checked with Wiktionary) |
| ch2-094 | 6 | 6d | WARN | einschalten | to switch on | ein/schalten | WARN auto_corrected: 'ein/schalten' -> 'einschalten' (checked with Wiktionary) |
| ch2-095 | 6 | 6d | WARN | Hightech | high tech | Hightech (Sg. ohne Artikel) | WARN english_spelling: unknown English word(s): tech |
| ch2-096 | 6 | 7a | OK | geschehen | to happen | geschehen, er geschieht, geschah, ist geschehen |  |
| ch2-097 | 6 | 7a | OK | sich leisten | to afford | leisten (sich) |  |
| ch2-098 | 6 | 7a | OK | die Sorge — die Sorgen | worry | die Sorge, -n (Ich mache mir so viele Sorgen um meine Kinder.) |  |
| ch2-099 | 6 | 7a | ERROR | zo | despite | (9 +) zo | WARN ocr_low_confidence: OCR confidence 0.77 < 0.85; ERROR unknown_word: 'zo' not in Wiktionary |
| ch2-100 | 6 | 7a | OK | wegen | because of | wegen (+ G.) |  |
| ch2-101 | 6 | 7b | OK | entsprechen | to correspond | entsprechen, er entspricht, entsprach, hat entsprochen |  |
| ch2-102 | 6 | 7c | OK | die Einkaufsliste — die Einkaufslisten | shopping list | die Einkaufsliste, -n |  |
| ch2-103 | 6 | 7c | OK | sparsam | frugal/economical | sparsam |  |
| ch2-104 | 6 | 7c | OK | von Hand | by hand | von Hand |  |
| ch2-105 | 6 | 7d | OK | die Gefahr — die Gefahren | danger | die Gefahr, -en |  |
| ch2-106 | 6 | 9b | OK | die Werbeanzeige — die Werbeanzeigen | advertisement | die Werbeanzeige, -n |  |
| ch2-107 | 6 | 9c | OK | ansprechend | appealing | ansprechend |  |
| ch2-108 | 6 | 9c | OK | unmodern | unfashionable | unmodern |  |
| ch2-109 | 6 | 9c | OK | unverständlich | incomprehensible | unverständlich |  |
| ch2-110 | 6 | 9c | OK | P6 ausgezeichnet | excellent | P6 ausgezeichnet |  |
| ch2-111 | 6 | 9c | OK | frech | cheeky | frech |  |
| ch2-112 | 6 | 9c | OK | merkwürdig | strange | merkwürdig |  |
| ch2-113 | 6 | 9c | WARN | seltsam | ppo | seltsam | WARN english_spelling: unknown English word(s): ppo |
| ch2-114 | 6 | 9c | OK | Wirken | to seem | Wirken (auf + A.) |  |
| ch2-115 | 6 | 10a | WARN | davon | hier in etwa: of it | davon | WARN english_spelling: unknown English word(s): etwa, hier |
| ch2-116 | 6 | 10a | OK | der Klebefilm — die Klebefilme | adhesive tape | der Klebefilm, -e |  |
| ch2-117 | 6 | 10a | OK | der Markenname — die Markennamen | brand name | der Markenname, -n |  |
| ch2-118 | 6 | 10a | OK | die Schmerztablette — die Schmerztabletten | pain killer | die Schmerztablette, -n |  |
| ch2-119 | 6 | 10a | OK | der Süßstoff — die Süßstoffe | sweetener | der SüBstoff, -e |  |
| ch2-120 | 6 | 10a | OK | das Taschentuch — die Taschentücher | handkerchief | das Taschentuch, "-er |  |
| ch2-121 | 6 | 10b | WARN | ansprechen | to speak to | anlsprechen, er spricht an, sprach an, hat angesprochen (Werbung spricht sehr oft Gefühle an.) | WARN auto_corrected: 'anlsprechen' -> 'ansprechen' (checked with Wiktionary) |
| ch2-122 | 6 | 10b | OK | aufmerksam | attentive | aufmerksam |  |
| ch2-123 | 6 | 10b | OK | automatisch | automatic | automatisch |  |
| ch2-124 | 7 | 10b | OK | beeinflussen | to influence | beeinflussen |  |
| ch2-125 | 7 | 10b | WARN | dabei | hier keine bersetzung | dabei (Werbung hilft dabei, dass Kunden bestimmte Produkte kaufen.) | WARN english_spelling: unknown English word(s): bersetzung, hier, keine |
| ch2-126 | 7 | 10b | OK | ebenfalls | also | ebenfalls |  |
| ch2-127 | 7 | 10b | OK | die Erinnerung — die Erinnerungen | memory | die Erinnerung, -en (in Erinnerung bleiben) |  |
| ch2-128 | 7 | 10b | OK | genügen | to suffice | genügen |  |
| ch2-129 | 7 | 10b | OK | interessiert | interested | interessiert |  |
| ch2-130 | 7 | 10b | WARN | das Kaufverhalten — die Kaufverhalten | shopping behaviour | das Kaufverhalten, - | WARN english_spelling: unknown English word(s): behaviour |
| ch2-131 | 7 | 10b | OK | reichen | to be enough | reichen (Das reicht schon.) |  |
| ch2-132 | 7 | 10b | OK | der Spruch — die Sprüche | saying | der Spruch, "-e |  |
| ch2-133 | 7 | 10b | OK | überrascht | surprised | überrascht |  |
| ch2-134 | 7 | 10b | OK | das Unternehmen — die Unternehmen | company | das Unternehmen, - |  |
| ch2-135 | 7 | 10b | WARN | das Verhalten — die Verhalten | behaviour | das Verhalten, - | WARN english_spelling: unknown English word(s): behaviour |
| ch2-136 | 7 | 10b | OK | vertrauen | to trust | vertrauen |  |
| ch2-137 | 7 | 10b | OK | die Werbesprache | advertising language | die Werbesprache (Sg.) |  |
| ch2-138 | 7 | 10b | OK | der Werbetrick — die Werbetricks | advertising trick | der Werbetrick, -s |  |
| ch2-139 | 7 | 10b | OK | das Wortspiel — die Wortspiele | pun/play on words | das Wortspiel, -e |  |
| ch2-140 | 7 | 10c | OK | das Merkmal — die Merkmale | characteristic | das Merkmal, -e |  |
| ch2-141 | 7 | 11 | WARN | Finnland | Finnland | Finnland | WARN english_spelling: unknown English word(s): finnland |
| ch2-142 | 7 | 11 | OK | italienisch | Italian | italienisch |  |
| ch2-143 | 7 | 11 | WARN | das Kinderprodukt — die Kinderprodukte | children's product | das Kinderprodukt, -e | WARN english_spelling: unknown English word(s): children's |
| ch2-144 | 7 | 11 | OK | ungesund | unhealthy | ungesund |  |
| ch2-145 | 7 | 11 | OK | verbieten | to forbid | verbieten, er verbietet, verbat, hat verboten |  |
| ch2-146 | 7 | 11 | OK | k&k das Adverb, -ien | adverb | k&k das Adverb, -ien |  |
| ch2-147 | 7 | 11 | OK | davor | before that | davor |  |
| ch2-148 | 7 | 11 | OK | der Konsekutivsatz — die Konsekutivsätze | consecutive clause | der Konsekutivsatz, "-e |  |
| ch2-149 | 7 | 11 | OK | die Silbe — die Silben | syllable | die Silbe, -n |  |
| ch3-001 | 7 | 1a | OK | der Arbeiter — die Arbeiter | worker (m) | der Arbeiter, - |  |
| ch3-002 | 7 | 1a | OK | die Arbeiterin — die Arbeiterinnen | worker (f) | die Arbeiterin, -nen |  |
| ch3-003 | 7 | 1a | OK | automatisiert | automated | automatisiert |  |
| ch3-004 | 7 | 1a | OK | die Bedingung — die Bedingungen | condition | die Bedingung, -en |  |
| ch3-005 | 7 | 1a | OK | die Behandlung — die Behandlungen | treatment | die Behandlung, -en |  |
| ch3-006 | 7 | 1a | OK | die Diagnose — die Diagnosen | diagnosis | die Diagnose, -n |  |
| ch3-007 | 7 | 1a | OK | die Gruppenarbeit — die Gruppenarbeiten | group work | die Gruppenarbeit, -en |  |
| ch3-008 | 7 | 1a | OK | die Handarbeit — die Handarbeiten | handiwork | die Handarbeit, -en |  |
| ch3-009 | 7 | 1a | WARN | die Hygiene | hygene | die Hygiene (Sg.) | WARN english_spelling: unknown English word(s): hygene |
| ch3-010 | 7 | 1a | OK | die Konkurrenz | competition | die Konkurrenz (Sg.) |  |
| ch3-011 | 7 | 1a | OK | medizinisch | medical | medizinisch |  |
| ch3-012 | 7 | 1a | OK | monoton | monotonous | monoton |  |
| ch3-013 | 7 | 1a | OK | operieren | to operate | operieren |  |
| ch3-014 | 7 | 1a | OK | die Pflegekraft — die Pflegekräfte | caregiver | die Pflegekraft,"e |  |
| ch3-015 | 7 | 1a | OK | die Schulbildung | education | die Schulbildung (Sg.) |  |
| ch3-016 | 7 | 1a | OK | die Strafe — die Strafen | punishment, penalty | die strafe, -n |  |
| ch3-017 | 7 | 1a | OK | tolerant | tolerant | tolerant |  |
| ch3-018 | 7 | 1a | WARN | die Unterrichtsform — die Unterrichtsformen | form of instruction | die Vnterrichtsform, -en | WARN auto_corrected: 'Vnterrichtsform' -> 'Unterrichtsform' (checked with Wiktionary) |
| ch3-019 | 7 | 1b | OK | der Gegensatz — die Gegensätze | opposite | der Gegensatz, "-e |  |
| ch3-020 | 7 | 1b | OK | minimal | minimal | minimal |  |
| ch3-021 | 7 | 2 UB | OK | ausschließlich | exclusive | ausschlieBlich |  |
| ch3-022 | 8 | 2 UB | OK | bewusst | conscious | bewusst |  |
| ch3-023 | 8 | 2 UB | OK | biologisch | biological | biologisch |  |
| ch3-024 | 8 | 2 UB | WARN | die Diät — die Diäten | diet | die Diát, -en | WARN auto_corrected: 'Diát' -> 'Diät' (checked with Wiktionary) |
| ch3-025 | 8 | 2 UB | WARN | sich ernähren | to eat, to nourish | ernáhren (sich) | WARN auto_corrected: 'sich ernáhren' -> 'sich ernähren' (checked with Wiktionary) |
| ch3-026 | 8 | 2 UB | WARN | die Ernährung | nutrition | die Ernáhrung (Sg.) | WARN auto_corrected: 'Ernáhrung' -> 'Ernährung' (checked with Wiktionary) |
| ch3-027 | 8 | 2 UB | OK | die Fitness | fitness | die Fitness (Sg.) |  |
| ch3-028 | 8 | 2 UB | OK | die Form — die Formen | form | die Form, -en |  |
| ch3-029 | 8 | 2 UB | OK | die Frucht — die Früchte | fruit | die Frucht,"e |  |
| ch3-030 | 8 | 2 UB | OK | halten | to be on (to be on a diet) | halten, er hält, hielt, hat gehalten (Diät halten) |  |
| ch3-031 | 8 | 2 UB | OK | die Karotte — die Karotten | carrot | die Karotte, -n |  |
| ch3-032 | 8 | 2 UB | WARN | das Nahrungsmittel — die Nahrungsmittel | pooj | das Nahrungsmittel, - | WARN ocr_low_confidence: OCR confidence 0.82 < 0.85; WARN english_spelling: unknown English word(s): pooj |
| ch3-033 | 8 | 2 UB | OK | produziert | produced | produziert (ökologisch produzierte Ware) |  |
| ch3-034 | 8 | 2 UB | OK | die Speise — die Speisen | food | die Speise, -n |  |
| ch3-035 | 8 | 2 UB | OK | der Trend — die Trends | trend | der Trend, -s |  |
| ch3-036 | 8 | 2 UB | OK | vegan | vegan | vegan |  |
| ch3-037 | 8 | 2 UB | OK | vegetarisch | vegetarian | vegetarisch |  |
| ch3-038 | 8 | 2 UB | OK | das Vitamin — die Vitamine | vitamin | das Vitamin, -e |  |
| ch3-039 | 8 | 2 UB | OK | das Workout — die Workouts | workout | das Workout, -s |  |
| ch3-040 | 8 | 3a | OK | erben | to inherit | erben |  |
| ch3-041 | 8 | 3a | OK | weshalb | why | weshalb |  |
| ch3-042 | 8 | 3b | OK | führen | to lead (to) | führen (zu + D.) (Welche Ereignisse können zu Veránderungen fúhren?) |  |
| ch3-043 | 8 | 3b | WARN | gewohnt | 1onsn | gewohnt | WARN ocr_low_confidence: OCR confidence 0.76 < 0.85 |
| ch3-044 | 8 | 3b | OK | die Krisensituation — die Krisensituationen | crisis (situation) | die Krisensituation, -en |  |
| ch3-045 | 8 | 3b | OK | die Lebensgeschichte — die Lebensgeschichten | life story | die Lebensgeschichte, -n |  |
| ch3-046 | 8 | 3b | OK | der Lebensweg — die Lebenswege | path in life | der Lebensweg, -e |  |
| ch3-047 | 8 | 3b | OK | der Prozess — die Prozesse | process | der Prozess, -e |  |
| ch3-048 | 8 | 3b | OK | raus | out | raus |  |
| ch3-049 | 8 | 3b | OK | der Todesfall — die Todesfälle | death | der Todesfall, "e |  |
| ch3-050 | 8 | 3b | OK | die Trennung — die Trennungen | separation | die Trennung, -en |  |
| ch3-051 | 8 | 3b | OK | der Wendepunkt — die Wendepunkte | turning point | der Wendepunkt, -e |  |
| ch3-052 | 8 | 3b | OK | der Zeitschriftenartikel — die Zeitschriftenartikel | newspaper article | der Zeitschriftenartikel, - |  |
| ch3-053 | 8 | 3c | OK | Afrika | Africa | Afrika |  |
| ch3-054 | 8 | 3c | OK | das Anliegen — die Anliegen | issue | das Anliegen, - |  |
| ch3-055 | 8 | 3c | OK | der Berufssoldat — die Berufssoldaten | professional soldier (m) | der Berufssoldat, -en |  |
| ch3-056 | 8 | 3c | OK | die Berufssoldatin — die Berufssoldatinnen | professional soldier (f) | die Berufssoldatin, -nen |  |
| ch3-057 | 8 | 3c | OK | der Buchautor — die Buchautoren | author (m) | der Buchautor, -en |  |
| ch3-058 | 8 | 3c | OK | die Buchautorin — die Buchautorinnen | author (f) | die Buchautorin, -nen |  |
| ch3-059 | 8 | 3c | OK | die Bundeswehrzeit — die Bundeswehrzeiten | time in the armed forces | die Bundeswehrzeit, -en |  |
| ch3-060 | 8 | 3c | WARN | sich einsetzen | to support | ein/setzen (sich) (für/gegen + A.) (sich für den Schutz der Wildtiere einsetzen) | WARN auto_corrected: 'sich ein/setzen' -> 'sich einsetzen' (checked with Wiktionary) |
| ch3-061 | 8 | 3c | OK | die Herausforderung — die Herausforderungen | challenge | die Herausforderung, -en |  |
| ch3-062 | 8 | 3c | OK | die Lebenswende — die Lebenswenden | turning point (in life) | die Lebenswende, -n |  |
| ch3-063 | 8 | 3c | OK | der Mut | courage | der Mut (Sg.) (Mark möchte anderen Mut machen, für ihre Ziele zu kámpfen.) |  |
| ch3-064 | 8 | 3c | OK | Namibia | Namibia | Namibia |  |
| ch3-065 | 8 | 3c | OK | die Rückkehr | return | die Rückkehr (Sg.) |  |
| ch3-066 | 8 | 3c | OK | sammeln | to gain | sammeln (Als Fotograf hat er schon viel Erfahrung gesammelt.) |  |
| ch3-067 | 8 | 3c | OK | schließlich | finally, eventually | schlieBlich |  |
| ch3-068 | 8 | 3c | OK | das Schutzprojekt — die Schutzprojekte | protection project | das Schutzprojekt, -e |  |
| ch3-069 | 8 | 3c | OK | die Sehnsucht — die Sehnsüchte | longing, desire | die Sehnsucht, "-e |  |
| ch3-070 | 9 | 3c | OK | verursachen | to cause | verursachen |  |
| ch3-071 | 9 | 3c | OK | wesentlich | considerable | wesentlich |  |
| ch3-072 | 9 | 3c | OK | der Wildhüter — die Wildhüter | gamekeeper (m) | der Wildhüter, - |  |
| ch3-073 | 9 | 3c | OK | die Wildhüterin — die Wildhüterinnen | gamekeeper (f) | die Wildhüterin, -nen |  |
| ch3-074 | 9 | 3c | OK | das Wildtier — die Wildtiere | wild animal | das Wildtier, -e |  |
| ch3-075 | 9 | 3c | OK | die Wildtierstation — die Wildtierstationen | wild animal care facility | die Wildtierstation, -en |  |
| ch3-076 | 9 | 3c | OK | zufällig | coincidentally | zufällig |  |
| ch3-077 | 9 | 3c | OK | zweimonatig | two month (ly) | zweimonatig |  |
| ch3-078 | 9 | 3c | OK | abwärts | downwards | abwärts |  |
| ch3-079 | 9 | 3c | OK | der Bahnradfahrer — die Bahnradfahrer | track bicycle driver (m) | der Bahnradfahrer, - |  |
| ch3-080 | 9 | 3c | OK | die Bahnradfahrerin — die Bahnradfahrerinnen | track bicycle driver (f) | die Bahnradfahrerin, -nen |  |
| ch3-081 | 9 | 3c | WARN | ehren | to honour | ehren | WARN english_spelling: unknown English word(s): honour |
| ch3-082 | 9 | 3c | OK | engagiert sein | to be involved in | engagiert sein |  |
| ch3-083 | 9 | 3c | OK | sich ereignen | to happen | ereignen (sich) |  |
| ch3-084 | 9 | 3c | OK | -fach | "-fold" (tenfold) | -fach (zehnfach) |  |
| ch3-085 | 9 | 3c | WARN | gelähmt | paralyzed | geláhmt | WARN auto_corrected: 'geláhmt' -> 'gelähmt' (checked with Wiktionary) |
| ch3-086 | 9 | 3c | OK | der Held — die Helden | hero (m) | der Held, -en |  |
| ch3-087 | 9 | 3c | OK | die Heldin — die Heldinnen | hero (f) | die Heldin, -nen |  |
| ch3-088 | 9 | 3c | OK | der Höhepunkt — die Höhepunkte | peak | der Höhepunkt, -e |  |
| ch3-089 | 9 | 3c | OK | kämpfen | to fight | kämpfen (für/gegen + A.) |  |
| ch3-090 | 9 | 3c | OK | lokal | local | lokal |  |
| ch3-091 | 9 | 3c | OK | mittlerweile | meanwhile | mittlerweile |  |
| ch3-092 | 9 | 3c | OK | der Oberkörper — die Oberkörper | upper body | der Oberkörper, - |  |
| ch3-093 | 9 | 3c | OK | der Olympiasieger — die Olympiasieger | Olympic champion (m) | der Olympiasieger, - |  |
| ch3-094 | 9 | 3c | OK | die Olympiasiegerin — die Olympiasiegerinnen | Olympic champion (f) | die Olympiasiegerin, -nen |  |
| ch3-095 | 9 | 3c | OK | der Optimismus | optimism | der Optimismus (Sg.) |  |
| ch3-096 | 9 | 3c | OK | politisch | political | politisch |  |
| ch3-097 | 9 | 3c | OK | die Powerfrau — die Powerfrauen | power woman | die Powerfrau, -en |  |
| ch3-098 | 9 | 3c | OK | das Privatleben | private life | das Privatleben (Sg.) |  |
| ch3-099 | 9 | 3c | OK | radikal | radical | radikal |  |
| ch3-100 | 9 | 3c | OK | seitdem | since then | seitdem (Sie hatte einen Unfall. Seitdem ist sie geláhmt.) |  |
| ch3-101 | 9 | 3c | OK | die Selbstständigkeit | independence | die Selbstständigkeit (Sg.) |  |
| ch3-102 | 9 | 3c | OK | der Stadtrat — die Stadträte | city council | der Stadtrat, "-e (Sie ist Mitglied im Stadtrat.) |  |
| ch3-103 | 9 | 3c | OK | stürzen | to fall | stürzen |  |
| ch3-104 | 9 | 3c | OK | tätig sein | to take an active part | tätig sein |  |
| ch3-105 | 9 | 3c | OK | unverändert | unchanged | unverändert |  |
| ch3-106 | 9 | 3c | OK | von ... auf | from one ... to the next | von ... auf (Von einem Tag auf den anderen veränderte sich ihr Leben radikal.) |  |
| ch3-107 | 9 | 3c | OK | die Wahl — die Wahlen | election | die Wahl, -en (Sie gewann eine lokale Wahl und ist nun im Stadtrat aktiv.) |  |
| ch3-108 | 9 | 3c | WARN | der Weltmeister — die Weltmeistere | world champion (m) | der Weltmeister, -e | WARN plural_mismatch: plural 'die Weltmeistere' but Wiktionary has: Weltmeister |
| ch3-109 | 9 | 3c | OK | die Weltmeisterin — die Weltmeisterinnen | world champion (f) | die Weltmeisterin, -nen |  |
| ch3-110 | 9 | 3c | OK | die Wirbelsäule — die Wirbelsäulen | spine | die Wirbelsäule, -n |  |
| ch3-111 | 9 | 4b | OK | literarisch | literary | literarisch |  |
| ch3-112 | 9 | 4b | ERROR | das Vergangene | past | das Vergangene (Sg.) | ERROR unknown_word: 'Vergangene' not in Wiktionary |
| ch3-113 | 9 | 4b | OK | die Vergangenheitsform — die Vergangenheitsformen | past tense | die Vergangenheitsform, -en |  |
| ch3-114 | 9 | 4b | OK | der Zeitungsartikel — die Zeitungsartikel | newspaper article | der Zeitungsartikel, - |  |
| ch3-115 | 9 | 4d | OK | begeistern | to delight, to inspire | begeistern |  |
| ch3-116 | 9 | 4d | OK | historisch | historical | historisch |  |
| ch3-117 | 9 | 4d | OK | das Stadtfest — die Stadtfeste | city festival | das Stadtfest, -e |  |
| ch3-118 | 10 | 5a | OK | erstellen | to create | erstellen |  |
| ch3-119 | 10 | 5b | OK | der/die Alte — die Alten | oneself | der/die Alte, -n (wieder der/die Alte sein) |  |
| ch3-120 | 10 | 5b | OK | aufwachen | to wake up | aufwachen |  |
| ch3-121 | 10 | 5b | OK | außerhalb | outside | auBerhalb (+ G.) |  |
| ch3-122 | 10 | 5b | OK | frisch | new | frisch (Ich bin frisch verliebt.) |  |
| ch3-123 | 10 | 5b | OK | gemacht sein | to be made for | gemacht sein (für + A.) (Ich freue mich, wenn ich Klamotten finde, die wie für mich gemacht sind.) |  |
| ch3-124 | 10 | 5b | OK | innerhalb | within | innerhalb (+ G.) |  |
| ch3-125 | 10 | 5b | OK | liebevoll | loving | liebevoll |  |
| ch3-126 | 10 | 5b | OK | der Nachtisch — die Nachtische | dessert | der Nachtisch, -e |  |
| ch3-127 | 10 | 5b | OK | schwach, schwächer, am schwächsten | weak | schwach, schwächer, am schwächsten |  |
| ch3-128 | 10 | 5b | OK | die Schwiegereltern — die Schwiegereltern | parents-in-law | die Schwiegereltern (Pl.) |  |
| ch3-129 | 10 | 5b | OK | der Sonnabend — die Sonnabende | Saturday | der Sonnabend, -e |  |
| ch3-130 | 10 | 5b | OK | sich verlieben | to fall in love | verlieben (sich) (in + A.) |  |
| ch3-131 | 10 | 5b | OK | verschwinden | to disappear | verschwinden, er verschwindet, verschwand, ist verschwunden |  |
| ch3-132 | 10 | 5b | OK | während | during | während (+ G.) (Während der Arbeit lachen mein Team und ich oft.) |  |
| ch3-133 | 10 | 5e | OK | der Regentag — die Regentage | rainy day | der Regentag, -e |  |
| ch3-134 | 10 | 6a | OK | jetzig | current | jetzig |  |
| ch3-135 | 10 | 6a | WARN | das Klinikum | clinic, hospital | das Klinikum, Kliniken | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it) |
| ch3-136 | 10 | 6b | OK | die Krise — die Krisen | crisis (situation) | die Krise, -n |  |
| ch3-137 | 10 | 6b | OK | lieb haben | to love | lieb haben |  |
| ch3-138 | 10 | 6b | OK | das Verhältnis — die Verhältnisse | relationship | das Verhältnis, -se |  |
| ch3-139 | 10 | 6b | OK | die Zuneigung | affection | die Zuneigung (Sg.) |  |
| ch3-140 | 10 | 6c | OK | üß die Botschaft, -en — die üß die Botschaft, -enen | embassy | üB die Botschaft, -en |  |
| ch3-141 | 10 | 6c | OK | das Konsulat — die Konsulate | consulate | das Konsulat, -e |  |
| ch3-142 | 10 | 6c | OK | der Reisepass — die Reisepässe | passport | der Reisepass, "e |  |
| ch3-143 | 10 | 6c | OK | überqueren | to cross | überqueren |  |
| ch3-144 | 10 | 6c | OK | der Zoll — die Zölle | customs | der Zoll, "-e |  |
| ch3-145 | 10 | 6d | WARN | aufgeben | to forsake | auflgeben, er gibt auf, gab auf, hat aufgegeben | WARN auto_corrected: 'auflgeben' -> 'aufgeben' (checked with Wiktionary) |
| ch3-146 | 10 | 6d | OK | die Liebesgeschichte — die Liebesgeschichten | love story | die Liebesgeschichte, -n |  |
| ch3-147 | 10 | 6d | OK | niemals | never | niemals |  |
| ch3-148 | 10 | 6d | WARN | wegziehen | to move away | weglziehen, er zieht weg, zog weg, ist weggezogen | WARN auto_corrected: 'weglziehen' -> 'wegziehen' (checked with Wiktionary) |
| ch3-149 | 10 | 8a | OK | der/die Büroangestellte — die Büroangestellten | office worker | der/die Büroangestellte, -n |  |
| ch3-150 | 10 | 8b | OK | das Camping | camping | das Camping (Sg.) |  |
| ch3-151 | 10 | 8b | OK | die Espresso-Kanne — die Espresso-Kannen | Italian coffee pot | die Espresso-Kanne, -n |  |
| ch3-152 | 10 | 9a | OK | der Aspekt — die Aspekte | aspect | der Aspekt, -e |  |
| ch3-153 | 10 | 9a | OK | der Blogeintrag — die Blogeinträge | blog post | der Blogeintrag, "e |  |
| ch3-154 | 10 | 9a | OK | das Fach — die Fächer | compartment | das Fach, "-er (Meine Tasche hat viele kleine Fácher.) |  |
| ch3-155 | 10 | 9a | OK | gucken | to look | gucken |  |
| ch3-156 | 10 | 9a | OK | jahrelang | for years | jahrelang |  |
| ch3-157 | 10 | 9a | OK | der Lehrling — die Lehrlinge | apprentice | der Lehrling, -e |  |
| ch3-158 | 10 | 9a | OK | die Mark — die Mark | German Mark | die Mark, - (Vor dem Euro war die Wáhrung in Deutschland Mark.) |  |
| ch3-159 | 10 | 9a | OK | der Pfennig — die Pfennige | penny | der Pfennig, -e (Vor dem Cent hieB die Währung in Deutschland Pfennig.) |  |
| ch3-160 | 10 | 9a | OK | relativ | relative | relativ |  |
| ch3-161 | 11 | 9a | OK | veröffentlichen | to release, to publish | veröffentlichen |  |
| ch3-162 | 11 | 9b | OK | der Baustein — die Bausteine | building block | der Baustein, -e |  |
| ch3-163 | 11 | 9b | OK | das Muster — die Muster | pattern | das Muster, - |  |
| ch3-164 | 11 | 9b | OK | die Struktur — die Strukturen | structure | die struktur, -en |  |
| ch3-165 | 11 | 9b | OK | die Tempusform — die Tempusformen | tense (form) | die Tempusform, -en |  |
| ch3-166 | 11 | 9c | WARN | aussuchen | to choose | aus/suchen | WARN auto_corrected: 'aus/suchen' -> 'aussuchen' (checked with Wiktionary) |
| ch3-167 | 11 | 9c | OK | nachher | afterwards | nachher |  |
| ch3-168 | 11 | 10a | OK | begrüßen | to greet | begrüBen |  |
| ch3-169 | 11 | 10a | WARN | das Benehmen | behaviour | das Benehmen (Sg.) | WARN english_spelling: unknown English word(s): behaviour |
| ch3-170 | 11 | 10b | OK | anwesend | present | anwesend |  |
| ch3-171 | 11 | 10b | WARN | aufhalten | to hold open | auflhalten, er hält auf, hielt auf, hat aufgehalten (Es ist höflich, anderen Menschen die Tür aufzuhalten.) | WARN auto_corrected: 'auflhalten' -> 'aufhalten' (checked with Wiktionary) |
| ch3-172 | 11 | 10b | OK | die Begrüßung — die Begrüßungen | greeting | die BegrüBung, -en |  |
| ch3-173 | 11 | 10b | OK | das Benimmbuch — die Benimmbücher | book of etiquette | das Benimmbuch, "er |  |
| ch3-174 | 11 | 10b | OK | die Beziehung — die Beziehungen | relationship | die Beziehung, -en |  |
| ch3-175 | 11 | 10b | OK | beziehungsweise | or (rather) | beziehungsweise (bzw.) |  |
| ch3-176 | 11 | 10b | OK | duzen | to use the informal greeting | duzen |  |
| ch3-177 | 11 | 10b | OK | der Gastgeber — die Gastgeber | host (m) | der Gastgeber, - |  |
| ch3-178 | 11 | 10b | OK | die Gastgeberin — die Gastgeberinnen | host (f) | die Gastgeberin, -nen |  |
| ch3-179 | 11 | 10b | ERROR | die Gescháftsfrau — die Gescháftsfrauen | business woman | die Gescháftsfrau, -en | ERROR unknown_word: 'Gescháftsfrau' not in Wiktionary |
| ch3-180 | 11 | 10b | OK | der Geschäftsmann — die Geschäftsmänner | business man | der Geschäftsmann, "-er |  |
| ch3-181 | 11 | 10b | OK | die Gewohnheit — die Gewohnheiten | habit | die Gewohnheit, -en |  |
| ch3-182 | 11 | 10b | OK | hierarchisch | hierarchical | hierarchisch |  |
| ch3-183 | 11 | 10b | OK | ignorieren | to ignore | ignorieren |  |
| ch3-184 | 11 | 10b | OK | klagen | to lament | klagen |  |
| ch3-185 | 11 | 10b | OK | der Kuss — die Küsse | kiss | der Kuss, "-e |  |
| ch3-186 | 11 | 10b | OK | der Lift — die Lifte | elevator | der Lift, -e |  |
| ch3-187 | 11 | 10b | OK | niesen | to sneeze | niesen |  |
| ch3-188 | 11 | 10b | OK | das Personal | staff | das Personal (Sg.) |  |
| ch3-189 | 11 | 10b | OK | die Reihe — die Reihen | turn (in turn) | die Reihe, -n (der Reihe nach) |  |
| ch3-190 | 11 | 10b | OK | siezen | to use the formal greeting | siezen |  |
| ch3-191 | 11 | 10b | OK | theoretisch | theoretical | theoretisch |  |
| ch3-192 | 11 | 10b | OK | üblich | usual | üblich |  |
| ch3-193 | 11 | 10b | OK | umarmen | to hug | umarmen |  |
| ch3-194 | 11 | 10b | OK | umgekehrt | the other way around | umgekehrt |  |
| ch3-195 | 11 | 10b | OK | unsicher | insecure | unsicher |  |
| ch3-196 | 11 | 10b | OK | unter | among | unter (+ D.) (Unter Studierenden gibt es eigentlich kein Siezen mehr.) |  |
| ch3-197 | 11 | 10b | OK | sich verhalten | to behave | verhalten (sich), er verhált, verhielt, hat verhalten |  |
| ch3-198 | 11 | 10b | OK | verkehrt | wrong | verkehrt |  |
| ch3-199 | 11 | 10b | OK | vertraut | familiar | vertraut |  |
| ch3-200 | 11 | 10b | OK | der/die Vorgesetzte — die Vorgesetzten | superiors | der/die Vorgesetzte, -n |  |
| ch3-201 | 11 | 10b | OK | die Wange — die Wangen | cheek | die Wange,-n |  |
| ch3-202 | 11 | 10b | OK | k&k die Vokaländerung, -en | vowel change | k&k die Vokaländerung, -en |  |
| ch4-001 | 11 | 1b | OK | die Analyse — die Analysen | analysis | die Analyse, -n |  |
| ch4-002 | 12 | 1b | WARN | austragen | to deliver (to deliver post) | ausltragen, er trágt aus, trug aus, hat ausgetragen (Post austragen) | WARN auto_corrected: 'ausltragen' -> 'austragen' (checked with Wiktionary) |
| ch4-003 | 12 | 1b | WARN | der Briefträger — die Briefträger | postal carrier (m) | der Brieftráger, - | WARN auto_corrected: 'Brieftráger' -> 'Briefträger' (checked with Wiktionary) |
| ch4-004 | 12 | 1b | OK | die Briefträgerin — die Briefträgerinnen | postal carrier (f) | die Briefträgerin, -nen |  |
| ch4-005 | 12 | 1b | OK | der Chemiker — die Chemiker | chemist (m) | der Chemiker, - |  |
| ch4-006 | 12 | 1b | OK | die Chemikerin — die Chemikerinnen | chemist (f) | die Chemikerin, -nen |  |
| ch4-007 | 12 | 1b | OK | die Elektronik | electronics | die Elektronik (Sg.) |  |
| ch4-008 | 12 | 1b | OK | exakt | exact | exakt |  |
| ch4-009 | 12 | 1b | OK | geregelt | fixed | geregelt |  |
| ch4-010 | 12 | 1b | OK | der Mechatroniker — die Mechatroniker | mechanical electronics engineer (m) | der Mechatroniker, - |  |
| ch4-011 | 12 | 1b | WARN | die Mechatronikern — die Mechatronikernnen | mechanical electronics engineer (f) | die Mechatronikerin, -nen | WARN auto_corrected: 'Mechatronikerin' -> 'Mechatronikern' (checked with Wiktionary) |
| ch4-012 | 12 | 1b | OK | das Metall — die Metalle | metal | das Metall, -e |  |
| ch4-013 | 12 | 1b | WARN | zustellen | to deliver | zulstellen | WARN auto_corrected: 'zulstellen' -> 'zustellen' (checked with Wiktionary) |
| ch4-014 | 12 | 1c | OK | ursprünglich | originally | ursprünglich |  |
| ch4-015 | 12 | 1a UB | OK | die Akte — die Akten | file | die Akte, -n |  |
| ch4-016 | 12 | 1a UB | WARN | anbauen | to cultivate, to attach | an/bauen | WARN auto_corrected: 'an/bauen' -> 'anbauen' (checked with Wiktionary) |
| ch4-017 | 12 | 1a UB | OK | der/die Angeklagte — die Angeklagten | defendant | der/die Angeklagte, -n |  |
| ch4-018 | 12 | 1a UB | WARN | die Anlage — die Anlagen | attachment, facility, ehibit | die Anlage, -n | WARN english_spelling: unknown English word(s): ehibit |
| ch4-019 | 12 | 1a UB | OK | sich beschäftigen | to occupy oneself with | beschäftigen (sich) (mit + D.) |  |
| ch4-020 | 12 | 1a UB | OK | das Einkommen — die Einkommen | income | das Einkommen, - |  |
| ch4-021 | 12 | 1a UB | WARN | der Elektroingenieur — die Elektroingenieur | electrical engineer (m) | der Elektroingenieur, - | WARN plural_mismatch: plural 'die Elektroingenieur' but Wiktionary has: Elektroingenieure |
| ch4-022 | 12 | 1a UB | OK | die Elektroingenieurin — die Elektroingenieurinnen | electrical engineer (f) | die Elektroingenieurin, -nen |  |
| ch4-023 | 12 | 1a UB | OK | fair | fair | fair |  |
| ch4-024 | 12 | 1a UB | OK | der Fernsehsender — die Fernsehsender | TV channel | der Fernsehsender, - |  |
| ch4-025 | 12 | 1a UB | OK | gerecht | fair | gerecht |  |
| ch4-026 | 12 | 1a UB | OK | das Gericht — die Gerichte | court (of law) | das Gericht, -e (Ich bin Anwältin und oft am Gericht.) |  |
| ch4-027 | 12 | 1a UB | OK | die Gerichtsverhandlung — die Gerichtsverhandlungen | trial | die Gerichtsverhandlung, -en |  |
| ch4-028 | 12 | 1a UB | OK | herlstellen | to create | herlstellen |  |
| ch4-029 | 12 | 1a UB | OK | die Industrie — die Industrien | industry | die Industrie, -n |  |
| ch4-030 | 12 | 1a UB | OK | die Landwirtschaft | agriculture | die Landwirtschaft (Sg.) |  |
| ch4-031 | 12 | 1a UB | OK | die Menschenkenntnis | people skills, knowledge of people | die Menschenkenntnis (Sg.) |  |
| ch4-032 | 12 | 1a UB | OK | die Öffentlichkeit | public | die öffentlichkeit (Sg.) |  |
| ch4-033 | 12 | 1a UB | OK | die Partei — die Parteien | political party | die Partei, -en |  |
| ch4-034 | 12 | 1a UB | OK | der Rechtsanwalt — die Rechtsanwälte | lawyer (m) | der Rechtsanwalt, "-e |  |
| ch4-035 | 12 | 1a UB | OK | die Rechtsanwältin — die Rechtsanwältinnen | lawyer (f) | die Rechtsanwältin, -nen |  |
| ch4-036 | 12 | 1a UB | OK | die Reportage — die Reportagen | report | die Reportage, -n |  |
| ch4-037 | 12 | 1a UB | OK | der Reporter — die Reporter | reporter (m) | der Reporter, - |  |
| ch4-038 | 12 | 1a UB | OK | die Reporterin — die Reporterinnen | reporter (f) | die Reporterin, -nen |  |
| ch4-039 | 12 | 1a UB | OK | der Richter — die Richter | judge (m) | der Richter, - |  |
| ch4-040 | 12 | 1a UB | OK | die Richterin — die Richterinnen | judge (f) | die Richterin, -nen |  |
| ch4-041 | 12 | 1a UB | OK | der Schreiner — die Schreiner | carpenter (m) | der Schreiner, - |  |
| ch4-042 | 12 | 1a UB | OK | die Schreinerin — die Schreinerinnen | carpenter (f) | die Schreinerin, -nen |  |
| ch4-043 | 12 | 1a UB | OK | der Spezialist — die Spezialisten | specialist (m) | der Spezialist, -en |  |
| ch4-044 | 12 | 1a UB | OK | die Spezialistin — die Spezialistinnen | specialist (f) | die Spezialistin, -nen |  |
| ch4-045 | 12 | 1a UB | WARN | das Urteil — die Urteile | verdict | das Yrteil, -e | WARN auto_corrected: 'Yrteil' -> 'Urteil' (checked with Wiktionary) |
| ch4-046 | 12 | 1a UB | OK | das Verbrechen — die Verbrechen | crime | das Verbrechen, - |  |
| ch4-047 | 12 | 1c | OK | der Augenblick — die Augenblicke | moment | der Augenblick, -e |  |
| ch4-048 | 12 | 1c | OK | daran | about that | daran |  |
| ch4-049 | 12 | 1c | OK | die Entwicklung — die Entwicklungen | development | die Entwicklung, -en |  |
| ch4-050 | 12 | 1c | WARN | ernst nehmen | to take sth seriously | ernst nehmen, er nimmt ernst, nahm ernst, hat ernst genommen | WARN english_spelling: unknown English word(s): sth |
| ch4-051 | 12 | 3 | WARN | aushalten | to cope (with) | auslhalten, er hált aus, hielt aus, hat ausgehalten | WARN auto_corrected: 'auslhalten' -> 'aushalten' (checked with Wiktionary) |
| ch4-052 | 12 | 3 | OK | der Wunschberuf — die Wunschberufe | dream job | der Wunschberuf, -e |  |
| ch4-053 | 13 | 4d | OK | die Konjunktivform — die Konjunktivformen | subjunctive form | die Konjunktivform, -en |  |
| ch4-054 | 13 | 5a | OK | der Bedingungssatz — die Bedingungssätze | conditional clause | der Bedingungssatz, "-e |  |
| ch4-055 | 13 | 5a | WARN | freinehmen | to take time off | freilnehmen, er nimmt frei, nahm frei, hat freigenommen | WARN auto_corrected: 'freilnehmen' -> 'freinehmen' (checked with Wiktionary) |
| ch4-056 | 13 | 5a | OK | irreal | surreal | irreal |  |
| ch4-057 | 13 | 6a UB | OK | das Besteck — die Bestecke | cutlery | das Besteck, -e |  |
| ch4-058 | 13 | 6a UB | OK | die Bürste — die Bürsten | brush | die Bürste, -n |  |
| ch4-059 | 13 | 6a UB | WARN | färben | to colour | färben | WARN english_spelling: unknown English word(s): colour |
| ch4-060 | 13 | 6a UB | OK | föhnen | to dry ones hair | föhnen |  |
| ch4-061 | 13 | 6a UB | OK | die Gaststätte — die Gaststätten | restaurant | die Gaststätte, -n |  |
| ch4-062 | 13 | 6a UB | OK | der Hammer — die Hammer | hammer | der Hammer, - |  |
| ch4-063 | 13 | 6a UB | OK | der Imbiss — die Imbisse | takeaway | der Imbiss, -e |  |
| ch4-064 | 13 | 6a UB | OK | der Kamm — die Kämme | comb | der Kamm,"-e |  |
| ch4-065 | 13 | 6a UB | OK | der Karton — die Kartons | carton | der Karton, -s |  |
| ch4-066 | 13 | 6a UB | OK | der Rechner — die Rechner | calculator | der Rechner, - |  |
| ch4-067 | 13 | 6a UB | OK | die Schere — die Scheren | scissors | die schere, -n |  |
| ch4-068 | 13 | 6a UB | OK | der Umschlag — die Umschläge | envelope | der Umschlag,"e |  |
| ch4-069 | 13 | 6c | OK | sich irren | to be wrong, to confuse | irren (sich) (in + D.) |  |
| ch4-070 | 13 | 6c | ERROR | schútten | to spill | schútten (Peinlich, heute habe ich einem Kollegen aus Versehen Kaffee über das Hemd geschüttet.) | ERROR unknown_word: 'schútten' not in Wiktionary |
| ch4-071 | 13 | 6c | OK | das Versehen — die Versehen | accident (accidentally) | das Versehen, - (aus Versehen) |  |
| ch4-072 | 13 | 6c | OK | verwechseln | to confuse | verwechseln |  |
| ch4-073 | 13 | 6c | ERROR | zusammen/sitzen | to sit with | zusammen/sitzen, er sitzt zusammen, saß zusammen, ist zusammengesessen | ERROR unknown_word: 'zusammen/sitzen' not in Wiktionary |
| ch4-074 | 13 | 6d | OK | die Absicht — die Absichten | intention | die Absicht, -en |  |
| ch4-075 | 13 | 6d | OK | schrecklich | terrible | schrecklich (Es tut mir schrecklich leid!) |  |
| ch4-076 | 13 | 6d | OK | verzeihen | to forgive | verzeihen, er verzieht, verzieh, hat verziehen |  |
| ch4-077 | 13 | 6e | OK | kürzlich | shortly | kürzlich |  |
| ch4-078 | 13 | 7a | OK | unfreundlich | unfriendly | unfreundlich |  |
| ch4-079 | 13 | 7a | OK | die Variante — die Varianten | variant | die Variante, -n |  |
| ch4-080 | 13 | 8b | ERROR | abschreiben |  | ablschreiben, er schreibt ab, schrieb ab, to copy hat abgeschrieben | ERROR no_english: English translation is empty; WARN auto_corrected: 'ablschreiben' -> 'abschreiben' (checked with Wiktionary) |
| ch4-081 | 13 | 8b | OK | der Anhang — die Anhänge | appendix | der Anhang,"e |  |
| ch4-082 | 13 | 8b | WARN | ankommen | to depend on | anlkommen (auf + D.), es kommt an, kam an, ist angekommen | WARN auto_corrected: 'anlkommen' -> 'ankommen' (checked with Wiktionary) |
| ch4-083 | 13 | 8b | WARN | aussagekräftig | meaningful | aussagekráftig | WARN auto_corrected: 'aussagekráftig' -> 'aussagekräftig' (checked with Wiktionary) |
| ch4-084 | 13 | 8b | OK | die Bescheinigung — die Bescheinigungen | certificate | die Bescheinigung, -en |  |
| ch4-085 | 13 | 8b | OK | das Bewerbungsfoto — die Bewerbungsfotos | application photo | das Bewerbungsfoto, -s |  |
| ch4-086 | 13 | 8b | OK | das Bewerbungsportal — die Bewerbungsportale | application website | das Bewerbungsportal, -e |  |
| ch4-087 | 13 | 8b | OK | das Bewerbungsschreiben — die Bewerbungsschreiben | cover letter | das Bewerbungsschreiben, - |  |
| ch4-088 | 13 | 8b | OK | das Bewerbungstraining — die Bewerbungstrainings | job application training | das Bewerbungstraining, -s |  |
| ch4-089 | 13 | 8b | WARN | darum | hier keine direkte bersetzung | darum(Könntest du dich darum kümmern, dass unser Kunde pünktlich zum Flughafen kommt?) | WARN english_spelling: unknown English word(s): bersetzung, direkte, hier, keine |
| ch4-090 | 13 | 8b | OK | der Download — die Downloads | download | der Download, -s |  |
| ch4-091 | 13 | 8b | OK | sich eignen | to be suitable for | eignen (sich) (für + A.) |  |
| ch4-092 | 13 | 8b | OK | enthalten | to contain | enthalten, er enthält, enthielt, hat enthalten |  |
| ch4-093 | 14 | 8b | OK | sich erkundigen | to inquire | erkundigen (sich) (nach + D.) |  |
| ch4-094 | 14 | 8b | OK | die Fortbildung — die Fortbildungen | further training | die Fortbildung, -en |  |
| ch4-095 | 14 | 8b | OK | frühere | previous | frühere |  |
| ch4-096 | 14 | 8b | OK | die Geduld | patience | die Geduld (Sg.) |  |
| ch4-097 | 14 | 8b | OK | die Institution — die Institutionen | institution | die Institution, -en |  |
| ch4-098 | 14 | 8b | OK | jedoch | however | jedoch |  |
| ch4-099 | 14 | 8b | OK | die Jobsuche — die Jobsuchen | job search | die Jobsuche, -n |  |
| ch4-100 | 14 | 8b | OK | der Lebenslauf — die Lebensläufe | resume | der Lebenslauf, "-e |  |
| ch4-101 | 14 | 8b | ERROR | mit/schicken | to send along | mit/schicken | ERROR unknown_word: 'mit/schicken' not in Wiktionary |
| ch4-102 | 14 | 8b | OK | das PDF-Dokument — die PDF-Dokumente | PDF document | das PDF-Dokument, -e |  |
| ch4-103 | 14 | 8b | OK | die Personalabteilung — die Personalabteilungen | human resources (HR) | die Personalabteilung, -en |  |
| ch4-104 | 14 | 8b | OK | der Personalchef — die Personalchefs | HR director (m) | der Personalchef, -s |  |
| ch4-105 | 14 | 8b | OK | die Personalchefin — die Personalchefinnen | HR director (f) | die Personalchefin, -nen |  |
| ch4-106 | 14 | 8b | OK | die Personalien — die Personalien | personal data | die Personalien (Pl.) |  |
| ch4-107 | 14 | 8b | OK | der Profi — die Profis | professional | der Profi, -s |  |
| ch4-108 | 14 | 8b | OK | der Ratgeber — die Ratgeber | advisor | der Ratgeber, - |  |
| ch4-109 | 14 | 8b | OK | relevant | relevant | relevant |  |
| ch4-110 | 14 | 8b | OK | sämtlich | all | sämtlich |  |
| ch4-111 | 14 | 8b | OK | selbstverständlich | of course | selbstverständlich |  |
| ch4-112 | 14 | 8b | OK | seriös | respectable | seriös |  |
| ch4-113 | 14 | 8b | OK | der Stand | status | der Stand (Sg.) (Der Chef fragt mich oft nach dem Stand der Dinge in meinem Projekt.) |  |
| ch4-114 | 14 | 8b | OK | die Voraussetzung — die Voraussetzungen | prerequisite, condition | die Voraussetzung, -en |  |
| ch4-115 | 14 | 8b | OK | die Vorlage — die Vorlagen | guideline | die Vorlage, -n |  |
| ch4-116 | 14 | 8b | OK | zukünftig | future | zukünftig |  |
| ch4-117 | 14 | 8b | OK | der Zweck — die Zwecke | purpose | der Zweck, -e |  |
| ch4-118 | 14 | 9b | OK | darüber | about that | darüber |  |
| ch4-119 | 14 | 9b | OK | das Pronominaladverb — die Pronominaladverbien | pronominal adverb | das Pronominaladverb, -ien |  |
| ch4-120 | 14 | 9c | OK | befriedigend | satisfying | befriedigend |  |
| ch4-121 | 14 | 9c | OK | sich beziehen | to refer to | beziehen (sich) (auf + A.), er bezieht, bezog, hat bezogen |  |
| ch4-122 | 14 | 9c | OK | danach | after that | danach (Die freie Stelle? Ja, Frau Markovic hat sich danach erkundigt.) |  |
| ch4-123 | 14 | 10a | OK | der Arbeitnehmer — die Arbeitnehmer | worker (m) | der Arbeitnehmer, - |  |
| ch4-124 | 14 | 10a | OK | die Arbeitnehmerin — die Arbeitnehmerinnen | worker (f) | die Arbeitnehmerin, -nen |  |
| ch4-125 | 14 | 10a | OK | der Eindruck — die Eindrücke | impression | der Eindruck, "-e (Mach einen guten Eindruck auf den Arbeitgeber.) |  |
| ch4-126 | 14 | 10a | ERROR | kleinmachen | to belittle oneself | kleinmachen | ERROR unknown_word: 'kleinmachen' not in Wiktionary |
| ch4-127 | 14 | 10a | WARN | überzeugen | to convince | úberzeugen (von + D.) | WARN auto_corrected: 'úberzeugen' -> 'überzeugen' (checked with Wiktionary) |
| ch4-128 | 14 | 10c | OK | qualifiziert | qualified | qualifiziert |  |
| ch4-129 | 14 | 12a | OK | die Absprache — die Absprachen | agreement | die Absprache, -n |  |
| ch4-130 | 14 | 12a | OK | gesucht | wanted | gesucht |  |
| ch4-131 | 14 | 12a | OK | das Inserat — die Inserate | advertisement, insert | das Inserat, -e |  |
| ch4-132 | 14 | 12a | OK | kommunikativ | communicative | kommunikativ |  |
| ch4-133 | 14 | 12a | WARN | der Nachtportier | night porter (m) | der Nachtportier, -s/-e | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it) |
| ch4-134 | 14 | 12a | OK | der Stundenlohn — die Stundenlöhne | hourly wage | der Stundenlohn, "e |  |
| ch4-135 | 14 | 12a | OK | der Teilzeitjob — die Teilzeitjobs | part-time job | der Teilzeitjob, -s |  |
| ch4-136 | 14 | 12a | OK | das Vergnügen — die Vergnügen | enjoyment, delight | das Vergnügen, - |  |
| ch4-137 | 14 | 12a | OK | die Zeiteinteilung — die Zeiteinteilungen | time management | die Zeiteinteilung, -en |  |
| ch4-138 | 14 | 12b | OK | der Bereich — die Bereiche | area | der Bereich, -e |  |
| ch4-139 | 14 | 12b | OK | die Bewerbungsunterlagen — die Bewerbungsunterlagen | application | die Bewerbungsunterlagen (Pl.) |  |
| ch4-140 | 14 | 12b | OK | der Interessent — die Interessenten | interested party (m) | der Interessent, -en |  |
| ch4-141 | 14 | 12b | OK | die Interessentin — die Interessentinnen | interested party (f) | die Interessentin, -nen |  |
| ch4-142 | 15 | 12b | WARN | vorbeikommen | to come over in person | vorbeilkommen, er kommt vorbei, kam vorbei, ist vorbeigekommen | WARN auto_corrected: 'vorbeilkommen' -> 'vorbeikommen' (checked with Wiktionary) |
| ch4-143 | 15 | 13b | OK | absolut | absolutely | absolut |  |
| ch4-144 | 15 | 13b | OK | aggressiv | aggressive | aggressiv |  |
| ch4-145 | 15 | 13b | OK | die Anfahrt — die Anfahrten | journey | die Anfahrt, -en |  |
| ch4-146 | 15 | 13b | OK | die Aufmerksamkeit | attention | die Aufmerksamkeit (Sg.) |  |
| ch4-147 | 15 | 13b | OK | die Aufregung | excitement | die Aufregung (Sg.) |  |
| ch4-148 | 15 | 13b | OK | der Auftritt — die Auftritte | appearance | der Auftritt, -e |  |
| ch4-149 | 15 | 13b | OK | die Beurteilung — die Beurteilungen | assessment | die Beurteilung, -en |  |
| ch4-150 | 15 | 13b | OK | der Bewerber — die Bewerber | applicant (m) | der Bewerber, - |  |
| ch4-151 | 15 | 13b | OK | die Bewerberin — die Bewerberinnen | applicant (f) | die Bewerberin, -nen |  |
| ch4-152 | 15 | 13b | OK | die Branche — die Branchen | field of business | die Branche, -n |  |
| ch4-153 | 15 | 13b | OK | die Einstellung — die Einstellungen | approach, attitude | die Einstellung, -en |  |
| ch4-154 | 15 | 13b | OK | entspannt | relaxed | entspannt |  |
| ch4-155 | 15 | 13b | WARN | die Fähigkeit — die Fähigkeiten | ability | die Föhigkeit, -en | WARN auto_corrected: 'Föhigkeit' -> 'Fähigkeit' (checked with Wiktionary) |
| ch4-156 | 15 | 13b | WARN | der Faktor — die Faktoren | factor | der Faktor, Faktoren | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Faktoren |
| ch4-157 | 15 | 13b | OK | gesamt | whole | gesamt |  |
| ch4-158 | 15 | 13b | OK | heraus-suchen | to look up | heraus-suchen |  |
| ch4-159 | 15 | 13b | OK | konservativ | conservative | konservativ |  |
| ch4-160 | 15 | 13b | OK | die Körperhaltung — die Körperhaltungen | posture | die Körperhaltung, -en |  |
| ch4-161 | 15 | 13b | OK | die Körpersprache | body language | die Körpersprache (Sg.) |  |
| ch4-162 | 15 | 13b | OK | lauter | all | lauter (Vor lauter Aufregung habe ich die Frage der Prüferin nicht verstanden.) |  |
| ch4-163 | 15 | 13b | OK | locker | casual | locker |  |
| ch4-164 | 15 | 13b | OK | menschlich | human | menschlich |  |
| ch4-165 | 15 | 13b | OK | möglichst | possible | möglichst |  |
| ch4-166 | 15 | 13b | OK | offen | open | offen (leder Arbeitgeber freut sich über offene und engagierte Mitarbeiter.) |  |
| ch4-167 | 15 | 13b | OK | optimistisch | optimistic | optimistisch |  |
| ch4-168 | 15 | 13b | OK | das Outfit — die Outfits | outfit | das Outfit, -s |  |
| ch4-169 | 15 | 13b | OK | die Persönlichkeit — die Persönlichkeiten | personality | die Persönlichkeit, -en |  |
| ch4-170 | 15 | 13b | OK | die Planung — die Planungen | plan | die Planung, -en |  |
| ch4-171 | 15 | 13b | OK | ruhig | calm | ruhig (Sagen Sie ruhig, wenn Sie etwas nicht verstanden haben.) |  |
| ch4-172 | 15 | 13b | OK | signalisieren | to signal | signalisieren |  |
| ch4-173 | 15 | 13b | OK | steif | stiff | steif |  |
| ch4-174 | 15 | 13b | OK | stellen | to set | stellen (den Wecker stellen) |  |
| ch4-175 | 15 | 13b | OK | der Unternehmer — die Unternehmer | business man | der Unternehmer, - |  |
| ch4-176 | 15 | 13b | OK | die Unternehmerin — die Unternehmerinnen | business woman | die Unternehmerin, -nen |  |
| ch4-177 | 15 | 13b | OK | die Verbindung — die Verbindungen | connection | die Verbindung, -en |  |
| ch4-178 | 15 | 13b | WARN | vorziehen | to prefer | vorlziehen, er zieht vor, zog vor, hat vorgezogen | WARN auto_corrected: 'vorlziehen' -> 'vorziehen' (checked with Wiktionary) |
| ch4-179 | 15 | 13b | WARN | der Wecker — die Wecker | alarm to count numerous furious to collect (to set the alarm clock; Punctuality counts as one of the most important characteristics of an applicant.) | der Wecker, - (den Wecker stellen záhlen (zu + D.) (Pünktlichkeit záhlt zu den wichtigsten Eigenschaften eines Bewerbers.) zghlreich zornig zusammen/stellen | WARN ocr_low_confidence: OCR confidence 0.59 < 0.85; WARN english_from_alt: used second OCR model: 'alarm to count numerous srouns to collect (to set the alarm clock; Punctuality counts as one of the most important characteristics of an applicant.)' -> 'alarm to count numerous furious to collect (to set the alarm clock; Punctuality counts as one of the most important characteristics of an applicant.)' |
| ch4-180 | 15 | 13b | OK | der Zweifel — die Zweifel | doubt | der Zweifel, - |  |
| ch4-181 | 15 | 13c | OK | inhaltlich | ungefähr: relevant | inhaltlich |  |
| ch4-182 | 15 | 13d | OK | speziell | specifically | speziell |  |
| ch5-001 | 16 | 1a | OK | der Abfall — die Abfälle | waste | der Abfall,"e |  |
| ch5-002 | 16 | 1a | OK | der Autofahrer — die Autofahrer | driver (m) | der Autofahrer, - |  |
| ch5-003 | 16 | 1a | OK | die Autofahrerin — die Autofahrerinnen | driver (f) | die Autofahrerin, -nen |  |
| ch5-004 | 16 | 1a | OK | Bio- | organic (organic products) | Bio- (Bio-Produkte) |  |
| ch5-005 | 16 | 1a | OK | digital | digital | digital |  |
| ch5-006 | 16 | 1a | OK | der Durchschnitt | average | der Durchschnitt (Sg.) |  |
| ch5-007 | 16 | 1a | WARN | europäisch | European | europáisch | WARN auto_corrected: 'europáisch' -> 'europäisch' (checked with Wiktionary) |
| ch5-008 | 16 | 1a | OK | der Fleischkonsum | meat consumption | der Fleischkonsum (Sg.) |  |
| ch5-009 | 16 | 1a | OK | das Huhn — die Hühner | chicken | das Huhn, "-er |  |
| ch5-010 | 16 | 1a | OK | liegen | to lie, to be located | liegen, er liegt, lag, hat gelegen (Der Marktanteil von Bio-Fleisch liegt nur bei zwei Prozent.) |  |
| ch5-011 | 16 | 1a | OK | der Marktanteil — die Marktanteile | market share | der Marktanteil, -e |  |
| ch5-012 | 16 | 1a | WARN | mitrechnen | to include | mitlrechnen | WARN auto_corrected: 'mitlrechnen' -> 'mitrechnen' (checked with Wiktionary) |
| ch5-013 | 16 | 1a | OK | der Papierverbrauch | usage of paper | der Papierverbrauch (Sg.) |  |
| ch5-014 | 16 | 1a | WARN | der Rekord — die Rekord | record | der Rekord, - | WARN plural_mismatch: plural 'die Rekord' but Wiktionary has: Rekorde |
| ch5-015 | 16 | 1a | OK | das Rind — die Rinder | beef | das Rind, -er |  |
| ch5-016 | 16 | 1a | OK | das Trinkwasser | drinking water | das Trinkwasser (Sg.) |  |
| ch5-017 | 16 | 1a | OK | verbrauchen | to use up | verbrauchen |  |
| ch5-018 | 16 | 1a | OK | der Verpackungsmüll | packaging waste | der Verpackungsmüll (Sg.) |  |
| ch5-019 | 16 | 2a | OK | das Bioprodukt — die Bioprodukte | organic product | das Bioprodukt, -e |  |
| ch5-020 | 16 | 2a | OK | das Recycling | recycling | das Recycling (Sg.) |  |
| ch5-021 | 16 | 2a | OK | die Region — die Regionen | region | die Region, -en |  |
| ch5-022 | 16 | 2a | OK | regional | regional (ly) | regional |  |
| ch5-023 | 16 | 2a | OK | schützen | to protect | schützen (vor + D.) |  |
| ch5-024 | 16 | 2a | OK | der Transportweg — die Transportwege | transport corridor | der Transportweg, -e |  |
| ch5-025 | 16 | 2b | OK | Bio | organic | Bio |  |
| ch5-026 | 16 | 2b | OK | extrem | extreme | extrem |  |
| ch5-027 | 16 | 2b | OK | die Herkunft — die Herkünfte | origin | die Herkunft, "-e |  |
| ch5-028 | 16 | 2b | OK | die Marke — die Marken | brand | die Marke, -n |  |
| ch5-029 | 16 | 2b UB | OK | das Abgas — die Abgase | exhaust | das Abgas, -e |  |
| ch5-030 | 16 | 2b UB | OK | aufhalten | to stop | aufhalten, er hált auf, hielt auf, hat aufgehalten (Wir müssen die Klimaerwármung aufhalten!) |  |
| ch5-031 | 16 | 2b UB | OK | bekämpfen | to fight | bekämpfen |  |
| ch5-032 | 16 | 2b UB | OK | beobachten | to observe | beobachten |  |
| ch5-033 | 16 | 2b UB | ERROR | durch/setzen | to push through, to force | durch/setzen | ERROR unknown_word: 'durch/setzen' not in Wiktionary |
| ch5-034 | 16 | 2b UB | WARN | durchstreichen | to cross out | durchlstreichen, er streicht durch, strich durch, hat durchgestrichen | WARN auto_corrected: 'durchlstreichen' -> 'durchstreichen' (checked with Wiktionary) |
| ch5-035 | 16 | 2b UB | OK | die Erde | earth | die Erde (Sg.) |  |
| ch5-036 | 16 | 2b UB | OK | erforschen | to investigate | erforschen |  |
| ch5-037 | 16 | 2b UB | OK | ergreifen | to seize | ergreifen, er ergreift, ergriff, hat ergriffen |  |
| ch5-038 | 16 | 2b UB | OK | die Ernte — die Ernten | harvest | die Ernte, -n |  |
| ch5-039 | 16 | 2b UB | OK | ernten | to harvest | ernten |  |
| ch5-040 | 16 | 2b UB | OK | fördern | to promote | fördern |  |
| ch5-041 | 16 | 2b UB | OK | der Fortschritt — die Fortschritte | progress | der Fortschritt, -e |  |
| ch5-042 | 16 | 2b UB | OK | die Klimaerwärmung | global warming | die Klimaerwärmung (Sg.) |  |
| ch5-043 | 16 | 2b UB | OK | der Klimawandel | climate change | der Klimawandel (Sg.) |  |
| ch5-044 | 16 | 2b UB | OK | die Maßnahme — die Maßnahmen | measure | die MaBnahme, -n |  |
| ch5-045 | 16 | 2b UB | OK | messen | to measure | messen, er misst, maß, hat gemessen |  |
| ch5-046 | 17 | 2b UB | WARN | ökologisch | ecological | 8kologisch | WARN auto_corrected: '8kologisch' -> 'ökologisch' (checked with Wiktionary) |
| ch5-047 | 17 | 2b UB | WARN | die Ressource — die Ressourcen | ressource | die Ressource, -n | WARN english_spelling: unknown English word(s): ressource |
| ch5-048 | 17 | 2b UB | WARN | schädlich | harmful | schádlich | WARN auto_corrected: 'schádlich' -> 'schädlich' (checked with Wiktionary) |
| ch5-049 | 17 | 2b UB | OK | stoppen | to stop | stoppen |  |
| ch5-050 | 17 | 2b UB | WARN | der Umweltschutz | environmental protection | der Vmweltschutz (Sg.) | WARN auto_corrected: 'Vmweltschutz' -> 'Umweltschutz' (checked with Wiktionary) |
| ch5-051 | 17 | 2b UB | WARN | die Umweltverschmutzung | pollution (environmental) | die Vmweltverschmutzung (Sg.) | WARN auto_corrected: 'Vmweltverschmutzung' -> 'Umweltverschmutzung' (checked with Wiktionary) |
| ch5-052 | 17 | 2b UB | OK | unterstützen | to support | unterstützen |  |
| ch5-053 | 17 | 2b UB | OK | die Ursache — die Ursachen | cause | die Ursache, -n |  |
| ch5-054 | 17 | 2b UB | OK | vernichten | to destroy | vernichten |  |
| ch5-055 | 17 | 2b UB | OK | verringern | to reduce | verringern |  |
| ch5-056 | 17 | 2b UB | OK | verschwenden | to waste | verschwenden |  |
| ch5-057 | 17 | 2b UB | OK | zerstören | to destroy | zerstören |  |
| ch5-058 | 17 | 3 | OK | der Begriff — die Begriffe | term | der Begriff, -e |  |
| ch5-059 | 17 | 3 | OK | berechnen | to calculate | berechnen |  |
| ch5-060 | 17 | 3 | OK | der Fußabdruck — die Fußabdrücke | footprint | der FuBabdruck, "-e |  |
| ch5-061 | 17 | 4a | OK | der Geschirrspüler — die Geschirrspüler | dishwasher | der Geschirrspüler, - |  |
| ch5-062 | 17 | 4a | WARN | die Glasflasche — die Glasflaschen | glas bottle | die Glasflasche, -n | WARN english_spelling: unknown English word(s): glas |
| ch5-063 | 17 | 4a | OK | das Öko-Duell — die Öko-Duelle | eco-duel | das öko-Duell, -e |  |
| ch5-064 | 17 | 4a | OK | die Plastikflasche — die Plastikflaschen | plastic bottle | die Plastikflasche, -n |  |
| ch5-065 | 17 | 4b | OK | allerdings | though | allerdings |  |
| ch5-066 | 17 | 4b | OK | der Bedarf | need | der Bedarf (Sg.) |  |
| ch5-067 | 17 | 4b | OK | die Duschzeit — die Duschzeiten | shower time | die Duschzeit, -en |  |
| ch5-068 | 17 | 4b | OK | effizient | efficient | effizient |  |
| ch5-069 | 17 | 4b | OK | die Einwegflasche — die Einwegflaschen | disposable bottle | die Einwegflasche, -n |  |
| ch5-070 | 17 | 4b | OK | erwärmen | warming | erwärmen |  |
| ch5-071 | 17 | 4b | OK | der Fall — die Fälle | case | der Fall, "-e (in jedem Fall) |  |
| ch5-072 | 17 | 4b | OK | gedruckt | printed | gedruckt |  |
| ch5-073 | 17 | 4b | OK | kommen | to come to | kommen (zu + D.), er kommt, kam, ist gekommen (Die Diskussion kam leider zu keinem Ergebnis.) |  |
| ch5-074 | 17 | 4b | OK | korrekt | correct | korrekt |  |
| ch5-075 | 17 | 4b | OK | die Mehrwegflasche — die Mehrwegflaschen | reusable bottle | die Mehrwegflasche, -n |  |
| ch5-076 | 17 | 4b | WARN | die Ökobilanz — die Ökobilanzen | ecobalance, life-cycle assessment | die ökobilanz, -en | WARN english_spelling: unknown English word(s): ecobalance |
| ch5-077 | 17 | 4b | OK | das Resultat — die Resultate | result | das Resultat, -e |  |
| ch5-078 | 17 | 4b | OK | die Seite — die Seiten | side | die seite, -n (Mit einer Spülmaschine sind Sie ökologisch auf der sicheren Seite.) |  |
| ch5-079 | 17 | 4b | OK | treffen | to make | treffen, er trifft, traf, hat getroffen (eine Wahl treffen) |  |
| ch5-080 | 17 | 4b | OK | unterscheiden | to distinguish | unterscheiden, er unterscheidet, unterschied, hat unterschieden |  |
| ch5-081 | 17 | 4b | OK | die Wahl — die Wahlen | choice | die Wahl, -en (eine Wahl treffen) |  |
| ch5-082 | 17 | 5a | OK | der Ökovergleich — die Ökovergleiche | eco-comparison | der ökovergleich, -e |  |
| ch5-083 | 17 | 6a | OK | die Alternative — die Alternativen | alternative | die Alternative, -n |  |
| ch5-084 | 17 | 6a | OK | die Pfandflasche — die Pfandflaschen | deposit bottle | die Pfandflasche, -n |  |
| ch5-085 | 17 | 6b | OK | die Energiekosten — die Energiekosten | cost of energy | die Energiekosten (Pl.) |  |
| ch5-086 | 17 | 7a | OK | das Satzzeichen — die Satzzeichen | punctuation marks | das Satzzeichen, - |  |
| ch5-087 | 17 | 7b | OK | das Müllproblem — die Müllprobleme | garbage problem | das Müllproblem, -e |  |
| ch5-088 | 17 | 8a | OK | der Absatz — die Absätze | sales | der Absatz, "e |  |
| ch5-089 | 17 | 8a | OK | allein | alone | allein (18 Millionen Tonnen Lebensmittel werfen wir allein in Deutschland jáhrlich weg.) |  |
| ch5-090 | 18 | 8a | OK | die Außenseite — die Außenseiten | outside | die AuBenseite, -n |  |
| ch5-091 | 18 | 8a | OK | beschädigt | damaged | beschädigt |  |
| ch5-092 | 18 | 8a | OK | dagegen | against | dagegen |  |
| ch5-093 | 18 | 8a | OK | damit | so that | damit (Damit nicht so viel Müll entsteht, gibt es Pfandbecher.) |  |
| ch5-094 | 18 | 8a | OK | entstehen | to originate | entstehen, er entsteht, entstand, ist entstanden |  |
| ch5-095 | 18 | 8a | ERROR | erháltlich | to be available | erháltlich | ERROR unknown_word: 'erháltlich' not in Wiktionary |
| ch5-096 | 18 | 8a | OK | die Gegend — die Gegenden | areas | die Gegend, -en |  |
| ch5-097 | 18 | 8a | OK | die Geschäftsidee — die Geschäftsideen | business idea | die Geschäftsidee, -n |  |
| ch5-098 | 18 | 8a | OK | haltbar | durable | haltbar |  |
| ch5-099 | 18 | 8a | OK | jederzeit | at any time | jederzeit |  |
| ch5-100 | 18 | 8a | OK | der Kaffeebecher — die Kaffeebecher | coffee cup | der Kaffeebecher, - |  |
| ch5-101 | 18 | 8a | OK | krumm | crooked | krumm |  |
| ch5-102 | 18 | 8a | OK | der Kunststoff — die Kunststoffe | plastic | der Kunststoff, -e |  |
| ch5-103 | 18 | 8a | OK | landen | to land | landen (Es landen viel zu viele Kaffeebecher im Abfall.) |  |
| ch5-104 | 18 | 8a | OK | liefern | to deliver | liefern |  |
| ch5-105 | 18 | 8a | OK | der Müllberg — die Müllberge | mountain of rubbish | der Müllberg, e |  |
| ch5-106 | 18 | 8a | OK | der Mülleimer — die Mülleimer | rubbish bin | der Mülleimer, - |  |
| ch5-107 | 18 | 8a | OK | nachhaltig | sustainable | nachhaltig |  |
| ch5-108 | 18 | 8a | OK | die Neugründung — die Neugründungen | start-up | die Neugründung, -en |  |
| ch5-109 | 18 | 8a | OK | der Ökostrom | green electricity | der ökostrom (Sg.) |  |
| ch5-110 | 18 | 8a | OK | der Online-Shop — die Online-Shops | online shop | der Online-Shop, -s |  |
| ch5-111 | 18 | 8a | OK | das Pfand | deposit | das Pfand (Sg.) |  |
| ch5-112 | 18 | 8a | OK | recycelbar | recyclable | recycelbar |  |
| ch5-113 | 18 | 8a | OK | sogenannt | so-called | sogenannt |  |
| ch5-114 | 18 | 8a | WARN | das Solarpanel — die Solarpanel | solar panel | das Solarpanel, - | WARN plural_mismatch: plural 'die Solarpanel' but Wiktionary has: Solarpanels |
| ch5-115 | 18 | 8a | OK | die Sonnenenergie | sun energy | die Sonnenenergie (Sg.) |  |
| ch5-116 | 18 | 8a | ERROR | das Start-up — die Start-ups | start-up | das Start-up, -s | ERROR unknown_word: 'Up' not in Wiktionary |
| ch5-117 | 18 | 8a | OK | die Steckdose — die Steckdosen | power outlet, socket | die Steckdose, -n |  |
| ch5-118 | 18 | 8a | OK | die Tonne — die Tonnen | ton | die Tonne, -n |  |
| ch5-119 | 18 | 8a | OK | um ... zu | in order to | um ... zu |  |
| ch5-120 | 18 | 8a | OK | verleihen | to lend | verleihen, er verleiht, verlieh, hat verliehen |  |
| ch5-121 | 18 | 8a | OK | vermeiden | to avoid | vermeiden, er vermeidet, vermied, hat vermieden |  |
| ch5-122 | 18 | 8a | OK | die Verschwendung | waste | die Verschwendung (Sg.) |  |
| ch5-123 | 18 | 8a | OK | zu tun haben | to have to do with | zu tun haben (mit + D.) (Was haben diese Ideen mit der Umwelt zu tun?) |  |
| ch5-124 | 18 | 8a | ERROR | zurück/bekommen | to get back | zurück/bekommen, er bekommt zurück, bekam zurück, hat zurückbekommen | ERROR unknown_word: 'zurück/bekommen' not in Wiktionary |
| ch5-125 | 18 | 8a | ERROR | zurúck/bringen | to bring back | zurúck/bringen, er bringt zurúck, brachte zurück, hat zurückgebracht | ERROR unknown_word: 'zurúck/bringen' not in Wiktionary |
| ch5-126 | 18 | 9a | OK | der Pfandbecher — die Pfandbecher | deposit cup | der Pfandbecher, - |  |
| ch5-127 | 18 | 9a | OK | retten | to rescue | retten |  |
| ch5-128 | 18 | 9a | OK | verlangen | to ask for | verlangen |  |
| ch5-129 | 18 | 9a | OK | der Wegwerfbecher — die Wegwerfbecher | disposable cup | der Wegwerfbecher, - |  |
| ch5-130 | 18 | 9b | OK | die Aktion — die Aktionen | action | die Aktion, -en |  |
| ch5-131 | 18 | 9c | OK | elektronisch | electronic | elektronisch |  |
| ch5-132 | 18 | 9c | OK | der Stromverbrauch | energy usage | der Stromverbrauch (Sg.) |  |
| ch5-133 | 18 | 9c | OK | der Umwelttipp — die Umwelttipps | tip for the environment | der Umwelttipp, -s |  |
| ch5-134 | 18 | 9c | OK | verschmutzen | to pollute | verschmutzen |  |
| ch5-135 | 18 | 9c | OK | P6 der Satzanfang, "e | beginning of a sentence | P6 der Satzanfang, "e |  |
| ch5-136 | 19 | 10 | ERROR | die Ansicht — die Ansichten |  | die Ansicht, -en (Ich bin der Ansicht, dass opinion (I'm of the opinion, that...) ...) | ERROR no_english: English translation is empty |
| ch5-137 | 19 | 10 | WARN | das Argument — die Argument | argument | das Argument, - | WARN plural_mismatch: plural 'die Argument' but Wiktionary has: Argumente |
| ch5-138 | 19 | 10 | OK | der Standpunkt — die Standpunkte | point of view | der Standpunkt, -e |  |
| ch5-139 | 19 | 10 | OK | stehen | to be | stehen, er steht, stand, hat gestanden (Ich stehe auf dem Standpunkt, dass ...) |  |
| ch5-140 | 19 | 10 | OK | úberzeugt sein | to be convinced | úberzeugt sein (von + D.) |  |
| ch5-141 | 19 | 10 | ERROR | tsuösun | for free | tsuösun | WARN ocr_low_confidence: OCR confidence 0.83 < 0.85; ERROR unknown_word: 'tsuösun' not in Wiktionary |
| ch5-142 | 19 | 10 | WARN | die Uni-Mensa | university cafeteria | die Uni-Mensa, -Mensen | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it) |
| ch5-143 | 19 | 10 | OK | völlig | completely | völlig |  |
| ch5-144 | 19 | 10 | OK | widersprechen | to contradict | widersprechen, er widerspricht, widersprach, hat widersprochen |  |
| ch5-145 | 19 | 11a | OK | der Blitz — die Blitze | lightning | der Blitz, -e |  |
| ch5-146 | 19 | 11a | OK | blitzen | to flash lightning | blitzen |  |
| ch5-147 | 19 | 11a | OK | der Donner — die Donner | thunder | der Donner, |  |
| ch5-148 | 19 | 11a | OK | donnern | to thunder | donnern |  |
| ch5-149 | 19 | 11a | OK | feucht | humid | feucht |  |
| ch5-150 | 19 | 11a | OK | hageln | to hail | hageln |  |
| ch5-151 | 19 | 11a | OK | mild | mild | mild |  |
| ch5-152 | 19 | 11a | OK | neblig | foggy | neblig |  |
| ch5-153 | 19 | 11a | OK | nieseln | to drizzle | nieseln |  |
| ch5-154 | 19 | 11a | OK | regnerisch | rainy | regnerisch |  |
| ch5-155 | 19 | 11a | OK | schwül | muggy | schwül |  |
| ch5-156 | 19 | 11a | OK | stürmisch | stormy | stürmisch |  |
| ch5-157 | 19 | 11a | OK | das Traumwetter | dream weather | das Traumwetter (Sg.) |  |
| ch5-158 | 19 | 11a | OK | wolkig | cloudy | wolkig |  |
| ch5-159 | 19 | 11b | OK | die Wettervorhersage — die Wettervorhersagen | weather forecast | die Wettervorhersage, -n |  |
| ch5-160 | 19 | 11c | OK | die Vorhersage — die Vorhersagen | forecast | die Vorhersage, -n |  |
| ch5-161 | 19 | 11c | OK | die Wetterbesserung | weather improvement | die Wetterbesserung (Sg.) |  |
| ch5-162 | 19 | 12a | ERROR | das Gedáchtnis | memory | das Gedáchtnis (Sg.) | ERROR unknown_word: 'Gedáchtnis' not in Wiktionary |
| ch5-163 | 19 | 12a | OK | der Herbststurm — die Herbststürme | autumn storm | der Herbststurm, "e |  |
| ch5-164 | 19 | 12a | OK | der Schneesturm — die Schneestürme | snow storm | der Schneesturm, "-e |  |
| ch5-165 | 19 | 12a | OK | der Sturm — die Stürme | storm | der Sturm, "-e |  |
| ch5-166 | 19 | 12a | OK | stürmen | to storm | stürmen |  |
| ch5-167 | 19 | 13a | WARN | aufklären | to inform | aufkláren | WARN auto_corrected: 'aufkláren' -> 'aufklären' (checked with Wiktionary) |
| ch5-168 | 19 | 13a | OK | sich beteiligen | to participate | beteiligen (sich) (an + D.) |  |
| ch5-169 | 19 | 13a | OK | die Bevölkerung — die Bevölkerungen | population | die Bevölkerung, -en |  |
| ch5-170 | 19 | 13a | OK | der Bürger — die Bürger | citizen (m) | der Bürger, |  |
| ch5-171 | 19 | 13a | OK | die Bürgerin — die Bürgerinnen | citizen (f) | die Bürgerin, -nen |  |
| ch5-172 | 19 | 13a | OK | dienen | to serve | dienen (als + N.) |  |
| ch5-173 | 19 | 13a | OK | drehen | to turn | drehen |  |
| ch5-174 | 19 | 13a | OK | das Engagement — die Engagements | commitment, involvement extra | das Engagement, -s |  |
| ch5-175 | 19 | 13a | ERROR | geschútzt | protected | geschútzt | ERROR unknown_word: 'geschútzt' not in Wiktionary |
| ch5-176 | 19 | 13a | OK | die Hauskatze — die Hauskatzen | domestic cat | die Hauskatze, -n |  |
| ch5-177 | 19 | 13a | OK | hilflos | helpless | hilflos |  |
| ch5-178 | 19 | 13a | OK | die Idee — die Ideen | idea | die Idee, -n (auf eine Idee kommen) |  |
| ch5-179 | 19 | 13a | OK | mmer wieder | again and again | mmer wieder |  |
| ch5-180 | 19 | 13a | OK | das Infomaterial — die Infomaterialien | information material | das Infomaterial, -ien |  |
| ch5-181 | 19 | 13a | OK | der Katzenfreund — die Katzenfreunde | cat lover (m) | der Katzenfreund, -e |  |
| ch5-182 | 19 | 13a | OK | die Katzenfreundin — die Katzenfreundinnen | cat lover (f) | die Katzenfreundin, -nen |  |
| ch5-183 | 20 | 13a | OK | das Klima | climate | das Klima (Sg.) |  |
| ch5-184 | 20 | 13a | OK | ländlich | rural | ländlich |  |
| ch5-185 | 20 | 13a | OK | die Mitfahrbank — die Mitfahrbänke | ride-on bench | die Mitfahrbank, "e |  |
| ch5-186 | 20 | 13a | WARN | das Nachbardorf — die Nachbardörfer | neighbouring village | das Nachbardorf, "-er | WARN english_spelling: unknown English word(s): neighbouring |
| ch5-187 | 20 | 13a | OK | der Naturfreund — die Naturfreunde | nature lover (m) | der Naturfreund, -e |  |
| ch5-188 | 20 | 13a | OK | die Naturfreundin — die Naturfreundinnen | nature lover (f) | die Naturfreundin, -nen |  |
| ch5-189 | 20 | 13a | OK | pflanzen | to plant | pflanzen |  |
| ch5-190 | 20 | 13a | OK | schaden | to harm | schaden |  |
| ch5-191 | 20 | 13a | OK | die Schwierigkeit — die Schwierigkeiten | difficulty | die Schwierigkeit, -en |  |
| ch5-192 | 20 | 13a | OK | der Strauch — die Sträucher | bush | der Strauch, "er |  |
| ch5-193 | 20 | 13a | OK | die Themenwoche — die Themenwochen | theme week | die Themenwoche, -n |  |
| ch5-194 | 20 | 13a | OK | verteilen | to distribute | verteilen |  |
| ch5-195 | 20 | 13a | OK | der Vorort — die Vororte | suburb | der Vorort, -e |  |
| ch5-196 | 20 | 13a | OK | die Wildkatze — die Wildkatzen | wild cat | die Wildkatze, -n |  |
| ch5-197 | 20 | 13a | OK | zählen | to count | zählen (Kannst du auf Arabisch bis zehn záhlen?) |  |
| ch5-198 | 20 | 13a | OK | das Zeichen — die Zeichen | symbol | das Zeichen, |  |
| ch5-199 | 20 | 13c | WARN | sich anschließen | to follow | anlschlieBen (sich), er schlieBt an, schloss an, hat angeschlossen (Beim Plogging kann man sich einer Gruppe anschlieBen.) | WARN auto_corrected: 'sich anlschließen' -> 'sich anschließen' (checked with Wiktionary) |
| ch5-200 | 20 | 13c | WARN | aufheben | to pick up | auflheben, er hebt auf, hob auf, hat aufgehoben | WARN auto_corrected: 'auflheben' -> 'aufheben' (checked with Wiktionary) |
| ch5-201 | 20 | 13c | OK | aufwändig | laborious | aufwändig |  |
| ch5-202 | 20 | 13c | OK | die Geschwindigkeit — die Geschwindigkeiten | speed | die Geschwindigkeit, -en |  |
| ch5-203 | 20 | 13c | WARN | das Plogging | plogging | das Plogging (Sg.) | WARN english_spelling: unknown English word(s): plogging |
| ch5-204 | 20 | 13e | OK | sich engagieren | to be involved | engagieren (sich) (für/gegen + A.) |  |
| ch5-205 | 20 | 13e | OK | der Teilnehmer — die Teilnehmer | participant (m) | der Teilnehmer, - |  |
| ch5-206 | 20 | 13e | OK | die Teilnehmerin — die Teilnehmerinnen | participant (f) | die Teilnehmerin, -nen |  |
| ch5-207 | 20 | 13e | OK | k&k deklinieren | to decline | k&k deklinieren |  |
| ch5-208 | 20 | 13e | OK | entfallen | omitted | entfallen, er entfállt, entfiel, ist entfallen |  |
| ch5-209 | 20 | 13e | OK | der Finalsatz — die Finalsätze | final sentence | der Finalsatz, "-e |  |
| ch5-210 | 20 | 13e | WARN | die Umweltaktion — die Umweltaktionen | environmental campaign | die mweltaktion, -en | WARN auto_corrected: 'Mweltaktion' -> 'Umweltaktion' (checked with Wiktionary) |
| ch6-001 | 20 | 1a | OK | die Bildunterschrift — die Bildunterschriften | picture subtitle | die Bildunterschrift, -en |  |
| ch6-002 | 20 | 1a | OK | der Chip — die Chips | chip | der Chip, -s |  |
| ch6-003 | 20 | 1a | OK | der Daten-Chip — die Daten-Chips | data chip | der Daten-Chip, -s |  |
| ch6-004 | 20 | 1a | OK | die Drohne — die Drohnen | drone | die Drohne, -n |  |
| ch6-005 | 20 | 1a | OK | die Haut — die Häute | skin | die Haut, "-e |  |
| ch6-006 | 20 | 1a | OK | irgendwann | sometime | irgendwann |  |
| ch6-007 | 20 | 1a | OK | der Mars | Mars | der Mars (Sg.) |  |
| ch6-008 | 20 | 1a | OK | die Mobilität | mobility | die Mobilität (Sg.) |  |
| ch6-009 | 20 | 1a | OK | der Passagier — die Passagiere | passenger (m) | der Passagier, -e |  |
| ch6-010 | 20 | 1a | OK | die Passagierin — die Passagierinnen | passenger (f) | die Passagierin, -nen |  |
| ch6-011 | 20 | 1a | OK | der Planet — die Planeten | planet | der Planet, -en |  |
| ch6-012 | 20 | 1a | OK | staubsaugen | to vacuum (clean) | staubsaugen |  |
| ch6-013 | 20 | 1a | OK | übernehmen | to take on | übernehmen, er úbernimmt, úbernahm, hat übernommen |  |
| ch6-014 | 20 | 1a | OK | die Wohnanlage — die Wohnanlagen | residential complex | die Wohnanlage, -n |  |
| ch6-015 | 20 | 1b | OK | die Prognose — die Prognosen | prognosis | die Prognose, -n |  |
| ch6-016 | 21 | 2a | OK | von ... aus | from | von ... aus (Ich arbeite viel von zu Hause aus.) |  |
| ch6-017 | 21 | 3a | OK | der Anlass — die Anlässe | reason | der Anlass, "-e |  |
| ch6-018 | 21 | 3a | OK | silvester, - | new year | silvester, - (ohne Artikel) |  |
| ch6-019 | 21 | 3a | WARN | sich vornehmen | to plan to do sth | vorlnehmen (sich), er nimmt vor, nahm vor, hat vorgenommen | WARN auto_corrected: 'sich vorlnehmen' -> 'sich vornehmen' (checked with Wiktionary); WARN english_spelling: unknown English word(s): sth |
| ch6-020 | 21 | 3b | OK | die Ausrede — die Ausreden | excuse | die Ausrede, -n |  |
| ch6-021 | 21 | 3b | OK | befragen | to question | befragen |  |
| ch6-022 | 21 | 3b | OK | dauernd | constant | dauernd |  |
| ch6-023 | 21 | 3b | OK | einfach so | just like that | einfach so |  |
| ch6-024 | 21 | 3b | OK | fassen | to make | fassen (einen Vorsatz fassen) |  |
| ch6-025 | 21 | 3b | OK | frisch | fresh | frisch (Ich genieBe die Ruhe und die frische Luft.) |  |
| ch6-026 | 21 | 3b | OK | der Leser — die Leser | reader (m) | der Leser, - |  |
| ch6-027 | 21 | 3b | OK | die Leserin — die Leserinnen | reader (f) | die Leserin, -nen |  |
| ch6-028 | 21 | 3b | OK | Süßes | sweet | SüBes (Papa, bringst du uns was SüBes aus dem Supermarkt mit?) |  |
| ch6-029 | 21 | 3b | OK | der Vorsatz — die Vorsätze | resolution | der Vorsatz, "-e (einen Vorsatz fassen) |  |
| ch6-030 | 21 | 3b | OK | werden | Will | werden (Was wird sich in der Zukunft ándern?) |  |
| ch6-031 | 21 | 3b | OK | das Futur | future (tense) | das Futur (Sg.) |  |
| ch6-032 | 21 | 3e | OK | die Wahrheit — die Wahrheiten | truth | die Wahrheit, -en |  |
| ch6-033 | 21 | 4a | OK | gelingen | to succeed | gelingen, es gelingt, gelang, ist gelungen |  |
| ch6-034 | 21 | 4a | OK | realisieren | to realize | realisieren |  |
| ch6-035 | 21 | 4b | OK | das Hauptproblem — die Hauptprobleme | main problem | das Hauptproblem, -e |  |
| ch6-036 | 21 | 4b | OK | konkret | concrete | konkret |  |
| ch6-037 | 21 | 5a | OK | eventuell | potential | eventuell |  |
| ch6-038 | 21 | 5a | OK | die N-Deklination — die N-Deklinationen | n-declination | die n-Deklination, -en |  |
| ch6-039 | 21 | 5a | OK | der Praktikant — die Praktikanten | intern (m) | der Praktikant, -en |  |
| ch6-040 | 21 | 5a | OK | die Praktikantin — die Praktikantinnen | intern (f) | die Praktikantin, -nen |  |
| ch6-041 | 21 | 5a | OK | das Zitat — die Zitate | quote | das Zitat, -e |  |
| ch6-042 | 21 | 5b | OK | der Affe — die Affen | monkey | der Affe, -n |  |
| ch6-043 | 21 | 5b | OK | der Elefant — die Elefanten | elephant | der Elefant, -en |  |
| ch6-044 | 21 | 5b | OK | der Löwe — die Löwen | lion | der Löwe, -n |  |
| ch6-045 | 21 | 5b | WARN | der Pädagoge — die Pädagogen | educator (m) | der Pádagoge, -n | WARN auto_corrected: 'Pádagoge' -> 'Pädagoge' (checked with Wiktionary) |
| ch6-046 | 21 | 5b | OK | die Pädagogin — die Pädagoginnen | educator (f) | die Pädagogin, -nen |  |
| ch6-047 | 21 | 6a | OK | die Vokallänge — die Vokallängen | vowel length | die Vokallänge, -n |  |
| ch6-048 | 21 | 7b | OK | anonym | anonymous | anonym |  |
| ch6-049 | 21 | 7b | OK | der Arbeitsort — die Arbeitsorte | place of work, workplace | der Arbeitsort, -e |  |
| ch6-050 | 21 | 7b | WARN | sich aufhalten | to be | auflhalten (sich), er hált auf, hielt auf, hat aufgehalten (Sie hált sich viel in der Küche der WG auf.) | WARN auto_corrected: 'sich auflhalten' -> 'sich aufhalten' (checked with Wiktionary) |
| ch6-051 | 21 | 7b | WARN | ausgehen | to assume | auslgehen (von + D.), er geht aus, ging aus, ist ausgegangen (Experten gehen davon aus, dass ...) | WARN auto_corrected: 'auslgehen' -> 'ausgehen' (checked with Wiktionary) |
| ch6-052 | 21 | 7b | OK | autonom | autonomous | autonom |  |
| ch6-053 | 21 | 7b | OK | sich befinden | to be located | befinden (sich), er befindet, befand, hat befunden |  |
| ch6-054 | 21 | 7b | OK | begegnen | to see | begegnen |  |
| ch6-055 | 21 | 7b | OK | der Dienstleistungsbereich — die Dienstleistungsbereiche | service industry | der Dienstleistungsbereich, -e |  |
| ch6-056 | 22 | 7b | OK | die Erholungsmöglichkeit — die Erholungsmöglichkeiten | recreational opportunities | die Erholungsmöglichkeit, -en |  |
| ch6-057 | 22 | 7b | OK | das Fünftel — die Fünftel | fifth | das Fünftel, - |  |
| ch6-058 | 22 | 7b | OK | der Fußweg — die Fußwege | foot path | der FuBweg,-e |  |
| ch6-059 | 22 | 7b | OK | die Grünfläche — die Grünflächen | green space | die Grünfläche, -n |  |
| ch6-060 | 22 | 7b | OK | der Hausbewohner — die Hausbewohner | inhabitant (m) | der Hausbewohner, - |  |
| ch6-061 | 22 | 7b | OK | die Hausbewohnerin — die Hausbewohnerinnen | inhabitant (f) | die Hausbewohnerin, -nen |  |
| ch6-062 | 22 | 7b | OK | die Hausfassade — die Hausfassaden | house front | die Hausfassade, -n |  |
| ch6-063 | 22 | 7b | OK | heutig | present day | heutig (Heutige Fahrzeuge können noch nicht fliegen.) |  |
| ch6-064 | 22 | 7b | OK | das Homeoffice | home office | das Homeoffice (Sg.) |  |
| ch6-065 | 22 | 7b | OK | längst | for a long time | längst |  |
| ch6-066 | 22 | 7b | OK | lauten | to be | lauten |  |
| ch6-067 | 22 | 7b | OK | die Lebensqualität | quality of life | die Lebensqualität (Sg.) |  |
| ch6-068 | 22 | 7b | OK | lebenswert | to be worth living in | lebenswert |  |
| ch6-069 | 22 | 7b | WARN | das Mikro-Wohnen | mikro living | das Mikro-Wohnen (Sg.) | WARN english_spelling: unknown English word(s): mikro |
| ch6-070 | 22 | 7b | OK | miteinander | togetherness | miteinander |  |
| ch6-071 | 22 | 7b | OK | das Prinzip — die Prinzipien | principle | das Prinzip, -ien |  |
| ch6-072 | 22 | 7b | OK | das Privatauto — die Privatautos | private car | das Privatauto, -s |  |
| ch6-073 | 22 | 7b | OK | die Rolle — die Rollen | role | die Rolle, -n (Geld spielt für viele eine wichtige Rolle im Leben.) |  |
| ch6-074 | 22 | 7b | OK | die Solarzelle — die Solarzellen | solar cell | die Solarzelle, -n |  |
| ch6-075 | 22 | 7b | OK | spielen | to play | spielen (Geld spielt für viele eine wichtige Rolle im Leben.) |  |
| ch6-076 | 22 | 7b | OK | das Stadtviertel — die Stadtviertel | area | das Stadtviertel, - |  |
| ch6-077 | 22 | 7b | OK | vergrößern | to enlarge | vergröBern |  |
| ch6-078 | 22 | 7b | OK | voraussichtlich | to be expected | voraussichtlich |  |
| ch6-079 | 22 | 7b | OK | wachsen | to grow | wachsen, er wächst, wuchs, ist gewachsen |  |
| ch6-080 | 22 | 7b | OK | die Windturbine — die Windturbinen | wind turbine | die Windturbine, -n |  |
| ch6-081 | 22 | 7c UB | OK | die Akademie — die Akademien | academy | die Akademie, -n |  |
| ch6-082 | 22 | 7c UB | OK | das Altenheim — die Altenheime | care home/ care facility | das Altenheim, -e |  |
| ch6-083 | 22 | 7c UB | OK | das Fundbüro — die Fundbüros | lost and found office | das Fundbüro, -s |  |
| ch6-084 | 22 | 7c UB | OK | die Fußgängerzone — die Fußgängerzonen | pedestrian zone | die FuBgängerzone, -n |  |
| ch6-085 | 22 | 7c UB | OK | das Hallenbad — die Hallenbäder | indoor swimming pool | das Hallenbad, "er |  |
| ch6-086 | 22 | 7c UB | ERROR | die Kindertagesstátte — die Kindertagesstátten | kindergarten | die Kindertagesstátte, -n | ERROR unknown_word: 'Kindertagesstátte' not in Wiktionary |
| ch6-087 | 22 | 7c UB | OK | der Kiosk — die Kioske | kiosk | der Kiosk, -e |  |
| ch6-088 | 22 | 7c UB | OK | die Klinik — die Kliniken | hospital | die Klinik, -en |  |
| ch6-089 | 22 | 7c UB | WARN | der Tierpark — die Tierparks | z00 | der Tierpark, -s | WARN ocr_low_confidence: OCR confidence 0.78 < 0.85 |
| ch6-090 | 22 | 7c UB | OK | die Volkshochschule — die Volkshochschulen | community college | die Volkshochschule, -n |  |
| ch6-091 | 22 | 7c UB | OK | der Zirkus — die Zirkusse | circus | der Zirkus, -se |  |
| ch6-092 | 22 | 7d | OK | der Anteil — die Anteile | percentage | der Anteil, -e |  |
| ch6-093 | 22 | 8a | WARN | umformulieren | to rephrase | um/formulieren | WARN auto_corrected: 'um/formulieren' -> 'umformulieren' (checked with Wiktionary) |
| ch6-094 | 22 | 8b | OK | der Kasus | case | der Kasus (Sg.) |  |
| ch6-095 | 22 | 8c | OK | der Bürgermeister — die Bürgermeister | mayor (m) | der Bürgermeister, - |  |
| ch6-096 | 22 | 8c | OK | die Bürgermeisterin — die Bürgermeisterinnen | mayor (f) | die Bürgermeisterin, -nen |  |
| ch6-097 | 22 | 8d | OK | die Bildung | education | die Bildung (Sg.) (Eine gute Bildung hilft für das ganze Leben.) |  |
| ch6-098 | 22 | 8d | OK | möglicherweise | possibly | möglicherweise |  |
| ch6-099 | 22 | 8d | OK | die Verkehrssituation — die Verkehrssituationen | traffic situation | die Verkehrssituation, -en |  |
| ch6-100 | 22 | 8d | OK | der Wohnraum — die Wohnräume | living space | der Wohnraum, "e |  |
| ch6-101 | 22 | 9a | OK | die Vorfreude | anticipation | die Vorfreude (Sg.) |  |
| ch6-102 | 22 | 9b | OK | die Melodie — die Melodien | melody | die Melodie, -n |  |
| ch6-103 | 22 | 9b | WARN | der Rhythmus — die Rhythmen | rhythm | der Rhythmus, Rhythmen | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Rhythmen |
| ch6-104 | 23 | 9b | OK | der Stern — die Sterne | star | der stern, -e |  |
| ch6-105 | 23 | 9c | OK | dahin | there | dahin |  |
| ch6-106 | 23 | 9c | OK | grad | at the moment | grad |  |
| ch6-107 | 23 | 9c | OK | die Hürde — die Hürden | hurdle | die Hürde, -n |  |
| ch6-108 | 23 | 9c | OK | in der Lage sein | to be able to | in der Lage sein (Ich bin grade nicht in |  |
| ch6-109 | 23 | 9c | ERROR | der Lage — die Lagen | moment.) | der Lage, mich zu bewegen.) | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); ERROR article_mismatch: article 'der' but Wiktionary says die; WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Lagen |
| ch6-110 | 23 | 9c | OK | die Liedzeile — die Liedzeilen | lyric | die Liedzeile, -n |  |
| ch6-111 | 23 | 9c | WARN | nachdenken | to think (about) | nachldenken , er denkt nach, dachte nach, hat nachgedacht | WARN auto_corrected: 'nachldenken' -> 'nachdenken' (checked with Wiktionary) |
| ch6-112 | 23 | 9c | OK | schweben | to float | schweben |  |
| ch6-113 | 23 | 9c | OK | selber | self | selber (ugs. für selbst) |  |
| ch6-114 | 23 | 9c | OK | stapeln | to stack | stapeln |  |
| ch6-115 | 23 | 9c | OK | die Tiefe — die Tiefen | depth | die Tiefe, -n |  |
| ch6-116 | 23 | 9c | OK | die Umschreibung — die Umschreibungen | paraphrase | die Umschreibung, -en |  |
| ch6-117 | 23 | 9c | OK | P6 bewerten | to evaluate | P6 bewerten |  |
| ch6-118 | 23 | 9c | OK | kitschig | cheesy | kitschig |  |
| ch6-119 | 23 | 9c | OK | verständlich | understandable | verständlich |  |
| ch6-120 | 23 | 9 | OK | üß der Bass, "-e — die üß der Bäss, "-ee | bass | üB der Bass, "-e |  |
| ch6-121 | 23 | 9 | OK | die Flöte — die Flöten | flute | die Flöte, -n |  |
| ch6-122 | 23 | 9 | OK | das Musikinstrument — die Musikinstrumente | musical instrument | das Musikinstrument, -e |  |
| ch6-123 | 23 | 9 | OK | das Piano — die Pianos | piano | das Piano, -s |  |
| ch6-124 | 23 | 9 | OK | das Schlagzeug — die Schlagzeuge | drums | das Schlagzeug, -e |  |
| ch6-125 | 23 | 9 | OK | die Violine — die Violinen | violin | die Violine, -n |  |
| ch6-126 | 23 | 10a | OK | die Auszeichnung — die Auszeichnungen | award | die Auszeichnung, -en |  |
| ch6-127 | 23 | 10a | OK | die Biografie — die Biografien | biography | die Biografie, -n |  |
| ch6-128 | 23 | 10a | OK | die Casting-Show — die Casting-Shows | casting show | die Casting-Show, -s |  |
| ch6-129 | 23 | 10a | OK | die Charts — die Charts | charts | die Charts (Pl.) |  |
| ch6-130 | 23 | 10a | OK | der Coversong — die Coversongs | cover song | der Coversong, -s |  |
| ch6-131 | 23 | 10a | OK | die Jury — die Jurys | jury | die Jury, -s |  |
| ch6-132 | 23 | 10a | OK | der Preis — die Preise | prize | der Preis, -e |  |
| ch6-133 | 23 | 10a | OK | der Songwriter — die Songwriter | songwriter (m) | der Songwriter, - |  |
| ch6-134 | 23 | 10a | OK | die Songwriterin — die Songwriterinnen | songwriter (f) | die Songwriterin, -nen |  |
| ch6-135 | 23 | 10b | WARN | mitsingen | to sing along | mitlsingen, er singt mit, sang mit, hat mitgesungen | WARN auto_corrected: 'mitlsingen' -> 'mitsingen' (checked with Wiktionary) |
| ch6-136 | 23 | 10b | OK | der Song — die Songs | song | der Song, -s |  |
| ch6-137 | 23 | 10b | OK | der Songtitel — die Songtitel | song title | der Songtitel, - |  |
| ch6-138 | 23 | 10b | OK | k&k bezeichnen | to mean | k&k bezeichnen |  |
| ch6-139 | 23 | 10b | OK | die Bezeichnung — die Bezeichnungen | term | die Bezeichnung, -en |  |
| ch6-140 | 23 | 10b | OK | der Doktorand — die Doktoranden | PhD student (m) | der Doktorand, -en |  |
| ch6-141 | 23 | 10b | OK | die Doktorandin — die Doktorandinnen | PhD student (f) | die Doktorandin, -nen |  |
| ch6-142 | 23 | 10b | WARN | der Internationalismus — die Internationalismen | internationalism | der Internationalismus, Internationalismen | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Internationalismen |
| ch7-001 | 23 | 1a | OK | zwischenmenschlich | interpersonal | zwischenmenschlich |  |
| ch7-002 | 23 | 1a | OK | üß decken | to lay | üB decken (den Tisch decken) |  |
| ch7-003 | 23 | 1a | OK | die Erhöhung — die Erhöhungen | increase | die Erhöhung, -en |  |
| ch7-004 | 23 | 1a | OK | die Forderung — die Forderungen | demand | die Forderung, -en |  |
| ch7-005 | 23 | 1a | OK | das Gelände — die Gelände | site | das Gelände, - |  |
| ch7-006 | 23 | 1a | OK | die Gelegenheit — die Gelegenheiten | opportunity | die Gelegenheit, -en |  |
| ch7-007 | 23 | 1a | OK | der Grill — die Grills | grill | der Grill, -s |  |
| ch7-008 | 23 | 1a | OK | hassen | to hate | hassen |  |
| ch7-009 | 24 | 1a | OK | das Institut — die Institute | institute | das Institut, -e |  |
| ch7-010 | 24 | 1a | OK | die Kabine — die Kabinen | cabin | die Kabine, -n |  |
| ch7-011 | 24 | 1a | OK | klären | to settle | klären |  |
| ch7-012 | 24 | 1a | OK | die Krankenkasse — die Krankenkassen | insurance company | die Krankenkasse, -n |  |
| ch7-013 | 24 | 1a | OK | das Lagerfeuer — die Lagerfeuer | campfire | das Lagerfeuer, - |  |
| ch7-014 | 24 | 1a | OK | die Mahnung — die Mahnungen | reminder | die Mahnung, -en |  |
| ch7-015 | 24 | 1a | WARN | die Pflicht — die Pflichten | duty | die Pflicht, -en | WARN ocr_low_confidence: OCR confidence 0.69 < 0.85; WARN english_from_alt: used second OCR model: 'Anp' -> 'duty' |
| ch7-016 | 24 | 1a | ERROR | der Prásident — die Prásidenten | president (m) | der Prásident, -en | ERROR unknown_word: 'Prásident' not in Wiktionary |
| ch7-017 | 24 | 1a | OK | die Präsidentin — die Präsidentinnen | president (f) | die Präsidentin, -nen |  |
| ch7-018 | 24 | 1a | OK | der Prof — die Profs | professor | der Prof, -s (= Professor/in) |  |
| ch7-019 | 24 | 1a | OK | der Schatz — die Schätze | darling | der Schatz, "-e (Hallo, mein Schatz!) |  |
| ch7-020 | 24 | 1a | OK | schätzen | to guess | schätzen (Ich schätze, so tolle Nachbarn findet man selten.) |  |
| ch7-021 | 24 | 1a | WARN | die Spätschicht — die Spätschichten | late shift | die Spátschicht, -en | WARN auto_corrected: 'Spátschicht' -> 'Spätschicht' (checked with Wiktionary) |
| ch7-022 | 24 | 1a | OK | streiken | to go on strike | streiken |  |
| ch7-023 | 24 | 1a | OK | die Teilnahme | participation | die Teilnahme (Sg.) |  |
| ch7-024 | 24 | 1a | OK | die Versammlung — die Versammlungen | assembly | die Versammlung, -en |  |
| ch7-025 | 24 | 1a | OK | sich verspäten das Verständnis | to be late | verspäten (sich) das Verständnis (Sg.) (Verständnis haben sympathy (To have sympathy for + A.) für + A.) |  |
| ch7-026 | 24 | 1a | OK | die Vorstellung — die Vorstellungen | introduction | die Vorstellung, -en (Kommst du zur Vorstellung der neuen Präsidentin?) |  |
| ch7-027 | 24 | 2a | ERROR | hervorheben |  | hervorlheben, er hebt hervor, hob hervor, to highlight hat hervorgehoben | ERROR no_english: English translation is empty; WARN auto_corrected: 'hervorlheben' -> 'hervorheben' (checked with Wiktionary) |
| ch7-028 | 24 | 2a | OK | schätzen | to value | schätzen (an + D.) (An meinem Chef schätze ich vor allem seine Ruhe und Freundlichkeit.) |  |
| ch7-029 | 24 | 2b | OK | aus den Augen verlieren | to lose touch | aus den Augen verlieren (Meine Freunde aus der Kindheit habe ich leider aus den Augen verloren.) |  |
| ch7-030 | 24 | 2b | OK | die Ausgabe — die Ausgaben | edition | die Ausgabe, -n (Lesen Sie den spannenden Artikel in der Juli-Ausgabe.) |  |
| ch7-031 | 24 | 2b | OK | beim Alten bleiben | to stay the same | beim Alten bleiben (Früher dachte ich, dass immer alles beim Alten bleibt.) |  |
| ch7-032 | 24 | 2b | OK | berufstätig | working | berufstätig |  |
| ch7-033 | 24 | 2b | OK | beschließen | to decide | beschlieBen, er beschlieBt, beschloss, hat beschlossen |  |
| ch7-034 | 24 | 2b | WARN | die Clique — die Cliquen | clique busy at work.) against | die Clique, -n eingespannt sein (Meine Freunde und ich to be very busy (My friends and I are all very sind alle beruflich stark eingespannt.) entgegen (+ G.) | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Cliquen |
| ch7-035 | 24 | 2b | OK | die Erwartung — die Erwartungen | expectation | die Erwartung, -en |  |
| ch7-036 | 24 | 2b | OK | die Ewigkeit — die Ewigkeiten | ages | die Ewigkeit, -en |  |
| ch7-037 | 24 | 2b | OK | feststellen | to realize | feststellen |  |
| ch7-038 | 24 | 2b | OK | die Freundschaftsgeschichte — die Freundschaftsgeschichten | friendship history | die Freundschaftsgeschichte, -n |  |
| ch7-039 | 24 | 2b | OK | das Gespräch — die Gespräche | conversation | das Gespräch, -e (ins Gespräch kommen) |  |
| ch7-040 | 24 | 2b | WARN | guttun | to benefit | gutltun, er tut gut, tat gut, hat gutgetan | WARN auto_corrected: 'gutltun' -> 'guttun' (checked with Wiktionary) |
| ch7-041 | 24 | 2b | OK | halten | to hold | halten, er hält, hielt, hat gehalten (Unsere Freundschaft hält schon seit 20 Jahren.) |  |
| ch7-042 | 24 | 2b | OK | der Konflikt — die Konflikte | conflict | der Konflikt, -e |  |
| ch7-043 | 24 | 2b | OK | kräftig | hard | kräftig |  |
| ch7-044 | 24 | 2b | OK | nachdem | after | nachdem |  |
| ch7-045 | 25 | 2b | OK | selbe | same | selbe (Inga und ich wohnen im selben Haus.) |  |
| ch7-046 | 25 | 2b | OK | der Studienplatz — die Studienplätze | place to study | der Studienplatz, "-e |  |
| ch7-047 | 25 | 2b | OK | verlieren | to lose | verlieren, er verliert, verlor, hat verloren (aus den Augen verlieren) |  |
| ch7-048 | 25 | 2b | OK | sich verstehen | to get along | verstehen (sich) (mit + D.), er versteht, verstand, hat verstanden (Ich verstehe mich nicht so gut mit meinem Mitbewohner.) |  |
| ch7-049 | 25 | 2b | OK | der Weg — die Wege | path | der Weg, -e (Meiner besten Freundin bin ich zufällig úber den Weg gelaufen.) |  |
| ch7-050 | 25 | 2b | WARN | zusammenstoßen | to crash together | zusammenlstoBen, er stöBt zusammen, stieB zusammen, ist zusammengestoBen | WARN auto_corrected: 'zusammenlstoßen' -> 'zusammenstoßen' (checked with Wiktionary) |
| ch7-051 | 25 | 2b | ERROR | zusammen/wohnen | to live together | zusammen/wohnen | ERROR unknown_word: 'zusammen/wohnen' not in Wiktionary |
| ch7-052 | 25 | 3a | OK | die Bildung — die Bildungen | formation | die Bildung, -en (Wie ist die Bildung des Plusquamperfekts?) |  |
| ch7-053 | 25 | 3a | OK | die Gegenwart | present | die Gegenwart (Sg.) |  |
| ch7-054 | 25 | 3a | OK | das Plusquamperfekt | pluperfect | das Plusquamperfekt (Sg.) |  |
| ch7-055 | 25 | 3a | OK | die Vorvergangenheit | past perfect | die Vorvergangenheit (Sg.) |  |
| ch7-056 | 25 | 4c | OK | das Netzwerk — die Netzwerke | network | das Netzwerk, -e |  |
| ch7-057 | 25 | 6a | OK | die Konfliktsituation — die Konfliktsituationen | conflict situation | die Konfliktsituation, -en |  |
| ch7-058 | 25 | 6c | OK | bevor | before | bevor |  |
| ch7-059 | 25 | 6c | OK | erschöpft seit since | exhausted | erschöpft seit (Seit ich dich kenne, bin ich glücklich.)  since (I've been happy since I met you.) |  |
| ch7-060 | 25 | 6c | OK | seitdem | since | seitdem (Seitdem du den Job gewechselt hast, bist du immer gestresst.) |  |
| ch7-061 | 25 | 6c | WARN | wahrend | while | wahrend (Ich putze, während ich telefoniere.) | WARN ocr_disagree: OCR models read 'wahrend' and 'während' - both are real words, check the PDF |
| ch7-062 | 25 | 6d | OK | der Schülerjob — die Schülerjobs | student job | der Schülerjob, -s |  |
| ch7-063 | 25 | 8a | OK | akzeptieren | to accept | akzeptieren |  |
| ch7-064 | 25 | 8a | OK | bereit sein | to be ready | bereit sein (zu + D.) |  |
| ch7-065 | 25 | 8a | OK | diplomatisch | diplomatic | diplomatisch |  |
| ch7-066 | 25 | 8a | OK | sich einigen | to agree | einigen (sich) (auf + A.) |  |
| ch7-067 | 25 | 8a | OK | erleichtern | to facilitate | erleichtern |  |
| ch7-068 | 25 | 8a | OK | gehören | to belong to | gehören (zu + D.) |  |
| ch7-069 | 25 | 8a | WARN | die Goldwaage — die Goldwaagen | hier keine bersetzung | die Goldwaage, -n (Leg doch nicht jedes Wort auf die Goldwaage!) | WARN english_spelling: unknown English word(s): bersetzung, hier, keine |
| ch7-070 | 25 | 8a | OK | die Harmonie — die Harmonien | harmony | die Harmonie, -n |  |
| ch7-071 | 25 | 8a | OK | die Ich-Aussage — die Ich-Aussagen | I-statement | die Ich-Aussage, -n |  |
| ch7-072 | 25 | 8a | OK | die Kritik — die Kritiken | criticism | die Kritik, -en |  |
| ch7-073 | 25 | 8a | WARN | nachgeben | to give in | nachlgeben, er gibt nach, gab nach, hat nachgegeben | WARN auto_corrected: 'nachlgeben' -> 'nachgeben' (checked with Wiktionary) |
| ch7-074 | 25 | 8a | OK | schweigen | to remain silent | schweigen, er schweigt, schwieg, hat geschwiegen |  |
| ch7-075 | 25 | 8a | WARN | der Streit — die Streite | arguement | der streit, -e | WARN english_spelling: unknown English word(s): arguement |
| ch7-076 | 25 | 8a | OK | das Wort — die Wörter | word | das Wort, "-er (Leg doch nicht jedes Wort auf die Goldwaage!) |  |
| ch7-077 | 25 | 8a | OK | zu Ende sein | to finish | zu Ende sein |  |
| ch7-078 | 25 | 9a | OK | sich aufregen | to get annoyed | aufregen (sich) (úber + A.) |  |
| ch7-079 | 25 | 9a | WARN | das Streitgespräch — die Streitgespräche | argument | das Streitgespräch, -e übertreiben, er übertreibt, úbertrieb, hat to exaggerate übertrieben | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Streitgespräche |
| ch7-080 | 25 | 9a | OK | undiplomatisch | undiplomatic | undiplomatisch |  |
| ch7-081 | 26 | 10a | WARN | die Modalpartikel — die Modalpartikel | modal particle | die Modalpartikel, - | WARN plural_mismatch: plural 'die Modalpartikel' but Wiktionary has: Modalpartikeln |
| ch7-082 | 26 | 11a | OK | sich B amúsieren | to amuse | B amúsieren (sich) (úber + A.) |  |
| ch7-083 | 26 | 11a | OK | angeblich | allegedly | angeblich |  |
| ch7-084 | 26 | 11a | OK | behaupten | to claim | behaupten |  |
| ch7-085 | 26 | 11a | OK | die Behauptung — die Behauptungen | claim | die Behauptung, -en |  |
| ch7-086 | 26 | 11a | OK | beschäftigt sein | to be busy | beschäftigt sein (mit + D.) |  |
| ch7-087 | 26 | 11a | OK | beweisen | to prove | beweisen, er beweist, bewies, hat bewiesen |  |
| ch7-088 | 26 | 11a | OK | der Ehegatte — die Ehegatten | spouse (m) | der Ehegatte, -n |  |
| ch7-089 | 26 | 11a | OK | die Ehegattin — die Ehegattinnen | spouse s (f) | die Ehegattin, -nen |  |
| ch7-090 | 26 | 11a | OK | eigen | own | eigen |  |
| ch7-091 | 26 | 11a | OK | der Einfluss — die Einflüsse | influence | der Einfluss, "-e |  |
| ch7-092 | 26 | 11a | OK | die Einzelheit — die Einzelheiten | detail | die Einzelheit, -en |  |
| ch7-093 | 26 | 11a | OK | der Ersatz | replacement | der Ersatz (Sg.) |  |
| ch7-094 | 26 | 11a | OK | die Fake News — die Fake News | fake news | die Fake News (Pl.) |  |
| ch7-095 | 26 | 11a | OK | das Familienleben | family life | das Familienleben (Sg.) |  |
| ch7-096 | 26 | 11a | OK | fürchten | to be scared | fürchten |  |
| ch7-097 | 26 | 11a | OK | geheim | secret | geheim |  |
| ch7-098 | 26 | 11a | OK | klicken | to click | klicken (auf + A.) |  |
| ch7-099 | 26 | 11a | OK | die Mehrheit — die Mehrheiten | majority | die Mehrheit, -en |  |
| ch7-100 | 26 | 11a | OK | die Presse | press | die Presse (Sg.) |  |
| ch7-101 | 26 | 11a | OK | der/die Promi — die Promis | famous person | der/die Promi, -s |  |
| ch7-102 | 26 | 11a | OK | die Scheidung — die Scheidungen | divorce | die Scheidung, -en |  |
| ch7-103 | 26 | 11a | OK | die Schlagzeile — die Schlagzeilen | headline | die schlagzeile, -n |  |
| ch7-104 | 26 | 11a | OK | wundervoll | wonderful | wundervoll |  |
| ch7-105 | 26 | 11b | OK | arm, ármer, am ärmsten | poor | arm, ármer, am ärmsten |  |
| ch7-106 | 26 | 11b | OK | die Fernsehkrimiserie — die Fernsehkrimiserien | TV crime series | die Fernsehkrimiserie, -n |  |
| ch7-107 | 26 | 11b | OK | das Gericht — die Gerichte | court (of law) | das Gericht, -e (vor Gericht gehen) |  |
| ch7-108 | 26 | 11b | WARN | kommerziell | comercial | kommerziell | WARN english_spelling: unknown English word(s): comercial |
| ch7-109 | 26 | 11b | OK | komponieren | to compose | komponieren |  |
| ch7-110 | 26 | 11b | OK | der Komponist — die Komponisten | composer (m) | der Komponist, -en |  |
| ch7-111 | 26 | 11b | OK | die Komponistin — die Komponistinnen | composer (f) | die Komponistin, -nen |  |
| ch7-112 | 26 | 11b | OK | leidenschaftlich | passionate | leidenschaftlich |  |
| ch7-113 | 26 | 11b | OK | die Musikgeschichte | musical history | die Musikgeschichte (Sg.) |  |
| ch7-114 | 26 | 11b | OK | der Pianist — die Pianisten | piano player (m) | der Pianist, -en |  |
| ch7-115 | 26 | 11b | OK | die Pianistin — die Pianistinnen | piano player (f) | die Pianistin, -nen |  |
| ch7-116 | 26 | 11b | OK | die Schauspielkarriere — die Schauspielkarrieren | acting career | die Schauspielkarriere, -n |  |
| ch7-117 | 26 | 11b | OK | verhindern | to prevent | verhindern |  |
| ch7-118 | 26 | 11b | OK | zwingen | to force | zwingen, er zwingt, zwang, hat gezwungen |  |
| ch7-119 | 26 | 11c | OK | dokumentieren erhalten sein | to document preserved.) | dokumentieren erhalten sein (Die Briefe sind alt, aber gut to be preserved (The letters are old, but well erhalten.) |  |
| ch7-120 | 26 | 11c | OK | die Inspiration — die Inspirationen | inspiration | die Inspiration, -en |  |
| ch7-121 | 26 | 11c | OK | die Konzentration | concentration | die Konzentration (Sg.) |  |
| ch7-122 | 26 | 11c | OK | die Konzertreise — die Konzertreisen | concert tour | die Konzertreise, -n |  |
| ch7-123 | 26 | 11c | OK | die Krimireihe — die Krimireihen | crime series | die Krimireihe, -n |  |
| ch7-124 | 26 | 11c | OK | die Parade-Rolle — die Parade-Rollen | main role | die Parade-Rolle, -n |  |
| ch7-125 | 26 | 11c | OK | der Tod — die Tode | death | der Tod, -e |  |
| ch7-126 | 26 | 11c | OK | um | around | um (+ A.) (die Gegend um Leipzig) |  |
| ch7-127 | 26 | 11d | OK | die Sammlung — die Sammlungen | collection | die Sammlung, -en |  |
| ch7-128 | 27 | 12a | OK | der Fuchs — die Füchse | fox | der Fuchs, "-e |  |
| ch7-129 | 27 | 12a | OK | die Moral | moral | die Moral (Sg.) |  |
| ch7-130 | 27 | 12b | OK | beißen | to bite | beiBen, er beiBt, biss, hat gebissen |  |
| ch7-131 | 27 | 12b | OK | die Beute | prey | die Beute (Sg.) |  |
| ch7-132 | 27 | 12b | OK | brüllen davonlgehen | roared | brüllen davonlgehen, er geht davon, ging davon, to leave ist davongegangen |  |
| ch7-133 | 27 | 12b | OK | die Fabel — die Fabeln | fable | die Fabel, -n |  |
| ch7-134 | 27 | 12b | OK | der Feind — die Feinde | enemy (m) | der Feind, -e |  |
| ch7-135 | 27 | 12b | OK | die Feindin — die Feindinnen | enemy (f) | die Feindin, -nen |  |
| ch7-136 | 27 | 12b | OK | der Hirsch — die Hirsche | stag | der Hirsch, -e |  |
| ch7-137 | 27 | 12b | OK | die Jagd — die Jagden | hunt | die Jagd, -en |  |
| ch7-138 | 27 | 12b | OK | kraftlos | powerless | kraftlos |  |
| ch7-139 | 27 | 12b | OK | die Lebensweisheit — die Lebensweisheiten | worldly wisdom | die Lebensweisheit, -en |  |
| ch7-140 | 27 | 12b | OK | lügen | to lie | lügen, er lügt, log, hat gelogen |  |
| ch7-141 | 27 | 12b | OK | scharf, schärfer, am schärfsten | sharp | scharf, schärfer, am schärfsten (Vorsicht, das Messer ist scharf.) |  |
| ch7-142 | 27 | 12b | OK | stecken | to hide | stecken (in + D.) |  |
| ch7-143 | 27 | 12b | ERROR | zurúckbrúllen | to roar back | zurúckbrúllen | ERROR unknown_word: 'zurúckbrúllen' not in Wiktionary |
| ch7-144 | 27 | 12c | OK | fressen | to eat | fressen, er frisst, fraß, hat gefressen |  |
| ch7-145 | 27 | 12c | OK | loben | to praise | loben |  |
| ch7-146 | 27 | 12c | OK | der Rabe — die Raben | crow | der Rabe, -n |  |
| ch7-147 | 27 | 12c | OK | der Schnabel — die Schnäbel | beak | der Schnabel, "- |  |
| ch7-148 | 27 | 12c | OK | stehlen | to steal | stehlen, er stiehlt, stahl, hat gestohlen |  |
| ch7-149 | 27 | 12c | WARN | vorsingen | to sing | vorlsingen, er singt vor, sang vor, hat vorgesungen | WARN auto_corrected: 'vorlsingen' -> 'vorsingen' (checked with Wiktionary) |
| ch7-150 | 27 | 12 UB | WARN | die Ente — die Enten | duck | die Ente, -n | WARN ocr_low_confidence: OCR confidence 0.66 < 0.85; WARN english_from_alt: used second OCR model: 'dunp' -> 'duck' |
| ch7-151 | 27 | 12 UB | OK | die Fliege — die Fliegen | fly | die Fliege, -n |  |
| ch7-152 | 27 | 12 UB | OK | die Giraffe — die Giraffen | giraffe | die Giraffe, -n |  |
| ch7-153 | 27 | 12 UB | OK | das Krokodil — die Krokodile | crocodile | das Krokodil, -e |  |
| ch7-154 | 27 | 12 UB | OK | die Mücke — die Mücken | mosquito | die Mücke, -n |  |
| ch7-155 | 27 | 12 UB | OK | der Pinguin — die Pinguine | penguin | der Pinguin, -e |  |
| ch7-156 | 27 | 12 UB | OK | die Schildkröte — die Schildkröten | turtle | die schildkröte, -n |  |
| ch7-157 | 27 | 13a | OK | die Rede — die Reden | speech | die Rede, -n |  |
| ch7-158 | 27 | 13a | OK | der Satzteil — die Satzteile | part of the sentence | der Satzteil, -e |  |
| ch7-159 | 27 | 13b | OK | die Markierung — die Markierungen | marking | die Markierung, -en |  |
| ch7-160 | 27 | 13b | OK | k&k das Konfliktgespräch, -e | argument | k&k das Konfliktgespräch, -e |  |
| ch7-161 | 27 | 13b | OK | der Temporalsatz — die Temporalsätze | temporal clause | der Temporalsatz, "-e |  |
| ch7-162 | 27 | 13b | WARN | das Tempus — die Tempora | tense | das Tempus, Tempora | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Tempora |
| ch8-001 | 27 | 1a | WARN | sich anstrengen | to show effort | an/strengen (sich) | WARN auto_corrected: 'sich an/strengen' -> 'sich anstrengen' (checked with Wiktionary) |
| ch8-002 | 27 | 1a | OK | das Apfelmus | apple sauce | das Apfelmus (Sg.) |  |
| ch8-003 | 27 | 1a | OK | ausreichend | sufficient | ausreichend |  |
| ch8-004 | 27 | 1a | OK | blutig | bloody | blutig |  |
| ch8-005 | 27 | 1a | OK | einbauen | to build in | einbauen |  |
| ch8-006 | 27 | 1a | WARN | eincremen | to put on | einlcremen | WARN auto_corrected: 'einlcremen' -> 'eincremen' (checked with Wiktionary) |
| ch8-007 | 27 | 1a | OK | eiskalt | ice cold | eiskalt |  |
| ch8-008 | 27 | 1a | OK | die Flüssigkeit — die Flüssigkeiten | fluid | die Flüssigkeit, -en |  |
| ch8-009 | 27 | 1a | OK | der Fruchtsaft — die Fruchtsäfte | fruit juice | der Fruchtsaft, "-e |  |
| ch8-010 | 27 | 1a | OK | das Gehirn — die Gehirne | brain | das Gehirn, -e |  |
| ch8-011 | 28 | 1a | OK | der Geist — die Geister | soul | der Geist, -er |  |
| ch8-012 | 28 | 1a | OK | die Gymnastik | gymnastics | die Gymnastik (Sg.) |  |
| ch8-013 | 28 | 1a | OK | der Knödel — die Knödel | German dumpling | der Knödel, - |  |
| ch8-014 | 28 | 1a | OK | kühlen | to cool | kühlen |  |
| ch8-015 | 28 | 1a | OK | der Pfannkuchen — die Pfannkuchen | pancake | der Pfannkuchen, - |  |
| ch8-016 | 28 | 1a | OK | raten | to advise | raten (zu + D.), er rát, riet, hat geraten (Ich rate dir, auf deine Gesundheit zu achten.) |  |
| ch8-017 | 28 | 1a | OK | das Rätsel — die Rätsel | riddle | das Rätsel, - |  |
| ch8-018 | 28 | 1a | OK | roh | raw | roh |  |
| ch8-019 | 28 | 1a | OK | der Schatten — die Schatten | shadow | der Schatten, - |  |
| ch8-020 | 28 | 1a | OK | der Schweinebraten — die Schweinebraten | roast pork | der Schweinebraten, - |  |
| ch8-021 | 28 | 1a | OK | spüren | to sense | spüren |  |
| ch8-022 | 28 | 1a | OK | stärken | to strengthen | stärken |  |
| ch8-023 | 28 | 1a | OK | das Steak — die Steaks | steak | das Steak, -s |  |
| ch8-024 | 28 | 1a | OK | die Wasserflasche — die Wasserflaschen | water bottle | die Wasserflasche, -n |  |
| ch8-025 | 28 | 1a | OK | zwischendurch | in between | zwischendurch |  |
| ch8-026 | 28 | 1b | OK | die Auswertung — die Auswertungen | evaluation | die Auswertung, -en |  |
| ch8-027 | 28 | 1b | OK | bisher | so far | bisher |  |
| ch8-028 | 28 | 1b | OK | einigermaßen | more or less | einigermaBen |  |
| ch8-029 | 28 | 1b | OK | das Signal — die Signale | signal | das Signal, -e |  |
| ch8-030 | 28 | 1b | ERROR | zusammen/zählen | to add | zusammen/zählen | ERROR unknown_word: 'zusammen/zählen' not in Wiktionary |
| ch8-031 | 28 | 2a | OK | üß gtmen | to breathe | üB gtmen |  |
| ch8-032 | 28 | 2a | OK | auflösen | to resolve | auflösen |  |
| ch8-033 | 28 | 2a | OK | blass | pale | blass |  |
| ch8-034 | 28 | 2a | WARN | die Brust — die Brüste | chest | die Brust, "-e einlnehmen, er nimmt ein, nahm ein, hat to take (to take medicine) eingenommen (Medikamente einnehmen) | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Brüste |
| ch8-035 | 28 | 2a | OK | kleben | to stick | kleben |  |
| ch8-036 | 28 | 2a | OK | der Krankenwagen — die Krankenwagen | ambulance | der Krankenwagen, - |  |
| ch8-037 | 28 | 2a | WARN | krankschreiben | to sign sb off work, to take sick leave | kranklschreiben, er schreibt krank, schrieb krank, hat krankgeschrieben | WARN auto_corrected: 'kranklschreiben' -> 'krankschreiben' (checked with Wiktionary) |
| ch8-038 | 28 | 2a | OK | die Notaufnahme — die Notaufnahmen | emergency room | die Notaufnahme, -n |  |
| ch8-039 | 28 | 2a | OK | der Notruf — die Notrufe | sos, emergency call | der Notruf, -e |  |
| ch8-040 | 28 | 2a | OK | das Pulver — die Pulver | powder | das Pulver, - |  |
| ch8-041 | 28 | 2a | OK | der Rest — die Reste | rest | der Rest, -e |  |
| ch8-042 | 28 | 2a | OK | das Schmerzmittel — die Schmerzmittel | pain killer | das Schmerzmittel, - |  |
| ch8-043 | 28 | 2a | OK | die Schulter — die Schultern | shoulder | die Schulter, -n |  |
| ch8-044 | 28 | 2a | OK | verschreiben | to prescribe | verschreiben, er verschreibt, verschrieb, hat verschrieben |  |
| ch8-045 | 28 | 2a | OK | die Versichertenkarte — die Versichertenkarten | insurance card | die Versichertenkarte, -n |  |
| ch8-046 | 28 | 2b | OK | das Krankenzimmer — die Krankenzimmer | hospital room | das Krankenzimmer, - |  |
| ch8-047 | 28 | 2c | OK | brauchen | to need | brauchen (Sie brauchen mich nur zu rufen, wenn ich Ihnen helfen soll.) |  |
| ch8-048 | 28 | 2c | OK | warnen | to warn | warnen (vor + D.) |  |
| ch8-049 | 28 | 2c | OK | zu | to | zu (Danke, aber du brauchst mir nicht zu helfen.) |  |
| ch8-050 | 28 | 3a | OK | der Pfleger — die Pfleger | nurse (m) | der Pfleger, - |  |
| ch8-051 | 28 | 3a | OK | die Pflegerin — die Pflegerinnen | nurse (f) | die Pflegerin, -nen |  |
| ch8-052 | 28 | 3c | OK | glatt | smooth | glatt |  |
| ch8-053 | 28 | 3c | ERROR | schwindelig/schwindlig | 4zz!p | schwindelig/schwindlig | WARN ocr_low_confidence: OCR confidence 0.83 < 0.85; ERROR unknown_word: 'schwindelig/schwindlig' not in Wiktionary |
| ch8-054 | 28 | 3c | OK | unbequem | uncomfortable | unbequem |  |
| ch8-055 | 29 | 4a | OK | das Akkusativobjekt — die Akkusativobjekte | direct object | das Akkusativobjekt, -e |  |
| ch8-056 | 29 | 4b | OK | sich kämmen | to comb | kämmen (sich) |  |
| ch8-057 | 29 | 5a | OK | die Besuchszeit — die Besuchszeiten | visiting hours | die Besuchszeit, -en |  |
| ch8-058 | 29 | 5a | OK | die Wertsachen — die Wertsachen | valuables | die Wertsachen (Pl.) |  |
| ch8-059 | 29 | 5b | OK | der Alarmknopf — die Alarmknöpfe | alarm | der Alarmknopf, "-e |  |
| ch8-060 | 29 | 5b | WARN | der Apparat — die Apparate | appratus, machine | der Apparat, -e | WARN english_spelling: unknown English word(s): appratus |
| ch8-061 | 29 | 5b | OK | aufbewahren | to keep safe | aufbewahren |  |
| ch8-062 | 29 | 5b | WARN | aufteilen | to divide | auflteilen | WARN auto_corrected: 'auflteilen' -> 'aufteilen' (checked with Wiktionary) |
| ch8-063 | 29 | 5b | OK | der Bademantel — die Bademäntel | bathrobe | der Bademantel, "- |  |
| ch8-064 | 29 | 5b | OK | die Bedienungsanleitung — die Bedienungsanleitungen | instruction manual | die Bedienungsanleitung, -en |  |
| ch8-065 | 29 | 5b | OK | beschildert | marked with signs | beschildert |  |
| ch8-066 | 29 | 5b | OK | betragen | to come to | betragen, er betrágt, betrug, hat betragen |  |
| ch8-067 | 29 | 5b | OK | der Brand — die Brände | fire | der Brand, "-e |  |
| ch8-068 | 29 | 5b | OK | die Chipkarte — die Chipkarten | keycard | die Chipkarte, -n |  |
| ch8-069 | 29 | 5b | OK | der Diat-Assistent — die Diat-Assistenten | dietary assistant (m) | der Diat-Assistent, -en |  |
| ch8-070 | 29 | 5b | OK | die Diát-Assistentin — die Diát-Assistentinnen | dietary assistant (f) | die Diát-Assistentin, -nen |  |
| ch8-071 | 29 | 5b | WARN | diätisch | dietary (dietary food) | diátisch (diátische Ernáhrung) | WARN auto_corrected: 'diátisch' -> 'diätisch' (checked with Wiktionary) |
| ch8-072 | 29 | 5b | OK | die Drogerie — die Drogerien | drug store | die Drogerie, -n |  |
| ch8-073 | 29 | 5b | OK | einschließlich | including | einschließlich |  |
| ch8-074 | 29 | 5b | OK | die Entlassung — die Entlassungen | discharge | die Entlassung, -en |  |
| ch8-075 | 29 | 5b | OK | die Fernbedienung — die Fernbedienungen | remote control | die Fernbedienung, -en |  |
| ch8-076 | 29 | 5b | OK | das Fernsehgerät — die Fernsehgeräte | television | das Fernsehgerät, -e |  |
| ch8-077 | 29 | 5b | WARN | das Festnetz | landline | das Festnetz (Sg.) | WARN english_spelling: unknown English word(s): landline |
| ch8-078 | 29 | 5b | ERROR | grundsátzlich | in general | grundsátzlich | ERROR unknown_word: 'grundsátzlich' not in Wiktionary |
| ch8-079 | 29 | 5b | OK | der Haupteingang — die Haupteingänge | main entrance | der Haupteingang, "-e |  |
| ch8-080 | 29 | 5b | OK | die Hauptmahlzeit — die Hauptmahlzeiten | main meal | die Hauptmahlzeit, -en |  |
| ch8-081 | 29 | 5b | OK | der Hausschuh — die Hausschuhe | slipper | der Hausschuh, -e |  |
| ch8-082 | 29 | 5b | OK | das Infoblatt — die Infoblätter | fact sheet | das Infoblatt, "-er |  |
| ch8-083 | 29 | 5b | OK | der Klinikaufenthalt — die Klinikaufenthalte | hospital stay | der Klinikaufenthalt, -e |  |
| ch8-084 | 29 | 5b | OK | das Küchenteam — die Küchenteams | kitchen staff | das Küchenteam, -s |  |
| ch8-085 | 29 | 5b | OK | das Nachthemd — die Nachthemden | nightgown | das Nachthemd, -en |  |
| ch8-086 | 29 | 5b | OK | der Nachttisch — die Nachttische | nightstand | der Nachttisch, -e |  |
| ch8-087 | 29 | 5b | OK | der Notausgang — die Notausgänge | emergency exit | der Notausgang,"e |  |
| ch8-088 | 29 | 5b | OK | obere | upper | obere |  |
| ch8-089 | 29 | 5b | OK | prinzipiell | basically | prinzipiell |  |
| ch8-090 | 29 | 5b | OK | die Rücksicht | consideration | die Rücksicht (Sg.) (Bitte nehmen Sie bei Partys Rücksicht auf Ihre Nachbarn.) |  |
| ch8-091 | 29 | 5b | WARN | der Schlafanzug — die Schlafanzüge | pyjamas | der Schlafanzug, "-e | WARN english_spelling: unknown English word(s): pyjamas |
| ch8-092 | 29 | 5b | OK | das Schließfach — die Schließfächer | safe | das SchlieBfach, "-er |  |
| ch8-093 | 29 | 5b | OK | das Shampoo — die Shampoos | shampoo | das Shampoo, -s |  |
| ch8-094 | 29 | 5b | OK | sichtbar | visible | sichtbar |  |
| ch8-095 | 29 | 5b | OK | der Trainingsanzug — die Trainingsanzüge | track suit | der Trainingsanzug, "-e |  |
| ch8-096 | 29 | 5b | OK | untersagt sein | to be forbidden | untersagt sein |  |
| ch8-097 | 29 | 5b | OK | die Zahnbürste — die Zahnbürsten | toothbrush | die Zahnbürste, -n |  |
| ch8-098 | 29 | 5b | WARN | die Zahnpasta — die Zahnpastapasten | toothpaste | die Zahnpasta, -pasten | WARN plural_mismatch: plural 'die Zahnpastapasten' but Wiktionary has: Zahnpasten |
| ch8-099 | 29 | 5b | WARN | der Zimmernachbar — die Zimmernachbarn | next-door neighbour (m) | der Zimmernachbar, -n | WARN english_spelling: unknown English word(s): neighbour |
| ch8-100 | 29 | 5b | WARN | die Zimmernachbarin — die Zimmernachbarinnen | next-door neighbour (f) | die Zimmernachbarin, -nen | WARN english_spelling: unknown English word(s): neighbour |
| ch8-101 | 29 | 5b | OK | zur Verfügung stehen | to be available | zur Verfügung stehen |  |
| ch8-102 | 29 | 5b | OK | zuständig | responsible | zuständig (für + A.) |  |
| ch8-103 | 29 | 5b | OK | die Zwischenmahlzeit — die Zwischenmahlzeiten | snack | die Zwischenmahlzeit, -en |  |
| ch8-104 | 29 | 5c | OK | der Krankenbesuch — die Krankenbesuche | hospital visit | der Krankenbesuch, -e |  |
| ch8-105 | 29 | 6b | OK | der Alzheimer | Alzheimer's Disease | der Alzheimer (Sg.) |  |
| ch8-106 | 30 | 6b | OK | amerikanisch | American | amerikanisch |  |
| ch8-107 | 30 | 6b | OK | andererseits | on the other hand | andererseits |  |
| ch8-108 | 30 | 6b | WARN | auslösen | to elicit | aus/lösen | WARN auto_corrected: 'aus/lösen' -> 'auslösen' (checked with Wiktionary) |
| ch8-109 | 30 | 6b | OK | die Beerdigung — die Beerdigungen | funeral | die Beerdigung, -en |  |
| ch8-110 | 30 | 6b | OK | beruhigend | soothing | beruhigend |  |
| ch8-111 | 30 | 6b | OK | das Dur | major | das Dur (Sg.) |  |
| ch8-112 | 30 | 6b | OK | einerseits ..., andererseits ... | on the one hand..., on the other hand... | einerseits ..., andererseits ... |  |
| ch8-113 | 30 | 6b | OK | empfinden | to feel | empfinden, er empfindet, empfand, hat empfunden |  |
| ch8-114 | 30 | 6b | OK | entweder ... oder ... | either ... or | entweder ... oder ... |  |
| ch8-115 | 30 | 6b | OK | feierlich | festive | feierlich |  |
| ch8-116 | 30 | 6b | OK | die Filmbranche — die Filmbranchen | film industry | die Filmbranche, -n |  |
| ch8-117 | 30 | 6b | OK | der Forscher — die Forscher | researcher (m) | der Forscher, - |  |
| ch8-118 | 30 | 6b | OK | die Forscherin — die Forscherinnen | researcher (f) | die Forscherin, -nen |  |
| ch8-119 | 30 | 6b | OK | gelangen | to reach, attain | gelangen |  |
| ch8-120 | 30 | 6b | OK | Heavy Metal | heavy metal | Heavy Metal (Sg.) (ohne Artikel) |  |
| ch8-121 | 30 | 6b | OK | der Käsekuchen — die Käsekuchen | cheesecake | der Käsekuchen, - |  |
| ch8-122 | 30 | 6b | OK | die Klassik leiden | classic | die Klassik (Sg.) leiden (an + D.), er leidet, litt, hat gelitten to suffer |  |
| ch8-123 | 30 | 6b | OK | die Liebesszene — die Liebesszenen | love scene | die Liebesszene, -n |  |
| ch8-124 | 30 | 6b | OK | die Medizin | medicine | die Medizin (Sg.) (Musik kann wie Medizin wirken.) |  |
| ch8-125 | 30 | 6b | OK | Metal | metal | Metal (Sg.) (ohne Artikel) (Ich höre gern Metal.) |  |
| ch8-126 | 30 | 6b | OK | mithilfe | with the help of | mithilfe (von + D.) |  |
| ch8-127 | 30 | 6b | OK | das Moll | minor | das Moll (Sg.) |  |
| ch8-128 | 30 | 6b | OK | der Musikgeschmack | music taste | der Musikgeschmack (Sg.) |  |
| ch8-129 | 30 | 6b | OK | das Musikstudium — die Musikstudiumstudien | study of music | das Musikstudium, -studien |  |
| ch8-130 | 30 | 6b | OK | nicht nur ..., sondern auch ... | not only... but also... | nicht nur ..., sondern auch ... |  |
| ch8-131 | 30 | 6b | OK | der Puls | pulse | der Puls (Sg.) |  |
| ch8-132 | 30 | 6b | OK | die Reklame — die Reklamen | advertisement | die Reklame, -n |  |
| ch8-133 | 30 | 6b | ERROR | Salsa | salsa music | Salsa (Sg.) (ohne Artikel) | ERROR unknown_word: 'Salsa' not in Wiktionary |
| ch8-134 | 30 | 6b | OK | sinken | to sink | sinken, er sinkt, sank, ist gesunken |  |
| ch8-135 | 30 | 6b | OK | sowohl ... als auch ... | ... as well as... | sowohl ... als auch ... |  |
| ch8-136 | 30 | 6b | OK | das Stück — die Stücke | piece | das stück, -e (Ich spiele ein Stück von Mozart am Klavier.) |  |
| ch8-137 | 30 | 6b | OK | der Ton — die Töne | tone | der Ton, "-e |  |
| ch8-138 | 30 | 6b | OK | die Tonart — die Tonarten | key | die Tonart, -en |  |
| ch8-139 | 30 | 6b | OK | tragisch | tragic | tragisch |  |
| ch8-140 | 30 | 6b | OK | verarbeiten | to process | verarbeiten |  |
| ch8-141 | 30 | 6b | OK | vermutlich | presumably | vermutlich |  |
| ch8-142 | 30 | 6b | OK | weder ... noch ... | neither...nor | weder ... noch ... |  |
| ch8-143 | 30 | 6b | OK | die Wirkung — die Wirkungen | effect | die Wirkung, -en |  |
| ch8-144 | 30 | 6b | OK | würzig | spicy | würzig |  |
| ch8-145 | 30 | 6b | OK | zwar ..., aber ... | still...yet... | zwar ..., aber ... |  |
| ch8-146 | 30 | 6c | OK | die Heilung — die Heilungen | cure | die Heilung, -en |  |
| ch8-147 | 30 | 6d | OK | das Wort — die Worte | word | das Wort, -e (etwas mit einfachen Worten erkláren) |  |
| ch8-148 | 30 | 7a | OK | die Einschränkung — die Einschränkungen | limitation | die Einschränkung, -en |  |
| ch8-149 | 30 | 7a | OK | der Konnektor — die Konnektoren | restriction | der Konnektor, -en |  |
| ch8-150 | 30 | 7a | OK | zweiteilig | two-part | zweiteilig |  |
| ch8-151 | 30 | 7b | OK | der Jazz | jazz | der Jazz (Sg.) |  |
| ch8-152 | 30 | 7b | OK | klassisch | classic | klassisch |  |
| ch8-153 | 30 | 8 | OK | der Kopf — die Köpfe | head | der Kopf, "-e (Was geht dir durch den Kopf?) |  |
| ch8-154 | 31 | 9a | OK | die Nachfrage — die Nachfragen | demand, inquiry | die Nachfrage, -n |  |
| ch8-155 | 31 | 9a | OK | die Seite — die Seiten | side | die Seite, -n (Geh mal zur Seite.) |  |
| ch8-156 | 31 | 9a | OK | die Unsicherheit — die Unsicherheiten | uncertainty | die Unsicherheit, -en |  |
| ch8-157 | 31 | 10a | OK | die Gedächtnisleistung — die Gedächtnisleistungen | memory skills | die Gedächtnisleistung, -en |  |
| ch8-158 | 31 | 10a | OK | kommen | to think | kommen (auf + A.), er kommt, kam, ist gekommen (Ich komme gerade nicht auf die Lösung.) |  |
| ch8-159 | 31 | 10a | OK | die Kursstunde — die Kursstunden | lesson | die Kursstunde, -n |  |
| ch8-160 | 31 | 10a | OK | úberfragt sein | to be stumped | úberfragt sein |  |
| ch8-161 | 31 | 10a | OK | woran | what | woran |  |
| ch8-162 | 31 | 10a | OK | die Zunge — die Zungen | tongue | die Zunge, -n (Wie heiBt das Wort noch mal? Mir liegt es auf der Zunge.) |  |
| ch8-163 | 31 | 11a | OK | der Lerncoach — die Lerncoachs | learning coach | der Lerncoach, -s |  |
| ch8-164 | 31 | 11a | OK | die Motivation | motivation | die Motivation (Sg.) |  |
| ch8-165 | 31 | 11a | OK | die Programmankündigung — die Programmankündigungen | program announcement | die Programmankündigung, -en |  |
| ch8-166 | 31 | 11a | OK | der Studiogast — die Studiogäste | studio guest | der Studiogast, "-e |  |
| ch8-167 | 31 | 11a | OK | vermitteln | to convey | vermitteln (Es ist wichtig, in den Schulen auch Lerntechniken zu vermitteln.) |  |
| ch8-168 | 31 | 11b | OK | der Lerntipp — die Lerntipps | learning tip | der Lerntipp, -s |  |
| ch8-169 | 31 | 11b | OK | der Lerntyp — die Lerntypen | learning type | der Lerntyp, -en |  |
| ch8-170 | 31 | 11b | OK | die Lernzeit — die Lernzeiten | learning time | die Lernzeit, -en |  |
| ch8-171 | 31 | 11c | OK | der Moderator — die Moderatoren | moderator (m) | der Moderator, -en |  |
| ch8-172 | 31 | 11c | OK | die Moderatorin — die Moderatorinnen | moderator (f) | die Moderatorin, -nen |  |
| ch8-173 | 31 | 11c | OK | motiviert | motivated | motiviert |  |
| ch8-174 | 31 | 12a | WARN | sich ausdenken | to think of | ausldenken (sich), er denkt aus, dachte aus, hat ausgedacht | WARN auto_corrected: 'sich ausldenken' -> 'sich ausdenken' (checked with Wiktionary) |
| ch8-175 | 31 | 12a | OK | fantasievoll | imaginative | fantasievoll |  |
| ch8-176 | 31 | 12a | WARN | überprüfen | to check | úberprüfen | WARN auto_corrected: 'úberprüfen' -> 'überprüfen' (checked with Wiktionary) |
| ch8-177 | 31 | 12a | OK | ungewöhnlich | unusual | ungewöhnlich |  |
| ch8-178 | 31 | 13a | OK | alltäglich | ordinary | alltäglich |  |
| ch8-179 | 31 | 13a | OK | die Altersgruppe — die Altersgruppen | peer group | die Altersgruppe, -n |  |
| ch8-180 | 31 | 13a | WARN | sich ausbreiten | to spread | aus/breiten (sich) | WARN auto_corrected: 'sich aus/breiten' -> 'sich ausbreiten' (checked with Wiktionary) |
| ch8-181 | 31 | 13a | OK | der Ausflugstipp — die Ausflugstipps | excursion tip | der Ausflugstipp, -s |  |
| ch8-182 | 31 | 13a | OK | der Aussichtsturm — die Aussichtstürme | belvedere, observation tower | der Aussichtsturm, "-e |  |
| ch8-183 | 31 | 13a | OK | barrierearm | partly accessible | barrierearm |  |
| ch8-184 | 31 | 13a | OK | essbar | edible | essbar |  |
| ch8-185 | 31 | 13a | OK | familienfreundlich | family friendly | familienfreundlich |  |
| ch8-186 | 31 | 13a | OK | die Ferne | distance | die Ferne (Sg.) |  |
| ch8-187 | 31 | 13a | OK | formen | to form | formen |  |
| ch8-188 | 31 | 13a | OK | das Freigelände — die Freigelände | open-air site | das Freigelände, - |  |
| ch8-189 | 31 | 13a | OK | geeignet | suitable | geeignet (für + A.) |  |
| ch8-190 | 31 | 13a | OK | interaktiv | interactive | interaktiv |  |
| ch8-191 | 31 | 13a | OK | der Klang — die Klänge | sound | der Klang, "-e |  |
| ch8-192 | 31 | 13a | OK | der/die Musikinteressierte — die Musikinteressierten | musically interested | der/die Musikinteressierte, -n |  |
| ch8-193 | 31 | 13a | OK | der Pfad — die Pfade | way | der Pfad, -e |  |
| ch8-194 | 31 | 13a | OK | Riesen- | huge | Riesen- (Ole und Valerie wohnen in einem Riesenhaus.) |  |
| ch8-195 | 31 | 13a | OK | die Schönheit — die Schönheiten | beauty | die Schönheit, -en |  |
| ch8-196 | 31 | 13a | OK | traumhaft | dreamy | traumhaft |  |
| ch8-197 | 31 | 13a | WARN | die Villa — die Villen | mansion | die Villa, Villen | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Villen |
| ch8-198 | 31 | 13a | OK | visuell | visual | visuell |  |
| ch8-199 | 32 | 13a | OK | sich wundern | to marvel | wundern (sich) (úber + A.) |  |
| ch9-001 | 32 | 1a | OK | das Kunststück — die Kunststücke | piece of art | das Kunststück, -e |  |
| ch9-002 | 32 | 1b | WARN | anregen | to inspire | anIregen (zu + D.) | WARN auto_corrected: 'anIregen' -> 'anregen' (checked with Wiktionary) |
| ch9-003 | 32 | 1b | OK | die Betonwand — die Betonwände | concrete wall | die Betonwand, "-e |  |
| ch9-004 | 32 | 1b | OK | der Brunnen — die Brunnen | fountain | der Brunnen, - |  |
| ch9-005 | 32 | 1b | OK | die Espressokanne — die Espressokannen | espresso can | die Espressokanne, -n |  |
| ch9-006 | 32 | 1b | WARN | das Graffito — die Graffiti | graffiti | das Graffito, Graffiti | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Graffiti |
| ch9-007 | 32 | 1b | OK | die Hauswand — die Hauswände | exterior wall of a house | die Hauswand, "-e |  |
| ch9-008 | 32 | 1b | OK | hinauf | up | hinauf |  |
| ch9-009 | 32 | 1b | OK | die Installation — die Installationen | installation | die Installation, -en |  |
| ch9-010 | 32 | 1b | OK | konsumieren | to consume | konsumieren |  |
| ch9-011 | 32 | 1b | OK | der Kunstblog — die Kunstblogs | art blog | der Kunstblog, -s |  |
| ch9-012 | 32 | 1b | WARN | das Kunstwerk — die Kunstwerk | artwork | das Kunstwerk, - | WARN plural_mismatch: plural 'die Kunstwerk' but Wiktionary has: Kunstwerke |
| ch9-013 | 32 | 1b | OK | rund | round | rund (Ein Ball ist rund.) |  |
| ch9-014 | 32 | 1b | OK | der Spieß — die Spieße | skewer | der SpieB, -e |  |
| ch9-015 | 32 | 1b | OK | der Stadtteil — die Stadtteile | district | der Stadtteil, -e |  |
| ch9-016 | 32 | 1b | OK | die Statue — die Statuen | statue | die Statue, -n |  |
| ch9-017 | 32 | 1b | OK | weich | soft | weich |  |
| ch9-018 | 32 | 1b | WARN | weiterentwickeln | to evolve | weiterlentwickeln | WARN auto_corrected: 'weiterlentwickeln' -> 'weiterentwickeln' (checked with Wiktionary) |
| ch9-019 | 32 | 1b | OK | steil | steep | steil |  |
| ch9-020 | 32 | 2a | OK | die Radioumfrage — die Radioumfragen | radio survey | die Radioumfrage, -n |  |
| ch9-021 | 32 | 2b | WARN | das Kunstobjekt — die Kunstobjekt | artwork | das Kunstobjekt, - | WARN plural_mismatch: plural 'die Kunstobjekt' but Wiktionary has: Kunstobjekte |
| ch9-022 | 32 | 3a | OK | die Putzfrau — die Putzfrauen | cleaner (f) | die Putzfrau, -en |  |
| ch9-023 | 32 | 3a | OK | der Putzmann — die Putzmänner | cleaner (m) | der Putzmann, "-er |  |
| ch9-024 | 32 | 3a | OK | tierisch | animal | tierisch |  |
| ch9-025 | 32 | 3a | OK | der Zeitungstext — die Zeitungstexte | newspaper text | der Zeitungstext, -e |  |
| ch9-026 | 32 | 3b | OK | die Auktion — die Auktionen | auction | die Auktion, -en |  |
| ch9-027 | 32 | 3b | OK | der Auktionsbesucher — die Auktionsbesucher | auction visitor (m) | der Auktionsbesucher, - |  |
| ch9-028 | 32 | 3b | OK | die Auktionsbesucherin — die Auktionsbesucherinnen | auction visitor (f) | die Auktionsbesucherin, -nen |  |
| ch9-029 | 32 | 3b | OK | begrenzt | limited | begrenzt |  |
| ch9-030 | 32 | 3b | OK | beschädigen | to damage | beschädigen |  |
| ch9-031 | 32 | 3b | OK | clever | smart | clever |  |
| ch9-032 | 32 | 3b | OK | erraten | to guess | erraten, er errát, erriet, hat erraten |  |
| ch9-033 | 32 | 3b | OK | der Ethnologe — die Ethnologen | ethnologist (m) | der Ethnologe, -n |  |
| ch9-034 | 32 | 3b | OK | die Ethnologin — die Ethnologinnen | ethnologist (f) | die Ethnologin, -nen |  |
| ch9-035 | 32 | 3b | OK | die Galerie — die Galerien | gallery | die Galerie, -n |  |
| ch9-036 | 32 | 3b | OK | die Gummiwanne — die Gummiwannen | rubber tub | die Gummiwanne, -n |  |
| ch9-037 | 32 | 3b | OK | sich handeln | to be about | handeln (sich) (um + A.) |  |
| ch9-038 | 32 | 3b | WARN | hernkommen | to approach | heran/kommen (an + A.), er kommt heran, kam heran, ist herangekommen | WARN auto_corrected: 'heran/kommen' -> 'hernkommen' (checked with Wiktionary) |
| ch9-039 | 32 | 3b | OK | das Inland | inland | das Inland (Sg.) |  |
| ch9-040 | 32 | 3b | OK | der Käufer — die Käufer | buyer (m) | der Käufer, - |  |
| ch9-041 | 32 | 3b | OK | die Käuferin — die Käuferinnen | buyer (f) | die Käuferin, -nen |  |
| ch9-042 | 32 | 3b | OK | der Kunsthistoriker — die Kunsthistoriker | art historian (m) | der Kunsthistoriker, - |  |
| ch9-043 | 32 | 3b | OK | die Kunsthistorikerin — die Kunsthistorikerinnen | art historian (f) | die Kunsthistorikerin, -nen |  |
| ch9-044 | 32 | 3b | OK | der Kunstsupermarkt — die Kunstsupermärkte | art supermarket | der Kunstsupermarkt, "-e |  |
| ch9-045 | 32 | 3b | OK | das Missgeschick — die Missgeschicke | misfortune | das Missgeschick, -e |  |
| ch9-046 | 32 | 3b | OK | nicht ..., sondern ... | accident | nicht ..., sondern ... |  |
| ch9-047 | 33 | 3b | OK | original | original | original |  |
| ch9-048 | 33 | 3b | OK | das Original — die Originale | original | das Original, -e |  |
| ch9-049 | 33 | 3b | OK | die Preiskategorie — die Preiskategorien | price category | die Preiskategorie, -n |  |
| ch9-050 | 33 | 3b | OK | die Reinigungsfirma — die Reinigungsfirmafirmen | cleaning company | die Reinigungsfirma, -firmen |  |
| ch9-051 | 33 | 3b | OK | das Reinigungspersonal | cleaning staff | das Reinigungspersonal (Sg.) |  |
| ch9-052 | 33 | 3b | OK | scheinbar | apparent | scheinbar |  |
| ch9-053 | 33 | 3b | OK | der Verkaufsraum — die Verkaufsräume | showroom | der Verkaufsraum, "-e |  |
| ch9-054 | 33 | 3b | OK | der Zoodirektor — die Zoodirektoren | zoo director (m) | der Zoodirektor, -en |  |
| ch9-055 | 33 | 3b | OK | die Zoodirektorin — die Zoodirektorinnen | zoo director (f) | die Zoodirektorin, -nen |  |
| ch9-056 | 33 | 4a | OK | die Präpositionalergänzung — die Präpositionalergänzungen | prepositional appendix | die Präpositionalergänzung, -en |  |
| ch9-057 | 33 | 4a | OK | die Satzverneinung — die Satzverneinungen | sentence negation | die Satzverneinung, -en |  |
| ch9-058 | 33 | 4a | OK | die Stellung — die Stellungen | position | die Stellung, -en |  |
| ch9-059 | 33 | 4a | OK | der Verbteil — die Verbteile | part of the verb | der Verbteil, -e |  |
| ch9-060 | 33 | 4a | OK | verneinen | to negate | verneinen |  |
| ch9-061 | 33 | 4b | OK | die Putzfirma — die Putzfirmafirmen | cleaning company | die Putzfirma, -firmen |  |
| ch9-062 | 33 | 5c | OK | durcheinander | disorganized | durcheinander |  |
| ch9-063 | 33 | 7a UB | OK | anwenden | to use | anwenden |  |
| ch9-064 | 33 | 7a UB | OK | aufführen | to perform | aufführen |  |
| ch9-065 | 33 | 7a UB | WARN | auftreten | to perform | aufltreten, er tritt auf, trat auf, ist aufgetreten | WARN auto_corrected: 'aufltreten' -> 'auftreten' (checked with Wiktionary) |
| ch9-066 | 33 | 7a UB | OK | behandeln | to treat | behandeln |  |
| ch9-067 | 33 | 7a UB | OK | besprechen | to discuss | besprechen, er bespricht, besprach, hat besprochen |  |
| ch9-068 | 33 | 7a UB | OK | die Broschüre — die Broschüren | brochure | die Broschüre, -n |  |
| ch9-069 | 33 | 7a UB | OK | das Büfett — die Büfetts | buffet | das Büfett, -s |  |
| ch9-070 | 33 | 7a UB | OK | die Darstellung — die Darstellungen | depiction | die Darstellung, -en |  |
| ch9-071 | 33 | 7a UB | OK | die Eröffnung — die Eröffnungen | opening | die Eröffnung, -en |  |
| ch9-072 | 33 | 7a UB | OK | der Frieden | peace | der Frieden (Sg.) |  |
| ch9-073 | 33 | 7a UB | WARN | der Geschmack | flavour | der Geschmack (Sg.) | WARN english_spelling: unknown English word(s): flavour |
| ch9-074 | 33 | 7a UB | WARN | herumspringen | to jump around | herumlspringen, er springt herum, sprang herum, ist herumgesprungen | WARN auto_corrected: 'herumlspringen' -> 'herumspringen' (checked with Wiktionary) |
| ch9-075 | 33 | 7a UB | OK | das Kostüm — die Kostüme | costume | das Kostüm, -e |  |
| ch9-076 | 33 | 7a UB | OK | der Kursabschluss — die Kursabschlüsse | course completion | der Kursabschluss, "-e |  |
| ch9-077 | 33 | 7a UB | OK | die Qualifikation — die Qualifikationen | qualification | die Qualifikation, -en |  |
| ch9-078 | 33 | 7a UB | OK | rennen | to run | rennen, er rennt, rannte, ist gerannt |  |
| ch9-079 | 33 | 7a UB | OK | sich schminken | to put make up on | schminken (sich) |  |
| ch9-080 | 33 | 7a UB | OK | schreien | to scream | schreien, er schreit, schrie, hat geschrien |  |
| ch9-081 | 33 | 7a UB | OK | der Snack — die Snacks | snack | der Snack, -s |  |
| ch9-082 | 33 | 7a UB | OK | das Theaterabenteuer — die Theaterabenteuer | theatre adventure | das Theaterabenteuer, - |  |
| ch9-083 | 33 | 7a UB | OK | die Uniform — die Uniformen | uniform | die Uniform, -en |  |
| ch9-084 | 33 | 7b | WARN | das Aquarell — die Aquarelle | watercolour | das Aquarell, -e | WARN english_spelling: unknown English word(s): watercolour |
| ch9-085 | 33 | 7b | OK | bestehen | to consist | bestehen (aus + D.), er besteht, bestand, hat bestanden |  |
| ch9-086 | 33 | 7b | OK | bewegen | to move | bewegen (Die Musik bewegt mich, sie macht mich traurig.) |  |
| ch9-087 | 33 | 7b | WARN | brasilianisch | Brasilian | brasilianisch | WARN english_spelling: unknown English word(s): brasilian |
| ch9-088 | 33 | 7b | OK | erarbeiten | to develop | erarbeiten |  |
| ch9-089 | 33 | 7b | OK | künstlerisch | artistic | künstlerisch |  |
| ch9-090 | 33 | 7b | WARN | die Ölfarbe — die Ölfarben | oil colour | die ölfarbe, -n | WARN english_spelling: unknown English word(s): colour |
| ch9-091 | 33 | 7b | OK | die Palette — die Paletten | palette | die Palette, -n |  |
| ch9-092 | 33 | 7b | OK | der Schwerpunkt — die Schwerpunkte | focus | der Schwerpunkt, -e |  |
| ch9-093 | 33 | 7b | OK | der Theatermacher — die Theatermacher | theatre maker (m) | der Theatermacher, - |  |
| ch9-094 | 33 | 7b | OK | die Theatermacherin — die Theatermacherinnen | theatre maker (f) | die Theatermacherin, -nen |  |
| ch9-095 | 34 | 7b | WARN | umsetzen | to realize | um/setzen | WARN auto_corrected: 'um/setzen' -> 'umsetzen' (checked with Wiktionary) |
| ch9-096 | 34 | 7b | WARN | das Upcycling | upcycling | das Upcycling (Sg.) | WARN english_spelling: unknown English word(s): upcycling |
| ch9-097 | 34 | 7b | OK | die Vase — die Vasen | vase | die Vase, -n |  |
| ch9-098 | 34 | 7c | OK | die Adjektivendung — die Adjektivendungen | end of an adjective | die Adjektivendung, -en |  |
| ch9-099 | 34 | 7c | OK | die Eigenschaft — die Eigenschaften | characteristic | die Eigenschaft, -en |  |
| ch9-100 | 34 | 7c | OK | das Lernplakat — die Lernplakate | revision poster | das Lernplakat, -e |  |
| ch9-101 | 34 | 7c | OK | nominal | nominal | nominal |  |
| ch9-102 | 34 | 7d | ERROR | der/die Teilnehmende — die Teilnehmenden | participant | der/die Teilnehmende, -n | ERROR article_mismatch: article 'der/die' but Wiktionary says das |
| ch9-103 | 34 | 8a | OK | dankbar | thankful | dankbar |  |
| ch9-104 | 34 | 8a | OK | der Farbstift — die Farbstifte | crayon | der Farbstift, -e |  |
| ch9-105 | 34 | 8a | OK | die Frisur — die Frisuren | hair style | die Frisur, -en |  |
| ch9-106 | 34 | 8a | OK | der Kuli — die Kulis | pen | der Kuli, -s |  |
| ch9-107 | 34 | 8a | WARN | armliegen | to lie around | rumlliegen, er liegt rum, lag rum, hat/ist rumgelegen | WARN auto_corrected: 'rumlliegen' -> 'armliegen' (checked with Wiktionary) |
| ch9-108 | 34 | 8c | OK | chaotisch | chaotic | chaotisch |  |
| ch9-109 | 34 | 8c | OK | das Theaterstück — die Theaterstücke | theatre play | das Theaterstück, -e |  |
| ch9-110 | 34 | 8d | OK | erfinden | to invent | erfinden, er erfindet, erfand, hat erfunden |  |
| ch9-111 | 34 | 8d | OK | die Motto-Party — die Motto-Partys | theme party | die Motto-Party, -s |  |
| ch9-112 | 34 | 8d | OK | das Sportteam — die Sportteams | sports team | das Sportteam, -s |  |
| ch9-113 | 34 | 8d | OK | veranstalten | to organize | veranstalten |  |
| ch9-114 | 34 | 10a | OK | ersetzen | to replace | ersetzen |  |
| ch9-115 | 34 | 10a | OK | improvisieren | to improvise | improvisieren |  |
| ch9-116 | 34 | 10a | OK | das Referat — die Referate | presentation | das Referat, -e |  |
| ch9-117 | 34 | 10b | OK | der Gründer — die Gründer | founder (m) | der Gründer, - |  |
| ch9-118 | 34 | 10b | OK | die Gründerin — die Gründerinnen | founder (f) | die Gründerin, -nen |  |
| ch9-119 | 34 | 10b | WARN | das Impro-Theater — die Impro-Theater | improv theatre | das Impro-Theater, - | WARN english_spelling: unknown English word(s): improv |
| ch9-120 | 34 | 10d | OK | die Biene — die Bienen | bee | die Biene, -n |  |
| ch9-121 | 34 | 10d | OK | die Briefmarke — die Briefmarken | postage stamp | die Briefmarke, -n |  |
| ch9-122 | 34 | 10d | OK | die Couch — die Couchs | couch | die Couch, -s |  |
| ch9-123 | 34 | 10d | OK | der Detektiv — die Detektive | detective (m) | der Detektiv, -e |  |
| ch9-124 | 34 | 10d | OK | die Detektivin — die Detektivinnen | detective (f) | die Detektivin, -nen |  |
| ch9-125 | 34 | 10d | OK | der Dieb — die Diebe | thief | der Dieb, -e |  |
| ch9-126 | 34 | 10d | OK | die Rose — die Rosen | rose | die Rose, -n |  |
| ch9-127 | 34 | 10d | OK | der Spiegel — die Spiegel | mirror | der Spiegel, |  |
| ch9-128 | 34 | 10d | OK | die Stufe — die Stufen | step | die stufe, -n |  |
| ch9-129 | 34 | 10d | OK | der Topf — die Töpfe | pot | der Topf, "e |  |
| ch9-130 | 34 | 10d | OK | das Treppenhaus — die Treppenhäuser | stairwell | das Treppenhaus, "-er |  |
| ch9-131 | 34 | 10d | WARN | die Umleitung — die Umleitungen | diversion | die Ymleitung, -en | WARN auto_corrected: 'Ymleitung' -> 'Umleitung' (checked with Wiktionary) |
| ch9-132 | 34 | 10f | OK | die Vorstellung — die Vorstellungen | performance | die Vorstellung, -en (Das Theater gibt náchste Woche drei Vorstellungen. |  |
| ch9-133 | 34 | 11a | OK | der Autoverkauf — die Autoverkäufe | car sale | der Autoverkauf, "e |  |
| ch9-134 | 34 | 11a | OK | der Backofen — die Backöfen | oven | der Backofen, "- |  |
| ch9-135 | 34 | 11a | OK | der Kunstsammler — die Kunstsammler | art collector (m) | der Kunstsammler, - |  |
| ch9-136 | 34 | 11a | OK | die Kunstsammlerin — die Kunstsammlerinnen | art collector (f) | die Kunstsammlerin, -nen |  |
| ch9-137 | 34 | 11a | OK | das Missverständnis — die Missverständnisse | misunderstanding | das Missverständnis, -se |  |
| ch9-138 | 34 | 12b | OK | einzig | only | einzig |  |
| ch9-139 | 34 | 12b | OK | heimlich her sein | secret the choir.) | heimlich her sein(Es ist lange her, dass ich im Chor to be long ago (It is long ago that I sung in gesungen habe.) |  |
| ch9-140 | 34 | 12b | OK | der Meister — die Meister | master (m) | der Meister, - |  |
| ch9-141 | 35 | 12b | OK | die Meisterin — die Meisterinnen | master (f) | die Meisterin, -nen |  |
| ch9-142 | 35 | 12b | OK | die Mode — die Moden | fashion | die Mode, -n (aus der Mode kommen) |  |
| ch9-143 | 35 | 12b | OK | musizieren | to make music | musizieren |  |
| ch9-144 | 35 | 12b | WARN | die Nachbarschaft | neighbourhood | die Nachbarschaft (Sg.) | WARN english_spelling: unknown English word(s): neighbourhood |
| ch9-145 | 35 | 12b | OK | der Neffe — die Neffen | nephew | der Neffe, -n |  |
| ch9-146 | 35 | 12b | OK | schließen | to make (to make friends) | schlieBen, er schlieBt, schloss, hat geschlossen (Freundschaft schlieBen) |  |
| ch9-147 | 35 | 12b | OK | der Schulchor — die Schulchöre | school choir | der Schulchor, "e |  |
| ch9-148 | 35 | 12b | OK | talentiert | talented | talentiert |  |
| ch9-149 | 35 | 12b | OK | die Tradition — die Traditionen | tradition | die Tradition, -en |  |
| ch9-150 | 35 | 12b | OK | traditionell | traditional | traditionell |  |
| ch9-151 | 35 | 12b | OK | das Treffen — die Treffen | meeting | das Treffen, - |  |
| ch9-152 | 35 | 12b | OK | uncool | uncool | uncool |  |
| ch9-153 | 35 | 12b | WARN | das Virus — die Viren | virus | das Virus, Viren | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Viren |
| ch9-154 | 35 | 12b | OK | das Volkslied — die Volkslieder | folk song | das Volkslied, -er |  |
| ch9-155 | 35 | 12b | OK | zeitlos | timeless | zeitlos |  |
| ch9-156 | 35 | 12b | WARN | zusehen | to watch | zulsehen, er sieht zu, sah zu, hat zugesehen | WARN auto_corrected: 'zulsehen' -> 'zusehen' (checked with Wiktionary) |
| ch9-157 | 35 | 13b | WARN | einsperren | to lock sb in | einlsperren | WARN auto_corrected: 'einlsperren' -> 'einsperren' (checked with Wiktionary) |
| ch9-158 | 35 | 13b | OK | entzwei | in two | entzwei |  |
| ch9-159 | 35 | 13b | OK | erschießen | to shoot | erschieBen, er erschieBt, erschoss, hat erschossen |  |
| ch9-160 | 35 | 13b | OK | finster | gloomy | finster |  |
| ch9-161 | 35 | 13b | OK | der Gedanke — die Gedanken | thought | der Gedanke, -n (Mach dir mal keine Gedanken.) |  |
| ch9-162 | 35 | 13b | OK | der Jäger — die Jäger | hunter (m) | der Jäger, - |  |
| ch9-163 | 35 | 13b | WARN | die Jägerin — die Jägerinnen | hunter (f) | die Jágerin, -nen | WARN auto_corrected: 'Jágerin' -> 'Jägerin' (checked with Wiktionary) |
| ch9-164 | 35 | 13b | OK | der Kerker — die Kerker | dungeon | der Kerker, - |  |
| ch9-165 | 35 | 13b | OK | die Mauer — die Mauern | wall | die Mauer, -n |  |
| ch9-166 | 35 | 13b | OK | nächtlich | nightly | nächtlich |  |
| ch9-167 | 35 | 13b | OK | die Schranke — die Schranken | barrier | die Schranke, -n |  |
| ch9-168 | 35 | 13b | OK | vergeblich | forgivable | vergeblich |  |
| ch9-169 | 35 | 13b | WARN | vorbeifliegen | to fly past | vorbeilfliegen, er fliegt vorbei, flog vorbei, ist vorbeigeflogen | WARN auto_corrected: 'vorbeilfliegen' -> 'vorbeifliegen' (checked with Wiktionary) |
| ch9-170 | 35 | 13b | OK | zerreißen | to tear apart | zerreiBen, er zerreiBt, zerriss, hat zerrissen |  |
| ch9-171 | 35 | 13b | WARN | k&k relativieren | to relativise | k&k relativieren | WARN english_spelling: unknown English word(s): relativise |
| ch10-001 | 35 | 1a | OK | die Demokratie — die Demokratien | democracy | die Demokratie, -n |  |
| ch10-002 | 35 | 1a | OK | die Ehrlichkeit | honesty | die Ehrlichkeit (Sg.) |  |
| ch10-003 | 35 | 1a | OK | die Erziehung | upbringing | die Erziehung (Sg.) |  |
| ch10-004 | 35 | 1a | OK | die Fairness | fairness | die Fairness (Sg.) |  |
| ch10-005 | 35 | 1a | OK | die Gerechtigkeit | justice | die Gerechtigkeit (Sg.) |  |
| ch10-006 | 35 | 1a | OK | die Gleichberechtigung | equality | die Gleichberechtigung (Sg.) |  |
| ch10-007 | 35 | 1a | OK | die Hilfsbereitschaft | helpfulness | die Hilfsbereitschaft (Sg.) |  |
| ch10-008 | 35 | 1a | OK | der Respekt | respect | der Respekt (Sg.) |  |
| ch10-009 | 35 | 1a | WARN | der Wert — die Werte | value (Which values are important in a society?) | der Wert, -e Welche Werte sind in einer Gesellschaft wichtig?) | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Werte |
| ch10-010 | 35 | 1a | OK | die Zivilcourage | moral courage | die Zivilcourage (Sg.) |  |
| ch10-011 | 35 | 1c | OK | üß der/die Abgeordnete, -n — die üß der/die Abgeordnete, -nn | MP, congressman (wo) | üB der/die Abgeordnete, -n |  |
| ch10-012 | 36 | 1c | OK | das Amt — die Ämter | office | das Amt, "-er (Sie übernimmt das Amt einer Abgeordneten.) |  |
| ch10-013 | 36 | 1c | OK | die Arbeitsstelle — die Arbeitsstellen | job | die Arbeitsstelle, -n |  |
| ch10-014 | 36 | 1c | OK | die Aufnahme | inclusion | die Aufnahme (Sg.) (die Aufnahme in ein Team) |  |
| ch10-015 | 36 | 1c | OK | das Bedürfnis — die Bedürfnisse | need | das Bedürfnis, -se |  |
| ch10-016 | 36 | 1c | OK | blind | blind | blind |  |
| ch10-017 | 36 | 1c | OK | der/die Blinde — die Blinden | blind person | der/die Blinde, -n |  |
| ch10-018 | 36 | 1c | OK | der Bundeskanzler — die Bundeskanzler | chancellor (m) | der Bundeskanzler, - |  |
| ch10-019 | 36 | 1c | OK | die Bundeskanzlerin — die Bundeskanzlerinnen | chancellor (f) | die Bundeskanzlerin, -nen |  |
| ch10-020 | 36 | 1c | OK | der Bundestag | Bundestag | der Bundestag (Sg.) |  |
| ch10-021 | 36 | 1c | OK | die Flucht | escape | die Flucht (Sg.) |  |
| ch10-022 | 36 | 1c | OK | humorvoll | funny | humorvoll |  |
| ch10-023 | 36 | 1c | OK | die Integration | integration | die Integration (Sg.) |  |
| ch10-024 | 36 | 1c | OK | der Kandidat — die Kandidaten | candidate (m) | der Kandidat, -en |  |
| ch10-025 | 36 | 1c | OK | die Kandidatin — die Kandidatinnen | candidate (f) | die Kandidatin, -nen |  |
| ch10-026 | 36 | 1c | OK | körperlich | physical | körperlich |  |
| ch10-027 | 36 | 1c | OK | der Migrant — die Migranten | migrant (m) | der Migrant, -en |  |
| ch10-028 | 36 | 1c | OK | die Migrantin — die Migrantinnen | migrant (f) | die Migrantin, -nen |  |
| ch10-029 | 36 | 1c | OK | die Minderheit — die Minderheiten | minority | die Minderheit, -en |  |
| ch10-030 | 36 | 1c | OK | der Minister — die Minister | minister (m) | der Minister, - |  |
| ch10-031 | 36 | 1c | OK | die Ministerin — die Ministerinnen | minister (f) | die Ministerin, -nen |  |
| ch10-032 | 36 | 1c | OK | das Recht — die Rechte | law | das Recht, -e |  |
| ch10-033 | 36 | 1c | OK | die Regierung — die Regierungen | government | die Regierung, -en |  |
| ch10-034 | 36 | 1c | OK | verlassen | to leave | verlassen, er verlásst, verließ, hat verlassen |  |
| ch10-035 | 36 | 1c | OK | vollständig | complete | vollständig |  |
| ch10-036 | 36 | 1c | OK | das Vorurteil — die Vorurteile | prejudice | das Vorurteil, -e |  |
| ch10-037 | 36 | 2a | OK | die Meinungsfreiheit | freedom of opinion | die Meinungsfreiheit (Sg.) |  |
| ch10-038 | 36 | 2c | OK | sichern | to secure | sichern |  |
| ch10-039 | 36 | 3b | OK | alarmieren | to alert | alarmieren |  |
| ch10-040 | 36 | 3b | OK | die Arbeitssuche | job search | die Arbeitssuche (Sg.) |  |
| ch10-041 | 36 | 3b | WARN | ausbilden | to train | aus/bilden | WARN auto_corrected: 'aus/bilden' -> 'ausbilden' (checked with Wiktionary) |
| ch10-042 | 36 | 3b | OK | die Ausgabestelle — die Ausgabestellen | issuing office | die Ausgabestelle, -n |  |
| ch10-043 | 36 | 3b | OK | bedürftig | needy | bedürftig |  |
| ch10-044 | 36 | 3b | OK | der Behördengang — die Behördengänge | visit to the authorities | der Behördengang, "e |  |
| ch10-045 | 36 | 3b | OK | die Berufsfeuerwehr — die Berufsfeuerwehren | professional fire brigade | die Berufsfeuerwehr, -en |  |
| ch10-046 | 36 | 3b | OK | bewältigen | to deal with | bewältigen |  |
| ch10-047 | 36 | 3b | OK | das Ding — die Dinge | thing | das Ding, -e (In der Not zu helfen ist mein Ding.) |  |
| ch10-048 | 36 | 3b | OK | ehrenamtlich | voluntary | ehrenamtlich |  |
| ch10-049 | 36 | 3b | OK | erfüllen | to fulfill | erfüllen (eine wichtige Funktion erfüllen) |  |
| ch10-050 | 36 | 3b | OK | die Erste Hilfe | first aid | die Erste Hilfe (Sg.) |  |
| ch10-051 | 36 | 3b | OK | die Feuerwehrleute — die Feuerwehrleute | firefighters | die Feuerwehrleute (Pl.) |  |
| ch10-052 | 36 | 3b | OK | die Funktion — die Funktionen | function | die Funktion, -en (eine wichtige Funktion erfüllen) |  |
| ch10-053 | 36 | 3b | OK | das Hochwasser — die Hochwasser | flood | das Hochwasser, |  |
| ch10-054 | 36 | 3b | OK | die Jugendgruppe — die Jugendgruppen | youth group | die Jugendgruppe, -n |  |
| ch10-055 | 36 | 3b | OK | die Mühe — die Mühen | effort | die Mühe, -n |  |
| ch10-056 | 36 | 3b | OK | die Nachhilfe | tutoring (to tutor) | die Nachhilfe (Sg.) (Nachhilfe geben) |  |
| ch10-057 | 36 | 3b | OK | die Nachtzeit — die Nachtzeiten | nighttime | die Nachtzeit, -en |  |
| ch10-058 | 36 | 3b | OK | die Not — die Nöte | need | die Not,"e |  |
| ch10-059 | 36 | 3b | OK | die Organisation — die Organisationen | organization | die Organisation, -en |  |
| ch10-060 | 37 | 3b | OK | der Pate — die Paten | godfather | der Pate, -n |  |
| ch10-061 | 37 | 3b | WARN | die Patenschaft | sponsorship, godparenthood | die Patenschaft (Sg.) | WARN english_spelling: unknown English word(s): godparenthood |
| ch10-062 | 37 | 3b | OK | die Patin — die Patinnen | godmother | die Patin, -nen |  |
| ch10-063 | 37 | 3b | OK | qualitativ | qualitative | qualitativ |  |
| ch10-064 | 37 | 3b | OK | spenden | to donate | spenden |  |
| ch10-065 | 37 | 3b | OK | übrig | remaining | übrig |  |
| ch10-066 | 37 | 3b | OK | das Vereinsmitglied — die Vereinsmitglieder | club member | das Vereinsmitglied, -er |  |
| ch10-067 | 37 | 3b | OK | werden | will | werden, er wird, wurde, ist worden (Er wird in Erster Hilfe ausgebildet.) |  |
| ch10-068 | 37 | 3c | OK | die Auswahl | selection | die Auswahl (Sg.) (eine Auswahl treffen) |  |
| ch10-069 | 37 | 3c UB | OK | die Apfelsine — die Apfelsinen | orange | die Apfelsine, -n |  |
| ch10-070 | 37 | 3c UB | OK | die Aprikose — die Aprikosen | apricot | die Aprikose, -n |  |
| ch10-071 | 37 | 3c UB | OK | das Croissant — die Croissants | croissant | das Croissant, -s |  |
| ch10-072 | 37 | 3c UB | OK | das Gewürz — die Gewürze | spice | das Gewürz, -e |  |
| ch10-073 | 37 | 3c UB | OK | das Hackfleisch | ground meat | das Hackfleisch (Sg.) |  |
| ch10-074 | 37 | 3c UB | OK | das Hörnchen — die Hörnchen | croissant | das Hörnchen, - |  |
| ch10-075 | 37 | 3c UB | OK | das Hühnchen — die Hühnchen | chicken | das Hühnchen, - |  |
| ch10-076 | 37 | 3c UB | OK | der/das Ketchup — die Ketchups | ketchup | der/das Ketchup, -s |  |
| ch10-077 | 37 | 3c UB | OK | die Konfitüre — die Konfitüren | jam | die Konfitüre, -n |  |
| ch10-078 | 37 | 3c UB | OK | die Margarine — die Margarinen | margarine | die Margarine, -n |  |
| ch10-079 | 37 | 3c UB | OK | das Milchprodukt — die Milchprodukte | milk product | das Milchprodukt, -e |  |
| ch10-080 | 37 | 3c UB | OK | die Orange — die Orangen | orange | die Orange, -n |  |
| ch10-081 | 37 | 3c UB | OK | die Pflaume — die Pflaumen | plum | die Pflaume, -n |  |
| ch10-082 | 37 | 3c UB | WARN | der Pudding | pudding | der Pudding, -e/-s | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it) |
| ch10-083 | 37 | 3c UB | OK | der Quark | curd | der Quark (Sg.) |  |
| ch10-084 | 37 | 3c UB | OK | die Schlagsahne | whipped cream | die Schlagsahne (Sg.) |  |
| ch10-085 | 37 | 3c UB | OK | die Soße — die Soßen | sauce | die SoBe, -n |  |
| ch10-086 | 37 | 3c UB | OK | die Vollmilch | whole milk | die Vollmilch (Sg.) |  |
| ch10-087 | 37 | 3c UB | OK | würzen | to season | würzen |  |
| ch10-088 | 37 | 3c UB | ERROR | die Zwetschge/Zwetschke — die Zwetschge/Zwetschken | plum | die Zwetschge/Zwetschke, -n | ERROR unknown_word: 'Zwetschge/Zwetschke' not in Wiktionary |
| ch10-089 | 37 | 4a | OK | das Aktiv | active | das Aktiv (Sg.) |  |
| ch10-090 | 37 | 4a | OK | das Passiv | passive | das Passiv (Sg.) |  |
| ch10-091 | 37 | 4a | OK | der Passivsatz — die Passivsätze | passive sentence | der Passivsatz, "e |  |
| ch10-092 | 37 | 4b | OK | die Passivform — die Passivformen | passive form | die Passivform, -en |  |
| ch10-093 | 37 | 4c | OK | die Anfrage — die Anfragen | enquiry | die Anfrage, -n |  |
| ch10-094 | 37 | 5a | OK | bundesweit | nationwide | bundesweit |  |
| ch10-095 | 37 | 5a | OK | verbreiten | to spread | verbreiten |  |
| ch10-096 | 37 | 7a | OK | abmelden | to sign off | abmelden |  |
| ch10-097 | 37 | 7a | OK | das Einwohnermeldeamt — die Einwohnermeldeämter | registration office | das Einwohnermeldeamt, "-er |  |
| ch10-098 | 37 | 7a | OK | die Stadtinformation — die Stadtinformationen | city information | die Stadtinformation, -en |  |
| ch10-099 | 37 | 7a | OK | verantwortlich | responsible | verantwortlich (für + A.) |  |
| ch10-100 | 37 | 7b | OK | abstimmen | to vote | abstimmen |  |
| ch10-101 | 37 | 7b | WARN | abziehen | to be deducted | ablziehen, er zieht ab, zog ab, hat abgezogen | WARN auto_corrected: 'ablziehen' -> 'abziehen' (checked with Wiktionary) |
| ch10-102 | 37 | 7b | OK | das Arbeitsamt — die Arbeitsämter | job center | das Arbeitsamt, "-er |  |
| ch10-103 | 37 | 7b | OK | das Architekturbüro — die Architekturbüros | architecture firm | das Architekturbüro, -s |  |
| ch10-104 | 37 | 7b | OK | die Brezel — die Brezeln | pretzel | die Brezel, -n |  |
| ch10-105 | 37 | 7b | OK | die Bürgerversammlung — die Bürgerversammlungen | town meeting | die Bürgerversammlung, -en |  |
| ch10-106 | 37 | 7b | OK | durch-führen einlnehmen | to conduct | durch-führen einlnehmen, er nimmt ein, nahm ein, hat to take in (to take in money) eingenommen (Geld einnehmen) |  |
| ch10-107 | 37 | 7b | OK | das Elterncafé — die Elterncafés | parent coffee shop | das Elterncafé, -s |  |
| ch10-108 | 37 | 7b | OK | elternfrei | parent-free | elternfrei |  |
| ch10-109 | 38 | 7b | OK | entsorgen | to dispose of | entsorgen |  |
| ch10-110 | 38 | 7b | OK | erscheinen | to be released | erscheinen, er erscheint, erschien, ist erschienen (Die Zeitschrift erscheint einmal im Monat.) |  |
| ch10-111 | 38 | 7b | OK | finanzieren | to finance | finanzieren |  |
| ch10-112 | 38 | 7b | WARN | herausfinden | to find out | herauslfinden, er findet heraus, fand heraus, hat herausgefunden | WARN auto_corrected: 'herauslfinden' -> 'herausfinden' (checked with Wiktionary) |
| ch10-113 | 38 | 7b | OK | die Online-Redaktion — die Online-Redaktionen | online editors | die Online-Redaktion, -en |  |
| ch10-114 | 38 | 7b | OK | die Semmel — die Semmeln | bread roll (South German) | die Semmel, -n (Süddeutsch) |  |
| ch10-115 | 38 | 7b | OK | der Sitz — die Sitze | seat | der sitz, -e (Die politische Vertretung hat ihren Sitz im Rathaus.) |  |
| ch10-116 | 38 | 7b | OK | das Sommerprojekt — die Sommerprojekte | summer project | das Sommerprojekt, -e |  |
| ch10-117 | 38 | 7b | OK | die Spielstadt — die Spielstädte | play city | die Spielstadt, "e |  |
| ch10-118 | 38 | 7b | OK | die Vertretung — die Vertretungen | delegation | die Vertretung, -en |  |
| ch10-119 | 38 | 7b | OK | das Vorhaben — die Vorhaben | scheme | das Vorhaben, - |  |
| ch10-120 | 38 | 7b | OK | der Weblog — die Weblogs | web blog | der Weblog, -s |  |
| ch10-121 | 38 | 7b | OK | die Zone — die Zonen | zone | die Zone, -n |  |
| ch10-122 | 38 | 7b | WARN | zulassen | to be admitted | zullassen, er lásst zu, ließ zu, hat zugelassen | WARN auto_corrected: 'zullassen' -> 'zulassen' (checked with Wiktionary) |
| ch10-123 | 38 | 7b | OK | das Zusammenleben | communal life | das Zusammenleben (Sg.) |  |
| ch10-124 | 38 | 7b | WARN | zuverlässig | reliable | zuverlássig | WARN auto_corrected: 'zuverlássig' -> 'zuverlässig' (checked with Wiktionary) |
| ch10-125 | 38 | 7c | ERROR | mitlorganisieren | to help organise | mitlorganisieren | ERROR unknown_word: 'mitlorganisieren' not in Wiktionary; WARN english_spelling: unknown English word(s): organise |
| ch10-126 | 38 | 7c | WARN | der Organisator — die Organisatoren | organiser (m) | der Organisator, Organisatoren | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Organisatoren; WARN english_spelling: unknown English word(s): organiser |
| ch10-127 | 38 | 7c | WARN | die Organisatorin — die Organisatorinnen | organiser (f) | die Organisatorin, -nen | WARN english_spelling: unknown English word(s): organiser |
| ch10-128 | 38 | 7d | OK | gell | right | gell |  |
| ch10-129 | 38 | 7d | WARN | hingehen | to go | hinlgehen, er geht hin, ging hin, ist hingegangen | WARN auto_corrected: 'hinlgehen' -> 'hingehen' (checked with Wiktionary) |
| ch10-130 | 38 | 7d | OK | die Partikel — die Partikel | particle | die Partikel, - |  |
| ch10-131 | 38 | 8b | OK | der Anspruch — die Ansprüche | entitlement | der Anspruch, "-e (Die Angestellten haben Anspruch auf 30 Tage Urlaub.) |  |
| ch10-132 | 38 | 8b | WARN | ab-räumen | to clear | ab-ráumen | WARN auto_corrected: 'ab-ráumen' -> 'ab-räumen' (checked with Wiktionary) |
| ch10-133 | 38 | 8b | OK | die Lieferung — die Lieferungen | shipment | die Lieferung, -en |  |
| ch10-134 | 38 | 8b | OK | die Straßenlampe — die Straßenlampen | street lamp | die StraBenlampe, -n |  |
| ch10-135 | 38 | 9a | OK | der Kontrastakzent — die Kontrastakzente | contrast emphasis | der Kontrastakzent, -e |  |
| ch10-136 | 38 | 9a | OK | das Kontrastwort — die Kontrastwörter | contrast word | das Kontrastwort, "-er |  |
| ch10-137 | 38 | 10a | OK | die EU | EU | die EU (Sg.) |  |
| ch10-138 | 38 | 10a | OK | die Union — die Unionen | union | die Union, -en (die Europáische Union) |  |
| ch10-139 | 38 | 10b | OK | der Ausstieg — die Ausstiege | exit | der Ausstieg, -e |  |
| ch10-140 | 38 | 10b | OK | befürchten | to fear | befürchten |  |
| ch10-141 | 38 | 10b | WARN | beitreten | to join | beiltreten, er tritt bei, trat bei, ist beigetreten | WARN auto_corrected: 'beiltreten' -> 'beitreten' (checked with Wiktionary) |
| ch10-142 | 38 | 10b | OK | die Besonderheit — die Besonderheiten | feature | die Besonderheit, -en |  |
| ch10-143 | 38 | 10b | OK | die Dienstleistung — die Dienstleistungen | service | die Dienstleistung, -en |  |
| ch10-144 | 38 | 10b | OK | eine Entscheidung treffen | to make a decision | eine Entscheidung treffen |  |
| ch10-145 | 38 | 10b | OK | endgültig | final | endgültig |  |
| ch10-146 | 38 | 10b | OK | die Europäische Union | European Union (= EU) | die Europäische Union (Sg.) (= EU) |  |
| ch10-147 | 38 | 10b | OK | führen | to wage (to wage war) | führen (Krieg fúhren) |  |
| ch10-148 | 38 | 10b | OK | die Gemeinschaft — die Gemeinschaften | community | die Gemeinschaft, -en (die Europäische Gemeinschaft) |  |
| ch10-149 | 38 | 10b | OK | die Grenzkontrolle — die Grenzkontrollen | border control | die Grenzkontrolle, -n |  |
| ch10-150 | 38 | 10b | OK | Großbritannien | Great Britain | GroBbritannien |  |
| ch10-151 | 38 | 10b | OK | im Lauf | over the course | im Lauf (+ G.) (Im Lauf der Zeit hat sich viel geándert.) |  |
| ch10-152 | 39 | 10b | OK | der Krieg — die Kriege | war (to wage war) | der Krieg, -e (Krieg führen) |  |
| ch10-153 | 39 | 10b | OK | national | national | national |  |
| ch10-154 | 39 | 10b | OK | der Normalfall — die Normalfälle | rule | der Normalfall, "-e |  |
| ch10-155 | 39 | 10b | WARN | der Skeptiker — die Skeptiker | sceptic (m) | der Skeptiker, - | WARN english_spelling: unknown English word(s): sceptic |
| ch10-156 | 39 | 10b | WARN | die Skeptikerin — die Skeptikerinnen | sceptic (f) | die Skeptikerin, -nen | WARN english_spelling: unknown English word(s): sceptic |
| ch10-157 | 39 | 10b | OK | die Vorschrift — die Vorschriften | regulation | die Vorschrift, -en |  |
| ch10-158 | 39 | 10b | OK | der Weltkrieg — die Weltkriege | world war | der Weltkrieg, -e |  |
| ch10-159 | 39 | 10b | OK | wirtschaftlich | economic | wirtschaftlich |  |
| ch10-160 | 39 | 10b | WARN | zunächst | initially | zunáchst | WARN auto_corrected: 'zunáchst' -> 'zunächst' (checked with Wiktionary) |
| ch10-161 | 39 | 11a | OK | die Atomkraft | atomic power | die Atomkraft (Sg.) |  |
| ch10-162 | 39 | 11a | OK | Belgien | Belgium | Belgien |  |
| ch10-163 | 39 | 11a | OK | die Kriegswaffe — die Kriegswaffen | weapon of war | die Kriegswaffe, -n |  |
| ch10-164 | 39 | 11a | OK | Luxemburg | Luxembourg | Luxemburg |  |
| ch10-165 | 39 | 11a | OK | der Mitgliedsstaat — die Mitgliedsstaaten | member state | der Mitgliedsstaat, -en |  |
| ch10-166 | 39 | 11a | OK | die Niederlande — die Niederlande | Netherlands | die Niederlande (Pl.) |  |
| ch10-167 | 39 | 11a | OK | regeln | to regulate | regeln |  |
| ch10-168 | 39 | 11a | OK | schließen | to conclude | schlieBen, er schlieBt, schloss, hat geschlossen (einen Vertrag schlieBen) |  |
| ch10-169 | 39 | 11a | WARN | die Solidarität | solidarity | die Solidaritát (Sg.) | WARN auto_corrected: 'Solidaritát' -> 'Solidarität' (checked with Wiktionary) |
| ch10-170 | 39 | 11a | OK | die Toleranz | tolerance | die Toleranz (Sg.) |  |
| ch10-171 | 39 | 11a | OK | der Umgang | dealing | der Umgang (Sg.) |  |
| ch10-172 | 39 | 11a | OK | unterzeichnen | to sign | unterzeichnen |  |
| ch10-173 | 39 | 11a | OK | die Wirtschaftsbeziehung — die Wirtschaftsbeziehungen | economic relationship | die Wirtschaftsbeziehung, -en |  |
| ch10-174 | 39 | 11a | OK | die Würde | dignity | die Würde (Sg.) |  |
| ch10-175 | 39 | 11b | WARN | der Faden — die Fäden | in etwa: the train | der Faden, "- (den Faden verlieren) | WARN english_spelling: unknown English word(s): etwa |
| ch10-176 | 39 | 11b | WARN | der Humor | humour | der Humor (Sg.) (Nimm die Situation mit Humor und mach einfach weiter.) | WARN english_spelling: unknown English word(s): humour |
| ch10-177 | 39 | 11b | OK | ins Stocken kommen | to falter | ins Stocken kommen |  |
| ch10-178 | 39 | 11b | OK | der Vortrag — die Vorträge | lecture | der Vortrag,"e |  |
| ch10-179 | 39 | 12b | OK | abschließend | in conclusion | abschlieBend |  |
| ch11-001 | 39 | 1b | WARN | das Bürogebäude — die Bürogebäude | office building | das Büragebáude, - | WARN auto_corrected: 'Büragebáude' -> 'Bürogebäude' (checked with Wiktionary) |
| ch11-002 | 39 | 1b | OK | der Dreck | dirt | der Dreck (Sg.) |  |
| ch11-003 | 39 | 1b | OK | der Fußgänger — die Fußgänger | pedestrian (m) | der FuBgänger, - |  |
| ch11-004 | 39 | 1b | OK | die Fußgängerin — die Fußgängerinnen | pedestrian (f) | die FuBgängerin, -nen |  |
| ch11-005 | 39 | 1b | OK | das Schaufenster — die Schaufenster | shop window | das Schaufenster, - |  |
| ch11-006 | 39 | 1b | WARN | der Schmutz | u!p | der Schmutz (Sg.) | WARN ocr_low_confidence: OCR confidence 0.72 < 0.85 |
| ch11-007 | 39 | 1b | WARN | das Tempo | speed | das Tempo, Tempi | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it) |
| ch11-008 | 39 | 2a | OK | das Freizeitangebot — die Freizeitangebote | recreational activity, leisure activity | das Freizeitangebot, -e |  |
| ch11-009 | 39 | 4a | OK | der Stadtmensch — die Stadtmenschen | townie | der Stadtmensch, -en |  |
| ch11-010 | 39 | 4b | WARN | angehen | to concern | anlgehen, er geht an, ging an, ist angegangen (Was ich mache, das geht keinen was an.) | WARN auto_corrected: 'anlgehen' -> 'angehen' (checked with Wiktionary) |
| ch11-011 | 39 | 4b | OK | anscheinend | apparent | anscheinend |  |
| ch11-012 | 39 | 4b | OK | der Dialekt — die Dialekte | dialect | der Dialekt, -e |  |
| ch11-013 | 39 | 4b | OK | eindeutig | clear | eindeutig |  |
| ch11-014 | 39 | 4b | OK | der Forumsname — die Forumsnamen | forum name | der Forumsname, -n |  |
| ch11-015 | 39 | 4b | OK | irgendein, irgendeine, irgendwelche | some | irgendein, irgendeine, irgendwelche |  |
| ch11-016 | 40 | 4b | OK | das Kulturfest — die Kulturfeste | cultural festival | das Kulturfest, -e |  |
| ch11-017 | 40 | 4b | OK | der Landmensch — die Landmenschen | country person | der Landmensch, -en |  |
| ch11-018 | 40 | 4c | OK | entsprechend | equivalent | entsprechend |  |
| ch11-019 | 40 | 4d | OK | die Sportsachen — die Sportsachen | sport gear | die Sportsachen (Pl.) |  |
| ch11-020 | 40 | 5 | OK | irgendeins | some | irgendeins |  |
| ch11-021 | 40 | 5 | OK | die Singularform — die Singularformen | singular form | die Singularform, -en |  |
| ch11-022 | 40 | 6a | OK | erwachen | to awaken | erwachen |  |
| ch11-023 | 40 | 6b | OK | die Backstube — die Backstuben | bakery | die Backstube, -n |  |
| ch11-024 | 40 | 6b | OK | der Bauhof — die Bauhöfe | construction yard | der Bauhof, "-e |  |
| ch11-025 | 40 | 6b | WARN | der Dienst — die Dienste | duty | der Dienst, -e | WARN ocr_low_confidence: OCR confidence 0.66 < 0.85; WARN english_from_alt: used second OCR model: 'Anp' -> 'duty' |
| ch11-026 | 40 | 6b | WARN | einliefern | admitted | einlliefern | WARN auto_corrected: 'einlliefern' -> 'einliefern' (checked with Wiktionary) |
| ch11-027 | 40 | 6b | OK | die Frühschicht — die Frühschichten | morning shift | die Frühschicht, -en |  |
| ch11-028 | 40 | 6b | OK | das Garagentor — die Garagentore | garage door | das Garagentor, -e |  |
| ch11-029 | 40 | 6b | WARN | herunterfahren | to shut (down) | herunterlfahren, er fährt herunter, fuhr herunter, ist heruntergefahren | WARN auto_corrected: 'herunterlfahren' -> 'herunterfahren' (checked with Wiktionary) |
| ch11-030 | 40 | 6b | OK | hindern hineinlgehen | to hinder | hindern (an + D.) hineinlgehen, er geht hinein, ging hinein, to enter ist hineingegangen |  |
| ch11-031 | 40 | 6b | OK | konzentriert | concentrated | konzentriert |  |
| ch11-032 | 40 | 6b | OK | der Korb — die Körbe | basket | der Korb, "-e |  |
| ch11-033 | 40 | 6b | OK | laden | to load | laden, er lädt, lud, hat geladen (Die Báckerin ládt Körbe mit Brot ins Auto.) |  |
| ch11-034 | 40 | 6b | OK | der Magazinbericht — die Magazinberichte | magazine report | der Magazinbericht, -e |  |
| ch11-035 | 40 | 6b | OK | der/die Obdachlose — die Obdachlosen | homeless person | der/die Obdachlose, -n |  |
| ch11-036 | 40 | 6b | OK | das Reinigungsfahrzeug — die Reinigungsfahrzeuge | street cleaning vehicle | das Reinigungsfahrzeug, -e |  |
| ch11-037 | 40 | 6b | OK | die Schicht — die Schichten | shift | die Schicht, -en |  |
| ch11-038 | 40 | 6b | OK | schwer | severe | schwer (Auf der Autobahn gab es einen schweren Unfall.) |  |
| ch11-039 | 40 | 6b | OK | städtisch | urban | städtisch |  |
| ch11-040 | 40 | 6b | WARN | die Übergabe — die Übergaben | handover | die bergabe, -n | WARN auto_corrected: 'Bergabe' -> 'Übergabe' (checked with Wiktionary) |
| ch11-041 | 40 | 6b | OK | unruhig | restless, turbulent | unruhig |  |
| ch11-042 | 40 | 6b | OK | der Weg — die Wege | way | der Weg, -e (Es ist schon spät. Wir sollten uns auf den Weg machen.) |  |
| ch11-043 | 40 | 6c | OK | der Nachtdienst — die Nachtdienste | night shift | der Nachtdienst, -e |  |
| ch11-044 | 40 | 6d | OK | der Sozialarbeiter — die Sozialarbeiter | social worker (m) | der Sozialarbeiter, - |  |
| ch11-045 | 40 | 6d | OK | die Sozialarbeiterin — die Sozialarbeiterinnen | social worker (f) | die Sozialarbeiterin, -nen |  |
| ch11-046 | 40 | 7 | OK | um ... herum | around | um ... herum (+ A.) |  |
| ch11-047 | 40 | 8b | WARN | abhängen | to be dependent on | ablhängen (von + D.), er hängt ab, hing ab, hat abgehangen | WARN auto_corrected: 'ablhängen' -> 'abhängen' (checked with Wiktionary) |
| ch11-048 | 40 | 8b | OK | die Arbeitslosigkeit | unemployment | die Arbeitslosigkeit (Sg.) |  |
| ch11-049 | 40 | 8b | OK | berücksichtigen | to consider | berücksichtigen |  |
| ch11-050 | 40 | 8b | OK | betreffen | to concern | betreffen, er betrifft, betraf, hat betroffen |  |
| ch11-051 | 40 | 8b | WARN | die Diversität | diversity | die Diversitát (Sg.) | WARN auto_corrected: 'Diversitát' -> 'Diversität' (checked with Wiktionary) |
| ch11-052 | 40 | 8b | OK | die Elternzeit | parental leave | die Elternzeit (Sg.) |  |
| ch11-053 | 40 | 8b | OK | die Fachleute — die Fachleute | specialists | die Fachleute (Pl.) |  |
| ch11-054 | 40 | 8b | WARN | festlegen | to determine | festllegen | WARN auto_corrected: 'festllegen' -> 'festlegen' (checked with Wiktionary) |
| ch11-055 | 40 | 8b | OK | die Gender-Gerechtigkeit | gender equality, gender equity | die Gender-Gerechtigkeit (Sg.) |  |
| ch11-056 | 40 | 8b | OK | gesellschaftlich | social | gesellschaftlich |  |
| ch11-057 | 40 | 8b | OK | gesetzlich | statutory | gesetzlich |  |
| ch11-058 | 40 | 8b | OK | das Gesundheitssystem — die Gesundheitssysteme | healthcare system | das Gesundheitssystem, -e |  |
| ch11-059 | 41 | 8b | OK | die Hochschule — die Hochschulen | institution of higher education | die Hochschule, -n |  |
| ch11-060 | 41 | 8b | OK | die Intensität — die Intensitäten | intensity | die Intensität, -en |  |
| ch11-061 | 41 | 8b | OK | jeweilig | respective | jeweilig |  |
| ch11-062 | 41 | 8b | OK | die Kinderbetreuung | childcare | die Kinderbetreuung (Sg.) |  |
| ch11-063 | 41 | 8b | OK | rechtlich | legal | rechtlich |  |
| ch11-064 | 41 | 8b | OK | sowie | as well as | sowie |  |
| ch11-065 | 41 | 8b | OK | der Vordergrund | foreground | der Vordergrund (Sg.) (im Vordergrund stehen) |  |
| ch11-066 | 41 | 8b | OK | vorgeschrieben sein | to be mandatory | vorgeschrieben sein |  |
| ch11-067 | 41 | 8b | OK | die Work-Life-Balance | work-life-balance | die Work-Life-Balance (Sg.) |  |
| ch11-068 | 41 | 8b | OK | der Zugang — die Zugänge | access | der Zugang,"-e |  |
| ch11-069 | 41 | 8d | OK | der Radiobericht — die Radioberichte | radio report | der Radiobericht, -e |  |
| ch11-070 | 41 | 8d | OK | p6 das Ranking, -s | ranking | p6 das Ranking, -s |  |
| ch11-071 | 41 | 8d | OK | werten | to assess | werten |  |
| ch11-072 | 41 | 9c | OK | fortsetzen | to continue | fortsetzen |  |
| ch11-073 | 41 | 10 | WARN | ausreden | to finish speaking | auslreden (jemanden ausreden lassen) | WARN auto_corrected: 'auslreden' -> 'ausreden' (checked with Wiktionary) |
| ch11-074 | 41 | 10 | OK | außer Acht lassen | to disregard | auBer Acht lassen |  |
| ch11-075 | 41 | 10 | OK | das Budget — die Budgets | budget | das Budget, -s |  |
| ch11-076 | 41 | 10 | WARN | die Diskussion — die Diskussionen | discussion | die Diskussion, -en einlgehen (auf + D.), er geht ein, ging ein, to react to (to react to a point of view) ist eingegangen (auf einen Standpunkt eingehen) | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Diskussionen |
| ch11-077 | 41 | 10 | OK | die Kita — die Kitas | kindergarten | die Kita, -s |  |
| ch11-078 | 41 | 10 | WARN | die Open-Air-Arena — die Arenen | open air arena | die Open-Air-Arena, -Arenen | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it); WARN plural_filled: plural missing in OCR, filled from Wiktionary: die Arenen |
| ch11-079 | 41 | 10 | OK | der Rand — die Ränder | edge | der Rand, "er |  |
| ch11-080 | 41 | 10 | OK | recht geben | to agree | recht geben |  |
| ch11-081 | 41 | 10 | OK | die Renovierung — die Renovierungen | renovation | die Renovierung, -en |  |
| ch11-082 | 41 | 10 | WARN | die Sporthalle — die Sporthallen | gym (nasium) | die Sporthalle, -n | WARN english_spelling: unknown English word(s): nasium |
| ch11-083 | 41 | 10 | OK | der Stadtrat — die Stadträte | city council member (m) | der Stadtrat, "-e (Er ist Stadtrat für Verkehr.) |  |
| ch11-084 | 41 | 10 | ERROR | die Stadtrátin — die Stadtrátinnen | city council member (f) | die Stadtrátin, -nen | ERROR unknown_word: 'Stadtrátin' not in Wiktionary |
| ch11-085 | 41 | 10 | OK | der Umbau — die Umbauten | renovation | der Umbau, -ten |  |
| ch11-086 | 41 | 10 | OK | unterbrechen | to interrupt | unterbrechen, er unterbricht, unterbrach, hat unterbrochen |  |
| ch11-087 | 41 | 10 | OK | vermitteln | to mediate | vermitteln (Die Diskussion ist sehr emotional. Der Moderator sollte vermitteln.) |  |
| ch11-088 | 41 | 10 | OK | der Wohnbau | housing construction | der Wohnbau (Sg.) |  |
| ch11-089 | 41 | 12b | WARN | abbiegen | to turn | ablbiegen, er biegt ab, bog ab, ist abgebogen | WARN auto_corrected: 'ablbiegen' -> 'abbiegen' (checked with Wiktionary) |
| ch11-090 | 41 | 12b | OK | die Autowerkstatt — die Autowerkstätten | garage | die Autowerkstatt, "-en |  |
| ch11-091 | 41 | 12b | OK | das Billett — die Billetts | ticket (Swiss German) | das Billett, -s (Schweizerdeutsch) |  |
| ch11-092 | 41 | 12b | OK | die Bootstour — die Bootstouren | boat trip | die Bootstour, -en |  |
| ch11-093 | 41 | 12b | OK | der/die Einheimische — die Einheimischen | native | der/die Einheimische, -n |  |
| ch11-094 | 41 | 12b | OK | der Fahrschein — die Fahrscheine | ticket | der Fahrschein, -e |  |
| ch11-095 | 41 | 12b | WARN | die Fassade — die Fassaden | facaded | die Fassade, -n | WARN english_spelling: unknown English word(s): facaded |
| ch11-096 | 41 | 12b | WARN | der Favorit — die Favoriten | favourite (m) | der Favorit, -en | WARN english_spelling: unknown English word(s): favourite |
| ch11-097 | 41 | 12b | WARN | die Favoritin — die Favoritinnen | favourite (f) | die Favoritin, -nen | WARN english_spelling: unknown English word(s): favourite |
| ch11-098 | 41 | 12b | OK | fern | distant | fern |  |
| ch11-099 | 41 | 12b | OK | fließen | to flow | flieBen, er flieBt, floss, ist geflossen |  |
| ch11-100 | 41 | 12b | OK | der Flüchtling — die Flüchtlinge | refugee | der Flüchtling, -e |  |
| ch11-101 | 41 | 12b | OK | das Flussbad — die Flussbäder | river swimming pool | das Flussbad, "er |  |
| ch11-102 | 42 | 12b | OK | die Gasse — die Gassen | alley | die Gasse, -n |  |
| ch11-103 | 42 | 12b | OK | der Hauptgrund — die Hauptgründe | main reason | der Hauptgrund, "-e |  |
| ch11-104 | 42 | 12b | OK | das Industrieviertel — die Industrieviertel | industrial quarter | das Industrieviertel, - |  |
| ch11-105 | 42 | 12b | OK | die Initiative — die Initiativen | initiative | die Initiative, -n (eine soziale Initiative) |  |
| ch11-106 | 42 | 12b | WARN | der Mittelpunkt — die Mittelpunkte | centre | der Mittelpunkt, -e (im Mittelpunkt stehen) | WARN english_spelling: unknown English word(s): centre |
| ch11-107 | 42 | 12b | OK | mittendrin | in the middle of | mittendrin |  |
| ch11-108 | 42 | 12b | OK | nirgendwo | nowhere | nirgendwo |  |
| ch11-109 | 42 | 12b | OK | parkieren | to park (Swiss German) | parkieren (Schweizerdeutsch) |  |
| ch11-110 | 42 | 12b | WARN | rauffahren | to drive up | rauflfahren, er fährt rauf, fuhr rauf, ist raufgefahren | WARN auto_corrected: 'rauflfahren' -> 'rauffahren' (checked with Wiktionary) |
| ch11-111 | 42 | 12b | OK | rollen | to roll | rollen |  |
| ch11-112 | 42 | 12b | WARN | armfahren | to drive around | rumlfahren, er fährt rum, fuhr rum, ist rumgefahren | WARN auto_corrected: 'rumlfahren' -> 'armfahren' (checked with Wiktionary) |
| ch11-113 | 42 | 12b | OK | schmal | narrow | schmal |  |
| ch11-114 | 42 | 12b | OK | schweizerdeutsch | Swiss German | schweizerdeutsch |  |
| ch11-115 | 42 | 12b | OK | steigen | to climb | steigen, er steigt, stieg, ist gestiegen |  |
| ch11-116 | 42 | 12b | OK | das Trendviertel — die Trendviertel | trending district | das Trendviertel, - |  |
| ch11-117 | 42 | 12b | OK | das Velo — die Velos | bicycle (Swiss German) | das Velo, -s (Schweizerdeutsch) |  |
| ch11-118 | 42 | 12b | OK | das Wahrzeichen — die Wahrzeichen | landmark | das Wahrzeichen, - |  |
| ch11-119 | 42 | 12b | OK | üß an/schauen | to look at | üB an/schauen |  |
| ch11-120 | 42 | 12b | OK | das Denkmal — die Denkmäler | memorial, monument | das Denkmal, "er |  |
| ch11-121 | 42 | 12b | OK | die Rundfahrt — die Rundfahrten | round trip | die Rundfahrt, -en |  |
| ch11-122 | 42 | 12b | OK | springen | to jump | springen, er springt, sprang, ist gesprungen |  |
| ch11-123 | 42 | 12b | OK | der Stadtbummel — die Stadtbummel | stroll through the city | der Stadtbummel, - |  |
| ch11-124 | 42 | 13a | OK | der Tourismus | tourism | der Tourismus (Sg.) |  |
| ch11-125 | 42 | 13b | OK | der Geschäftspartner — die Geschäftspartner | business partner (m) | der Geschäftspartner, - |  |
| ch11-126 | 42 | 13b | OK | die Geschäftspartnerin — die Geschäftspartnerinnen | business partner (f) | die Geschäftspartnerin, -nen |  |
| ch11-127 | 42 | 13b | OK | k&k halbformell | half formal | k&k halbformell |  |
| ch12-001 | 42 | 1a | OK | regieren | to rule | regieren |  |
| ch12-002 | 42 | 3a | OK | das Bankgeschäft — die Bankgeschäfte | banking | das Bankgeschäft, -e |  |
| ch12-003 | 42 | 3a | OK | der Beleg — die Belege | receipt | der Beleg, -e |  |
| ch12-004 | 42 | 3a | WARN | einzahlen | to deposit | ein/zahlen | WARN auto_corrected: 'ein/zahlen' -> 'einzahlen' (checked with Wiktionary) |
| ch12-005 | 42 | 3a | OK | der Kontoauszug — die Kontoauszüge | bank statement | der Kontoauszug, "-e |  |
| ch12-006 | 42 | 3a | OK | die Rate — die Raten | rate | die Rate, -n |  |
| ch12-007 | 42 | 3a | OK | überziehen | to overdraw | überziehen, er überzieht, úberzog, hat überzogen (Ich hoffe, ich muss mein Konto nie überziehen.) |  |
| ch12-008 | 42 | 3a | OK | der Zins — die Zinsen | interest | der Zins, -en |  |
| ch12-009 | 42 | 3b UB | WARN | angeben | to state | anlgeben, er gibt an, gab an, hat angegeben (Bitte geben Sie Ihren Namen an.) | WARN auto_corrected: 'anlgeben' -> 'angeben' (checked with Wiktionary) |
| ch12-010 | 42 | 3b UB | OK | die Ausgabe — die Ausgaben | expense | die Ausgabe, -n (Ich habe jeden Monat viele Ausgaben und am Ende fast kein Geld mehr.) |  |
| ch12-011 | 42 | 3b UB | WARN | die BC — die BCs | SWIFT-BIC | die BIC, -s | WARN auto_corrected: 'BIC' -> 'BC' (checked with Wiktionary) |
| ch12-012 | 42 | 3b UB | OK | die Einnahme — die Einnahmen | revenue | die Einnahme, -n |  |
| ch12-013 | 43 | 3b UB | OK | fällig | due | fällig |  |
| ch12-014 | 43 | 3b UB | OK | fristgerecht | on time | fristgerecht |  |
| ch12-015 | 43 | 3b UB | OK | die IBAN — die IBANs | IBAN | die IBAN,-s |  |
| ch12-016 | 43 | 3b UB | OK | monatlich | monthly | monatlich |  |
| ch12-017 | 43 | 3b UB | OK | die Münze — die Münzen | coin | die Münze, -n |  |
| ch12-018 | 43 | 3b UB | OK | der Schein — die Scheine | bill | der Schein, -e |  |
| ch12-019 | 43 | 3b UB | OK | die Schulden — die Schulden | debt | die Schulden (Pl.) (Er hat hohe Schulden bei der Bank.) |  |
| ch12-020 | 43 | 3b UB | OK | versäumen | to miss | versäumen |  |
| ch12-021 | 43 | 3b UB | OK | die Zahlung — die Zahlungen | payment | die Zahlung, -en |  |
| ch12-022 | 43 | 3c | WARN | abhängig | dependent | abhángig | WARN auto_corrected: 'abhángig' -> 'abhängig' (checked with Wiktionary) |
| ch12-023 | 43 | 3c | OK | je ..., desto ... | the ... the .... | je ..., desto ... |  |
| ch12-024 | 43 | 3c | OK | je..., umso ... | the ... the ... | je..., umso ... |  |
| ch12-025 | 43 | 3c | OK | die Kontoführungsgebühr — die Kontoführungsgebühren | account maintenance charge | die Kontoführungsgebühr, -en |  |
| ch12-026 | 43 | 3d | OK | die Grundform — die Grundformen | basic form | die Grundform, -en |  |
| ch12-027 | 43 | 3d | ERROR | das Qnline-Banking | online banking | das Qnline-Banking (Sg.) | ERROR article_mismatch: article 'das' but Wiktionary says der |
| ch12-028 | 43 | 3e | OK | der/die Bankangestellte — die Bankangestellten | bank teller | der/die Bankangestellte, -n |  |
| ch12-029 | 43 | 3e | OK | das Bargeld | cash | das Bargeld (Sg.) |  |
| ch12-030 | 43 | 3e | OK | gering | small | gering |  |
| ch12-031 | 43 | 4a | WARN | aufnehmen | to take out | auflnehmen, er nimmt auf, nahm auf, hat aufgenommen (Ich möchte gern einen Kredit aufnehmen.) | WARN auto_corrected: 'auflnehmen' -> 'aufnehmen' (checked with Wiktionary) |
| ch12-032 | 43 | 4a | OK | der Kleiderschrank — die Kleiderschränke | wardrobe | der Kleiderschrank,"e |  |
| ch12-033 | 43 | 5a | WARN | anfallen | to arise | anlfallen, er fällt an, fiel an, ist angefallen | WARN auto_corrected: 'anlfallen' -> 'anfallen' (checked with Wiktionary) |
| ch12-034 | 43 | 5a | OK | die Ansicht — die Ansichten | prospect | die Ansicht, -en (Die Ansicht können Sie auf der Webseite ándern.) |  |
| ch12-035 | 43 | 5a | OK | der Benutzername — die Benutzernamen | user name | der Benutzername, -n |  |
| ch12-036 | 43 | 5a | OK | der Dauerauftrag — die Daueraufträge | recurring payment, standing order | der Dauerauftrag, "-e |  |
| ch12-037 | 43 | 5a | WARN | sich einloggen | to log in | einlloggen (sich) | WARN auto_corrected: 'sich einlloggen' -> 'sich einloggen' (checked with Wiktionary) |
| ch12-038 | 43 | 5a | WARN | eintragen | to register | einltragen, er trágt ein, trug ein, hat eingetragen | WARN auto_corrected: 'einltragen' -> 'eintragen' (checked with Wiktionary) |
| ch12-039 | 43 | 5a | OK | die Fotoüberweisung — die Fotoüberweisungen | picture transfer | die Fotoüberweisung, -en |  |
| ch12-040 | 43 | 5a | OK | die Kontodaten — die Kontodaten | account information | die Kontodaten (Pl.) |  |
| ch12-041 | 43 | 5a | OK | die Kontoübersicht — die Kontoübersichten | account overview | die Kontoübersicht, -en |  |
| ch12-042 | 43 | 5a | ERROR | der Log-in — die Log-ins | log-in | der Log-in, -s | ERROR unknown_word: 'In' not in Wiktionary; did you mean: n, Ion |
| ch12-043 | 43 | 5a | OK | das Menü — die Menüs | menu | das Menü, s (Klicken Sie im Menü "Start" an.) |  |
| ch12-044 | 43 | 5a | OK | die Standardübersicht — die Standardübersichten | standard overview | die Standardübersicht, -en |  |
| ch12-045 | 43 | 5c | WARN | gutschreiben | to credit | gutlschreiben, er schreibt gut, schrieb gut, hat gutgeschrieben (einen Betrag auf dem Konto gutschreiben) | WARN auto_corrected: 'gutlschreiben' -> 'gutschreiben' (checked with Wiktionary) |
| ch12-046 | 43 | 5c | OK | die Kontoeröffnung — die Kontoeröffnungen | account opening | die Kontoeröffnung, -en |  |
| ch12-047 | 43 | 5c | OK | die Kopie — die Kopien | copy | die Kopie, -n |  |
| ch12-048 | 43 | 5c | OK | umgehend | immediate | umgehend |  |
| ch12-049 | 43 | 5c | OK | der Verlust — die Verluste | loss | der Verlust, -e |  |
| ch12-050 | 43 | 5c | OK | zudem | in addition | zudem |  |
| ch12-051 | 43 | 6a | OK | global | global | global |  |
| ch12-052 | 43 | 6a | OK | die Globalisierung | globalization | die Globalisierung (Sg.) |  |
| ch12-053 | 43 | 7a | OK | Asien | Asia | Asien |  |
| ch12-054 | 43 | 7a | OK | bedenken | to consider | bedenken, er bedenkt, bedachte, hat bedacht |  |
| ch12-055 | 43 | 7a | OK | die Bekämpfung | combat | die Bekämpfung (Sg.) |  |
| ch12-056 | 44 | 7a | OK | contra | con | contra |  |
| ch12-057 | 44 | 7a | OK | die Forschung — die Forschungen | research | die Forschung, -en |  |
| ch12-058 | 44 | 7a | OK | der Handyhersteller — die Handyhersteller | mobile phone manufacturer | der Handyhersteller, - |  |
| ch12-059 | 44 | 7a | OK | irgendwo | somewhere | irgendwo |  |
| ch12-060 | 44 | 7a | OK | der Irrsinn | insanity | der Irrsinn (Sg.) |  |
| ch12-061 | 44 | 7a | OK | der Konsument — die Konsumenten | consumer (m) | der Konsument, -en |  |
| ch12-062 | 44 | 7a | OK | die Konsumentin — die Konsumentinnen | consumer (f) | die Konsumentin, -nen |  |
| ch12-063 | 44 | 7a | OK | nützen | to be of use | nützen (Die Globalisierung nützt allen.) |  |
| ch12-064 | 44 | 7a | OK | pauschal | across-the-board | pauschal |  |
| ch12-065 | 44 | 7a | OK | der Pluspunkt — die Pluspunkte | advantage | der Pluspunkt, -e |  |
| ch12-066 | 44 | 7a | OK | pro | pro | pro (Sind Sie pro oder contra Globalisierung?) |  |
| ch12-067 | 44 | 7a | OK | problematisch | problematic | problematisch |  |
| ch12-068 | 44 | 7a | OK | das Produktangebot — die Produktangebote | range of offered products | das Produktangebot, -e |  |
| ch12-069 | 44 | 7a | OK | profitieren | to profit | profitieren (von + D.) |  |
| ch12-070 | 44 | 7a | OK | die Sicht | view | die Sicht (Sg.) (Aus meiner Sicht ist der heutige Konsum echter Irrsinn.) |  |
| ch12-071 | 44 | 7a | OK | teilweise | partly | teilweise |  |
| ch12-072 | 44 | 7a | OK | überleben | to survive | überleben |  |
| ch12-073 | 44 | 7a | OK | überzeugend | convincing | überzeugend |  |
| ch12-074 | 44 | 7a | WARN | das Umweltproblem — die Umweltprobleme | environmental problem | das Vmweltproblem, -e | WARN auto_corrected: 'Vmweltproblem' -> 'Umweltproblem' (checked with Wiktionary) |
| ch12-075 | 44 | 7a | OK | der Verbraucher — die Verbraucher | user (m) | der Verbraucher, - |  |
| ch12-076 | 44 | 7a | OK | die Verbraucherin — die Verbraucherinnen | user (f) | die Verbraucherin, -nen |  |
| ch12-077 | 44 | 7a | OK | verlegen | to move | verlegen (die Produktion ins Ausland verlegen) |  |
| ch12-078 | 44 | 7a | OK | der Weltmarkt | world market | der Weltmarkt (Sg.) |  |
| ch12-079 | 44 | 7a | OK | die Wissenschaft — die Wissenschaften | science | die Wissenschaft, -en |  |
| ch12-080 | 44 | 7a | OK | der Wohlstand | prosperity | der Wohlstand (Sg.) |  |
| ch12-081 | 44 | 7a | OK | wünschenswert | preferable | wünschenswert |  |
| ch12-082 | 44 | 9a | OK | das Versprechen — die Versprechen | promise | das Versprechen, - |  |
| ch12-083 | 44 | 9a | OK | der Wortakzent — die Wortakzente | lexical stress | der Wortakzent, -e |  |
| ch12-084 | 44 | 9a | OK | der Wortstamm — die Wortstämme | root word | der Wortstamm, "e |  |
| ch12-085 | 44 | 9c | OK | der Geldbetrag — die Geldbeträge | sum of money | der Geldbetrag, "-e |  |
| ch12-086 | 44 | 10a | OK | basieren | to be based on | basieren (auf + D.) |  |
| ch12-087 | 44 | 10a | OK | betrügen | to cheat | betrügen, er betrügt, betrog, hat betrogen |  |
| ch12-088 | 44 | 10a | OK | drin sein | to be in | drin sein |  |
| ch12-089 | 44 | 10a | WARN | einwerfen | to insert | einlwerfen, er wirft ein, warf ein, hat eingeworfen | WARN auto_corrected: 'einlwerfen' -> 'einwerfen' (checked with Wiktionary) |
| ch12-090 | 44 | 10a | OK | das Gewissen — die Gewissen | conscience | das Gewissen, - |  |
| ch12-091 | 44 | 10a | OK | die Gewissensfrage — die Gewissensfragen | question of conscience | die Gewissensfrage, -n |  |
| ch12-092 | 44 | 10a | OK | der Kasten — die Kästen | box | der Kasten, " |  |
| ch12-093 | 44 | 10a | ERROR | das Kieingeld | small change | das Kieingeld (Sg.) | ERROR unknown_word: 'Kieingeld' not in Wiktionary |
| ch12-094 | 44 | 10a | WARN | nachprüfen | to check | nachlprüfen | WARN auto_corrected: 'nachlprüfen' -> 'nachprüfen' (checked with Wiktionary) |
| ch12-095 | 44 | 10a | WARN | der Staub der Vorwurf — die Staub der Vorwürfe | 1snp | der Staub (Sg.) der Vorwurf, "-e (Niemand kann mir einen accusation (Nobody can accuse me, right?) Vorwurf machen, oder?) | WARN ocr_low_confidence: OCR confidence 0.81 < 0.85 |
| ch12-096 | 44 | 10a | ERROR | weiterverschenken | to pass on as a gift | weiterverschenken | ERROR unknown_word: 'weiterverschenken' not in Wiktionary |
| ch12-097 | 44 | 10a | WARN | der Zeitungskasten | newspaper rack | der Zeitungskasten, | WARN plural_missing: noun has a comma but no plural code (OCR may have dropped it) |
| ch12-098 | 44 | 10c | OK | befürworten | to agree with | befürworten |  |
| ch12-099 | 44 | 10c | OK | der Blickkontakt — die Blickkontakte | eye contact | der Blickkontakt, -e |  |
| ch12-100 | 44 | 10c | OK | sich räuspern | to clear one's throat | räuspern (sich) |  |
| ch12-101 | 45 | 10c | OK | tolerieren | to tolerate | tolerieren |  |
| ch12-102 | 45 | 10c | OK | unmöglich | impossible | unmöglich |  |
| ch12-103 | 45 | 10c | OK | das Wort — die Worte | word | das Wort, -e (Lass doch auch die anderen zu Wort kommen!) |  |
| ch12-104 | 45 | 10d | OK | fort | gone | fort |  |
| ch12-105 | 45 | 10d | OK | merken | to notice | merken (Er merkt nach dem Einkaufen, dass die Milch nicht berechnet wurde.) |  |
| ch12-106 | 45 | 11b | WARN | ausziehen | to move out of | auslziehen, er zieht aus, zog aus, ist ausgezogen (Wann zieht ihr aus der Wohnung aus?) | WARN auto_corrected: 'auslziehen' -> 'ausziehen' (checked with Wiktionary) |
| ch12-107 | 45 | 11b | OK | beten | to pray | beten |  |
| ch12-108 | 45 | 11b | OK | damalig | bygone, past | damalig |  |
| ch12-109 | 45 | 11b | OK | die Entstehungszeit — die Entstehungszeiten | time of origin | die Entstehungszeit, -en |  |
| ch12-110 | 45 | 11b | OK | fortschrittlich | progressive | fortschrittlich |  |
| ch12-111 | 45 | 11b | OK | geraten | to fall into | geraten, er gerát, geriet, ist geraten |  |
| ch12-112 | 45 | 11b | OK | die Immobilie — die Immobilien | real estate | die Immobilie, -n |  |
| ch12-113 | 45 | 11b | OK | die Jahresmiete — die Jahresmieten | yearly rent | die Jahresmiete, -n |  |
| ch12-114 | 45 | 11b | OK | katholisch | Catholic | katholisch |  |
| ch12-115 | 45 | 11b | OK | die Kaufmannsfamilie — die Kaufmannsfamilien | merchant family | die Kaufmannsfamilie, -n |  |
| ch12-116 | 45 | 11b | OK | die Konzeption — die Konzeptionen | idea, conception | die Konzeption, -en |  |
| ch12-117 | 45 | 11b | ERROR | der Nachtwáchter — die Nachtwáchter | night watchman | der Nachtwáchter, - | ERROR unknown_word: 'Nachtwáchter' not in Wiktionary |
| ch12-118 | 45 | 11b | WARN | die Nachtwächterin — die Nachtwächterinnen | night watchwoman | die Nachtwächterin, -nen | WARN english_spelling: unknown English word(s): watchwoman |
| ch12-119 | 45 | 11b | OK | der Originalzustand — die Originalzustände | original condition | der Originalzustand, "-e |  |
| ch12-120 | 45 | 11b | OK | die Schuld | fault | die schuld (Sg.) (Sie ist ohne Schuld in Not geraten.) |  |
| ch12-121 | 45 | 11b | OK | die Selbsthilfe | self-help | die Selbsthilfe (Sg.) |  |
| ch12-122 | 45 | 11b | OK | die Siedlung — die Siedlungen | settlement, housing scheme | die Siedlung, -en |  |
| ch12-123 | 45 | 11b | OK | die Sozialsiedlung — die Sozialsiedlungen | social housing project | die Sozialsiedlung, -en |  |
| ch12-124 | 45 | 11b | OK | die Stadtmauer — die Stadtmauern | city wall | die Stadtmauer, -n |  |
| ch12-125 | 45 | 11b | OK | stammen | to originate (from) | stammen (aus + D.) |  |
| ch12-126 | 45 | 11b | OK | das Stiftungsvermögen — die Stiftungsvermögen | endowment capital | das Stiftungsvermögen, - |  |
| ch12-127 | 45 | 11b | OK | symbolisch | symbolic | symbolisch |  |
| ch12-128 | 45 | 11b | OK | touristisch | touristic | touristisch |  |
| ch12-129 | 45 | 11b | OK | der Urgroßvater — die Urgroßväter | great-grandfather | der UrgroBvater, "- |  |
| ch12-130 | 45 | 11b | OK | zusätzlich | additional | zusätzlich |  |
| ch12-131 | 45 | 11b | OK | der Zustand — die Zustände | state | der Zustand, "e (eine Wohnung im Originalzustand) |  |
| ch12-132 | 45 | 11e | OK | wohltätig | benevolent | wohltätig |  |
| ch12-133 | 45 | 11e | OK | k&k einlleiten | to introduce, to initiate | k&k einlleiten |  |
