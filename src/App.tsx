import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Route path='/' component={Home} />
    </Router>
  );
}

export default App;
