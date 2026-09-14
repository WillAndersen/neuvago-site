# NEUVAGO SEARCH DOMINANCE 1E.4E.1
## Editorial Enforcement Contract & Shadow Pilot — designforslag v1

**Dato:** 13. september 2026.  
**Status:** Forslag til implementeringskontrakt. Ikke implementert, kjørt eller aktivert.  
**Startbaseline:** `4c4e65a87163000ee493f264849824f17fdcf8ca`.

Dette er et nytt designforslag etter den godkjente D7-konsolideringen. De fem regelfamiliene og de sju faglige review-sporene er hentet fra `editorial-enforcement-handoff.json` i returpakken. Valget av observasjonsmodus, resultatmodell, testopplegg og delsteg nedenfor er nye anbefalinger, ikke tidligere installerte funksjoner eller et tidligere låst detaljforløp.

Ingen ekstern standard, ny bibliotekversjon eller medisinsk vurdering er brukt som grunnlag for dette forslaget. Det bygger på prosjektets returnerte filer og feiltilfeller som handoffen uttrykkelig viderefører.

## 1. Mål

Neste pilot skal prøve ut kontroller som hindrer at allerede gjennomgått kildesporbarhet svekkes ved senere redigering. Den skal ikke late som syntakskontroll, kildeidentitet eller tekstlikhet avgjør vitenskapelig støtte.

**Start med observasjonsmodus (shadow mode):** kontroller og rapporter hva som ville gitt stopp; ikke installer CI, Git-hooks, publiseringssperrer eller nye godkjenninger i første kjøring. Rapportene skal ligge utenfor repoet. Ingen artikkelbatch eller registerregenerering inngår.

## 2. Seks adskilte informasjonslag

1. **Kildeidentitet:** PMID/DOI eller offisiell URL/publikasjon; bibliografiske data, verifikasjonsgrunnlag og kildetype.
2. **Bruk på side/kort:** hvilken rute, hvilket kort, hvilken tolkningsgrense og hvilken konkret kildehenvisning. Flere brukssteder er ikke én felles scope-tekst.
3. **Claim-policy:** den eksisterende policyens ID, formulering, risikonivå og begrensninger.
4. **Rutegjeldende regel:** eksplisitt applicability og sidetype. En policy-owner er ikke automatisk alle sider med lignende ord.
5. **Review-beslutning:** hva som faktisk er vurdert, av hvem/med hvilken rolle når dette er reelt dokumentert, og hvilke tekst-/kildeversjoner beslutningen gjelder. Ingen oppdiktet menneskelig sign-off.
6. **Teknisk kontrollobservasjon:** regel-ID, inputfase, tree/blob-/filfingeravtrykk, teknisk resultat og gjenværende uavklart scope.

Første pilot skal ikke omskrive de eksisterende registrene til denne modellen. Den kan bruke en separat kontrakt/sidecar og rapportere manglende forbindelser. De 117 claim-policyene, 172 evidenspostene, to karantenepostene og alle 27 historiske locks forblir uendret.

## 3. Fem regelfamilier fra overleveringen

### G-ID — Kildeidentitet i riktig kort

**Kontrollgrunnlag:** Unik kort-ID og eksplisitt kildekortavgrensning. Tittel, kildelenke og oppgitte identifikatorer sammenholdes innenfor samme kort, ikke innenfor et vilkårlig linjevindu. Merket DOI-tekst og DOI-lenke behandles som to gyldige presentasjoner. Offentlig veiledning eller klassifikasjon krever ikke PMID/DOI. Viste kilder utenfor aktivt register holdes som dokumenterte intake-kandidater.

**Ville gi teknisk stopp:** Bytte av PMID/DOI mellom to kort med ulike identiteter. Manglende kortmål for en avtalt innledende henvisning. Bruk av karanteneidentitet som aktiv kilde uten kontrollert rettingsvedtak. Konstruerte forskningsidentifikatorer på et offentlig kildekort.

**Krever review, ikke automatisk konklusjon:** Ny kilde uten identitetsreview. Identitetsfelt som ikke kan bestemmes fra den valgte inputrepresentasjonen.

**Avgrensning:** En gyldig DOI eller PMID beviser ikke at kilden støtter en påstand. En kildelenke alene beviser ikke full bibliografisk riktighet.

