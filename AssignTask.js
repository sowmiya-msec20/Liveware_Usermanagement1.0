import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AssignTask.css';

function AssignTask() {
  const [taskName, setTaskName] = useState('');
  const [assignedRole, setAssignedRole] = useState('');
  const [assignedUserId, setAssignedUserId] = useState(''); // State to store the user ID

  // Function to update assignedUserId when assignedRole or user ID input changes
  const updateAssignedUserId = () => {
    if (assignedRole) {
      axios.get(`https://your-backend-api-url/user-by-role/${assignedRole}`)
        .then((response) => {
          // Assuming the response contains the user's ID
          setAssignedUserId(response.data.userId);
        })
        .catch((error) => {
          console.error('Error fetching user by role:', error);
        });
    } else {
      setAssignedUserId(''); // Clear the assignedUserId if no role is selected
    }
  };

  useEffect(updateAssignedUserId, [assignedRole]); // Update when assignedRole changes

  const handleTaskAssignment = () => {
    // Check if an assigned user ID is available
    if (assignedUserId) {
      // Create an object to represent the task details with assignedUserId
      const taskDetails = {
        taskName,
        assignedUserId,
      };

      // Send a POST request to your backend API to store the task in the database
      axios.post('https://your-backend-api-url/tasks', taskDetails)
        .then((response) => {
          // Task assignment successful, you can handle the response as needed
          console.log('Task assigned:', response.data);
        })
        .catch((error) => {
          // Handle errors, e.g., display an error message
          console.error('Error assigning task:', error);
        });
    } else {
      // Handle the case where no user ID is found for the assigned role or no user ID input
      console.error('User ID is missing or not found for the assigned role.');
    }
  };

  return (
    <div className="assign-task">
      <h3>Assign Task</h3>
      <form>
        <div>
          <label>Task Name:</label>
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </div>
        <div>
          <label>Assign to Role:</label>
          <select value={assignedRole} onChange={(e) => setAssignedRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="user1">User</option>
            <option value="admin1">Admin</option>
            {/* Add more role options as needed */}
          </select>
        </div>
        <div>
          <label>User ID:</label>
          <input type="text" value={assignedUserId} onChange={(e) => setAssignedUserId(e.target.value)} />
        </div>
        <button onClick={handleTaskAssignment}>Assign Task</button>
      </form>
    </div>
  );
}

export default AssignTask;
