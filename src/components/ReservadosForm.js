import React from 'react'

export default class ReservadosForm extends React.Component {
	
	constructor() {
		super()
	}

	render(){
		return(
			<form onSubmit = { this.props.onSubmit } class="reservadosForm">
				<h1><center>Consultar Vuelos por número de cédula</center></h1>
				<input class='form-control' type="text" name="cedula" placeholder="Número de cédula" required/>
				<br/>
				<input class="btn btn-primary form-control" type="submit" value="Enviar" />
				<br/><br/>
			</form>
		)
	}
}
