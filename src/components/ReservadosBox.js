import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'

import ReservadosForm from './ReservadosForm'
import ReservadosList from './ReservadosList'

export default class ReservadosBox extends React.Component {
	
	constructor() {
		super()
	}

	onSubmitListarVuelos(ev) {
		ev.preventDefault()
		let recibido = $(ev.target).serializeArray()
		var todo = this.props.data
		console.log(todo)
		var filteredData = [];
		var cont = 0

		for (var i = 0; i < todo.length; i++) {
			if(todo[i].cedula == recibido[0].value) {
				filteredData[cont] = todo[i]
				cont++
				filteredData.push(i);
			}
		}
		
		const OnSubmitTest = React.createClass({
	        render: function() {
	        	return(
	        		<div class="consult"><ReservadosList data = { filteredData }/></div>
				)
	    	}
		});
		ReactDOM.render(<OnSubmitTest />, document.getElementById('appReservados'));	
	}

	render() {
		return(
			<div class="consult"><ReservadosForm onSubmit = { this.onSubmitListarVuelos.bind(this) } /></div>
		)
	}
}
