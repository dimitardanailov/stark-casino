import { test, expect, Page } from "@playwright/test";

import { testingIdentifiers } from "@/app/(home)/db";

import { Home } from "@/db/routes";

import { testNamePrefix } from "./db/index";
import generateTestCaseName from "../shared/generateTestCaseName";

import formElements from "./utils/formElements";

import uniqueUser from "./db/uniqueUser";

test.describe("Homepage test suite", () => {
  let page: Page;
  let caseName;

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();

    page.on("console", (msg) => {
      console.log(msg.text());
    });

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

  caseName = "add a new user";
  test(generateTestCaseName(testNamePrefix, caseName), async () => {
    const {
      firstNameTextField,
      lastNameTextField,
      emailTextField,
      submitButton,
    } = await formElements(page);

    await firstNameTextField.locator("input").fill(uniqueUser.firstName);
    await lastNameTextField.locator("input").fill(uniqueUser.lastName);
    await emailTextField.locator("input").fill(uniqueUser.email);

    await submitButton.click();

    const alertBox = await page.getByTestId(testingIdentifiers.formAlertBox);
    await expect(alertBox).toBeVisible();

    const alertBoxScreenshot = await alertBox.screenshot();
    expect(alertBoxScreenshot).toMatchSnapshot(
      "homepage-alert-box-success.png"
    );
  });
});
