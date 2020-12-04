import React from 'react'
import 'materialize-css';




class Authorization extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};

	}
	getFormData = (event) => {
		event.preventDefault()
		let authForm = React.createRef()
		console.log(event.target[0].value)
		console.log(event.target[1].value)
		
	}
	render() {
		return (
			<div className="body-page__authorization">
				<div className="body-page__authorization_box">
					<form onSubmit={(event) => this.getFormData(event)} ref="authForm"
						action="#" className="body-page__authorization_form">
						<h1 type="text" className="body-page__authorization_title">TITLE</h1>
						<div className="input-field col s12">
							<input id="email" type="email" name="email" className="body-page__authorization_input validate" />
							<label htmlFor="email">Your Email</label>
						</div>
						<div className="input-field col s12">
							<input id="password" type="password" name="password" className="body-page__authorization_input validate" />
							<label htmlFor="password">Password</label>
						</div>
						<div className="body-page__authorization_buttons">
							<button type="submit" className="body-page__authorization_button ">Log in</button>
							<button type="button" className="body-page__authorization_button">...or register</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
export default Authorization;