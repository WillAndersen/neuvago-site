# NEUVAGO SEARCH DOMINANCE 1E.4E.3
## Controlled Installation & Lifecycle Acceptance — forslag til avgrenset installasjonskontrakt v1

**Status:** Nytt implementeringsforslag etter godkjent E2-observasjonspilot. Ingen installasjonspakke er laget eller kjørt i denne reviewen.  
**Baseline:** `4c4e65a87163000ee493f264849824f17fdcf8ca`.  
**Gjennomgått E2-regelfingeravtrykk:** `29403f0f09e7728e32d0213b6998414842ae6ede02090cfe7cdadbb36f031b48`.  
**Modus:** `SHADOW_REPORT_ONLY`.

E3-etappen viderefører det tidligere planpunktet Controlled Installation & Lifecycle Acceptance. Filplasseringene og installasjonsgrensene nedenfor er nye konkrete forslag, ikke allerede eksisterende funksjoner eller tidligere installert konfigurasjon.

## 1. Målet er et tilgjengelig kontrollverktøy — ikke aktive publiseringssperrer

Flytt den gjennomgåtte regelmotoren, kontrakten, nødvendige kontrollreferanser og testene fra en engangsmappe i Downloads til et versjonert, avgrenset verktøysett i prosjektet. Første leveranse skal kunne kjøres manuelt og produsere rapporter. Den skal ikke installere Git-hooks, aktivere CI, endre Vercel-oppsett eller blokkere publisering.

En installert kommando er ikke det samme som en aktivert gate. Resultatene må ha separate felter for `tooling_installed`, `enforcement_gates_installed`, `ci_installed` og `deployment_blocking_enabled`. Etter en eventuell vellykket første installasjon kan bare det første feltet endres; de øvrige forblir false.

## 2. Lokal installasjon først, commit/push etter separat gjennomgang

Den første kjørbare pakken skal starte fra ren baseline og legge til et eksplisitt, begrenset filsett. Forslag til nye røtter er `scripts/editorial-enforcement/` for kommando, regelkode og tester, og `docs/seo/editorial-enforcement/` for versjonert kontrakt og dokumentasjon. Endelig fil-for-fil-liste og hasher skal vises i implementeringspakken etter lesing av faktisk repo-struktur. Ukjente eksisterende målfiler skal gi stopp, ikke overskriving.

`src/`, de eksisterende registerfilene under `docs/seo/evidence-operations/`, alle historiske kilde-locks og de elleve gjennomgåtte sidene holdes uendret. `package.json`, lockfil, eksisterende workflows og hooks holdes også uendret i den første foreslåtte installasjonen. Kommandoen kan ha eget startscript uten å endre prosjektets pakkescripts.

Lokal kjøring skal ikke stage, committe eller pushe. Returpakken må vise installasjonsdiff, testresultater, faseutfall og bevaringskontroller. Etter separat review kan nøyaktig disse filene stages og committes med en ny kontrollert pakke. Push og eventuell automatisk deployment må vurderes som egne virkninger av en slik senere kjøring.

## 3. Bevar regelatferd; versjoner enhver endring

De fem E2-kalibreringspunktene skal ikke omskrives eller få utvidet omfang i stillhet under flyttingen. De 43 objektbundne kontrolltilfellene og de åtte E1/E2-sammenligningene skal fortsatt dokumentere samme avgrensede atferd.

Filer som inngår i regelfingeravtrykket kan få andre stier eller importgrenser ved installasjon. Da må et nytt korrekt fingeravtrykk beregnes og knyttes til den aksepterte E2-versjonen. Det gamle regelfingeravtrykket kan bare beholdes hvis de faktisk hashede bytes og kontrakten fortsatt er identiske. Atferdssamsvar og byteidentitet er to forskjellige kontroller.

Godkjenning av E2 betyr ikke at alle nye regler er godkjent, eller at enhver TypeScript-konstruksjon støttes. Ukjente uttrykk, importsammenheng, CSS og runtime må fortsatt ha eksplisitt dekning og uavklart status.

## 4. Skill kildebaseline fra installasjonscommit

Verktøyet må holde fire identiteter fra hverandre: den aksepterte kildebaselinen, verktøy-/kontraktversjonen, repoets faktiske HEAD og det valgte inputet (arbeidstre, index eller navngitt commit).

