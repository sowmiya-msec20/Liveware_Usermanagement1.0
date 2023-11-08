-- Active: 1699346793492@@127.0.0.1@3306@liveware
CREATE TABLE UserProfiles(  
    UserID INT NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    UserLoginID VARCHAR(50) UNIQUE NOT NULL,
    UserPassword VARCHAR(255) NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    UserType VARCHAR(50) NOT NULL,
    UserStatus BOOLEAN NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_no INT UNIQUE NOT NULL
) COMMENT '';
ALTER TABLE UserProfiles
MODIFY phone_no VARCHAR(255);
select *  from UserProfiles ;
ALTER TABLE UserProfiles AUTO_INCREMENT = 10001;
DELETE FROM UserProfiles;

DROP TABLE userprofiles;
CREATE TABLE UserRoles (
    RoleID INT NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key'  ,
    RoleName VARCHAR(50) UNIQUE NOT NULL
);
DROP TABLE UserRoles;
CREATE TABLE UserUserRoleMapping (
    MappingID INT NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    UserID INT,
    RoleID INT,
    FOREIGN KEY (UserID) REFERENCES UserProfiles(UserID),
    FOREIGN KEY (RoleID) REFERENCES UserRoles(RoleID)
);

DROP TABLE UserUserRoleMapping;
CREATE TABLE Tasks (
    TaskID INT AUTO_INCREMENT PRIMARY KEY,
    TaskName VARCHAR(255) NOT NULL,
    TaskDescription TEXT,
    TaskAssigneeID INT,
    TaskCreatorID INT,
    TaskStatus VARCHAR(50) NOT NULL,
    TaskDueDate DATE NOT NULL,
    FOREIGN KEY (TaskAssigneeID) REFERENCES UserProfiles(UserID),
    FOREIGN KEY (TaskCreatorID) REFERENCES UserProfiles(UserID)
);
-- Inserting data into UserProfiles
-- Insert data into UserProfiles table
INSERT INTO UserProfiles (create_time, UserLoginID, UserPassword, FirstName, LastName, UserType, UserStatus, email, phone_no)
VALUES
    ('2023-11-01 08:00:00', 'user1', 'password1', 'John', 'Doe', 'SuperAdmin', 1, 'john.doe@example.com', 1234567890),
    ('2023-11-02 09:15:00', 'user2', 'password2', 'Alice', 'Johnson', 'Admin', 1, 'alice.j@example.com', 9876543210),
    ('2023-11-03 10:30:00', 'user3', 'password3', 'Bob', 'Smith', 'Employee', 1, 'bob.smith@example.com', 5551234567),
    ('2023-11-04 11:45:00', 'user4', 'password4', 'Eva', 'Williams', 'Employee', 1, 'eva.w@example.com', 7779991234),
    ('2023-11-05 12:00:00', 'user5', 'password5', 'Sophia', 'Brown', 'Employee', 1, 'sophia.b@example.com', 1239876543);
SELECT * FROM userprofiles;
delete from userroles;
DROP TABLE userroles;
SELECT * FROM userroles;
-- Insert data into UserRoles table
INSERT INTO UserRoles (RoleID, RoleName)
VALUES
    (1, 'Admin'),
    (2, 'Employee'),
    (3, 'Super Admin'),
    (4,'Software Developer'),
    (5,'HR');

-- Insert data into UserUserRoleMapping table
INSERT INTO UserUserRoleMapping (UserID, RoleID)
VALUES
    (10001, 3), -- John Doe is an SuperAdmin
    (10002, 1), -- Alice Johnson is an Admin
    (10003, 2), -- Bob Smith is an Employee
    (10004, 2), -- Eva Williams is an Employee
    (10005, 2); -- Sophia Brown is an Employee
DELETE FROM useruserrolemapping;
SELECT * FROM useruserrolemapping;
-- Insert data into Tasks table
INSERT INTO Tasks (TaskName, TaskDescription, TaskAssigneeID, TaskCreatorID, TaskStatus, TaskDueDate)
VALUES
    ('Task 1', 'Complete task 1 by end of week', 10003, 10001, 'In Progress', '2023-11-15'),
    ('Task 2', 'Submit report for Q4', 10003, 10002, 'Not Started', '2023-11-30'),
    ('Task 3', 'Review project proposal', 10004, 10002, 'Completed', '2023-11-10'),
    ('Task 4', 'Prepare presentation for meeting', 10005, 10002, 'In Progress', '2023-11-20'),
    ('Task 5', 'Update user documentation', 10004, 10001, 'Not Started', '2023-11-25');
DELETE FROM tasks;

DROP TABLE tasks;

SELECT * FROM tasks;
