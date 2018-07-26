import React, { Component } from 'react';

class Logon extends Component {
    render() {
        return (
            <div>
                <div className="ui grid form-group card text-white bg-primary mb-3">
                    <div className="card-header">Logon</div>
                    <div className="card-body">
                        <div>
                            <label className="col-form-label" for="email">email</label>
                            <input className="form-control" placeholder="email" id="email" type="text" />
                        </div>
                        <div>
                            <label className="col-form-label" for="password">Password</label>
                            <input className="form-control" placeholder="password" id="password" type="password" />
                        </div>
                        <button type="button" className="btn btn-primary">GO!</button>
                    </div>
                    <button type="button" class="btn btn-outline-info">Sign UP</button>
                </div>
            </div>
        );
    }
}

export default Logon
