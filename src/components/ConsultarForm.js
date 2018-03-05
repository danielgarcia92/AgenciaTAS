import React from 'react'

export default class ConsultarForm extends React.Component {
	
	constructor() {
		super()
	}

	render(){
		return(
			<form onSubmit = { this.props.onSubmit } class="consultarForm">
				<h1><center>Consultar Vuelos</center></h1>
				<input class='form-control' type="text" name="origen" placeholder="Ciudad de origen" required/>
				<input class='form-control' type="text" name="destino" placeholder="Ciudad de destino" required/>
				<input type="hidden" name="id" value={ Date.now() } />
				<br/>
				<input class="btn btn-primary form-control" type="submit" value="Enviar" />
				<br/><br/>
			</form>
		)
	}
}
