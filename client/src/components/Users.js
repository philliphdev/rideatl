import React, { Component } from 'react';
import NewUser from './NewUser';

class Users extends Component {
    render() {
        return (
            <div>
                <h1>Users Page</h1>
                <NewUser />
            </div>
        );
    }
}

export default Users;