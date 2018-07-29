import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import styled from 'styled-components'

const DivContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
`

class AllRides extends Component {
    state = {
        rides: [],
        ride: {
            title: '',
            ride_date: '',
            description: '',
            start_place: '',
            end_place: '',
            contact: ''
        }
    }
    componentDidMount() {
        this.getAllRides()
    }

    getAllRides = async () => {
        try {
            const res = await axios.get(`/api/allrides`)
            this.setState({ rides: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        const listOfRides = this.state.rides.map((ride, index) => {
            return (
                <Card className="ui grid form-group card text-white bg-primary mb-3  local-resource-card" key={index}>
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">
                            <h3 key={ride.id}>Ride To: {ride.title}</h3>
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
                    <h1>Rides</h1>
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {listOfRides}
                    </Grid>
                </DivContainer>
            </Grid>
        )
    }
}
export default AllRides