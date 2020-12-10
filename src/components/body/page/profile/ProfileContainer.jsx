import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux'




// function Profile(props) {
// 	// if ( props.location.currentUserId) {
// 	// 	 userId =  props.location.currentUserId
// 	// } else {
// 	// 	 userId =  props.currentuserid
// 	// }
// 	// if (!props.location.propsSearch) return <Redirect to="/src/components/body/page/profile/Profile" />;

// 	return (
// 		<StoreContext.Consumer>
// 			{
// 				(store) => {
// 					let userBase = store.getState().usersReducer.userBase
// 					let userId = store.getState().usersReducer.currentUserId
// 					return (
// 						userBase.hasOwnProperty(userId)
// 							? <div className="body-page__hero-page">
// 								<div className="body-page__background"><img src={topImage} alt="topImage"></img></div>
// 								<HeroInfo
// 									userBase={userBase}
// 									userId={userId}
// 									name={userBase[userId].name}
// 									heroPicture={userBase[userId].avatarUrl}
// 									birthDate={userBase[userId].birthDate}
// 									city={userBase[userId].city}
// 									email={userBase[userId].login}
// 									webSite={userBase[userId].webSite}
// 								/>
// 								<HeroContacts
// 									contactName="contactName"
// 									userBase={userBase}
// 									userId={userId}
// 								/>
// 							</div>
// 							: <User404 />
// 					)
// 				}
// 			}
// 		</StoreContext.Consumer>
// 	);
// }
// export default Profile;




let mapStateToProps = (state) => {//data for connect in state
	return {
		userBase: state.usersReducer.userBase,
		userId: state.usersReducer.currentUserId
	}
}
let mapDispatchToProps = (dispatch) => {//functions for connect is dispatch
	return {}
}


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)




export default ProfileContainer;