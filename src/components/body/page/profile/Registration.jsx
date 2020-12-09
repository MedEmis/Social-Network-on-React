import React, { useState } from 'react'
import HeroInfo from './HeroInfo';
import { pageMove } from "./../../../../App.js"
import { Link } from 'react-router-dom';
import 'materialize-css';





function Registration(props) {
	const [userName, setUserName] = useState(null)
	const [userdateOfbirth, setdateOfbirth] = useState(null)
	const [userCity, setUserCity] = useState(null)
	const [userEmail, setUserEmail] = useState(null)
	const [userWebsite, setUserWebsite] = useState(null)
	const [userAvatar, setUserAvatar] = useState(null)
	const [userPassword, setUserPassword] = useState(null)
	let userPath = ''
	let userInfo = {
		userName: userName,
		userdateOfbirth: userdateOfbirth,
		userCity: userCity,
		userEmail: userEmail,
		userWebsite: userWebsite,
		userAvatar: userAvatar,
		userPassword: userPassword
	}
	const infoPreviev = (event) => {
		event.preventDefault()
		switch (event.target.attributes.name.value) {
			case "name":
				setUserName(event.target.value)
				break;
			case "birthdate":
				setdateOfbirth(event.target.value)
				break;
			case "city":
				setUserCity(event.target.value)
				break;
			case "email":
				setUserEmail(event.target.value)
				break;
			case "password":
				setUserPassword(event.target.value)
				break;
			case "site":
				setUserWebsite(event.target.value)
				break;
			case "avatar":
				setUserAvatar(event.target.value)
				break;
			default:
				break;
		}
	}
	if (!props.isUserExist) {
		userPath = "/registration"
	} else {
		userPath = "/src/components/body/page/profile/Profile"
	}
	console.log("isUser exist", props.isUserExist)
	return (
		<div className="body-page__registration">
			<HeroInfo
				name={userName}
				heroPicture={userAvatar}
				birthDate={userdateOfbirth}
				city={userCity}
				webSite={userWebsite}
				email={userEmail}
			/>
			<div className="body-page__registration_box">
				<h1 type="text" className="body-page__registration_title">CREATE YOUR ACCOUNT</h1>
				<div
					action="#" className="body-page__registration_form">
					<div className="input-field col s12">
						<input onInput={(event) => {
							infoPreviev(event)
						}}
							id="name" type="text" name="name" className="reginput validate" />
						<label htmlFor="name">Your name</label>
					</div>
					<div className="input-field col s12">
						<input onInput={(event) => infoPreviev(event)}
							id="avatar" type="url" name="avatar" className="reginput validate" />
						<label htmlFor="avatar">Here you can add link to your avatar</label>
					</div>
					<div className="input-field col s12">
						<input onInput={(event) => infoPreviev(event)}
							id="date" type="text" name="birthdate" className="reginput validate"
							onFocus={(event) => event.target.type = "date"}
							onBlur={(event) => event.target.type = "text"}
						/>
						<label htmlFor="date">Your date of birth</label>
					</div>
					<div className="input-field col s12">
						<input onInput={(event) => infoPreviev(event)}
							id="city" type="text" name="city" className="reginput validate" />
						<label htmlFor="city">Your city of residence</label>
					</div>
					<div className="input-field col s12">
						<input onInput={(event) => infoPreviev(event)}
							id="site" type="text" name="site" className="reginput validate" />
						<label htmlFor="site">Your Web site, if some</label>
					</div>
					<div className="input-field col s12">
						<input onInput={(event) => infoPreviev(event)}
							id="email" type="email" name="email" className="reginput validate" />
						<label htmlFor="email">Your e-mail, it will be your login</label>
					</div>
					<div className="input-field col s12">
						<input onInput={(event) => infoPreviev(event)}
							id="password" type="text" name="password" className="reginput validate" />
						<label htmlFor="password">Your password</label>
					</div>
					<Link
						onClick={(event) => {
							props.userCreation(userInfo)
							pageMove(event)
						}
						}
						to={userPath}//if such login already exist, we will stay on registration page
						// to={isUserExist ?      userPath :      registration}//if such login already exist, we will stay on registration page
						type="button" className="body-page__authorization_button"
					>DONE!</Link>
				</div>
			</div>
		</div >
	);
}
export default Registration;