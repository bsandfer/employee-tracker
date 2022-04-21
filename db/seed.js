USE employeeTracker_db;

INSERT INTO departments (name)
VALUES
    ('Engineering'),
    ('Sales'),
    ('Service');
    
INSERT INTO roles (title, salary, department_id)
VALUES
    ('Cheif Engineer', 100000, 1),
    ('Tech', 60000, 1),
    ('Sales Rep', 50000, 2),
    ('Operator', 40000, 2),
    ('Service Rep', 40000, 3),
    ('Driver', 40000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
('Kat', 'Clover', 1, NULL),
('Brendan', 'Brown', 6, 1),
('Maddie', 'Mad-dog', 4, NULL),
('John', 'Doe', 2, 3),
('Kevin', 'Smith', 3, 3),
('Chris', 'Thompson', 5, 3);
