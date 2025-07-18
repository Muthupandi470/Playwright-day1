import {Browser, BrowserContext, chromium, Locator, Page, test,expect} from "@playwright/test";

test("testing browser context",async()=>{
    const browser:Browser=await chromium.launch({headless:false,channel:"chrome"});

//browser context_1
const browserContext_1:BrowserContext=await browser.newContext();
const page1:Page=await browser.newPage();

//browser context_2
const browserContext_2:BrowserContext=await browser.newContext();
const page2:Page=await browser.newPage();

await page1.goto("http://quiz-fe.hematitecorp.com/");
const email1:Locator = await page1.locator("#email");
const passsword1:Locator = await page1.locator("#password");
const button1:Locator = await page1.locator("[type='submit']");

await email1.fill("muthupandi.s@changepond.com");
await passsword1.fill("Muthu@4742");
await button1.click();

const title1 = await page1.title();
console.log("Home Page title",title1);
await page1.screenshot({path :'VoucherCode1.png'});
 
expect(title1).toEqual("Quiz App");

await page2.goto("http://quiz-fe.hematitecorp.com/");
const email2:Locator = await page2.locator("#email");
const passsword2:Locator = await page2.locator("#password");
const button2:Locator = await page2.locator("[type='submit']");

await email2.fill("santhosh.v@changepond.com");
await passsword2.fill("Santhosh@452");
await button2.click();

const title2 = await page2.title();
console.log("Home Page title",title2);
await page2.screenshot({path :'VoucherCode2.png'});
 
expect(title2).toEqual("Quiz App");


})