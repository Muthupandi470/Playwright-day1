import { Browser, chromium, Locator, Page, test } from "playwright/test";
import { emit } from "process";
import { LocalsContainer } from "typescript";

test("locator test",async()=>{
    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page=await browser.newPage();
    await page.goto("http://127.0.0.1:5500/form.html");

    //1.use of id selector
    const fname:Locator=await page.locator('#txt1');
    await fname.fill("Muthupandi S");

    const passsword:Locator=await page.locator('#txt2');
    await passsword.fill("Aakash@470");
    //const email:Locator=await page.locator('#txtEmail');
    

    //2.use of class selector
    const logo:Locator=await page.locator(".logo");
    const logoExist=await logo.isEnabled();
    console.log(logoExist);
    const contact:Locator=await page.locator(".txtContact");
    await contact.fill("88888888")

    //3.use of text selector
    const heading:Locator=await page.locator("text=Registration form");
    const headingExit = await heading.isEnabled();
    console.log(headingExit)

    //4.use of css property and tag name
    const address:Locator=await page.locator("css=input#txtaddress");
    await address.fill("SIPCOT IT PARK,Chennai");

    const pincode:Locator=await page.locator("css=input#txtpincode");
    await pincode.fill("123456");

    //5.use of xpath selector
    const email:Locator=await page.locator('xpath=//input[@name="myemail" and @type="email"]'); 
    await email.fill("aakash470@gmail.com");

    const checkbox:Locator=await page.locator('xpath=//input[@name="term" and @type="checkbox"]'); 
    const checkboxwork = await checkbox.isEnabled();
    console.log(checkbox);

    //await fname.fill("Muthupandi S");
    //await passsword.fill("Aakash@470");
    //await email.fill("selvarajmuthupandi470@gmail.com");
    
    //await browser.close();
    //await new promise(()=>{});
});
