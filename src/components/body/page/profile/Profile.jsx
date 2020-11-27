import React from 'react'
import './profile.scss';
import HeroInfo from './HeroInfo';
import User404 from './User404';
import heroPicture from './../../../../images/avatar.jpeg'




class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.userBase = this.props.userBase
		this.userId = this.props.currentUserId

		// if (this.props.location.currentUserId) {
		// 	this.userId = this.props.location.currentUserId
		// } else {
		// 	this.userId = this.props.currentuserid
		// }

	}

	render() {
		// if (!props.location.propsSearch) return <Redirect to="/src/components/body/page/profile/Profile" />;
		console.log("Profile props", this.props.location)



		return (
			<>
				{
					this.userBase.hasOwnProperty(this.userId)
						? <HeroInfo
							heroPicture={heroPicture}
							name={this.userBase[this.userId].name}
							birthDate={this.userBase[this.userId].birthDate}
							city={this.userBase[this.userId].city}
							education={this.userBase[this.userId].education}
							webSite={this.userBase[this.userId].webSite}
						/>
						: <User404 />
				}
			</>
		);
	}
}
export default Profile;