// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-basic-research",
              title: "Basic Research",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/basic-research/";
              },
            },{id: "dropdown-applied-research",
              title: "Applied Research",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/applied-research/";
              },
            },{id: "dropdown-research-portfolio",
              title: "Research Portfolio",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "All updates from the research group.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-students-and-visitors",
          title: "Students and Visitors",
          description: "PhD students, collaborative students, visiting researchers, and visitors.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Modules and student project areas.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-maop",
          title: "MaOP",
          description: "Test problems, indicators, algorithms, and visualisation resources.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/maop/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "Address, telephone, and email.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-january-2023-i-am-honoured-to-be-invited-to-serve-as-an-associate-editor-of-ieee-transactions-on-evolutionary-computation",
          title: 'January 2023 - I am honoured to be invited to serve as an...',
          description: "",
          section: "News",},{id: "news-march-2023-our-work-collaborated-with-dr-chao-qian-s-group-on-subset-selection-for-evolutionary-multi-objective-optimisation-has-been-accepted-by-ieee-transactions-on-evolutionary-computation-congratulations-to-yuran-chao-and-chao",
          title: 'March 2023 - Our work, collaborated with Dr Chao Qian’s group, on subset...',
          description: "",
          section: "News",},{id: "news-march-2023-i-am-pleased-to-announce-that-our-application-of-uob-leiden-university-collaboration-seed-funds-is-successful-look-forward-to-working-with-dr-hao-wang-and-prof-thomas-back-at-leiden",
          title: 'March 2023 - I am pleased to announce that our application of UoB-Leiden...',
          description: "",
          section: "News",},{id: "news-march-2023-our-work-collaborated-with-prof-per-kristian-lehre-on-some-preliminary-results-of-non-elitist-evolutionary-multi-objective-optimisation-has-been-accepted-by-gecco-23-congratulations-to-zimin-and-per-kristian",
          title: 'March 2023 - Our work, collaborated with Prof Per Kristian Lehre, on some...',
          description: "",
          section: "News",},{id: "news-march-2023-our-paper-on-finding-a-strange-behaviour-of-moeas-on-combinatorial-optimisation-problems-has-been-accepted-by-gecco-23-this-work-reported-an-interesting-phenomenon-that-different-executions-of-an-moea-may-end-up-in-very-different-areas-in-search-space-congratulations-to-xiaofeng-and-xiaochen",
          title: 'March 2023 - Our paper on finding a “strange” behaviour of MOEAs on...',
          description: "",
          section: "News",},{id: "news-april-2023-our-paper-collaborated-with-dr-chao-qian-s-group-on-stochastic-population-update-for-moeas-has-been-accepted-by-ijcai-23-this-work-challenges-the-common-practice-of-updating-the-population-in-a-deterministic-greedy-way-in-emo-and-analytically-proves-that-introducing-randomness-in-population-update-can-help-congratulations-to-chao-yawen-and-chao",
          title: 'April 2023 - Our paper, collaborated with Dr Chao Qian’s group, on stochastic...',
          description: "",
          section: "News",},{id: "news-may-2023-it-was-my-great-pleasure-to-give-a-tutorial-with-dr-tao-chen-on-methodologies-and-guidelines-for-evaluating-multi-objective-search-based-software-engineering-at-icse-23",
          title: 'May 2023 - It was my great pleasure to give a tutorial, with...',
          description: "",
          section: "News",},{id: "news-august-2023-it-was-my-great-pleasure-to-give-a-webinar-on-moeas-for-combinatorial-optimisation-at-ieee-cis-esco-taskforce-a-thank-you-to-dr-yi-mei-for-the-invitation",
          title: 'August 2023 - It was my great pleasure to give a webinar on...',
          description: "",
          section: "News",},{id: "news-august-2023-our-survey-paper-collaborated-with-dr-manuel-lopez-ibanez-on-archiving-methods-in-multi-objective-optimisation-has-been-accepted-by-ieee-transactions-on-evolutionary-computation-this-work-conducts-a-systematic-study-of-archiving-methods-in-multi-objective-optimisation-from-a-general-theoretical-perspective-congratulations-to-manuel-and-xin",
          title: 'August 2023 - Our survey paper, collaborated with Dr Manuel Lopez-Ibanez, on archiving...',
          description: "",
          section: "News",},{id: "news-september-2023-our-work-collaborated-with-dr-yi-xiang-and-others-on-using-the-quality-diversity-method-to-automatedly-generate-test-suites-for-software-product-lines-has-been-accepted-by-acm-transactions-on-software-engineering-and-methodology-congratulations-to-yi",
          title: 'September 2023 - Our work, collaborated with Dr Yi Xiang and others, on...',
          description: "",
          section: "News",},{id: "news-january-2024-our-work-collaborated-with-dr-liangli-zhen-and-a-star-colleagues-on-applying-multi-objective-optimisation-to-generating-neural-network-architectures-with-multiple-scales-has-been-accepted-by-ieee-transactions-on-evolutionary-computation-congratulations-to-liangli",
          title: 'January 2024 - Our work, collaborated with Dr Liangli Zhen and A*STAR colleagues,...',
          description: "",
          section: "News",},{id: "news-january-2024-our-work-collaborated-with-dr-tao-chen-on-adapting-a-bi-objective-optimisation-model-for-software-configuration-tuning-has-been-accepted-by-fse-24-congratulations-to-tao",
          title: 'January 2024 - Our work, collaborated with Dr Tao Chen, on adapting a...',
          description: "",
          section: "News",},{id: "news-march-2024-it-was-my-great-pleasure-to-give-a-talk-on-moeas-for-combinatorial-optimisation-at-the-university-of-exeter-a-thank-you-to-prof-jonathan-fieldsend-for-the-invitation",
          title: 'March 2024 - It was my great pleasure to give a talk on...',
          description: "",
          section: "News",},{id: "news-march-2024-our-work-collaborated-with-prof-guofu-zhang-on-estimating-and-utilising-the-bounds-of-feasible-solution-space-for-a-very-constrained-multi-objective-optimisation-problem-test-resource-allocation-of-software-testing-has-been-accepted-by-acm-transactions-on-software-engineering-and-methodology-congratulations-to-guofu",
          title: 'March 2024 - Our work, collaborated with Prof Guofu Zhang, on estimating and...',
          description: "",
          section: "News",},{id: "news-march-2024-our-work-collaborated-with-dr-shuo-wang-s-group-and-colleagues-in-the-school-of-maths-on-multi-objective-optimisation-for-flexible-building-space-usage-has-been-accepted-by-ieee-cai-24-congratulations-to-shuo-and-colleagues",
          title: 'March 2024 - Our work, collaborated with Dr Shuo Wang’s group and colleagues...',
          description: "",
          section: "News",},{id: "news-march-2024-our-work-on-empirical-comparison-between-moeas-and-local-search-on-multi-objective-combinatorial-problems-has-been-accepted-by-gecco-24-congratulations-to-xiaofeng-xiaochen-and-zimin",
          title: 'March 2024 - Our work on empirical comparison between MOEAs and local search...',
          description: "",
          section: "News",},{id: "news-april-2024-extension-of-our-fse-21-and-fse-24-work-for-multiobjectivising-software-configuration-tuning-has-been-accepted-by-ieee-transactions-on-software-engineering-congratulations-to-pengzhou-and-tao",
          title: 'April 2024 - Extension of our FSE’21 and FSE’24 work for multiobjectivising software...',
          description: "",
          section: "News",},{id: "news-april-2024-our-work-collaborated-with-dr-chao-qian-s-group-on-analysing-the-benefit-of-diversity-maintenance-in-eas-for-multimodal-multiobjective-optimisation-problems-has-been-accepted-by-ijcai-24-congratulations-to-shengjie-zhijia-chao-and-chao",
          title: 'April 2024 - Our work, collaborated with Dr Chao Qian’s group, on analysing...',
          description: "",
          section: "News",},{id: "news-april-2024-our-work-collaborated-with-dr-chao-qian-s-group-on-using-an-archive-can-bring-provable-speed-ups-in-moeas-has-been-accepted-by-ijcai-24-congratulations-to-chao-shengjie-and-chao",
          title: 'April 2024 - Our work, collaborated with Dr Chao Qian’s group, on using...',
          description: "",
          section: "News",},{id: "news-may-2024-our-work-collaborated-with-dr-chao-qian-s-group-on-analysing-running-time-of-spea2-and-general-elitist-moeas-has-been-accepted-by-ppsn-24-congratulations-to-shengjie-chao-and-chao",
          title: 'May 2024 - Our work, collaborated with Dr Chao Qian’s group, on analysing...',
          description: "",
          section: "News",},{id: "news-may-2024-our-work-on-visualising-landscape-of-multi-objective-optimisation-problems-has-been-accepted-by-ppsn-24-congratulations-to-zimin-and-zhiji",
          title: 'May 2024 - Our work on visualising landscape of multi-objective optimisation problems has...',
          description: "",
          section: "News",},{id: "news-june-2024-our-work-on-performing-a-stepwise-adjustment-of-weight-vectors-for-moea-d-has-been-accepted-by-swarm-and-evolutionary-computation-congratulations-to-xiaofeng",
          title: 'June 2024 - Our work on performing a stepwise adjustment of weight vectors...',
          description: "",
          section: "News",},{id: "news-june-2024-looking-forward-to-presenting-our-work-on-visualising-landscape-of-multi-modal-multi-objective-problems-at-the-ppsn-workshop-on-multimodal-multiobjective-optimisation-a-thank-you-to-prof-heike-trautmann-for-the-invitation",
          title: 'June 2024 - Looking forward to presenting our work on visualising landscape of...',
          description: "",
          section: "News",},{id: "news-july-2024-it-was-my-great-pleasure-to-give-a-tutorial-with-dr-tao-chen-on-methodologies-and-guidelines-for-evaluating-multi-objective-search-based-software-engineering-at-fse-24",
          title: 'July 2024 - It was my great pleasure to give a tutorial, with...',
          description: "",
          section: "News",},{id: "news-august-2024-our-work-collaborated-with-dr-hao-wang-on-improving-the-step-size-update-strategy-of-cma-es-for-multi-objective-optimisation-has-been-accepted-by-ea-24-congratulations-to-zheng-bo-and-hao",
          title: 'August 2024 - Our work, collaborated with Dr Hao Wang, on improving the...',
          description: "",
          section: "News",},{id: "news-september-2024-our-work-on-intensifying-the-corner-weights-for-moea-d-to-deal-with-multi-objective-combinatorial-problems-has-been-accepted-by-swarm-and-evolutionary-computation-congratulations-to-xiaochen-and-xiaofeng",
          title: 'September 2024 - Our work on intensifying the corner weights for MOEA/D to...',
          description: "",
          section: "News",},{id: "news-september-2024-our-work-collaborated-with-dr-yani-xue-dr-derek-groen-and-other-colleagues-on-considering-the-camp-location-problem-in-humanitarian-logistics-as-a-many-objective-optimisation-problem-has-been-accepted-by-international-journal-of-network-dynamics-and-intelligence-2024-congratulations-to-yani-and-derek",
          title: 'September 2024 - Our work, collaborated with Dr Yani Xue, Dr Derek Groen...',
          description: "",
          section: "News",},{id: "news-october-2024-our-work-on-how-to-use-prior-knowledge-to-continuously-optimise-configurable-software-systems-has-been-accepted-by-icse-25-congratulations-to-yulong-and-tao",
          title: 'October 2024 - Our work on how to use prior knowledge to continuously...',
          description: "",
          section: "News",},{id: "news-november-2024-our-work-on-investigating-when-non-deteriorating-population-update-in-moeas-beneficial-has-been-accepted-by-emo-25-congratulations-to-qiaozhi-ke-and-xin",
          title: 'November 2024 - Our work on investigating when non-deteriorating population update in MOEAs...',
          description: "",
          section: "News",},{id: "news-december-2024-it-was-a-great-pleasure-to-host-prof-hisao-ishibuchi-and-dr-lie-meng-pang-at-birmingham-thoroughly-enjoyed-their-inspirational-talks-and-the-intensive-fruitful-discussions",
          title: 'December 2024 - It was a great pleasure to host Prof Hisao Ishibuchi...',
          description: "",
          section: "News",},{id: "news-december-2024-our-work-on-batch-bayesian-optimisation-through-a-multi-objective-approach-has-been-accepted-by-aaai-25-congratulations-to-chao",
          title: 'December 2024 - Our work on batch Bayesian optimisation through a multi-objective approach...',
          description: "",
          section: "News",},{id: "news-january-2025-our-work-collaborated-with-dr-hao-tong-on-investigating-the-fitness-landscape-of-tsp-under-dynamic-events-has-been-accepted-by-ieee-transactions-on-evolutionary-computation-congratulations-to-hao-jialin-and-xin",
          title: 'January 2025 - Our work, collaborated with Dr Hao Tong, on investigating the...',
          description: "",
          section: "News",},{id: "news-january-2025-our-work-on-multi-objectivising-acquisition-functions-in-bayesian-optimisation-has-been-accepted-by-acm-transactions-on-evolutionary-learning-and-optimization-congratulations-to-chao",
          title: 'January 2025 - Our work on multi-objectivising acquisition functions in Bayesian optimisation has...',
          description: "",
          section: "News",},{id: "news-february-2025-our-work-collaborated-with-prof-chao-qian-s-group-of-analytically-showing-stochastic-population-update-in-moeas-can-be-helpful-has-been-accepted-by-artificial-intelligence-congratulations-to-chao-yawen-and-chao",
          title: 'February 2025 - Our work, collaborated with Prof Chao Qian’s group, of analytically...',
          description: "",
          section: "News",},{id: "news-march-2025-i-am-delighted-to-share-that-our-work-on-investigating-when-non-deteriorating-population-update-in-moeas-beneficial-has-received-the-outstanding-student-paper-award-at-emo-25-congratulations-to-qiaozhi-ke-and-xin",
          title: 'March 2025 - I am delighted to share that our work on investigating...',
          description: "",
          section: "News",},{id: "news-march-2025-our-work-collaborated-with-prof-guofu-zhang-on-solving-overlapping-coalition-structure-generation-in-multi-agent-systems-has-been-accepted-by-journal-of-artificial-intelligence-research-congratulations-to-guofu-and-colleagues",
          title: 'March 2025 - Our work, collaborated with Prof Guofu Zhang, on solving overlapping...',
          description: "",
          section: "News",},{id: "news-march-2025-our-work-collaborated-with-prof-hisao-ishibuchi-s-group-on-investigating-the-frequency-of-maintaining-the-archive-in-multi-objective-optimisation-has-been-accepted-by-gecco-25-congratulations-to-zhiji-zimin-lie-meng-and-hisao",
          title: 'March 2025 - Our work, collaborated with Prof Hisao Ishibuchi’s group, on investigating...',
          description: "",
          section: "News",},{id: "news-march-2025-our-work-collaborated-with-dr-zhiwei-xu-on-solving-the-multi-objective-shortest-path-problem-has-been-accepted-by-ieee-transactions-on-intelligent-transportation-systems-congratulations-to-zhiwei-and-colleagues",
          title: 'March 2025 - Our work, collaborated with Dr Zhiwei Xu, on solving the...',
          description: "",
          section: "News",},{id: "news-april-2025-our-work-collaborated-with-prof-chao-qian-s-group-on-using-an-archive-can-bring-provable-speed-ups-for-stochastic-population-update-in-moeas-has-been-accepted-by-ijcai-25-congratulations-to-shengjie-zimin-and-chao",
          title: 'April 2025 - Our work, collaborated with Prof Chao Qian’s group, on using...',
          description: "",
          section: "News",},{id: "news-june-2025-our-work-on-the-characteristics-of-the-multi-objective-pseudo-boolean-functions-in-runtime-analysis-relative-to-practical-mops-has-been-accepted-by-foga-25-congratulations-to-zimin",
          title: 'June 2025 - Our work on the characteristics of the multi-objective pseudo Boolean...',
          description: "",
          section: "News",},{id: "news-june-2025-i-am-delighted-to-share-that-qianrong-s-work-on-applying-bayesian-optimisation-to-complex-formulated-products-has-received-the-best-poster-award-at-tribouk-2025-congratulations-to-qianrong",
          title: 'June 2025 - I am delighted to share that Qianrong’s work on applying...',
          description: "",
          section: "News",},{id: "news-november-2025-i-am-pleased-to-share-the-news-that-zhiji-cui-has-successfully-defended-his-phd-viva-many-congratulations-well-done-zhiji",
          title: 'November 2025 - I am pleased to share the news that Zhiji Cui...',
          description: "",
          section: "News",},{id: "news-november-2025-our-work-collaborated-with-prof-chao-qian-s-group-on-reusing-the-archive-to-speed-up-moeas-has-been-accepted-by-aaai-26-congratulations-to-shengjie-zimin-and-chao",
          title: 'November 2025 - Our work, collaborated with Prof Chao Qian’s group, on reusing...',
          description: "",
          section: "News",},{id: "news-november-2025-our-work-which-empirically-and-theoretically-shows-that-randomised-local-search-is-faster-than-systematic-local-search-in-multi-objective-optimisation-has-been-accepted-by-aaai-26-congratulations-to-zimin",
          title: 'November 2025 - Our work, which empirically and theoretically shows that randomised local...',
          description: "",
          section: "News",},{id: "news-january-2026-i-am-pleased-to-share-the-news-that-zimin-liang-has-successfully-defended-his-phd-viva-many-congratulations-well-done-zimin",
          title: 'January 2026 - I am pleased to share the news that Zimin Liang...',
          description: "",
          section: "News",},{id: "news-march-2026-our-work-collaborated-with-dr-tao-chen-s-group-on-studying-the-connection-between-fitness-landscapes-and-domain-knowledge-in-software-configuration-tuning-has-been-accepted-by-acm-transactions-on-software-engineering-and-methodology-congratulations-to-yulong-hongyuan-chao-tao",
          title: 'March 2026 - Our work, collaborated with Dr Tao Chen’s group, on studying...',
          description: "",
          section: "News",},{id: "news-march-2026-our-work-on-investigating-the-scalability-of-eas-and-local-search-on-multi-objective-combinatorial-optimisation-problems-has-been-accepted-by-gecco-26-congratulations-to-menghao-and-zimin",
          title: 'March 2026 - Our work on investigating the scalability of EAs and local...',
          description: "",
          section: "News",},{id: "news-march-2026-collaborated-with-prof-changhe-li-s-group-three-papers-have-been-accepted-by-gecco-26-with-one-receiving-the-best-paper-award-nomination-congratulations-to-changhe-s-group",
          title: 'March 2026 - Collaborated with Prof Changhe Li’s group, three papers have been...',
          description: "",
          section: "News",},{id: "news-march-2026-our-work-collaborated-with-dr-yi-xiang-and-colleagues-on-enhancing-the-diversity-of-the-sampled-configurations-in-pairwise-testing-has-been-accepted-by-fse-26-congratulations-to-yi-and-colleagues",
          title: 'March 2026 - Our work, collaborated with Dr Yi Xiang and colleagues, on...',
          description: "",
          section: "News",},{id: "news-april-2026-our-work-on-visualising-the-landscape-of-multi-objective-problems-an-extension-of-our-ppsn-24-work-has-been-accepted-by-mathematical-and-computational-applications-congratulations-to-zhiji-and-zimin-thanks-for-the-invitation-from-prof-oliver-schutze",
          title: 'April 2026 - Our work on visualising the landscape of multi-objective problems, an...',
          description: "",
          section: "News",},{id: "news-april-2026-our-work-collaborated-with-prof-chao-qian-s-group-on-constructing-a-class-of-integer-multi-objective-functions-for-theoretical-analysis-has-been-accepted-by-ijcai-26-congratulations-to-yuetong-zeqiong-shengjie-zimin-and-chao",
          title: 'April 2026 - Our work, collaborated with Prof Chao Qian’s group, on constructing...',
          description: "",
          section: "News",},{id: "news-april-2026-our-work-collaborated-with-prof-chao-qian-s-group-on-developing-an-moea-with-provable-benefits-in-which-one-population-focuses-on-exploration-and-one-population-on-exploitation-has-been-accepted-by-ijcai-26-congratulations-to-chenglin-shengjie-zimin-and-chao",
          title: 'April 2026 - Our work, collaborated with Prof Chao Qian’s group, on developing...',
          description: "",
          section: "News",},{id: "projects-automated-product-disassembly",
          title: 'Automated Product Disassembly',
          description: "Multi-objective optimisation for robotic disassembly and remanufacturing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project.html";
            },},{id: "projects-algorithm-design-for-multi-objective-problems",
          title: 'Algorithm Design for Multi-Objective Problems',
          description: "Selection, decomposition, and co-evolutionary search for multi-objective optimisation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-many-objective-optimisation",
          title: 'Many-Objective Optimisation',
          description: "Search methods for optimisation problems with four or more objectives.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-multi-objective-quality-evaluation",
          title: 'Multi-Objective Quality Evaluation',
          description: "Indicators, methodology, and comparison of multi-objective solution sets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-multi-objective-archiving",
          title: 'Multi-Objective Archiving',
          description: "Population and archive maintenance in evolutionary multi-objective optimisation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-visualisation",
          title: 'Visualisation',
          description: "Visualising high-dimensional objective spaces and search behaviour.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-software-product-lines",
          title: 'Software Product Lines',
          description: "Search-based testing and product selection for configurable software families.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-software-configuration-tuning",
          title: 'Software Configuration Tuning',
          description: "Multi-objective tuning of configurable software systems under expensive evaluations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-search-based-software-engineering",
          title: 'Search-Based Software Engineering',
          description: "Evaluation, methodology, and algorithm design for multi-objective SBSE.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-scheduling-in-cloud-computing",
          title: 'Scheduling in Cloud Computing',
          description: "Workflow scheduling with trade-offs between time, cost, and resources.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D.%6C%69.%38@%62%68%61%6D.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
