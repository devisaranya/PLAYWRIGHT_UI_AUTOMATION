import { Locator, Page } from "@playwright/test";
import { EmployeeDetails } from "../resources/TestData/EmployeeDetails";


export class AddEmployee {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;

    constructor(page: Page){
        this.page=page;
        this.firstName=page.getByRole('textbox',{name: 'first Name'})
        this.lastName=page.getByRole('textbox',{name:'Last Name'});
       

    }

    async addEmployeeDetails(employeeDetails:EmployeeDetails){
        await this.firstName.fill(employeeDetails.firstName);
        await this.lastName.fill(employeeDetails.lastName)
    }

    


}