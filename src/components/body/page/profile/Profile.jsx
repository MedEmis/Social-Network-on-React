import React from 'react'
import './profile.scss';
import HeroInfo from './HeroInfo';
import User404 from './User404';
import heroPicture from './../../../../images/avatar.jpeg'
import userBase from './../../../../users.json'
import { currentUserId } from './../../../body/Body.js'




class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.users = userBase
		if (this.props.location.currentUserId) {
			this.userId = this.props.location.currentUserId || this.props.location.UserId
		} else {
			this.userId = currentUserId
		}
		console.log(this.props.location.currentUserId)
	}

	render() {
		// if (!props.location.propsSearch) return <Redirect to="/src/components/body/page/profile/Profile" />;



		return (
			<>
				{
					this.users.hasOwnProperty(this.userId)
						? <HeroInfo
							heroPicture={heroPicture}
							name={this.users[this.userId].name}
							birthDate={this.users[this.userId].birthDate}
							city={this.users[this.userId].city}
							education={this.users[this.userId].education}
							webSite={this.users[this.userId].webSite}
						/>
						: <User404 />
				}
			</>
		);
	}
}
export default Profile;