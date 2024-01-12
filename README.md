# HackersAndSlackers Ghost Theme

![Deploy Theme](https://img.shields.io/github/actions/workflow/status/hackersandslackers/hackersandslackers-theme/deploy-theme.yml?style=flat-square&logo=GithubActions&logoColor=white&labelColor=4c566a&color=a3be8c)
![Ghost](https://img.shields.io/badge/Ghost-^v5.0.0-lightgrey.svg?longCache=true&style=flat-square&logo=ghost&logoColor=white&colorB=656c82&colorA=4c566a)
![Webpack](https://img.shields.io/badge/Webpack-v5.89.0-blue.svg?longCache=true&style=flat-square&logo=webpack&logoColor=white&colorB=5e81ac&colorA=4c566a)
![Sass](https://img.shields.io/badge/Sass-^v1.66.0-pink.svg?longCache=true&style=flat-square&colorA=4c566a&colorB=b48ead&logo=sass&logoColor=ffffff)
![GitHub Last Commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat-square&colorA=4c566a&colorB=a3be8c&logo=GitHub)
[![GitHub Issues](https://img.shields.io/github/issues/hackersandslackers/hackersandslackers-theme.svg?style=flat-square&colorB=ebcb8b&colorA=4c566a&logo=GitHub)](https://github.com/hackersandslackers/hackersandslackers-theme/issues)
[![GitHub Stars](https://img.shields.io/github/stars/hackersandslackers/hackersandslackers-theme.svg?style=flat-square&colorB=ebcb8b&colorA=4c566a&logo=GitHub)](https://github.com/hackersandslackers/hackersandslackers-theme/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/hackersandslackers/hackersandslackers-theme.svg?style=flat-square&colorB=ebcb8b&colorA=4c566a&logo=GitHub)](https://github.com/hackersandslackers/hackersandslackers-theme/network)

Hand-crafted Ghost theme created by & for [HackersAndSlackers](https://hackersandslackers.com/). Clean design & usability balanced with novel theme features.

🛠 This theme is in active development 🛠

## Features

The HackersAndSlackers theme includes custom widgets, integrations, and features beyond the breath of Ghost’s core functionality:

### Posts

- **Series’**: Collections of posts intended to be read in sequential order. Posts belonging to a series are easily navigated via “table of contents” and “next/previous” modules, as well as a series overview page.
- **Related Posts**: Intelligent post suggestions for readers.
- **Data Tables**: The ability to cleanly present and navigate datasets within a post via a clean interface.
- **Code**: PrismJS highlighting for ~50 programming languages. 

### Authors

- **Author List**: An overview of blog contributors with brief contexts.
- **Github**: Github activity widgets visible from an Author’s detail page.
- **Website**: Embedded preview of  authors’ personal websites accessible from an Author’s detail page.

### Accounts

- **Accounts**: User account creation and management. 
- **Comments**: Native implementation of Ghost comments.
- **Newsletter**: Simple opt-in for newsletter subscriptions.

### Developers

- **Webpack**: Relies on Webpack for builds (in place of Gulp). Utilizes Webpack plugins to render SASS, minify source files, and serves code-split asset bundles.
- **Automations**: Integrations such as automatic post optimization, image caching, etc. are served by a [corresponding API](https://github.com/toddbirchard/blog-webhook-api)

## Getting Started (For Developers)

For developers interested in contributing or other usage, this theme is openly available:

```shell
git clone https://github.com/hackersandslackers/hackersandslackers-theme.git
cd hackersandslackers-theme
yarn
make dev
```

For information on installing the Ghost platform, please reference the [Ghost CLI](https://docs.ghost.org/docs/cli-install).

### Integrations

This theme comes equipped with multiple built-in integrations, which are visible in `.example.env`. Rename this file to `.env` (and don’t forget to include `.env` in `.gitignore`)!

Replace the values in this configuration file with your own. Additional details to be added here soon.
