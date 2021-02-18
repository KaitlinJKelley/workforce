import { employee } from "./Employee.js"
import { getEmployees, useEmployees } from "./EmployeeDataProvider.js"

const contentTarget = document.querySelector(".employees")

export const employeeList = () => {

    getEmployees()
    .then(() => {
        let employees = useEmployees()

        contentTarget.innerHTML = employees.map(employeeObj => employee(employeeObj)).join("")
    })
}