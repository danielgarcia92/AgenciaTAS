import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (

	<header>
		<ul class="nav justify-content-center">
			<li class="nav-item">
				<Link class="nav-link" to='/'>Home</Link>
			</li>
			<li class="nav-item">
				<Link class="nav-link" to='/consultar'>Consultar</Link>
			</li>
			<li class="nav-item">
				<Link class="nav-link" to='/reservados'>Reservados</Link>
			</li>
			<li class="nav-item">
				<Link class="nav-link" to='/reservar'>Reservar</Link>
			</li>
		</ul>
	</header>
)

export default Header
