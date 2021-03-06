import React, {Component} from 'react'

export default class CityTabs extends Component {
	constructor(props) {
		super(props)
		this.moveSelectedDash = this.moveSelectedDash.bind(this)
	}
	componentDidMount() {
		this.props.changeCity(this.props.cities[0].section)
		window.addEventListener("resize", ()=>{this.moveSelectedDash(this.props.selectedCity)})
	}
	componentWillUnmount(){
		window.removeEventListener("resize", ()=>{this.moveSelectedDash(this.props.selectedCity)})
	}
	componentWillReceiveProps(nextProps){
		if (this.props.selectedCity !== nextProps.selectedCity) {
			this.moveSelectedDash(nextProps.selectedCity)
		}
	}
	moveSelectedDash(newCity){
		let element = this.refs[newCity]
		let dash = this.refs.dash

		let width = element.getBoundingClientRect().width;
	  let height = element.getBoundingClientRect().height;
	  let left = element.getBoundingClientRect().left + window.pageXOffset;
	  let top = element.getBoundingClientRect().top  + window.pageYOffset;

		dash.style.width = `${width}px`
	  dash.style.height = `${height}px`
	  dash.style.left = `${left}px`
	  dash.style.top = `${top}px`
	}
	render(){
		return (
			<div className="nav-tabs">
				{ this.props.cities.map(city => {
					return <div 
						key={city.section}
						className={`city-tab ${this.props.selectedCity === city.section?"selected":""}`} 
						onClick={()=>{this.props.changeCity(city.section)}}
						ref={city.section}
					 >
						{city.label}
					 </div>
				})}
				<div className="selected-dash" ref="dash"></div>
			</div>
		)
	}
}