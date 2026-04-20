# PLAYWRIGHT UI AUTOMATION

A Playwright end-to-end automation repository built to validate a modern HRMS application flow, demonstrating page object modeling, reusable fixtures, role-based navigation, and dynamic test data generation.

## Implemented Feature

- Full login automation using the OrangeHRM demo application.
- Role-based navigation from the homepage to the `PIM` section and `Add Employee` form.
- Automated employee creation flow with dynamic test data using `faker`.
- Modular page object architecture supporting maintainability and reuse.

## What This Project Demonstrates

- `LoginPage`: encapsulates login actions and environment-driven base URL navigation.
- `HomePage`: exposes left-side and top-navigation menu components for menu-driven workflows.
- `AddEmployee`: fills employee details using structured page object methods.
- `customFixture`: injects reusable page object instances into tests for clean and readable test code.
- `GetEmployeeDetails`: generates randomized employee name data on each test run.

## Test Coverage

- `e2e/tests/addemployee.spec.ts`: automates the complete end-to-end scenario from authentication to Add Employee navigation and data entry.
- `e2e/tests/example.spec.ts`: includes the default Playwright sample tests.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the main end-to-end test:
   ```bash
   npx playwright test e2e/tests/addemployee.spec.ts
   ```

## Project Structure

- `e2e/pages/`: page object models for each page and component.
- `e2e/Components/`: reusable UI navigation components.
- `e2e/fixtures/`: custom Playwright fixtures.
- `e2e/resources/TestData/`: dynamic test data generation and type definitions.
- `e2e/config/`: environment configuration.
- `e2e/tests/`: automated end-to-end test scenarios.

## Recruiter Highlights

- Built with industry-standard Playwright test automation patterns.
- Demonstrates separation of concerns through page objects and fixtures.
- Uses dynamic test data generation for robust scenario execution.
- Provides a clear path for scaling additional HRMS workflows and assertions.

