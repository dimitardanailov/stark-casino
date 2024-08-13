import User from "@/types/User";

import Elements from "./types/Elements";

async function fillFormData(elements: Elements, user: User) {
  const { firstNameTextField, lastNameTextField, emailTextField } = elements;

  await firstNameTextField.locator("input").fill(user.firstName);
  await lastNameTextField.locator("input").fill(user.lastName);
  await emailTextField.locator("input").fill(user.email);
}

export default fillFormData;
