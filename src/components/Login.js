import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Add a piece of state to hold the error message
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const user = await dispatch(login(username, password));
    if (user) {
      navigate(`/profile/${user.id}`);
    } else {
      setError('Invalid username or password'); // Set the error message if login fails
    }
  };

  return (
    <div className='login'>
      <div>
        <p>Welcome back! 👋</p>
      </div>
      <h2>Sign in to your account</h2>
      <div>
        <label>Username</label>
      </div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div>
        <label>Password</label>
      </div>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div className="error">{error}</div>} {/* Render the error message if it exists */}
      <button onClick={handleLogin}>Continue</button>
      <div className='forget'>Forgot Password</div>
    </div>
  );
};

export default Login;
