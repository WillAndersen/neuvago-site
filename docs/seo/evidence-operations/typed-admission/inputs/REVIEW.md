# NEUVAGO — R-INTAKE.1
## Bibliografisk identitet og versjonsbundet kildebruk

**Reviewdato: 14. september 2026.**  
**Status: Oppslags- og reviewgrunnlag ferdig; ingen registerimport eller prosjektendring.**

Dette er første konkrete leveranse i det allerede åpne R-INTAKE-sporet. Valget om å prioritere dette etter E3 er en ny prioritering av kjent restarbeid, ikke en påstand om et tidligere låst 1E.4F-planpunkt.

E3-installasjonen åpnes ikke på nytt. Siste aksepterte repo-HEAD er `a392d3cad094e0308f7ea0d7f761ac6cf8a1d4ef`; kildebaselinen er fortsatt `4c4e65a87163000ee493f264849824f17fdcf8ca`. Dette arbeidet har ikke lest brukerens nåværende repo eller remote.

## 1. Faktisk utført arbeid

De tolv kandidatene i D7 er avstemt mot tilgjengelige primære PubMed-, WHO- og NICE-opplysninger. De utgjør åtte publikasjoner og fire offentlige kilder. Deres **16 konkrete kortforekomster i ni arkiverte, aksepterte sidefiler** er kontrollert mot kort-/dataobjektene. Alle ni filhashene samsvarer med kandidatlistens kildehash. Alle scope-tekster og tidligere visningsfelter beholdes ordrett i eget bruksregister.

Originalens D7-kandidatobjekter er ikke omskrevet: den opprinnelige JSON-filen er vedlagt byte-identisk, og reviewet er nye, separate poster. Hver ny post er knyttet til primærkilde, oppslagskanal, dato, kildeidentifikator og den gamle kandidatens hash.

**Ingen kandidat-ID eller kildebruk er omgjort til en godkjent claim-kobling.** Ingen av de tolv kandidatene kolliderer med PMID/DOI-identitetene i den kontrollerte kopien av 172 aktive poster og to karanteneposter. Dette gjelder dette utvalget, ikke alle tenkelige duplikater i hele nettstedet.

## 2. Identitetsresultater

| Kilde | PMID / offentlig identifikator eller dato | Brukssteder | Resultat |
|---|---|---:|---|
| Roelofs 2017 | 28242739 | 1 | Identitet samsvarer |
| Kozlowska et al. 2015 | 26062169 | 1 | Identitet samsvarer |
| McEwen 2007 | 17615391 | 3 | Identitet samsvarer |
| Kalmbach et al. 2018 | 30046255 | 1 | Identitet samsvarer |
| Mauss & Robinson 2009 | 19809584 | 2 | Identitet samsvarer |
| Gross 2002 | 12212647 | 2 | Identitet samsvarer |
| Aldao et al. 2010 | 20015584 | 1 | Identitet samsvarer |
| Anxiety disorders | 2025-09-08 | 1 | Identitet samsvarer |
| Generalised anxiety disorder and panic disorder in adults: management | CG113 | 1 | Identitet/dato samsvarer; direkte henting uavklart |
| Burn-out an "occupational phenomenon": International Classification of Diseases | 2019-05-28 | 1 | Identitet samsvarer |
| Maslach & Leiter 2016 | 27265691 | 1 | Identitet samsvarer |
| Mental health at work | 2024-09-02 | 1 | Identitet samsvarer |

De åtte publikasjonenes tittel, forfattervisning, tidsskrift, årstall og PMID/DOI-par samsvarer med det tilgjengelige primærgrunnlaget, med de dokumenterte visningsforskjellene nedenfor. WHO-kildenes viste datoer samsvarer. NICE-opplysningene er bekreftet fra indeksert NICE-innhold, ikke en vellykket ny direkte HTTP-henting.

Ingen ny identitetsmotstrid som krever artikkelretting er påvist i denne avgrensede sammenligningen. Dette er ikke en full gjennomgang av alle artikkelavsnitt eller gjeldende kliniske anbefalinger.

## 3. Fire viktige metadataavklaringer

**Publikasjonsår er ikke alltid Epub-år.** Aldao-oversikten er oppgitt med elektronisk publisering i november 2009 og tidsskriftutgave i mars 2010. Kortets 2010 beholdes; datoene holdes atskilt i reviewobjektet. DOI-ens årstall er heller ikke et publikasjonsårfelt. Primærgrunnlag: S07.

**Kortvisning er ikke en full bibliografisk liste.** Kalmbach-kortet bruker «et al.». Den korte visningen beholdes sammen med en separat liste over forfatterne i det leste primærgrunnlaget. Roelofs-tidsskriftet har et lengre offisielt navn enn visningen. WHO-tittelen om burnout inneholder anførselstegn som kortet utelater. Slike forskjeller er dokumentert, ikke stilletiende omskrevet i kilden. Primærgrunnlag: S01, S04, S10.

**NICE: identitet bekreftet, live-tilgjengelighet ikke attestert.** Direkte henting av Recommendations og andre NICE-adresser ga blokkert/uleselig respons i dette miljøet. Indeksert tekst fra det korrekte NICE-kapittelet og NICEs evidence-side bekrefter CG113, tittelen, publisering 26. januar 2011 og headerens oppdateringsdato 15. juni 2020. Dette er ikke bevis for at hver anbefaling har stått uendret siden 2020. Adressen erklæres verken død eller fullt live-verifisert. Primærgrunnlag: S09.

