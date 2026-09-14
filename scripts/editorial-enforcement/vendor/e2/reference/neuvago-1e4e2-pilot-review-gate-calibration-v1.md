# NEUVAGO SEARCH DOMINANCE 1E.4E.2
## Pilot Review & Gate Calibration — gjennomgått testgrunnlag v1

**Status:** Forslag til implementerings-/testkontrakt. Ingen kalibrert motor eller ny kjøre-/installasjonspakke er levert.  
**Dato:** 13. september 2026.  
**Baseline:** `4c4e65a87163000ee493f264849824f17fdcf8ca`.  
**Grunnlag:** den godkjente E1-observasjonskjøringen med SHA-256 `3e49e9a732b9341d3b0a5831d65a802e724fcf29fda3f8840fb8e4623c1be0a0` og nye, separat dokumenterte analystester.

Dette viderefører E2-etappen i den tidligere designkontrakten, ikke en ny recovery av nettstedet. E1-resultatet er gyldig som innsamling fra den rene baselinen. Ingen artikkel- eller registerfeil ble funnet i de opprinnelige fasekontrollene. Ekstratestene viser hvorfor samme motor ikke uten videre skal bli publiseringsblokkering.

## 1. Formål og grenser

E2 skal kalibrere hvilke **tekniske** resultater som kan brukes i en senere aktiv gate. Kildeidentitet og teknisk sporbarhet skal fortsatt være adskilt fra faglig claim-støtte. Alle endringsforsøk kjøres i isolerte kopier eller minnesnapshots. Brukerens repo, Git-refs, historiske locks og registre skal ikke endres.

Første kalibrerte kjøring forblir `SHADOW_REPORT_ONLY`: ingen CI, hooks, publiseringssperrer, ny artikkelbatch, build, produksjonshenting eller automatisk intake. Den skal bruke prosjektets faktiske TypeScript og dokumentere denne separat fra reviewens Linux-kontroller.

## 2. Konkret grunnlag fra egne kontroller

Åtte kontrolltilfeller er kjørt mot uendrede E1-filer. To kontrolltilfeller bekrefter utgangspunktet: uendret baseline gir 364 PASS og 34 review, og den kjente feilaktige PubMed-lenken gir blokkandidater. Fem nye inputeksempler grupperes i fire tekniske kalibreringspunkter. Ett formattilfelle belyser et konservativt review-varsel.

Kjøringen bruker lokalt installert TypeScript 5.8.3 i Linux. Brukerens E1-retur bruker 5.9.3. Versjonene er ikke like, og de nye tilfellene er ikke allerede demonstrert på brukerens Mac. Regelkoden er identisk med originalpakken; JSON-overgangskontrollene og delstrengmatching er også lest direkte i denne koden. E2 skal reprodusere relevante utfall på den reelle compiler-versjonen.

Alle endrede testinput gav et generelt review-varsel. Kritikken gjelder at enkelte **spesifikke regler** samtidig beskriver et brudd eller uavklart input som teknisk PASS. E1-CLIens eksakte baselinelås avviser slike filendringer før motoren brukes. Ingen faktisk publisering eller godkjenning skjedde.

## 3. Fire tekniske kalibreringspunkter

### CAL-01 — Kanonisk kildeidentitet må kontrolleres uavhengig av lokal evidence_id

**Kodelokator:** `support/shadow.py`, linje 205–208 i den opprinnelige E1-pakken.

**Demonstrert:** Begge prøveendringene gir PASS for G-ID-QUARANTINE og REVIEW_REQUIRED for den generelle registerendringen. Ingen WOULD_BLOCK.

**Krav til E2:** Karantene og duplisering vurderes på normalisert PMID/DOI og dokumentert identitetsrelasjon, i tillegg til unik evidence_id. Ved uklar relasjon må den være synlig, ikke auto-aliassert.

