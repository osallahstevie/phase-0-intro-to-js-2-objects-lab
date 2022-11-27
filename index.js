// Write your solution in this file!
let employee = {
    name:"", streetAddress:""
}
function UpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
function UpdateEmployeeWithKeyAndValue(employee, key, value){
    let temporaryEmployee = {...employee}
    temporaryEmployee[key] = value;
    return temporaryEmployee
}

function deleteFromEmployeeByKey(employee, key){
    let temporaryEmployee = {...employee}
    delete temporaryEmployee[key]
    return temporaryEmployee


}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}


