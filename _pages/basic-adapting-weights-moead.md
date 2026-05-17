---
layout: page
title: Adapting Weights for MOEA/D
permalink: /basic-research/solving-multi-objective-problems/adapting-weights-for-moead/
description: Weight adaptation for decomposition-based search.
nav: false
---

This line of work updates the weights of an evolutionary population by contrasting the population with a well-maintained archive of non-dominated solutions.

The aim is to make MOEA/D robust across Pareto fronts with very different shapes: inverted simplex fronts, disconnected fronts, degenerate fronts, scaled fronts, and high-dimensional fronts.

## Results Summary

- Adaptive weights can substantially improve decomposition-based search when the supplied weight vectors do not match the geometry of the Pareto front.
- The approach is designed for varied Pareto-front shapes rather than a single idealised geometry.
