import { Page, Locator } from "@playwright/test";

import { testingIdentifiers } from "@/app/(home)/db";

type Elements = {
  firstNameTextField: Locator;
  lastNameTextField: Locator;
  emailTextField: Locator;
  submitButton: Locator;
};

async function formElements(page: Page): Promise<Elements> {
  const firstNameTextField = await page.getByTestId(
    testingIdentifiers.firstNameTextField
  );

  const lastNameTextField = await page.getByTestId(
    testingIdentifiers.lastNameTextField
  );

  const emailTextField = await page.getByTestId(
    testingIdentifiers.emailTextField
  );

  const submitButton = await page.getByTestId(testingIdentifiers.submitButton);

  return {
    firstNameTextField,
    lastNameTextField,
    emailTextField,
    submitButton,
  };
}

export default formElements;
