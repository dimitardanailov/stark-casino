import { test, expect, Page } from "@playwright/test";

import { testingIdentifiers } from "@/app/(home)/db";

import { Home } from "@/db/routes";

import { testNamePrefix } from "./db/index";
import generateTestCaseName from "../shared/generateTestCaseName";

test.describe("Homepage test suite", () => {
  let page: Page;
  let caseName;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(Home.URI);
  });

  test.afterAll(async () => {
    await page.close();
  });

  caseName = "form component is visible";
  test(generateTestCaseName(testNamePrefix, caseName), async () => {
    const component = await page.getByTestId(testingIdentifiers.formComponent);

    await expect(component).toBeVisible();
  });

  caseName = "form elements are visible";
  test(generateTestCaseName(testNamePrefix, caseName), async () => {
    const firstNameTextField = await page.getByTestId(
      testingIdentifiers.firstNameTextField
    );

    const lastNameTextField = await page.getByTestId(
      testingIdentifiers.lastNameTextField
    );

    const emailTextField = await page.getByTestId(
      testingIdentifiers.emailTextField
    );

    await expect(firstNameTextField).toBeVisible();
    await expect(lastNameTextField).toBeVisible();
    await expect(emailTextField).toBeVisible();
  });
});
