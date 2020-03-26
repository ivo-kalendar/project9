import React from 'react'
import SeasonDisplay from './seasonDisplay.jsx'
import Spiner from './spiner.jsx'

class Index extends React.Component {
	constructor(props) {
		super(props)
		this.state = { lat: null, errMsg: '' }
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => {
				this.setState({ lat: position.coords.latitude })
			},
			err => this.setState({ errMsg: err.message })
		)
	}

	render() {
		if (!this.state.lat && !this.state.errMsg) {
			return <Spiner message="Ве молиме дозволете пристап до вашата Локација!" />
		} else if (this.state.errMsg && !this.state.lat) {
			return (
				<div className="container">
					<h1 className="red alert">Error: {this.state.errMsg}</h1>
				</div>
			)
		} 

		return (
			<SeasonDisplay lat={this.state.lat} />
		)
	}
}

export default Index