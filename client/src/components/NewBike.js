import React, { Component } from "react"
import { Grid, Form, Header, Image, Button } from "semantic-ui-react"
import axios from "axios"
import { Redirect } from 'react-router-dom'

const src1 = "http://thecatapi.com/api/images/get?format=src&type=gif"

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
        bikes.preventDefault();
        const bike = {
            title: this.state.make,
            model: this.state.model,
            year: this.state.year,
            comments: this.state.comments,
            photo_url: this.state.photo_url,
            trade: this.state.trade,
            trade_details: this.state.trade_details,
            contact: this.state.contact
        }

        axios
            .post("/api/bikes", bike)
            .then(res => {
                <Redirect to="/users" />
                console.log(res.data);
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
                <div>
                    <Header as='h1' color='teal'>
                        New bike
                    </Header>
                    <Image src={src1} size='small' circular centered />
                    <br />
                </div>
                <Grid>
                    <Grid centered>
                        <Form onSubmit={this.onSubmit}>
                            <Form.Group>
                                <Form.Input
                                    placeholder="Make"
                                    name="make"
                                    value={this.state.make}
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    placeholder="Model"
                                    name="model"
                                    type="text"
                                    value={this.state.model}
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    placeholder="Year"
                                    name="year"
                                    type="date"
                                    value={this.state.year}
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    placeholder="Comments"
                                    name="comments"
                                    type="text"
                                    value={this.state.comments}
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    placeholder="photo_url"
                                    name="photo_url"
                                    type="text"
                                    value={this.state.photo_url}
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    placeholder="trade"
                                    name="trade"
                                    type="text"
                                    value={this.state.trade}
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    placeholder="trade_details"
                                    name="trade_details"
                                    type="text"
                                    value={this.state.trade_details}
                                    onChange={this.onChange}
                                />
                                <Form.Input
                                    placeholder="Contact"
                                    name="contact"
                                    type="text"
                                    value={this.state.contact}
                                    onChange={this.onChange}
                                />
                                <Button content="Submit" />
                            </Form.Group>
                        </Form></Grid>
                </Grid>
            </div>
        )
    }
}

export default NewBike