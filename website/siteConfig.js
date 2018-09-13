/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
// const users = [
//   {
//     caption: "User1",
//     // You will need to prepend the image path with your baseUrl
//     // if it is not '/', like: '/test-site/img/docusaurus.png'.
//     image: "/img/docusaurus.png",
//     infoLink: "https://www.facebook.com",
//     pinned: true
//   }
// ];

const siteConfig = {
  title: "react-step-progress-bar", // Title for your website.
  tagline: "A library to create stunning progress bars and steps in React.",
  url: "https://pierreericgarcia.github.io",
  baseUrl: "/react-step-progress-bar/",

  algolia: {
    apiKey: "b585113522ea48daeb1cbacc146c5c18",
    indexName: "react_step_progress_bar"
  },

  // Used for publishing and more
  projectName: "react-step-progress-bar",
  organizationName: "pierreericgarcia",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "installation", label: "Docs" },
    { page: "examples", label: "Examples" },
    {
      href: "https://github.com/pierreericgarcia/react-step-progress-bar",
      label: "GitHub"
    },
    { search: true }
  ],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: "img/react-step-progress-bar-logo.png",
  footerIcon: "img/react-step-progress-bar-logo.png",
  favicon: "img/favicon.png",

  /* Colors for website */
  colors: {
    primaryColor: "#444444",
    secondaryColor: "#f19f9c"
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Pierre-Eric Garcia`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/react-step-progress-bar-logo.png",
  twitterImage: "img/react-step-progress-bar-logo.png",
  twitterUsername: "pierrericgarcia",
  scrollToTop: true,
  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: "https://github.com/pierreericgarcia/react-step-progress-bar",

  stylesheets: ["//unpkg.com/react-step-progress-bar@1.0.0/styles.css"]
};

module.exports = siteConfig;
