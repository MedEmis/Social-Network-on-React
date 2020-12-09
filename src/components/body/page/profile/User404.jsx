import React from 'react'
import './profile.scss';
import error from "./../../../../images/404erorr.png"

function User404() {
	return (
		<div className="body-page__hero-404">
			<div className="body-page__hero-404_picture"><img src={error} alt="Error 404"></img></div>
			<div className="body-page__hero-404_text">Sorry, such user was not found... </div>
		</div>
	);
}
export default User404;