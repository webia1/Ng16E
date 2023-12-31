# Enterprise Angular/NestJS Apps with Nx

> Document Status: In progress

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=4 orderedList=false} -->

<!-- code_chunk_output -->

- [Project related details](#project-related-details)
  - [Single Angular App: Basis-App](#single-angular-app-basis-app)
  - [Single Middleware App: Middleware Basis-App](#single-middleware-app-middleware-basis-app)
- [Global Details](#global-details)
- [Colors](#colors)
- [Further Reading](#further-reading)
  - [Security](#security)
  - [State Management](#state-management)
  - [Testing](#testing)
  - [Documentation](#documentation)
  - [Workshops](#workshops)
- [Miscellaneous](#miscellaneous)
  - [Global Packages](#global-packages)

<!-- /code_chunk_output -->

This ReadMe-Document can also be read by AI agents. This is the reason for the following writing style.

## Project related details

- This is a **NxMono Repo (v16+) with Angular v16+ & NestJS v10+ Apps** (Applications).
- There are several different apps in this NxMonorepo.
- All apps are located in `./apps folder`.
- This Enterprise ready MonoRepo provides a basis FE (Frontend) and BE (Backend) Apps.
- They all use the same [package.json](./package.json) file.
- Some parts (resuable modules or themes) are common for all apps.

  - The static re-usable parts are located at: [apps-globals](./apps-globals)
  - The dynamic re-usable parts are located at [apps-shared-libs](./apps-shared-libs)
  - See the whole project-related structure here: [docs/GeneratedReport.md](./docs/GeneratedReport.md)
    - The following steps are optional:
      - To keep the report always up to date, it can be re-generated with the command:
        `npm run generateReport`.
      - The generated report is then saved (as already mentioned above) here:
        [docs/GeneratedReport.md](./docs/GeneratedReport.md)

- We call styles used by all apps `apps-globals`.
  - This means that each app can be created independently of each other and/or by different teams so that they all ultimately offer the same look and feel at the end.
- Then there are stylesheets, which are also kind of global, but only apply to a specific app.
  - Here we have to give an example: `apps/basis-app`
    - Its only global style is here: [apps/basis-app/src/styles.scss](/apps/basis-app/src/styles.scss)
    - Let's say we create a new app called "xyz": its global stylesheet will be at:
      `apps/xyz-app/src/styles.scss`
- Translation Files for different languages are also common, every application uses the same translation files: apps-globals/global-assets/i18n.
  - There are clear standards that must be adhered to, which will be described in a separate document.
  - The first rule: all keys are kept flat.
  - Duplicate keys with the same value should be avoided. (Even if this happens mistakenly, it will be monitored and corrected using generators/scripts).
  - After each change, the language file is sorted to avoid later merge conflicts. (Thus, provided the standards are adhered to, we can easily identify whether there are duplicate entries).
  - More details will follow.

### Single Angular App: Basis-App

Details coming soon.

### Single Middleware App: Middleware Basis-App

Details coming soon.

## Global Details

-The main focus is reusability within the entire monorepo.

- Only these parts are important for this project

  - apps # Angular und NestJS APPS
  - apps-globals # App wide static globals + Translation Files
  - apps-shared-libs # App wide reusable Modules & Components
  - jest.config.ts
  - jest.preset.js
  - nx.json
  - package.json
  - tsconfig.base.json

- The project uses Jest for testing, as indicated by the `jest.config.ts` file in the root directory.
- The project uses ESLint for linting, as indicated by the `.eslintrc.json` file in the root directory.
- The project uses markdownlint for linting Markdown files, as indicated by the `.markdownlint.json` file in the root directory.
- The `cypress.config.ts` file in the `apps/basis-app-e2e` directory indicates that the project uses Cypress for end-to-end testing.

## Colors

To efficiently handle the color design aspects of a frontend application, we need to establish a simple "grammar." Using "light," "dark," "lighter," and "darker" allows us to define only a limited number of shades, and it can be challenging for a person to mentally sort them by color.

We need to find a way for colors to have distinct characteristics. The names should be easy to remember and evoke a certain mental image. Additionally, by using these terms, we create specific contrast ratios that make it easier to adhere to usability and accessibility guidelines.

Moreover, this approach facilitates collaboration within our team. When everyone refers to the same set of color shades, it eliminates confusion and ensures that our design discussions are more precise and productive.

## Further Reading

### Security

Authentication, JWT Tokens, Certificates

### State Management

### Testing

- Jest (Unit/Integration)
- Cypress (E2E) / Puppeteer

### Documentation

- Storybook Integration
- XD Integration

### Workshops

- Git
- TypeScript
- Reactive Extensions (RxJS)
- State Management (NGXS)
- Testen allg.
- Formly (During Implementations)

## Miscellaneous

### Global Packages

Please install following packages globally:

```shell
npm i -g nx
npm i -g tsx
```
