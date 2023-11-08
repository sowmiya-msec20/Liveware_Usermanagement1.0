import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminsCount() {
    const [adminsCount, setAdminsCount] = useState(4);
  
    useEffect(() => {
      // Fetch the number of admins from your backend
      axios.get('https://your-backend-api-url/admins/count')
        .then((response) => {
          setAdminsCount(response.data.count);
        })
        .catch((error) => {
          console.error('Error fetching admins count:', error);
        });
    }, []);
  
    return (
      <div>
        <h2>Admins Count</h2>
        <p>Number of Admins: {adminsCount}</p>
      </div>
    );
  }

export default AdminsCount;