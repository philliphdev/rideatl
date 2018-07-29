import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Splashpage from './components/Splashpage'
import Bike from './components/Bike'
import Bikes from './components/Bikes'
import Ride from './components/Ride'
import Rides from './components/Rides'
import User from './components/User'
import Users from './components/Users'
import './App.css';
import Navbar from './components/Navbar'
import styled from 'styled-components'

const Container = styled.div `
display: flex;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="background-images">
            <Navbar />
            <Container>
              <Switch>
                <Route exact path="/" component={Splashpage} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/rides" component={Rides} />
                <Route exact path="/bikes" component={Bikes} />
                <Route exact path="/users/:userId" component={User} />
                <Route exact path="/users/:userId/rides" component={Rides} />
                <Route exact path="/users/:userId/bikes" component={Bikes} />
                <Route exact path="/users/:userId/rides/:rideId" component={Ride} />
                <Route exact path="/users/:userId/bikes/:bikeId" component={Bike} />
              </Switch>
            </Container>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
