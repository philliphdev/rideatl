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

class AllBikes extends Component {
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
        }
    }

    componentDidMount() {
        this.getAllBikes()
    }

    getAllBikes = async () => {
        const userId = this.props.match.params.userId
        this.setState({ userId })
        try {
            const res = await axios.get(`/api/allbikes`)
            this.setState({ bikes: res.data })
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        const listOfBikes = this.state.bikes.map((bike, index) => {
            return (
                <Card className="ui grid form-group card text-white bg-primary mb-3 local-resource-card" key={index}>
                    <div className="card text-white bg-primary mb-3">
                        <div className="card-header">
                                <h3 key={bike.id}>{bike.year} - {bike.make} - {bike.model}</h3>
                            <div>
                                <img className="local-user-img" src={bike.photo_url} alt="user" />
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
                    <h1>Bikes</h1>
                    <Grid container spacing={24} style={{ padding: 24 }}>
                        {listOfBikes}
                    </Grid>
                </DivContainer>
            </Grid>
        )
    }
}
export default AllBikes