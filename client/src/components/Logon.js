import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Logon extends Component {
    
    render() {
        return (
            <div>
                <div className="ui grid form-group card text-white bg-primary mb-3 local-logon-card ">
                    <div className="card-header">Log On</div>
                    <div className="card-body">
                        <div>
                            <label className="col-form-label" value="email">email</label>
                            <input className="form-control" placeholder="email" id="email" type="text" />
                        </div>
                        <div>
                            <label className="col-form-label" value="password">Password</label>
                            <input className="form-control" placeholder="password" id="password" type="password" />
                        </div>
                            <Link to="/users" className="btn btn-primary div-padding">GO!</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Logon
