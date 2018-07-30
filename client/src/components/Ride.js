import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Button from "@material-ui/core/Button"

const RideForm = styled.form`
input[type=text],[type=email],[type=password],[type=date] {
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
        await axios.patch(`/api/users/${userId}/rides/${rideId}`,
            this.state.ride,
            this.props.history.push(`/users/${userId}/rides/`)
        )

    }

    deleteRide = async (ride) => {
        const { userId } = this.props.match.params
        const { rideId } = this.props.match.params
        axios.delete(`/api/users/${userId}/rides/${rideId}`)
        this.props.history.push(`/users`)
    }
    catch(err) {
        console.log(err)
    }

    render() {
        const rideToEdit = (
            <div>
                <div className="local-resource-card">
                    <button className="local-button-right" onClick={this.deleteRide}>
                        <i className="material-icons">delete_forever</i>
                    </button>
                    <h1>Edit Ride</h1>
                    <div className="local-resource-card ">
                        <RideForm>
                            <label>Title: </label>
                            <input
                                type="text"
                                name="title"
                                placeholder={this.state.ride.title}
                                onChange={this.handleChange}
                            />
                            <label>Ride Date: </label>
                            <input
                                type="date"
                                name="ride_date"
                                placeholder={this.state.ride.ride_date}
                                onChange={this.handleChange}
                            />
                            <label>Description: </label>
                            <input
                                type="text"
                                name="description"
                                placeholder={this.state.ride.description}
                                onChange={this.handleChange}
                            />
                            <label>Start Place: </label>
                            <input
                                type="text"
                                name="start_place"
                                placeholder={this.state.ride.start_place}
                                onChange={this.handleChange}
                            />
                            <label>End Place: </label>
                            <input
                                type="text"
                                name="end_place"
                                placeholder={this.state.ride.end_place}
                                onChange={this.handleChange}
                            />
                            <label>Contact: </label>
                            <input
                                type="text"
                                name="contact"
                                placeholder={this.state.ride.contact}
                                onChange={this.handleChange}
                            />
                            <Button className="btn btn-primary div-padding" type="button" onClick={this.updateRide}>Submit</Button>
                            <Link to="/users" className="btn btn-secondary local-button-right">CANCEL</Link>
                        </RideForm>
                    </div>
                </div>
            </div>
        )
        return (
            <CenterDiv>
                <Grid container spacing={24} style={{ padding: 24 }}>
                    {rideToEdit}
                </Grid>
            </CenterDiv>
        )
    }
}


export default Ride