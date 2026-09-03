# Post-Final-QA rebase status

This editorial source and claims lock is semantically unchanged from V1 and is now bound to current baseline `e3d4cae62c34a7ffd97b15a94444218944822372`. The five intervening Final QA commits did not change the VNS owner pages, intended-use pages, medical disclaimers or source register.

# Wave 2D.2A – Source and claims lock

    ## Review status

    Editorial source suitability review is complete for the implementation contract. A final copy-level claim-to-source check remains mandatory before publication. This lock does **not** claim review or approval by a physician or external medical specialist.

    ## Mandatory distinctions

    1. Electrical VNS is distinct from behavioural practices that may influence autonomic state.
    2. Behavioural practices can affect breathing, subjective state or cardiac autonomic measures without proving direct selective vagus-nerve stimulation.
    3. Implanted medical VNS is distinct from non-invasive systems and Neuvago’s current wellness context.
    4. Evidence from a device, site, protocol or study does not transfer automatically to Neuvago.
    5. Stronger sensation or intensity is not necessarily better.

    ## Source register

    | ID | Tier | Source | Reader-visible |
    |---|---:|---|---:|
    | D-001 | D | Wave 2D.0 Google SERP relevance, PAA and content-gap audit | no |
| D-002 | D | Wave 2D.1 SERP owner, methods-centre and first-batch contract | no |
| D-003 | D | Wave 2D.2A.0 V2 bilingual stimulation-pillars architecture audit | no |
| C-001 | C | Norwegian intended-use page | no |
| C-002 | C | English intended-use page | no |
| C-003 | C | Norwegian medical disclaimer | no |
| C-004 | C | English medical disclaimer | no |
| A-001 | A | Vagus Nerve Stimulator (VNS) System — implanted for epilepsy | yes |
| A-002 | A | Vagus Nerve Stimulator (VNS) System — implanted for depression | yes |
| A-003 | A | Practical Instructions for the 2018 ESC Guidelines for the diagnosis and management of syncope | yes |
| A-004 | A | Doing What Matters in Times of Stress: An Illustrated Guide | yes |
| B-001 | B | International Consensus Based Review and Recommendations for Minimum Reporting Standards in Research on Transcutaneous Vagus Nerve Stimulation (Version 2020) | yes |
| B-002 | B | Critical Review of Transcutaneous Vagus Nerve Stimulation: Challenges for Translation to Clinical Practice | yes |
| B-003 | B | Laboratory Administration of Transcutaneous Auricular Vagus Nerve Stimulation (taVNS): Technique, Targeting, and Considerations | yes |
| B-004 | B | The anatomical basis for transcutaneous auricular vagus nerve stimulation | yes |
| B-005 | B | The nerve supply of the human auricle | yes |
| B-006 | B | Functional and chemical anatomy of the afferent vagal system | yes |
| B-007 | B | Surgically implanted and non-invasive vagus nerve stimulation: a review of efficacy, safety and tolerability | yes |
| B-008 | B | Vagus Nerve and Vagus Nerve Stimulation, a Comprehensive Review: Part I | yes |
| B-009 | B | Vagus Nerve and Vagus Nerve Stimulation, a Comprehensive Review: Part II | yes |
| B-010 | B | Effects of voluntary slow breathing on heart rate and heart rate variability: A systematic review and a meta-analysis | yes |
| B-011 | B | How Breath-Control Can Change Your Life: A Systematic Review on Psycho-Physiological Correlates of Slow Breathing | yes |
| B-012 | B | Vagal Mediation of Low-Frequency Heart Rate Variability During Slow Yogic Breathing | yes |
| B-013 | B | Effects of Different Exercise Interventions on Cardiac Autonomic Control and Secondary Health Factors in Middle-Aged Adults | yes |

    ## Required statements

    | ID | Required meaning | Supporting sources |
    |---|---|---|
    | R01 | The phrase “stimulate the vagus nerve” is used for more than one category and must be defined before methods are compared. | D-001, B-001, B-002 |
