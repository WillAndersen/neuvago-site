# 1E.4E.1 — Avgrensning av implementasjonen

Startbaseline: `4c4e65a87163000ee493f264849824f17fdcf8ca`.

## Hva første prototype ikke gjør

Den er ingen generell JavaScript-tolk, React-renderer, global semantic-claim-detektor, medisinsk reviewmotor eller CI-installasjon. Den støtter de avtalte kildefilene og de statiske konstruksjonene som er demonstrert i testene. Ukjente konstruksjoner gis ikke automatisk grønt lys.

På den rene baselinen er de tre Git-representasjonene identiske i filinnhold. Forskjeller mellom index og arbeidstre, full/partiell staging og ferdige nye commits prøves i isolerte Git-repoer. Dette er ikke bevis for en faktisk staged endring i brukerens prosjekt.

En ny versjonsbundet menneskelig review-beslutning kan ikke importeres eller godkjennes her. Endringer i notetekst blir review, og nye koblinger/direkthetsgodkjenninger blir blokkeringskandidater inntil reviewarbeidsflyten er spesifisert senere. Ingen menneskelig sign-off er fabrikkert.

## Kontrollgrunnlag og testfamilier

| Familie | Operativt kontrollgrunnlag | Positive og negative kontroller |
|---|---|---|
| G-ID | 23 avtalte kort, titler, identifikatorer, kilde- og fragmentlenker | Alle kort; merket DOI/lenkealternativ; offentlige kilder; feil PMID/DOI/tittel/URL; dupliserte eller skjulte mål; karanteneidentitet |
| G-REVIEW | Tre registre, uendrede godkjenningslag, separat kildeopptak | Tomme approval-arrays; forsøk på tre typer godkjenningskobling; direkthet, metodeklasse og brede scope-flagg; metadataendring beholdt som review |
| G-SCOPE | Per-kort-tolkning, åtte toppnoter og åtte veiledningsnoter, 27 historiske locks og korreksjonslogg | Korrekt tekst; fjernet/skjult/omskrevet tekst; ny forklaring uten policyord; historikk/karanteneendring |
| G-ROUTES | Elleve sidemoduler og to ordlistedata-eksempler | Dekningsinventar; direkte kildeavsnitt; interne sourceLinks; manglende mål; ukjent komponent eller endret rute synlig som uavklart |
| G-LIFECYCLE | Tre inputfaser; blob- og filfingeravtrykk; read-only før/etter | Ren baseline; index/arbeidstre-splitt; navngitt commit; delvis og full staging; rotaliaser; spesielle filnavn; parser/inputfeil; foreldet rapportbinding |

## Kjente begrensninger til kalibrering i E2

1. Bibliografiske felt sammenholdes med den tidligere aksepterte kortkontrakten, ikke med nye eksterne kilder. Ny kildeidentitet utenfor kontrakten krever review.
2. Tekstlikhet innenfor et kildekort er en teknisk kontraktskontroll, ikke vitenskapelig support. Den gir ingen score for evidenssikkerhet.
3. Full CSS-synlighet, runtime-betingelser, nettverksdata, importer og ukjente komponenter er ikke render-verifisert. Eksplisitt skjuling i støttede konstruksjoner blir fanget; det gis ikke generell visuell godkjenning.
4. De to ordlistedata-eksemplene bekrefter bevarte deklarerte lenker, ikke målinnholdet eller alle ordlisteartikler.
5. Baselinekontrollen er streng ved første reelle kjøring. Selve regelmotoren demonstrerer nye/endrede data i isolerte testtilfeller uten at hele filhashen blir en permanent redigeringssperre.
6. Hele evidensarbeidet, 110 videreførte funn, 38 gjenbruksgrupper, tolv intake-kandidater, ny bruk av seks registeridentiteter og den gamle lokatoren utenfor låst scope står fortsatt åpent som dokumentert av D7.
7. Ingen nåværende produksjonshenting, ny Next.js-build, installasjon, commit eller push inngår. E2 må vurdere falske positive/negative og støttet scope før noen kontroller gjøres blokkerende.

## Dokumentasjon av historisk grunnlag

D7-returpakken med SHA-256 `1f2b8291daa7004cdf8f180967421bc5f85eeabe488ae06b40339832cec0bcc4` er grunnlaget for carry-forward-filene. Kildepakken består av 252 filer med de låste hashene fra den godkjente baselinen. De elleve HTML-fiksturene har hver sin opprinnelige SHA-256 og leveringstid, registrert i egen origin-fil. Originale prosjektregistre er ikke endret.
