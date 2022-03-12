# Employee-Tracker

## Description

A SQL database that tracks employees, their roles, and their respective department.

## Code Utilized

This application was made using JavaScript, NPM, and MySQL.

## User Story

-AS A business owner<br>
-I WANT to be able to view and manage the departments, roles, and employees in my company<br>
-SO THAT I can organize and plan my business<br>

## Acceptance Criteria

-GIVEN a command-line application that accepts user input<br>
-WHEN I start the application<br>
-THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and<br>
update an employee role<br>
-WHEN I choose to view all departments<br>
-THEN I am presented with a formatted table showing department names and department ids<br>
-WHEN I choose to view all roles<br>
-THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role<br>
-WHEN I choose to view all employees<br>
-THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and<br>
 managers that the employees report to<br>
-WHEN I choose to add a department<br>
-THEN I am prompted to enter the name of the department and that department is added to the database<br>
-WHEN I choose to add a role<br>
-THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database<br>
-WHEN I choose to add an employee<br>
-THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database<br>
-WHEN I choose to update an employee role<br>
-THEN I am prompted to select an employee to update and their new role and this information is updated in the database<br>

## Tech used 
-inquirer<br>
-mySQL<br>
-console.table<br>
-Javascript<br>
-Node.js<br>

## How to use 
-Clone from GitHub<br>
-Open project directory, then npm install to install all required dependencies<br>
-install npm init -y to create a new .json file<br>
-npm i<br>
-npm i inquirer<br>
-npm i mysql<br>
-npm i console.table<br>
-make sure to run .sql file in mySQL files (source db/schema.sql source db/seeds.sql)<br>
-run npm start<br>
-make sure server.js is connected to SQL before continuing<br>
-run through prompts as required<br>
