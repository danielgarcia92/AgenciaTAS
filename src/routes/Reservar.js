import React from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'

import ReservarBox from '../components/ReservarBox'
import ReservarStores from '../stores/VuelosStores'
import ReservarActions from '../actions/VuelosActions'

@ReactMixin.decorate(Reflux.connect(ReservarStores, 'reservar'))
export default class Reservar extends React.Component {
	
	constructor() {
		super()
	}

	componentDidMount() {
		ReservarActions.listarVuelos()
	}

	render() {
		document.getElementById('appConsultar').innerHTML = ''
		document.getElementById("appConsultar").style.display = "none"
		document.getElementById('appReservados').innerHTML = ''
		document.getElementById("appReservados").style.display = "none"
		document.getElementById("appReservar").style.display = "block"
		if (!this.state.reservar) {
			return( <h1>Loading ...</h1> )
		} else {
			return(
				<div class="sign">
					<ReservarBox data = { this.state.reservar }/>
				</div>
			)
		}
	
	}
	
}
