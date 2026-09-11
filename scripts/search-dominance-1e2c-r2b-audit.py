#!/usr/bin/env python3
from pathlib import Path
import csv, hashlib, json, re, sys

repo=Path(sys.argv[1]).resolve()
out=Path(sys.argv[2]).resolve()
out.mkdir(parents=True,exist_ok=True)

EXPECTED_PUBLIC_HASHES={'src/app/(en)/conditions/anxiety/page.tsx': 'ef8407ffbde2753067bc27a7557825e74ddb47701e70bc38f1da5ed4c9b7824a',
 'src/app/(en)/conditions/burnout/page.tsx': 'bd41335f4a1e76912e6c5131ef34e34e10183e0ca6159d694a22116a00f08153',
 'src/app/(en)/conditions/sleep/page.tsx': '672a6da4b5581105ae47f99f765e0907a1c2bf31a9828bc0063ad58c023b609e',
 'src/app/(en)/conditions/stress/page.tsx': '5eb56fbdf82baf66b7cd50b26885f2000f94c0d2aa69652bb30ee1825345e878',
 'src/app/(en)/learn/autonomic-nervous-system/page.tsx': 'f6d42e22f84a21bdc6bb12ddb3b7ba897640d4fe754cd2f22765414d7084374d',
 'src/app/(en)/learn/breathing-exercises-and-the-vagus-nerve/page.tsx': '4af7567a5b06702da016d9d373335cbe9a98689b24f39c1e00c9857ff7e15dd7',
 'src/app/(en)/learn/emotional-regulation-and-the-nervous-system/page.tsx': '252c3d2c7d7557e7f3eaf1b0b94aedc801ceecb9fb78429185420a4828edd9bb',
 'src/app/(en)/learn/fight-flight-freeze/page.tsx': '156588012b502c082a65617f0d8426cbf60dd92e1c15b6d4cd38947f90904d2e',
 'src/app/(en)/learn/non-invasive-vagus-nerve-stimulation/page.tsx': '0ab54235dab8041f3935728a0879a92b6a6d82514e95ec7aecccf7266bd32158',
 'src/app/(en)/learn/parasympathetic-nervous-system/page.tsx': 'b83a471a326358315b83fd8652e678a1f24e72b42629111807dc378fff3ea471',
 'src/app/(en)/learn/recovery-and-regulation/page.tsx': 'eb19b9f3005e5365912902b15c8f21493f2dafaebfe18ed80b122817a2153e17',
 'src/app/(en)/learn/signs-of-a-dysregulated-nervous-system/page.tsx': 'bae53e75d2e0c8bfda863adf0aed2257c6d4615a027de3fc352ef6ac7a923460',
 'src/app/(en)/learn/sympathetic-vs-parasympathetic-nervous-system/page.tsx': '65177e74f7caf80cadef853f9427f3a551cf570cfd81028eaaaf950e60a09fc4',
 'src/app/(en)/learn/vagal-tone/page.tsx': 'df4b4a35f42c5c1d8f7c88b9f1cae1eddbeed692efae024fe6475c16951e36d4',
 'src/app/(en)/learn/vagus-nerve-anatomy/page.tsx': '95c0ef5d140de571d34745c9145ec1323b397edeb51873fcb5e82f2df9aee9a6',
 'src/app/(en)/learn/vagus-nerve-in-the-ear/page.tsx': '17275142cdc17ab4deb14fd80906f5529d82e5b9065abbcda863964133666195',
 'src/app/(en)/learn/vagus-nerve-massage/page.tsx': '6f771af6713f1853f26babe3a722e0d829de49a0f60ea1c25c64c50fc720278d',
 'src/app/(en)/learn/vagus-nerve/page.tsx': 'eb3722c345febdac9e5cef91bf5cd30f04ca6f14f6046c7691f23135273a4715',
 'src/app/(en)/learn/what-nervous-system-regulation-feels-like/page.tsx': '4d1e30c3645db4af4c53ab801787445640eae186d2c659930b2aa02ec4594c9b',
 'src/app/(en)/learn/why-you-feel-tired-but-cant-relax/page.tsx': '4f15a5b92149c50969046e886e44528b6453b36bb0ad2c8535bbdd3ab11a7211',
 'src/app/(en)/learn/why-your-body-feels-stuck-in-stress/page.tsx': '9ef6354e3811d92f776fc777a30abbc36ebe60b91ba5b283715ef778379f68d1',
 'src/app/(en)/open-app/page.tsx': 'f85ade9ff8542bcfaa61b2bdd2249eb96fc98c961ce080909d48f74957ee99dc',
 'src/app/(en)/research/topics/autonomic-regulation/page.tsx': '66cb47e7a7efe5218a3c5d72ccc3c50762c584cc5fb7aaa2e6c2c1bee6c2b4e4',
 'src/app/(en)/research/topics/gut-brain-axis/page.tsx': 'c159df3499a0003fcf630f9a8bf579918938e3cd7761c7aca265f35f94aa8b38',
 'src/app/(en)/research/topics/heart-rate-variability/page.tsx': '379566b69430869e240f8f751646f1359a286923258ffce0064ff54b634790bf',
 'src/app/(en)/research/topics/inflammation/page.tsx': 'a5a95929f4e83881cbd93821210ceb2e12db83c64e4c4d7477baeef33fc1bae2',
 'src/app/(en)/research/topics/safety-and-tolerability/page.tsx': 'c2d278d4a9fc4e23e45cb72ca90129ea11eabd47c83925f1e5932a53dbb0d1f5',
 'src/app/(en)/research/topics/transcutaneous-vagus-nerve-stimulation/page.tsx': '269b2aeef13bcb3573d93e257a6be979a16cb146f588a6f1346bf2d02017f69a',
 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx': '11dd01abb53861b53fd2bed4a415f130e3eac38f08ced1cdc83f78e17506dd9c',
 'src/components/glossary/GlossaryHubPage.tsx': '98b043a1ab474519df6fa4dd84a96fff19ec9a56eba1d63e117665d6d4eb2efb',
 'src/components/glossary/GlossaryTermPage.tsx': '699f760534b0751df509123082b9b42b59d6ad737d1b801b0f6be5e23a6425e0',
 'src/content/conditions/no/pages/hverdagsuro.ts': '36f63dfb2d5aa456b680c78ec2d0e04ce2ecdd2ec2cfd76617fd931969b7da61',
 'src/content/decision-guides/ear-vs-neck-vns.ts': '6970394aad46606ce44f97827b63f18aef43fcd3190a6190041b8af1b546d3a9',
 'src/content/knowledge/no/articles/pusteovelser-og-vagusnerven.ts': '59bb3524bfd42408a57516707cd65e9ca0ebfc0af50188e7057b8f84c12fa2c2',
 'src/content/knowledge/no/articles/tens-og-vagusnervestimulering.ts': '4e1277bcb180526fa185d13f513905c415640fb01ba8564eb90e11ac4c824d47',
 'src/content/knowledge/no/articles/vagusnerven-og-massasje.ts': '67c0497f8128b50a8bf5d6ab464437337525eb4b91cead3dffc297f3ec79a3db',
 'src/content/knowledge/no/articles/vagusnervestimulering.ts': 'fac6205c52529c7f7afe4c34ad083774a0c4748024630b2cfcf7ecbfe3405c8b'}
