import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Splashpage from './components/Splashpage'
import Users from './components/Users'
import User from './components/User'
import Rides from './components/Rides'
import Ride from './components/Ride'
import './App.css';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div className="background-images">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Splashpage}/>
            <Route exact path="/users" component={Users} />
            <Route exact path="/rides" component={Rides} />
            <Route exact path="/users/:userId" component={User} />
            <Route exact path="/users/:userId/rides" component={Rides} />
            <Route exact path="/users/:userId/rides/:rideId" component={Ride} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
