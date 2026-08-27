# Neuvago – DE Wave 0: endelig gjennomgang og German Launch Baseline v1

**Status:** Godkjent med korrigeringer  
**Baseline-commit:** `43369d78e868238317571c30cf2131f4e75b857e`  
**Commit:** `Refine Learn everyday questions and patterns`  
**Auditpakke:** `neuvago-de-wave0-43369d78e868-20260826T130057Z.zip`  
**Verifisert SHA-256:** `9d10d3e23f9d9d2e5ed8a7913c64910956b7c0f216a12660ffa7e116ee7fc484`  
**Build:** Bestått  
**Tracked arbeidsområde ved audit:** Rent  
**Lokal `main` mot `origin/main`:** Synkronisert

## 1. Konklusjon

DE Wave 0 kan låses som **German Launch Baseline v1**, men det automatiske `de-page-registry-seed.json` skal ikke installeres.

Den automatiske pakken er teknisk gyldig som revisjonsgrunnlag:

- ZIP-kontrollsummen matcher.
- ZIP-integriteten er bestått.
- Baseline-commit og `origin/main` var identiske.
- Produksjonsbuilden besto.
- Baseline-digesten er verifisert.
- Route inventory dekker 219 rader, 212 eksakte build-ruter og 7 dynamiske mønstre.

Det automatiske lanseringsomfanget er derimot for ruteorientert. Det teller engelske og norske språkvarianter som separate oversettelsesoppgaver og blander dynamiske templates, redirects og markedsspesifikke sider inn i prioriteringen.

Den korrigerte baselinen er derfor konseptbasert:

| Omfang | Antall |
| --- | ---: |
| Unike tyske sidekonsepter | **45** |
| P0 – komplett kommersiell, støtte- og juridisk kundereise | **20** |
| P1 – kunnskap, forskning og sentrale begreper | **25** |
| Engelske kilder | **36** |
| Norske kilder uten egen engelsk ekvivalent | **5** |
| Nye tyske markedssider uten komplett eksisterende kilde | **4** |

Alle 45 P0/P1-konsepter er lanseringsblokkerende for den første indekserbare `/de`-lanseringen. Tyske URL-er i denne filen er **kandidater**, ikke låste slugs. Slugene låses først etter tysk keyword research og terminologiarbeid i DE Wave 2.

## 2. Hva som er låst

German Launch Baseline v1 låser:

1. Kildecommit `43369d78e868`.
2. De 45 unike sidekonseptene i første tyske lansering.
3. P0/P1-prioritet.
4. Hvilket språk og hvilken side som er redaksjonell kilde.
5. Engelske/norske referansevarianter.
6. Krav til SEO-, språk-, claims-, juridisk og kommersiell kontroll.
7. At nye engelske og norske P2-sider kan fortsette uten å endre den låste tyske lanseringspakken.

Baselinen låser ikke:

- Tyske slugs.
- Tyske søkeord, title, H1 eller metadata.
- Endelig tysk ordvalg.
- Juridisk tekst for Tyskland.
- Endelige regulatoriske formuleringer.
- Design eller komponentarkitektur.
- Nye P2-artikler som kommer etter baseline-commit.

## 3. P0 – 20 lanseringskritiske konsepter

