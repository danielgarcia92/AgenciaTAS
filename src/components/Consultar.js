import React from 'react'

export default class Consultar extends React.Component {
	
	constructor() {
		super()
	}

	render() {
		return (
			<div class="vuelos">
				<div class="alert alert-success">
					<h3> { this.props.origen } --> { this.props.destino } </h3>
					<h5>{ this.props.fechaSalida }</h5>
				</div>
			</div>
		)
	}

}
