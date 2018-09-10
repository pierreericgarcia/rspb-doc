/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;

const ProgressBar = require("react-step-progress-bar").ProgressBar;
const Step = require("react-step-progress-bar").Step;

const SimpleProgressBar = props => (
  <Container
    padding={["bottom", "top"]}
    id={props.id}
    background={props.background}
  >
    <ProgressBar percent={75} />
  </Container>
);

class Example extends React.Component {
  render() {
    const language = this.props.language || "";

    return (
      <div>
        <SimpleProgressBar />
      </div>
    );
  }
}

module.exports = Example;
