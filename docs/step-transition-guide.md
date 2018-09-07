---
id: step-transition-guide
title: Create your own step transition
sidebar_label: Create your own step transition
---

With react-step-progress-bar, you're not limited to built-ins transitions. You can build your own. All of the transition logic is managed by the great library [react-transition-group](https://reactcommunity.org/react-transition-group/).

Because of using the `<Transition/>` component of the [react-transition-group](https://reactcommunity.org/react-transition-group/) internally, most of the following content will be similar to its original documentation, which you can find here. The only difference is that we'll look at practical examples on how to leverage the power of [react-transition-group](https://reactcommunity.org/react-transition-group/) for building amazing steps.

### 4 transition steps

Each time a step switch between unaccomplished to accomplished (or vice versa), the `<Step/>` `transitionState` goes through 4 steps.

- **entering**
- **entered**
- **exiting**
- **exited**

You can create a styles object containing those 4 steps associated with CSS rules.

```js
const transitionStyles = {
  entering: { transform: "scale(1.5)" },
  entered: { transform: "scale(1)" },
  exiting: { transform: "scale(1.5)" },
  exited: { transform: "scale(1)" }
};
```

This object properties can be accessed dynamically using the `transitionState` value returned by the `<Step/>` component.

```jsx
<Step>
  {({ accomplished, transitionState, index }) => (
    <div
      style={transitionStyles[transitionState]}
      className={`customStep ${accomplished ? "accomplished" : ""}`}
    >
      {index}
    </div>
  )}
</Step>
```

The CSS rules will be injected depending on the current `transitionState`.

The result will be a step with a scale transition triggered at each accomplished / unaccomplished toggle.
