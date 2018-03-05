import React from 'react'

export default class CommentForm extends React.Component {
	constructor(){
		super()
	}

	render(){
		return(
			<form onSubmit = { this.props.onSubmit } class="commentForm">
				<input class='form-control' type="text" name="author" placeholder="Su nombre" />
				<input class='form-control' type="text" name="text" placeholder="Firma!" />
				<input type="hidden" name="id" value={ Date.now() } />
				<br/>
				<input class="btn btn-primary form-control" type="submit" value="Enviar" />
				<br/><br/>
			</form>
		)
	}
}
