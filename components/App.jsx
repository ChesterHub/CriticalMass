import React, {Component} from 'react'
import CityTabs from './CityTabs.jsx'

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
		}, ()=>{
			console.log("new value", this.state.selectedCity)
		})
	}
	render() {
		console.log("this.props", this.props)
		return (
			<div className="main-app">
				<CityTabs 
					cities={this.props.data.cities}
					changeCity={this.changeCity}
					selectedCity={this.state.selectedCity}
				/>
			</div>
		)
	}
}