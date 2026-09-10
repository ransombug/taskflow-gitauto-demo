# TaskFlow

A small React task-management application created as a demonstration repository for testing AI-powered automated test generation.

The app is a single-page dashboard for adding, filtering, completing, and deleting tasks. It is intentionally small, easy to demo, and includes a mix of well-structured code and older, less thoroughly tested utilities.

This repository is **not** a production application. It exists so tools such as GitAuto can analyze the project, generate tests for uncovered code, open a pull request, and run those tests in CI.

## Tech Stack

* React
* Vite
* JavaScript
* Vitest
* React Testing Library
* GitHub Actions

## Installation

```bash
npm install
```

Use Node.js 22 (see `.nvmrc`) if your local version is older than Vite 8's supported range.

## Development

```bash
npm run dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).

## Testing

```bash
npm run test
```

Watch mode is used by default. To run the suite once:

```bash
npm run test:run
```

## Coverage

```bash
npm run test:coverage
```

This command writes:

* `coverage/lcov.info`
* `coverage/index.html`
* a text summary in the terminal

The initial test suite is deliberately small. Most utilities and components are left untested so that automated test-generation tools have real gaps to discover. Coverage is not padded or otherwise manipulated.

## GitHub Actions

The workflow in [`.github/workflows/test.yml`](.github/workflows/test.yml) runs on every push and pull request. It:

1. Checks out the repository
2. Sets up Node.js 22
3. Installs dependencies with `npm ci`
4. Runs `npm run test:coverage`
5. Uploads `coverage/lcov.info` as a workflow artifact

The job fails if any test fails.

## Project notes

* The UI should be understandable in a few minutes: header, add-task form, filters, task list, and summary.
* Some helpers still have legacy edge-case behavior. Prefer adding tests before changing application behavior.
* Application behavior should not be changed unless a test or CI failure requires it.

## Build

```bash
npm run build
npm run preview
```
