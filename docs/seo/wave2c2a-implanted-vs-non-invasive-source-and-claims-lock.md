# Wave 2C.2A — implanted vs non-invasive VNS source and claims lock

Updated: 2026-08-31

## Route and ownership

- Page ID: `EN-003`
- Route: `/learn/implanted-vs-non-invasive-vagus-nerve-stimulation`
- Primary query: `implanted vs non-invasive VNS`
- Intent: comparison informational / MOFU
- Primary asset: comparison table
- Strategic role: category clarity
- Source baseline: `9b6c46d6f22c7822365d4ed7a3a08a0881da4a24`

This route owns the direct comparison between implanted clinical VNS and non-invasive VNS. It must not replace the broader VNS pillar, the non-invasive VNS guide, method-specific auricular or transcutaneous guides, the safety research topic, or product-specific instructions.

## Category definitions

### Implanted clinical VNS

An implanted system uses surgically placed internal hardware, including a pulse generator and an implanted lead. Indications, programming, follow-up, contraindications, warnings, adverse events, and outcomes belong to the exact clinical system and its official labeling.

### Cervical non-invasive VNS

An external device applies stimulation through the skin at the neck. The category avoids implanted hardware but does not define one product, protocol, intended use, regulatory status, or evidence profile.

### Transcutaneous VNS

`tVNS` is a broad method term for stimulation delivered through the skin rather than through an implanted electrode. It may include different anatomical sites, devices, electrodes, parameters, populations, and use contexts.

### Auricular VNS / taVNS

Auricular approaches apply stimulation at the outer ear. Exact site, side, electrode geometry, contact, waveform, parameters, exposure, comparator, population, and outcome remain essential to evidence interpretation.

## Locked claims boundary

The page must preserve all of the following:

1. VNS is an umbrella category, not one standardized intervention.
2. Implanted clinical VNS, cervical nVNS, transcutaneous VNS, and auricular taVNS may differ substantially.
3. Evidence from one method, device, protocol, indication, population, or outcome does not transfer automatically to another.
4. General VNS or taVNS research is educational context unless a product-specific bridge is documented.
5. A shared sensation or acronym is not proof of equivalent target engagement or effect.
6. Non-invasive delivery avoids implant surgery but does not mean risk-free, universally suitable, or exempt from product-specific precautions.
7. Regulatory status, intended use, contraindications, and instructions are product- and jurisdiction-specific and must be checked in current official information.
8. Stronger stimulation or stronger tingling is not automatically better and is not proof of selective vagus-nerve engagement.

## Prohibited claim transfers

The page must not say or imply that:

- all VNS devices work the same way;
- implanted VNS evidence proves that an external device works;
- taVNS research automatically proves a Neuvago benefit;
- Neuvago has an implanted-system indication;
- Neuvago treats epilepsy, depression, migraine, anxiety, insomnia, chronic pain, or another disease;
- non-invasive VNS is universally safer than implanted VNS;
- non-invasive means risk-free or suitable for everyone;
- a physiological, imaging, HRV, or sensation response automatically proves a meaningful clinical or wellness outcome;
- stronger sensation means stronger target engagement or better outcomes.

## Neuvago positioning

Neuvago is described only as a non-invasive, ear-based device and guided app for general-wellness routines. It is not an implanted clinical VNS system. Its claims must match the final hardware, ear contact, stimulation parameters, instructions, intended use, target population, risk information, and product-specific evidence.

## Primary source basis

### Official device record

- U.S. Food and Drug Administration. PMA `P970003`, VNS Therapy System. Used to establish the product-specific nature of an implanted clinical system and its approval record.
  - https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=P970003

### Category comparison

- Ben-Menachem E, Revesz D, Simon BJ, Silberstein S. Surgically implanted and non-invasive vagus nerve stimulation: a review of efficacy, safety and tolerability. `PMID 25614179`.
  - https://pubmed.ncbi.nlm.nih.gov/25614179/

### Method and reporting boundaries

- Farmer AD, Strzelczyk A, Finisguerra A, et al. International consensus based review and recommendations for minimum reporting standards in research on transcutaneous vagus nerve stimulation. `PMID 33854421`.
  - https://pubmed.ncbi.nlm.nih.gov/33854421/

### Auricular anatomy

- Butt MF, Albusoda A, Farmer AD, Aziz Q. The anatomical basis for transcutaneous auricular vagus nerve stimulation. `PMID 31742681`.
  - https://pubmed.ncbi.nlm.nih.gov/31742681/

### Safety and tolerability

- Kim AY, Marduy A, de Melo PS, et al. Safety of transcutaneous auricular vagus nerve stimulation: a systematic review and meta-analysis. `PMID 36543841`.
  - https://pubmed.ncbi.nlm.nih.gov/36543841/
- Redgrave J, Day D, Leung H, et al. Safety and tolerability of transcutaneous vagus nerve stimulation in humans: a systematic review. `PMID 30217648`.
  - https://pubmed.ncbi.nlm.nih.gov/30217648/

## Source-use limits

- The FDA record supports statements about the identified implanted system only.
- The category review is background literature and does not erase product or indication differences.
- Reporting standards support the need to specify device, site, electrode, parameters, population, comparator, and outcomes.
- Anatomy supports anatomical context, not a clinical or product outcome.
- Safety reviews support field-level context and limitations; they do not replace final product instructions or establish universal suitability.

## Internal-link ownership

The page must link deliberately to:

- `/learn/vagus-nerve-stimulation` for the broad category pillar;
- `/learn/non-invasive-vagus-nerve-stimulation` for external methods;
- `/learn/transcutaneous-vagus-nerve-stimulation` and `/learn/auricular-vagus-nerve-stimulation` for method detail;
- `/research/topics/safety-and-tolerability` for evidence-focused safety intent;
- `/legal/intended-use` and `/legal/medical-disclaimer` for product and medical boundaries;
- `/how-it-works` and `/product` only after the category comparison is complete.

The VNS pillar and non-invasive VNS guide must each link back to this page so the direct comparison query has one explicit owner.

## Measurement boundary

Untracked editorial interactions:

- `Compare the categories` to `#comparison-table`;
- the hero link to `/learn/non-invasive-vagus-nerve-stimulation`;
- category, evidence, safety, and source links.

Expected tracked commercial navigation:

- `neuvago_how_it_works_click` from `comparison-product-bridge` to `/how-it-works`;
- `neuvago_product_click` from `comparison-product-bridge` to `/product`;
- existing buyer-guide classification may apply to `/learn/how-to-choose-a-vagus-nerve-stimulation-device` in `related-guides`.

Keep the existing seven non-personal parameters only:

- `conversion_target`
- `source_path`
- `destination_path`
- `source_locale`
- `source_page_group`
- `source_section`
- `link_text`

Do not add medical history, suitability answers, symptoms, implanted-device status, free text, account identifiers, email, or health data.

## Media boundary

This wave adds no ear-anatomy or placement illustration. Any future final instructional image showing the ear, electrode placement, or physical contact must use the real Neuvago unit and the established manual-production policy rather than AI-generated anatomy.

## Repository boundary

The implementation package may create the new physical page and claims lock and modify only the eight declared integration files. It must not stage, commit, push, alter `package.json`, add dependencies, change robots rules, or create a Norwegian counterpart in this wave.
