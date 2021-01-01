import React, { useEffect, useState } from 'react'
import './profile.scss';
import defaultAvatar from "./../../../../images/defaultUser.png"
import FileInput from './../../buttons/FileInput';


function InfoField({ label, content }) {
	return (
		<div className="body-page__hero-data-item">
			<span>{label}:</span>
			<span>{!content ? "-None-" : content}</span>
		</div>
	)
}

function HeroInfo({ isOwner, userId, heroPicture, name, birthDate, city, email, webSite, saveImage, profile, lookingForAJobDescription, github, website, mainLink }) {
	useEffect(() => {
		SetUserID(userId)
	}, [isOwner, heroPicture])
	const [userID, SetUserID] = useState()
	return (
		<div className="body-page__info">
			<div className="body-page__hero-bigavatar">
				<img className="hero-avatar" src={heroPicture || defaultAvatar} alt="hero" />
				{isOwner && <FileInput label="change avatar" saveImage={saveImage} />}
			</div>
			<div className="body-page__hero-data">
				<InfoField label="Name" content={name} />
				<InfoField label="Looking for job?" content={isOwner ? profile.lookingForAJobDescription : lookingForAJobDescription} />
				<InfoField label="Git-Hub" content={isOwner ? profile.contacts.github : github} />
				<InfoField label="Portfolio" content={isOwner ? profile.contacts.mainLink : mainLink} />
				<InfoField label="Email" content={isOwner ? email : null} />
			</div>
			{/* <div className="body-page__hero-data">
				<InfoField label="Name" content={name} />
				<InfoField label="Date of birth" content={birthDate} />
				<InfoField label="City" content={city} />
				<InfoField label="E-mail" content={email} />
				<InfoField label="Web Site" content={webSite} />
			</div> */}
		</div>
	);
}
export default HeroInfo;

