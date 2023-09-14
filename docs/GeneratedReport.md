# Report

## Project Structure

### ./apps

```shell
apps
├── basis-app
│   ├── jest.config.ts
│   ├── project.json
│   ├── proxy.conf.json
│   ├── src
│   │   ├── app
│   │   │   ├── app-routing.module.ts
│   │   │   ├── app.component.html
│   │   │   ├── app.component.scss
│   │   │   ├── app.component.spec.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.module.ts
│   │   │   ├── app.routes.ts
│   │   │   ├── config
│   │   │   │   └── index.ts
│   │   │   └── routed
│   │   │       ├── dashboard
│   │   │       │   ├── components
│   │   │       │   │   ├── dashboard-footer
│   │   │       │   │   │   ├── dashboard-footer.component.html
│   │   │       │   │   │   ├── dashboard-footer.component.scss
│   │   │       │   │   │   ├── dashboard-footer.component.spec.ts
│   │   │       │   │   │   └── dashboard-footer.component.ts
│   │   │       │   │   ├── dashboard-header
│   │   │       │   │   │   ├── components
│   │   │       │   │   │   │   ├── header-lang-setting
│   │   │       │   │   │   │   │   ├── header-lang-setting.component.html
│   │   │       │   │   │   │   │   ├── header-lang-setting.component.scss
│   │   │       │   │   │   │   │   ├── header-lang-setting.component.spec.ts
│   │   │       │   │   │   │   │   └── header-lang-setting.component.ts
│   │   │       │   │   │   │   └── header-menu-settings
│   │   │       │   │   │   │       ├── header-menu-settings.component.html
│   │   │       │   │   │   │       ├── header-menu-settings.component.scss
│   │   │       │   │   │   │       ├── header-menu-settings.component.spec.ts
│   │   │       │   │   │   │       └── header-menu-settings.component.ts
│   │   │       │   │   │   ├── dashboard-header.component.html
│   │   │       │   │   │   ├── dashboard-header.component.scss
│   │   │       │   │   │   ├── dashboard-header.component.spec.ts
│   │   │       │   │   │   └── dashboard-header.component.ts
│   │   │       │   │   ├── dashboard-left-side-nav
│   │   │       │   │   │   ├── dashboard-left-side-nav.component.html
│   │   │       │   │   │   ├── dashboard-left-side-nav.component.scss
│   │   │       │   │   │   ├── dashboard-left-side-nav.component.spec.ts
│   │   │       │   │   │   └── dashboard-left-side-nav.component.ts
│   │   │       │   │   ├── dashboard-right-side-nav
│   │   │       │   │   │   ├── dashboard-right-side-nav.component.html
│   │   │       │   │   │   ├── dashboard-right-side-nav.component.scss
│   │   │       │   │   │   ├── dashboard-right-side-nav.component.spec.ts
│   │   │       │   │   │   └── dashboard-right-side-nav.component.ts
│   │   │       │   │   └── dashboard-side-nav-content
│   │   │       │   │       ├── dashboard-sidenav-content.component.html
│   │   │       │   │       ├── dashboard-sidenav-content.component.scss
│   │   │       │   │       ├── dashboard-sidenav-content.component.spec.ts
│   │   │       │   │       └── dashboard-sidenav-content.component.ts
│   │   │       │   ├── dashboard-routing.module.ts
│   │   │       │   ├── dashboard.component.html
│   │   │       │   ├── dashboard.component.scss
│   │   │       │   ├── dashboard.component.spec.ts
│   │   │       │   ├── dashboard.component.ts
│   │   │       │   └── dashboard.module.ts
│   │   │       └── demos
│   │   │           ├── components
│   │   │           │   ├── formly-example
│   │   │           │   │   ├── formly-example.component.html
│   │   │           │   │   ├── formly-example.component.scss
│   │   │           │   │   ├── formly-example.component.spec.ts
│   │   │           │   │   └── formly-example.component.ts
│   │   │           │   ├── login-example
│   │   │           │   │   ├── login-example.component.html
│   │   │           │   │   ├── login-example.component.scss
│   │   │           │   │   ├── login-example.component.spec.ts
│   │   │           │   │   └── login-example.component.ts
│   │   │           │   └── material-example
│   │   │           │       ├── material-example.component.html
│   │   │           │       ├── material-example.component.scss
│   │   │           │       ├── material-example.component.spec.ts
│   │   │           │       └── material-example.component.ts
│   │   │           ├── demos-routing.module.ts
│   │   │           └── demos.module.ts
│   │   ├── assets
│   │   │   └── styles
│   │   │       ├── colors.scss
│   │   │       └── units.scss
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── styles.scss
│   │   └── test-setup.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.editor.json
│   ├── tsconfig.json
│   └── tsconfig.spec.json
├── basis-app-e2e
│   ├── cypress.config.ts
│   ├── project.json
│   ├── src
│   │   ├── e2e
│   │   │   └── app.cy.ts
│   │   ├── fixtures
│   │   │   └── example.json
│   │   └── support
│   │       ├── app.po.ts
│   │       ├── commands.ts
│   │       └── e2e.ts
│   └── tsconfig.json
├── middleware-basis-app
│   ├── jest.config.ts
│   ├── project.json
│   ├── src
│   │   ├── app
│   │   │   ├── app.controller.spec.ts
│   │   │   ├── app.controller.ts
│   │   │   ├── app.module.ts
│   │   │   ├── app.service.spec.ts
│   │   │   └── app.service.ts
│   │   ├── assets
│   │   └── main.ts
│   ├── test
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.spec.json
│   └── webpack.config.js
└── middleware-basis-app-e2e
    ├── jest.config.ts
    ├── project.json
    ├── src
    │   ├── middleware-basis-app
    │   │   └── middleware-basis-app.spec.ts
    │   └── support
    │       ├── global-setup.ts
    │       ├── global-teardown.ts
    │       └── test-setup.ts
    ├── tsconfig.json
    └── tsconfig.spec.json

37 directories, 98 files
```