| ID | Side | Kilde | Referanse | Tysk URL-kandidat | Arbeid |
| --- | --- | --- | --- | --- | --- |
| de-home | German home page | / | /no | /de | translate-seo-adapt |
| de-product | German product page | /product | /no/produkt | /de/produkt | translate-seo-adapt |
| de-shop | German shop / launch-access page | /shop | – | /de/shop | translate-seo-adapt |
| de-app | German app page | /app | /no/app | /de/app | translate-seo-adapt |
| de-how-it-works | How Neuvago works | /how-it-works | /no/slik-fungerer-det | /de/so-funktioniert-neuvago | translate-seo-adapt |
| de-how-to-use | How to use Neuvago | /how-to-use | – | /de/anwendung | translate-seo-adapt |
| de-about | About Neuvago | /about | /no/om-oss | /de/ueber-uns | translate-seo-adapt |
| de-support | German support hub | /support | /no/support | /de/support | translate-seo-adapt |
| de-legal-hub | Legal and compliance hub | /legal | /no/juridisk | /de/rechtliches | legal-market-adaptation |
| de-intended-use | Intended use | /legal/intended-use | /no/juridisk/tiltenkt-bruk | /de/rechtliches/vorgesehene-verwendung | legal-market-adaptation |
| de-medical-disclaimer | Medical disclaimer | /legal/medical-disclaimer | /no/juridisk/medisinsk-ansvarsfraskrivelse | /de/rechtliches/medizinischer-hinweis | legal-market-adaptation |
| de-regulatory-information | Regulatory information | /legal/regulatory | /no/juridisk/regulatorisk | /de/rechtliches/regulatorische-informationen | legal-market-adaptation |
| de-ce-compliance | CE compliance | /legal/ce-compliance | /no/juridisk/ce-samsvar | /de/rechtliches/ce-konformitaet | legal-market-adaptation |
| de-trust-safety | Trust and safety | /legal/trust-safety | /no/juridisk/tillit-og-sikkerhet | /de/rechtliches/vertrauen-und-sicherheit | legal-market-adaptation |
| de-privacy | Privacy policy | /legal/privacy-policy | /no/juridisk/personvern | /de/rechtliches/datenschutz | legal-market-adaptation |
| de-terms | Terms of service / German terms | /legal/terms-of-service | /no/juridisk/vilkar | /de/rechtliches/agb | legal-market-adaptation |
| de-imprint | German imprint | Ny tysk side | – | /de/impressum | de-native-authoring |
| de-shipping-delivery | Shipping and delivery | Ny tysk side | – | /de/versand-und-lieferung | de-native-authoring |
| de-withdrawal-returns | Withdrawal, returns and refunds | Ny tysk side | – | /de/widerruf-und-rueckgabe | de-native-authoring |
| de-warranty-complaints | Warranty and complaints | Ny tysk side | – | /de/gewaehrleistung-und-reklamation | de-native-authoring |

### P0-merknader

- `/no/product` er en redirect til `/no/produkt` og er eksplisitt ekskludert.
- `/no/slik-fungerer-det` er den reelle norske motparten til `/how-it-works` og er korrigert fra automatisk P2 til P0-referanse.
- `/get-started` er holdt utenfor P0 fordi siden sender brukeren videre til engelskspråklige `/signup` og `/login`.
- FDA-sidene holdes utenfor den tyske lanseringen.
- Fire sider må skrives som tyske markedssider: Impressum, frakt/levering, angrerett/retur/refusjon og garanti/reklamasjon.
- Juridiske sider skal markedsadapteres og kvalitetssikres, ikke ordrett oversettes.

## 4. P1 – 25 autoritets- og SEO-konsepter

