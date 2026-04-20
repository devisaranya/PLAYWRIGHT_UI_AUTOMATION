import { Locator, Page } from "@playwright/test";
import { Env } from "../config/envConfig";


export class LoginPage{

    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginBtn:Locator;

    constructor(page:Page){
        this.page=page;
        this.username=page.getByRole('textbox',{name: 'Username'})
        this.password=page.getByRole('textbox',{name: 'Password'})
        this.loginBtn=page.getByRole('button',{name:'Login'});
    }

    async navigateToLoginPage(){
        await this.page.goto(Env.BASE_URL);
    }

   async loginToThePage(){
    await this.username.fill("Admin");
    await this.password.fill("admin123");
    await this.loginBtn.click();
   }
}