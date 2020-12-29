import { createSelector } from 'reselect'

//=====SIMPLE SELECTORS======================================================
export const getIsUserExist = (state) => state.usersReducer ? state.usersReducer.isUserExist : null
export const getUserBase = (state) => state.usersReducer.userBase
export const getIsAuthorized = (state) => state.authReducer.isAuthorized
export const getCurrentUserId = (state) => state.authReducer.currentUserId
export const getCurrentUserPosts = (state) => state.postsReducer.postsBase[state.authReducer.currentUserId]
export const getTemporaryID = (state) => state.usersReducer.profile ? state.usersReducer.profile.userId : null
//=====SIMPLE SELECTORS END===================================================




//=====MID complexity SELECTORS======================================================
//this selector will check data by itself and give it to connect HOC function only if there is any changes in store
//selectors can be combined {example=>} ~~~ (big  =>  (middle => (  (small)(small)   ))(middle)    (small)(small)    =>   (small)(small)(small)(small)(small) ) ~~~
export const getCurrentUser = createSelector(//custom library selector 
	[getUserBase, getCurrentUserId],//dependency for it (from simple selectors)
	(userBase, currentUserId) => {//dependency results
		return userBase.filter((user) => user.userId === currentUserId)//selector result
	}
)
//=====MID complexity SELECTORS END======================================================


//=====HIGH complexity SELECTORS ======================================================
//---------
//=====HIGH complexity SELECTORS END======================================================