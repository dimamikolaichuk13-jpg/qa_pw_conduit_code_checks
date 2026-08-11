import { test, expect } from '@playwright/test';
import { SignInPage } from '../../src/pages/SignInPage';

test.describe('Sign in negative tests', () => {
  let signInPage;

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    await signInPage.open();
  });

  test('Assert error message for empty password', async () => {
    await signInPage.fillEmailField('test@gmail.com');
    await signInPage.clickSignInButton();
    await expect(signInPage.errorMessage).toContainText(
      "password:can't be blank",
    );
  });

  test('Assert error message for empty email', async () => {
    await signInPage.fillPasswordField('newpass123!');
    await signInPage.clickSignInButton();
    await expect(signInPage.errorMessage).toContainText("email:can't be blank");
  });

  test('Assert error message for wrong password', async () => {
    await signInPage.fillEmailField('test@gmail.com');
    await signInPage.fillPasswordField('1');
    await signInPage.clickSignInButton();

    await expect(signInPage.errorMessage).toContainText(
      `email or password:is invalid`,
    );
  });
});
