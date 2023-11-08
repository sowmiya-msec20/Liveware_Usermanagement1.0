import React, { useState } from 'react';
import axios from 'axios';
import './password.css';

function ChangePassword({ username }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();

    // Add validation to ensure new password and confirm new password match
    if (newPassword !== confirmNewPassword) {
      setError('New password and confirm password do not match');
      return;
    }

    // Send a POST request to update the user's password
    axios.post(`https://your-backend-api-url/change-password/${username}`, {
      newPassword,
    })
      .then((response) => {
        // Handle success, e.g., show a success message
        console.log('Password changed successfully');
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        setError('Failed to change the password. Please check your current password.');
      });
  };

  return (
    <div className="change-password-container">
      <h2>Change Password </h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleChangePassword}>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm New Password:</label>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}

export default ChangePassword;
