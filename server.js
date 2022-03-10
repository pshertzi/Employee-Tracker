const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table')

//connection to sql database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'dman1972',
    database: 'employee_db'
});

//Create connection
connection.connect((err) => {
    if (err) throw err;

    // Start Main menu 

    console.log("Welcome to Employee tracker");
    mainMenu();
});

//Main Menu prompts 
function mainMenu() {
    inquirer
    .prompt({
        name: 'action',
        type: 'list',
        message: 'MAIN MENU',
        choices: [
            'View All employees',
            'View all Departments',
            'View all roles',
            'Add employee',
            'Add department',
            'Add role',
            'Update employee role',
            'Delete employee',
            'Exit'
                    ]
    }).then((answer) => {
        switch (answer.action) {
            case 'View All employees':
                viewEmployees();
                break;
            case 'View all Departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewroles();
                break;
            case 'Add department':
                addDepartment();
                break;
            case 'Add role':
                addRole();
                break;
            case 'Update employee role':
                updateRole();
                break;
            case 'Delete employee':
                deleteEmployee();
                break;
            case 'Exit':
                exitapp();
                break;
            default:
                break;
            
        }
    })
};

