import React from 'react'
import './profile.scss';
import topImage from "./../../../../images/page-top.jpg"
import HeroInfo from './HeroInfo';
import heroPicture from './../../../../images/avatar.jpeg'




class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: {
				name: "Name Name",
				dObirth: "20.04.1991",
				city: "Pervomaisk",
				education: "Bachelor",
				webSite: ""
			}
		};

	}
	render() {
		return (
			<>
				<div className="body-page__background"><img src={topImage} alt="topImage"></img></div>
				<HeroInfo heroPicture={heroPicture} name={this.state.userData.name} dObirth={this.state.userData.dObirth}
					city={this.state.userData.city} education={this.state.userData.education} webSite={this.state.userData.webSite} />

			</>
		);
	}
}
export default Profile;