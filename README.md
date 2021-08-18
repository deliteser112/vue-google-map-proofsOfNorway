# [Zero Theme PRO](https://store.vuetifyjs.com/products/zero-theme-pro)

![version](https://img.shields.io/badge/version-1.2.1-blue.svg)[![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.com/invite/s93b7Fv)

<img src="https://cdn.shopify.com/s/files/1/2695/0984/products/main_680d843e-94f6-4ea9-90a2-5b8bb1cb6523.png?v=1609740877" alt="Product Gif" height="500px"/>

**Zero Theme PRO** is a beautiful resource built over [Vuetify](https://vuetifyjs.com/en/), [Vuex](https://vuex.vuejs.org/installation.html) and [Vuejs](https://vuejs.org/). It will help you get started and quickly developing dashboards in no time. Using the Dashboard is pretty simple but requires basic knowledge of Javascript, [Vuejs](https://vuejs.org/v2/guide/) and [Vue-Router](https://router.vuejs.org/en/).

## Getting Started

- Install Nodejs from the official [Nodejs page](https://nodejs.org/en/)
- Install Yarn from the official [Yarn installation page](https://classic.yarnpkg.com/en/docs/install/#windows-stable).
- Unzip the `zero-theme.zip` file downloaded from Vuetify
- Create a folder named `zero-theme` and unzip the `theme.zip` file provided by the previous step
- Open your terminal and navigate to the `zero-theme` directory
- Run `yarn install` to install the project's dependencies
- Run `yarn serve` to start a local development server

You can also run additional tasks such as

- `yarn run build` to build your app for production
- `yarn run lint` to run linting.

## Vuetify

Vuetify is an Open Source UI Library that is developed exactly according to Material Design spec. Every component is handcrafted to bring you the best possible UI tools to your next great app. The development doesn't stop at the core components outlined in Google's spec. Through the support of community members and sponsors, additional components will be designed and made available for everyone to enjoy.

The documentation for **Vuetify** is hosted [here](https://vuetifyjs.com/).

***Not all components that are available in this project are part of the theme and may be a default Vuetify component***

## Vuex

Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official [devtools](https://github.com/vuejs/vue-devtools) extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.

## Vue-cli

We used the latest 3.x [Vue CLI](https://github.com/vuejs/vue-cli) which aims to reduce project configuration
to as little as possible. Almost everything is inside `package.json` + some other related files such as
`.babel.config.js`, `.eslintrc.js` and `.postcssrc.js`.

Let us know what you think and what we can improve below. And good luck with development!

## Table of Contents

- [Demo](#demo)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Demo

- [Demo page](https://store.vuetifyjs.com/products/zero-theme-pro/preview)

## File Structure

Within the download you'll find the following directories and files:

<details>

```txt
zero-theme/
┣ public/
┃ ┣ android-chrome-192x192.png
┃ ┣ android-chrome-512x512.png
┃ ┣ apple-touch-icon.png
┃ ┣ favicon-16x16.png
┃ ┣ favicon-32x32.png
┃ ┣ favicon.ico
┃ ┣ index.html
┃ ┣ robots.txt
┃ ┗ site.webmanifest
┣ src/
┃ ┣ assets/
┃ ┃ ┣ about.jpg
┃ ┃ ┣ article-1.jpg
┃ ┃ ┣ article-2.jpg
┃ ┃ ┣ article-3.jpg
┃ ┃ ┣ article-4.jpg
┃ ┃ ┣ article-5.jpg
┃ ┃ ┣ article-6.jpg
┃ ┃ ┣ article-7.jpg
┃ ┃ ┣ article.jpg
┃ ┃ ┣ author.png
┃ ┃ ┣ conference.jpg
┃ ┃ ┣ contact.jpg
┃ ┃ ┣ daedal-logo-dark.png
┃ ┃ ┣ daedal-logo-light.png
┃ ┃ ┣ gallery.jpg
┃ ┃ ┣ home-hero.jpg
┃ ┃ ┣ insta-1.jpg
┃ ┃ ┣ insta-2.jpg
┃ ┃ ┣ insta-3.jpg
┃ ┃ ┣ insta-4.jpg
┃ ┃ ┣ insta-5.jpg
┃ ┃ ┣ insta-6.jpg
┃ ┃ ┣ light.jpg
┃ ┃ ┣ logo-1-dark.png
┃ ┃ ┣ logo-1-light.png
┃ ┃ ┣ logo-2-dark.png
┃ ┃ ┣ logo-2-light.png
┃ ┃ ┣ logo-3-dark.png
┃ ┃ ┣ logo-3-light.png
┃ ┃ ┣ logo-4-dark.png
┃ ┃ ┣ logo-4-light.png
┃ ┃ ┣ logo-5-dark.png
┃ ┃ ┣ logo-5-light.png
┃ ┃ ┣ logo-6-dark.png
┃ ┃ ┣ logo-6-light.png
┃ ┃ ┣ logo.svg
┃ ┃ ┣ marketing.jpg
┃ ┃ ┣ mobile.png
┃ ┃ ┣ news.jpg
┃ ┃ ┣ pricing.jpg
┃ ┃ ┣ pro.jpg
┃ ┃ ┣ project-1.jpg
┃ ┃ ┣ project-10.jpg
┃ ┃ ┣ project-2.jpg
┃ ┃ ┣ project-3.jpg
┃ ┃ ┣ project-4.jpg
┃ ┃ ┣ project-5.jpg
┃ ┃ ┣ project-6.jpg
┃ ┃ ┣ project-7.jpg
┃ ┃ ┣ project-8.jpg
┃ ┃ ┣ project-9.jpg
┃ ┃ ┣ project.jpg
┃ ┃ ┣ sink.jpg
┃ ┃ ┣ tags.jpg
┃ ┃ ┣ team-1.jpg
┃ ┃ ┣ team-2.jpg
┃ ┃ ┣ team-3.jpg
┃ ┃ ┣ team-4.jpg
┃ ┃ ┣ user-1.jpg
┃ ┃ ┣ user-2.jpg
┃ ┃ ┣ user-3.jpg
┃ ┃ ┣ zero-logo-dark.svg
┃ ┃ ┗ zero-logo-light.svg
┃ ┣ components/
┃ ┃ ┗ base/
┃ ┃   ┣ Avatar.vue
┃ ┃   ┣ AvatarCard.vue
┃ ┃   ┣ Body.vue
┃ ┃   ┣ Btn.vue
┃ ┃   ┣ Divider.vue
┃ ┃   ┣ Heading.vue
┃ ┃   ┣ Icon.vue
┃ ┃   ┣ Img.vue
┃ ┃   ┣ InfoCard.vue
┃ ┃   ┣ Section.vue
┃ ┃   ┣ SectionHeading.vue
┃ ┃   ┣ Subheading.vue
┃ ┃   ┣ Subtitle.vue
┃ ┃   ┗ Title.vue
┃ ┣ layouts/
┃ ┃ ┗ home/
┃ ┃   ┣ AppBar.vue
┃ ┃   ┣ Footer.vue
┃ ┃   ┣ Index.vue
┃ ┃   ┣ Settings.vue
┃ ┃   ┗ View.vue
┃ ┣ mixins/
┃ ┃ ┣ heading.js
┃ ┃ ┗ load-sections.js
┃ ┣ plugins/
┃ ┃ ┣ base.js
┃ ┃ ┣ index.js
┃ ┃ ┣ meta.js
┃ ┃ ┣ vuetify.js
┃ ┃ ┗ webfontloader.js
┃ ┣ router/
┃ ┃ ┗ index.js
┃ ┣ styles/
┃ ┃ ┗ variables.scss
┃ ┣ views/
┃ ┃ ┣ home/
┃ ┃ ┃ ┗ Index.vue
┃ ┃ ┣ pro/
┃ ┃ ┃ ┗ Index.vue
┃ ┃ ┣ sections/
┃ ┃ ┃ ┣ Affiliates.vue
┃ ┃ ┃ ┣ Features.vue
┃ ┃ ┃ ┣ Hero.vue
┃ ┃ ┃ ┣ ProFeatures.vue
┃ ┃ ┃ ┣ SocialMedia.vue
┃ ┃ ┃ ┗ ThemeFeatures.vue
┃ ┃ ┗ View.vue
┃ ┣ App.vue
┃ ┗ main.js
┣ .browserslistrc
┣ .editorconfig
┣ .eslintrc.js
┣ .gitignore
┣ README.md
┣ babel.config.js
┣ package.json
┣ vue.config.js
┗ yarn.lock
```

</details>

## Browser Support

Zero aims to support all evergreen browsers (Chrome, Firefox, etc) and Internet Explorer 11 (IE11)

## Resources

- [Live Preview](https://store.vuetifyjs.com/products/zero-theme-pro/preview)
- Product Page: [Product](https://store.vuetifyjs.com/products/zero-theme-pro)
- Vuetify Documentation is [Here](https://vuetifyjs.com/)
- License Agreement: [License](https://store.vuetifyjs.com/licenses)
- Contact: [Contact](https://store.vuetifyjs.com/contact-us)
- Issues: [Github Issues Page](https://github.com/vuetifyjs/premium-theme-issues)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the **Zero Theme PRO** theme. Here is some advice for our users that want to report an issue:

1. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
2. Some issues may be browser specific, so specifying what browser you encountered the issue will be helpful.

## Technical Support or Questions

If you have questions or need help integrating the product please reach out in [Discord](https://discord.com/invite/s93b7Fv) or file an issue [here](https://github.com/vuetifyjs/premium-theme-issues).

## Licensing

- Copyright 2021 Vuetify <https://vuetifyjs.com>
- Vuetify [License Information](https://github.com/vuetifyjs/vuetify/blob/master/LICENSE.md)

<br>
<br>

<p align="center">
  <img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.png" height="128">
</p>

<br>

All applications are built using **Vue** and **Vuetify** and use best standards and practices for optimal **performance** and **accessibility**. Each template is built mobile first and scales down to 320px width (iPhone 5). Each theme supports all evergreen browsers (Chrome, Firefox, etc) and Internet Explorer 11 (IE11).

Each theme comes with full support for all of Vuetify's features including components, directives and more. For more information on available features, visit the API Explorer in the Vuetify documentation.

## Useful Links

- [Vuetify Documentation](https://vuetifyjs.com/)
- [Vuetify Store](https://store.vuetifyjs.com/)
- [Free Vuetify Themes](https://store.vuetifyjs.com/collections/free-products)
- [Discord](https://discord.com/invite/s93b7Fv)
- [Twitter](https://twitter.com/vuetifyjs)
