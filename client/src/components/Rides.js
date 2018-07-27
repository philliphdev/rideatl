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
        try {
            const res = await axios.get('/api/rides')
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
        await axios.post(`/api/rides`, payload)
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
                <Card className="local-card" key={index}>
                    <button
                        type="submit"
                        onClick={() => this.deleteRide(ride.id)}>X
                </button>
                    <Link
                        key={ride.id}
                        to={`/users/8/rides/${ride.id}`}>
                        <h3 key={ride.id}>Name: {ride.title}</h3>
                    </Link>
                </Card>

            )
        })
        return (

            <Grid container spacing={24} style={{ padding: 24 }}>
                <DivContainer>
                    <h1>Rides</h1>
                    <Button onClick={this.toggleIsShowing}>
                        {this.state.isShowing ? "Cancel" : "Add Ride"}</Button>
                    {
                        this.state.isShowing ?
                            <NewRide
                                newRide={this.newRide}
                                handleChange={this.handleChange}
                                ride={this.state.ride}
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