| R02 | In medical and technical usage, VNS normally refers to defined electrical stimulation rather than every practice associated with calm or autonomic regulation. | B-007, B-009, A-001, A-002 |
| R03 | Implanted medical VNS uses surgically implanted components and must be kept distinct from non-invasive systems and Neuvago’s wellness context. | A-001, A-002, B-007 |
| R04 | Non-invasive VNS is not one interchangeable method; device, site, waveform, intensity, session design, population and outcome affect interpretation. | B-001, B-002, B-003 |
| R05 | Electrical VNS and behavioural practices are different evidence categories. | B-001, B-002, B-010 |
| R06 | Slow breathing can influence heart rate and HRV-related autonomic measures, but this does not by itself establish direct, selective electrical stimulation of the vagus nerve. | B-010, B-011, B-012 |
| R07 | Exercise and other behavioural practices may influence autonomic state or subjective experience, but effects depend on the practice, population and outcome. | B-013, A-004 |
| R08 | The human outer ear has heterogeneous innervation; the whole ear must not be described as a uniform vagal target. | B-004, B-005 |
| R09 | Auricular, cervical and implanted stimulation are different sites and methods, not interchangeable labels. | B-003, B-004, B-007 |
| R10 | There is no universal source-backed best stimulation site, waveform, intensity or protocol for every purpose. | B-001, B-002 |
| R11 | Stronger sensation or higher intensity is not proof of better vagal engagement or better outcomes. | B-001, B-002 |
| R12 | A person can use ordinary low-risk practices such as paced breathing or movement, but those practices should not be relabelled as proven electrical VNS. | A-004, B-010, B-013 |
| R13 | There is no universal fixed time in which the vagus nerve can be guaranteed to be stimulated or “reset.” | D-001, B-001, B-002 |
| R14 | Carotid sinus massage and strong pressure at the neck are not generic self-help techniques; carotid sinus massage is described in monitored clinical diagnostic guidance. | A-003 |
| R15 | Symptoms, sensations, HRV values and online self-tests do not diagnose weak, damaged, trapped, inflamed or imbalanced vagus-nerve function. | B-006, B-010, C-003, C-004 |
| R16 | Evidence from an implanted system, another non-invasive device or a research protocol does not transfer automatically to Neuvago. | B-001, B-002, C-001, C-002 |
| R17 | Neuvago may be introduced only within the current committed intended-use and medical-disclaimer boundary, without disease claims. | C-001, C-002, C-003, C-004 |
| R18 | Product-specific frequency, duration, contraindications, precautions and stop-use rules remain outside this wave until their dedicated product/IFU gates are closed. | D-002, C-001, C-002 |

    ## Prohibited claim families

    | ID | Prohibited claim |
    |---|---|
    | P01 | Neuvago treats, prevents, cures or diagnoses any disease or disorder. |
| P02 | Breathing, massage, movement, humming, sound, cold or relaxation is proven to directly and selectively stimulate the vagus nerve without qualification. |
| P03 | The vagus nerve can be guaranteed to reset in seven minutes or through one universal technique. |
| P04 | Symptoms, HRV or a home test prove vagus-nerve dysfunction. |
| P05 | Evidence from one device, protocol, indication or study transfers automatically to another product. |
| P06 | Stronger electrical stimulation is necessarily better. |
| P07 | Carotid sinus massage or strong neck pressure is a universally safe self-help technique. |
| P08 | Product-specific frequency, duration, contraindications, precautions or stop-use rules may be inferred before the dedicated product/IFU gate. |
| P09 | A People Also Ask formulation may be repeated as fact when its premise is unsupported. |
| P10 | The whole ear is a uniform vagal target. |
| P11 | All implanted, cervical, transcutaneous and auricular VNS systems are interchangeable. |
| P12 | “FDA-approved VNS” may be used as a blanket category statement without device, product code, indication and jurisdiction. |
| P13 | Implanted VNS approval or evidence proves Neuvago efficacy or safety. |
| P14 | A general-wellness intended use is equivalent to clinical treatment. |
| P15 | Non-invasive means risk-free or appropriate for everyone. |
| P16 | A tingling or pulsing sensation proves vagal target engagement. |
| P17 | One stimulation site is universally optimal. |
| P18 | One protocol, intensity or session duration is universally optimal. |
| P19 | Manual pressure can safely reach or activate the cervical vagus nerve as a generic home technique. |
| P20 | Neuvago is a medical treatment, medical diagnostic tool or substitute for professional care. |
| P21 | A “best device” or competitor-ranking claim is allowed without the C5 comparison methodology. |
| P22 | The page may promise sales, symptom relief or clinical outcomes from the methods-centre pathway. |

    ## Safety boundary

    Carotid sinus massage and strong pressure at the neck must not be presented as generic self-help. The ESC source is used only to establish that carotid sinus massage is a monitored clinical diagnostic manoeuvre. No procedural DIY instructions may be reproduced.

    ## Product boundary

    Neuvago may be mentioned only within the exact committed intended-use and medical-disclaimer boundary. Product-specific frequency, duration, contraindications, precautions and stop-use rules remain gated outside this wave.
