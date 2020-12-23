import { initialUsersState } from "./userBaseReducer"
import { initialPostState } from "./postBaseReducer"
import { userAPI } from './../API';


const USER_LOG_IN = "USER_LOG_IN"
const USER_LOG_OUT = "USER_LOG_OUT"
const SET_USER_DATA = "SET_USER_DATA"
const CREATE_NEW_USER = "CREATE_NEW_USER"


export let initialAuthState = {
	email: null,
	userId: null,
	login: null,
	isAuthorized: false,
	currentUserId: null || localStorage.getItem("currentUserId")
}
let userId
let user
let date
let newUserId
let newUserModel
const authReducer = (state = initialAuthState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			console.log("logged in", action.userData.data)
			localStorage.setItem("currentUserId", action.userData.data.id)
			return {
				...state,
				email: action.userData.data.email,
				userId: action.userData.data.id,
				login: action.userData.data.login,
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
				//initialUsersState.userBase[newUserId] = newUserModel
				initialUsersState.userBase.push(newUserModel)
				initialPostState.postsBase[newUserId] = []
				localStorage.setItem("currentUserId", newUserId)
				console.log(`User:  ${newUserId} isOnline:  ${newUserModel.isOnline}`)
				return { ...state, currentUserId: newUserId }
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
				console.log(result)
			} else {
				console.log("You need to enter data")
			}
			break;
		//======================================================================================================================================
		case USER_LOG_OUT:
			//userId = localStorage.getItem("currentUserId")
			//user = initialUsersState.userBase.filter(item => item.userId === localStorage.getItem("currentUserId"))[0]
			//debugger
			//user.isOnline = false
			localStorage.removeItem("currentUserId")//resetting of user ID
			//console.log(`User:  ${userId} isOnline:  ${user.isOnline}`)
			return {
				...state,
				currentUserId: null,// set user ID as null to send us to authorization page
				isAuthorized: false
			}
		default: return {
			...state
		}
	}
	return state
}
export default authReducer
export const SET_USER_DATA_actionCreator = (userData, event) => {
	return {
		type: SET_USER_DATA,
		userData: userData,
		event: event
	}
}
export const USER_LOG_INactionCreator = (event) => {
	return {
		type: USER_LOG_IN,
		inputLogin: event.target[0].value,
		inputPassword: event.target[1].value,
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



//==============THUNKS========================================================================
export const LogInThunkCreator = () => (dispatch) => {
	userAPI.logIn().then(data => {//start API request, and after response...
		dispatch(SET_USER_DATA_actionCreator(data))// put data to store
	})
}
//=============THUNKS END=====================================================================