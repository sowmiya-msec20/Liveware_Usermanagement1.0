import React, { useState } from 'react';
import axios from 'axios';
import "./CreateAdmin.css";
import SuperWelcome from './SuperWelcome';

function CreateUser({setActiveComponent , username}) {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    contactNo: '',
    address: '',
    // Add other user details here
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };


  const handleCreateUser = () => {
    // Add 'role' to the user data before sending the request
    userData.role = 'admin';
    setActiveComponent(<SuperWelcome setActiveComponent={setActiveComponent} username={username} />);

    // Send a POST request to the backend to set the user as an admin
    axios.post('https://your-backend-api-url/create-admin', userData)
      .then((response) => {
        // Handle success, e.g., show a success message
        console.log('User role set to admin');
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error('Failed to set user as admin:', error);
      });
  };

  return (
    <div>
      <h2>Create User</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Contact No:</label>
          <input
            type="text"
            name="contactNo"
            value={userData.contactNo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleCreateUser}>Set as User</button>
      </form>
    </div>
  );
}

export default CreateUser;
