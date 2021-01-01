
import { userAPI } from './../API';

const CHAT = "CHAT"
const FOLLOW = "FOLLOW"
const FOLLOW_MY_BASE = "FOLLOW_MY_BASE"
const SET_USERS = "SET_USERS"
const SET_STATUS = "SET_STATUS"
const CHANGE_PAGE = "CHANGE_PAGE"
const SET_PROFILE = "SET_PROFILE"
const TOGGLE_FETCHING = "TOGGLE_FETCHING"
const SET_PROFILE_IMAGE = "SET_PROFILE_IMAGE"
const SET_TEMPORARY_PROFILE = "SET_TEMPORARY_PROFILE"


export let initialUsersState = {
	userBase: [
		{
			"login": "AAA@111.cc",
			"password": "aaa111aaa",
			"userId": "id0001",
			"name": "Name MAIN FIRST",
			"birthDate": "00.11.22",
			"city": "some town",
			"education": "some education",
			"webSite": "some webSite",
			"registerDate": "33.33.33",
			"voutedLike": [],
			"voutedDislike": [],
			"isOnline": false,
			"avatarUrl": "https://i.pinimg.com/originals/15/b2/1a/15b21a20631cede3f16bb02759215b09.jpg",
			"contacts": ["id0003", "id0002", "id0006", "id0005"]
		},
		{
			"login": "BB@B111",
			"password": "bbb111bbb",
			"userId": "id0002",
			"name": "Name Two",
			"birthDate": "11.22.33",
			"city": "some town",
			"education": "some education",
			"webSite": "some webSite",
			"voutedLike": [],
			"voutedDislike": [],
			"registerDate": "44.44.44",
			"isOnline": true,
			"avatarUrl": "https://scontent.fiev13-1.fna.fbcdn.net/v/t1.0-9/944993_737146193094013_5672080899067667646_n.jpg?_nc_cat=107&cb=846ca55b-ee17756f&ccb=2&_nc_sid=09cbfe&_nc_ohc=SyPoRklCbqAAX9Iyd7J&_nc_ht=scontent.fiev13-1.fna&oh=c7b2cd2853d192f8a2d0de8baefb17e7&oe=5FEA9D29",
			"contacts": ["id0001", "id0003"]
		}, {
			"login": "CCC@111",
			"password": "ccc111ccc",
			"userId": "id0003",
			"name": "Name Three",
			"birthDate": "00.11.33",
			"city": "some town",
			"education": "some education",
			"webSite": "some webSite",
			"voutedLike": [],
			"voutedDislike": [],
			"registerDate": "44.44.44",
			"isOnline": false,
			"avatarUrl": "https://i.pinimg.com/236x/df/02/f2/df02f287609f6f06224622be9e3a588c--second-life-life-photography.jpg",
			"contacts": ["id0002", "id0006"]
		}, {
			"login": "DDD@111",
			"password": "ddd111ddd",
			"userId": "id0004",
			"name": "Name Four",
			"birthDate": "00.11.44",
			"city": "some town",
			"education": "some education",
			"webSite": "some webSite",
			"voutedLike": [],
			"voutedDislike": [],
			"registerDate": "55.55.55",
			"isOnline": true,
			"avatarUrl": "https://i.pinimg.com/originals/41/83/04/418304673aa2ab05fd39640c99e71828.jpg",
			"contacts": ["id0003"]
		}, {
			"login": "EEE@111",
			"password": "eee111eee",
			"userId": "id0005",
			"name": "Name Five",
			"birthDate": "00.11.55",
			"city": "some town",
			"education": "some education",
			"webSite": "some webSite",
			"voutedLike": [],
			"voutedDislike": [],
			"registerDate": "55.55.55",
			"isOnline": false,
			"avatarUrl": "https://avatarfiles.alphacoders.com/257/thumb-257122.jpg",
			"contacts": ["id0003", "id0001"]
		}, {
			"login": "FFF@111",
			"password": "fff111fff",
			"userId": "id0006",
			"name": "Name Six",
			"birthDate": "00.11.66",
			"city": "some town",
			"voutedLike": [],
			"voutedDislike": [],
			"education": "some education",
			"webSite": "some webSite",
			"registerDate": "66.66.66",
			"avatarUrl": "https://i.pinimg.com/originals/ba/ef/fc/baeffcbd32fbbb407584195f5d7bde23.jpg",
			"isOnline": false,
			"contacts": ["id0001", "id0002"]
		}
	],
	profile: null,
	watchedProfile: null,
	isTemporary: false,
	displayedUsers: 4,
	isFetching: null,
	isUserExist: false,
	totalUsersCount: 0,
	userStatus: null,
	currentUsersPage: +localStorage.getItem("currentUserPage"),
}

