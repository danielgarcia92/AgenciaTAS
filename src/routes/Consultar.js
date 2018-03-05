import React from 'react'
import ReactMixin from 'react-mixin'
import Reflux from 'reflux'

import ConsultarBox from '../components/ConsultarBox'
import ConsultarStores from '../stores/VuelosStores'
import ConsultarActions from '../actions/VuelosActions'

@ReactMixin.decorate(Reflux.connect(ConsultarStores, 'consultar'))
export default class Consultar extends React.Component {
	
	constructor() {
		super()
	}

	componentDidMount() {
		ConsultarActions.listarVuelos()
	}

	render() {
		document.getElementById('appReservar').innerHTML = ''
		document.getElementById("appReservar").style.display = "none"
		document.getElementById('appReservados').innerHTML = ''
		document.getElementById("appReservados").style.display = "none"
		document.getElementById("appConsultar").style.display = "block"
		if (!this.state.consultar) {
			return( <h1>Loading ...</h1> )
		} else {
			return(
				<div class="sign">
					<ConsultarBox data = { this.state.consultar }/>
				</div>
			)
		}

	}
	
}
