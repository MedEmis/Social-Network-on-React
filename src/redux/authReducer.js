const USER_LOG_IN = "USER_LOG_IN"
const USER_LOG_OUT = "USER_LOG_OUT"
const FOLLOW = "FOLLOW"
const SET_USER_DATA = "SET_USER_DATA"


let initialAuthState = {
	userId: 2,
	email: "www@sss.ew",
	login: "my_login",
}

const authReducer = (state = initialAuthState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			console.log("SET_USER_DATA")
			console.log(action.userData.messages)
			console.log(action.event.target)
			return {
				...state,
				...action.userData
			}
		default: return {
			...state
		}
	}
}
export default authReducer
export const SET_USER_DATA_actionCreator = (userData, event) => {
	return {
		type: SET_USER_DATA,
		userData: userData,
		event: event
	}
}