const employee = {
    name: 'Fern',
    streetAddress: '123 Fern Way'
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newEmployee = {...employee, "name": 'Sam' , "streetAddress": '11 Broadway'}
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.streetAddress = '12 Broadway'
    return employee
}

function deleteFromEmployeeByKey(obj, key, value){
    const newEmployee2 = {...employee[key]}
    delete newEmployee2[key]
    return newEmployee2
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete employee[key]
    return employee
}