### G-REVIEW — Skill identitet, bruk og faglig godkjenning

**Kontrollgrunnlag:** Registermedlemskap, kildebruk på side, metodeklasse, direkthet og claim-støtte har separate felter. Eksisterende review-ID-er og uavklarte statuser beholdes. Det er ingen automatisk overgang fra kandidat til godkjent støtte.

**Ville gi teknisk stopp:** Nye evidence_ids/claim_ids/approved_evidence_ids uten konkret review-beslutning knyttet til eksakt claim-, kilde- og tekstversjon. Metodeklasse brukes som evidenssikkerhet eller produktsupport. Bredere scope-flagg settes sant på grunnlag av teknisk PASS alene.

**Krever review, ikke automatisk konklusjon:** De tolv intake-kandidatene. De seks eksisterende registeridentitetenes nye bruk på sider. De 19 kandidatreferansenes konkrete faglige relevans.

**Avgrensning:** Alle 117 policyer er ikke nødvendigvis effektpåstander som trenger samme bevisformat. Tom kildepool er ikke bevis for fravær av evidens.

### G-SCOPE — Bevar gjennomgåtte grenser og historikk

**Kontrollgrunnlag:** For hver avtalt note beholdes identitet, tekstreferanse og kilde-/rutekontekst. Historiske locks, karanteneposter og korreksjonsbeslutninger endres ikke i stillhet. Tekstendringer utenfor kildekort må også fremgå av endringsinventaret.

**Ville gi teknisk stopp:** Fjerning eller skjuling av avtalt tolkningsgrense eller veiledningsnote uten ny versjonsbundet review. Omskriving av historisk kilde-lock eller sletting av karantenehistorikk som om feil aldri eksisterte.

**Krever review, ikke automatisk konklusjon:** Legitime omformuleringer av grenser: ny tekst kan godkjennes, men ikke usynlig arve gammel tekstgodkjenning. Endringer i nye forklaringsavsnitt med uklar policytilknytning.

**Avgrensning:** Hele sidens uendrede hash er en innledende baselinekontroll, ikke en permanent regel som forbyr all redigering.

### G-ROUTES — Regler etter eksplisitt sidetype og kartlagt scope

**Kontrollgrunnlag:** Ordlistens sourceLinks skilles fra research-navigasjon og fra direkte bibliografiske kildekort. Learn, Conditions, offentlige veiledninger og andre sidetyper har eksplisitte forskjellige profiler. Importert kilde identifisert i kode er ikke automatisk knyttet til rendret rute. Alle endrede filer og berørte ruter oppgis, også utenfor pilotens supported set.

**Ville gi teknisk stopp:** En kontroll gir overordnet grønt lys ved å utelate en avtalt målfil eller rute. En kjent kildehenvisning brytes i deklarert pilot-scope.

**Krever review, ikke automatisk konklusjon:** Ingen eksplisitte policykoblinger for de elleve leverte sidene. Uklar sidetype, dynamisk rendering eller delt import med uavklart rutetilknytning. De 110 videreførte review-postene vurderes etter gruppe og formål, ikke som universelle releaseblokkere.

**Avgrensning:** 223 rutekandidater er ikke attestert antall publiserte sider. To ordlisteeksempler godkjenner ikke alle 74 ordlisteposter.

### G-LIFECYCLE — Fasekorrekt kontroll og låsing av kontrollresultatet

**Kontrollgrunnlag:** Arbeidstreet, staged/index og navngitt commit valideres som forskjellige tilstander. Staged-kontrollen leser staged blobs, ikke potensielt annerledes arbeidstre. Resultatet knyttes til eksakt kontrollert tree/blob, kontraktversjon, regler og fase. Repo-rotaliaser og statusbaner håndteres uten tap av whitespace. Innsamling og rapportering endrer ikke brukerens repo eller Git-refs.

**Ville gi teknisk stopp:** Feil baseline, delvis/ukjent staging eller endringer etter validert snapshot ved en fremtidig aktiveringsgate. Precommit-forventet HEAD brukes ukritisk etter commit. Ugyldig input, parserfeil eller fil som ikke kan leses presenteres som PASS.

