---
layout: about
title: Home
permalink: /
subtitle:

profile:
  align: right
  image: MiqingLi.jpg
  image_circular: false
  more_info: >
    <p>School of Computer Science<br>University of Birmingham</p>
    <p>m.li.8@bham.ac.uk / limitsing@gmail.com</p>

selected_papers: false
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 6
---

I am an Associate Professor in the School of Computer Science at the University of Birmingham, UK. My research sits at the intersection of AI and optimisation, with a focus on computational intelligence methods such as evolutionary algorithms and Bayesian optimisation for multi-objective problems.

Current interests include:

- Multi-objective combinatorial optimisation, including evolutionary algorithms, local search, and neural combinatorial optimisation.
- Expensive and robust optimisation, including evolutionary algorithms and Bayesian optimisation.
- Fundamental issues in multi-objective optimisation, including fitness landscape analysis, visualisation, archiving, and performance assessment.
- Many-objective optimisation, including algorithm design, visualisation, and assisted decision-making.
- Practical applications in software engineering, mechanical engineering, chemical engineering, and related domains.

This website is my research portfolio where you can find resources of research projects I work on. This includes brief descriptions (ideas and results) of some of my projects on [basic research](/basic-research/) and [applied research](/applied-research/) and their resulting [papers](/publications/) (with code and data). **You are very welcome to contact me if you are interested in pursuing a PhD on any of the relevant topics mentioned above.**

## Research Highlights

<div class="publication-highlights">
  <div class="row align-items-center my-4">
    <div class="col-sm-3 mb-3 mb-sm-0">
      <img class="img-fluid rounded" src="{{ '/assets/img/highlights/ppsn24.jpg' | relative_url }}" alt="PPSN24 highlight">
    </div>
    <div class="col-sm-9">
      <p>[<a href="https://link.springer.com/chapter/10.1007/978-3-031-70085-9_19">PPSN24</a>] develops a tool to visualise the landscape of multi-objective optimisation problems with a low-dimensional decision space.</p>
    </div>
  </div>

  <div class="row align-items-center my-4">
    <div class="col-sm-3 mb-3 mb-sm-0">
      <img class="img-fluid rounded" src="{{ '/assets/img/highlights/ijcai24.png' | relative_url }}" alt="IJCAI24 highlight">
    </div>
    <div class="col-sm-9">
      <p>[<a href="https://www.ijcai.org/proceedings/2024/0763.pdf">IJCAI24</a>] analytically shows that, for the first time, using an archive can guarantee speed-ups for MOEAs. This means that with an archive, the size of the population can reduce to a small constant. Therefore, there is no need for the population to keep all the Pareto optimal solutions found, which is a practice considered in all existing theoretical studies. [<a href="https://arxiv.org/pdf/2406.02118">PDF</a>]</p>
    </div>
  </div>

  <div class="row align-items-center my-4">
    <div class="col-sm-3 mb-3 mb-sm-0">
      <img class="img-fluid rounded" src="{{ '/assets/img/highlights/tevc23.png' | relative_url }}" alt="TEVC23 highlight">
    </div>
    <div class="col-sm-9">
      <p>[<a href="https://ieeexplore.ieee.org/document/10247263">TEVC23</a>] provides a systematic survey of archiving methods in multi-objective optimisation from a general theoretical perspective, identifying four classes of archiving methods. It also shows that archiving methods based on weakly Pareto-compliant indicators, such as the epsilon indicator, R2, and IGD+, can achieve the same theoretical desirables as archiving methods based on Pareto-compliant indicators, such as the hypervolume indicator.</p>
    </div>
  </div>

  <div class="row align-items-center my-4">
    <div class="col-sm-3 mb-3 mb-sm-0">
      <img class="img-fluid rounded" src="{{ '/assets/img/highlights/ijcai23.png' | relative_url }}" alt="IJCAI23 highlight">
    </div>
    <div class="col-sm-9">
      <p>[<a href="https://www.ijcai.org/proceedings/2023/0612.pdf">IJCAI23</a>] theoretically proved that introducing randomness into the population update process in MOEAs can be beneficial. This finding challenges the greedy, deterministic population update mechanisms used by mainstream MOEAs during the search. [<a href="https://arxiv.org/pdf/2306.02611">PDF</a>]</p>
    </div>
  </div>

  <div class="row align-items-center my-4">
    <div class="col-sm-3 mb-3 mb-sm-0">
      <img class="img-fluid rounded" src="{{ '/assets/img/highlights/gecco23.png' | relative_url }}" alt="GECCO23 highlight">
    </div>
    <div class="col-sm-9">
      <p>[<a href="https://dl.acm.org/doi/abs/10.1145/3583131.3590447">GECCO23</a>] found that MOEAs are stuck in a different area at a time; this happens for combinatorial problems, but not continuous problems.</p>
    </div>
  </div>

  <div class="row align-items-center my-4">
    <div class="col-sm-3 mb-3 mb-sm-0">
      <img class="img-fluid rounded" src="{{ '/assets/img/highlights/neurips22.png' | relative_url }}" alt="NeurIPS22 highlight">
    </div>
    <div class="col-sm-9">
      <p>[<a href="https://openreview.net/forum?id=h3jZCLjhtmV">NeurIPS22</a>] presents multi-agent dynamic algorithm configuration, with one agent working for one type of configuration hyperparameter, and instantiates it to dynamically configure MOEA/D, including weights and neighbourhood size, during the search. [<a href="https://arxiv.org/pdf/2210.06835">PDF</a>]</p>
    </div>
  </div>

  <div class="row align-items-center my-4">
    <div class="col-sm-3 mb-3 mb-sm-0">
      <img class="img-fluid rounded" src="{{ '/assets/img/highlights/tosem22.png' | relative_url }}" alt="TOSEM22 highlight">
    </div>
    <div class="col-sm-9">
      <p>[<a href="https://dl.acm.org/doi/10.1145/3514233">TOSEM22</a>] shows that converting a multi-objective optimisation problem into a single-objective one may not be a good option even if clear preferences between the objectives exist.</p>
    </div>
  </div>


  <div class="row align-items-center my-4">
    <div class="col-sm-3 mb-3 mb-sm-0">
      <img class="img-fluid rounded" src="{{ '/assets/img/highlights/tse20.png' | relative_url }}" alt="TSE20 highlight">
    </div>
    <div class="col-sm-9">
      <p>[<a href="https://ieeexplore.ieee.org/document/9252185">TSE20</a>] gives a critical review and methodological guidance on how to select and use evaluation methods in different multi-objective SBSE scenarios. [<a href="{{ '/applied-research/general-sbse/evaluate-quality-of-solutions-in-pareto-based-sbse/' | relative_url }}">Read More</a>]</p>
    </div>
  </div>

</div>

This site is migrated from my [google site](https://sites.google.com/view/miqing-li/home) which is still running. If you are looking for the latest update, you may visit the google site at the moment.
