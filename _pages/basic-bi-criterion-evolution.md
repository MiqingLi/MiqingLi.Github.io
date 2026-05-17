---
layout: page
title: Bi-Criterion Evolution
permalink: /basic-research/solving-multi-objective-problems/bi-criterion-evolution/
description: Co-evolving Pareto and non-Pareto criteria.
nav: false
---

Bi-criterion evolution maintains two populations: a non-Pareto criterion population and a Pareto criterion population. Each follows a different selection criterion.

The non-Pareto population helps steer the Pareto population toward the optimal front. The Pareto population, in turn, helps recover diversity by exploring promising but underdeveloped regions of objective space.

The two populations communicate generationally. When one population discovers strong individuals, the other can reuse them directly in its own search process.

## Results Summary

- On high-dimensional DTLZ2, adding the Pareto criterion population helped an IBEA-style search diversify across the Pareto front.
- On DTLZ5-style problems, the non-Pareto criterion population helped the Pareto criterion population improve convergence.
