import React, {Component} from 'react'

export default class App extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		let data = JSON.parse(this.props.data)
		console.log("this.props", this.props)
		return (
			<div>

				Oh yea, the main app
			</div>
		)
	}
}