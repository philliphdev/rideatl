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

class Users extends Component {
    state = {
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
                <Card className="local-card" key={index}>
                    <button
                        type="submit"
                        onClick={() => this.deleteUser(user.id)}>X
                    </button>
                    <Link
                        key={user.id}
                        to={`/users/${user.id}`}>
                        <h3 key={user.id}>Name: {user.name}</h3>
                        <img src={user.photo_url} alt="user" />
                    </Link>
                </Card>

            )
        })
        return (
           
                <Grid container spacing={24} style={{ padding: 24 }}>
                    <DivContainer>
                        <h1>Users</h1>
                        <Button onClick={this.toggleIsShowing}>
                            {this.state.isShowing ? "Cancel" : "Add User"}</Button>
                        {
                            this.state.isShowing ?
                                <NewUser
                                    newUser={this.newUser}
                                    handleChange={this.handleChange}
                                    user={this.state.user}
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

export default Users;