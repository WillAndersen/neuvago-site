import type { ResearchGuidePair } from "@/content/research-guides/types";

export const howToReadVnsStudyGuidePair = {
  "id": "how-to-read-vns-study",
  "status": "published",
  "order": 10,
  "en": {
    "id": "how-to-read-vns-study",
    "locale": "en",
    "languageTag": "en-US",
    "openGraphLocale": "en_US",
    "path": "/research/how-to-read-a-vns-study",
    "counterpartPath": "/no/forskning/slik-leser-du-en-vns-studie",
    "defaultPath": "/research/how-to-read-a-vns-study",
    "status": "published",
    "kind": "research-literacy",
    "order": 10,
    "title": "How to read a vagus nerve stimulation study",
    "seoTitle": "How to Read a VNS Study | Design, Bias and Evidence | Neuvago",
    "description": "Use a 12-step framework to read VNS and taVNS studies by design, protocol, sham, outcomes, effect estimates, bias, harms and evidence transfer.",
    "eyebrow": "RESEARCH LITERACY / VNS STUDIES",
    "lead": "A study headline can tell you whether a result was positive. It cannot tell you whether the method was reproducible, the comparator credible, the effect precise, or the finding relevant to another device. This guide shows what to check before you carry a result forward.",
    "shortAnswer": [
      "Name the research question and design before judging the conclusion.",
      "Reconstruct the exact population, device, site, protocol and comparator rather than relying on the acronym VNS or taVNS.",
      "Read effect estimates, confidence intervals, missing data and harms—not only p values or the word significant.",
      "Keep target engagement, physiological markers, meaningful outcomes and product-specific evidence as separate layers."
    ],
    "hubTitle": "How to read a VNS study",
    "hubSummary": "A 12-step research-literacy framework for design, participants, protocol, sham, outcomes, effect estimates, bias, harms, certainty and evidence transfer.",
    "hubLabel": "Research literacy guide",
    "primaryKeyword": "how to read a vagus nerve stimulation study",
    "secondaryKeywords": [
      "how to read VNS research",
      "taVNS study design",
      "sham stimulation taVNS",
      "VNS clinical trial interpretation",
      "VNS evidence quality",
      "taVNS protocol reporting"
    ],
    "publishedAt": "2026-08-27",
    "modifiedAt": "2026-08-27",
    "readingTimeMinutes": 24,
    "authorName": "John Willander",
    "reviewerName": "Neuvago Editorial Team",
    "framework": {
      "eyebrow": "12-STEP READING FRAMEWORK",
      "title": "Twelve checks before a VNS result becomes a conclusion",
      "introduction": "Use the same sequence for a randomized trial, mechanistic paper, safety study or systematic review. Some checks carry different weight by design, but none should disappear.",
      "items": [
        {
          "label": "01",
          "title": "Research question and design",
          "question": "What exact question was the study designed to answer?",
          "whyItMatters": "Mechanism, feasibility, safety and efficacy questions need different designs and outcomes.",
          "warning": "The conclusion answers a broader question than the design can support."
        },
        {
          "label": "02",
          "title": "Participants and setting",
          "question": "Who was studied, where, and under which eligibility rules?",
          "whyItMatters": "Age, health status, diagnosis, exclusions and setting determine who the result may apply to.",
          "warning": "A small healthy-volunteer study is presented as evidence for every user group."
        },
        {
          "label": "03",
          "title": "Exact intervention and device",
          "question": "Which device, anatomical site, electrode and delivery method were used?",
          "whyItMatters": "VNS, cervical nVNS and auricular taVNS are method families, not interchangeable products.",
          "warning": "The paper uses only an acronym and omits the actual hardware or placement."
        },
        {
          "label": "04",
          "title": "Stimulation protocol",
          "question": "What frequency, pulse width, waveform, intensity, duty cycle and session exposure were delivered?",
          "whyItMatters": "Protocol details shape dose, sensation, safety, target engagement and reproducibility.",
          "warning": "A result is generalized without the settings needed to reproduce it."
        },
        {
          "label": "05",
          "title": "Comparator or sham",
          "question": "What did the control group receive, and could it have been biologically active?",
          "whyItMatters": "A credible control helps separate intervention effects from expectation, attention, sensation and natural change.",
          "warning": "The sham is poorly described or may stimulate a relevant site."
        },
        {
          "label": "06",
          "title": "Randomisation and blinding",
          "question": "How were groups assigned, concealed and kept unaware of allocation?",
          "whyItMatters": "Randomisation and blinding reduce predictable differences and biased outcome assessment.",
          "warning": "The paper says ‘randomized’ but gives no allocation or blinding detail."
        },
        {
          "label": "07",
          "title": "Outcomes and timing",
          "question": "Which outcome was primary, how was it measured, and when?",
          "whyItMatters": "Prespecified outcomes and time points reduce selective emphasis on whichever result looks best.",
          "warning": "A secondary, subgroup or exploratory result is presented as the main answer."
        },
        {
          "label": "08",
          "title": "Effect estimate and uncertainty",
          "question": "How large was the difference, and how precise was the estimate?",
          "whyItMatters": "Effect sizes and confidence intervals show magnitude and uncertainty that a p value alone cannot show.",
          "warning": "Statistical significance is treated as proof of a meaningful or certain benefit."
        },
        {
          "label": "09",
          "title": "Missing data and analysis",
          "question": "Who entered the analysis, who dropped out, and how were missing data handled?",
          "whyItMatters": "Attrition and analysis choices can change the observed effect and the population the result represents.",
          "warning": "Only completers are analysed without explaining the consequences."
        },
        {
          "label": "10",
          "title": "Harms and tolerability",
          "question": "How were adverse events defined, collected, compared and linked to discontinuation?",
          "whyItMatters": "Benefit claims are incomplete without the tested safety exposure and quality of harms reporting.",
          "warning": "‘Well tolerated’ appears without denominators, severity or control-group data."
        },
        {
          "label": "11",
          "title": "Registration, bias and interests",
          "question": "Was the study registered, were plans accessible, and who funded or influenced it?",
          "whyItMatters": "Protocols, analysis plans and conflicts help readers detect selective changes and interpret incentives.",
          "warning": "Outcomes changed after the study began or conflicts are unclear."
        },
        {
          "label": "12",
          "title": "Applicability and evidence transfer",
          "question": "Does this exact device, protocol, population and intended use match the new claim?",
          "whyItMatters": "Generalisation must be argued from similarity, not assumed from the words VNS or taVNS.",
          "warning": "Field-level evidence is presented as proof for another product or use case."
        }
      ]
    },
    "sections": [
      {
        "id": "question-and-design",
        "eyebrow": "1 / START WITH THE QUESTION",
        "title": "Study design tells you what kind of answer is possible",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Begin with the research question, not the abstract conclusion. A mechanistic study can show that a pathway or marker changed. A feasibility study can show that a procedure was workable. A safety study can describe adverse events at a tested exposure. A randomized trial can estimate a between-group effect. Those answers are useful, but they are not interchangeable."
          },
          {
            "type": "table",
            "caption": "Common designs in the VNS literature",
            "columns": [
              "Design",
              "What it can help answer",
              "What to inspect",
              "What it cannot establish alone"
            ],
            "rows": [
              [
                "Randomized parallel trial",
                "Whether outcomes differ between assigned groups",
                "Allocation, concealment, blinding, prespecified outcomes, missing data",
                "Universal effectiveness or relevance to another protocol"
              ],
              [
                "Crossover trial",
                "Within-person differences between conditions",
                "Sequence, washout, carryover, period effects, blinding",
                "Long-term effects without suitable follow-up"
              ],
              [
                "Mechanistic or neuroimaging study",
                "Whether stimulation changes a proposed pathway or physiological signal",
                "Timing, site, control, signal definition, multiplicity",
                "Clinical or everyday benefit"
              ],
              [
                "Safety or tolerability study",
                "Which events occurred at a tested exposure",
                "Collection method, denominators, severity, causality, discontinuation",
                "Efficacy or safety outside the tested population and dose"
              ],
              [
                "Systematic review or meta-analysis",
                "What a defined body of studies shows together",
                "Search, eligibility, risk of bias, compatibility, missing evidence",
                "Quality beyond the included studies or product equivalence"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "summary",
            "title": "A useful first sentence",
            "paragraphs": [
              "Write: ‘This study was designed to test …’ before you write what it found.",
              "If the paper’s conclusion is broader than that sentence, mark the gap before carrying the claim forward."
            ]
          }
        ]
      },
      {
        "id": "participants-intervention-and-protocol",
        "eyebrow": "2 / RECONSTRUCT WHAT WAS TESTED",
        "title": "Name the population, device, site and full stimulation exposure",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The label taVNS is not a complete intervention description. Readers need the participant group, exact device, electrode, anatomical site, side of stimulation, waveform and total exposure. Farmer and colleagues proposed tVNS-specific minimum reporting standards because incomplete method descriptions prevent replication and responsible comparison."
          },
          {
            "type": "numbered",
            "items": [
              "Define the population: age, health or diagnosis, baseline severity, setting, exclusions and sample size.",
              "Identify the exact hardware and software: manufacturer, model, electrode, coupling medium, channel and control interface.",
              "Locate stimulation precisely: cervical or auricular, left or right, named ear region, active and reference electrode positions.",
              "Reconstruct dose: current or intensity rule, frequency, pulse width, waveform, duty cycle, ramping, session duration, number of sessions and follow-up.",
              "Check what was actually delivered, not only what the protocol planned, including adherence, modifications and fidelity."
            ]
          },
          {
            "type": "table",
            "caption": "Protocol details that should remain visible",
            "columns": [
              "Domain",
              "Examples",
              "Why it changes interpretation"
            ],
            "rows": [
              [
                "Anatomy and contact",
                "Neck or ear site, side, electrode geometry, skin preparation",
                "Changes current paths, sensation and the assumed neural target"
              ],
              [
                "Electrical parameters",
                "Frequency, pulse width, waveform, amplitude or titration rule",
                "Changes delivered charge, comfort and physiological response"
              ],
              [
                "Exposure",
                "On/off cycle, session duration, schedule, total sessions",
                "Changes cumulative dose and the time window for benefits or harms"
              ],
              [
                "Delivery and fidelity",
                "Operator, app, training, adherence, actual settings",
                "Shows whether participants received the planned intervention"
              ],
              [
                "Co-interventions",
                "Medication, therapy, usual care, lifestyle changes",
                "Can create or obscure differences between groups"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "scope",
            "title": "Same acronym does not mean same intervention",
            "paragraphs": [
              "Two studies can both use the label taVNS while differing in ear site, electrode, waveform, intensity rule, session exposure, sham and population.",
              "Similarity must be demonstrated at the protocol level before results are combined or transferred."
            ]
          }
        ]
      },
      {
        "id": "control-sham-and-blinding",
        "eyebrow": "3 / WHAT WAS THE COUNTERFACTUAL?",
        "title": "A sham condition is part of the intervention question, not a footnote",
        "blocks": [
          {
            "type": "paragraph",
            "text": "A controlled study estimates a difference between conditions. The interpretation therefore depends on what the comparison group experienced. In electrical stimulation research, sham may imitate contact, sound, attention or sensation, but it can also produce somatic or physiological effects. ‘Sham-controlled’ is not enough detail by itself."
          },
          {
            "type": "cards",
            "items": [
              {
                "label": "CREDIBILITY",
                "title": "Could participants tell the groups apart?",
                "description": "Compare sensations, device appearance, session contact and guesses about allocation. Blinding can fail even when the protocol says double-blind."
              },
              {
                "label": "BIOLOGICAL ACTIVITY",
                "title": "Could the control influence a relevant pathway?",
                "description": "Low intensity, another ear site or brief stimulation may be less active, but biological inactivity should not simply be assumed."
              },
              {
                "label": "EQUAL ATTENTION",
                "title": "Did both groups receive the same contact and co-interventions?",
                "description": "Differences in staff attention, app guidance, expectation or usual care can contribute to observed outcomes."
              },
              {
                "label": "ANALYSIS",
                "title": "Was blinding success examined without overinterpreting it?",
                "description": "Allocation guesses can be informative, but they are influenced by both sensations and whether a participant improved."
              }
            ]
          },
          {
            "type": "callout",
            "tone": "evidence",
            "title": "The effect belongs to the comparison",
            "paragraphs": [
              "A trial does not estimate an intervention’s effect in isolation. It estimates the difference between the intervention and the specific comparator used.",
              "Changing the sham can change the observed effect without changing the active protocol."
            ]
          }
        ]
      },
      {
        "id": "outcomes-effect-and-uncertainty",
        "eyebrow": "4 / READ THE NUMBER, NOT ONLY THE LABEL",
        "title": "Primary outcomes, effect sizes and uncertainty matter more than the word positive",
        "blocks": [
          {
            "type": "definition",
            "term": "Primary outcome",
            "definition": "The outcome intended to answer the main research question, ideally prespecified with a defined measure, time point and analysis."
          },
          {
            "type": "definition",
            "term": "Effect estimate",
            "definition": "The measured difference, ratio or change used to describe the magnitude and direction of the observed effect."
          },
          {
            "type": "definition",
            "term": "Confidence interval",
            "definition": "A range showing the precision of the estimate under the statistical model. A wide interval can include materially different conclusions."
          },
          {
            "type": "paragraph",
            "text": "A p value addresses compatibility with a statistical model under a null hypothesis. It does not tell you whether an effect is large, useful, precise, unbiased or relevant to a new product. Read the estimate, interval, units, baseline risk and outcome scale together."
          },
          {
            "type": "table",
            "caption": "Read each result in four layers",
            "columns": [
              "Layer",
              "Question",
              "Common error"
            ],
            "rows": [
              [
                "Outcome",
                "Was this primary, secondary, exploratory or post hoc?",
                "Promoting an exploratory signal to the main conclusion"
              ],
              [
                "Magnitude",
                "How large was the absolute and relative difference?",
                "Using only percentage change or a p value"
              ],
              [
                "Precision",
                "What range of effects remains compatible with the data?",
                "Treating a wide interval as a settled estimate"
              ],
              [
                "Meaning",
                "Would the difference matter to participants or decisions?",
                "Equating statistical significance with practical importance"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "scope",
            "title": "Multiplicity changes how surprising a result is",
            "paragraphs": [
              "When many outcomes, time points, subgroups or analyses are tested, some apparently positive findings may occur by chance.",
              "Look for prespecification, multiplicity handling and a clear distinction between confirmatory and exploratory analyses."
            ]
          }
        ]
      },
      {
        "id": "target-engagement-and-clinical-outcomes",
        "eyebrow": "5 / KEEP THE EVIDENCE LAYERS SEPARATE",
        "title": "Target engagement, biomarkers and clinical outcomes answer different questions",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Target engagement asks whether an intervention affected its predicted target. A biomarker or imaging response may support that question. A clinical or lived-experience outcome asks whether participants improved in a meaningful way. One layer can strengthen a mechanistic argument without proving the next layer."
          },
          {
            "type": "cards",
            "items": [
              {
                "label": "DELIVERY",
                "title": "The device delivered stimulation",
                "description": "Electrical output, contact or perceived sensation can confirm delivery conditions, but not selective neural engagement."
              },
              {
                "label": "TARGET",
                "title": "The intended target was affected",
                "description": "A prespecified, credible measure should show the predicted change in a molecular, neural, physiological or behavioral target."
              },
              {
                "label": "MEDIATION",
                "title": "Target change related to the outcome",
                "description": "A stronger causal chain tests whether change in the target is associated with or mediates change in the meaningful outcome."
              },
              {
                "label": "OUTCOME",
                "title": "Participants experienced a relevant benefit",
                "description": "The outcome should be suitable, prespecified, measured at an appropriate time and interpreted with effect size and uncertainty."
              }
            ]
          },
          {
            "type": "callout",
            "tone": "evidence",
            "title": "Sensation is not target engagement",
            "paragraphs": [
              "Sensation can show that stimulation was perceived and may affect blinding. It cannot by itself establish which nerve fibres were engaged or what downstream effect occurred.",
              "Likewise, HRV, fMRI, EEG or pupillometry should be interpreted as the specific marker measured—not as an automatic clinical benefit."
            ]
          }
        ]
      },
      {
        "id": "bias-missing-data-and-harms",
        "eyebrow": "6 / LOOK FOR WHAT COULD DISTORT THE RESULT",
        "title": "Bias, missing data and harms reporting can change the conclusion",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Risk of bias is not a general impression of whether a paper looks scientific. It asks whether features of the design, conduct, analysis or reporting could systematically move the result away from the truth. RoB 2 organizes this for randomized trials across randomisation, deviations from intended interventions, missing outcomes, outcome measurement and selection of the reported result."
          },
          {
            "type": "numbered",
            "items": [
              "Compare the trial registry, protocol or analysis plan with the published outcomes and analyses.",
              "Check whether allocation was concealed and whether baseline differences suggest a problem with randomisation.",
              "Identify deviations from the assigned intervention and whether analyses matched the effect the study intended to estimate.",
              "Count missing outcomes and compare dropout reasons between groups; do not rely only on the percentage who completed.",
              "Ask whether outcome assessors could be influenced by knowledge of allocation or by participant expectations.",
              "Check whether harms were actively solicited, defined, timed, graded and reported with group denominators and discontinuations.",
              "Read funding, device supply, author conflicts, data access and the role of the sponsor without assuming that disclosure alone resolves bias."
            ]
          },
          {
            "type": "callout",
            "tone": "safety",
            "title": "‘No serious adverse events’ is not a complete safety analysis",
            "paragraphs": [
              "The statement depends on sample size, duration, exclusions, event collection, exposure and whether serious and non-serious events were reported consistently.",
              "Absence of observed harm in a small or short study is not proof of universal safety or suitability."
            ]
          }
        ]
      },
      {
        "id": "reviews-meta-analysis-and-certainty",
        "eyebrow": "7 / MOVE FROM ONE PAPER TO THE BODY OF EVIDENCE",
        "title": "A systematic review is a method; a meta-analysis is a calculation; certainty is a judgment",
        "blocks": [
          {
            "type": "paragraph",
            "text": "A systematic review uses explicit methods to identify, select and appraise relevant studies. A meta-analysis statistically combines compatible effect estimates. A review may use narrative synthesis instead when studies are too different. Neither label guarantees that the underlying evidence is complete, unbiased or directly applicable."
          },
          {
            "type": "table",
            "caption": "Do not collapse these evidence concepts",
            "columns": [
              "Concept",
              "What it describes",
              "What to inspect"
            ],
            "rows": [
              [
                "Systematic review",
                "A transparent method for finding and synthesising a defined body of evidence",
                "Question, search, eligibility, duplicate processes, risk of bias, missing evidence"
              ],
              [
                "Meta-analysis",
                "A statistical summary of compatible study results",
                "Effect measure, model, heterogeneity, weighting, sensitivity analyses, small-study effects"
              ],
              [
                "Certainty of evidence",
                "Confidence in an effect estimate across a body of evidence for a defined outcome",
                "Risk of bias, inconsistency, indirectness, imprecision and publication bias"
              ],
              [
                "Recommendation",
                "A judgment that also considers benefits, harms, values, resources and context",
                "Who made it, for which population, and with what strength and certainty"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "evidence",
            "title": "A precise pooled number can still be misleading",
            "paragraphs": [
              "Pooling weak, biased or incompatible studies does not repair their limitations. It can make uncertainty look smaller while leaving indirectness or missing evidence unresolved.",
              "Read the confidence interval and certainty assessment for each important outcome, not only the review’s overall conclusion."
            ]
          }
        ]
      },
      {
        "id": "applicability-and-product-transfer",
        "eyebrow": "8 / DECIDE WHAT THE STUDY CAN TRAVEL TO",
        "title": "Evidence transfer requires a defensible bridge from study to claim",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The last step is not ‘Was the study positive?’ It is ‘What exactly can this result support?’ Applicability depends on the match between participants, intervention, comparator, outcome, setting and follow-up. Product transfer adds another layer: hardware, placement, protocol, intended use and regulatory context should be relevant to the new device and claim."
          },
          {
            "type": "bullets",
            "items": [
              "A finding from implanted VNS does not automatically support cervical or auricular non-invasive stimulation.",
              "A finding from one taVNS device or ear site does not automatically support another electrode, waveform or dose.",
              "A physiological or imaging response does not automatically support a symptom or wellness claim.",
              "A clinical population and indication do not automatically support general wellness use in healthy consumers.",
              "A field-level review can map the category while still providing no product-specific evidence for Neuvago.",
              "A negative or inconclusive study can be informative about the target, protocol, comparator, measurement or limits of the hypothesis."
            ]
          },
          {
            "type": "callout",
            "tone": "scope",
            "title": "Neuvago’s evidence boundary",
            "paragraphs": [
              "This guide explains how to read the wider VNS and taVNS literature. It does not convert that literature into Neuvago-specific clinical evidence.",
              "Any Neuvago claim must be consistent with the final device, intended use, instructions, testing, risk management and the exact evidence that belongs to that product."
            ]
          }
        ]
      }
    ],
    "examples": [
      {
        "label": "MECHANISM / HUMAN fMRI",
        "title": "Frangos et al. 2015",
        "evidenceType": "Neuroimaging study",
        "summary": "The study examined brain responses during electrical stimulation at an external-ear location associated with auricular vagal pathways.",
        "lesson": "Read it for pathway and target-engagement context. Do not relabel an imaging response as proof of symptom improvement or of another device’s effect.",
        "href": "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri"
      },
      {
        "label": "SAFETY / EVIDENCE SYNTHESIS",
        "title": "Kim et al. 2022",
        "evidenceType": "Systematic review and meta-analysis",
        "summary": "The review synthesised adverse-event reporting across human taVNS studies and assessed the wider safety literature.",
        "lesson": "Read the pooled safety picture together with protocol variation, inconsistent event collection, study exclusions and the tested exposure window.",
        "href": "/research/studies/kim-2022-tavns-safety-systematic-review-meta-analysis"
      },
      {
        "label": "PHYSIOLOGY / HRV",
        "title": "Soltani et al. 2023",
        "evidenceType": "Systematic review",
        "summary": "The review assessed taVNS studies measuring heart rate variability and highlighted variation in protocols and HRV methods.",
        "lesson": "Read HRV as a physiological outcome with methodological limits. It is not automatically target engagement, clinical benefit or a product claim.",
        "href": "/research/studies/soltani-2023-tavns-heart-rate-variability-systematic-review"
      },
      {
        "label": "CLINICAL OUTCOMES / SLEEP",
        "title": "de Oliveira et al. 2025",
        "evidenceType": "Systematic review and meta-analysis",
        "summary": "The review combined a small clinical evidence base on taVNS and insomnia-related outcomes.",
        "lesson": "Read pooled findings together with certainty of evidence, study quality, protocol compatibility and the distinction between the tested devices and a consumer wellness product.",
        "href": "/research/studies/de-oliveira-2025-tavns-insomnia-systematic-review-meta-analysis"
      }
    ],
    "checklist": {
      "eyebrow": "PRACTICAL APPRAISAL",
      "title": "A reusable 12-point VNS study checklist",
      "introduction": "Record what is reported, what remains unclear, and whether each limitation changes the claim you are willing to repeat.",
      "items": [
        {
          "title": "Research question and design",
          "description": "What exact question was the study designed to answer?"
        },
        {
          "title": "Participants and setting",
          "description": "Who was studied, where, and under which eligibility rules?"
        },
        {
          "title": "Exact intervention and device",
          "description": "Which device, anatomical site, electrode and delivery method were used?"
        },
        {
          "title": "Stimulation protocol",
          "description": "What frequency, pulse width, waveform, intensity, duty cycle and session exposure were delivered?"
        },
        {
          "title": "Comparator or sham",
          "description": "What did the control group receive, and could it have been biologically active?"
        },
        {
          "title": "Randomisation and blinding",
          "description": "How were groups assigned, concealed and kept unaware of allocation?"
        },
        {
          "title": "Outcomes and timing",
          "description": "Which outcome was primary, how was it measured, and when?"
        },
        {
          "title": "Effect estimate and uncertainty",
          "description": "How large was the difference, and how precise was the estimate?"
        },
        {
          "title": "Missing data and analysis",
          "description": "Who entered the analysis, who dropped out, and how were missing data handled?"
        },
        {
          "title": "Harms and tolerability",
          "description": "How were adverse events defined, collected, compared and linked to discontinuation?"
        },
        {
          "title": "Registration, bias and interests",
          "description": "Was the study registered, were plans accessible, and who funded or influenced it?"
        },
        {
          "title": "Applicability and evidence transfer",
          "description": "Does this exact device, protocol, population and intended use match the new claim?"
        }
      ]
    },
    "faq": [
      {
        "question": "Does randomized mean the result is definitive?",
        "answer": "No. Randomisation can reduce confounding, but reliability still depends on allocation concealment, blinding where feasible, protocol fidelity, outcome measurement, missing data, analysis choices, sample size and selective reporting."
      },
      {
        "question": "Does p < 0.05 prove that a VNS intervention works?",
        "answer": "No. A p value does not show effect size, precision, practical importance, bias or applicability. Read the estimate and confidence interval, the prespecified outcome, the comparison used and the wider evidence."
      },
      {
        "question": "Is a meta-analysis automatically the strongest evidence?",
        "answer": "No. A meta-analysis is a statistical synthesis. Its value depends on the review methods, risk of bias, compatibility of studies, missing evidence, model choices and certainty of evidence for each outcome."
      },
      {
        "question": "Can a sham condition be biologically active?",
        "answer": "Yes. Electrical stimulation at low intensity or another site can create sensation and may influence somatic or physiological pathways. The sham must be described and its credibility and possible activity considered."
      },
      {
        "question": "Does a change in HRV or fMRI prove a meaningful benefit?",
        "answer": "No. HRV and fMRI can provide physiological or mechanistic information. They do not automatically establish target engagement, symptom improvement, clinical importance or a product-specific benefit."
      },
      {
        "question": "Can a taVNS study be used as proof for Neuvago?",
        "answer": "Only if a defensible product-specific bridge exists. The exact device, electrode, placement, protocol, population, intended use and outcome must be relevant. General field research remains educational context unless that bridge is documented."
      }
    ],
    "sources": [
      {
        "id": "consort-2025",
        "authors": "Hopewell S, Chan A-W, Collins GS, et al.",
        "title": "CONSORT 2025 statement: updated guideline for reporting randomised trials",
        "publication": "BMJ",
        "year": 2025,
        "type": "reporting-guideline",
        "url": "https://www.bmj.com/content/389/bmj-2024-081123",
        "doi": "10.1136/bmj-2024-081123",
        "note": "Current reporting standard for randomised trials, including registration, protocols, harms, missing data, intervention delivery and limitations."
      },
      {
        "id": "consort-2025-explanation",
        "authors": "Hopewell S, Chan A-W, Collins GS, et al.",
        "title": "CONSORT 2025 explanation and elaboration: updated guideline for reporting randomised trials",
        "publication": "BMJ",
        "year": 2025,
        "type": "reporting-guideline",
        "url": "https://www.bmj.com/content/389/bmj-2024-081124",
        "doi": "10.1136/bmj-2024-081124",
        "note": "Explains why complete reporting is necessary before readers can judge the reliability and validity of a trial."
      },
      {
        "id": "prisma-2020",
        "authors": "Page MJ, McKenzie JE, Bossuyt PM, et al.",
        "title": "The PRISMA 2020 statement: an updated guideline for reporting systematic reviews",
        "publication": "BMJ / PRISMA Executive",
        "year": 2021,
        "type": "systematic-review-guidance",
        "url": "https://www.prisma-statement.org/prisma-2020-statement",
        "doi": "10.1136/bmj.n71",
        "note": "Reporting framework for systematic reviews, including search, selection, synthesis and transparent flow of included evidence."
      },
      {
        "id": "cochrane-handbook",
        "authors": "Higgins JPT, Thomas J, Chandler J, et al., editors",
        "title": "Cochrane Handbook for Systematic Reviews of Interventions, version 6.5 with 6.5.1 corrections",
        "publication": "Cochrane",
        "year": 2025,
        "type": "systematic-review-guidance",
        "url": "https://training.cochrane.org/handbook/current",
        "note": "Methods reference for effect measures, heterogeneity, missing evidence, meta-analysis and interpretation of intervention evidence."
      },
      {
        "id": "rob-2",
        "authors": "Sterne JAC, Savović J, Page MJ, et al.",
        "title": "RoB 2: a revised tool for assessing risk of bias in randomised trials",
        "publication": "BMJ / Risk of Bias tools",
        "year": 2019,
        "type": "risk-of-bias-tool",
        "url": "https://www.riskofbias.info/welcome/rob-2-0-tool",
        "doi": "10.1136/bmj.l4898",
        "note": "Structured assessment of bias arising from randomisation, deviations, missing outcomes, outcome measurement and selective reporting."
      },
      {
        "id": "grade-book",
        "authors": "GRADE Working Group",
        "title": "GRADE Book: official guidance for assessing certainty of evidence",
        "publication": "GRADE Working Group",
        "year": 2024,
        "type": "evidence-framework",
        "url": "https://book.gradepro.org/about",
        "note": "Living official resource for judging confidence in an effect estimate across a body of evidence; chapters are being added and unreplaced sections still refer readers to the original GRADE Handbook."
      },
      {
        "id": "farmer-2021",
        "authors": "Farmer AD, Strzelczyk A, Finisguerra A, et al.",
        "title": "International consensus based review and recommendations for minimum reporting standards in research on transcutaneous vagus nerve stimulation (version 2020)",
        "publication": "Frontiers in Human Neuroscience",
        "year": 2021,
        "type": "methods-paper",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33854421/",
        "doi": "10.3389/fnhum.2020.568051",
        "pmid": "33854421",
        "note": "tVNS-specific reporting recommendations for anatomy, device, electrodes, parameters, controls, participants, outcomes and safety."
      },
      {
        "id": "tidier-2014",
        "authors": "Hoffmann TC, Glasziou PP, Boutron I, et al.",
        "title": "Better reporting of interventions: template for intervention description and replication (TIDieR) checklist and guide",
        "publication": "BMJ",
        "year": 2014,
        "type": "methods-paper",
        "url": "https://www.bmj.com/content/348/bmj.g1687",
        "doi": "10.1136/bmj.g1687",
        "pmid": "24609605",
        "note": "Shows why intervention and comparator details must be complete enough for replication, including dose, delivery, tailoring and fidelity."
      },
      {
        "id": "nimh-target-engagement",
        "authors": "National Institute of Mental Health",
        "title": "NIMH’s New Focus in Clinical Trials",
        "publication": "National Institute of Mental Health",
        "year": 2013,
        "type": "official-guidance",
        "url": "https://www.nimh.nih.gov/funding/grant-writing-and-application-process/concept-clearances/2013/nimhs-new-focus-in-clinical-trials",
        "note": "Defines target engagement as verification that an intervention affected its predicted target and keeps that question separate from clinical outcomes."
      }
    ],
    "relatedLinks": [
      {
        "title": "Research hub",
        "description": "Start with the wider Neuvago evidence layer and its boundaries.",
        "href": "/research",
        "label": "Open research hub"
      },
      {
        "title": "Scientific studies library",
        "description": "Apply the framework to individual VNS, taVNS, HRV, safety and sleep papers.",
        "href": "/research/studies",
        "label": "Browse studies"
      },
      {
        "title": "VNS research overview",
        "description": "Place one paper inside the broader implanted and non-invasive VNS field.",
        "href": "/research/topics/vagus-nerve-stimulation",
        "label": "Explore VNS research"
      },
      {
        "title": "Transcutaneous VNS research",
        "description": "Review tVNS and taVNS protocol variables, controls and target-engagement limits.",
        "href": "/research/topics/transcutaneous-vagus-nerve-stimulation",
        "label": "Explore tVNS research"
      },
      {
        "title": "Auricular VNS research",
        "description": "Connect study interpretation with outer-ear anatomy, electrodes, sham and placement.",
        "href": "/research/topics/auricular-vagus-nerve-stimulation",
        "label": "Explore auricular research"
      },
      {
        "title": "Safety and tolerability",
        "description": "Read adverse-event evidence with exposure, exclusions and reporting quality visible.",
        "href": "/research/topics/safety-and-tolerability",
        "label": "Review safety research"
      },
      {
        "title": "Randomized controlled trial",
        "description": "Use the glossary definition before interpreting trial labels.",
        "href": "/glossary/randomized-controlled-trial",
        "label": "Open definition"
      },
      {
        "title": "Systematic review",
        "description": "Distinguish a transparent review method from a general narrative overview.",
        "href": "/glossary/systematic-review",
        "label": "Open definition"
      },
      {
        "title": "Meta-analysis",
        "description": "Understand pooling, heterogeneity and why precision can be misleading.",
        "href": "/glossary/meta-analysis",
        "label": "Open definition"
      },
      {
        "title": "Certainty of evidence",
        "description": "Separate confidence in a body of evidence from the design label of one paper.",
        "href": "/glossary/certainty-of-evidence",
        "label": "Open definition"
      },
      {
        "title": "Sham stimulation",
        "description": "Review why a control condition can affect both blinding and physiology.",
        "href": "/glossary/sham-stimulation",
        "label": "Open definition"
      },
      {
        "title": "Target engagement",
        "description": "Keep target verification separate from clinical and wellness outcomes.",
        "href": "/glossary/target-engagement",
        "label": "Open definition"
      }
    ],
    "sitemapPriority": 0.82,
    "changeFrequency": "weekly"
  },
  "no": {
    "id": "how-to-read-vns-study",
    "locale": "no",
    "languageTag": "nb-NO",
    "openGraphLocale": "nb_NO",
    "path": "/no/forskning/slik-leser-du-en-vns-studie",
    "counterpartPath": "/research/how-to-read-a-vns-study",
    "defaultPath": "/research/how-to-read-a-vns-study",
    "status": "published",
    "kind": "research-literacy",
    "order": 10,
    "title": "Slik leser du en VNS-studie – design, protokoll og evidensgrenser",
    "seoTitle": "Slik leser du en VNS-studie | Evidensguide | Neuvago",
    "description": "Bruk en 12-trinns guide til VNS- og taVNS-studier: design, protokoll, sham, utfall, effekt, skjevhet, skade, evidenssikkerhet og overføring.",
    "eyebrow": "FORSKNINGSFORSTÅELSE / VNS-STUDIER",
    "lead": "En overskrift kan fortelle at et resultat var positivt. Den forteller ikke om metoden kunne gjentas, kontrollen var troverdig, effekten var presis, eller funnet gjelder en annen enhet. Guiden viser hva som må kontrolleres før resultatet brukes videre.",
    "shortAnswer": [
      "Navngi forskningsspørsmålet og studiedesignet før du vurderer konklusjonen.",
      "Rekonstruer målgruppe, enhet, plassering, protokoll og kontroll i stedet for å stole på forkortelsen VNS eller taVNS.",
      "Les effektestimat, konfidensintervall, manglende data og uønskede hendelser – ikke bare p-verdi eller ordet signifikant.",
      "Hold target engagement, fysiologiske markører, meningsfulle utfall og produktspesifikk dokumentasjon som separate lag."
    ],
    "hubTitle": "Slik leser du en VNS-studie",
    "hubSummary": "Et 12-trinns rammeverk for studiedesign, målgruppe, protokoll, sham, utfall, effekt, skjevhet, skade, evidenssikkerhet og overførbarhet.",
    "hubLabel": "Guide til forskningsforståelse",
    "primaryKeyword": "hvordan lese en VNS-studie",
    "secondaryKeywords": [
      "slik leser du VNS forskning",
      "taVNS studiedesign",
      "sham stimulering taVNS",
      "tolke VNS klinisk studie",
      "VNS evidenskvalitet",
      "taVNS protokoll rapportering"
    ],
    "publishedAt": "2026-08-27",
    "modifiedAt": "2026-08-27",
    "readingTimeMinutes": 26,
    "authorName": "John Willander",
    "reviewerName": "Neuvago-redaksjonen",
    "framework": {
      "eyebrow": "12-TRINNS LESEMODELL",
      "title": "Tolv kontroller før et VNS-resultat blir en konklusjon",
      "introduction": "Bruk samme rekkefølge for randomiserte studier, mekanismeartikler, sikkerhetsstudier og systematiske oversikter. Vekten varierer med designet, men kontrollene forsvinner ikke.",
      "items": [
        {
          "label": "01",
          "title": "Forskningsspørsmål og design",
          "question": "Hvilket konkret spørsmål var studien laget for å besvare?",
          "whyItMatters": "Mekanisme, gjennomførbarhet, sikkerhet og effekt krever ulike design og utfall.",
          "warning": "Konklusjonen svarer på et bredere spørsmål enn designet kan støtte."
        },
        {
          "label": "02",
          "title": "Deltakere og setting",
          "question": "Hvem ble undersøkt, hvor, og med hvilke inklusjons- og eksklusjonsregler?",
          "whyItMatters": "Alder, helsetilstand, diagnose, eksklusjoner og setting avgjør hvem resultatet kan gjelde for.",
          "warning": "En liten studie av friske frivillige presenteres som evidens for alle brukergrupper."
        },
        {
          "label": "03",
          "title": "Eksakt intervensjon og enhet",
          "question": "Hvilken enhet, anatomisk plassering, elektrode og leveringsmåte ble brukt?",
          "whyItMatters": "VNS, cervikal nVNS og aurikulær taVNS er metodefamilier, ikke utskiftbare produkter.",
          "warning": "Artikkelen bruker bare en forkortelse og utelater maskinvare eller plassering."
        },
        {
          "label": "04",
          "title": "Stimuleringsprotokoll",
          "question": "Hvilken frekvens, pulsbredde, bølgeform, intensitet, stimuleringssyklus og eksponering ble levert?",
          "whyItMatters": "Protokollen påvirker dose, sensasjon, sikkerhet, target engagement og reproduserbarhet.",
          "warning": "Resultatet generaliseres uten innstillingene som trengs for å gjenta studien."
        },
        {
          "label": "05",
          "title": "Kontroll eller sham",
          "question": "Hva mottok kontrollgruppen, og kan betingelsen ha vært biologisk aktiv?",
          "whyItMatters": "En troverdig kontroll hjelper med å skille intervensjon fra forventning, oppmerksomhet, sensasjon og naturlig endring.",
          "warning": "Sham er svakt beskrevet eller kan stimulere et relevant område."
        },
        {
          "label": "06",
          "title": "Randomisering og blinding",
          "question": "Hvordan ble grupper fordelt, allokeringen skjult og deltakerne eller vurdererne blindet?",
          "whyItMatters": "Randomisering og blinding reduserer systematiske forskjeller og skjev utfallsvurdering.",
          "warning": "Studien kalles randomisert uten detaljer om allokering eller blinding."
        },
        {
          "label": "07",
          "title": "Utfall og tidspunkt",
          "question": "Hvilket utfall var primært, hvordan ble det målt, og når?",
          "whyItMatters": "Forhåndsdefinerte utfall og tidspunkt reduserer selektiv vekt på resultatet som ser best ut.",
          "warning": "Et sekundært, undergruppe- eller eksplorativt funn fremstilles som hovedsvaret."
        },
        {
          "label": "08",
          "title": "Effektestimat og usikkerhet",
          "question": "Hvor stor var forskjellen, og hvor presist ble den estimert?",
          "whyItMatters": "Effektstørrelser og konfidensintervaller viser størrelse og usikkerhet som en p-verdi alene ikke viser.",
          "warning": "Statistisk signifikans behandles som bevis for meningsfull eller sikker effekt."
        },
        {
          "label": "09",
          "title": "Manglende data og analyse",
          "question": "Hvem inngikk i analysen, hvem falt fra, og hvordan ble manglende data håndtert?",
          "whyItMatters": "Frafall og analysevalg kan endre både effekten og hvilken populasjon resultatet representerer.",
          "warning": "Bare deltakere som fullførte analyseres uten forklaring av konsekvensene."
        },
        {
          "label": "10",
          "title": "Uønskede hendelser og tolerabilitet",
          "question": "Hvordan ble hendelser definert, samlet inn, sammenlignet og knyttet til avbrudd?",
          "whyItMatters": "Påstander om nytte er ufullstendige uten testet sikkerhetseksponering og god skaderapportering.",
          "warning": "«Godt tolerert» står uten antall, alvorlighet eller kontrollgruppedata."
        },
        {
          "label": "11",
          "title": "Registrering, skjevhet og interesser",
          "question": "Var studien registrert, var planene tilgjengelige, og hvem finansierte eller påvirket arbeidet?",
          "whyItMatters": "Protokoll, analyseplan og interessekonflikter kan avdekke selektive endringer og relevante insentiver.",
          "warning": "Utfall endres etter studiestart eller interessekonflikter er uklare."
        },
        {
          "label": "12",
          "title": "Overførbarhet og evidensoverføring",
          "question": "Matcher enhet, protokoll, målgruppe og tiltenkt bruk den nye påstanden?",
          "whyItMatters": "Generaliserbarhet må begrunnes med likhet, ikke antas fra ordene VNS eller taVNS.",
          "warning": "Feltevidens presenteres som bevis for et annet produkt eller bruksområde."
        }
      ]
    },
    "sections": [
      {
        "id": "sporsmal-og-design",
        "eyebrow": "1 / START MED SPØRSMÅLET",
        "title": "Studiedesignet bestemmer hvilken type svar som er mulig",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Start med forskningsspørsmålet, ikke konklusjonen i sammendraget. En mekanismestudie kan vise at en bane eller markør endret seg. En gjennomførbarhetsstudie kan vise at en prosedyre lot seg gjennomføre. En sikkerhetsstudie kan beskrive hendelser ved testet eksponering. En randomisert studie kan estimere en forskjell mellom grupper. Svarene kan være nyttige, men de er ikke utskiftbare."
          },
          {
            "type": "table",
            "caption": "Vanlige design i VNS-litteraturen",
            "columns": [
              "Design",
              "Hva det kan bidra til å besvare",
              "Hva du bør kontrollere",
              "Hva det ikke kan dokumentere alene"
            ],
            "rows": [
              [
                "Randomisert parallellstudie",
                "Om utfall varierer mellom tildelte grupper",
                "Allokering, skjuling, blinding, forhåndsdefinerte utfall, manglende data",
                "Universell effekt eller relevans for en annen protokoll"
              ],
              [
                "Kryssstudie",
                "Forskjeller innen samme person mellom betingelser",
                "Rekkefølge, washout, carryover, periodeeffekter, blinding",
                "Langtidseffekt uten egnet oppfølging"
              ],
              [
                "Mekanisme- eller nevroavbildningsstudie",
                "Om stimuleringen endrer en foreslått bane eller fysiologisk markør",
                "Tidspunkt, sted, kontroll, signaldefinisjon, mange analyser",
                "Klinisk eller praktisk nytte"
              ],
              [
                "Sikkerhets- eller tolerabilitetsstudie",
                "Hvilke hendelser som oppsto ved testet eksponering",
                "Innsamlingsmåte, antall, alvorlighet, årsak, avbrudd",
                "Effekt eller sikkerhet utenfor testet gruppe og dose"
              ],
              [
                "Systematisk oversikt eller metaanalyse",
                "Hva et definert evidensgrunnlag samlet viser",
                "Søk, inklusjon, risiko for skjevhet, kompatibilitet, manglende evidens",
                "Kvalitet utover de inkluderte studiene eller produktekvivalens"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "summary",
            "title": "En nyttig førstesetning",
            "paragraphs": [
              "Skriv: «Denne studien var laget for å undersøke …» før du skriver hva den fant.",
              "Hvis artikkelens konklusjon er bredere enn setningen, marker avstanden før funnet brukes videre."
            ]
          }
        ]
      },
      {
        "id": "deltakere-intervensjon-og-protokoll",
        "eyebrow": "2 / REKONSTRUER HVA SOM BLE TESTET",
        "title": "Navngi målgruppen, enheten, plasseringen og hele stimuleringseksponeringen",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Forkortelsen taVNS er ikke en fullstendig intervensjonsbeskrivelse. Leseren trenger deltakergruppe, eksakt enhet, elektrode, anatomisk område, side, bølgeform og samlet eksponering. Farmer og kolleger foreslo tVNS-spesifikke minimumsstandarder fordi ufullstendig metodebeskrivelse hindrer replikasjon og ansvarlig sammenligning."
          },
          {
            "type": "numbered",
            "items": [
              "Definer populasjonen: alder, helse eller diagnose, utgangspunkt, setting, eksklusjoner og utvalgsstørrelse.",
              "Identifiser maskinvare og programvare: produsent, modell, elektrode, kontaktmedium, kanal og kontrollgrensesnitt.",
              "Lokaliser stimuleringen presist: cervikal eller aurikulær, venstre eller høyre, navngitt øreområde og aktive og refererende elektroder.",
              "Rekonstruer dosen: strøm eller intensitetsregel, frekvens, pulsbredde, bølgeform, stimuleringssyklus, ramping, øktvarighet, antall økter og oppfølging.",
              "Kontroller hva som faktisk ble levert, ikke bare hva protokollen planla, inkludert etterlevelse, endringer og om protokollen faktisk ble fulgt."
            ]
          },
          {
            "type": "table",
            "caption": "Protokolldetaljer som må forbli synlige",
            "columns": [
              "Område",
              "Eksempler",
              "Hvorfor det endrer tolkningen"
            ],
            "rows": [
              [
                "Anatomi og kontakt",
                "Hals eller øreområde, side, elektrodegeometri, hudforberedelse",
                "Endrer strømveier, sensasjon og antatt nevralt mål"
              ],
              [
                "Elektriske parametere",
                "Frekvens, pulsbredde, bølgeform, amplitude eller titreringsregel",
                "Endrer levert ladning, komfort og fysiologisk respons"
              ],
              [
                "Eksponering",
                "På/av-syklus, øktvarighet, plan, samlet antall økter",
                "Endrer samlet dose og tidsvindu for nytte eller skade"
              ],
              [
                "Levering og etterlevelse",
                "Operatør, app, opplæring, etterlevelse, faktiske innstillinger",
                "Viser om deltakerne mottok planlagt intervensjon"
              ],
              [
                "Samtidige tiltak",
                "Legemidler, terapi, vanlig behandling, livsstilsendringer",
                "Kan skape eller skjule forskjeller mellom grupper"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "scope",
            "title": "Samme forkortelse betyr ikke samme intervensjon",
            "paragraphs": [
              "To studier kan begge bruke betegnelsen taVNS og likevel ha ulike øreområder, elektroder, bølgeformer, intensitetsregler, eksponeringer, sham og målgrupper.",
              "Likhet må vises på protokollnivå før resultater kombineres eller overføres."
            ]
          }
        ]
      },
      {
        "id": "kontroll-sham-og-blinding",
        "eyebrow": "3 / HVA VAR DET KONTRAFAKTISKE?",
        "title": "Sham-betingelsen er en del av forskningsspørsmålet, ikke en fotnote",
        "blocks": [
          {
            "type": "paragraph",
            "text": "En kontrollert studie estimerer en forskjell mellom betingelser. Tolkningen avhenger derfor av hva kontrollgruppen opplevde. I elektrisk stimuleringsforskning kan sham etterligne kontakt, lyd, oppmerksomhet eller sensasjon, men kan også gi somatiske eller fysiologiske effekter. «Sham-kontrollert» er ikke tilstrekkelig beskrivelse alene."
          },
          {
            "type": "cards",
            "items": [
              {
                "label": "TROVERDIGHET",
                "title": "Kunne deltakerne skille gruppene?",
                "description": "Sammenlign sensasjoner, enhetens utseende, kontakt i økten og gjetning av allokering. Blinding kan svikte selv om protokollen sier dobbeltblind."
              },
              {
                "label": "BIOLOGISK AKTIVITET",
                "title": "Kan kontrollen ha påvirket en relevant bane?",
                "description": "Lav intensitet, et annet øreområde eller kort stimulering kan være mindre aktivt, men biologisk inaktivitet bør ikke bare antas."
              },
              {
                "label": "LIK OPPMERKSOMHET",
                "title": "Fikk gruppene samme kontakt og samtidige tiltak?",
                "description": "Forskjeller i personalkontakt, appveiledning, forventning eller vanlig behandling kan bidra til observerte utfall."
              },
              {
                "label": "ANALYSE",
                "title": "Ble blinding vurdert uten overtolkning?",
                "description": "Gjetning av gruppe kan være informativ, men påvirkes både av sensasjon og av om deltakeren opplevde bedring."
              }
            ]
          },
          {
            "type": "callout",
            "tone": "evidence",
            "title": "Effekten tilhører sammenligningen",
            "paragraphs": [
              "En studie estimerer ikke intervensjonens effekt isolert. Den estimerer forskjellen mellom intervensjonen og den konkrete kontrollen som ble brukt.",
              "En annen sham kan endre observert effekt uten at den aktive protokollen endres."
            ]
          }
        ]
      },
      {
        "id": "utfall-effekt-og-usikkerhet",
        "eyebrow": "4 / LES TALLET, IKKE BARE ETIKETTEN",
        "title": "Primærutfall, effektstørrelse og usikkerhet betyr mer enn ordet positiv",
        "blocks": [
          {
            "type": "definition",
            "term": "Primærutfall",
            "definition": "Utfallet som skal besvare hovedspørsmålet, helst forhåndsdefinert med målemetode, tidspunkt og analyse."
          },
          {
            "type": "definition",
            "term": "Effektestimat",
            "definition": "Forskjellen, forholdstallet eller endringen som beskriver størrelsen og retningen på observert effekt."
          },
          {
            "type": "definition",
            "term": "Konfidensintervall",
            "definition": "Et intervall som viser estimatets presisjon innen den statistiske modellen. Et bredt intervall kan romme vesentlig ulike konklusjoner."
          },
          {
            "type": "paragraph",
            "text": "En p-verdi sier noe om hvor forenlige dataene er med en statistisk modell under en nullhypotese. Den sier ikke om effekten er stor, nyttig, presis, uten skjevhet eller relevant for et nytt produkt. Les estimatet, intervallet, enheten, utgangsrisikoen og utfallsskalaen samlet."
          },
          {
            "type": "table",
            "caption": "Les hvert resultat i fire lag",
            "columns": [
              "Lag",
              "Spørsmål",
              "Vanlig feil"
            ],
            "rows": [
              [
                "Utfall",
                "Var dette primært, sekundært, eksplorativt eller post hoc?",
                "Å gjøre et eksplorativt signal til hovedkonklusjon"
              ],
              [
                "Størrelse",
                "Hvor stor var absolutt og relativ forskjell?",
                "Å bruke bare prosentendring eller p-verdi"
              ],
              [
                "Presisjon",
                "Hvilke effekter er fortsatt forenlige med dataene?",
                "Å behandle et bredt intervall som et avklart estimat"
              ],
              [
                "Betydning",
                "Ville forskjellen være viktig for deltakere eller beslutninger?",
                "Å likestille statistisk signifikans med praktisk betydning"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "scope",
            "title": "Mange analyser endrer hvor overraskende et funn er",
            "paragraphs": [
              "Når mange utfall, tidspunkter, undergrupper eller analyser testes, kan noen tilsynelatende positive resultater oppstå tilfeldig.",
              "Se etter forhåndsdefinering, håndtering av multiple tester og tydelig skille mellom bekreftende og eksplorative analyser."
            ]
          }
        ]
      },
      {
        "id": "target-engagement-og-kliniske-utfall",
        "eyebrow": "5 / HOLD EVIDENSLAGENE ADSKILT",
        "title": "Target engagement, biomarkører og kliniske utfall svarer på ulike spørsmål",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Target engagement spør om en intervensjon påvirket det antatte målet. En biomarkør eller avbildningsrespons kan støtte det spørsmålet. Et klinisk eller erfaringsnært utfall spør om deltakerne fikk en meningsfull bedring. Ett lag kan styrke en mekanismeforklaring uten å dokumentere det neste."
          },
          {
            "type": "cards",
            "items": [
              {
                "label": "LEVERING",
                "title": "Enheten leverte stimulering",
                "description": "Elektrisk output, kontakt eller opplevd sensasjon kan bekrefte leveringsforhold, men ikke selektivt nevralt målengasjement (target engagement)."
              },
              {
                "label": "MÅL",
                "title": "Det antatte målet ble påvirket",
                "description": "Et forhåndsdefinert og troverdig mål bør vise forventet endring i et molekylært, nevralt, fysiologisk eller atferdsmessig target."
              },
              {
                "label": "MEDIERING",
                "title": "Endring i målet hang sammen med utfallet",
                "description": "En sterkere årsakskjede undersøker om endring i målet er assosiert med eller medierer endring i det meningsfulle utfallet."
              },
              {
                "label": "UTFALL",
                "title": "Deltakerne fikk en relevant nytte",
                "description": "Utfallet bør være egnet, forhåndsdefinert, målt på riktig tidspunkt og tolket med effektstørrelse og usikkerhet."
              }
            ]
          },
          {
            "type": "callout",
            "tone": "evidence",
            "title": "Sensasjon er ikke target engagement",
            "paragraphs": [
              "Sensasjon kan vise at stimulering ble oppfattet og kan påvirke blinding. Den kan ikke alene vise hvilke nervefibre som ble aktivert eller hvilken nedstrøms effekt som oppsto.",
              "HRV, fMRI, EEG og pupillometri må tilsvarende tolkes som den konkrete markøren som ble målt – ikke som automatisk klinisk nytte."
            ]
          }
        ]
      },
      {
        "id": "skjevhet-manglende-data-og-skade",
        "eyebrow": "6 / SE ETTER HVA SOM KAN FORVRENGE RESULTATET",
        "title": "Risiko for skjevhet, manglende data og skaderapportering kan endre konklusjonen",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Risiko for skjevhet er ikke et generelt inntrykk av om artikkelen ser vitenskapelig ut. Spørsmålet er om design, gjennomføring, analyse eller rapportering systematisk kan flytte resultatet bort fra sannheten. RoB 2 organiserer dette for randomiserte studier rundt randomisering, avvik fra tiltenkt intervensjon, manglende utfall, utfallsmåling og selektiv rapportering."
          },
          {
            "type": "numbered",
            "items": [
              "Sammenlign studieregister, protokoll og analyseplan med publiserte utfall og analyser.",
              "Kontroller om allokeringen var skjult og om utgangsforskjeller tyder på problemer med randomiseringen.",
              "Identifiser avvik fra tildelt intervensjon og om analysen samsvarer med effekten studien skulle estimere.",
              "Tell manglende utfall og sammenlign årsaker til frafall mellom grupper; ikke bruk bare fullføringsprosent.",
              "Spør om utfallsvurderere kan ha blitt påvirket av kunnskap om gruppe eller deltakerens forventninger.",
              "Kontroller om uønskede hendelser ble aktivt innhentet, definert, tidsfestet, gradert og rapportert med gruppetall og avbrudd.",
              "Les finansiering, utstyrsleveranse, forfatterinteresser, datatilgang og sponsors rolle uten å anta at åpenhet alene fjerner skjevhet."
            ]
          },
          {
            "type": "callout",
            "tone": "safety",
            "title": "«Ingen alvorlige uønskede hendelser» er ikke en full sikkerhetsanalyse",
            "paragraphs": [
              "Utsagnet avhenger av utvalgsstørrelse, varighet, eksklusjoner, hendelsesinnsamling, eksponering og om alvorlige og mindre alvorlige hendelser ble rapportert likt.",
              "Fravær av observert skade i en liten eller kort studie er ikke bevis for universell sikkerhet eller egnethet."
            ]
          }
        ]
      },
      {
        "id": "oversikter-metaanalyse-og-evidenssikkerhet",
        "eyebrow": "7 / GÅ FRA ÉN ARTIKKEL TIL HELE EVIDENSGRUNNLAGET",
        "title": "En systematisk oversikt er en metode, en metaanalyse er en beregning, og evidenssikkerhet er en vurdering",
        "blocks": [
          {
            "type": "paragraph",
            "text": "En systematisk oversikt bruker eksplisitte metoder for å finne, velge og vurdere relevante studier. En metaanalyse kombinerer kompatible effektestimater statistisk. En oversikt kan bruke narrativ syntese når studiene er for ulike. Ingen av etikettene garanterer at evidensen er komplett, uten skjevhet eller direkte relevant."
          },
          {
            "type": "table",
            "caption": "Ikke slå sammen disse evidensbegrepene",
            "columns": [
              "Begrep",
              "Hva det beskriver",
              "Hva du bør kontrollere"
            ],
            "rows": [
              [
                "Systematisk oversikt",
                "En transparent metode for å finne og syntetisere et definert evidensgrunnlag",
                "Spørsmål, søk, inklusjon, dupliserte prosesser, risiko for skjevhet, manglende evidens"
              ],
              [
                "Metaanalyse",
                "Et statistisk sammendrag av kompatible studieresultater",
                "Effektmål, modell, heterogenitet, vekting, sensitivitetsanalyser, småstudieeffekter"
              ],
              [
                "Evidenssikkerhet",
                "Tillit til et effektestimat på tvers av evidensen for et definert utfall",
                "Risiko for skjevhet, inkonsistens, indirekthet, upresisjon og publikasjonsskjevhet"
              ],
              [
                "Anbefaling",
                "En vurdering som også inkluderer nytte, skade, verdier, ressurser og kontekst",
                "Hvem som ga den, for hvilken gruppe, og med hvilken styrke og sikkerhet"
              ]
            ]
          },
          {
            "type": "callout",
            "tone": "evidence",
            "title": "Et presist samlet tall kan fortsatt være misvisende",
            "paragraphs": [
              "Sammenstilling av svake, skjeve eller inkompatible studier reparerer ikke begrensningene. Det kan få usikkerheten til å se mindre ut uten å løse indirekthet eller manglende evidens.",
              "Les konfidensintervallet og evidenssikkerheten for hvert viktig utfall, ikke bare oversiktens overordnede konklusjon."
            ]
          }
        ]
      },
      {
        "id": "overforbarhet-og-produktgrenser",
        "eyebrow": "8 / AVGJØR HVOR RESULTATET KAN REISE",
        "title": "Evidensoverføring krever en forsvarlig bro fra studie til påstand",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Det siste spørsmålet er ikke «Var studien positiv?», men «Hva kan dette resultatet faktisk støtte?». Overførbarhet avhenger av samsvar mellom deltakere, intervensjon, kontroll, utfall, setting og oppfølging. Overføring til et produkt krever i tillegg at maskinvare, plassering, protokoll, tiltenkt bruk og regulatorisk kontekst er relevante for den nye enheten og påstanden."
          },
          {
            "type": "bullets",
            "items": [
              "Et funn fra implantert VNS støtter ikke automatisk cervikal eller aurikulær ikke-invasiv stimulering.",
              "Et funn fra én taVNS-enhet eller ett øreområde støtter ikke automatisk en annen elektrode, bølgeform eller dose.",
              "En fysiologisk eller avbildningsmessig respons støtter ikke automatisk en symptom- eller velværepåstand.",
              "En klinisk målgruppe og indikasjon støtter ikke automatisk generell velværebruk hos friske forbrukere.",
              "En oversikt over feltet kan kartlegge kategorien og fortsatt gi ingen produktspesifikk dokumentasjon for Neuvago.",
              "En negativ eller uklar studie kan være informativ om målet, protokoll, kontroll, måling eller hypotesens grenser."
            ]
          },
          {
            "type": "callout",
            "tone": "scope",
            "title": "Neuvagos evidensgrense",
            "paragraphs": [
              "Guiden forklarer hvordan den bredere VNS- og taVNS-litteraturen kan leses. Den gjør ikke litteraturen om til Neuvago-spesifikk klinisk dokumentasjon.",
              "Enhver Neuvago-påstand må samsvare med ferdig enhet, tiltenkt bruk, bruksanvisning, testing, risikostyring og den eksakte dokumentasjonen som tilhører produktet."
            ]
          }
        ]
      }
    ],
    "examples": [
      {
        "label": "MEKANISME / fMRI HOS MENNESKER",
        "title": "Frangos mfl. 2015",
        "evidenceType": "Nevroavbildningsstudie",
        "summary": "Studien undersøkte hjernens respons under elektrisk stimulering ved et ytre øreområde knyttet til aurikulære vagale baner.",
        "lesson": "Les den som kontekst for baner og target engagement. Ikke gjør en avbildningsrespons om til bevis for symptomforbedring eller effekt av en annen enhet.",
        "href": "/research/studies/frangos-2015-auricular-vagus-nerve-stimulation-fmri"
      },
      {
        "label": "SIKKERHET / EVIDENSSYNTESE",
        "title": "Kim mfl. 2022",
        "evidenceType": "Systematisk oversikt og metaanalyse",
        "summary": "Oversikten sammenstilte rapportering av uønskede hendelser i humane taVNS-studier og vurderte den bredere sikkerhetslitteraturen.",
        "lesson": "Les det samlede sikkerhetsbildet sammen med protokollvariasjon, ujevn hendelsesregistrering, studieeksklusjoner og testet eksponeringstid.",
        "href": "/research/studies/kim-2022-tavns-safety-systematic-review-meta-analysis"
      },
      {
        "label": "FYSIOLOGI / HRV",
        "title": "Soltani mfl. 2023",
        "evidenceType": "Systematisk oversikt",
        "summary": "Oversikten vurderte taVNS-studier som målte hjertefrekvensvariabilitet og viste variasjon i protokoller og HRV-metoder.",
        "lesson": "Les HRV som et fysiologisk utfall med metodegrenser. Det er ikke automatisk target engagement, klinisk nytte eller en produktpåstand.",
        "href": "/research/studies/soltani-2023-tavns-heart-rate-variability-systematic-review"
      },
      {
        "label": "KLINISKE UTFALL / SØVN",
        "title": "de Oliveira mfl. 2025",
        "evidenceType": "Systematisk oversikt og metaanalyse",
        "summary": "Oversikten samlet et lite klinisk evidensgrunnlag om taVNS og utfall knyttet til insomni.",
        "lesson": "Les samlede funn sammen med evidenssikkerhet, studiekvalitet, protokollkompatibilitet og skillet mellom testede enheter og et velværeprodukt.",
        "href": "/research/studies/de-oliveira-2025-tavns-insomnia-systematic-review-meta-analysis"
      }
    ],
    "checklist": {
      "eyebrow": "PRAKTISK VURDERING",
      "title": "En gjenbrukbar 12-punkts sjekkliste for VNS-studier",
      "introduction": "Noter hva som er rapportert, hva som er uklart, og om hver begrensning endrer påstanden du er villig til å gjenta.",
      "items": [
        {
          "title": "Forskningsspørsmål og design",
          "description": "Hvilket konkret spørsmål var studien laget for å besvare?"
        },
        {
          "title": "Deltakere og setting",
          "description": "Hvem ble undersøkt, hvor, og med hvilke inklusjons- og eksklusjonsregler?"
        },
        {
          "title": "Eksakt intervensjon og enhet",
          "description": "Hvilken enhet, anatomisk plassering, elektrode og leveringsmåte ble brukt?"
        },
        {
          "title": "Stimuleringsprotokoll",
          "description": "Hvilken frekvens, pulsbredde, bølgeform, intensitet, stimuleringssyklus og eksponering ble levert?"
        },
        {
          "title": "Kontroll eller sham",
          "description": "Hva mottok kontrollgruppen, og kan betingelsen ha vært biologisk aktiv?"
        },
        {
          "title": "Randomisering og blinding",
          "description": "Hvordan ble grupper fordelt, allokeringen skjult og deltakerne eller vurdererne blindet?"
        },
        {
          "title": "Utfall og tidspunkt",
          "description": "Hvilket utfall var primært, hvordan ble det målt, og når?"
        },
        {
          "title": "Effektestimat og usikkerhet",
          "description": "Hvor stor var forskjellen, og hvor presist ble den estimert?"
        },
        {
          "title": "Manglende data og analyse",
          "description": "Hvem inngikk i analysen, hvem falt fra, og hvordan ble manglende data håndtert?"
        },
        {
          "title": "Uønskede hendelser og tolerabilitet",
          "description": "Hvordan ble hendelser definert, samlet inn, sammenlignet og knyttet til avbrudd?"
        },
        {
          "title": "Registrering, skjevhet og interesser",
          "description": "Var studien registrert, var planene tilgjengelige, og hvem finansierte eller påvirket arbeidet?"
        },
        {
          "title": "Overførbarhet og evidensoverføring",
          "description": "Matcher enhet, protokoll, målgruppe og tiltenkt bruk den nye påstanden?"
        }
      ]
    },
    "faq": [
      {
        "question": "Betyr randomisert at resultatet er endelig?",
        "answer": "Nei. Randomisering kan redusere konfunderende forskjeller, men påliteligheten avhenger også av skjult allokering, blinding der det er mulig, om protokollen faktisk ble fulgt, utfallsmåling, manglende data, analysevalg, utvalgsstørrelse og selektiv rapportering."
      },
      {
        "question": "Beviser p < 0,05 at en VNS-intervensjon virker?",
        "answer": "Nei. En p-verdi viser ikke effektstørrelse, presisjon, praktisk betydning, skjevhet eller overførbarhet. Les estimat og konfidensintervall, forhåndsdefinert utfall, kontrollbetingelsen og den samlede evidensen."
      },
      {
        "question": "Er en metaanalyse automatisk den sterkeste evidensen?",
        "answer": "Nei. En metaanalyse er en statistisk syntese. Verdien avhenger av oversiktsmetoden, risiko for skjevhet, kompatibilitet mellom studier, manglende evidens, modellvalg og evidenssikkerhet for hvert utfall."
      },
      {
        "question": "Kan en sham-betingelse være biologisk aktiv?",
        "answer": "Ja. Elektrisk stimulering med lav intensitet eller ved et annet område kan skape sensasjon og påvirke somatiske eller fysiologiske baner. Sham må beskrives, og troverdighet og mulig aktivitet må vurderes."
      },
      {
        "question": "Beviser endring i HRV eller fMRI en meningsfull nytte?",
        "answer": "Nei. HRV og fMRI kan gi fysiologisk eller mekanistisk informasjon. De dokumenterer ikke automatisk target engagement, symptomforbedring, klinisk betydning eller produktspesifikk nytte."
      },
      {
        "question": "Kan en taVNS-studie brukes som bevis for Neuvago?",
        "answer": "Bare når det finnes en forsvarlig produktspesifikk bro. Enhet, elektrode, plassering, protokoll, målgruppe, tiltenkt bruk og utfall må være relevante. Generell feltforskning er ellers utdanningskontekst."
      }
    ],
    "sources": [
      {
        "id": "consort-2025",
        "authors": "Hopewell S, Chan A-W, Collins GS, et al.",
        "title": "CONSORT 2025 statement: updated guideline for reporting randomised trials",
        "publication": "BMJ",
        "year": 2025,
        "type": "reporting-guideline",
        "url": "https://www.bmj.com/content/389/bmj-2024-081123",
        "doi": "10.1136/bmj-2024-081123",
        "note": "Gjeldende rapporteringsstandard for randomiserte studier, inkludert registrering, protokoll, skadeutfall, manglende data, intervensjonslevering og begrensninger."
      },
      {
        "id": "consort-2025-explanation",
        "authors": "Hopewell S, Chan A-W, Collins GS, et al.",
        "title": "CONSORT 2025 explanation and elaboration: updated guideline for reporting randomised trials",
        "publication": "BMJ",
        "year": 2025,
        "type": "reporting-guideline",
        "url": "https://www.bmj.com/content/389/bmj-2024-081124",
        "doi": "10.1136/bmj-2024-081124",
        "note": "Forklarer hvorfor fullstendig rapportering er nødvendig før leseren kan vurdere en studies pålitelighet og gyldighet."
      },
      {
        "id": "prisma-2020",
        "authors": "Page MJ, McKenzie JE, Bossuyt PM, et al.",
        "title": "The PRISMA 2020 statement: an updated guideline for reporting systematic reviews",
        "publication": "BMJ / PRISMA Executive",
        "year": 2021,
        "type": "systematic-review-guidance",
        "url": "https://www.prisma-statement.org/prisma-2020-statement",
        "doi": "10.1136/bmj.n71",
        "note": "Rapporteringsramme for systematiske oversikter, inkludert søk, utvelgelse, syntese og transparent flyt av inkludert evidens."
      },
      {
        "id": "cochrane-handbook",
        "authors": "Higgins JPT, Thomas J, Chandler J, et al., editors",
        "title": "Cochrane Handbook for Systematic Reviews of Interventions, version 6.5 with 6.5.1 corrections",
        "publication": "Cochrane",
        "year": 2025,
        "type": "systematic-review-guidance",
        "url": "https://training.cochrane.org/handbook/current",
        "note": "Metodereferanse for effektmål, heterogenitet, manglende evidens, metaanalyse og tolkning av intervensjonsforskning."
      },
      {
        "id": "rob-2",
        "authors": "Sterne JAC, Savović J, Page MJ, et al.",
        "title": "RoB 2: a revised tool for assessing risk of bias in randomised trials",
        "publication": "BMJ / Risk of Bias tools",
        "year": 2019,
        "type": "risk-of-bias-tool",
        "url": "https://www.riskofbias.info/welcome/rob-2-0-tool",
        "doi": "10.1136/bmj.l4898",
        "note": "Strukturert vurdering av skjevhet fra randomisering, avvik, manglende utfall, utfallsmåling og selektiv rapportering."
      },
      {
        "id": "grade-book",
        "authors": "GRADE Working Group",
        "title": "GRADE Book: official guidance for assessing certainty of evidence",
        "publication": "GRADE Working Group",
        "year": 2024,
        "type": "evidence-framework",
        "url": "https://book.gradepro.org/about",
        "note": "Løpende offisiell ressurs for vurdering av tillit til et effektestimat på tvers av et evidensgrunnlag; nye kapitler legges til, og deler som ikke er erstattet viser fortsatt til den opprinnelige GRADE-håndboken."
      },
      {
        "id": "farmer-2021",
        "authors": "Farmer AD, Strzelczyk A, Finisguerra A, et al.",
        "title": "International consensus based review and recommendations for minimum reporting standards in research on transcutaneous vagus nerve stimulation (version 2020)",
        "publication": "Frontiers in Human Neuroscience",
        "year": 2021,
        "type": "methods-paper",
        "url": "https://pubmed.ncbi.nlm.nih.gov/33854421/",
        "doi": "10.3389/fnhum.2020.568051",
        "pmid": "33854421",
        "note": "tVNS-spesifikke anbefalinger for rapportering av anatomi, enhet, elektroder, parametere, kontroll, deltakere, utfall og sikkerhet."
      },
      {
        "id": "tidier-2014",
        "authors": "Hoffmann TC, Glasziou PP, Boutron I, et al.",
        "title": "Better reporting of interventions: template for intervention description and replication (TIDieR) checklist and guide",
        "publication": "BMJ",
        "year": 2014,
        "type": "methods-paper",
        "url": "https://www.bmj.com/content/348/bmj.g1687",
        "doi": "10.1136/bmj.g1687",
        "pmid": "24609605",
        "note": "Viser hvorfor intervensjon og kontroll må beskrives detaljert nok til replikasjon, inkludert dose, levering, tilpasning og etterlevelse."
      },
      {
        "id": "nimh-target-engagement",
        "authors": "National Institute of Mental Health",
        "title": "NIMH’s New Focus in Clinical Trials",
        "publication": "National Institute of Mental Health",
        "year": 2013,
        "type": "official-guidance",
        "url": "https://www.nimh.nih.gov/funding/grant-writing-and-application-process/concept-clearances/2013/nimhs-new-focus-in-clinical-trials",
        "note": "Definerer target engagement som verifikasjon av at intervensjonen påvirket det antatte målet, adskilt fra kliniske utfall."
      }
    ],
    "relatedLinks": [
      {
        "title": "Forskningshub",
        "description": "Start med Neuvagos bredere evidenslag og de synlige grensene.",
        "href": "/no/forskning",
        "label": "Åpne forskningshuben"
      },
      {
        "title": "Vitenskapelig studiebibliotek",
        "description": "Bruk rammeverket på enkeltartikler om VNS, taVNS, HRV, sikkerhet og søvn.",
        "href": "/research/studies",
        "label": "Bla i studier"
      },
      {
        "title": "VNS-forskning",
        "description": "Plasser én artikkel i det bredere feltet for implantert og ikke-invasiv VNS.",
        "href": "/no/forskning/vagusnervestimulering",
        "label": "Utforsk VNS-forskning"
      },
      {
        "title": "Transkutan VNS-forskning",
        "description": "Se tVNS- og taVNS-parametere, kontrollbetingelser og grenser for target engagement.",
        "href": "/no/forskning/transkutan-vagusnervestimulering",
        "label": "Utforsk tVNS-forskning"
      },
      {
        "title": "Aurikulær VNS-forskning",
        "description": "Koble studietolkning til øreanatomi, elektroder, sham og plassering.",
        "href": "/no/forskning/aurikulaer-vagusnervestimulering",
        "label": "Utforsk aurikulær forskning"
      },
      {
        "title": "Sikkerhet og tolerabilitet",
        "description": "Les hendelsesdata sammen med eksponering, eksklusjoner og rapporteringskvalitet.",
        "href": "/no/forskning/sikkerhet-og-tolerabilitet",
        "label": "Se sikkerhetsforskning"
      },
      {
        "title": "Randomisert kontrollert studie",
        "description": "Bruk ordlistedefinisjonen før du tolker studiedesignets etikett.",
        "href": "/no/ordliste/randomisert-kontrollert-studie",
        "label": "Åpne definisjonen"
      },
      {
        "title": "Systematisk oversikt",
        "description": "Skill en transparent oversiktsmetode fra en generell fortellende oppsummering.",
        "href": "/no/ordliste/systematisk-oversikt",
        "label": "Åpne definisjonen"
      },
      {
        "title": "Metaanalyse",
        "description": "Forstå pooling, heterogenitet og hvorfor presisjon kan være misvisende.",
        "href": "/no/ordliste/metaanalyse",
        "label": "Åpne definisjonen"
      },
      {
        "title": "Evidenssikkerhet",
        "description": "Skill tillit til et samlet evidensgrunnlag fra designetiketten på én artikkel.",
        "href": "/no/ordliste/evidenssikkerhet",
        "label": "Åpne definisjonen"
      },
      {
        "title": "Sham-stimulering",
        "description": "Se hvorfor kontrollbetingelsen kan påvirke både blinding og fysiologi.",
        "href": "/no/ordliste/sham-stimulering",
        "label": "Åpne definisjonen"
      },
      {
        "title": "Target engagement",
        "description": "Hold verifikasjon av målet (target engagement) adskilt fra kliniske og velværerelaterte utfall.",
        "href": "/no/ordliste/target-engagement",
        "label": "Åpne definisjonen"
      }
    ],
    "sitemapPriority": 0.82,
    "changeFrequency": "weekly"
  }
} as const satisfies ResearchGuidePair;
