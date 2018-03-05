import React from 'react'

import Reservar from './Reservar'

const CSSTransitionGroup = require('react-addons-css-transition-group')

export default class ReservarList extends React.Component {
	 
	constructor() {
		super()
	}

	render() {
		console.log('Desde ReservarList' + this.props.data)
		let all_reservar = this.props.data.map((reservar) => {
			return ( <Reservar key={reservar.id} nombre={reservar.nombre} cedula={reservar.cedula} origen={reservar.origen} destino={reservar.destino} fechaSalida={reservar.fechaSalida} /> )
		})
		
		return(
			<div class="vuelosList">
				<CSSTransitionGroup transitionName='vuelos' transitionEnterTimeout={2500} transitionLeaveTimeout={800}>
					{ all_reservar }
				</CSSTransitionGroup>
			</div>
		)
	}
}
