import React from 'react'
import 'materialize-css';
import HeroInfo from './HeroInfo';




class Registration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// name: '',
			// dateOfbirth: '',
			// city: '',
			// email: '',
			// website: '',
			// avatar: ''
		};


	}

	infoPreviev = (event) => {
		event.preventDefault()
		switch (event.target.attributes.name.value) {
			case "name":
				this.setState({ name: event.target.value })
				break;
			case "birthdate":
				this.setState({ dateOfbirth: event.target.value })
				break;
			case "city":
				this.setState({ city: event.target.value })
				break;
			case "email":
				this.setState({ email: event.target.value })
				break;
			case "site":
				this.setState({ website: event.target.value })
				break;
			case "avatar":
				this.setState({ avatar: event.target.value })
				break;
			default:
				break;
		}
	}
	render() {
		return (
			<div className="body-page__registration">
				<HeroInfo
					name={this.state.name}
					heroPicture={this.state.avatar}
					birthDate={this.state.dateOfbirth}
					city={this.state.city}
					email={this.state.email}
					webSite={this.state.website}
				/>
				<div className="body-page__registration_box">
					<h1 type="text" className="body-page__registration_title">CREATE YOUR ACCOUNT</h1>
					<div
						action="#" className="body-page__registration_form">
						<div className="input-field col s12">
							<input onInput={(event) => {
								this.infoPreviev(event)
								this.setState({ refresh: true })
							}}
								id="name" type="text" name="name" className="reginput validate" />
							<label htmlFor="name">Your name</label>
						</div>
						<div className="input-field col s12">
							<input onInput={(event) => this.infoPreviev(event)}
								id="date" type="text" name="birthdate" className="reginput validate"
								onFocus={(event) => event.target.type = "date"}
								onBlur={(event) => event.target.type = "text"}
							/>
							<label htmlFor="date">Your date of birth</label>
						</div>
						<div className="input-field col s12">
							<input onInput={(event) => this.infoPreviev(event)}
								id="city" type="text" name="city" className="reginput validate" />
							<label htmlFor="city">Your city of residence</label>
						</div>
						<div className="input-field col s12">
							<input onInput={(event) => this.infoPreviev(event)}
								id="email" type="email" name="email" className="reginput validate" />
							<label htmlFor="email">Your e-mail</label>
						</div>
						<div className="input-field col s12">
							<input onInput={(event) => this.infoPreviev(event)}
								id="site" type="text" name="site" className="reginput validate" />
							<label htmlFor="site">Your Web site, if some</label>
						</div>
						<div className="input-field col s12">
							<input onInput={(event) => this.infoPreviev(event)}
								id="avatar" type="url" name="avatar" className="reginput validate" />
							<label htmlFor="avatar">Here you can add link to your avatar</label>
						</div>
						<button type="button" className="body-page__authorization_button">DONE!</button>
					</div>
				</div>
			</div >
		);
	}
}
export default Registration;