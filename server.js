const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table')

// creates connection to sql database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employees_db'
})

// connects to sql server and sql database
connection.connect(function(err){
    if (err) throw err;
    mainMenu();
})

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
                viewRoles();
                break;
            case 'Add employee':
                addEmployee();
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

viewEmployees = () => {
    // select from the db
    let query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.log(res.length + ' employees found!');
      console.table(res);
      mainMenu();
    });
    // show the result to the user (console.table)
}

viewDepartments = () => {
    // select from the db
    let query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.log(res.length + ' departments found!');
      console.table(res);
      mainMenu();
    });
    // show the result to the user (console.table)
}

viewRoles = () => {
    // select from the db
    let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.log(res.length + ' roles found!');
      console.table(res);
      mainMenu();
    });
    // show the result to the user (console.table)
}

 addEmployee = () => {
    inquirer
    .prompt([
      {
        type: "input",
        message: "What's the first name of the employee?",
        name: "firstName"
      },
      {
        type: "input",
        message: "What's the last name of the employee?",
        name: "lastName"
      },
      {
        type: "input",
        message: "What is the employee's role id number?",
        name: "roleID"
      },
      {
        type: "input",
        message: "What is the manager id number?",
        name: "managerID"
      }
    ])
    .then(function(answer) {

      
        connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
         VALUES (?, ?, ?, ?)`,
         [answer.firstName, answer.lastName, answer.roleID, answer.managerID],
         function(err, res) {
          if (err) throw err;
          console.table('employee added', answer);
          mainMenu();
        });
      });
  }
  addDepartment = ()=> {
    inquirer.prompt({
        type: "input",
        message: "What is the name of the department?",
        name: "departmentName"
        }).then(function(answer){

        connection.query(
        `INSERT INTO department (name)
         VALUES (?,)`,
         [answer.departmentName] , 
         function(err, res) {
        if (err) throw err;
         console.table('department added', answer)
        mainMenu()
    });
    })
}

  
addRole = ()=> {
    inquirer.prompt([
        {
        type: "input",
        message: "What is the name of the role?",
        name: "roleName"
        },
        {
        type: "input",
        message: "What is the salary of the role?",
        name: "salary"
        },
        {
        type: "input",
        message: "What is the department ID number?",
        name: "departmentId"
        },

    ]).then(function(answer){

        connection.query(
        `INSERT INTO role (title, salary, department_id)
         VALUES (?,?,?)`,
         [answer.roleName, answer.salary, answer.departmentId] , 
         function(err, res) {
        if (err) throw err;
         console.table('role added', answer)
        mainMenu()
    });
    })
}

updateRole = ()=> {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Which employee would you like to update?",
          name: "employeeUpdate"
        },
  
        {
          type: "input",
          message: "What do you want to update to?",
          name: "updateRole"
        }
      ])
      .then(function(answer) {
        connection.query(
            'UPDATE employee SET role_id=? WHERE first_name= ?',
            [answer.updateRole, answer.employeeUpdate],
            function(err, res) {
          if (err) throw err;
          console.table(answer.employeeUpdate, "updated", answer);
          mainMenu();
        });
      });
  }

exitapp = () => {
    connection.end();
  }