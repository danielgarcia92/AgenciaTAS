import React from 'react'
import { Link } from 'react-router-dom'

const logo = require('../images/logo.png')

export default class Home extends React.Component {
	
	constructor() {
		super()
	}

	render() {
		document.getElementById('appConsultar').innerHTML = ''
		document.getElementById('appReservados').innerHTML = ''
		document.getElementById('appReservar').innerHTML = ''
		return(
			<div class="home">
				<img class='d-block mx-auto' src={ logo } width="30%" alt="Logo" />
				<h1 class='text-center' >Agencia de vuelos Tech and Solve</h1>
				<button class='btn btn-default btn-lg d-block mx-auto'><Link to="reservar" >Reserva tu vuelo ahora</Link></button>
			</div>
		)
	}
}
