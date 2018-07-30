import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Modal from 'react-responsive-modal'

class Navbar extends Component {
  state = {
    zipcode: '',
    weather: {},
    open: false
  }

  onOpenModal = async () => {
    try {
      const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipcode},us&APPID=540c4ac773833f7a0b5e372dfdeba337&units=imperial`)
      this.setState({ weather: res.data, open: true })
    } catch (err) {
      console.log(err)
      alert("Zip code not found - try again..")
    }
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  showWeather() {

    alert(this.weather.city.name)
    this.setState({ modalIsShowing: false })
  }

  handleChange = (event) => {
    const fieldValue = event.target.value
    this.setState({ zipcode: fieldValue })
  }

  render() {
    const { open } = this.state
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Let's Ride</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/" >Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/allrides">Rides</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/allbikes">Bikes</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              placeholder="Zip code"
              type="text"
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.handleChange}
            />
          </form>
          <button className="btn btn-secondary my-2 my-sm-0" onClick={this.onOpenModal}>Show Weather</button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <h2>{this.state.weather.name}</h2>
            <h5>Current Conditions</h5>
            <hr />
            <p>Temp: {this.state.weather.main ? this.state.weather.main.temp : null}</p>
            <p>Main: {this.state.weather.weather ? this.state.weather.weather[0].main : null}</p>
            <p>Details: {this.state.weather.weather ? this.state.weather.weather[0].description : null}</p>
          </Modal>
        </div>
      </nav>
    );
  }
}

export default Navbar