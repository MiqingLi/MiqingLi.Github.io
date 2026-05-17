---
layout: page
title: Shift-Based Density Estimation
permalink: /basic-research/solving-many-objective-problems/making-pareto-based-algorithms-workable-in-many-objective-optimisation/
description: Making Pareto-based algorithms workable in many-objective optimisation.
nav: false
---

Shift-based density estimation is a small modification to density estimation in Pareto-based algorithms such as SPEA2. Although the code change can be tiny, the effect on many-objective performance can be large.

## Results Summary

- On difficult 10-objective problems, SPEA2 with shift-based density estimation can recover much stronger solution distributions than the original SPEA2.
- The method helps preserve selection pressure when standard Pareto dominance becomes too weak to distinguish solutions effectively.
