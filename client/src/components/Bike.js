import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import Button from "@material-ui/core/Button"

const BikeForm = styled.form`
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
class Bike extends Component {
    state = {
        bike: {
            make: '',
            model: '',
            year: '',
            comments: '',
            photo_url: '',
            trade: '',
            trade_details: '',
            contact: ''
        }
    }
    componentDidMount() {
        this.getBikeInfo()
    }

    getBikeInfo = async () => {
        try {
            const userId = this.props.match.params.userId
            const bikeId = this.props.match.params.bikeId
            const res = await axios.get(`/api/users/${userId}/bikes/${bikeId}`)
            this.setState({ bike: res.data })
            console.log('46 ', this.state.bike.model, '45')
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = (event) => {
        const fieldValue = event.target.name
        const editBike = { ...this.state.bike }
        editBike[fieldValue] = event.target.value
        this.setState({ bike: editBike })
    }

    updateBike = async () => {
        const { userId } = this.props.match.params
        const { bikeId } = this.props.match.params
        const res = await axios.patch(`/api/users/${userId}/bikes/${bikeId}`,
            this.state.bike,
            this.props.history.push(`/`)
        )

    }

    deleteBike = async (bike) => {
        const { userId } = this.props.match.params
        const { bikeId } = this.props.match.params
        axios.delete(`/api/users/${userId}/bikes/${bikeId}`)
        this.props.history.push(`/`)
    }
    catch(err) {
        console.log(err)
    }

    render() {
        const bikeToEdit = (
            <div>
                <CenterDiv>
                    <p>Make: </p>
                    <Card className="local-resource-card">
                        <button onClick={this.deleteBike}>X</button>
                        <BikeForm onSubmit={this.updateBike}>
                            <label>Make: </label>
                            <input
                                type="text"
                                name="make"
                                value={this.state.bike.make}
                                onChange={this.handleChange}
                            />
                            <label>Model: </label>
                            <input
                                type="text"
                                name="model"
                                value={this.state.bike.model}
                                onChange={this.handleChange}
                            />
                            <label>Year: YYYY </label>
                            <input
                                type="date"
                                name="year"
                                value={this.state.bike.year}
                                onChange={this.handleChange}
                            />
                            <label>Comments: </label>
                            <input
                                type="text"
                                name="comments"
                                value={this.state.bike.comments}
                                onChange={this.handleChange}
                            />
                            <label>Photo_url: </label>
                            <input
                                type="text"
                                name="photo_url"
                                value={this.state.bike.photo_url}
                                onChange={this.handleChange}
                            />
                            <label>Trade: </label>
                            <input
                                type="text"
                                name="trade"
                                value={this.state.bike.trade}
                                onChange={this.handleChange}
                            />
                            <label>Trade Details: </label>
                            <input
                                type="text"
                                name="trade_details"
                                value={this.state.bike.trade_details}
                                onChange={this.handleChange}
                            />
                            <Button type="submit">Submit</Button>
                        </BikeForm>

                        <Link to={`/bikes`}>View Bikes</Link>
                    </Card>
                </CenterDiv>
            </div>
        )
        return (
            <Grid container spacing={24} style={{ padding: 24 }}>
                {bikeToEdit}
            </Grid>
        )
    }
}

export default Bike