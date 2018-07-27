import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Button from "@material-ui/core/Button"

const RideForm = styled.form`
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
class Ride extends Component {
    state = {
        ride: {
            title: '',
            ride_date: '',
            description: '',
            start_place: '',
            end_place: '',
            contact: ''
        }
    }
    componentWillMount() {
        this.getRideInfo()
    }

    getRideInfo = async () => {
        try {
            const userId = this.props.match.params.userId
            const rideId = this.props.match.params.rideId
            const res = await axios.get(`/api/users/${userId}/rides/${rideId}`)
            this.setState({ ride: res.data })
            console.log('46 ', this.state.ride.title, '45')
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = (event) => {
        const fieldValue = event.target.name
        const editRide = { ...this.state.ride }
        editRide[fieldValue] = event.target.value
        this.setState({ ride: editRide })
    }

    updateRide = async () => {
        const { userId } = this.props.match.params
        const { rideId } = this.props.match.params
        const res = await axios.patch(`/api/users/${userId}/rides/${rideId}`,
            this.state.ride,
            this.props.history.push(`/`)
        )

    }

    deleteRide = async (ride) => {
        const { userId } = this.props.match.params
        const { rideId } = this.props.match.params
        axios.delete(`/api/users/${userId}/rides/${rideId}`)
        this.props.history.push(`/`)
    }
    catch(err) {
        console.log(err)
    }

    render() {
        const rideToEdit = (
            <div>
                <CenterDiv>
                    <p>Title: </p>
                    <Card className="local-resource-card">
                        <button onClick={this.deleteRide}>X</button>
                        <RideForm onSubmit={this.updateRide}>
                            <label>Title: </label>
                            <input
                                type="text"
                                name="title"
                                value={this.state.ride.title}
                                onChange={this.handleChange}
                            />
                            <label>Ride Date: </label>
                            <input
                                type="date"
                                name="ride_date"
                                value={this.state.ride.ride_date}
                                onChange={this.handleChange}
                            />
                            <label>Description: </label>
                            <input
                                type="textbox"
                                name="description"
                                value={this.state.ride.description}
                                onChange={this.handleChange}
                            />
                            <label>Start Place: </label>
                            <input
                                type="text"
                                name="start_place"
                                value={this.state.ride.start_place}
                                onChange={this.handleChange}
                            />
                            <label>End Place: </label>
                            <input
                                type="text"
                                name="end_place"
                                value={this.state.ride.end_place}
                                onChange={this.handleChange}
                            />
                            <label>Contact: </label>
                            <input
                                type="text"
                                name="contact"
                                value={this.state.ride.contact}
                                onChange={this.handleChange}
                            />
                            <Button type="submit">Submit</Button>
                        </RideForm>
                     
                        <Link to={`/users`}>View Users</Link>
                    </Card>
                </CenterDiv>
            </div>
        )
        return (
            <Grid container spacing={24} style={{ padding: 24 }}>
                {rideToEdit}
            </Grid>
        )
    }
}


export default Ride