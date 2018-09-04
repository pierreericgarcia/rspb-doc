/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${doc}`;
  }

  pageUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("installation")}>Getting Started</a>
            <a href={this.docUrl("custom-step-guide")}>Guides</a>
            <a href={this.docUrl("step-api")}>API Reference</a>
            <a href={this.pageUrl("examples")}>Examples</a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="https://medium.com/@pierrericgarcia"
              target="_blank"
              rel="noreferrer noopener"
            >
              Medium
            </a>
            <a
              href="https://twitter.com/pierrericgarcia"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.repoUrl}>GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/pierreericgarcia/react-step-progress-bar/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>
        <section className="copyright">
          Made with 💘 by{" "}
          <a href="https://github.com/pierreericgarcia">pierreericgarcia</a>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
