Insert INTO department (name)
VALUES
('Front office'),
('Housekeeping'),
('Maintenance'),
('Human Resources'),
('Security'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Front desk agent', 45000, 1),
('Housekeeper', 35000, 2),
('Engineer', 50000, 3),
('Human Resources agent', 55000, 4),
('Security officer', 40000, 5),
('Sales Rep', 90000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Donald', 'Duck', 1, 1001),
('Elvis', 'Parsley', 2, 174),
('Bob', 'Builder', 3, 1),
('Michael', 'Jack', 4, 69),
('Towelie', 'Towel', 5, 420),
('Son', 'Goku', 6, 1);