**Krever review, ikke automatisk konklusjon:** Uventet ny commit: ny kontroll fra riktig snapshot, ingen reset. Målet er utenfor valgt fase eller delt renderer uten tilstrekkelig datagrunnlag.

**Avgrensning:** Publisert HTML er ikke i seg selv deploy-ID/commit-attestasjon. Bestått baselinekjøring dokumenterer ikke at negative tester ville oppdage feil.

## 4. Resultatmodellen må skille kontroll fra publisering

| Observasjon | Betydning i første pilot |
|---|---|
| `PASS_TECHNICAL_SCOPE` | Den navngitte regelen består for det navngitte inputet. Ingen bred claim-godkjenning følger med. |
| `WOULD_BLOCK` | Et teknisk kontraktsbrudd som ville stoppet en senere aktiv gate. I observasjonsmodus skrives bare rapport. |
| `REVIEW_REQUIRED` | Det foreligger et faglig, redaksjonelt eller mappingrelatert spørsmål. Ikke oppgrader til støtte eller til bekreftet feil. |
| `NOT_EVALUATED` | Input ligger utenfor støttet scope eller kan ikke knyttes sikkert til kontrollmålet. Det må være synlig i dekningstabellen. |
| `OPERATIONAL_ERROR` | Parser, inputlesing eller annen teknisk operasjon feiler. Kjøringen skal ikke få et falskt PASS. |

Skillet mellom om rapporteringen lyktes og om hver kontroll bestod er eksplisitt. En ferdig rapport kan inneholde `WOULD_BLOCK` og `REVIEW_REQUIRED`. `release_ready` og faglige godkjenningsflagg forblir false.

Hvert funn må minst oppgi regel-ID, fase, fil-/kort-/rutereferanse, inputfingeravtrykk, kontraktversjon, kildetype, resultat, begrunnelse og eventuelt review-grunnlag. Dekningsrapporten skal også inneholde filer/ruter som ikke ble vurdert. Uavklarte importer, skjult/script-basert innhold eller uleselige filer skal ikke omtales som "ingen kilder".

## 5. Unngå at første gate stopper alt eller godkjenner alt

Det finnes allerede godkjente kildehenvisningsleveranser som bruker tolv dokumenterte kandidatkilder utenfor aktivt evidensregister. Første pilot må godta denne **sporbarheten som baseline**, samtidig som registeropptak og claim-støtte forblir review-spørsmål. Den må ikke kreve at alle publikasjoner umiddelbart auto-importeres for å gi teknisk grønt.

De 110 videreførte review-postene blir ikke automatisk 110 blokkerende releasefeil. Omvendt kan nye eller endrede claims ikke få automatisk PASS bare fordi de ikke ligner de 117 policytekstene. De må oppgis i endringsinventaret og få riktig kartleggings-/review-status.

Hele filhashen brukes for å bekrefte det historiske startpunktet. Den er ikke en permanent redaksjonell regel om at sidene aldri kan endres. En ny, legitim formulering kan få en ny versjonsbundet review; gammel godkjenning skal ikke brukes som støtte for en ukontrollert ny formulering.

## 6. Konkret testgrunnlag

Positive kontroller skal omfatte de elleve gjennomgåtte sidefilene og 23 kildekortforekomster. Offentlige kilder uten PMID/DOI, DOI som merket tekst, interne ordlistekilder og gyldige avgrensningstekster må ikke gi falske kildefeil.

Negative kontroller opprettes **bare i isolerte testkopier**. De skal blant annet bytte PMID/DOI mellom kort, bryte fragmentmål, fjerne/endre/skjule veiledning eller tolkningsgrenser, forsøke å fylle godkjenningsfelt uten review, endre historiske locks og bruke en karantenepost som aktiv støtte.

Git-tilstandene prøves separat: urørt baseline, lokale endringer, full staging, delvis staging, ulike staged/unstaged bytes og navngitt ferdig commit. Symbolske rotaliaser, filnavn med whitespace, ukjente endringer, parserfeil og gjenopptak skal inngå. Resultatene må knyttes til riktig snapshot, ikke være gyldige på ubestemt tid etter at filene er endret.

En grønn baseline alene er utilstrekkelig. Hver implementert regel må ha tester som viser at relevante feil blir oppdaget, og at riktige tilfeller ikke feilaktig blokkeres. Den fremtidige faktiske Neuvago-kjøringen dokumenteres separat fra syntetiske tester. Dette designet har ingen utførte tester eller påstått testantall.

