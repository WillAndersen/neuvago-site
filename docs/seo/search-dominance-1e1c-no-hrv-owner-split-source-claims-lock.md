# NEUVAGO SEARCH DOMINANCE 1E.1C
## Norwegian HRV Owner Split — Source, Claims & Ownership Lock

**Date:** 2026-09-11
**Baseline:** 76d087958d32a8dfb0a765ad379ae622f4ed9790

## Ownership split

### `/no/kunnskap/hrv`
Owns generic Norwegian HRV intent:
- HRV
- hjertefrekvensvariabilitet
- pulsvariasjon / pulsvariabilitet
- HRV måling / måler
- RMSSD / SDNN / pNN50
- smartklokke / ring / wearable HRV
- normalverdi / god HRV / høy HRV / lav HRV
- measurement conditions and within-person trend interpretation

### `/no/kunnskap/hrv-og-vagusnerven`
Retains relationship intent:
- HRV og vagusnerven
- vagusnerven HRV
- vagalt mediert HRV
- HRV og vagal tone
- HRV as possible VNS/taVNS biomarker
- target-engagement and product-evidence boundaries

### `/research/topics/heart-rate-variability`
Retains evidence intent:
- standards
- evidence synthesis
- study methods
- research interpretation

### `/no/ordliste/hjertefrekvensvariabilitet`
Retains definition intent:
- concise definition
- aliases
- routes generic explanation to `/no/kunnskap/hrv`

## Primary sources

- Task Force of the European Society of Cardiology and the North American Society of Pacing and Electrophysiology. *Heart rate variability: standards of measurement, physiological interpretation and clinical use.* Circulation. 1996. PMID 8598068.
- Quigley KS et al. *Publication guidelines for human heart rate and heart rate variability studies in psychophysiology-Part 1: Physiological underpinnings and foundations of measurement.* Psychophysiology. 2024. PMID 38873876.
- Hayano J, Yuda E. *Pitfalls of assessment of autonomic function by heart rate variability.* Journal of Physiological Anthropology. 2019. PMID 30867063.
- Sassi R et al. *Advances in heart rate variability signal analysis.* Europace. 2015. PMID 26177817.
- Petek BJ et al. *Consumer Wearable Health and Fitness Technology in Cardiovascular Medicine.* Journal of the American College of Cardiology. 2023. PMID 37438083.
- Georgiou K et al. *Can Wearable Devices Accurately Measure Heart Rate Variability? A Systematic Review.* Folia Medica. 2018. PMID 29668452.
- Wolf V et al. *Does transcutaneous auricular vagus nerve stimulation affect vagally mediated heart rate variability?* Psychophysiology. 2021. PMID 34473846.
- Soltani D et al. *A systematic review of the effects of transcutaneous auricular vagus nerve stimulation on baroreflex sensitivity and heart rate variability in healthy subjects.* Clinical Autonomic Research. 2023. PMID 37119426.

## Locked interpretation boundaries

1. **HRV is not heart rate.** It describes variation in intervals over a defined period.
2. **Metric identity matters.** RMSSD, SDNN, pNN50 and spectral metrics are not interchangeable.
3. **Duration matters.** Short-term and long-term HRV values cannot be compared as if the window were irrelevant.
4. **Signal matters.** ECG RR/NN intervals and PPG pulse intervals are related but not physically identical measurements.
5. **Device algorithms matter.** Consumer devices may use proprietary preprocessing, sampling and composite scores.
6. **No universal normal value.** Age, context, metric, method and individual baseline matter.
7. **High is not always good; low is not always bad.** Artefacts, ectopy, rhythm, exertion and many contextual factors can change HRV.
8. **HRV is not a whole-body ANS meter.**
9. **LF is not a pure sympathetic channel.**
10. **LF/HF is not a universal sympathovagal-balance score.**
11. **Some HRV metrics are vagally influenced without being direct measurements of the whole vagus nerve.**
12. **HRV is not synonymous with vagal tone.**
13. **A taVNS-related HRV change does not prove clinical efficacy.**
14. **No HRV change does not prove absence of neural target engagement.**
15. **General HRV or external VNS evidence is not Neuvago product evidence.**
16. **Neuvago is not presented as measuring HRV, vagal tone or autonomic function.**
17. **Wearable values do not diagnose disease or replace clinical assessment when symptoms are concerning.**
18. **No medical-review badge is created in this batch.**

## Layout boundary

Both `/no/kunnskap/hrv` and `/no/kunnskap/hrv-og-vagusnerven` use editorial cards rather than wide multi-column tables for their key comparisons. Core information must not require horizontal scrolling.

## Market boundary

1E.1C creates no English `/learn/heart-rate-variability` page and no German child route.

## Review level

- `/no/kunnskap/hrv`: MEDIUM scientific/editorial review
- `/no/kunnskap/hrv-og-vagusnerven`: MEDIUM scientific/editorial review

Any disease-diagnostic, treatment, contraindication or product-physiology adaptation moves into higher-risk review.
