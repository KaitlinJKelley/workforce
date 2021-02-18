export const employee = (employeeObj) => {
    return `
        <h2>${employeeObj.firstName} ${employeeObj.lastName}</h2>
        <p>Age: ${employeeObj.age}</p>
        <p>Computer Model: ${employeeObj.computer.model}</p>
        <p>Computer Year: ${employeeObj.computer.year}</p>
    `
}