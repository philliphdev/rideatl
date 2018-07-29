import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewUser from './NewUser'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import styled from 'styled-components'
import Button from "@material-ui/core/Button"

const DivContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
`
const LinkDiv = styled.div `
display: flex;
justify-content: space-around;
i {
    padding: 0 5px;
}
`

class Users extends Component {
    state = {
        url: '/',
        users: [],
        user: {
            name: '',
            email: '',
            password: '',
            nickname: '',
            comments: '',
            photo_url: ''
        },
        isShowing: false
    }

    componentDidMount() {
        this.getAllUsers()
    }

    toggleIsShowing = () => {
        this.setState({
            isShowing: !this.state.isShowing
        })
    }

    getAllUsers = async () => {
        try {
            const res = await axios.get('/api/users')
            this.setState({ users: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }

    deleteUser = async (user) => {
        axios.delete(`/api/users/${user}`)
            .then((res) => {
                this.setState({
                    users: this.state.users
                })
                this.getAllUsers()
            })
    }

    handleChange = (event) => {
        const fieldValue = event.target.name
        const addUserNew = { ...this.state.user }
        addUserNew[fieldValue] = event.target.value
        this.setState({ user: addUserNew })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/users',
            this.state.user
        )
        console.log(res)
    }

    newUser = async (event) => {
        event.preventDefault()
        const payload = {
            name: this.state.user.name,
            email: this.state.user.email,
            password: this.state.user.password,
            nickname: this.state.user.nickname,
            comments: this.state.user.comments,
            photo_url: this.state.user.photo_url
        }
        const clearForm = {
            name: '',
            email: '',
            password: '',
            nickname: '',
            comments: '',
            photo_url: ''
        }
        await axios.post(`/api/users`, payload)
            .then((res) => {
                this.setState({
                    isShowing: false,
                    user: clearForm
                })
                this.getAllUsers()
            })
    }

    render() {
        const listOfUsers = this.state.users.map((user, index) => {
            return (
                <Card className="ui grid form-group card text-white bg-primary mb-3 local-card" key={index}>                 
                    <Link      
                        to={`/users/${user.id}`}>
                        <h3>{user.name}</h3>
                    </Link>
                    <div>
                    <img className="local-user-img" src={user.photo_url} alt="user" />
                    </div>
                    <LinkDiv>
                        <div>
                            <Link to={`/users/${user.id}/rides`}>
                            <i className="material-icons">event</i>                    
                            User Rides
                            </Link>
                        </div>
                        <div>
                            <Link to={`/users/${user.id}/bikes`}>
                            <i className="material-icons">motorcycle</i>
                            User Bikes</Link>
                        </div>
                    </LinkDiv>
                </Card>

            )
        })
        return (

            <Grid container spacing={24} style={{ padding: 24 }}>
                <DivContainer>
                    <h1>Users</h1>
                    <Button className="btn btn-primary btn-sm" onClick={this.toggleIsShowing}>
                        {this.state.isShowing ? "Cancel" : "Add User"}</Button>
                    {
                        this.state.isShowing ?
                            <NewUser
                                newUser={this.newUser}
                                handleChange={this.handleChange}
                                user={this.state.user}
                                url={this.state.url}
                            />
                            : null
                    }
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {listOfUsers}
                    </Grid>
                </DivContainer>
            </Grid>
        )
    }
}

export default Users