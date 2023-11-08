import React, { useState } from 'react';
import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';
import ViewTask from './ViewTask';
import AdminWelcome from './AdminWelcome';
import ViewUserGrid from './ViewUserGrid';
import ChangePassword from './changePassword';
import './SideNav.css'; // Import the CSS file for styling

function SideNavAdmin( {setActiveComponent , username}) {

  const loadComponent = (component) => {
    setActiveComponent(component);
  };

  return (
    <aside className="side-nav">
      <div className="profile">
        {/* Circular Photo */}
        <img src="user-profile-photo.jpg" alt="User Profile" />
        <h2>{username}</h2>
      </div>
      <nav>
<ul>
          <li onClick={() => loadComponent(<AdminWelcome username={username}/>)}>Home</li>
          <li onClick={() => loadComponent(<ViewProfile username={username}/>)}>View Profile</li>
          <li onClick={() => loadComponent(<EditProfile username={username}/>)}>Edit Profile</li>
          <li onClick={() => loadComponent(<ChangePassword username={username}/>)}>Change Password</li>
          <li onClick={() => loadComponent(<ViewUserGrid username={username}/>)}>View Users</li>        
          <li onClick={() => loadComponent(<ViewTask username={username}/>)}>View Task</li>
          
        </ul>
      </nav>
    </aside>
  );
}

export default SideNavAdmin;
