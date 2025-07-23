import {test,expect, Locator, Browser, Page, firefox} from '@playwright/test'
import { title } from 'process';
 
test("login test",async()=>{
    const browser:Browser = await firefox.launch({headless : false});
    const page: Page = await browser.newPage();
   
    await page.goto("https://www.saucedemo.com/v1/");
 
    const username:Locator = page.locator("#username");
    const passsword:Locator = page.locator("#password");
    const button:Locator = page.locator("[type='submit']");
 
    await username.fill("standard_user");
    await passsword.fill("secret_sauce");
    await button.click();
 
    expect(title).toEqual("Sauce");
    // browser.close();
   
});
//Wrong rewrite