**Egne testcase-ID-er:** `CAL_RENAMED_QUARANTINED_ID`, `CAL_DUPLICATE_PMID_NEW_LOCAL_ID`.

### CAL-02 — Promoteringskontrollen må gjelde nye poster også

**Kodelokator:** `support/shadow.py`, linje 192–204 i den opprinnelige E1-pakken.

**Demonstrert:** En ny testpost med directness=PROVEN_PRODUCT_EFFECT gir PASS for G-REVIEW-PROMOTION fordi tidligere verdi er None; den generelle registerendringen blir REVIEW_REQUIRED.

**Krav til E2:** Valider tillatte statusverdier for både nye og eksisterende poster. Sammenlign registrene på stabile post-ID-er, ikke listeposisjon; ingen ny post kan starte med ikke-autorisert støtte-/direkthetsgodkjenning. Pending-kandidater kan fortsatt gi review uten autoavvisning.

**Egne testcase-ID-er:** `CAL_NEW_DIRECTNESS_PROMOTION`.

### CAL-03 — Ikke-støttet kontrollflyt må være synlig i kildetolkningen

**Kodelokator:** `support/extract.cjs`, linje 94–100 i den opprinnelige E1-pakken.

**Demonstrert:** if (true) return null; før den direkte JSX-returnen ignoreres ved utvalg av direkte return-setning. G-ROUTES-TARGET og kildekortkontrollene gir fortsatt teknisk PASS, mens hele filendringen blir REVIEW_REQUIRED.

**Krav til E2:** Gjenkjenn at funksjonskroppen inneholder kontrollflyt utenfor støttet subset, og rapporter NOT_EVALUATED med kodelokator. Ingen krav om full JavaScript-tolk eller utførelse av prosjektkode. Eventuell utvidet statisk støtte må testes eksplisitt.

**Egne testcase-ID-er:** `CAL_PARSE_EARLY_RETURN`.

### CAL-04 — Bibliografiske felt må ikke godkjennes bare ved delstrengtreff

**Kodelokator:** `support/shadow.py`, linje 132–136 i den opprinnelige E1-pakken.

**Demonstrert:** En endret forfatterlinje som fortsatt nevner det gamle navnet som tidligere attribusjon gir PASS for forfatterfeltet, fordi forventet navn finnes et sted i kortteksten. Filendringen blir REVIEW_REQUIRED.

**Krav til E2:** Sammenhold eksplisitte bibliografiske felt med den avtalte visningskontrakten. Uklar feltavgrensning gir review eller NOT_EVALUATED; en kjent motstrid skal ikke beskrives som match. Støtt tidligere godkjent forkortet forfattervisning og offentlige kildetyper.

**Egne testcase-ID-er:** `CAL_METADATA_CONTRADICTORY_AUTHOR`.

## 4. Ett separat formatpunkt

**CAL-05 – Scope er ikke nødvendigvis tredje avsnitt.** E1 velger det tredje `p`-elementet i kortet som scope. Når uendret tekst deles på to avsnitt, vises «Boundary wording changed». Dette er et konservativt `REVIEW_REQUIRED`, ikke en uoppdaget innholdsfeil eller en uriktig releasegodkjenning.

E2 skal enten ha en eksplisitt notekontrakt eller tilstrekkelig sikker avgrensning innenfor **samme kort**. En rent strukturell endring skal ikke beskrives som faktisk bortfall av mening. Samtidig må scope som er fjernet, skjult, flyttet til et annet kort eller lagt sammen med en ny motsigende påstand fortsatt være synlig som blokk-/reviewutfall. Ingen automatisk medisinsk semantikkgodkjenning inngår.

## 5. Bevar det som allerede virker

De fungerende positiv-/feiltilfellene fra E1 skal beholdes. Offentlige kilder trenger ikke oppdiktede forskningsidentifikatorer. DOI som merket tekst og som korrekt DOI-lenke skal fortsatt virke. Tolv intake-identiteter forblir dokumenterte kandidater; de skal ikke autoimporteres for å få teknisk PASS.

