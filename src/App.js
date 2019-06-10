import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact to='/' component={Home} />
    <Route to='/about' component={About} />
    <Route to='/contact' component={Contact} />
  </div>
);

export default App;
