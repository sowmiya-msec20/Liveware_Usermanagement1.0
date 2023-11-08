-- Create a table to store OTP information (optional)
CREATE TABLE EmployeeOTP (
    EmployeeID INT PRIMARY KEY,
    OTP VARCHAR(6),  -- Adjust the length as needed
    ExpiryTime TIMESTAMP
);

-- Create a stored procedure to generate and save OTP for an employee
DELIMITER //
CREATE PROCEDURE GenerateOTP(EmployeeID INT)
BEGIN
    DECLARE newOTP VARCHAR(6);  -- Adjust the length as needed

    -- Generate a random OTP
    SET newOTP = LPAD(FLOOR(RAND() * 1000000), 6, '0');

    -- Set the expiry time (e.g., 5 minutes from the current time)
    SET @now = NOW();
    SET @expiryTime = DATE_ADD(@now, INTERVAL 5 MINUTE);

    -- Insert or update the OTP in the EmployeeOTP table
    INSERT INTO EmployeeOTP (EmployeeID, OTP, ExpiryTime)
    VALUES (EmployeeID, newOTP, @expiryTime)
    ON DUPLICATE KEY UPDATE OTP = newOTP, ExpiryTime = @expiryTime;
END;
DELIMITER ;

-- Example of generating and retrieving OTP for an employee (EmployeeID = 1)
CALL GenerateOTP(1);

-- Retrieve the OTP for a specific employee (EmployeeID = 1)
SELECT OTP FROM EmployeeOTP WHERE EmployeeID = 1;