| ID | Side | Kilde | Referanse | Tysk URL-kandidat | Arbeid |
| --- | --- | --- | --- | --- | --- |
| de-learn-hub | German knowledge hub | /learn | /no/kunnskap | /de/wissen | translate-seo-adapt |
| de-vagus-nerve | Vagus nerve | /learn/vagus-nerve | /no/kunnskap/vagusnerven | /de/wissen/vagusnerv | translate-seo-adapt |
| de-vagus-nerve-stimulation | Vagus nerve stimulation | /learn/vagus-nerve-stimulation | /no/kunnskap/vagusnervestimulering | /de/wissen/vagusnervstimulation | translate-seo-adapt |
| de-non-invasive-vns | Non-invasive vagus nerve stimulation | /learn/non-invasive-vagus-nerve-stimulation | /no/kunnskap/ikke-invasiv-vagusnervestimulering | /de/wissen/nicht-invasive-vagusnervstimulation | translate-seo-adapt |
| de-transcutaneous-vns | Transcutaneous vagus nerve stimulation | /learn/transcutaneous-vagus-nerve-stimulation | /no/kunnskap/transkutan-vagusnervestimulering | /de/wissen/transkutane-vagusnervstimulation | translate-seo-adapt |
| de-auricular-vns | Auricular vagus nerve stimulation | /learn/auricular-vagus-nerve-stimulation | /no/kunnskap/aurikulaer-vagusnervestimulering | /de/wissen/aurikulaere-vagusnervstimulation | translate-seo-adapt |
| de-ear-vs-neck-vns | Ear-based vs neck-based VNS | /learn/ear-vs-neck-vagus-nerve-stimulation | /no/kunnskap/orebasert-vs-halsbasert-vns | /de/wissen/vagusnervstimulation-ohr-oder-hals | translate-seo-adapt |
| de-choose-vns-device | How to choose a VNS device | /learn/how-to-choose-a-vagus-nerve-stimulation-device | /no/kunnskap/hvordan-velge-vagusnervestimulator | /de/wissen/vagusnervstimulator-auswaehlen | translate-seo-adapt |
| de-ear-anatomy-vagus | Ear anatomy and the vagus nerve | /no/kunnskap/orets-anatomi-og-vagusnerven | – | /de/wissen/ohranatomie-und-vagusnerv | translate-seo-adapt |
| de-implanted-vs-non-invasive-vns | Implanted and non-invasive VNS | /no/kunnskap/implantert-og-ikke-invasiv-vns | – | /de/wissen/implantierte-und-nicht-invasive-vagusnervstimulation | translate-seo-adapt |
| de-is-vns-safe | Is vagus nerve stimulation safe? | /no/kunnskap/er-vagusnervestimulering-trygt | – | /de/wissen/ist-vagusnervstimulation-sicher | translate-seo-adapt |
| de-non-invasive-vns-side-effects | Side effects of non-invasive VNS | /no/kunnskap/bivirkninger-ved-ikke-invasiv-vagusnervestimulering | – | /de/wissen/nebenwirkungen-nicht-invasive-vagusnervstimulation | translate-seo-adapt |
| de-vns-caution | Who should be cautious with VNS? | /no/kunnskap/hvem-bor-vaere-forsiktig-med-vagusnervestimulering | – | /de/wissen/wer-sollte-bei-vagusnervstimulation-vorsichtig-sein | translate-seo-adapt |
| de-research-hub | German research hub | /research | /no/forskning | /de/forschung | translate-seo-adapt |
| de-research-topics-hub | German research topics hub | /research/topics | – | /de/forschung/themen | translate-seo-adapt |
| de-research-vns | VNS research topic | /research/topics/vagus-nerve-stimulation | /no/forskning/vagusnervestimulering | /de/forschung/themen/vagusnervstimulation | translate-seo-adapt |
| de-research-tvns | tVNS research topic | /research/topics/transcutaneous-vagus-nerve-stimulation | /no/forskning/transkutan-vagusnervestimulering | /de/forschung/themen/transkutane-vagusnervstimulation | translate-seo-adapt |
| de-research-auricular-vns | Auricular VNS research topic | /research/topics/auricular-vagus-nerve-stimulation | /no/forskning/aurikulaer-vagusnervestimulering | /de/forschung/themen/aurikulaere-vagusnervstimulation | translate-seo-adapt |
| de-research-safety | Safety and tolerability research | /research/topics/safety-and-tolerability | /no/forskning/sikkerhet-og-tolerabilitet | /de/forschung/themen/sicherheit-und-vertraeglichkeit | translate-seo-adapt |
| de-study-frangos-2015 | Frangos 2015 taVNS fMRI study | /research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri | – | /de/forschung/studien/frangos-2015-aurikulaere-vagusnervstimulation-fmri | translate-seo-adapt |
| de-glossary-hub | German glossary hub | /glossary | /no/ordliste | /de/glossar | translate-seo-adapt |
| de-glossary-vagus-nerve | Vagus nerve glossary term | /glossary/vagus-nerve | /no/ordliste/vagusnerven | /de/glossar/vagusnerv | translate-seo-adapt |
| de-glossary-vns | Vagus nerve stimulation glossary term | /glossary/vagus-nerve-stimulation | /no/ordliste/vagusnervestimulering | /de/glossar/vagusnervstimulation | translate-seo-adapt |
| de-glossary-non-invasive-vns | Non-invasive VNS glossary term | /glossary/non-invasive-vagus-nerve-stimulation | /no/ordliste/ikke-invasiv-vagusnervestimulering | /de/glossar/nicht-invasive-vagusnervstimulation | translate-seo-adapt |
| de-glossary-tavns | Transcutaneous auricular VNS glossary term | /glossary/transcutaneous-auricular-vagus-nerve-stimulation | /no/ordliste/transkutan-aurikulaer-vagusnervestimulering | /de/glossar/transkutane-aurikulaere-vagusnervstimulation | translate-seo-adapt |

### P1-merknader

- Fem prioriterte sikkerhets-/anatomisider bruker norsk som redaksjonell kilde fordi de ikke har en egen, tilsvarende engelsk side.
- Hele ordlisten, alle studier, alle condition-sider og de øvrige long-tail-artiklene ligger i P2-køen.
- `hrv-og-vagusnerven` beholdes som tidlig P2-A, men er ikke nødvendig for den første 45-siders lanseringen.
- Dynamiske route patterns er templates og registreres ikke som egne oversettelseskonsepter.