**Kildetype er ikke evidenssikkerhet.** De offentlige kildene er to faktabaserte veiledningssider, én klinisk retningslinje og én WHO-avklaring av klassifikasjon. De er ikke fire kliniske forsøk. Ingen PMID/DOI konstrueres for dem, og ingen metodeklasse eller GRADE-verdi tildeles. Tidligere betegnelser som «review» i kortene beholdes som visningsmetadata; de blir ikke automatisk kopi av en PubMed-indekseringstype.

## 4. Hva kildene ikke godkjenner

Denne identitetsreviewen dokumenterer hvilke referanser kortene viser til. Den vurderer ikke fulltekstenes samlede risiko for skjevhet, alle inkluderte studier, effektstørrelser, direkte relevans for hver setning eller Neuvagos produkt. Abstracts og valgte offentlige avsnitt er ikke en erstatning for en full slik vurdering.

De tidligere kildebruksavgrensningene er derfor bevart, ikke oppgradert til vitenskapelig sign-off. McEwen har tre brukssteder med mer enn én scope-tekst; disse er separate objekter. Ingen felles scope-tekst skal overta for dem. Ingen menneskelig reviewer eller klinisk autorisasjon er oppfunnet.

Det er heller ikke gjort et systematisk oppslag etter alle rettelser, tilbaketrekkinger eller oppdateringer. Det som ikke er undersøkt, rapporteres som åpent, ikke «ingen funn».

## 5. Registerets faktiske grense

Den kontrollerte `evidence-registry.schema.v1.json` tillater bare:

```text
PUBMED_ARTICLE
PUBMED_BOOK_ARTICLE
CROSSREF_DOI_WORK
PMID_UNRESOLVED
DOI_ONLY
```

De åtte publikasjonene kan beskrives som publikasjoner, men de fire offentlige kildene kan ikke legges inn som en av disse typene uten feilklassifisering. Typene `PUBLIC_HEALTH_GUIDANCE`, `CLINICAL_GUIDELINE` og `CLASSIFICATION_CLARIFICATION` i dette reviewet er derfor **forslag i et eksternt opptaksgrunnlag**, ikke installerte enum-verdier.

Neste lokale registerendring trenger et eksplisitt, versjonert typedesign og en kontrollert diff. Den skal bevare alle eksisterende poster, karantenehistorikk og de tre godkjenningsfeltenes tomme verdier. Verktøyets kontrakt og aksepterte kildesnapshot må oppdateres ved et separat review; de skal ikke automatisk lære dagens HEAD eller bare få nye hasher for å fremtvinge PASS. Den gamle bygg-/discovery-kommandoen skal ikke brukes til å regenerere det gjennomgåtte registeret.

Det nåværende registeret har fortsatt **172 aktive poster**. Tolv gjennomgåtte opptakskandidater betyr ikke at det nå har 184. Ingen registerimport har funnet sted.

## 6. Avgrensninger og uendrede oppgaver

Ny nettbasert bibliografisk kontroll er utført, men det er ingen ny Neuvago-produksjonshenting, rendering, build, Git-lesing mot brukerens repo, staging, commit, push, CI-aktivering eller filendring i prosjektet.

Sju primærkilder ga lesbar side via web-open; fem oppslag bruker indeksert tekst på primærkildens domene. Ingen av disse registreres som attestasjon av serverens HTTP-headere. Ett forsøk på automatisk NCBI-XML-innhenting feilet på DNS i arbeidsmiljøet og ga ingen metadatapost; det er ikke erstattet med oppdiktet API-data.

De tre separate NHS-veiledningsadressene, seks eksisterende registeridentiteters nye kildebruk, 117 claim-policyer, 19 strukturelle kandidatreferanser, elleve rutekoblinger og 110 videreførte review-poster står utenfor denne identitetsleveransen. Bevaring av de brukte arkivkopiene er kontrollert; nåværende tilstand på brukerens Mac er ikke attestert.

## 7. Neste konkrete implementeringsoppgave

**R-INTAKE.2 – Controlled Typed Admission & Local Review.** Bruk de tolv nye identitetsobjektene og de 16 kildebruksobjektene som grunnlag for en eksplisitt lokal metadata-/skjemaendring. Hold kildeidentitet, per-side-bruk og faglig claim-godkjenning adskilt. NICEs direkte tilgjengelighet skal videreføres som eget felt, ikke bli en usynlig «ny verifisert dato».

Først etter review av den eksakte lokale diffen kan det være aktuelt med commit/push. Publiseringssperrer forblir en separat beslutning. Dette reviewarkivet er ikke en installasjonspakke, og det finnes ingen kommando her som skal kjøres mot prosjektet.

## 8. Filer

`identity-review.v1.json` er nytt, maskinlesbart opptaksgrunnlag. `source-usage-ledger.v1.json` har 16 versjonsbundne bruksobjekter med ordrette utdrag og scope. `primary-source-observations.v1.json` viser oppslagskanalene og begrensningene. `snapshot-integrity.json` viser de kontrollerte input- og kildefilhashene. `integration-constraints.json` avgrenser neste installasjonsoppgave. `PRIMARY-SOURCES.md` gir de konkrete primæradressene. Originalt D7-grunnlag og opprinnelig schema ligger uendret under `inputs/`.
