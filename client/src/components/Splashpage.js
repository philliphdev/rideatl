import React, { Component } from 'react'
import '../css/splashpage.css'
import Logon from './Logon';
import NewUser from './NewUser';
import { Button } from '../../node_modules/@material-ui/core';

class Splashpage extends Component {
    state = {
        user: {
            name: '',
            email: '',
            password: '',
            nickname: '',
            comments: '',
            photo_url: ''
        },
        isShowing: false
    }
    toggleIsShowing = () => {
        this.setState({
            isShowing: !this.state.isShowing
        })
    }
    render() {
        return (
            <div className="App">
                <div>
                    <h1>Splash Page</h1>
                    {
                        this.state.isShowing ?
                            <NewUser
                                newUser={this.newUser}
                                handleChange={this.handleChange}
                                user={this.state.user}
                            />
                            : <Logon />
                            
                    }
                    <Button  onClick={this.toggleIsShowing}>
                        {this.state.isShowing ? "Cancel" : "Register"}</Button>
                </div>
            </div>
        );
    }
}

export default Splashpage;