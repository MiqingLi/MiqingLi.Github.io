---
layout: page
title: Many-Objective Optimisation
permalink: /basic-research/solving-many-objective-problems/
description: Search with four or more objectives.
nav: false
---

Many-objective optimisation refers to optimisation problems with four or more objectives. As objective dimensionality increases, Pareto dominance becomes less effective, and algorithms face stronger tension between convergence, diversity, runtime, and parameter sensitivity.

My work in this area includes modifying Pareto-based algorithms so they remain useful on many-objective problems, and designing algorithms specifically for high-dimensional objective spaces.

## Topic Pages

- [Shift-Based Density Estimation]({{ '/basic-research/solving-many-objective-problems/making-pareto-based-algorithms-workable-in-many-objective-optimisation/' | relative_url }})
- [Grid-Based Evolutionary Search]({{ '/basic-research/solving-many-objective-problems/grid-based-evolutionary-search/' | relative_url }})

## Selected Work Themes

- Density-estimation changes that make classic Pareto-based algorithms effective on many-objective problems.
- Grid-based fitness and selection criteria for high-dimensional objective spaces.
- Bi-goal transformations that represent convergence and diversity as a two-objective problem.
- Vector-angle-based many-objective search without requiring a predefined set of weight vectors.
