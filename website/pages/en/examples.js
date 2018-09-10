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

const SimpleProgressBarCode = `
\`\`\`jsx
<ProgressBar percent={75} />
\`\`\`
`;

class SimpleProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 75
    };
  }

  render() {
    const { percent } = this.state;

    return (
      <Container
        className="exampleContainer"
        id={this.props.id}
        background={this.props.background}
      >
        <h2>Simple progress bar</h2>
        <ProgressBar percent={percent} />
        <h4>JS</h4>
        <MarkdownBlock>{SimpleProgressBarCode}</MarkdownBlock>
      </Container>
    );
  }
}

const SimpleGradientProgressBarCode = `
\`\`\`jsx
<ProgressBar
  filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
  percent={75}
/>
\`\`\`
`;

class SimpleGradientProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 75
    };
  }

  render() {
    const { percent } = this.state;

    return (
      <Container
        className="exampleContainer"
        id={this.props.id}
        background={this.props.background}
      >
        <h2>Simple progress bar with gradient</h2>
        <ProgressBar
          filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
          percent={percent}
        />
        <h4>JS</h4>
        <MarkdownBlock>{SimpleGradientProgressBarCode}</MarkdownBlock>
      </Container>
    );
  }
}

const IndexedStepProgressBarCode = `
\`\`\`jsx
<ProgressBar percent={75}>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={\`indexedStep \${accomplished ? "accomplished" : null}\`}
      >
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={\`indexedStep \${accomplished ? "accomplished" : null}\`}
      >
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={\`indexedStep \${accomplished ? "accomplished" : null}\`}
      >
        {index + 1}
      </div>
    )}
  </Step>
</ProgressBar>
\`\`\`
`;

const IndexedStepProgressBarCSS = `
\`\`\`css
.indexedStep {
  color: white;
  width: 20px;
  height: 20px;
  font-size: 12px;
  background-color: rgba(211, 211, 211, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.indexedStep.accomplished {
  background-color: rgba(0, 116, 217, 1);
}
\`\`\`
`;

class IndexedStepProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 75
    };
  }

  render() {
    const { percent } = this.state;

    return (
      <Container
        className="exampleContainer"
        id={this.props.id}
        background={this.props.background}
      >
        <h2>Indexed step progress bar</h2>
        <ProgressBar percent={percent}>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
            )}
          </Step>
        </ProgressBar>
        <h4>JS</h4>
        <MarkdownBlock>{IndexedStepProgressBarCode}</MarkdownBlock>
        <h4>CSS</h4>
        <MarkdownBlock>{IndexedStepProgressBarCSS}</MarkdownBlock>
      </Container>
    );
  }
}

const TransitionStepProgressBarCode = `
\`\`\`jsx
<ProgressBar
  filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
  percent={75}
>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={\`transitionStep \${accomplished ? "accomplished" : null}\`}
      >
        🌑
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={\`transitionStep \${accomplished ? "accomplished" : null}\`}
      >
        🌒
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={\`transitionStep \${accomplished ? "accomplished" : null}\`}
      >
        🌓
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={\`transitionStep \${accomplished ? "accomplished" : null}\`}
      >
        🌔
      </div>
    )}
  </Step>
  <Step transition="scale">
    {({ accomplished, index }) => (
      <div
        className={\`transitionStep \${accomplished ? "accomplished" : null}\`}
      >
        🌕
      </div>
    )}
  </Step>
</ProgressBar>
\`\`\`
`;

const TransitionStepProgressBarCSS = `
\`\`\`css
.transitionStep {
  filter: grayscale(1);
}

.transitionStep.accomplished {
  filter: grayscale(0);
}
\`\`\`
`;

class TransitionStepProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 75
    };
  }

  render() {
    const { percent } = this.state;

    return (
      <Container
        className="exampleContainer"
        id={this.props.id}
        background={this.props.background}
      >
        <h2>Step progress bar with transitions</h2>
        <ProgressBar
          filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
          percent={percent}
        >
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                🌑
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                🌒
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                🌓
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                🌔
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished, index }) => (
              <div
                className={`transitionStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                🌕
              </div>
            )}
          </Step>
        </ProgressBar>
        <h4>JS</h4>
        <MarkdownBlock>{TransitionStepProgressBarCode}</MarkdownBlock>
        <h4>CSS</h4>
        <MarkdownBlock>{TransitionStepProgressBarCSS}</MarkdownBlock>
      </Container>
    );
  }
}

class Example extends React.Component {
  render() {
    const language = this.props.language || "";

    return (
      <div>
        <SimpleProgressBar />
        <SimpleGradientProgressBar />
        <IndexedStepProgressBar />
        <TransitionStepProgressBar />
      </div>
    );
  }
}

module.exports = Example;
