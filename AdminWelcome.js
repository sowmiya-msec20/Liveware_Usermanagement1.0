import React from 'react';
import UsersCount from './UsersCount';
import AssignUserTask from './AssignUserTask';
import UserBox from './UserBox';


function AdminWelcome({ activeComponent , setActiveComponent , username }) {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>This is your user dashboard. Choose an option from the side navigation to get started.</p>
      <UsersCount/>
      <UserBox setActiveComponent={setActiveComponent} username={username} />
         {/* Add any other welcoming content
       */}
       <AssignUserTask />
    </div>
  );
}

export default AdminWelcome ;