En commit som bare installerer kontrollverktøyet vil naturlig få en ny HEAD. Det må ikke utløse den tidligere feilen der en korrekt postcommit-tilstand ble kontrollert mot en precommit-HEAD. Samtidig kan verktøyet ikke automatisk bytte forventet kildebaseline til dagens HEAD for å få grønt resultat.

Testene skal vise at uendrede kilder før og etter en tooling-only commit gir samme faglig avgrensede regelobservasjoner, men nye og korrekte fase-/commitbindinger. Nye verktøyfiler skal klassifiseres eksplisitt i endringsinventaret, ikke gjemmes av en bred ignore-regel.

## 5. Rapportering og stopptyper

Resultatmodellen beholdes: PASS_TECHNICAL_SCOPE, WOULD_BLOCK, REVIEW_REQUIRED, NOT_EVALUATED og OPERATIONAL_ERROR. En komplett observasjonsrapport kan inneholde WOULD_BLOCK eller REVIEW_REQUIRED uten at en publiseringssperre er aktiv.

Et verktøy som ikke får lest eller tolket input, kan ikke melde at kontrollen er fullført. Operasjonsfeil skal gi egen feilstatus og brukbar returpakke. Ustøttet input skal være synlig som uavklart og ikke forveksles med enten godkjenning eller et sikkert innholdsbrudd.

Ingen mekanisme for automatisk faglig godkjenning, registeropptak eller uverifisert review-signatur inngår. En fremtidig modell for autoriserte review-beslutninger må spesifiseres separat. De eksisterende 23 kildebrukene, elleve rutekoblingene og øvrige D7-reviewspor skal ikke tømmes for å få færre varsler.

## 6. Krav til lokal leveranse og tester

Testene skal kjøres både på pakkeinnholdet og gjennom den faktisk installerte inngangen i et isolert repo. De skal dekke urørt baseline, lokale endringer, staged/ustaged forskjeller, navngitt commit, en installasjonscommit uten innholdsendringer, ukjente filer, stialiaser, parserfeil og manglende data.

Tidligere testsett beholdes, og gjentatte kjøringer skal telles ærlig. De 43 E2-tilfellene må fortsatt treffe rett regel, objekt, felt og fase. Legitime formatendringer, offentlige kilder uten forsknings-ID-er og dokumenterte kilder utenfor registeret skal ikke bli feilklassifisert ved flyttingen.

Første installasjon krever fil-for-fil-allowlist, preflight før første skriving, ingen overskriving av ukjente filer, sikker håndtering av delvis feil og gjenkjøring uten omskriving av gjenkjent tilstand. Rapporter skal ligge utenfor repoet. Hemmeligheter, miljøfiler og private brukerdata skal ikke samles inn i returpakken.

Ingen nettbibliografi, produksjonscrawl, ny artikkelbatch eller registerregenerering inngår. Full Next.js-build er ikke automatisk et krav for et rent, isolert Python/Node-kontrollverktøy; den faktiske installasjonsdiffen må avgjøre relevante non-regression-kontroller, og ingen build skal feilaktig rapporteres som kjørt.

## 7. Akseptanse før senere publiseringssteg

Lokal review skal bekrefte nøyaktig nytt filsett, uendrede beskyttede kilder og registre, faktisk compiler-versjon, fasebindinger, bevaring av E2-regelatferd og eksplisitte resterende begrensninger. En grønn testbaseline er nødvendig, men ikke dokumentasjon av full kilde-/claim-korrekthet.

Først etter denne gjennomgangen kan den konkrete installasjonen få egen commit/push. Aktivering av CI, hooks eller blokkerende publiseringsregler krever et annet uttrykkelig vedtak med eget regelutvalg, håndtering av uavklart input, ansvar og tilbakeføringsplan. Dette dokumentet gir ikke den aktiveringen.

**Foreslått neste returpunkt:** `RETURN_1E4E3_LOCAL_SHADOW_INSTALL_FOR_LIFECYCLE_REVIEW`.

Dette er dokumentasjon og gjennomføringsgrunnlag. Ingen ny kommando skal kjøres i brukerens repo på grunnlag av dette notatet alene.
