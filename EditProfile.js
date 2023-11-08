import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditProfile.css';

function EditProfile({ userid }) {
  const [profileData, setProfileData] = useState({
    id:'ums001', // Display the userid
    name: '',
    email: '',
    contactNo: '',
    address: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  

  useEffect(() => {
    // Fetch the current user's profile data
    const apiEndpoint = `https://your-backend-api-url/profile/${userid}`;

    axios.get(apiEndpoint)
      .then((response) => {
        const data = response.data;
        setProfileData(data);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, [userid]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSave = () => {
    // Send a PUT request to update the user's profile data
    const apiEndpoint = `https://your-backend-api-url/profile/${userid}`;

    axios.put(apiEndpoint, profileData)
      .then(() => {
        setIsEditing(false);
        // Optionally, you can show a success message or perform other actions after saving.
      })
      .catch((error) => {
        console.error('Error updating profile data:', error);
        // Handle errors or show an error message to the user.
      });
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      {isEditing ? (
        <div>
          <div>
            <label>User ID:</label>
            <input
              type="text"
              name="id"
              value={profileData.id}
              readOnly // Prevent editing
            />
          </div>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Contact No:</label>
            <input
              type="tel"
              name="contactNo"
              value={profileData.contactNo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Address:</label>
            <textarea
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>User ID: {profileData.id}</p>
          <p>Name: {profileData.name}</p>
          <p>Email: {profileData.email}</p>
          <p>Contact No: {profileData.contactNo}</p>
          <p>Address: {profileData.address}</p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
  );
}

export default EditProfile;
