require('dotenv').config()

const mysql = require('mysql2')

const db = require('./db')

const inquirer = require('inquirer')

const question = () => {
inquirer.prompt([{
    message: 'What would you like to do?',
    type: 'list',
    choices: ['Add Department', 'Add Role', 'Add Employee', 'View Departments', 'View Roles',
'View Employees', 'Update Employee Role', 'Finish'],
    name: 'choice'
}])
.then(init=> {
    switch(init.choice) {
        case 'Add Department':
        addDepartment()
        break
        case 'Add Role':
        addRole()
        break
        case 'Add Employee':
        addEmployee()
        break
        case 'View Departments':
        viewDepartments()
        break
        case 'View Roles':
        viewRoles()
        break
        case 'View Employees':
        viewEmployees()
        break
        case 'Update Employee Role':
        updateRole()
        break
        case 'Finish':
        console.log('Have a nice day!')
        break
    }
})
}

const addDepartment = () => {
    // console.log('you tried to add a department!')
    inquirer.prompt([{
        message: 'what is the name of the department you wish to add?',
        type: 'input',
        name: 'name'
    }])
    .then(department => {
        db.query('INSERT INTO departments SET ?', department, err=> {
            if(err) {console.log(err)}
        })
        console.log('department added!')
        question()
    })
}
const addRole = () => {
    inquirer.prompt([
        {
        message: 'what is the title of this role?',
        type: 'input',
        name: 'title'
        },
        {
        message: 'what is the salary of this role?',
        type: 'input',
        name: 'salary'
        },
        {
        message: 'what is the id of the department of this role?',
        type: 'input',
        name: 'department_id'
        }

    ])
    .then(role => {
        console.log(role)
        db.query('INSERT INTO departments SET ?', roles, err=> {
            if(err) {console.log(err)}
        })
        console.log('role added!')
        question()
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
        message: 'what is this employees first name?',
        type: 'input',
        name: 'first_name'
        },
        {
        message: 'what is this employees last name?',
        type: 'input',
        name: 'last_name'
        },
        {
        message: 'what is this employees role id?',
        type: 'input',
        name: 'role_id'
        },
        {
        message: 'is this employee in management?',
        type: 'list',
        choices: ['yes', 'no'],
        name: 'managerBoolean'
        }

    ])
    .then(employee => {
        console.log(role)
        db.query('INSERT INTO departments SET ?', roles, err=> {
            if(err) {console.log(err)}
        })
        console.log('role added!')
        question()
    })
}

question()
