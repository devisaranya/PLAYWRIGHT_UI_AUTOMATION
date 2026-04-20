import {test} from '../fixtures/customFixture'

import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { AddEmployee } from "../pages/addEmployee";
import { getEmployeeDetails } from "../resources/TestData/GetEmployeeDetails";



test("Add new employee", async({page,loginPage,homePage,addEmployee})=>{

    await loginPage.navigateToLoginPage();
    await loginPage.loginToThePage();

    await homePage.getLeftNavMenuItems.selectleftComponenent("PIM");
    await homePage.getTopNavMenuItems.selecttopComponenent("Add Employee");

    await addEmployee.addEmployeeDetails(getEmployeeDetails());

})