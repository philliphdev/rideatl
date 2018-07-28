import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
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
        const res = await axios.patch(`/api/users/${userId}`,
            this.state.user,
            this.props.history.push(`/users/`)
        )
        // this.setState({ user: res.data.user })

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
                <CenterDiv>
                    <p>Name: </p>
                    <Card className="local-resource-card">
                        <button onClick={this.deleteUser}>X</button>
                        <UserForm onSubmit={this.updateUser}>
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
                                type="nickname"
                                name="nickname"
                                value={this.state.user.nickname}
                                onChange={this.handleChange}
                            />
                            <label>Comments: </label>
                            <input
                                type="comments"
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
                            <Button type="submit">Submit</Button>
                        </UserForm>
                        <img className="local-img" src={this.state.user.photo_url} alt="User" />
                        <Link to={`/users/${this.state.user.id}/rides`}>View User Rides</Link>
                        <Link to={`/users/${this.state.user.id}/bikes`}>View User Bikes</Link>
                    </Card>
                </CenterDiv>
            </div>
        )
        return (
            <Grid container spacing={24} style={{ padding: 24 }}>
                {userToEdit}
            </Grid>
        )
    }
}

export default User