import React, { Component } from 'react'
import '../css/splashpage.css'
import Logon from './Logon';

class Splashpage extends Component {
    render() {
        return (
            <div className="App">
                <div>
                <h1>Splash Page</h1>
                <Logon />
                </div>
            </div>
        );
    }
}

export default Splashpage;