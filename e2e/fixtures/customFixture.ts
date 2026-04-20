
import {test as base} from '@playwright/test'
import { LoginPage } from '@pages/loginPage'
import { HomePage } from '@pages/homePage'
import { AddEmployee } from '@pages/addEmployee'


type pages = {
    loginPage: LoginPage
    homePage: HomePage
    addEmployee: AddEmployee
}

export const test=base.extend<pages>({

    loginPage:async({page},use)=>{
        await use(new LoginPage(page))
    },

    homePage:async({page},use)=>{
        await use(new HomePage(page))
    },

    addEmployee:async({page},use)=>{
        await use(new AddEmployee(page))
    }

})