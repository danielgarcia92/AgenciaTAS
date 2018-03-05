import React from 'react'

import Reservados from './Consultar'

const CSSTransitionGroup = require('react-addons-css-transition-group')

export default class ReservadosList extends React.Component {
	 
	constructor() {
		super()
	}

	render() {
		if (this.props.data.length < 1) {
			return(
				<div class="vuelos">
					<div class="alert alert-danger">
						<h1><center>El número de cédula no registra en la base de datos</center></h1>
					</div>
				</div>
			)
		} else {
			let all_reservados = this.props.data.map((reservados) => {
				return ( <Reservados key={reservados.id} nombre={reservados.nombre} cedula={reservados.cedula} origen={reservados.origen} destino={reservados.destino} fechaSalida={reservados.fechaSalida} /> )
			})
			
			return(
				<div class="vuelosList">
					<CSSTransitionGroup transitionName='vuelos' transitionEnterTimeout={2500} transitionLeaveTimeout={800}>
						{ all_reservados }
					</CSSTransitionGroup>
				</div>
			)
		}
	}
}
