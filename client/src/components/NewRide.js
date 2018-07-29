import React, { Component } from "react"
import { Grid, Form, Header, Image, Button } from "semantic-ui-react"
import axios from "axios"
import { Redirect } from 'react-router-dom'

const src1 = "https://source.unsplash.com/1600x900/?harley"

class NewRide extends Component {
  constructor() {
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


  onSubmit(rides) {
    rides.preventDefault();
    const userId = this.props.userId
    const ride = {
      title: this.state.title,
      ride_date: this.state.ride_date,
      description: this.state.description,
      start_place: this.state.start_place,
      end_place: this.state.end_place,
      contact: this.state.contact,
      user_id: userId
    }
    axios
      .post(`/api/users/${userId}/rides`, ride)
      .then(res => {
        <Redirect to="/" />
      })
      .catch(err => console.log(err));
  }

  onChange(rides) {
    this.setState({
      [rides.target.name]: rides.target.value
    })
  }

  render() {
    return (
      <div className="ui center aligned segment">
        <div className="ui grid form-group card text-white bg-primary mb-3 local-new-card ">
          <div>
            <div className="card-header">
              New Ride
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
                    placeholder="Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                  <input
                    className="form-control"
                    placeholder="ride_date"
                    name="ride_date"
                    type="date"
                    value={this.state.ride_date}
                    onChange={this.onChange}
                  />
                  <input
                    className="form-control"
                    placeholder="Description"
                    name="description"
                    type="text"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                  <input
                    className="form-control"
                    placeholder="start_place"
                    name="start_place"
                    type="text"
                    value={this.state.start_place}
                    onChange={this.onChange}
                  />
                  <input
                    className="form-control"
                    placeholder="end_place"
                    name="end_place"
                    type="text"
                    value={this.state.end_place}
                    onChange={this.onChange}
                  />
                  <input
                    className="form-control"
                    placeholder="Contact"
                    name="Contact"
                    type="text"
                    value={this.state.Contact}
                    onChange={this.onChange}
                  />
                  <button className="btn btn-primary div-padding" content="Submit">Create</button>
                </Form.Group>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewRide