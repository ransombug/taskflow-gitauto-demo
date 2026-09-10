# GitAuto

This is a demo/test repository for AI-generated tests.

TaskFlow is a small single-page task dashboard. The project uses React, Vite, and JavaScript. There is no backend, database, or authentication.

## Testing

- Tests use Vitest and React Testing Library.
- Coverage is generated with Vitest (`npm run test:coverage`).
- The LCOV report is written to `coverage/lcov.info`.
- GitHub Actions runs the same coverage command on push and pull request.

## Guidance

- Test-only changes are preferred.
- Application behavior should not be changed unless necessary to fix an actual test or CI issue.
- Prefer unit tests for utility functions in `src/utils`.
- Prefer React Testing Library tests for components in `src/components`.
- Do not introduce unnecessary dependencies.
- Keep tests focused on existing behavior rather than large refactors.
