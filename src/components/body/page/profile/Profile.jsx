import React from 'react'
import HeroInfo from './HeroInfo';
import HeroContacts from './HeroContacts';
import User404 from './User404';
import topImage from "./../../../../images/page-top.jpg"
import './profile.scss';





function Profile(props) {
	// if ( props.location.currentUserId) {
	// 	 userId =  props.location.currentUserId
	// } else {
	// 	 userId =  props.currentuserid
	// }
	// if (!props.location.propsSearch) return <Redirect to="/src/components/body/page/profile/Profile" />;


	let userBase = props.userBase
	let userId = props.userId
	return (
		userBase.hasOwnProperty(userId)
			? <div className="body-page__hero-page">
				<div className="body-page__background"><img src={topImage} alt="topImage"></img></div>
				<HeroInfo
					userBase={userBase}
					userId={userId}
					name={userBase[userId].name}
					heroPicture={userBase[userId].avatarUrl}
					birthDate={userBase[userId].birthDate}
					city={userBase[userId].city}
					email={userBase[userId].login}
					webSite={userBase[userId].webSite}
				/>
				<HeroContacts
					contactName="contactName"
					userBase={userBase}
					userId={userId}
				/>
			</div>
			: <User404 />
	);
}
export default Profile;