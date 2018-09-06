---
id: step-transition-guide
title: Create your own step transition
sidebar_label: Create your own step transition
---

With react-step-progress-bar, you're not limited to built-ins transitions. You can build your own. All of the transition logic is managed by the great library [react-transition-group](https://reactcommunity.org/react-transition-group/).

Because of using the `<Transition/>` component of the [react-transition-group](https://reactcommunity.org/react-transition-group/) internally, most of the following content will be similar to its original documentation, which you can find here. The only difference is that we'll look at practical examples on how to leverage the power of [react-transition-group](https://reactcommunity.org/react-transition-group/) for building amazing steps.

### 4 transition steps

Each time a step switch between unaccomplished to accomplished (or vice versa), the `<Step/>` goes through 4 steps.
