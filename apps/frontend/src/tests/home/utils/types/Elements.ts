import { Locator } from "@playwright/test";

type Elements = {
  firstNameTextField: Locator;
  lastNameTextField: Locator;
  emailTextField: Locator;
  submitButton: Locator;
};

export default Elements;
