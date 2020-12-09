import React from 'react'
import './profile.scss';

function HeroContacts(props) {
	let userBase = props.userBase
	let userId = props.userId
	return (
		<div className="body-page__hero-contacts">
			<div className="body-page__hero-contacts_title">MY FRENDS</div>
			<div className="body-page__hero-contacts_wrapper">{
				userBase[userId].contacts.map((item) => (item
					? <div className="body-page__hero-contacts_item" key={Math.floor(Math.random() * 10000)}>
						<img src={userBase[item].avatarUrl}
							alt="contactPicture" className="body-page__hero-contacts_picture"></img>
						<div className="body-page__hero-contacts_status"
							style={{ background: userBase[item].isOnline ? "green" : "red" }}></div>
						<div className="body-page__hero-contacts_name">{userBase[item].name}</div>
					</div>
					: "You dont have any frend yet"))
			}</div>
		</div>
	);
}
export default HeroContacts;