## 5. Korrigert disposisjon av alle 219 inventory-rader

| Endelig disposisjon | Antall |
| --- | ---: |
| P0 source routes | 16 |
| P0 reference routes | 14 |
| P1 source routes | 25 |
| P1 reference routes | 18 |
| P2-kø | 109 |
| Private/tekniske ruter ekskludert | 26 |
| Dynamiske templates | 7 |
| Markedsspesifikke sider på hold | 2 |
| Privat kundereise på hold | 1 |
| Redirect ekskludert | 1 |
| **Totalt** | **219** |

Hele avgjørelsen per rute finnes i `de-wave0-route-disposition-v1.csv`.

## 6. Viktigste revisjonsfunn

| ID | Alvor | Område | Funn | Beslutning |
| --- | --- | --- | --- | --- |
| DE-W0-001 | critical | scope-model | The automated seed models language routes as separate pages | Do not install the original seed. German Launch Baseline v1 uses 45 unique page concepts: 20 P0 and 25 P1. |
| DE-W0-002 | high | route-classification | Redirect and counterpart routes were misclassified | Exclude /no/product; map /no/slik-fungerer-det to the de-how-it-works P0 concept. |
| DE-W0-003 | critical | change-detection | The generated translation hashes are too broad and cross-locale | Baseline v1 stores curated copy digests separately from implementation digests. DE Wave 5 must implement locale- and entry-aware stale detection. |
| DE-W0-004 | high | audit-package | The source snapshot is not complete | No rerun is required for Wave 0 because the commit and manifest are immutable and verified. Add src/i18n/ and src/hooks/ to the next audit script snapshot allowlist. |
| DE-W0-005 | critical | i18n-architecture | The current runtime architecture is binary English/Norwegian | DE Wave 1 must introduce a generic locale/market registry before substantive German page production. |
| DE-W0-006 | high | international-seo | Canonical and hreflang conventions are inconsistent | Centralize metadata and standardize active language tags to en-US, nb-NO, de-DE and x-default in DE Wave 1. |
| DE-W0-007 | high | technical-seo | Two launch-adjacent English pages lack page-level metadata | Keep /how-to-use in P0 and repair metadata. Hold /get-started outside the German launch set until the account/app journey is localized or the page is redefined. |
| DE-W0-008 | critical | content-baseline | About and support may be overridden by production CMS content not captured in Git | Export and freeze the effective production CMS rows before translation; then make locale ownership explicit. |
| DE-W0-009 | critical | legal-readiness | Current legal copy is not ready for German publication | Treat German legal pages as market adaptation or German-native authoring, with separate legal and regulatory approval. |
| DE-W0-010 | high | market-scope | US-specific FDA pages should not enter the German launch set | Keep FDA content available on existing languages but exclude it from German Wave 0/P0. |
| DE-W0-011 | high | customer-journey | Get started currently enters an English-only private account journey | Hold /get-started outside the initial German launch scope. Reintroduce it when the private account/app boundary is deliberately localized. |
| DE-W0-012 | medium | registry-model | Dynamic route patterns are templates, not translation concepts | Track templates as implementation infrastructure; register exact published content entries as concepts. |
| DE-W0-013 | high | claims | The shop page contains comparatively strong benefit claims | P0 claims review is mandatory before German copy is drafted. |

## 7. Hash- og endringskontroll

Den automatiske auditpakken bruker hovedsakelig brede dependency-bundle-hasher. Dette gir falske utslag fordi:

- Engelske og norske innholdsfiler kan havne i samme hash.
- Like slugs kan koble inn filer fra en annen innholdstype.
- Endringer i delte visuelle komponenter kan markere en oversettelse som innholdsmessig utdatert.
- En ny glossary-artikkel kan markere alle oversatte glossary-termer som utdaterte.

German Launch Baseline v1 skiller derfor mellom:

- **Copy digest:** kuraterte filer eller én konkret registry-entry som inneholder teksten som skal oversettes.
- **Implementation digest:** rutefil/template og tekniske avhengigheter som styrer rendering.

Disse digestene dokumenterer baseline v1. De er ikke den endelige stale-detection-motoren. DE Wave 5 skal bygge:

