# Luuqad Style Guidelines

The Luuqad project follows a set of coding and documentation style guidelines to maintain consistency and readability throughout the codebase. All contributors are expected to adhere to these guidelines when contributing to the project.

## Table of Contents

- [Code Formatting](#code-formatting)
- [Naming Conventions](#naming-conventions)
- [Documentation](#documentation)
- [Version Control](#version-control)

## Code Formatting

In order to set a standard that will be used by all contributors to the project to keep the code style consistent. We will be implementing two tools:

- [Eslint](https://eslint.org/)- For best practices on coding standards
- [Prettier](https://prettier.io/)- For automatic formatting of code files

## Eslint

ESLint automatically comes installed and pre-configured with Next.js projects.
adding a little bit of extra configuration.

```json
// .eslintrc.json

{
  "extends": ["next/core-web-vitals", "eslint:recommended"],
  "globals": {
    "React": "readonly" //React will always be defined even if we don't specifically import it,
  },
  "rules": {
    "no-unused-vars": "warn" //warns unused variables
  }
}
```

## Prettier

Using Prettier provides a consistent coding format for all team members across the organization.

```json
"scripts": {
  "prettier": "prettier --write ."
}
```

## Settings Json File

Using settings.json file, Prettier will automatically format the file and save it, you no longer need to run the command each time

## Naming Conventions

- Use **Kebab Case** `my-component.tsx` For File Names
- Use **PascalCase** `const MyComponet=()=>{}` for Components

## Documentation

## Version Control

- Commit messages should be descriptive and concise
- Use present tense in commit messages (e.g., "Add feature" instead of "Added feature").
- Reference issue numbers in commit messages where applicable (e.g., "Fix issue #123").
