// src/components/SuperAdminDashboard.js

import React, { useState }  from 'react';
import SideNavSuper from './SideNavSuper';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';
import ViewTask from './ViewTask';
import ChangePassword from './changePassword';
import SuperWelcome from './SuperWelcome';
import ViewUserGrid from './ViewUserGrid';
import Header from './Header';
import { useLocation } from 'react-router-dom';

function SuperAdminDashboard() {
  const location = useLocation();
  const username = location.state;
 // Provide a default value
  const [activeComponent, setActiveComponent] = useState('');
  if (!activeComponent){
    setActiveComponent (<SuperWelcome activeComponent={activeComponent} setActiveComponent={setActiveComponent} username={username}/>);
  }
  return (
    <div>
      <Header />
      <div>
      <SideNavSuper setActiveComponent={setActiveComponent}  username={username} />
      <div className="content">
        {activeComponent}
      </div>
      </div>
      </div>
  );
}

export default SuperAdminDashboard;