const userBaseReducer = (state = initialUsersState, action) => {
	switch (action.type) {
		case FOLLOW_MY_BASE:
			let user = state.userBase.filter(item => (item.userId || item.Id) === action.currentUserId)[0]
			if (user) {
				action.event.target.classList.toggle("is-flipped")
				if (action.request === "follow") {
					action.event.target.textContent = "Unfollow"
					console.log("Follow")
					if (!user.contacts.includes(action.followTo)) {
						return {
							userBase: { ...user.contacts = [...user.contacts, action.followTo] },
							...state
						}
					} else {
						return {
							...state
						}
					}
				} else if (action.request === "unfollow") {
					console.log("Unfollow")
					action.event.target.textContent = "Follow"
					let followIdIndex = user.contacts.indexOf(action.followTo)
					user.contacts.splice(followIdIndex, 1)
					if (user.contacts.includes(action.followTo)) {
						return {
							userBase: { ...user.contacts = [...user.contacts] },
							...state
						}
					} else {
						return {
							...state
						}
					}
				}
			} else {
				return state
			}
			break
		//======================================================================================================================================
		case FOLLOW:
			action.event.target.classList.toggle("is-flipped")
			if (action.request === "follow") {
				action.event.target.textContent = "Unfollow"
				console.log("Follow")
				return {
					...state
				}
			} else if (action.request === "unfollow") {
				console.log("Unfollow")
				action.event.target.textContent = "Follow"
				return {
					...state
				}
			}
			break
		//======================================================================================================================================
		case TOGGLE_FETCHING:
			return {
				...state,
				isFetching: action.condition
			}
		//======================================================================================================================================
		case CHAT:
			console.log("CHAT")
			return {
				...state
			}
		//======================================================================================================================================
		case SET_USERS:
			return {
				...state,
				userBase: [...action.newUsers, ...state.userBase],
				totalUsersCount: action.totalCount
			}
		//======================================================================================================================================
		case SET_PROFILE:
			return {
				...state,
				profile: {
					...state.profile,
					...action.data
				},
				isTemporary: false
			}
		// profile: {
		// 	...state.profile,
		// 	...action.data
		// },
		//======================================================================================================================================
		case SET_PROFILE_IMAGE:
			return {
				...state,
				profile: {
					...state.profile,
					photos: action.data
				}
			}
		//======================================================================================================================================
		case SET_TEMPORARY_PROFILE:
			return {
				...state,
				watchedProfile: action.data,
				isTemporary: true
			}
		//======================================================================================================================================
		case SET_STATUS:
			return {
				...state,
				userStatus: action.userStatus
			}
		//======================================================================================================================================
		case CHANGE_PAGE:
			let lastPage = Math.ceil(state.totalUsersCount / state.displayedUsers)
			if (action.event.target.attributes.name.value === "prev" && state.currentUsersPage > 1) {
				localStorage.setItem("currentUserPage", state.currentUsersPage - 1)
				return {
					...state,
					currentUsersPage: --state.currentUsersPage,
				}
			} else if (action.event.target.attributes.name.value === "next" && state.currentUsersPage < lastPage) {
				localStorage.setItem("currentUserPage", state.currentUsersPage + 1)
				return {
					...state,
					currentUsersPage: ++state.currentUsersPage,
				}
			} else if (action.event.target.attributes.name) {
				localStorage.setItem("currentUserPage", +action.event.target.attributes.name.value)
				return {
					...state,
					currentUsersPage: +action.event.target.attributes.name.value,
				}
			} else {
				return state
			}
		//======================================================================================================================================
		default: return state
	}
}
export default userBaseReducer
//reducer getting state from store and action from UI. Don't need subscriber. It will return renewed state.


