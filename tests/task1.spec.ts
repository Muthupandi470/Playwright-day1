/*import {test} from './task1';
import{expect} from '@playwright/test';

test("Souce Test",async({soucedemo})=>{
    await expect(soucedemo.locator('.product_label')).toHaveText("Products");
   
})*/
import { expect } from "playwright/test";
import {test} from "./task1";
 
test("display product after login",async({loggedInPage,page})=>{
    await expect(loggedInPage.locator('.product_label')).toHaveText("products");
})