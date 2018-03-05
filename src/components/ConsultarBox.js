import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'

import ConsultarForm from './ConsultarForm'
import ConsultarList from './ConsultarList'

export default class ConsultarBox extends React.Component {
	
	constructor() {
		super()
	}


	onSubmitListarVuelos(ev) {
		ev.preventDefault()
		let recibido = $(ev.target).serializeArray()
		var todo = this.props.data
		var filteredData = [];
		var cont = 0

		for (var i = 0; i < todo.length; i++) {
			if(todo[i].origen == recibido[0].value && todo[i].destino == recibido[1].value) {
				filteredData[cont] = todo[i]
				cont++
				filteredData.push(i);
			}
		}
		
		const OnSubmitTest = React.createClass({
	        render: function() {
	        	return(
	        		<div class="consult"><ConsultarList data = { filteredData }/></div>
				)
	    	}
		});
		ReactDOM.render(<OnSubmitTest />, document.getElementById('appConsultar'));	
	}

	render() {
		return(
			<div class="consult"><ConsultarForm onSubmit = { this.onSubmitListarVuelos.bind(this) } /></div>
		)
	}
}
