import {expect, test} from "@playwright/test";
 
test("file handling test",async({page})=>{
    await page.goto("http://127.0.0.1:5500/assertion.html");
    await page.pause();
 
    //Alert
    page.once("dialog",async(dialog)=>{
        console.log(dialog.message);
        await dialog.accept();
    });
    await page.click('button[onclick="jsAlert()"]');
 
    //confirm
    page.once('dialog',async(dialog)=>{
        expect(dialog.message).toContain("confirm");
        await dialog.accept();
    });
    await page.click('button[onclick="jsConfirm()"]');
 
    // Prompt
    page.once('dialog',async(dialog)=>{
        await dialog.accept("Hello Friend");
    });
    await page.click('button[onclick="jsPrompt()"]');
   
 
})
 