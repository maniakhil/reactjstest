import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  let logged = isLoggedIn();
  let elements;
  elements = 
  <div>
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </div>

  return (
    <Router>
      <div className="App">
        {elements}
      </div>
    </Router>
  );
}

function isLoggedIn() {
  return localStorage.getItem('logData');
}

export default App;
