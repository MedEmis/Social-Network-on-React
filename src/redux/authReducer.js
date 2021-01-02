import { initialUsersState } from "./userBaseReducer"
import { initialPostState } from "./postBaseReducer"
import { userAPI } from './../API';


const USER_LOG_IN = "Social-Network-on-React/auth/USER_LOG_IN"
const USER_LOG_OUT = "Social-Network-on-React/auth/USER_LOG_OUT"
const SET_USER_DATA = "Social-Network-on-React/auth/SET_USER_DATA"
const AUTHORIZATION = "Social-Network-on-React/auth/AUTHORIZATION"
const CREATE_NEW_USER = "Social-Network-on-React/auth/CREATE_NEW_USER"
const GET_CAPTCHA_SUCCESS = "Social-Network-on-React/auth/GET_CAPTCHA_SUCCESS"


export let initialAuthState = {
	email: null,
	userId: null,
	login: null,
	isAuthorized: false,
	captcha: null,
	currentUserId: null || localStorage.getItem("currentUserId")
}

let date
let newUserId
let newUserModel
const authReducer = (state = initialAuthState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				email: action.userData.data.email,
				login: action.userData.data.login,
				isAuthorized: true
			}
		//======================================================================================================================================
		case AUTHORIZATION:
			localStorage.setItem("currentUserId", action.userId)
			console.log("logged in", action.userId)
			return {
				...state,
				userId: action.userId,
				currentUserId: action.userId,
				isAuthorized: true
			}
		//======================================================================================================================================
		case CREATE_NEW_USER:
			date = new Date().toLocaleDateString()
			newUserId = "id0" + ++Object.keys(initialUsersState.userBase).length
			newUserModel = {
				"userId": newUserId,
				"name": action.userData.userName,
				"birthDate": action.userData.userdateOfbirth,
				"city": action.userData.userCity,
				"login": action.userData.userEmail,
				"password": action.userData.userPassword,
				"webSite": action.userData.userWebsite,
				"registerDate": `${date}`,
				"statusText": "my statusText",
				"voutedLike": [],
				"voutedDislike": [],
				"isOnline": true,
				"avatarUrl": action.userData.userAvatar,
				"contacts": []
			}
			for (let i = 0; i < initialUsersState.userBase.length; i++) {
				if (initialUsersState.userBase[i].login === action.userData.userEmail) {
					state.isUserExist = true
					break
				} else {
					state.isUserExist = false
				}
			}
			console.log("reducer", state.isUserExist)
			if (state.isUserExist) {
				console.log("Such user already exist")
				return {
					...state,
					isUserExist: true
				}
			} else if (!state.isUserExist) {
				//state.userBase.push(newUserModel) //=>for test, because this action pushing new user to state of another reducer
				// so for test, temporary need to push in this state (fake only for test)   
				initialUsersState.userBase.push(newUserModel)
				initialPostState.postsBase[newUserId] = []
				localStorage.setItem("currentUserId", newUserId)
				localStorage.setItem("usertype", "hardcoded")
				console.log(`User:  ${newUserId} isOnline:  ${newUserModel.isOnline}`)
				return { ...state, currentUserId: newUserId, isAuthorized: true }
			}
			break

		//======================================================================================================================================
		case USER_LOG_IN:
			let result = ''
			if (action.inputLogin && action.inputPassword) {
				for (let i = 0; i < initialUsersState.userBase.length; i++) {
					if (initialUsersState.userBase[i].login === action.inputLogin) {
						if (initialUsersState.userBase[i].password === action.inputPassword) {
							localStorage.setItem("currentUserId", initialUsersState.userBase[i].userId)
							localStorage.setItem("usertype", "hardcoded")
							initialUsersState.userBase[i].isOnline = true
							result = `User:  ${initialUsersState.userBase[i].userId} isOnline:  ${initialUsersState.userBase[i].isOnline}`
							return {
								...state,
								currentUserId: initialUsersState.userBase[i].userId,
								isAuthorized: true
							}
						} else {
							result = "Wrong login or password"
							break
						}
					} else {
						result = "Such user was not found"
						continue
					}
				}
				window.M.toast({ html: result })//message for user
			} else {
				window.M.toast({ html: "You need to enter data" })//message for user
			}
			break;
		//======================================================================================================================================
		case USER_LOG_OUT:
			localStorage.removeItem("currentUserId")//resetting of user ID
			localStorage.removeItem("usertype")//resetting of user ID
			return {
				...state,
				currentUserId: null,// set user ID as null to send us to authorization page
				isAuthorized: false
			}
		case GET_CAPTCHA_SUCCESS:
			return {
				...state,
				captcha: action.captcha
			}
		default: return {
			...state
		}
	}
	return state
}
export default authReducer

//================ACTIONS=====================================================================================
export const SET_USER_DATA_actionCreator = (data) => {
	return {
		type: SET_USER_DATA,
		userData: data
	}
}
export const USER_LOG_INactionCreator = (email, password) => {
	return {
		type: USER_LOG_IN,
		inputLogin: email,
		inputPassword: password,
	}
}
export const USER_LOG_OUTactionCreator = () => {
	return {
		type: USER_LOG_OUT,
	}
}
export const CREATE_NEW_USERactionCreator = (userData) => {
	return {
		type: CREATE_NEW_USER,
		userData: userData
	}
}
export const AUTHORIZATION_actionCreator = (userId) => {
	return {
		type: AUTHORIZATION,
		userId: userId
	}
}
export const GET_CAPTCHA_SUCCESS_actionCreator = (captcha) => {
	return {
		type: GET_CAPTCHA_SUCCESS,
		captcha: captcha
	}
}
//================ACTIONS END==================================================================================

//==============THUNKS========================================================================
export const LogInThunkCreator = () => async (dispatch) => {
	let response = await userAPI.logIn()
	if (response.data.resultCode === 0) { dispatch(SET_USER_DATA_actionCreator(response.data)) }
}
export const LogOutThunkCreator = () => async (dispatch) => {
	let response = await userAPI.logOut()
	if (response.data.resultCode === 0) { dispatch(USER_LOG_OUTactionCreator()) }
}
export const AuthorizationThunkCreator = (email, password, rememberMe, captcha, hardcodedUser) => async (dispatch) => {
	// IF hardcodedUser CHECKBOX WAS CHECKED => WILL BE AUTHORIZER HARDCODED USER
	if (hardcodedUser) {// part for hardcoded users
		dispatch(USER_LOG_INactionCreator(email, password))
	} else {// part for real users from server
		let response = await userAPI.authorization(email, password, rememberMe, captcha)//start API request, and after response...
		if (response.data.resultCode === 0) {//if server allow authorization...
			dispatch(AUTHORIZATION_actionCreator(response.data.data.userId))// put data to store
			dispatch(LogInThunkCreator())
		} else if (response.data.resultCode === 10) {
			window.M.toast({ html: response.data.messages[0] })//message for user
			dispatch(GetCaptchaThunkCreator())
		} else {
			window.M.toast({ html: response.data.messages[0] })
		}
	}

}
export const GetCaptchaThunkCreator = () => async (dispatch) => {
	let response = await userAPI.getCaptcha()
	const captcha = response.data.url
	dispatch(GET_CAPTCHA_SUCCESS_actionCreator(captcha))
}
//=============THUNKS END=====================================================================