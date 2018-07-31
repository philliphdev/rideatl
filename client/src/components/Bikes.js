import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import styled from 'styled-components'
import Button from "@material-ui/core/Button"
import NewBike from './NewBike';

const DivContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
`

class Bikes extends Component {
    state = {
        userId: '',
        bikes: [],
        bike: {
            make: '',
            model: '',
            year: '',
            comments: '',
            photo_url: '',
            trade: '',
            trade_details: '',
            contact: ''
        },
        isShowing: false
    }

    componentDidMount() {
        this.getAllBikes()
    }

    toggleIsShowing = () => {
        this.setState({
            isShowing: !this.state.isShowing
        })
    }

    getAllBikes = async () => {
        const userId = this.props.match.params.userId
        this.setState({ userId })
        try {
            const res = await axios.get(`/api/users/${userId}/bikes`)
            this.setState({ bikes: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }

    deleteBike = async (bike) => {
        axios.delete(`/api/users/${this.state.userId}/bikes/${bike}`)
            .then((res) => {
                this.setState({
                    bikes: this.state.bikes
                })
                this.getAllBikes()
            })
    }

    handleChange = (event) => {
        const fieldValue = event.target.name
        const addBikeNew = { ...this.state.bike }
        addBikeNew[fieldValue] = event.target.value
        this.setState({ bike: addBikeNew })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/bikes',
            this.state.bike
        )
        console.log(res)
    }

    newBike = async (event) => {
        event.preventDefault()
        const payload = {
            title: this.state.make,
            model: this.state.model,
            year: this.state.year,
            comments: this.state.comments,
            photo_url: this.state.photo_url,
            trade: this.state.trade,
            trade_details: this.state.trade_details,
            contact: this.state.contact
        }
        const clearForm = {
            make: '',
            model: '',
            year: '',
            comments: '',
            photo_url: '',
            trade: '',
            trade_details: '',
            contact: ''
        }
        const userId = this.props.match.params.userId
        await axios.post(`/api/users/${userId}/bikes`, payload)
            .then((res) => {
                this.setState({
                    isShowing: false,
                    user: clearForm
                })
                this.getAllBikes()
            })
    }

    render() {
        const listOfBikes = this.state.bikes.map((bike, index) => {
            return (
                <Card className="ui grid form-group card text-white bg-primary mb-3 local-resource-card" key={index}>
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">
                            <Link
                                key={bike.id}
                                to={`/users/${this.state.userId}/bikes/${bike.id}`}>
                                <h3 key={bike.id}>{bike.make} - {bike.model}</h3>
                            </Link>
                            <div>
                                <img className="local-user-img" src={bike.photo_url} alt="bike" />
                            </div>
                        </div>
                        <div className="card-body">
                            <h4> </h4>
                            <p className="card-text">{bike.comments}</p>
                            <ul className="list-group text-white bg-primary">
                                <li className="text-white bg-primary list-group-item d-flex justify-content-between align-items-center">Trade {bike.trade}</li>
                                <li className="text-white bg-primary list-group-item d-flex justify-content-between align-items-center">Trade Details {bike.trade_details}</li>
                            </ul>
                        </div>
                        <div className="card-footer text-muted">
                            {bike.contact}
                        </div>
                    </div>
                </Card>
            )
        })
        return (

            <Grid container spacing={24} style={{ padding: 24 }}>
                <DivContainer>
                    <h1 className="h1-text">Bikes</h1>
                    <Button className="btn btn-primary btn-sm" onClick={this.toggleIsShowing}>
                        {this.state.isShowing ? "Cancel" : "Add Bike"}</Button>
                    {
                        this.state.isShowing ?
                            <NewBike
                                newBike={this.newBike}
                                handleChange={this.handleChange}
                                bike={this.state.bike}
                                userId={this.state.userId}
                                toggleNewForm={this.toggleIsShowing}
                                getBikes={this.getAllBikes}
                            />
                            : null
                    }
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {listOfBikes}
                    </Grid>
                </DivContainer>
            </Grid>
        )
    }
}
export default Bikes