import{test,expect} from '@playwright/test';

test("custome assertion",async ({page})=>{
    await page.goto("http://127.0.0.1:5500/assertion.html");
    await page.pause();

    //EX-1 It will Check number is greater than 10

    const textValue=await page.locator("#d1").textContent();
    const Value=parseInt(textValue||'0');
    await expect (Value>10).toBeTruthy();

    //EX-2 Check character is greater tha 5 or Not

    const msg:any=await page.locator("#d2").textContent();
    //const Value1=parseInt(textValue||'1');
    await expect (msg.length>5).toBeGreaterThan(5)

});
const assertMinCharLength = async (locator: any,minLength:number)=>{
    const text =await locator.textContent();
    await expect((text || '').length).toBeGreaterThan(minLength);
}