//==============ACTION CREATORS========================================================================
export const FOLLOW_actionCreator = (event, currentUserId, request, id) => {
	return {
		type: FOLLOW,
		event: event,
		currentUserId: currentUserId,
		request: request,
		followTo: id
	}
}
export const FOLLOW_MY_BASE_actionCreator = (event, currentUserId, request, id) => {
	return {
		type: FOLLOW_MY_BASE,
		event: event,
		currentUserId: currentUserId,
		request: request,
		followTo: id
	}
}
export const CHAT_actionCreator = (event) => {
	return {
		type: CHAT,
		event: event

	}
}
export const SET_USERS_actionCreator = (newUsers, totalCount) => {
	return {
		type: SET_USERS,
		newUsers: newUsers,
		totalCount: totalCount

	}
}
export const SET_PROFILE_actionCreator = (data) => {
	return {
		type: SET_PROFILE,
		data
	}
}
export const SET_TEMPORARY_PROFILE_actionCreator = (data) => {
	return {
		type: SET_TEMPORARY_PROFILE,
		data
	}
}
export const SET_PROFILE_IMAGE_actionCreator = (data) => {
	return {
		type: SET_PROFILE_IMAGE,
		data

	}
}
export const CHANGE_PAGE_actionCreator = (event) => {
	return {
		type: CHANGE_PAGE,
		event: event
	}
}
export const Toggle_IsFetching_actionCreator = (condition) => {
	return {
		type: TOGGLE_FETCHING,
		condition: condition
	}
}
export const SET_STATUS_actionCreator = (userStatus) => {
	return {
		type: SET_STATUS,
		userStatus: userStatus
	}
}
//==============ACTION CREATORS END========================================================================

//==============THUNKS========================================================================
export const GetUserBaseThunkCreator = (currentPage, displayedUsers) => async (dispatch) => {
	dispatch(Toggle_IsFetching_actionCreator(true))// switch loader on
	let response = await userAPI.getUsersBase(currentPage, displayedUsers)
	dispatch(Toggle_IsFetching_actionCreator(false))// switch loader off
	dispatch(SET_USERS_actionCreator(response.data.items, response.data.totalCount))// put data to store
}
export const GetUserProfileThunkCreator = (userId, isOwned) => async (dispatch) => {
	dispatch(Toggle_IsFetching_actionCreator(true))// switch loader on
	let response = await userAPI.getUsersProfile(userId)
	dispatch(Toggle_IsFetching_actionCreator(false))// switch loader off
	if (isOwned) {
		dispatch(SET_PROFILE_actionCreator(response.data))// put data to store
	} else {
		dispatch(SET_TEMPORARY_PROFILE_actionCreator(response.data))// put data to store
	}
}
export const GetStatusThunkCreator = (currentUserId) => async (dispatch) => {
	let response = await userAPI.getUserStatus(currentUserId)
	dispatch(SET_STATUS_actionCreator(response.data))
}
export const SetStatusThunkCreator = (event) => async (dispatch) => {
	let payload = event.target.value
	let response = await userAPI.setUserStatus(payload)
	if (response.resultCode === 0) {
		dispatch(SET_STATUS_actionCreator(payload))
	}
}
export const FollowingThunkCreator = (event, currentUserId) => async (dispatch) => {
	let request = event.target.textContent.toLocaleLowerCase()
	let id = event.target.offsetParent.childNodes[0].childNodes[1].textContent
	event.target.disabled = true
	let response = await userAPI.followRequest(request, id)
	if (response.data.resultCode === 0) {
		dispatch(FOLLOW_actionCreator(event, currentUserId, request, id))
		//	dispatch(FOLLOW_MY_BASE_actionCreator(event, currentUserId, request, id))//for my userbase
	}
	event.target.disabled = false
}
export const SaveImageThunkCreator = (image) => async (dispatch) => {
	let response = await userAPI.saveImageApi(image)
	if (response.data.resultCode === 0) {
		dispatch(SET_PROFILE_IMAGE_actionCreator(response.data.data.photos))
	}
}
export const UpdateProfileThunkCreator = (profile) => async (dispatch) => {
	dispatch(Toggle_IsFetching_actionCreator(true))// switch loader on
	let response = await userAPI.updateProfile(profile)
	 if (response.data.resultCode === 0) {
	 	dispatch(SET_PROFILE_actionCreator(profile))
	 }
	dispatch(Toggle_IsFetching_actionCreator(false))// switch loader off
}
//==============THUNKS END========================================================================