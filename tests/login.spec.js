import {test} from '@playwright/test'
test("login",async({page})=>{
    //login code1
    //login code2
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();
    //branch1 changes new changes updates
})