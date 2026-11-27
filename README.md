# QA Bootcamp Week 2 Starter

A TypeScript and Playwright project developed during Week 2 of the QA Bootcamp. It contains UI and API tests for the Toolshop application, covering user interactions, search functionality, authentication and shopping cart operations.

## Prerequisites

- [Node.js](https://nodejs.org/) (current LTS version)
- [Git](https://git-scm.com/)
- [VS Code](https://code.visualstudio.com/) or another code editor

## Setup

Clone the repository and enter the project directory:

```bash
git clone https://github.com/TristanBrian/qa-bootcamp-week2-starter.git
cd qa-bootcamp-week2-starter
```

Complete the following three steps:

**1. Install dependencies and the Playwright browser**

```bash
npm install
npx playwright install chromium
```

**2. Configure environment variables**

```bash
cp .env.example .env
```

The environment file contains the Toolshop website and API URLs. Only change them if instructed by your trainer.

**3. Run the test suite**

```bash
npm test
```

This runs the Playwright tests in the `tests/` directory.

## Test Coverage

The project includes the following automated tests:

| Test file | Coverage |
|---|---|
| `homepage.spec.ts` | Homepage title |
| `login.spec.ts` | Invalid login error handling |
| `search.spec.ts` | Product search |
| `search-no-results.spec.ts` | Search with no matching products using a Page Object |
| `products-api.spec.ts` | Products API response |
| `carts-api.spec.ts` | Cart creation and product addition |
| `cart-not-found-api.spec.ts` | Non-existent cart response (404) |
| `cart.feature` | Cucumber scenario for adding an available product to the cart |

Cart creation tests include cleanup to ensure created carts are deleted, even when a test fails.

## Project Structure

| Directory | Purpose |
|---|---|
| `tests/` | Playwright UI and API tests |
| `pages/` | Page Object classes |
| `features/` | Gherkin feature files |
| `scripts/` | Helper scripts |
| `src/` | TypeScript practice exercises |

## Available Scripts

- `npm test` - Runs the seven Playwright UI and API tests.
- `npm run test:bdd` - Runs the Cucumber shopping cart scenario.
- `npm run check` - Checks the environment configuration and connectivity to the Toolshop API.

## TypeScript Practice

The `src/ts-basics/` directory contains exercises covering:

- First TypeScript program and variable types
- Tuples
- Functions and typed parameters
- Objects and optional properties
- Type aliases
- Union types
- Optional chaining

The `src/profile-validator.ts` file demonstrates safe handling of optional fields in API responses.

Run the TypeScript exercises using:

```bash
npx tsx src/ts-basics/01-first-program.ts
npx tsx src/ts-basics/02-tuples.ts
npx tsx src/ts-basics/03-functions.ts
npx tsx src/ts-basics/04-objects.ts
npx tsx src/ts-basics/05-type-aliases.ts
npx tsx src/ts-basics/06-union-types.ts
npx tsx src/ts-basics/07-optional-chaining.ts
npx tsx src/profile-validator.ts
```

Type-check the project:

```bash
npx tsc --noEmit
```

## Environment and Security

Never commit `.env`. It contains local configuration and may contain sensitive values. It is listed in `.gitignore` and should remain excluded from version control.
## BDD Testing

The project includes a Gherkin feature in `features/cart.feature` with Cucumber step definitions in `features/step-definitions/`. Run the scenario separately using:

```bash
npm run test:bdd
```
