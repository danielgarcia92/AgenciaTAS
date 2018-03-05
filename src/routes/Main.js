import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home       from './Home'
import Consultar  from './Consultar'
import Reservados from './Reservados'
import Reservar   from './Reservar'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={ Home }/>
			<Route path='/consultar' component={ Consultar }/>
			<Route path='/reservados' component={ Reservados }/>
			<Route path='/reservar' component={ Reservar }/>
		</Switch>
	</main>
)

export default Main
