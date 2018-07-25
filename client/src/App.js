import React, { Component } from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Splashpage from './components/Splashpage'
import './App.css';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Splashpage}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
