// src/components/AdminDashboard.js

import React, { useState }  from 'react';
import SideNavAdmin from './SideNavAdmin';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';
import ViewTask from './ViewTask';
import ChangePassword from './changePassword';
import AdminWelcome from './AdminWelcome';
import Header from './Header';
import { useLocation } from 'react-router-dom';

function AdminDashboard() {
  const location = useLocation();
  const username = location.state;
 // Provide a default value
 const [activeComponent, setActiveComponent] = useState('');
  if (!activeComponent){
    setActiveComponent (<AdminWelcome activeComponent={activeComponent} setActiveComponent={setActiveComponent} username={username}/>);
  }

  return (
    <div>
      <Header />
      <div>
      <SideNavAdmin setActiveComponent={setActiveComponent}  username={username} />
      <div className="content">
        {activeComponent}
      </div>
      </div>
      </div>
  );
}

export default AdminDashboard;
