# NEUVAGO SEARCH DOMINANCE 1E.4E.2
## Pilot Review & Gate Calibration — implementert observasjonspilot v1

**Startbaseline:** `4c4e65a87163000ee493f264849824f17fdcf8ca`.
**Modus:** `SHADOW_REPORT_ONLY`. Ingen installasjon eller publiseringsblokkering.

Dette er implementering av de fem kalibreringspunktene i den separate E2-kontrakten. Originalkontrakten og den opprinnelige E1-pakken er bevart som uendrede referanser. Endringene er i kjørepakken utenfor repoet, ikke i Neuvagos sider, registre, historiske locks, CI eller Git-konfigurasjon.

## CAL-01 — faktisk kildeidentitet, ikke bare intern ID

`registry_checks.py` vurderer lokale evidence-ID-er, normaliserte PMID-er/DOI-er og identifikatorer i kildelenken. Den sammenholder med kjente, gjennomgåtte identitetspar og med **original_record** i historiske karanteneposter. En annen lokal ID gjør ikke en karanteneført kilde aktiv igjen. Identiske PMID-er eller DOI-er på flere aktive poster blir rapportert på de berørte post-ID-ene.

Normaliseringen begrenser seg til eksplisitte representasjoner: eksempelvis DOI-prefiks og store/små bokstaver. Ingen eksterne oppslag, nye ekvivalensrelasjoner eller sammenslåinger utføres. En gyldig kildeidentitet sier ikke noe om faglig claim-støtte. Baselinens 172 aktive poster får hver sin kontrollobservasjon.

## CAL-02 — nye og eksisterende poster

Primærsamlingene sammenholdes etter stabile **claim_id/evidence_id**, ikke listeposisjon. Omordning kan fortsatt være en generell registerendring som krever review, men skal ikke forveksles med at én post har arvet en annen posts godkjenning.

De definerte godkjenningsarrayene, status-/direkthetsfeltene, metodeklassene og brede godkjenningsflaggene kontrolleres også på **nye** poster. Uautoriserte forhåndsgodkjenninger blir `WOULD_BLOCK`. En ny post med pending-status får `REVIEW_REQUIRED`, uten opptak, skriving eller godkjenning. Ukjente metadataendringer er fortsatt review-spørsmål. Dette er ikke en universell semantisk klassifikator for alle tenkelige nye feltnavn eller medisinske påstander.

## CAL-03 — uavklart kontrollflyt

Den statiske TypeScript-leseren godtar den eksisterende rettlinjede komponentformen med én avsluttende direkte JSX-return og den kjente, opake structured-data-initialiseringen. Sistnevnte utføres ikke. Den er ikke en vurdering av metadatafunksjonens runtime-oppførsel.

Tidlig retur i `if`, løkker, `try`, `throw`, ukjente uttrykkssetninger, mutable lokale deklarasjoner og andre opake initialiseringer gir **NOT_EVALUATED med kodelokator**. Kildefilen forsvinner ikke fra dekningsrapporten, og kildekortene i denne komponenten får ikke et villedende teknisk PASS.

Dette er bevisst begrenset statisk støtte, ikke en full JavaScript-tolk. Importer, ekstern CSS, responsive regler, browserlayout og produksjonstilstand blir ikke verifisert.

## CAL-04 — eksplisitte bibliografiske visningsfelt

Den nye sidecar-kontrakten `reference/display-fields-v1.json` inneholder **23 per-kort-visningskontrakter**, forankret i de aksepterte kildefilenes hasher. H3-tittelen og headerens type/dato kontrolleres i sine egne felt. Forfatter/publikasjon kontrolleres som en eksakt, navngitt **byline-visningsgruppe**, ikke som delstrenger hvor som helst i kortteksten.

Dermed kan ikke «Wrong Author ... Previously McCorry LK» tilfredsstille det opprinnelige forfatterfeltet. Gruppekontrollen angir at bylinen er motstridende; den hevder ikke alltid hvilket del-felt som alene er feil. Godkjente forkortede forfatternavn, institusjonsnavn og per-kort-punktsetting beholdes. Uklar feltavgrensning blir `NOT_EVALUATED` fremfor en gjetning.

## CAL-05 — samme scope fordelt på flere avsnitt

Innenfor det **samme kildekortet** brukes den eksplisitte visningsgrammatikken header → tittel → byline → sammenhengende scope-avsnitt → identifikatorer/lenke. Uendret ordlyd fordelt på tilstøtende avsnitt kan bestå teknisk. Den endrede kildefilen fremgår fortsatt av endringsinventaret og får vanlig review-status.

Fjernet, tom eller eksplisitt skjult scope gir `WOULD_BLOCK`. Ny eller utvidet ordlyd gir `REVIEW_REQUIRED`. En ukjent innpakning gir `NOT_EVALUATED`. Tekst fra andre kort, kommentarer, script eller usikre strukturer lånes ikke inn for å produsere et kunstig samsvar. Ordlydsnormalisering er ikke medisinsk semantikkgodkjenning.

## Sammenligning og testbevis

Den uendrede E1-pakken ligger som original ZIP i referansemappen, med kjent SHA-256. Den pakkes ut i en isolert, eid tempmappe utenfor brukerrepoet. De gamle testene kjøres uendret. Det opprinnelige åtte-casers reproduksjonsscriptet kjøres deretter **mot både E1 og E2 med samme lokale TypeScript-modul og identiske muterte filbytes**. Resultatene beholder regelutfallene og bindes til riktig kort/post/felt/fase.

E2-regresjonene beholder de 90 gamle testtilfellene, men oppdaterer de to baselinetellingene til de ekstra identitetsobservasjonene og presiserer målobjektet i feilmatrisen. Nye E2-tester dekker de 13 akseptansekravene i kontrakten, inkludert en faktisk isolert Git-test med feil i index, riktige arbeidstrefiler og separat navngitt commit. Ingen feil injiseres i brukerrepoet.

Den nye baselineforventningen er **536 PASS_TECHNICAL_SCOPE og 34 REVIEW_REQUIRED per fase**: 172 flere tekniske identitetskontroller, ikke 172 nye vitenskapelig godkjente påstander. De 34 review-postene har samme betydning som før. Historiske HTML-fiksturer er historiske kontroller, ikke ny rendering eller produksjonshenting.

Se QA-rapporten for faktisk utførte tester og compiler-versjon. Utviklingsmiljøets TypeScript 5.8.3 er ikke brukerens dokumenterte 5.9.3. Brukerkjøringen benytter prosjektets allerede installerte modul og dokumenterer versjon og hash på nytt. Ingen compiler eller avhengighet installeres av pakken.

## Videreført arbeid og neste gate

Alle D7-handoff-filer kopieres uendret til returpakken. Tolv intake-kandidater, 110 tidligere findings, 117 policyer, 19 kandidatreferanser, elleve manglende eksplisitte rutekoblinger, 38 gjenbruksgrupper og én lokator utenfor filutvalget forblir separate review-spor. Offentlig kildevisning er ikke automatisk registermedlemskap eller claim-støtte.

`approved_links: 0`, `enforcement_gates_installed: false`, `ci_installed: false`, `deployment_blocking_enabled: false`, `release_ready: false` og de brede faglige scope-flaggene bevares.

**Neste gate:** `RETURN_1E4E2_SHADOW_CALIBRATION_FOR_RULE_REVIEW`.

En komplett rapport betyr at observasjonene er produsert, ikke at enhver regel består eller at aktivering er godkjent. E3-installering og eventuell blokkering krever eget vedtak etter den faktiske E2-kjøringen.
