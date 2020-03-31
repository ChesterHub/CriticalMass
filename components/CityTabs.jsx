import React, {Component} from 'react'

export default class CityTabs extends Component {
	constructor(props) {
		super(props)
	}
	render(){
		return (
			<div className="nav-tabs">
				{
					this.props.cities.map(city => {
						return <div 
									className="city-tab" 
									onClick={()=>{this.props.changeCity(city.section)}}
								>
									{city.label}
								</div>
					})
				}
			</div>
		)
	}
}