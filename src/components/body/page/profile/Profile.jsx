import React from 'react'
import HeroInfo from './HeroInfo';
import HeroContacts from './HeroContacts';
import User404 from './User404';
import topImage from "./../../../../images/page-top.jpg"
import './profile.scss';
import Registration from './Registration';





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
		//console.log("Profile props", this.props)



		return (
			<>
				{ this.userBase.hasOwnProperty(this.userId)
					? <div className="body-page__hero-page">
						<div className="body-page__background"><img src={topImage} alt="topImage"></img></div>
						<HeroInfo
							userBase={this.userBase}
							userId={this.userId}
							name={this.userBase[this.userId].name}
							heroPicture={this.userBase[this.userId].avatarUrl}
							birthDate={this.userBase[this.userId].birthDate}
							city={this.userBase[this.userId].city}
							education={this.userBase[this.userId].education}
							webSite={this.userBase[this.userId].webSite}
						/>
						<HeroContacts
							contactName="contactName"
							userBase={this.userBase}
							userId={this.userId}
						/>
					</div>
					: <User404 />
				}
			</>
		);
	}
}
export default Profile;