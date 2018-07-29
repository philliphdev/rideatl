import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Button from "@material-ui/core/Button"

const UserForm = styled.form`
input[type=text],[type=email],[type=password] {
    width: 100%;
    padding: 5px 2px;
    margin: 5px 0;
    display: inline-block;
    border: 1px solid blue;
    border-radius: 3px;
}
`
const CenterDiv = styled.div`
margin: auto
button {
    margin: 5px 0;
}
`
const LinkDiv = styled.div `
display: flex;
justify-content: space-around;
i {
    padding: 0 5px;
}
`

class User extends Component {
    state = {
        user: {
            name: '',
            email: '',
            password: '',
            nickname: '',
            comments: '',
            photo_url: ''
        }
    }
    componentWillMount() {
        this.getUserInfo()
    }

    getUserInfo = async () => {
        try {
            const userId = this.props.match.params.userId
            const res = await axios.get(`/api/users/${userId}`)
            this.setState({ user: res.data })
            console.log('43 ', this.state.user.name, '45')
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = (event) => {
        const fieldValue = event.target.name
        const editUser = { ...this.state.user }
        editUser[fieldValue] = event.target.value
        this.setState({ user: editUser })
    }

    updateUser = async () => {
        const { userId } = this.props.match.params
        await axios.patch(`/api/users/${userId}`,
            this.state.user,
            this.props.history.push(`/users/`)
        )
    }

    deleteUser = async (user) => {
        const { userId } = this.props.match.params
        axios.delete(`/api/users/${userId}`)
        this.props.history.push(`/users/`)
    }
    catch(err) {
        console.log(err)
    }

    render() {
        const userToEdit = (
            <div>
                <div className="local-resource-card">
                    <button className="local-button-right" onClick={this.deleteUser}>
                        <i className="material-icons">delete_forever</i>
                    </button>
                    <div>
                        <img className="local-user-img" src={this.state.user.photo_url} alt="User" />
                        <h3>{this.state.user.name} </h3>
                    </div>
                    <LinkDiv>
                        <div>
                            <Link to={`/users/${this.state.user.id}/rides`}>
                            <i className="material-icons">event</i>                    
                            User Rides
                            </Link>
                        </div>
                        <div>
                            <Link to={`/users/${this.state.user.id}/bikes`}>
                            <i className="material-icons">motorcycle</i>
                            User Bikes</Link>
                        </div>
                    </LinkDiv>
                    <div className="local-resource-card ">
                        <UserForm>
                            <label>Name: </label>
                            <input
                                type="text"
                                name="name"
                                value={this.state.user.name}
                                onChange={this.handleChange}
                            />
                            <label>Email: </label>
                            <input
                                type="email"
                                name="email"
                                value={this.state.user.email}
                                onChange={this.handleChange}
                            />
                            <label>Password: </label>
                            <input
                                type="password"
                                name="password"
                                value={this.state.user.password}
                                onChange={this.handleChange}
                            />
                            <label>Nickname: </label>
                            <input
                                type="text"
                                name="nickname"
                                value={this.state.user.nickname}
                                onChange={this.handleChange}
                            />
                            <label>Comments: </label>
                            <input
                                type="text"
                                name="comments"
                                value={this.state.user.comments}
                                onChange={this.handleChange}
                            />
                            <label>Photo URL: </label>
                            <input
                                type="text"
                                name="photo_url"
                                value={this.state.user.photo_url}
                                onChange={this.handleChange}
                            />
                            <Button className="btn btn-primary div-padding" type="button" onClick={this.updateUser}>Update</Button>
                            <Link to="/users" className="btn btn-secondary local-button-right">CANCEL</Link>
                        </UserForm>
                    </div>
                </div>
            </div>
        )
        return (
            <CenterDiv>
            <Grid container spacing={24} style={{ padding: 24 }}>
                {userToEdit}
            </Grid>
            </CenterDiv>
        )
    }
}

export default User