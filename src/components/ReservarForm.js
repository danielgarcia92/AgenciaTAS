import React from 'react'

export default class ReservarForm extends React.Component {
	
	constructor() {
		super()
	}

	render(){
		return(
			<form onSubmit = { this.props.onSubmit } class="reservarForm">
				<h1><center>Reservar Vuelos</center></h1>
				<input class='form-control' type="text" name="nombre" placeholder="Nombre Completo" required/>
				<input class='form-control' type="number" name="cedula" placeholder="Número de Cédula" required/>
				<input class='form-control' type="text" name="origen" placeholder="Ciudad de origen" required/>
				<input class='form-control' type="text" name="destino" placeholder="Ciudad de destino" required/>
				<input class='form-control' type="date" name="fechaSalida" step="1" min="2018-03-04" max="2020-12-31" required/>
				<input type="hidden" name="id" value={ Date.now() } />
				<br/>
				<input class="btn btn-primary form-control" type="submit" value="Enviar" />
				<br/><br/>
			</form>
		)
	}
}
