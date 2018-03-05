import Reflux from 'reflux'
import io from 'socket.io-client'

import VuelosActions from '../actions/VuelosActions'

let VuelosStores = Reflux.createStore({
	listenables: [VuelosActions],
	init: function() {
		this.socket = io('http://localhost:3000')
		this.socket.on('data', (data) => {
			this.trigger(data)
		})
	},
	listarVuelos: function() {
		this.socket.emit('leer')
	},
	guardarReserva: function(reservar) {
		this.socket.emit('guardar', reservar)
	}
})

export default VuelosStores
