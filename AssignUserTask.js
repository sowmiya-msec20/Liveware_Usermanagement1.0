import React, { useState } from 'react';
import axios from 'axios';
import './AssignTask.css';

function AssignUserTask() {
  const [taskName, setTaskName] = useState('');
  const [assignedUserId, setAssignedUserId] = useState('');

  const handleTaskAssignment = () => {
    if (assignedUserId) {
      const taskDetails = {
        taskName,
        assignedUserId,
      };

      axios.post('https://your-backend-api-url/tasks', taskDetails)
        .then((response) => {
          console.log('Task assigned:', response.data);
        })
        .catch((error) => {
          console.error('Error assigning task:', error);
        });
    } else {
      console.error('User ID is missing.');
    }
  };

  return (
    <div className="assign-task">
      <h3>Assign User Task</h3>
      <form>
        <div>
          <label>Task Name:</label>
          <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
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

export default AssignUserTask;
