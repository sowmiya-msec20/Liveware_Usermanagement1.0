import React from 'react';
import AdminsCount from './AdminsCount';
import UsersCount from './UsersCount';
import UserAdminBox from './UserAdminBox';
import AssignTask from './AssignTask';


function SuperWelcome({activeComponent , setActiveComponent , username }) {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>This is your user dashboard. Choose an option from the side navigation to get started.</p>
      <AdminsCount/>
      <UsersCount/>
      <UserAdminBox setActiveComponent={setActiveComponent} username={username} />
      {/* Add any other welcoming content
       */}
       <AssignTask />
    </div>
  );
}

export default SuperWelcome ;
