# R-INTAKE.2 — versjonert metadatautvidelse, lokal review

Dette er et separat, typet opptaksregister. Det erstatter ikke `evidence-registry.v1.json`.
Det eksisterende registeret har fortsatt 172 aktive poster og to historiske karanteneposter.
`source-admissions.v1.json` inneholder 12 nye metadataidentiteter fra R-INTAKE.1. Den egne
leseren kan vise 184 metadataidentiteter samlet, men ingen av disse tallene er claim-godkjenninger.

## Kjør den egne, skrivebeskyttede leseren

Fra repoets rot:

```bash
/bin/bash scripts/evidence-intake/run-admission.sh "$PWD"
```

Leseren lager rapport utenfor repoet. Arbeidstre, index og navngitt commit er separate input.
Før lokal opptakscommit inneholder bare arbeidstreet opptaksfilene; index og commit rapporteres
som `ADMISSION_NOT_PRESENT_IN_SELECTED_PHASE`, ikke som et ferdig 184-postersopptak.
En delvis staged versjon kan ikke valideres som fullstendig. `--phase commit --commit <full SHA>`
leser den konkrete committen og bytter ikke til arbeidstredata. Kildebaselinen oppdateres ikke.

## Hva som er og ikke er godkjent

Identitet, per-side-bruk og faglig claim-støtte er adskilt. Bruksregisteret bevarer alle 16
originale reviewobjekter og hver scope-tekst. Forkortet kortvisning og primærmetadata er ulike felt.
Ingen nye verifikasjonsdatoer eller vellykkede HTTP-oppslag konstrueres. NICEs direkte tilgjengelighet
forblir uavklart. Metodekvalitet og evidenssikkerhet er null; claim-lenker er tomme.

De eksisterende 172 postene, karantenen, claim-registeret, historiske locks og E3-verktøyet er
skrivebeskyttede input. Ingen kilder opptas ved fuzzy matching. Ukjente eller dupliserte identiteter,
endrede primærdata, scope-tap og uautorisert godkjenning gir stopp i den nye leseren.

## Avgrenset skjemakontroll

Schemafilene bruker JSON Schema 2020-12. Den medfølgende offline-validatoren implementerer bare
nøkkelordene som er eksplisitt brukt her, og avviser ukjente nøkkelord. Den er ikke en generell
JSON Schema-motor og foretar ingen eksterne $ref-oppslag. Den semantiske kontrollen sammenholder
metadata og kildebruk med de bytebundne R-INTAKE.1-originalene i tillegg til skjemakontrollen.

## Eksisterende observasjonsverktøy

E3 er uendret og kjenner ikke de nye filene semantisk. Nye opptaksfiler skal fremdeles vises i
E3s endringsinventar som utenfor det støttede omfanget, med review/NOT_EVALUATED. Dette skal
ikke skjules ved å endre E3-baseline eller regelfingeravtrykk. Den egne opptaksleseren supplerer
E3; den utvider ikke E3s godkjente scope. Eventuell fremtidig integrasjon krever separat review.

Ingen CI, hooks eller publiseringssperrer aktiveres. Lokal metadata-/skjemareview er nødvendig før
commit/push. Opprinnelig pending-status i inputdokumentene bevares som historisk grunnlag.
