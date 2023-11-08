import React from 'react';

function Welcome({ username }) {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>This is your user dashboard. Choose an option from the side navigation to get started.</p>
      {/* Add any other welcoming content */}
    </div>
  );
}

export default Welcome
