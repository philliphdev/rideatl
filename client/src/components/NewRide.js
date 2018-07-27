import React, { Component } from "react"
import { Grid, Form, Header, Image, Button } from "semantic-ui-react"
import axios from "axios"
import { Redirect } from 'react-router-dom'

const src1 ="http://thecatapi.com/api/images/get?format=src&type=gif"

class NewRide extends Component {
  constructor(){
    super();
  this.state = {
    title: '',
    ride_date: '',
    description: '',
    start_place: '',
    end_place: '',
    contact: ''
}

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (rides) {
    rides.preventDefault();
      const ride = {
        title: this.state.title,
        ride_date: this.state.ride_date,
        description: this.state.description,
        start_place: this.state.start_place,
        end_place: this.state.end_place,
        contact: this.state.contact
      }

      axios
      .post("/api/rides", ride)
      .then(res => {
        <Redirect to="/users" />
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  onChange (rides){
    this.setState({
  [rides.target.name]: rides.target.value})
}
  
  render() {
    return (
      <div className="ui center aligned segment">
        <div>
          <Header as='h1' color='teal'>
            New Ride
          </Header>
          <Image src={src1} size='small' circular centered />
            <br />
            </div>
        <Grid> 
            <Grid centered>
        <Form onSubmit={this.onSubmit}>
          <Form.Group> 
            <Form.Input
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
            />
            <Form.Input
              placeholder="ride_date"
              name="ride_date"
              type="date"
              value={this.state.ride_date}
              onChange={this.onChange}
            />
            <Form.Input
              placeholder="Description"
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.onChange}
            />
            <Form.Input
              placeholder="start_place"
              name="start_place"
              type="text"
              value={this.state.start_place}
              onChange={this.onChange}
            />
            <Form.Input
              placeholder="end_place"
              name="end_place"
              type="text"
              value={this.state.end_place}
              onChange={this.onChange}
            />
            <Form.Input
              placeholder="Contact"
              name="Contact"
              type="text"
              value={this.state.Contact}
              onChange={this.onChange}
            />
            <Button content="Submit" />
          </Form.Group>
          
        </Form></Grid>
        </Grid>
      </div>
    );
  }
}

export default NewRide