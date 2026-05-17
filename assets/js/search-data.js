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
        },{id: "nav-older-news",
          title: "Older News",
          description: "Earlier updates from the research group.",
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
            },},{id: "news-work-on-software-configuration-tuning-multi-objective-bayesian-optimisation-and-overlapping-coalition-structure-generation-appeared-in-journal-venues",
          title: 'Work on software configuration tuning, multi-objective Bayesian optimisation, and overlapping coalition structure generation...',
          description: "",
          section: "News",},{id: "news-work-on-the-theoretical-role-of-archives-in-stochastic-population-update-was-accepted-by-ijcai-2025",
          title: 'Work on the theoretical role of archives in stochastic population update was accepted...',
          description: "",
          section: "News",},{id: "news-work-on-multiobjective-pseudo-boolean-functions-in-runtime-analysis-was-accepted-by-foga-xviii",
          title: 'Work on multiobjective pseudo-Boolean functions in runtime analysis was accepted by FOGA XVIII....',
          description: "",
          section: "News",},{id: "news-our-quality-evaluation-survey-for-multi-objective-solution-sets-appeared-in-acm-computing-surveys",
          title: 'Our quality evaluation survey for multi-objective solution sets appeared in ACM Computing Surveys....',
          description: "",
          section: "News",},{id: "news-yue-lou-joined-the-group-to-work-on-multi-objective-bayesian-optimisation-welcome-yue",
          title: 'Yue Lou joined the group to work on multi-objective Bayesian optimisation. Welcome, Yue....',
          description: "",
          section: "News",},{id: "news-two-papers-were-accepted-by-aaai-2026-including-work-on-multi-objective-local-search-and-archive-reuse-in-evolutionary-multi-objective-optimisation",
          title: 'Two papers were accepted by AAAI 2026, including work on multi-objective local search...',
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
