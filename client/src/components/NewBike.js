import React, { Component } from "react"
import { Form, Image } from "semantic-ui-react"
import axios from "axios"

const src1 = "https://source.unsplash.com/1600x900/?honda,motorcycle"

class NewBike extends Component {
    constructor() {
        super();
        this.state = {
            make: '',
            model: '',
            year: '',
            comments: '',
            photo_url: '',
            trade: '',
            trade_details: '',
            contact: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(bikes) {
        bikes.preventDefault()
        const userId = this.props.userId
        const bike = {
            title: this.state.make,
            model: this.state.model,
            year: this.state.year,
            comments: this.state.comments,
            photo_url: this.state.photo_url,
            trade: this.state.trade,
            trade_details: this.state.trade_details,
            contact: this.state.contact,
            user_id: userId
        }

        axios
            .post(`/api/users/${userId}/bikes`, bike)
            .then(res => {
                this.props.history.push(`/users/${userId}/bikes`)
            })
            .catch(err => console.log(err));
    }

    onChange(bikes) {
        this.setState({
            [bikes.target.name]: bikes.target.value
        })
    }

    render() {
        return (
            <div className="ui center aligned segment">
                <div className="ui grid form-group card text-white bg-primary mb-3 local-new-card ">
                    <div>
                        <div className="card-header">
                            New bike
                    </div>
                        <Image src={src1} className="local-user-img" />
                        <br />
                    </div>
                    <div className="ui grid form-group card">
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <Form.Group>
                                    <input
                                        className="form-control"
                                        placeholder="Make"
                                        name="make"
                                        value={this.state.make}
                                        onChange={this.onChange}
                                    />
                                    <input
                                        className="form-control"
                                        placeholder="Model"
                                        name="model"
                                        type="text"
                                        value={this.state.model}
                                        onChange={this.onChange}
                                    />
                                    <input
                                        className="form-control"
                                        placeholder="Year"
                                        name="year"
                                        type="date"
                                        value={this.state.year}
                                        onChange={this.onChange}
                                    />
                                    <input
                                        className="form-control"
                                        placeholder="Comments"
                                        name="comments"
                                        type="text"
                                        value={this.state.comments}
                                        onChange={this.onChange}
                                    />
                                    <input
                                        className="form-control"
                                        placeholder="photo_url"
                                        name="photo_url"
                                        type="text"
                                        value={this.state.photo_url}
                                        onChange={this.onChange}
                                    />
                                    <input
                                        className="form-control"
                                        placeholder="trade"
                                        name="trade"
                                        type="text"
                                        value={this.state.trade}
                                        onChange={this.onChange}
                                    />
                                    <input
                                        className="form-control"
                                        placeholder="trade_details"
                                        name="trade_details"
                                        type="text"
                                        value={this.state.trade_details}
                                        onChange={this.onChange}
                                    />
                                    <input
                                        className="form-control"
                                        placeholder="Contact"
                                        name="contact"
                                        type="text"
                                        value={this.state.contact}
                                        onChange={this.onChange}
                                    />
                                    <button className="btn btn-primary div-padding" content="Submit">Create</button>
                                </Form.Group>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewBike