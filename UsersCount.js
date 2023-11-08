import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersCount() {
  const [usersCount, setUsersCount] = useState(40);

  useEffect(() => {
    // Fetch the number of users from your backend
    axios.get('https://your-backend-api-url/users/count')
      .then((response) => {
        setUsersCount(response.data.count);
      })
      .catch((error) => {
        console.error('Error fetching users count:', error);
      });
  }, []);

  return (
    <div>
      <h2>Users Count</h2>
      <p>Number of Users: {usersCount}</p>
    </div>
  );
}

export default UsersCount ;