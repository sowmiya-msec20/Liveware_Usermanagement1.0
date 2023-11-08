import React from 'react';
import './UserAdminBox.css';
import CreateAdmin from "./CreateAdmin";
import CreateUser from './CreateUser';

function UserAdminBox({ setActiveComponent , username}) {
  const handleCreateUserClick = () => {
    // Set the active component to 'CreateUser' component
    setActiveComponent(<CreateUser setActiveComponent={setActiveComponent} username={username}/>);
    console.log("Helloo");
  };

  const handleCreateAdminClick = () => {
    // Set the active component to 'CreateAdmin' component
    setActiveComponent(<CreateAdmin setActiveComponent={setActiveComponent} username={username}/>);
    console.log("hello");
  };

  return (
    <div className="user-admin-box">
      <button onClick={handleCreateUserClick}>Create User</button>
      <button onClick={handleCreateAdminClick}>Create Admin</button>
    </div>
  );
}

export default UserAdminBox;
