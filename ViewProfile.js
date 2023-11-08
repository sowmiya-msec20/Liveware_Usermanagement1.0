import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios or your preferred HTTP client library
import './Profile.css';

function ViewProfile({ username }) {
  const [profileData, setProfileData] = useState({
    id: 'ums001',
    name: 'Meghana',
    email: 'abc@gmail.com',
    contactNo: '2342342342',
    address: 'Kodambakkam',
  });

  useEffect(() => {
    // Define the API endpoint for retrieving profile details
    const apiEndpoint = `https://your-backend-api-url/profile/${username}`;

    // Send an HTTP GET request to the API
    axios.get(apiEndpoint)
      .then((response) => {
        const data = response.data; // Assuming the response contains profile data
        setProfileData(data);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, [username]);

  return (
    <div className="profile-container">
      <h2>View Profile</h2>
      <p>Here is your profile information:</p>
      <ul>
        <li>ID: {profileData.id}</li>
        <li>Name: {profileData.name}</li>
        <li>Email: {profileData.email}</li>
        <li>Contact No: {profileData.contactNo}</li>
        <li>Address: {profileData.address}</li>
      </ul>
    </div>
  );
}

export default ViewProfile;
