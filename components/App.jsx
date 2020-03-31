import React, {Component} from 'react'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedCity: ""
		}
		this.changeCity = this.changeCity.bind(this)
	}
	changeCity(selectedCity) {
		this.setState({
			selectedCity
		})
	}
	render() {
		let data = JSON.parse(this.props.data)
		console.log("this.props", this.props)
		return (
			<div className="main-app">
				Oh yea, the main app
			</div>
		)
	}
}