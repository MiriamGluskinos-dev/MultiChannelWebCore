# IGDS 2.0 - Israel Government Design System

TBD

## About last release

TBD

## Workspaces

The monorepository contains 4 main packages:

- `@igds/tokens` - a description of the design of tokens that form the basis of the design of the system and how visually everything should look. They can be used separately in conjunction with any web application.

- `@igds/core-web` - the main package of custom components, which are implemented using Web Component technology and the [Lit](https://lit.dev/) library.

- `@igds/react` - wrappers over web components for the framework [React.js](https://react.dev/)

- `@igds/angular` - wrappers over web components for the framework [Angular](https://angular.dev/)

## Setup

Install dependencies:

```bash
pnpm --shamefully-hoist install
```

## Build

This project uses the TypeScript compiler to produce JavaScript that runs in modern browsers. In addition, [Rollup.js](https://rollupjs.org/) minify and bundle JS code into `lib` which ready to publish.

To build the JavaScript production ready version of UI components:

```bash
pnpm build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
pnpm build:watch
```

To navigate, search and interact with UI components library run [Storybook](https://storybook.js.org/) after `build` command in a separate shell or together in parallel with `build:watch`:

```bash
pnpm storybook:<package>
```

## Testing

To run tests of all packages use following command:

```bash
pnpm test
```
### web-core
For testing Lit components we use testing package from the Open Web Components tool suite - [@open-wc/testing](https://open-wc.org/docs/testing/testing-package/).
A simple test can be written like this:

```javascript
test('renders with default values', async () => {
  const el = await fixture(html`<igds-accordion></igds-accordion>`);
  assert.shadowDom.equal(el, `<slot></slot>`);
});

```

## Accessibility
### web-core
Inside the web-core we have automated the accessibility check with the [axe-core](https://github.com/dequelabs/axe-core) tool.

axe-core is part of [@open-wc/testing](https://open-wc.org/docs/testing/chai-a11y-axe/), so it is easy enough to just run the following check in tests:

```javascript
import { fixture, assert, html } from '@open-wc/testing';

test('should be accessible', async () => {
  const el = await fixture(html`<igds-accordion-item></igds-accordion-item>`);
  await assert.isAccessible(el);
});
```

## Editing
Please follow **coding conventions**:
- [Lit development](./packages/core-web/README.md)
- [React development](./packages/react/README.md)
- [Angular development](./packages/angular/README.md)

Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) when committing changes.
`scope` will be number of your ticket from Jira, like:
```bash
> feat(DS-72): move DS tokens from Figma to codebase (package tokens)
```

```bash
> fix(DS-69): Angular npm publish fix
```

```bash
> docs(DS-40): Add Coding conventions (Code Style Guides) for React package
```

If you use VS Code, we highly recommend the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin), which enables some extremely useful features for lit-html templates:

- Syntax highlighting
- Type-checking
- Code completion
- Hover-over docs
- Jump to definition
- Linting
- Quick Fixes

The project is setup to recommend lit-plugin to VS Code users if they don't already have it installed.

## Linting

Linting of TypeScript files is provided by [ESLint](eslint.org) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing `eslint.config.mjs` and `tsconfig.json`.

### ESLint 10 compatibility patches

This repository currently uses `pnpm.patchedDependencies` for some ESLint plugins that are not yet fully compatible with ESLint 10:

- `eslint-plugin-react@7.37.5` -> `patches/eslint-plugin-react@7.37.5.patch`
- `eslint-plugin-typescript-sort-keys@3.3.0` -> `patches/eslint-plugin-typescript-sort-keys@3.3.0.patch`

Please keep these patches under review:

- Check upstream plugin releases regularly and remove local patches as soon as official ESLint 10 support is available.
- After any plugin upgrade or patch removal, run lint for all packages (`core-web`, `react`, `angular`) before merging.
- Keep `pnpm.patchedDependencies` and files in `patches/` in sync.

Separate CSS code outside Lit web components we check using CSS linter - [stylelint](https://stylelint.io/).

To lint the project run:

```bash
pnpm lint
```

## Formatting

[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Lit's style. You can change this in `.prettierrc.json`.

Prettier has not been configured to run when committing files, but this can be added with Husky and `pretty-quick`. See the [prettier.io](https://prettier.io/) site for instructions.

## More information

See [Figma](https://www.figma.com/design/ZmtlQhH4lWYeXlmionQKHH/IGDS-Design-System-File-2.0?node-id=21-392&t=XkREH7C6LsoIPrKK-0) file for more information.
