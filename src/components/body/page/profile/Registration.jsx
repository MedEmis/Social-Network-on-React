import React, { useState } from 'react'
import HeroInfo from './HeroInfo';
import { pageMove } from "./../../../../App.js"
import { Link } from 'react-router-dom';
import 'materialize-css';
import BoundedInput from './../../inputValidation';
import { Form, Field } from 'react-final-form'





function Registration(props) {
	const [userName, setUserName] = useState(null)
	const [userdateOfbirth, setdateOfbirth] = useState(null)
	const [userCity, setUserCity] = useState(null)
	const [userEmail, setUserEmail] = useState(null)
	const [userWebsite, setUserWebsite] = useState(null)
	const [userAvatar, setUserAvatar] = useState(null)
	const [userPassword, setUserPassword] = useState(null)
	let userPath = ''
	let userData = {
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
		switch (event.target.id) {
			// switch (event.target.attributes.name) {
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
	// console.log("isUser exist", props.isUserExist)
	// if (props.isUserExist === true) {
	// 	userPath = "/registration"
	// } else if (!props.isUserExist === false) {
	// 	userPath = "/Profile"
	// }
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
				<form onSubmit={(event) => {
					event.preventDefault()
					console.log(event)
				}}
					action="#" className="body-page__registration_form">
					<BoundedInput
						infoPreviev={infoPreviev}
						id="name" type="text" name="name" min="5" max="50"
						labelFor="name" label="Your name" required={true}
						imgSrs={"https://img.icons8.com/material/24/000000/contacts--v1.png"}
					/>
					<BoundedInput
						infoPreviev={infoPreviev}
						id="avatar" type="url" name="avatar" max="250"
						labelFor="avatar" label="Here you can add link to your avatar"
						imgSrs={"https://img.icons8.com/fluent-systems-filled/24/000000/user-male.png"}
					/>
					<div className="input-field col s12">
						<i className="material-icons prefix"><img alt="icon" src="https://img.icons8.com/material/24/000000/calendar--v1.png" /></i>
						<input onInput={(event) => infoPreviev(event)}
							id="date" type="text" name="birthdate" className="reginput validate"
							onFocus={(event) => event.target.type = "date"}
							onBlur={(event) => event.target.type = "text"}
						/>
						<label htmlFor="date">Your date of birth</label>
					</div>
					<BoundedInput
						infoPreviev={infoPreviev}
						id="city" type="text" name="city" max="130"
						labelFor="city" label="Your city of residence"
						imgSrs={"https://img.icons8.com/fluent-systems-filled/24/000000/city-buildings.png"}
					/>
					<BoundedInput
						infoPreviev={infoPreviev}
						id="site" type="url" name="site" max="130"
						labelFor="site" label="Your Web site, if some"
						imgSrs={"https://img.icons8.com/fluent-systems-filled/24/000000/domain.png"}
					/>
					<BoundedInput
						infoPreviev={infoPreviev}
						id="email" type="email" name="email" max="130" required={true}
						labelFor="email" label="Your e-mail, it will be your login"
						imgSrs={"https://img.icons8.com/fluent-systems-filled/24/000000/filled-message.png"}
					/>
					<BoundedInput
						infoPreviev={infoPreviev}
						id="password" type="password" name="password" max="130"
						labelFor="password" label="Your password" required={true}
						imgSrs={"https://img.icons8.com/material/24/000000/lock--v3.png"}
					/>
					<Link to="/" type="button" className="body-page__authorization_button" onClick={(event) => pageMove(event)} >Back</Link>
					<button onClick={(event) => {
						props.userCreation(userData)
						pageMove(event)
					}} type="submit" className="body-page__authorization_button"
					>DONE!</button>
				</form>
			</div>
		</div >
	);
}
export default Registration;









{/* <Link
						onClick={(event) => {
							props.userCreation(userData)
							pageMove(event)
						}
						}
						to={userPath}//if such login already exist, we will stay on registration page
						// to={isUserExist ?      userPath :      registration}//if such login already exist, we will stay on registration page
						type="button" className="body-page__authorization_button"
					>DONE!</Link> */}