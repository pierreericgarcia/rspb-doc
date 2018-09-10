---
id: progress-bar-api
title: ProgressBar API
sidebar_label: <ProgressBar/>
---

Here is the list of all the props of the `<ProgressBar/>` component.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">name</th>
      <th style="width: 50px;">type</th>
      <th style="width: 50px;">default</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>percent</td>
      <td>number</td>
      <td></td>
      <td>Percantage of progression</td>
    </tr>
    <tr>
      <td>children</td>
      <td>Step component(s)</td>
      <td></td>
      <td>ProgressBar only accepts Step as children</td>
    </tr>
    <tr>
      <td>stepPositions</td>
      <td>array of numbers</td>
      <td></td>
      <td>By default Steps are spaced linearly on the ProgressBar. You can override this by specifying the positions of the steps (in percent)</td>
    </tr>
    <tr>
      <td>unfilledBackground</td>
      <td>string</td>
      <td>rgba($color: lightgrey, $alpha: 0.6);</td>
      <td>This props is used directly on the CSS background property of the unfilled part of the ProgressBar.</td>
    </tr>
    <tr>
      <td>filledBackground</td>
      <td>string</td>
      <td>rgba($color: #0074d9, $alpha: 0.8)</td>
      <td>This props is used directly on the CSS background property of the filled part of the ProgressBar</td>
    </tr>
    <tr>
      <td>width (in pixel)</td>
      <td>number</td>
      <td>100%</td>
      <td>The width of the progress bar in pixel</td>
    </tr>
    <tr>
      <td>height (in pixel)</td>
      <td>number</td>
      <td>10</td>
      <td>The height of the progress bar in pixel</td>
    </tr>
    <tr>
      <td>hasStepZero</td>
      <td>boolean</td>
      <td>true</td>
      <td>Tells if steps position should start at 0 or not</td>
    </tr>
    <tr>
      <td>text</td>
      <td>string</td>
      <td></td>
      <td>Add a text in the middle of the progress bar</td>
    </tr>
  </tbody>
</table>
