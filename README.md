# Frontend project

**This project is using as template for starting frontend project**

## Starting project

`npm install` - installing dependencies.

`npm run dev` or `npm run dev:vite` - first command is running the project in dev mode with **webpack** and **json-server**,
second command is running the project in dev mode with **vite** and **json-server**. If you want to change the code while application is running,
then use **vite** to rebuild the application faster.

---

## Scripts

-   `npm run start` - starts only the webpack dev server;
-   `npm run start:vite` - starts only the vite dev server;
-   `npm run build:prod` - building the frontend project in production mode;
-   `npm run build:dev` - building the frontend project in development mode;
-   `npm run lint:ts` - starts linting typescript code in project (.ts , .tsx);
-   `npm run lint:ts:fix` - start linting typescript code in project with `--fix` flag, and corrects errors
    if there is a fixer in the established rules;
-   `npm run lint:scss` - starts linting SCSS code in project (.scss);
-   `npm run lint:scss:fix` - start linting SCSS code in project with `--fix` flag, and corrects errors
    if there is a fixer in the established rules;
-   `npm run jest:init` - starts generating the jest-configuration file;
-   `npm run pretier` - starts prettier checking (unstable work with eslint);
-   `npm run test:e2e` - runs the cypress tests;
-   `npm run test:unit` - starts unit testing all test files (_.test.ts, _.test.tsx), if you need to run testing one
    file, you can put the name after space;
-   `npm run test:ui` - starts testing UI on local machine with docker;
-   `npm run test:ui:ok` - approve the changes in UI which were found after the command above;
-   `npm run test:ui:ci` - starts testing UI on virtual machine(GitHub actions);
-   `npm run test:ui:report` - creates a report UI tests in HTML page and json file;
-   `npm run test:ui:json` - creates a report UI tests in json file;
-   `npm run test:ui:html` - creates a report UI tests in HTML page;
-    npm run remove:feature - remove toggle feature flag, need to set two args name of feature flag and state of saved feature;
-   `npm run storybook` - starts the storybook of this project(from files \*.stories.tsx) on port 6006;
-   `npm run storybook:build` - building the storybook of this project;
-   `npm run prepare` - starts to prepare pre-commit hooks on local machine after install the project;
-   `npm run generate:slice` - starts generating FSD slice in the project. After space, put the layer name, and then
    one more space to put the slice name.

---

## Architecture

The architecture of the project is based on the FSD methodology.

You can get acquainted with the methodology [here](https://feature-sliced.design/).

---

## Working with translations

In project uses the library - `i18next` to work with the translations.
The translation files are stored in `public/locales`

For comfortable work, recommend installing the plugin `i18n support` in your editor.

Documentation of the i18next are [here](https://www.i18next.com/).

---

## Tests

In the project, 4 types of tests are used:

1. Unit-tests on the `jest`. For running - `npm run test:unit`
2. Tests components on the `React testing library`. For running - `npm run test:unit`
3. Snapshot tests on the `loki`. For running `npm run test:ui`
4. End-to-End tests on the cypress. For running cypress - `npm run test:e2e`

---

## Linting

In the project `eslint` is used to check typescript code and
`stylelint` is used for checking scss - files.

A proprietary plugin `eslint-plugin-midi-plugin-import` is used to control architectural principles of the project.
Documentation for the plugin and its rules is [here](https://github.com/MiDimas/eslint-plugin-midi-frontend-import-plugin).

To run linting typescript code - `npm run lint:ts`  
To run linting style code - `npm run lint:scss`

---

## Prettier

In the project `prettier` is used to bring the code to a single style.

To run prettier use - `npm run prettier`

P.S. prettier in project has conflicts with linter and shifts some imports to the one line,
ever the import has length more than 120 symbols.

---

## Storybook

There are storybook cases for the all ui-components in the project.
The requests to the server are mocking with `storybook-addon-mock`.

The file with story-cases inside is next to component file.

To run storybook `npm run storybook` - storybook is running on the `localhost`
with port `6006` in default.

More details about storybook are [here](https://storybook.js.org/docs/get-started).

---

## Configuration of the project

For development the project has two configs:

1. Webpack - /[webpack.config.ts](webpack.config.ts)
2. Vite - /[vite.config.ts](vite.config.ts)

Both code collectors are adapted to the project features.

The webpack config is divided into several files that are located at [/config/build](config%2Fbuild)

The `config` folder also contains configs for:

1. Babel
2. Storybook
3. Jest

The `scripts` folder contains scripts for refactoring, simplifying code writing,
generating reports, etc.

---
