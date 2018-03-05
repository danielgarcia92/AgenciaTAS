import React from 'react'

import Consultar from './Consultar'

const CSSTransitionGroup = require('react-addons-css-transition-group')

export default class ConsultarList extends React.Component {
	 
	constructor() {
		super()
	}

	render() {
		if (this.props.data.length < 1) {
			return(
				<div class="vuelos">
					<div class="alert alert-danger">
						<h1><center>No hay vuelos programados para estas ciudades</center></h1>
					</div>
				</div>
			)
		} else {
			let all_consultar = this.props.data.map((consultar) => {
				return ( <Consultar key={consultar.id} nombre={consultar.nombre} cedula={consultar.cedula} origen={consultar.origen} destino={consultar.destino} fechaSalida={consultar.fechaSalida} /> )
			})
			
			return(
				<div class="vuelosList">
					<CSSTransitionGroup transitionName='vuelos' transitionEnterTimeout={2500} transitionLeaveTimeout={800}>
						{ all_consultar }
					</CSSTransitionGroup>
				</div>
			)
		}
	}
}
