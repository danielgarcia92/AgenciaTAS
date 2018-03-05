import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'

import ReservarForm from './ReservarForm'
import ReservarList from './ReservarList'

import ReservarActions from '../actions/VuelosActions'

export default class ReservarBox extends React.Component {
	
	constructor() {
		super()
	}

	onSubmitListarVuelos(ev) {
		ev.preventDefault()

		let data = $(ev.target).serializeArray()
		let reservar = {
			id: 		 data[5].value,
			nombre: 	 data[0].value,
			cedula: 	 data[1].value,
			origen: 	 data[2].value,
			destino: 	 data[3].value,
			fechaSalida: data[4].value,
		}
		ReservarActions.guardarReserva(reservar)

		var todo = this.props.data
		var filteredData = [];
		filteredData[0] = reservar
		const OnSubmitTest = React.createClass({
	        render: function() {
	        	return(
	        		<div class="consult"><ReservarList data = { filteredData }/></div>
				)
	    	}
		});
		ReactDOM.render(<OnSubmitTest />, document.getElementById('appReservar'));	
	}

	render() {
		return(
			<div class="vuelosBox"><ReservarForm onSubmit={ this.onSubmitListarVuelos.bind(this) } /></div>
		)
	}
}
