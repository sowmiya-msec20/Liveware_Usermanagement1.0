/*import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios or your preferred HTTP client library
import './ViewUserGrid.css'; // Add appropriate styling

function ViewUserGrid() {
  const [userData, setUserData] = useState([    {
    id: '1',
    name: 'Isha',
    email: 'isha@gmail.com',
    contactNo: '1234567890',
    address: 'Chennai',
    role:'admin',
  },
  {
    id: '2',
    name: 'John',
    email: 'john@gmail.com',
    contactNo: '9876543210',
    address: 'New York',
    role:'user',
  },
  {
    id: '3',
    name: 'Alice',
    email: 'alice@gmail.com',
    contactNo: '5678901234',
    address: 'London',
    role:'user',
  },
]);

  useEffect(() => {
    // Define the API endpoint for retrieving user data with roles
    const apiEndpoint = 'https://your-backend-api-url/users';

    // Send an HTTP GET request to the API
    axios.get(apiEndpoint)
      .then((response) => {
        const data = response.data; // Assuming the response contains user data
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="user-grid-container">

      <div className="user-grid">
        {userData.map((user) => (
          <div key={user.id} className="user-card ${user.role.toLowerCase()}">
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <p>Contact No: {user.contactNo}</p>
            <p>Address: {user.address}</p>
            {/* Add more user details as needed *#/}
          </div>
        ))}
      </div>
    </div>
  );
}*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewUserGrid.css';

function ViewUserGrid() {
  const [userData, setUserData] = useState([ {
    id: '1',
    name: 'Isha',
    email: 'isha@gmail.com',
    contactNo: '1234567890',
    address: 'Chennai',
    role:'admin',
  },
  {
    id: '2',
    name: 'John',
    email: 'john@gmail.com',
    contactNo: '9876543210',
    address: 'New York',
    role:'user',
  },
  {
    id: '3',
    name: 'Alice',
    email: 'alice@gmail.com',
    contactNo: '5678901234',
    address: 'London',
    role:'user',
  },]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterUsername, setFilterUsername] = useState('');
  const [filterRole, setFilterRole] = useState('');
  
    useEffect(() => {
      // Fetch user data from the backend API
      axios.get('https://your-backend-api-url/users')
        .then((response) => {
          const data = response.data;
          setUserData(data);
          setFilteredData(data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }, []);
  
    useEffect(() => {
      // Filter the data based on the username and role
      const filtered = userData.filter((user) => {
        return (
          user.name.toLowerCase().includes(filterUsername.toLowerCase()) &&
          (filterRole === '' || user.role === filterRole)
        );
      });
  
      setFilteredData(filtered);
    }, [filterUsername, filterRole, userData]);
  
    return (
      <div className="user-grid-container">
        <h2>User List</h2>
        <div className="filter-options">
          <label>
            Filter by Username:
            <input
              type="text"
              value={filterUsername}
              onChange={(e) => setFilterUsername(e.target.value)}
            />
          </label>
          <label>
            Filter by Role:
            <select value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
              <option value="">All Roles</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </label>
        </div>
        <div className="user-grid">
          {filteredData.map((user) => (
            <div key={user.id} className={`user-card ${user.role.toLowerCase()}`}>
              <h3>Name: {user.name}</h3>
              <p>Email: {user.email}</p>
              <p>User ID: {user.id}</p>
              <p>Role: {user.role}</p>
              <p>Contact No: {user.contactNo}</p>
              <p>Address: {user.address}</p>
              {/* Add more user details as needed */}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ViewUserGrid;
  