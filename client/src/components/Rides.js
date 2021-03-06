import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewRide from './NewRide'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import styled from 'styled-components'
import Button from "@material-ui/core/Button"

const DivContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
`

class Rides extends Component {
    state = {
        userId: '',
        rides: [],
        ride: {
            title: '',
            ride_date: '',
            description: '',
            start_place: '',
            end_place: '',
            contact: ''
        },
        isShowing: false
    }

    componentDidMount() {
        this.getAllRides()
    }

    toggleIsShowing = () => {
        this.setState({
            isShowing: !this.state.isShowing
        })
    }

    getAllRides = async () => {
        const userId = this.props.match.params.userId
        this.setState({ userId })
        try {
            const res = await axios.get(`/api/users/${userId}/rides`)
            this.setState({ rides: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }

    deleteRide = async (ride) => {
    }

    handleChange = (event) => {
        const fieldValue = event.target.name
        const addRideNew = { ...this.state.ride }
        addRideNew[fieldValue] = event.target.value
        this.setState({ ride: addRideNew })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const res = await axios.post('/api/rides',
            this.state.ride
        )
        console.log(res)
    }

    newRide = async (event) => {
        event.preventDefault()
        const payload = {
            title: this.state.title,
            ride_date: this.state.ride_date,
            description: this.state.description,
            start_place: this.state.start_place,
            end_place: this.state.end_place,
            contact: this.state.contact
        }
        const clearForm = {
            title: '',
            ride_date: '',
            description: '',
            start_place: '',
            end_place: '',
            contact: ''
        }
        const userId = this.props.match.params.userId
        await axios.post(`/api/users/${userId}/rides`, payload)
            .then((res) => {
                this.setState({
                    isShowing: false,
                    user: clearForm
                })
                this.getAllRides()
            })
    }

    render() {
        const listOfRides = this.state.rides.map((ride, index) => {
            return (
                <Card className="ui grid form-group card text-white bg-primary mb-3  local-resource-card" key={index}>
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">
                            <Link
                                key={ride.id}
                                to={`/users/${this.state.userId}/rides/${ride.id}`}>
                                <h3 key={ride.id}>Ride To: {ride.title}</h3>
                            </Link>
                        </div>
                        <div className="card-body">
                            <h4> </h4>
                            <p className="card-text">{ride.description}</p>
                            <ul className="list-group text-white bg-primary">
                                <li className="text-white bg-primary list-group-item d-flex justify-content-between align-items-center">Date: {ride.ride_date}</li>
                                <li className="text-white bg-primary list-group-item d-flex justify-content-between align-items-center">Meet at: {ride.start_place}</li>
                                <li className="text-white bg-primary list-group-item d-flex justify-content-between align-items-center">Return to: {ride.end_place}</li>
                            </ul>
                        </div>
                        <div className="card-footer text-muted">
                            {ride.contact}
                        </div>
                    </div>
                </Card>
            )
        })

        return (

            <Grid container spacing={24} style={{ padding: 24 }}>
                <DivContainer>
                    <h1 className="h1-text">Rides</h1>
                    <Button className="btn btn-primary btn-sm" onClick={this.toggleIsShowing}>
                        {this.state.isShowing ? "Cancel" : "Add Ride"}</Button>
                    {
                        this.state.isShowing ?
                            <NewRide
                                newRide={this.newRide}
                                handleChange={this.handleChange}
                                ride={this.state.ride}
                                userId={this.state.userId}
                                toggleNewForm={this.toggleIsShowing}
                                getRides={this.getAllRides}
                            />
                            : null
                    }
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {listOfRides}
                    </Grid>
                </DivContainer>
            </Grid>
        )
    }
}
export default Rides