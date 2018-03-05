import React from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'

import ReservadosBox from '../components/ReservadosBox'
import ReservadosStores from '../stores/VuelosStores'
import ReservadosActions from '../actions/VuelosActions'

@ReactMixin.decorate(Reflux.connect(ReservadosStores, 'reservados'))
export default class Reservados extends React.Component {
	
	constructor() {
		super()
	}

	componentDidMount() {
		ReservadosActions.listarVuelos()
	}

	render() {
		document.getElementById('appConsultar').innerHTML = ''
		document.getElementById("appConsultar").style.display = "none"
		document.getElementById('appReservar').innerHTML = ''
		document.getElementById("appReservar").style.display = "none"
		document.getElementById("appReservados").style.display = "block"
		if (!this.state.reservados) {
			return( <h1>Loading ...</h1> )
		} else {
			return(
				<div class="sign">
					<ReservadosBox data = { this.state.reservados }/>
				</div>
			)
		}

	}
	
}
