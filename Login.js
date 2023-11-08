import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate for navigation

  /*const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }
    setError('');

    try {
      // Send a POST request to your backend for authentication
      const response = await axios.post('/login', { username, password });

      const userRole = response.data; // Assuming the response contains the user's role

      switch (userRole) {
        case 'superAdmin':
          navigate('/super-admin-dashboard', { state: { username } });
          break;
        case 'admin':
          navigate('/admin-dashboard', { state: { username } });
          break;
        case 'user':
          navigate('/user-dashboard', { state: { username } });
          break;
        default:
          navigate('/login');
      }
    } catch (error) {
      // Handle authentication errors
      console.error(error);
      setError('Authentication failed');
    }
  };*/
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Both fields are required');
      return;
    }
    setError('');
    const userRole = 'superAdmin'; // Replace this with the actual role
    
    switch (userRole) {
        case 'superAdmin':
          navigate('/super-admin-dashboard', { state: username } ); // Use navigate directly
          break;
        case 'admin':
          navigate('/admin-dashboard',  { state: username });
          break;
        case 'user':
          navigate('/user-dashboard',  { state: username });
          break;
        default:
          navigate('/login');
      }
  };

  return (
    <div className="login-container">
    <div className="login-box">
      <div >{error}</div> {/*className="error"*/}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
    <div className="image-box">
      <img src="your-image-url.jpg" alt="Login Image" />
    </div>
  </div>
  );
}

export default Login;
