import React from 'react'
import './profile.scss';

function HeroContacts(props) {
	let userBase = props.userBase
	return (
		<div className="body-page__hero-contacts">
			<div className="body-page__hero-contacts_title">MY FRENDS</div>
			<div className="body-page__hero-contacts_wrapper">{
				props.user.contacts.map((userId) => (userId
					? <div
						className="body-page__hero-contacts_item"
						key={userId}>
						<img
							src={userBase.filter(item => item.userId === userId)[0].avatarUrl}
							alt="contactPicture"
							className="body-page__hero-contacts_picture">
						</img>
						<div
							className="body-page__hero-contacts_status"
							style={{ background: userBase.filter(item => item.userId === userId)[0].isOnline ? "green" : "red" }}>
						</div>
						<div
							className="body-page__hero-contacts_name">{userBase.filter(item => item.userId === userId)[0].name}
						</div>
					</div>
					: "You dont have any frend yet"))
			}</div>
		</div>
	);
}
export default HeroContacts;