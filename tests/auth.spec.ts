import {Browser, BrowserContext, chromium, Page, test} from "@playwright/test"
import { promises } from "dns";

test("auth test",async ()=>{
    const browser:Browser=await chromium.launch({headless:false,channel:"chrome"});
    const browserContext_1:BrowserContext=await browser.newContext();
    const page:Page=await browserContext_1.newPage();

    //Below approach is not good idea for authorization
    //await page.goto("http://userid:userpass@quiz-fe.hematitecorp.com/")

    const userid:string="muthupandi.s@changepond.com";
    const userPass:string="Muthu@4742";
    const authHeader:string="BAsic"+btoa(userid+":"+userPass);

    page.setExtraHTTPHeaders({Authorization:authHeader});

    await page.goto("http://quiz-fe.hematitecorp.com/");



    //browserContext_1.close();
    //browser.close();

    //await new Promise(()=>{});
})