EDITS=[{'new': 'title: "Product boundary",', 'old': 'title: "Neuvago boundary",', 'path': 'src/app/(en)/research/topics/autonomic-regulation/page.tsx'},
 {'new': 'What autonomic regulation means in research',
  'old': 'What autonomic regulation means in the Neuvago research library',
  'path': 'src/app/(en)/research/topics/autonomic-regulation/page.tsx'},
 {'new': 'Autonomic context', 'old': 'The system layer', 'path': 'src/app/(en)/research/topics/autonomic-regulation/page.tsx'},
 {'new': 'For readers, the practical value is understanding why stress, sleep,\n'
         '              recovery, HRV, and vagus nerve stimulation often appear in the\n'
         '              same physiology discussion.',
  'old': 'For Neuvago, the point is not to make users memorize physiology.\n'
         '              The point is to explain why stress, sleep, recovery, HRV, and\n'
         '              vagus nerve stimulation belong in the same knowledge system.',
  'path': 'src/app/(en)/research/topics/autonomic-regulation/page.tsx'},
 {'new': 'This overview is not a systematic review. It highlights selected\n'
         '              research directions and foundational sources that help explain\n'
         '              how autonomic regulation is interpreted.',
  'old': 'This page is not a final systematic review. It is a topic layer\n'
         '              that organizes important research directions and links out to\n'
         '              foundational sources that shape how autonomic regulation is\n'
         '              interpreted.',
  'path': 'src/app/(en)/research/topics/autonomic-regulation/page.tsx'},
 {'new': 'Its practical value is helping readers understand the science vocabulary\n'
         '              before considering how the Neuvago device and app fit into\n'
         '              guided wellness routines.',
  'old': 'Its practical value is helping readers understand the science vocabulary\n'
         '              before moving into how the Neuvago product and app are designed\n'
         '              for guided wellness routines.',
  'path': 'src/app/(en)/research/topics/autonomic-regulation/page.tsx'},
 {'new': 'Continue from autonomic regulation into related guides,\n              conditions, and practical use',
  'old': 'Autonomic regulation connects the research library to Learn,\n              Conditions, and the product experience',
  'path': 'src/app/(en)/research/topics/autonomic-regulation/page.tsx'},
 {'new': 'See how Neuvago turns research context into guided everyday use',
  'old': 'Move from research context into how Neuvago is designed and used',
  'path': 'src/app/(en)/research/topics/autonomic-regulation/page.tsx'},
 {'new': 'Interpretation note', 'old': 'Topic note', 'path': 'src/app/(en)/research/topics/autonomic-regulation/page.tsx'},
 {'new': 'This material is educational and research-oriented. It is not medical\n'
         '              advice and should not be used to diagnose, treat, prevent, or cure',
  'old': 'This page is educational and research-oriented. It is not medical\n              advice and should not be used to diagnose, treat, prevent, or cure',
  'path': 'src/app/(en)/research/topics/autonomic-regulation/page.tsx'},
 {'new': 'The research connects physiology, measurement, stress, and VNS\n              interpretation',
  'old': 'The topic connects physiology, measurement, stress, and VNS\n              interpretation',
  'path': 'src/app/(en)/research/topics/autonomic-regulation/page.tsx'},
 {'new': 'Research on gut–brain communication spans vagal signaling,\n'
         '              microbiome-related processes, immune and endocrine pathways, and broader\n'
         '              brain–body regulation. This overview brings those strands together before\n'
         '              the individual studies.',
  'old': 'This topic page organizes research related to gut–brain communication,\n'
         '              including vagal signaling, microbiome-related processes, immune and endocrine\n'
         '              pathways, and broader brain–body regulation. It is designed to provide\n'
         '              a structured overview before readers move into individual studies.',
  'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': '<span>1 study summary</span>', 'old': '<span>Current topic: 1 study summary</span>', 'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': '<span>Brain–body communication</span>',
  'old': '<span>Built around brain–body communication</span>',
  'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': '<span>Neural + immune + endocrine pathways</span>',
  'old': '<span>Designed to grow over time</span>',
  'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': 'Together, these research strands frame the gut–brain axis as a broader\n'
         '              scientific framework rather than a narrow digestive topic alone.',
  'old': 'This topic page groups the literature so the gut–brain axis can be\n'
         '              understood as a broader scientific framework rather than as a narrow\n'
         '              digestive topic alone.',
  'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': 'Key research areas', 'old': 'What this topic includes', 'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': 'Foundational study', 'old': 'Foundational studies in this topic', 'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': 'A foundational reference for gut–brain axis research',
  'old': 'The first anchor study in the gut–brain axis track',
  'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': 'Reading gut–brain research', 'old': 'How this topic fits the library', 'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': 'Compare mechanisms and study context before drawing conclusions',
  'old': 'Topic pages help a growing studies library stay usable as it expands',
  'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': 'Gut–brain axis research spans neural, immune, endocrine, digestive,\n'
         '              and microbial mechanisms. Reading studies by mechanism and design\n'
         '              makes it easier to see what each result actually addresses.',
  'old': 'As more studies are added, topic pages make it easier to browse\n'
         '              the literature by subject area rather than by title alone. This is\n'
         '              especially useful in gut–brain axis research, where neural, immune,\n'
         '              endocrine, digestive, and microbial mechanisms intersect.',
  'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': 'Related research paths include inflammation, vagal signaling, IBS,\n              stress physiology, and broader brain–body communication.',
  'old': 'Over time, this topic page can expand to include more studies,\n'
         '              clearer internal grouping, and stronger links into adjacent research\n'
         '              themes such as inflammation, vagal signaling, IBS, stress physiology,\n'
         '              and brain–body communication.',
  'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': 'Research scope', 'old': 'Topic note', 'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': 'This overview highlights selected gut–brain research and is not a\n'
         '              systematic review. Use the individual study summaries and source links\n'
         '              to evaluate methods, populations, outcomes, and the limits of each finding.',
  'old': 'This topic page is intended as a growing research index rather than\n'
         '              a final review article. It is designed to organize the literature as\n'
         '              the studies library expands across gut–brain communication, vagal pathways,\n'
         '              microbiome research, digestive regulation, and broader brain–body signaling.',
  'path': 'src/app/(en)/research/topics/gut-brain-axis/page.tsx'},
 {'new': 'Explore other major research topics connected to HRV.',
  'old': 'Return to the broader topic layer to explore other major subject areas in the research library.',
  'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': 'HRV research spans measurement standards, autonomic flexibility,\n'
         '              vagal regulation, emotional regulation, and stress physiology. This\n'
         '              overview brings those areas together before the individual studies.',
  'old': 'This topic page organizes research related to heart rate variability\n'
         '              (HRV), including measurement standards, autonomic flexibility, vagal\n'
         '              regulation, emotional regulation, and stress physiology. It is designed\n'
         '              to provide a structured overview before readers move into individual studies.',
  'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': '<span>2 study summaries</span>',
  'old': '<span>Current topic: 2 study summaries</span>',
  'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': '<span>Measurement + autonomic context</span>',
  'old': '<span>Built to grow over time</span>',
  'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': 'Taken together, the literature shows HRV as both a measurement method\n'
         '              and a broader research area tied to vagal regulation, stress responses,\n'
         '              and autonomic flexibility.',
  'old': 'This topic page groups the literature together so HRV can be understood\n'
         '              not only as a measurement technique, but as a broader research track\n'
         '              tied to vagal regulation, stress responses, and autonomic balance.',
  'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': 'Key research areas', 'old': 'What this topic includes', 'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': 'Foundational studies', 'old': 'Foundational studies in this topic', 'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': 'Two foundational references for HRV research',
  'old': 'The first two anchor studies in the HRV track',
  'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': 'Reading HRV research', 'old': 'How this topic fits the library', 'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': 'Methodology matters when comparing HRV findings',
  'old': 'Topic pages help a growing studies library stay usable as it expands',
  'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': 'HRV findings are especially sensitive to methodology, context, and\n'
         '              how autonomic signals are interpreted. Comparing studies therefore\n'
         '              requires attention to measurement method, recording conditions, and population.',
  'old': 'As more studies are added, topic pages make it easier to browse\n'
         '              the literature by subject area rather than by title alone. This is\n'
         '              especially useful in HRV research, where interpretation depends heavily\n'
         '              on methodology, context, and how autonomic signals are understood.',
  'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': 'Related research paths include stress physiology, sleep, vagal signaling,\n              emotional regulation, and broader autonomic regulation.',
  'old': 'Over time, this topic page can expand to include more studies,\n'
         '              stronger internal grouping, and clearer links into adjacent research\n'
         '              themes such as stress physiology, sleep, vagal signaling, and emotional regulation.',
  'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': 'Research scope', 'old': 'Topic note', 'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': 'This overview highlights selected HRV methodology and theory sources\n'
         '              and is not a systematic review. Read individual studies in light of\n'
         '              measurement method, recording conditions, population, and outcome.',
  'old': 'This topic page is intended as a growing research index rather than\n'
         '              a final review article. It is designed to organize the literature as\n'
         '              the studies library expands across HRV methodology, autonomic flexibility,\n'
         '              vagal regulation, and stress-related physiology.',
  'path': 'src/app/(en)/research/topics/heart-rate-variability/page.tsx'},
 {'new': 'Explore other major research topics connected to inflammation.',
  'old': 'Return to the broader topic layer to explore other major subject areas in the research library.',
  'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': 'Inflammation research here spans neuroimmune signaling, the inflammatory\n'
         '              reflex, cytokine regulation, and vagus-related immune communication.\n'
         '              This overview brings those areas together before the individual studies.',
  'old': 'This topic page organizes research related to inflammation,\n'
         '              neuroimmune signaling, the inflammatory reflex, cytokine regulation,\n'
         '              and vagus-related immune communication. It is designed to provide a\n'
         '              structured overview before readers move into individual studies.',
  'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': '<span>3 study summaries</span>',
  'old': '<span>Current topic: 3 study summaries</span>',
  'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': '<span>Neuroimmune + mechanism context</span>',
  'old': '<span>Built to grow over time</span>',
  'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': 'A central theme in inflammation research is the idea that inflammatory\n'
         '              regulation may involve not only biochemical signaling, but also neural\n'
         '              circuits and autonomic communication pathways.',
  'old': 'Inflammation research within this library focuses on a major shift\n'
         '              in scientific thinking: the idea that inflammatory regulation may\n'
         '              involve not only biochemical signaling, but also neural circuits\n'
         '              and autonomic communication pathways.',
  'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': 'Together, these studies frame inflammation as a broader neuroimmune\n'
         '              research area rather than a set of isolated mechanisms or findings.',
  'old': 'This topic page groups the literature together so the field can be\n'
         '              understood as a broader neuroimmune research track rather than only\n'
         '              as isolated findings or mechanism papers.',
  'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': 'Key research areas', 'old': 'What this topic includes', 'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': 'Foundational studies', 'old': 'Foundational studies in this topic', 'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': 'Three foundational references for inflammation research',
  'old': 'The first three anchor studies in the inflammation track',
  'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': 'Reading inflammation research', 'old': 'How this topic fits the library', 'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': 'Separate mechanisms, models, and study designs when comparing findings',
  'old': 'Topic pages help a growing studies library stay usable as it expands',
  'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': 'Inflammation research mixes conceptual models, experimental studies,\n'
         '              and mechanism papers. Keeping those study types distinct makes it\n'
         '              easier to judge what a result does—and does not—support.',
  'old': 'As more studies are added, topic pages make it easier to browse\n'
         '              the literature by subject area rather than by title alone. This is\n'
         '              especially useful in inflammation research, where conceptual models,\n'
         '              experimental studies, and mechanism papers often sit very close together.',
  'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': 'Related research paths include vagus nerve signaling, gut–brain\n              communication, and stress physiology.',
  'old': 'Over time, this topic page can expand to include more studies,\n'
         '              stronger internal grouping, and clearer links into adjacent research\n'
         '              themes such as vagus nerve signaling, gut–brain communication, and stress physiology.',
  'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': 'Research scope', 'old': 'Topic note', 'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': 'This overview highlights selected neuroimmune and inflammation research\n'
         '              and is not a systematic review. Use the individual study summaries and\n'
         '              source links to evaluate mechanisms, study design, population, and outcome.',
  'old': 'This topic page is intended as a growing research index rather than\n'
         '              a final review article. It is designed to organize the literature as\n'
         '              the studies library expands across neuroimmune signaling, inflammatory\n'
         '              reflex research, cytokine regulation, and vagus-related immune communication.',
  'path': 'src/app/(en)/research/topics/inflammation/page.tsx'},
 {'new': 'Explore other major research topics connected to VNS.',
  'old': 'Return to the broader topic layer to explore other major subject areas in the research library.',
  'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': 'Research on vagus nerve stimulation spans implanted VNS, non-invasive\n'
         '              VNS, auricular stimulation, transcutaneous approaches, and questions\n'
         '              about how far evidence can be translated across devices, protocols,\n'
         '              and populations.',
  'old': 'This topic page organizes research related to vagus nerve stimulation,\n'
         '              including implanted VNS, non-invasive VNS, auricular stimulation,\n'
         '              transcutaneous approaches, and the limits of translating evidence\n'
         '              across devices, protocols, and populations.',
  'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': '<span>2 study summaries</span>',
  'old': '<span>Current topic: 2 study summaries</span>',
  'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': 'Taken together, these research directions show why method, device,\n'
         '              target, safety context, and product claims must be kept separate when\n'
         '              interpreting the evidence.',
  'old': 'This topic page groups those research directions together so the\n'
         '              literature can be understood as a broader field rather than as a\n'
         '              disconnected set of individual papers. It also keeps method, safety,\n'
         '              and product claims separated so the evidence is not overstated.',
  'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': 'Key research areas', 'old': 'What this topic includes', 'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': 'VNS research spans several distinct method and evidence tracks',
  'old': 'The current literature can be read through a few major research tracks',
  'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': 'Good evidence interpretation also asks what a study does not prove',
  'old': 'The strongest research page also explains what the evidence does not prove',
  'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': 'Foundational studies', 'old': 'Foundational studies in this topic', 'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': 'Two foundational references across clinical and non-invasive VNS',
  'old': 'The first two anchor studies in the vagus nerve stimulation track',
  'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': 'Reading VNS research', 'old': 'How this topic fits the library', 'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': 'Method and device context come before cross-study comparison',
  'old': 'Topic pages help a growing studies library stay usable as it expands',
  'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': 'VNS studies are easier to compare when the method, device, target,\n'
         '              protocol, population, and outcome are kept explicit. Those differences\n'
         '              matter because one family name covers very different interventions.',
  'old': 'As more studies are added, topic pages make it easier to browse the\n'
         '              literature by subject area rather than by title alone. This is\n'
         '              especially important in a field like vagus nerve stimulation, where\n'
         '              methods, devices, targets, and interpretations can vary significantly.',
  'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': 'Related research paths include safety and tolerability, stress physiology,\n              HRV, autonomic regulation, and emotional processing.',
  'old': 'Over time, this topic page can expand to include more studies,\n'
         '              clearer internal categorization, and stronger links into adjacent\n'
         '              research themes such as safety and tolerability, stress physiology,\n'
         '              HRV, autonomic regulation, and emotional processing.',
  'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': 'Research scope', 'old': 'Topic note', 'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'},
 {'new': 'This overview highlights selected implanted, non-invasive, and\n'
         '              mechanism-oriented VNS research and is not a systematic review. Use\n'
         '              the individual study summaries and source links to evaluate each method\n'
         '              in its own evidence context.',
  'old': 'This topic page is intended as a growing research index rather than\n'
         '              a final review article. It is designed to organize the literature as\n'
         '              the studies library expands across implanted, non-invasive, and\n'
         '              mechanism-oriented vagus nerve stimulation research.',
  'path': 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx'}]
TARGET_FILES=['src/app/(en)/research/topics/autonomic-regulation/page.tsx',
 'src/app/(en)/research/topics/gut-brain-axis/page.tsx',
 'src/app/(en)/research/topics/heart-rate-variability/page.tsx',
 'src/app/(en)/research/topics/inflammation/page.tsx',
 'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx']
FORBIDDEN_PATTERNS=[('this-topic-page', '\\bthis topic page\\b'),
 ('current-topic', '\\bcurrent topic:'),
 ('designed-to-grow', '\\bdesigned to grow over time\\b'),
 ('built-to-grow', '\\bbuilt to grow over time\\b'),
 ('fits-library', '\\bhow this topic fits the library\\b'),
 ('growing-library', '\\btopic pages help a growing studies library\\b'),
 ('topic-page-expand', '\\bover time, this topic page can expand\\b'),
 ('growing-research-index', '\\bgrowing research index\\b'),
 ('topic-layer', '\\btopic layer\\b'),
 ('topic-note', '\\btopic note\\b'),
 ('system-layer', '\\bthe system layer\\b'),
 ('what-this-topic-includes', '\\bwhat this topic includes\\b'),
 ('foundational-in-topic', '\\bfoundational studies in this topic\\b'),
 ('strongest-research-page', '\\bthe strongest research page\\b'),
 ('research-library-to-learn', '\\bconnects the research library to learn\\b')]

checks=[]
failures=[]

def sha(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()

def check(name, ok, detail=''):
    row={'check':name,'status':'PASS' if ok else 'FAIL','detail':detail}
    checks.append(row)
    if not ok:
        failures.append(row)

# Exact public-source lock: all R2 public files plus the three newly touched research-topic pages.
for rel,h in EXPECTED_PUBLIC_HASHES.items():
    p=repo/rel
    check(f'public source exists: {rel}', p.is_file())
    if p.is_file():
        got=sha(p)
        check(f'public source hash: {rel}', got==h, f'expected={h} got={got}')

# Every approved R2B replacement must be present, and every superseded public phrase absent.
texts={rel:(repo/rel).read_text(encoding='utf-8') for rel in TARGET_FILES}
for i,e in enumerate(EDITS,1):
    text=texts[e['path']]
    check(f'edit {i:02d} old absent: {e["path"]}', e['old'] not in text)
    check(f'edit {i:02d} new present: {e["path"]}', e['new'] in text)

combined='\n'.join(texts.values())
for label,pattern in FORBIDDEN_PATTERNS:
    check(f'meta-scaffold residue absent: {label}', re.search(pattern,combined,re.I) is None)

# Scope / hygiene guards.
for rel,text in texts.items():
    bad=[str(i) for i,l in enumerate(text.splitlines(),1) if l.rstrip(' \t')!=l]
    check(f'no trailing whitespace: {rel}', not bad, ','.join(bad[:10]))
    check(f'no accidental localhost: {rel}', 'localhost:' not in text.lower())

# Preserve the five target route components and structured-data calls.
route_guards={
    'src/app/(en)/research/topics/autonomic-regulation/page.tsx':['research-topics-autonomic-regulation','Autonomic regulation research'],
    'src/app/(en)/research/topics/gut-brain-axis/page.tsx':['research-topics-gut-brain-axis','Gut–Brain Axis Research'],
    'src/app/(en)/research/topics/heart-rate-variability/page.tsx':['research-topics-heart-rate-variability','HRV research: heart rate variability and autonomic regulation'],
    'src/app/(en)/research/topics/inflammation/page.tsx':['research-topics-inflammation','Inflammation Research'],
    'src/app/(en)/research/topics/vagus-nerve-stimulation/page.tsx':['research-topics-vagus-nerve-stimulation','Vagus nerve stimulation research overview'],
}
for rel,phrases in route_guards.items():
    for phrase in phrases:
        check(f'route identity preserved: {rel} :: {phrase}', phrase in texts[rel])

with (out/'search-dominance-1e2c-r2b-checks.csv').open('w',newline='',encoding='utf-8') as f:
    w=csv.DictWriter(f,fieldnames=['check','status','detail']); w.writeheader(); w.writerows(checks)

res={
    'schema':'neuvago-search-dominance-1e2c-r2b-research-topic-public-copy-cleanup-audit-v1',
    'status':'PASS' if not failures else 'FAIL',
    'checks_total':len(checks),
    'checks_passed':sum(1 for x in checks if x['status']=='PASS'),
    'failures':failures,
    'public_source_files_locked':len(EXPECTED_PUBLIC_HASHES),
    'target_routes':[
        '/research/topics/autonomic-regulation',
        '/research/topics/gut-brain-axis',
        '/research/topics/heart-rate-variability',
        '/research/topics/inflammation',
        '/research/topics/vagus-nerve-stimulation',
    ],
    'target_source_files':len(TARGET_FILES),
    'exact_editorial_replacements':len(EDITS),
    'scope_note':'Public research-topic copy cleanup only; URLs, canonicals, evidence sources, regulatory facts, and intended-use boundaries are not intentionally changed.',
}
(out/'RESULT.json').write_text(json.dumps(res,indent=2)+'\n')
print(json.dumps(res,indent=2))
sys.exit(1 if failures else 0)
