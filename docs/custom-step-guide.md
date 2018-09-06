---
id: custom-step-guide
title: Create your custom step
sidebar_label: Create your custom step
---

The `<Step/>` component uses the [render props](https://reactjs.org/docs/render-props.html) pattern for a good reason.

As the official React documentation says :

> A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

Which means that render props are the perfect choice for a component with a high need of rendering customization (Hello `<Step/>` component 👋).

In fact the `<Step/>` component only take care of its position on the progress bar and its current status (accomplished / not accomplished). And takes all of it and make it accessible to the React element it returns.

Here are the list of the data available to a React element render by a `<Step/>` component :

- **accomplished** : If the step has been accomplished following the current progression of the progress bar
- **position** : Its position on the progress bar (in percent where 0 means total left and 100 means total right)
- **transitionState** : This is discussed in details in the guide on [how to create your own step transition](/docs/step-transition-guide)
- **index** : The index of the step among all the steps

```jsx
<Step>
  {({ accomplished, position, transitionState, index }) => (
    // WHAT YOU WANT TO RENDER
  )}
</Step>
```

Let's take a look at what you can build with this data.

### Indexed steps

One thing that can come handy is to display the index of the step on the render. Child's play.

Recover the `index` data from the `<Step/>` component and use it in the React element you're rendering.

```jsx
<ProgressBar percent={25}>
  <Step>
    {({ accomplished, index }) => (
      <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}>
        {index + 1}
      </div>
    )}
  </Step>
</ProgressBar>
```

By doing that you'll get 3 steps respectively labeled 1, 2 and 3.

Note that you can dynamically style the accomplished steps using the `accomplished` value and set CSS rules depending on the current value.

If you want to get more ideas on how to use those values to create awesome steps take a look the [examples showcase](/examples).