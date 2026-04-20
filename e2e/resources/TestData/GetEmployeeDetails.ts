import { EmployeeDetails } from "./EmployeeDetails";
import {faker} from '@faker-js/faker'


export function getEmployeeDetails():EmployeeDetails{
    return{
         firstName:faker.person.firstName(),
         lastName:faker.person.lastName(),
         employeeID:faker.number.int(10000).toString()
    }
}