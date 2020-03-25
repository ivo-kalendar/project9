import React from 'react'
import SeasonDisplay from './seasonDisplay.jsx'

class Index extends React.Component {
	constructor(props) {
		super(props)

		this.state = { lat: null, long: null, errMsg: '' }

		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({ 
					lat: position.coords.latitude, 
					long: position.coords.longitude 
				})
			},
			err => {
				this.setState({ errMsg: err.message })
			}
		)
	}

	render() {
		return (
			<div className="test">
				<SeasonDisplay />
				{
					!this.state.lat && !this.state.errMsg
					? 	<h1 className="green alert">
							Loading<span className="red">!!!</span>
						</h1>
					: 	this.state.errMsg && !this.state.lat
					? 	<h1 className="red alert">Error: {this.state.errMsg}</h1>
					: 	<div className="green alert">
							<h1>Latitude: {this.state.lat}</h1>
							<h1>Longitude: {this.state.long}</h1>
						</div>
				}
			</div>
		)

	}
}

export default Index