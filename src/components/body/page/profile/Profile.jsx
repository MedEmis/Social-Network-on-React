import React, { useEffect, useState } from 'react'
import HeroInfo from './HeroInfo';
import HeroContacts from './HeroContacts';
import User404 from './User404';
import topImage from "./../../../../images/page-top.jpg"
import './profile.scss';
import './../../preloader.scss';
import HeroAbout from './HeroAbout';
import StatusBlock from './StatusBlock';
import ProfileEditForm from './ProfileEditForm';





function Profile(props) {
	const [formEdit, setFormEdit] = useState(true)
	const hideForm = () => setFormEdit(true)
	let userId = props.match.params.temporaryID
	let user = props.userBase.filter(item => item.userId === userId)[0]
	let heroPicture
	let name
	let webSite
	if (props.isOwner) {
		heroPicture = props.profile ? props.profile.photos.large : null
		name = props.profile ? props.profile.fullName : null
		webSite = props.profile ? props.profile.contacts.mainLink : null
	} else {
		heroPicture = props.watchedProfile ? props.watchedProfile.photos.large : null
		name = props.watchedProfile ? props.watchedProfile.fullName : null
		webSite = props.watchedProfile ? props.watchedProfile.contacts.twitter : null
	}
	// useEffect(() => {
	// 	props.getProfile(props.userId, props.isOwner)
	// }, [])


	// ВРЕМЕННО ИСПОЛЬЗУЕТЬСЯ БАЗА С КАМАСУТРЫ. ЧТОБЫ ПЕРЕКЛЮЧИТЬСЯ НА МОЮ НУЖНО ОТКЛЮЧИТЬ props.isLoading И props.profile(ПОМЕНЯТЬ НА user)
	return (
		!props.isLoading ?
			props.profile ?
				//user ?
				<div className="body-page__hero-page">
					<div className="body-page__background">
						<img src={topImage} alt="topImage" className="body-page__background_image" />
						{
							props.isOwner
								? <>
									<StatusBlock
										userId={props.userId}
										userStatus={props.userStatus}
										getStatus={props.getStatus}
										setStatus={props.setStatus}
									/>
								</>
								: null
						}
					</div>
					<HeroInfo
						profile={props.profile}
						isOwner={props.isOwner}
						userBase={props.userBase}
						userId={userId}
						// userId={props.userId}
						email={props.email}
						name={name}
						heroPicture={heroPicture}
						webSite={webSite}
						webSite={webSite}
						//functions
						saveImage={props.saveImage}
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
					<button onClick={() => setFormEdit(false)} className="body-page__authorization_button ">edit your profile</button>
					<ProfileEditForm
						profile={props.profile}
						userId={props.userId}
						updateProfile={props.updateProfile}
						formEdit={formEdit}
						hideForm={hideForm}
					/>
					{
						props.profile.aboutMe
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


