import {test} from '@playwright/test';

test("login test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/v1/")
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
});

test("Home page test", async ({ page }) => {

  await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('link'),{name:'Sauce labs Bolt T-shirt'}.click();
  await page.getByRole('button', { name: 'ADD TO CART' }).click();
});

test("logout test", async ({ page }) => {
  
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});