# NEUVAGO SEARCH DOMINANCE 1E.4E.2
## Avgrenset godkjenning av kalibrert observasjonspilot

**Vedtak:** Godkjent innsamling og dokumentert kalibrering av det definerte tekniske E2-omfanget. Grunnlag for kontrollert installasjonsdesign i observasjonsmodus; ikke godkjenning av publiseringsblokkering.

**Dato:** 13. september 2026.  
**Uendret baseline:** `4c4e65a87163000ee493f264849824f17fdcf8ca`.  
**Regelfingeravtrykk:** `29403f0f09e7728e32d0213b6998414842ae6ede02090cfe7cdadbb36f031b48`.

Dette er et nytt dokumentert review-vedtak basert på innsendte filer. Det endrer ikke originalrapportene, brukerens repo, Git, registrene eller E2-pakken. Det bekrefter ikke at motoren er feilfri for vilkårlige fremtidige input.

## 1. Inndata og integritet

Returpakken er `neuvago-1e4e2-shadow-20260913T212850Z-1yo3ib2o-share.zip`, SHA-256 `229f953cbb8d2609b6e52e8435dc2b8144b94e9a8e7fd6640916544d486c82ba`.

Kjørepakken er `neuvago-search-dominance-1e4e2-pilot-review-gate-calibration-v1.zip`, SHA-256 `e86d1ae7672f5891314dc646ca47b7dc05ed3c2a608d273de61863ef9ecb601a`.

Begge kontrollsummer og ZIP-CRC er verifisert. Alle **36 oppføringer i returmanifestet** og **41 i kjørepakkens manifest** matcher. Det er ingen ekstra filoppføringer utenfor manifestene, bortsett fra manifestene selv.

Alle 252 låste kilde-, register- og kontrollfiler er hashet på nytt fra pakkens testkopier og sammenholdt med faktiske filbytes i tidligere returarkiver. Hver fil har et dokumentert arkiv-/medlemsopphav i den separate verifikasjonsrapporten. De fire leveransecommittene, parentverdiene og filsettene er sammenholdt med sine opprinnelige sluttpakker.

## 2. Faser og bevaring

Repo- og Git-kontrollrapportene før, etter og ved avslutning er byte-identiske. De to remote-rapportene er også byte-identiske. De rapporterer ren arbeidsmappe og samme `HEAD`, `origin/main` og remote `main` på den uendrede baselinen.

For hver av de tre fasene er de 252 filhashene, tilhørende Git-blob-ID-er og hele det serialiserte fasefingeravtrykket beregnet på nytt. Regelfingeravtrykket er beregnet fra de elleve navngitte regel-/kontraktfilene. Hver kontrollobservasjon er sammenholdt med riktig fil-/snapshotfingeravtrykk, regelfingeravtrykk, compiler-hash og fase.

| Fase | PASS_TECHNICAL_SCOPE | REVIEW_REQUIRED | WOULD_BLOCK | OPERATIONAL_ERROR |
|---|---:|---:|---:|---:|
| Arbeidstre | 536 | 34 | 0 | 0 |
| Index | 536 | 34 | 0 | 0 |
| Navngitt commit | 536 | 34 | 0 | 0 |

Kontrollobservasjonene samsvarer mellom fasene når de forventede fasebindingene holdes utenfor. Git-fasenes egne fingeravtrykk skal være forskjellige. Det er ikke gjennomført direkte lesing av brukerens Git-objektdatabase, rekonstruksjon av hele Git-treet eller ny remote-lesing her.

## 3. Faktisk compiler og testbevis

Returen dokumenterer **Darwin, Python 3.13.2 og TypeScript 5.9.3**, med TypeScript-modulhash `3ae902c92cc44dace175c0e69e13a4b0899f6983c6121d76b9ab8dd5795e7675`.

Loggene dokumenterer **90 + 90 + 57 = 237 beståtte testkjøringer**: original E1-suite, videreført suite mot E2 og E2-spesifikke tester. Alle individuelle `ok`-linjer og avsluttende totalsummer er kontrollert. De 90 testene kjørt mot hver motor er ikke 180 forskjellige nye testdesign.

De **43 E2-demonstrasjonene** er verifisert mot forventet regel-ID, fil, kort eller registerpost, eventuelt felt og inputfase. De fordeler seg på 20 forventede WOULD_BLOCK, elleve PASS_TECHNICAL_SCOPE, ni NOT_EVALUATED og tre REVIEW_REQUIRED. Alle **45 videreførte kontrolltilfeller** har også riktig navngitt mål og forventet resultat.

Alle **13 akseptansekrav** er knyttet til konkret testbevis. Tolv krav vises i demonstrasjonsmatrisen. Git-fasekravet `E2-LIFE-1` dokumenteres separat i den beståtte `RealPhaseCalibrationTests`-testen med riktig arbeidstre, feil i index og en separat navngitt commit. Det skal ikke feilaktig telles som et av de 43 minnetilfellene.

Pakkens tester og regelmotor er **ikke kjørt på nytt i denne reviewen**. Arbeidet her er selvstendige fil-, hash-, målbindings- og rapportkontroller samt lesing av de relevante kontrollfunksjonene. Det er ingen ny compile-/runtime-/produksjonskontroll.

## 4. E1 og E2 på samme prøveinput

