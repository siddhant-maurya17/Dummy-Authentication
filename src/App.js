import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import store from './store';
import Login from './components/Login';
import Profile from './components/Profile';
import './style.css'
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile/:userId" element={<Profile />} />
          </Routes>
          
        </div>
      </Router>
    </Provider>
  );
};

export default App;
