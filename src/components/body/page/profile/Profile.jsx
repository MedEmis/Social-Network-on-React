import React from 'react'
import HeroInfo from './HeroInfo';
import HeroContacts from './HeroContacts';
import User404 from './User404';
import topImage from "./../../../../images/page-top.jpg"
import './profile.scss';
import './../../preloader.scss';
import HeroAbout from './HeroAbout';
import StatusBlock from './StatusBlock';





function Profile(props) {
	let userId = props.match.params.temporaryID
	let user = props.userBase.filter(item => item.userId === userId)[0]
	let heroPicture = props.profile ? props.profile.photos.large : null
	// ВРЕМЕННО ИСПОЛЬЗУЕТЬСЯ БАЗА С КАМАСУТРЫ. ЧТОБЫ ПЕРЕКЛЮЧИТЬСЯ НА МОЮ НУЖНО ОТКЛЮЧИТЬ props.isLoading И props.profile(ПОМЕНЯТЬ НА user)
	return (
		!props.isLoading ?
			props.profile ?
				//user ?
				<div className="body-page__hero-page">
					<div className="body-page__background">
						<img src={topImage} alt="topImage" className="body-page__background_image" />
						<StatusBlock
							userId={props.userId}
							userStatus={props.userStatus}
							getStatus={props.getStatus}
							setStatus={props.setStatus}
						/>
					</div>
					<HeroInfo
						userBase={props.userBase}
						userId={props.userId}
						name={props.profile ? props.profile.fullName : null}
						heroPicture={heroPicture}
						webSite={props.profile ? props.profile.contacts.twitter : null}
					//=============================
					//MY BASE \/
					//userBase={props.userBase}
					//userId={userId}
					//name={user.name}
					//heroPicture={user.avatarUrl}
					//birthDate={user.birthDate}
					//city={user.city}
					//email={user.login}
					//webSite={user.webSite}
					/>
					{
						props.profile
							? <HeroAbout text={props.profile
								? props.profile.aboutMe
								: null} />
							: null
					}

					{
						user
							? <HeroContacts
								contactName="contactName"
								userBase={props.userBase}
								userId={props.userId}
								user={user}
							/>
							: null
					}
				</div>
				: <User404 />
			: <section className="load-wrapper"><span className="load"></span></section>

	);
}
export default Profile;


