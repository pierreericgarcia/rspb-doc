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
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc) {
  return `${siteConfig.baseUrl}docs/${doc}`;
}

function pageUrl(page) {
  return siteConfig.baseUrl + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl("installation")}>Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={["bottom", "top"]}
    id={props.id}
    background={props.background}
  >
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn" background="light">
    {[
      {
        content:
          "A simple API to build from simple loading bars to complex progress bars with steps",
        image: imgUrl("simple.png"),
        imageAlign: "top",
        title: "Simple"
      },
      {
        content: "Design your own steps and make your progress bar unique",
        image: imgUrl("customizable.png"),
        imageAlign: "top",
        title: "Customizable"
      },
      {
        content:
          "Make it dynamic by adding catchy transition when a step is accomplished",
        image: imgUrl("animatable.png"),
        imageAlign: "top",
        title: "Animatable"
      }
    ]}
  </Block>
);

const Testimonials = () => (
  <Block layout="fourColumn">
    {[
      {
        content: "Steve Jobs",
        image: imgUrl("steve-jobs.png"),
        imageAlign: "top",
        title: '"Progress has now its own library."'
      },
      {
        content: "Elon Musk",
        image: imgUrl("elon-musk.png"),
        imageAlign: "top",
        title: '"RSPB completely disrupted the progress bar industry."'
      },
      {
        content: "Darth Vader",
        image: imgUrl("darth-vader.png"),
        imageAlign: "top",
        title: '"Come to the dark side, we have react-step-progress-bar."'
      }
    ]}
  </Block>
);

class Index extends React.Component {
  render() {
    const language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <Testimonials />
        </div>
      </div>
    );
  }
}

module.exports = Index;
