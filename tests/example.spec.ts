import { test, expect } from '@playwright/test';

test("Check Addition of two number",async({page})=>{
  await page.goto('file:///C:/Users/muthupandi.s/Desktop/Day%201%20JS/Cal.html');
  await page.fill('#txt1','5');
  await page.fill('#txt2','3');
  await page.click('#btnadd');

  const result = await page.textContent('#res');
  await expect(result?.trim()).toBe('8');
  
});

test("Check Subraction of two number",async({page})=>{
  await page.goto('file:///C:/Users/muthupandi.s/Desktop/Day%201%20JS/Cal.html');
  await page.fill('#txt1','5');
  await page.fill('#txt2','3');
  await page.click('#btnsub');

  const result = await page.textContent('#res');
  await expect(result?.trim()).toBe('2');
  
});

test("Check Multiplication of two number",async({page})=>{
  await page.goto('file:///C:/Users/muthupandi.s/Desktop/Day%201%20JS/Cal.html');
  await page.fill('#txt1','5');
  await page.fill('#txt2','3');
  await page.click('#btnmul');

  const result = await page.textContent('#res');
  await expect(result?.trim()).toBe('15');
  
});

test("Check Division of two number",async({page})=>{
  await page.goto('file:///C:/Users/muthupandi.s/Desktop/Day%201%20JS/Cal.html');
  await page.fill('#txt1','21');
  await page.fill('#txt2','3');
  await page.click('#btndiv');

  const result = await page.textContent('#res');
  await expect(result?.trim()).toBe('7');
  
});
/*test("check title",async({page})=>{
  await page.goto("https://leetcode.com/");

await expect(page).toHaveTitle("LeetCode - The World's Leading Online Programming Learning Platform");
});*/

/*test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});*/
