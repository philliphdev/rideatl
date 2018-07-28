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
        try {
            const res = await axios.get('/api/bikes')
            this.setState({ bikes: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }

    deleteBike = async (bike) => {
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
        await axios.post(`/api/bikes`, payload)
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
                <Card className="local-card" key={index}>
                    <button
                        type="submit"
                        onClick={() => this.deleteBike(bike.id)}>X
                </button>
                    <Link
                        key={bike.id}
                        to={`/users/8/bikes/${bike.id}`}>
                        <h3 key={bike.id}>Name: {bike.model}</h3>
                    </Link>
                </Card>

            )
        })
        return (

            <Grid container spacing={24} style={{ padding: 24 }}>
                <DivContainer>
                    <h1>Bikes</h1>
                    <Button onClick={this.toggleIsShowing}>
                        {this.state.isShowing ? "Cancel" : "Add Bike"}</Button>
                    {
                        this.state.isShowing ?
                            <NewBike
                                newBike={this.newBike}
                                handleChange={this.handleChange}
                                bike={this.state.bike}
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