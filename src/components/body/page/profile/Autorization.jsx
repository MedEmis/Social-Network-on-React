import React, { useState } from 'react';
import { Form, Field } from 'react-final-form'
import { Link } from 'react-router-dom';
import { pageMove } from "./../../../../App.js"
import 'materialize-css';



const Authorization = ({ GetCaptcha, captcha, Authorization }) => {
	return (
		<div className="body-page__authorization">
			<div className="body-page__authorization_box">
				<h1 type="text" className="body-page__authorization_title"><b>WELCOME</b></h1>
				<h1 type="text" className="body-page__authorization_title">Here you can log in to your account or create a new one!</h1>
				<AuthorizationForm GetCaptcha={GetCaptcha} captcha={captcha} Authorization={Authorization} />
			</div>
		</div>
	);
}
function AuthorizationForm({ GetCaptcha, inputCaptcha, captcha, Authorization }) {
	const [visibility, setVisibility] = useState(true)
	const visible = <img src="https://img.icons8.com/material-outlined/24/000000/visible--v2.png" alt="visible" />
	const unVisible = <img src="https://img.icons8.com/material-outlined/24/000000/closed-eye.png" alt="unVisible" />
	//Authorization(event.email, event.password, event.rememberMe, inputCaptcha)
	return (
		<>
			<Form
				onSubmit={(event) => {
					console.log(event)
					Authorization(event.email, event.password, event.rememberMe, event.captcha, event.hardcodedUser)
				}}
				render={({ handleSubmit, form, submitting, pristine }) => (
					<form onSubmit={handleSubmit}>
						<div className="input-field col s12">
							<p className="material-icons prefix" style={{ fontSize: 22 }}>&#x1F582;</p>
							<Field id="email" type="email" name="email" component="input" required className="body-page__authorization_input validate" />
							<label htmlFor="email">Your Email</label>
						</div>
						<div className="input-field col s12">
							<p className="material-icons prefix" style={{ cursor: "pointer" }} onClick={() => setVisibility(!visibility)} > {visibility ? unVisible : visible} </p>
							<Field id="password" type={visibility ? "password" : "text"} name="password" component="input" required autoComplete="on" className="body-page__authorization_input validate" />
							<label htmlFor="password">Password</label>
						</div>
						<label>
							<Field name="rememberMe" id="rememberMe" component="input" type="checkbox" className="filled-in" />
							<span style={{ marginRight: 30 }}>Remember me</span>

						</label>
						<label>
							<Field name="hardcodedUser" id="hardcodedUser" component="input" type="checkbox" className="filled-in" />
							<span>Hardcoded user</span>
						</label>
						{
							captcha && (
								<div className="captcha-block" >
									<img src={captcha} alt="captcha" />
									<div className="input-field col s3">
										<p className="captcha-block__captcha-reload material-icons prefix " onClick={() => GetCaptcha()}
										>&#8634;</p>
										<label htmlFor="captcha">enter symbols</label>
										<Field name="captcha" type="text" id="captcha" style={{ width: 155 }} component="input" type="text" />
									</div>
								</div>
							)
						}
						<div className="body-page__authorization_buttons">
							<button type="submit" disabled={submitting || pristine} className="body-page__authorization_button ">Log in</button>
							<button onClick={form.reset} type="reset" className="body-page__authorization_button ">Reset</button>
							<Link to="/registration" onClick={pageMove} type="button" className="body-page__authorization_button">...or register</Link>
						</div>
					</form>
				)}
			/>
			<HardcodedUsers />
		</>
	)
}

// const CaptchaBlock = ({ input, ...rest }) => {
// 	return (
// 		<div className="captcha-block" >
// 			<img src={captcha} alt="captcha" />
// 			<div className="input-field col s3">
// 				<p className="captcha-block__captcha-reload material-icons prefix " onClick={() => refreshCaptcha()}
// 				>&#8634;</p>
// 				<label htmlFor="captcha">enter symbols</label>
// 				<input name="captcha" type="text" id="captcha" style={{ width: 155 }} />
// 			</div>
// 		</div>
// 	)
// }
export default Authorization;

const HardcodedUsers = () => {
	return (
		<div className="hard-coded-users">
			<h2>Hardcoded users</h2>
			<h3>To log in as hardcoded user,<br/> don't forget to press on <br/> "Hardcoded user" check box  </h3>
			<ul>
				<li>
					<p>"login": "AAA@111.cc"</p>
					<p>"password": "aaa111aaa"</p>
				</li>
				<li>
					<p>"login": "BB@B111"</p>
					<p>"password": "bbb111bbb"</p>
				</li>
				<li>
					<p>"login": "CCC@111"</p>
					<p>"password": "ccc111ccc"</p>
				</li>
				<li>
					<p>"login": "DDD@111",</p>
					<p>"password": "ddd111ddd"</p>
				</li>
				<li>
					<p>"login": "EEE@111",</p>
					<p>"password": "eee111eee"</p>
				</li>
				<li>
					<p>"login": "FFF@111",</p>
					<p>"password": "fff111fff"</p>
				</li>
			</ul>
		</div>
	)
}



//ЗАХАРДКОЖЕННЫЕ ЮЗЕРЫ НЕ ЛОГИНЯТЬСЯ

//НУЖНО ДОБАВИТЬ ПРОВЕРКУ НА РАБОТУ С СЕРВЕРОМ ИЛИ ЗАХАРДКОЖЕННЫМИ ЮЗЕРАМИ 