Kildens identitet må tilhøre riktig kort. Fragmenthenvisningen må peke til riktig mål. Nye eller endrede forklaringer uten tydelig policykobling må stå i endringsinventaret, uansett leksikalsk likhet. Historiske locks og karantenehistorikk kan ikke endres i stillhet. Staged-kontrollen må lese index, og en navngitt commit må leses som commit, ikke som dagens arbeidstre.

## 6. Test- og rapportkontrakt

Testforventninger skal fastsettes før resultatene og knyttes til **regel-ID, konkret objekt/kort/post og inputfase**. Det er ikke nok at samme regel gir forventet status på en annen uendret kilde.

Den nye testmatrisen skal omfatte både eksisterende og nye registerposter, omordning av registerposter, duplikate PMID-er med ulike interne ID-er, karanteneidentitet med ny ID, tidlig retur/kontrollflyt, bibliografiske motstrid og legitime formatendringer. Ingen aliaser skal oppfinnes eller motstrid løses automatisk.

Den maskinlesbare følgesfilen inneholder tretten konkrete akseptansetilfeller og de fem kalibreringspunktene. Disse er en testplan, ikke tretten allerede beståtte tester i en ny motor.

Rapporteringen skal skille mellom `execution_status`, regelutfall og eventuell fremtidig blokkering. `REVIEW_REQUIRED` og `NOT_EVALUATED` må være synlige i dekningsrapporten. De 641 tidligere ikke-vurderte scope-oppføringene blir ikke godkjent gjennom kalibrering av elleve sidefiler.

## 7. Foreslått gjennomføring

1. Lag en separat, versjonert kalibreringskontrakt og bevar E1 som uendret sammenligningsgrunnlag.
2. Rett de fire tekniske kontrollpunktene og avklar det konservative formatvarselet i en pakke utenfor repoet. Ingen kilde- eller registry-endringer.
3. Kjør gamle og nye kontroller i isolerte testrepoer, med vanlig og symbolsk lenket rot og ulike Git-faser. Registrer forventet og observert status på riktig objekt.
4. Kjør en ny skrivebeskyttet observasjonspilot på brukerens faktiske baseline og compiler. Returner rapportene til separat review.

Dette er en ny konkretisering av testgrunnlaget, ikke en påstand om at E2 allerede er implementert. E3-installasjon og eventuell aktivert sperre krever en senere uttrykkelig beslutning og eget kontrollert endringssett.

## 8. Videreført arbeid

De tolv intake-kandidatene, den nye bruken av seks registeridentiteter, de 117 claim-policyene, 19 strukturelle kandidatreferanser, elleve åpne rutetilknytninger, 110 videreførte review-poster, 38 gjenbruksgrupper og den ene lokatoren utenfor låst scope beholdes. Tre NHS-adresser og den kjente reading-guidance-advarselen er separate oppgaver, ikke skjulte sideeffekter av kalibreringen.

```text
mode: SHADOW_REPORT_ONLY
enforcement_gates_installed: false
ci_installed: false
deployment_blocking_enabled: false
approved_links: 0
claim_support_review_complete: false
release_ready: false
next_gate: RETURN_1E4E2_SHADOW_CALIBRATION_FOR_RULE_REVIEW
```

## 9. Filer og avgrensning

`neuvago-1e4e1-scoped-acceptance-20260913.md/.json` dokumenterer den aksepterte E1-kjøringen. `neuvago-1e4e1-calibration-reproductions-20260913.json` dokumenterer de åtte nye kontrollene, uten å endre E1-resultatet. Reproduksjonsscriptet krever den uendrede opprinnelige E1-pakken og en eksplisitt lokal TypeScript-modul, og endrer kun minnekopier av de innebygde testfilene. Det er ikke et script for retting eller installasjon i Neuvago-repoet.