### ./apps-globals

```shell
apps-globals
├── global-assets
│   ├── i18n
│   │   ├── de.json
│   │   ├── en.json
│   │   └── fr.json
│   └── styles
│       ├── apps-globals-basis.scss
│       ├── custom-themes
│       │   ├── angular-material
│       │   │   ├── green.scss
│       │   │   ├── material-icons.scss
│       │   │   └── theme.scss
│       │   └── another-theme
│       │       └── theme.scss
│       └── global-css-variables
│           ├── accessibility.scss
│           ├── breakpoints.scss
│           ├── colors.scss
│           ├── mixins.scss
│           └── units.scss
└── types
    └── global-types.ts

9 directories, 14 files
```

### ./apps-shared-libs

```shell
apps-shared-libs
├── alex-library
│   └── src
│       └── lib
├── formly
│   ├── README.md
│   ├── jest.config.ts
│   ├── ng-package.json
│   ├── package.json
│   ├── project.json
│   ├── src
│   │   ├── index.ts
│   │   ├── lib
│   │   │   ├── custom-formly.module.ts
│   │   │   ├── formly-custom-types
│   │   │   │   └── formly-types.ts
│   │   │   ├── formly-custom-validators
│   │   │   ├── formly-custom-wrappers
│   │   │   ├── formly-validation-messages
│   │   │   │   └── formly-messages.ts
│   │   │   └── types
│   │   └── test-setup.ts
│   ├── tsconfig.json
│   ├── tsconfig.lib.json
│   ├── tsconfig.lib.prod.json
│   └── tsconfig.spec.json
├── material
│   ├── README.md
│   ├── jest.config.ts
│   ├── ng-package.json
│   ├── package.json
│   ├── project.json
│   ├── src
│   │   ├── index.ts
│   │   ├── lib
│   │   │   └── custom-material.module.ts
│   │   └── test-setup.ts
│   ├── tsconfig.json
│   ├── tsconfig.lib.json
│   ├── tsconfig.lib.prod.json
│   └── tsconfig.spec.json
└── utility
    └── color
        ├── generator
        │   ├── generateNamedColors.ts
        │   └── generator-data.ts
        └── theme
            ├── common
            │   └── farbkreis.ts
            └── standard
                └── colors
                    ├── grays.ts
                    └── green.ts

22 directories, 31 files
```

## Routen

```shell
./apps/basis-app/src/app/app-routing.module.ts
./apps/basis-app/src/app/routed/dashboard/dashboard-routing.module.ts
./apps/basis-app/src/app/routed/demos/demos-routing.module.ts
```
