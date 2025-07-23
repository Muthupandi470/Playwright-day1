import{test} from '@playwright/test';
import { Loginpage } from './Loginpage';
import { users } from './credentials';

for(let user of users){
    test(`${user.testCaseMsg}`,async({page})=>{
        const LoginpageObj=new Loginpage(page);
        await LoginpageObj.goto();
        await LoginpageObj.login(user.username,user.password);
    });
}
