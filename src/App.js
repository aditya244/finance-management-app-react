import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1> Finance Management App</h1>
        </div>
        <div className="navbar">
          <ul type="none">
            <li className="li-item"><Link to="/"> Home </Link></li>
            <li className="li-item"><Link to="/settings"> Settings </Link></li>
            <li className="li-item"><Link to="/profile"> Profile </Link></li>
          </ul>
        </div>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/settings" component={Settings} exact/>
          <Route path="/profile" component={Profile} exact/>
        </Switch>
      </BrowserRouter>
    ); 
  }
}

export default App;
