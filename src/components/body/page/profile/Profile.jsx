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
	let user = props.userBase.filter(item => item.userId === userId)
	return (
		user
			? <div className="body-page__hero-page">
				<div className="body-page__background"><img src={topImage} alt="topImage"></img></div>
				<HeroInfo
					userBase={userBase}
					userId={userId}
					name={user[0].name}
					heroPicture={user[0].avatarUrl}
					birthDate={user[0].birthDate}
					city={user[0].city}
					email={user[0].login}
					webSite={user[0].webSite}
				/>
				<HeroContacts
					contactName="contactName"
					userBase={userBase}
					userId={userId}
					user={user[0]}
				/>
			</div>
			: <User404 />
	);
}
export default Profile;