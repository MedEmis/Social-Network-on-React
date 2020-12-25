import React from 'react';
import { Form, Field} from 'react-final-form'
import { Link } from 'react-router-dom';
import { pageMove } from "./../../../../App.js"
import 'materialize-css';



const Authorization = (props) => {
	return (
		<div className="body-page__authorization">
			<div className="body-page__authorization_box">
				<h1 type="text" className="body-page__authorization_title"><b>WELCOME</b></h1>
				<h1 type="text" className="body-page__authorization_title">Here you can log in to your account or create a new one!</h1>
				<AuthorizationForm Authorization={props.Authorization} />
			</div>
		</div>
	);
}

const AuthorizationForm = (props) => (
	<Form
		onSubmit={(event) => props.Authorization(event.email, event.password, event.rememberMe)}
		render={({ handleSubmit, form, submitting, pristine, values }) => (
			<form onSubmit={handleSubmit}>
				<div className="input-field col s12">
					<Field id="email" type="email" name="email" component="input" required className="body-page__authorization_input validate" />
					<label htmlFor="email">Your Email</label>
				</div>
				<div className="input-field col s12">
					<Field id="password" type="password" name="password" component="input" required autoComplete="on" className="body-page__authorization_input validate" />
					<label htmlFor="password">Password</label>
				</div>
				<label>
					<Field name="rememberMe" id="rememberMe" component="input" type="checkbox" className="filled-in" />
					<span>Remember me</span>
				</label>
				<div className="body-page__authorization_buttons">
					<button type="submit" disabled={submitting || pristine} className="body-page__authorization_button ">Log in</button>
					<button onClick={form.reset} type="reset" className="body-page__authorization_button ">Reset</button>
					<Link to="/registration" onClick={pageMove} type="button" className="body-page__authorization_button">...or register</Link>
				</div>
			</form>
		)}
	/>
)

export default Authorization;