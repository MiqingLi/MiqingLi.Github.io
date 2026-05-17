---
layout: page
title: Algorithm Design for Multi-Objective Problems
permalink: /basic-research/solving-multi-objective-problems/
description: Multi-objective evolutionary algorithm design.
nav: false
---

Multi-objective optimisation considers scenarios with more than one objective function. Evolutionary algorithms are well suited to these problems because a population can approximate the Pareto optimal front in one run.

My work in this area includes a co-evolutionary framework that lets Pareto and non-Pareto criteria complement each other, and adaptive weighting in MOEA/D so decomposition-based search can better handle different Pareto front shapes.

## Topic Pages

- [Bi-Criterion Evolution]({{ '/basic-research/solving-multi-objective-problems/bi-criterion-evolution/' | relative_url }})
- [Adapting Weights for MOEA/D]({{ '/basic-research/solving-multi-objective-problems/adapting-weights-for-moead/' | relative_url }})

## Selected Work Themes

- Adaptive weights that allow MOEA/D to work across varied Pareto front shapes.
- A framework that co-evolves Pareto and non-Pareto populations so the search can balance convergence and diversity.
- Stable matching between subproblems and solutions in decomposition-based optimisation.
- Diversity maintenance through graph structures such as minimum spanning trees.