1. Locale-spesifikke copy-hasher.
2. Entry-spesifikke hasher for glossary, studier og registre.
3. Separat implementation-status.
4. `stale-copy` og `stale-implementation` som to ulike tilstander.

## 8. CMS-avhengighet som må lukkes

`/about` og `/support` bruker en Supabase-basert `page_content`-mekanisme. Git-committen kan derfor inneholde fallback-teksten uten å bevise hvilken tekst som faktisk vises i produksjon.

Før tysk oversettelse av disse sidene:

1. Eksporter de effektive produksjonsradene.
2. Sammenlign dem med Git-fallback.
3. Velg én autoritativ kilde.
4. Frys den valgte teksten i baseline for oversettelsen.
5. Gjør CMS-oppsettet locale-aware dersom tysk innhold fortsatt skal kunne redigeres eksternt.

## 9. Arkitekturkrav som går direkte inn i DE Wave 1

Det nåværende systemet er i flere steder binært EN/NO:

- `src/proxy.ts` kjenner bare `/no`; alle andre paths blir `en`.
- Header og footer bruker EN/NO-spesifikke dictionaries og binære lenkevalg.
- `GlossaryLocale` er `"en" | "no"`.
- Det finnes separate `(en)`- og `(no)`-layouts, men ingen generisk locale/market-konfigurasjon.
- Canonical/hreflang bruker både `no-NO` og `nb-NO`.
- Flere norske sider mangler `x-default`.
- `/how-to-use` mangler side-metadata, canonical og hreflang.

DE Wave 1 må derfor begynne med en sentral locale/market registry før det opprettes mange tyske filer. Minimum:

```text
en-US  → global English
nb-NO  → /no
de-DE  → /de
x-default → /
```

Registryet skal eie:

- Locale og language tag.
- Markedskode.
- URL-prefix.
- HTML `lang`.
- Open Graph-locale.
- Navigasjon/footer-dictionary.
- Produkt-, login- og support-ruter.
- Sitemap-deltakelse.
- Canonical/hreflang-sett.
- Publiseringsstatus.

## 10. Juridisk og regulatorisk status

Baseline-lås betyr ikke at dagens juridiske kildetekst er godkjent for oversettelse.

Følgende ble funnet:

- Engelsk personvern og vilkår inneholder `Effective Date: [Insert date]`.
- Norsk legal-content sier uttrykkelig at frakt, retur, angrerett, reklamasjon, garantier, leverandører, appdata og databehandlere må fylles inn eller bekreftes.
- Norsk CE-tekst i baseline reflekterer en pågående status og må oppdateres mot den nå ferdige CE-dokumentasjonen.
- Shop-siden bruker sterke formuleringer om søvn, ro, stress og recovery som må gjennom claims review før tysk tilpasning.

Derfor er P0-kildene **scope-locked**, men ikke **translation-approved**. Før tysk tekstproduksjon må vi opprette og godkjenne en claims-/terminologipakke.

## 11. Kilder som ikke er web-ruter, men som fortsatt blokkerer lansering

Disse er ikke en del av route count på 45, men må inngå i det tyske lanseringsprogrammet:

- Tysk bruksanvisning og sikkerhetsinformasjon.
- Eventuell tysk produkt-, emballasje- og etikettinformasjon.
- Tysk checkout.
- Ordrebekreftelser, fraktvarsler og service-e-post.
- Pris, mva, levering, retur, refusjon, garanti og reklamasjon.
- Tysk kundestøtte.
- Endelig claims-matrise mot intended use, CE-dokumentasjon og produkthåndbok.

## 12. Beslutning

**DE Wave 0 er godkjent og kan committes som German Launch Baseline v1.**

Følgende originale filer er revisjonsbevis, men skal ikke installeres som runtime-kilde:

```text
de-page-registry-seed.json
de-launch-scope-proposal.md
```

Følgende korrigerte filer er autoritative for videre arbeid:

```text
de-launch-baseline-v1.json
de-launch-baseline-v1.csv
de-wave0-route-disposition-v1.csv
de-wave0-audit-findings-v1.json
DE-WAVE0-FINAL-REVIEW.md
```

Neste arbeidspakke er **DE Wave 1 – locale architecture, central page registry, metadata/hreflang generator og German route shell**. Før selve oversettelsen følger **DE Wave 2 – German keyword map, terminology og claims policy**.
