---
id: step-api
title: Step API
sidebar_label: <Step/>
---

Here is the list of all the props of the `<Step/>` component.

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
      <td>accomplished</td>
      <td>boolean</td>
      <td></td>
      <td>Tells if this Step has been accomplished</td>
    </tr>
    <tr>
      <td>position</td>
      <td>number</td>
      <td></td>
      <td>The position in percentage of the Step on the ProgressBar</td>
    </tr>
    <tr>
      <td>index</td>
      <td>number</td>
      <td></td>
      <td>The index of the Step in the ProgressBar</td>
    </tr>
    <tr>
      <td>children</td>
      <td>function</td>
      <td></td>
      <td>The function used to render the content of the Step</td>
    </tr>
    <tr>
      <td>transition</td>
      <td>string</td>
      <td></td>
      <td>Use one of the built-ins transitions</td>
    </tr>
    <tr>
      <td>transitionDuration (in ms)</td>
      <td>string</td>
      <td>300</td>
      <td>The duration of the transition</td>
    </tr>
  </tbody>
</table>
