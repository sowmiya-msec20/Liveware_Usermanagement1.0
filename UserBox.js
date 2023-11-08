import React from 'react';
import './UserAdminBox.css';
import UserCreate from './UserCreate';

function UserBox({ setActiveComponent , username}) {
  const handleUserCreateClick = () => {
    // Set the active component to 'UserCreate' component
    setActiveComponent(<UserCreate setActiveComponent={setActiveComponent} username={username}/>);
    console.log("Helloo");
  };

  return (
    <div className="user-admin-box">
      <button onClick={handleUserCreateClick}>Create User</button>
    </div>
  );
}

export default UserBox;
