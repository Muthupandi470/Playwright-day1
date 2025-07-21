import{expect, test} from '@playwright/test';
test("assertion test",async({page})=>{
    await page.goto('http://hematitecorp.com/');
    await page.pause();
    //Assertion in playwright
    await expect(page.locator("text=OUR COURSES")).toHaveCount(1);
    
    if(await page.$("text+OUR COURSES")){
        await page.locator("text=OUR COURSES").click();
    }

    //element  visible or hidden.

    await expect(page.locator("text=OUR COURSES")).toBeVisible();
    await expect.soft(page.locator("text=OUR COURSES")).toBeHidden();

    //element Enable or Disable

    await expect(page.locator("text=OUR COURSES")).toBeEnabled();
    await expect.soft(page.locator("text=OUR COURSES")).toBeDisabled();

    //check text available or not
    
    await expect(page.locator("text=OUR COURSES")).toHaveText("OUR COURSES");
    await expect.soft(page.locator("text=OUR COURSES")).not.toHaveText("OUR COURSES");
})