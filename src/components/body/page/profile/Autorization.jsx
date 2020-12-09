import React from 'react'
import 'materialize-css';
import { Link } from 'react-router-dom';
import { pageMove } from "./../../../../App.js"
import { USER_LOG_INactionCreator } from './../../../../redux/userBaseReducer';





function Authorization(props) {
	return (
		<div className="body-page__authorization">
			<div className="body-page__authorization_box">
				<form onSubmit={(event) => {
					props.dispatch(USER_LOG_INactionCreator(event))
					event.preventDefault()
					pageMove(event)
				}
				}
					action="" className="body-page__authorization_form">
					<h1 type="text" className="body-page__authorization_title"><b>WELCOME</b></h1>
					<h1 type="text" className="body-page__authorization_title">Here you can log in to your account or create a new one!</h1>
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
						<Link to="/registration"
							onClick={pageMove}
							type="button" className="body-page__authorization_button">...or register</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
export default Authorization;