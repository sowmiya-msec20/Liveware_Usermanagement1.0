import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewTask.css';

function ViewTask() {
  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "task": "Buy groceries",
      "completed": false
    },
    {
      "id": 2,
      "task": "Complete project report",
      "completed": false
    },
    {
      "id": 3,
      "task": "Schedule a meeting",
      "completed": false
    }
  ]
  );

  useEffect(() => {
    // Fetch tasks from the backend API
    axios.get('https://your-backend-api-url/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const handleTaskChange = (taskId, isCompleted) => {
    // Send a DELETE request to remove the task from the backend when it's marked as completed
    if (isCompleted) {
      axios.delete(`https://your-backend-api-url/tasks/${taskId}`)
        .then(() => {
          // Remove the task from the local state
          const updatedTasks = tasks.filter((task) => task.id !== taskId);
          setTasks(updatedTasks);
        })
        .catch((error) => {
          console.error('Error deleting a task:', error);
        });
    }
  };

  

  return (
    <div>
      <h2>Task Management</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleTaskChange(task.id, task.completed)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewTask;
