import React, { Component } from "react"
import { Grid, Form, Header, Image, Button } from "semantic-ui-react"
import axios from "axios"
import { Redirect } from 'react-router-dom'

const src1 ="http://thecatapi.com/api/images/get?format=src&type=gif"

class NewUser extends Component {
  constructor(){
    super();
  this.state = {
    name: "",
    email: "",
    password: "",
    nickname: "",
    comments: "",
    photo_url: ""
  }

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (users) {
    users.preventDefault();
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        nickname: this.state.nickname,
        comments: this.state.comments,
        photo_url: this.state.photo_url
      }

      axios
      .post("/api/users", user)
      .then(res => {
        <Redirect to="/users" />
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }

  onChange (users){
    this.setState({
  [users.target.name]: users.target.value})
}
  
  render() {
    return (
      <div className="ui center aligned segment">
        <div>
          <Header as='h1' color='teal'>
            New User
          </Header>
          <Image src={src1} size='small' circular centered />
            <br />
            </div>
        <Grid> 
            <Grid centered>
        <Form onSubmit={this.onSubmit}>
          <Form.Group> 
            <Form.Input
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
            <Form.Input
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <Form.Input
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <Form.Input
              placeholder="nickname"
              name="nickname"
              type="text"
              value={this.state.nickname}
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
              placeholder="Photo URL"
              name="photo_url"
              type="text"
              value={this.state.photo_url}
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

export default NewUser
