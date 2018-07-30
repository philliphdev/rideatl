import React, { Component } from "react"
import { Form, Image } from "semantic-ui-react"
import axios from "axios"

const src1 = "http://thecatapi.com/api/images/get?format=src&type=gif"

class NewUser extends Component {
  constructor() {
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

  onSubmit(users) {
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
        this.props.getUsers()
        this.props.toggleNewForm()
      })
      .catch(err => console.log(err));
  }

  onChange(users) {
    this.setState({
      [users.target.name]: users.target.value
    })
  }

  render() {
    return (
      <div className="ui center aligned segment">
        <div className="ui grid form-group card text-white bg-primary mb-3 local-new-card ">
          <div>
            <div className="card-header">
              New User
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
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  <input
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <input
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <input
                    className="form-control"
                    placeholder="Nickname"
                    name="nickname"
                    type="text"
                    value={this.state.nickname}
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
                    placeholder="Photo URL"
                    name="photo_url"
                    type="text"
                    value={this.state.photo_url}
                    onChange={this.onChange}
                  />
                  <div>
                  <button className="btn btn-primary div-padding" content="submit">Create</button>
                  </div>
                </Form.Group>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewUser