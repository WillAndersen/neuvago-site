# NEUVAGO 1E.4E.2 — Pilot Review & Gate Calibration

En skrivebeskyttet, rapporterende pilot fra den rene `main`-baselinen
`4c4e65a87163000ee493f264849824f17fdcf8ca`.

## Kjøring

Pakk ut utenfor repoet, for eksempel i en ny mappe under Downloads:

```bash
/bin/bash ./run-1e4e2.sh "$HOME/neuvago-site"
```

Krever Python >=3.10, Git, Node med støtte for prosjektets allerede installerte TypeScript-modul.
Ingen avhengigheter installeres. Typiske programmer/prosjektkommandoer kjøres ikke:
ingen Next-build, pnpm-kommando, staging, fetch, commit, push, CI-hook eller deploy.

E2 kontrollerer pakkeintegritet, eksakt baseline, 252 låste filer og fire leveransecommits.
Den leser arbeidsfiler, Git-index og navngitt commit separat. Alle feilkontroller
foregår i isolerte minnesnapshots eller egne Git-testrepoer i rapportområdet.

Rapportene opprettes i en unik mappe under `~/Downloads`, aldri inne i prosjektet.
Remote main leses anonymt/autentisert av eksisterende Git-oppsett via ls-remote;
Git-refs oppdateres ikke. Ingen nett-crawl eller bibliografiske oppslag utføres.

## Resultat

```text
PASS_1E4E2_SHADOW_GATE_CALIBRATION_CAPTURED
next_gate: RETURN_1E4E2_SHADOW_CALIBRATION_FOR_RULE_REVIEW
```

Forventet baseline er 536 tekniske PASS og 34 review-observasjoner per fase.
Dette er ikke full nettside-/claim-godkjenning. Outputmodellen skiller
execution_status fra PASS_TECHNICAL_SCOPE, WOULD_BLOCK, REVIEW_REQUIRED,
NOT_EVALUATED og OPERATIONAL_ERROR.

E1-originalen bevares bytevis i `reference/e1-original-package.zip` og kjøres
kun i en separat testmappe. Både E1 og E2 prøves på de åtte opprinnelige
reproduksjonstilfellene med den samme compiler-versjonen.

Returner ZIP + SHA-filen som skrives under `SEND BEGGE FILENE`.
Håndterte feil gir også returpakke. Ingen reset, stash, sletting eller automatisk
registerreparasjon må utføres for å få testen grønn.

Se `review/CALIBRATION.md` og QA-rapporten for avgrensningene.