## 7. Review-spor som videreføres uendret

| Spor fra D7 | Innhold |
|---|---|
| `R-INTAKE` | Tolv kandidatidentiteter: åtte publikasjoner og fire offentlige kilder. Egne scope-noter per bruk. |
| `R-PROVENANCE` | Seks allerede registrerte identiteter brukt på nye sider; dette er ikke automatisk claim-støtte. |
| `R-CLAIMS` | 117 policy-rader; 19 strukturelle kandidatreferanser, med konkret studiedirekthet og formulering som åpent arbeid. |
| `R-WORDING` | Fire kontekstuelle treff, blant annet "slow or paced breathing" og "humming or vocal tasks". |
| `R-OUTSIDE` | 74 ordlisteposter, én annen-kildetype-post, tre importtilfeller og 28 formålsavhengige poster. |
| `R-DUPLICATION` | 38 klassifiserte gjenbruksgrupper. Semantisk drift og eierskap til søkeintensjoner er ikke løst ved tekstenes likhet. |
| `R-OPS` | Den kjente reading-guidance-advarselen, visuell kontroll og deploy-attestasjon må håndteres separat. |

Den ene gamle lokatoren utenfor det låste filutvalget og håndteringen av tre NHS-veiledningsadresser følger også med som åpne begrensninger. De endres eller lukkes ikke som en bieffekt av regelimplementeringen.

## 8. Foreslått etappeinndeling

**1E.4E.1 — Contract & Shadow Pilot.** Lag en skrivebeskyttet prototype med eksplisitt avgrensning, positive/negative testtilfeller og rapportering uten installasjon i repoet. Første reelle kjøring fra den uendrede baselinen skal returnere regelutfall, kartleggingshull og demonstrerte feildeteksjoner. Eventuelle observerte brudd rapporteres uten reparasjon.

**1E.4E.2 — Pilot Review & Gate Calibration.** Vurder resultatene og falske positive/negative tilfeller. Lås hvilke tekniske invariants som faktisk kan gjøres blokkerende, og hvilke punkter som må forbli review-only. Ikke utvid dekningen fra elleve sider til hele nettstedet uten passende observasjoner.

**1E.4E.3 — Controlled Installation & Lifecycle Acceptance.** Først etter en separat review: eksplisitt infrastrukturdiff, ny lokal kjøring, kontrollert commit og eventuell CI-integrasjon. Aktivering av publiseringsblokkering er en særskilt beslutning. Denne specen utfører ikke installasjonen og antar ikke at CI-konfigurasjonen er gjennomgått.

Delstegnavnene over er **nye forslag i denne designen**, ikke en påstand om tidligere låst detaljplan. Opptak av kilder og vitenskapelig claim-vurdering er parallelle review-spor, ikke skjulte sideeffekter av E.1–E.3.

## 9. Akseptanse for den fremtidige første kjøringen

Utgangspunkt og alle beskyttede data må være bevart. Alle fem regelfamilier skal ha eksplisitt teknisk scope, og implementerte regler skal dokumentere både positive og negative kontrolltilfeller. Ukjent/uleselig input skal forbli synlig. Ingen kilder, koblinger eller review-historikk skal automatisk godkjennes eller endres.

Kjøringen må skille `enforcement_gates_installed: false` fra en vellykket teknisk pilot. De brede fagflaggene skal forbli false. Foreslått returpunkt: `RETURN_1E4E1_SHADOW_RESULTS_FOR_RULE_REVIEW`.

## 10. Dokumentgrunnlag og status

Grunnlaget er D7-returpakkens `editorial-enforcement-handoff.json`, `policy-route-handoff.json`, `reference-intake-candidates.json`, `review-queue-reconciliation.json` og `text-reuse-and-provenance-drift.json`, samt den separate godkjenningen av D7.

Den maskinlesbare `.json`-følgesfilen angir reglene, scope, testcaseplan, review-spor og foreslåtte delsteg. Dette er et designartefakt, ikke en kjørbar pakke. Brukerens repo, publisering, CI, registrene og originalrapportene er uendret av denne leveransen.
