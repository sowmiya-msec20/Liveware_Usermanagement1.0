// src/components/UserDashboard.js
import './Dashboard.css'
import React, { useState } from 'react';
import SideNav from './SideNav';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';
import ViewTask from './ViewTask';
import ChangePassword from './changePassword';
import Welcome from './Welcome';
import Header from './Header';
import { useLocation } from 'react-router-dom';

function UserDashboard() {
  //const userName = 'John Doe';
  const location = useLocation();
  const username = location.state;
 // Provide a default value
  const [activeComponent, setActiveComponent] = useState(<Welcome username={username}/>);

  return (
    <div>
      <Header />
      <div>
      <SideNav setActiveComponent={setActiveComponent}  username={username} />
      <div className="content">
        {activeComponent}
      </div>
      </div>
      </div>
  );
}

export default UserDashboard;