De åtte sammenligningstilfellene er kontrollert mot begge rå sammenligningsfiler, ikke bare sammenligningsrapportens boolske felt. De muterte filhashene er identiske mellom E1 og E2. Begge motorenes målobservasjoner bruker den samme returnerte TypeScript-modulhashen. Den innebygde original-E1-ZIP-en er byte-identisk med den opprinnelige leveransen.

| Kontrolltilfelle | E1, avgrenset målregel | E2, riktig målregel/objekt |
|---|---|---|
| Uendret baseline | Teknisk PASS | Teknisk PASS |
| Feil PubMed-lenke | WOULD_BLOCK på feil kort | Samme feil kort gir WOULD_BLOCK |
| Tidlig betinget retur | Senere markup får teknisk PASS | NOT_EVALUATED for berørt komponent |
| Motstridende forfatter med gammelt navn beholdt i teksten | Teknisk PASS | WOULD_BLOCK på riktig korts byline/forfatterkontroll |
| Ny post med oppgradert directness | Teknisk PASS i promoteringsregelen | WOULD_BLOCK på den nye postens directness-felt |
| Karanteneidentitet med ny intern ID | Teknisk PASS i gammel identitetskontroll | WOULD_BLOCK på den reintroduserte kildeidentiteten |
| Duplikat-PMID med ny intern ID | Teknisk PASS i gammel identitetskontroll | WOULD_BLOCK på duplikatposten |
| Uendret scope fordelt på to avsnitt | Scope-review | Scope består; den generelle filendringen er fortsatt review |

Denne tabellen gjelder spesifikke regler og input, ikke generell publiseringstillatelse. Allerede i E1 ga endrede filer et generelt review-varsel og den ordinære CLI-en krevde eksakt baseline. E2-resultatet dokumenterer bedre presisjon på de avtalte tilfellene.

## 5. Dekning og videreført faglig arbeid

De 34 review-observasjonene per fase består av **23 kildebruk** og **elleve åpne eksplisitte policy-/rutekoblinger**. De gjentas per fase og er ikke 102 forskjellige problemer.

De 536 tekniske PASS er regelobservasjoner, ikke vitenskapelige påstander. 172 av dem er de nye per-post-kontrollene av kanonisk evidensidentitet. De øvrige kontrollene gjelder blant annet visningsfelt, kildekort, lenker, noter, historikk og fasebinding.

Dekningsrapporten har 654 oppføringer: elleve avtalte sider, to særskilte ordlistedata-eksempler og **641 NOT_EVALUATED-oppføringer**. Disse representerer ikke 641 dokumenterte feil eller 641 publiserte sider. Ingen av dem får bred semantisk godkjenning av kalibreringen. CSS, importsammenheng, runtime, faktisk skjermvisning og faglig claim-støtte står utenfor.

De seks videreførte D7-dokumentene er byte-identiske med både pakkens referanser og den opprinnelige D7-returen. Tolv opptakskandidater, 110 tidligere review-poster, 19 strukturelle kandidatreferanser, 38 tekstgjenbruksgrupper, den ene lokatoren utenfor låst scope, tre NHS-adresser og den kjente reading-guidance-advarselen videreføres som separate oppgaver.

Registertallene er telt på nytt fra de bevarte filene: **117 claim-policyer, 172 aktive evidensposter, to historiske karanteneposter, 27 kilde-locks og null godkjente koblinger**.

De elleve historiske HTML-fiksturene matcher sine opprinnelige produksjonssvar byte-for-byte. Dette er historiske kontrollinput, ikke nye produksjonssvar eller ny ekstern medisinsk kildeverifisering.

## 6. Vedtak og neste steg

E2 aksepteres som **kalibrert observasjonspilot innenfor den dokumenterte kontrakten**. Ingen ny E2-recovery eller gjentatt baselinekjøring er nødvendig ut fra denne returen. Ingen ukjent generell korrekthet, fullsite-dekning eller blokkerende aktivering godkjennes.

Følgende beholdes: `approved_links: 0`, `enforcement_gates_installed: false`, `ci_installed: false`, `deployment_blocking_enabled: false`, `rule_engine_ready_for_blocking_activation: false`, `claim_support_review_complete: false`, `release_ready: false` og de øvrige brede begrensningsflaggene.

**Neste foreslåtte leveranse er 1E.4E.3 – Controlled Installation & Lifecycle Acceptance**, først som en lokal installasjon av et eksplisitt verktøy-/kontraktsett i observasjonsmodus. Artikkel- og registerfiler skal forbli urørt. Lokal gjennomgang kommer før en egen commit-/push-etappe. Aktivering av CI, hooks eller blokkering er ikke en del av dette vedtaket.

Den separate E3-kontrakten konkretiserer installasjonsgrensen. Den er et nytt designartefakt, ikke en kjørbar installasjon eller en påstand om at en installasjon allerede er utført.

## 7. Sporbarhet

I E2-returen er de sentrale filene `RESULT.json`, `REPORT-MANIFEST.sha256`, `audit/`, `phases/`, `coverage/`, `checks/`, `calibration-demonstrations.json`, `calibration-acceptance-map.json`, `e1-e2-comparison.json`, de to rå filene under `comparison/`, `fault-demonstrations.json`, `historical-html-controls.json` og `carry-forward/`.

Den maskinlesbare godkjenningen inneholder kontrakt-/regelhash, compilerbinding, avstemminger, kildefilhashene og avgrensningene. `independent-verification.json` og `verify_e2_return.py` i reviewpakken dokumenterer de selvstendige kontrollene; scriptet er et reviewverktøy for disse arkivene, ikke en kommando som skal kjøres mot brukerens repo.
