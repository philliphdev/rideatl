import React, { Component } from 'react'
import '../css/splashpage.css'
import Logon from './Logon';
import NewUser from './NewUser'
import styled from 'styled-components'
import { Button } from '../../node_modules/@material-ui/core';

const DivPadding = styled.div`
padding: 10px;
`

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
    newUser = () => {
        alert('Success! Please Log on')
    }

    render() {
        return (
            <div className="App div-container">
                <div className="ui grid form-group card text-white  mb-3 local-logon-card"> 
                    {
                        this.state.isShowing ?
                            <NewUser
                                newUser={this.newUser}
                                handleChange={this.handleChange}
                                user={this.state.user}
                                getUsers={this.newUser}
                                toggleNewForm={this.toggleIsShowing}
                            />
                            : <Logon />
                            
                    }
                    <DivPadding>
                    <Button className="btn btn-info" onClick={this.toggleIsShowing}>
                        {this.state.isShowing ? "Cancel" : "Register"}</Button>
                        </DivPadding>
                </div>    
            </div>
        );
    }
}

export default Splashpage;