import { initialPostState } from "./postBaseReducer"
import * as axios from "axios"


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
	isUserExist: false,
	currentUserId: localStorage.getItem("currentUserId"),//<<<==  USER
	displayedUsers: 4,
	totalUsersCount: 0,
	currentUsersPage: 1
}


const userBaseReducer = (state = initialUsersState, action) => {
	let newState = {
		userBase: [...state.userBase],
		...state
	}
	switch (action.type) {
		case "CREATE_NEW_USER":
			let creatNewUser = (userData) => {
				let date = new Date().toLocaleDateString()
				let newUserId = "id0" + ++Object.keys(newState.userBase).length
				let newUserModel = {
					"userId": newUserId,
					"name": userData.userName,
					"birthDate": userData.userdateOfbirth,
					"city": userData.userCity,
					"login": userData.userEmail,
					"password": userData.userPassword,
					"webSite": userData.userWebsite,
					"registerDate": `${date}`,
					"statusText": "my statusText",
					"voutedLike": [],
					"voutedDislike": [],
					"isOnline": true,
					"avatarUrl": userData.userAvatar,
					"contacts": []
				}
				for (let i = 0; i < newState.userBase.length; i++) {
					if (newState.userBase[i].login == userData.email) {
						newState.isUserExist = true
						break
					} else {
						newState.isUserExist = false
					}
				}
				if (newState.isUserExist) {
					console.log("Such user already exist")
				} else if (!newState.isUserExist) {
					// newState.userBase[newUserId] = newUserModel
					newState.userBase.push(newUserModel)
					initialPostState.postsBase[newUserId] = []
					localStorage.setItem("currentUserId", newUserId)
					newState.currentUserId = localStorage.getItem("currentUserId")
					console.log(`User:  ${newUserId} isOnline:  ${newUserModel.isOnline}`)
				}
			}
			creatNewUser(action.userData)
			break
		//==================================================================================================================
		case "USER_LOG_IN":
			let logIn = (action) => {
				let result = ''
				for (let i = 0; i < newState.userBase.length; i++) {
					if (newState.userBase[i].login == action.inputLogin) {
						if (newState.userBase[i].password == action.inputPassword) {
							localStorage.setItem("currentUserId", newState.userBase[i].userId)
							newState.currentUserId = localStorage.getItem("currentUserId")
							newState.userBase[i].isOnline = true
							result = `User:  ${newState.userBase[i].userId} isOnline:  ${newState.userBase[i].isOnline}`
							break
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
			}
			logIn(action)
			break;
		//======================================================================================================================================
		case "USER_LOG_OUT":
			let logOut = () => {
				let userId = localStorage.getItem("currentUserId")
				let user = newState.userBase.filter(item => item.userId === localStorage.getItem("currentUserId"))
				if (user[0]) {
					user[0].isOnline = false
					console.log(`User:  ${userId} isOnline:  ${user[0].isOnline}`)
				}
				localStorage.removeItem("currentUserId")//resetting of user ID
				newState.currentUserId = localStorage.getItem("currentUserId")// set user ID as null to send us to authorization page
			}
			logOut(action)
			break;
		case "FOLLOW":
			let follow = (event, currentUserId, userBase) => {
				let followId = event.target.offsetParent.childNodes[0].childNodes[1].textContent
				let user = userBase.filter(item => item.userId === currentUserId)[0]
				event.target.classList.toggle("is-flipped")
				if (event.target.classList.contains("is-flipped")) {
					event.target.textContent = "Unfollow"
					user.contacts.push(followId)
				} else {
					event.target.textContent = "Follow"
					user.contacts.pop(followId)
				}
				console.log(user.contacts)
			}
			follow(action.event, action.currentUserId, action.userBase)
			// return {}
			break
		case "CHAT":
			let chat = () => {
				console.log("CHAT")
			}
			chat()
			// return {}
			break
		case "SET_USERS":
			return {
				...newState,
				userBase: [...action.newUsers, ...newState.userBase],
				totalUsersCount: action.totalCount
			}
		case "CHANGE_PAGE":
			const loadData = async (event) => {
				let lastPage = Math.ceil(newState.totalUsersCount / newState.displayedUsers)
				if (event.target.textContent === "prev" && newState.currentUsersPage > 1) {
					--newState.currentUsersPage
				} else if (event.target.textContent === "next" && newState.currentUsersPage < lastPage) {
					++newState.currentUsersPage
				} else if (event.target.attributes.name !== undefined) {
					newState.currentUsersPage = +event.target.attributes.name.value
				}
				await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newState.currentUsersPage}&count=${newState.displayedUsers}`)
					.then(response => {
						return {
							userBase: [...response.data.items, ...newState.userBase],
							...newState,
						}
					})
			}
			loadData(action.event)
			break
		default: return newState
	}


	return newState
}
export default userBaseReducer
//reducer getting state from store and action from UI. Don't need subscriber. It will return renewed state.

//action creators
export const CREATE_NEW_USERactionCreator = (userData) => {
	return {
		type: "CREATE_NEW_USER",
		userData: userData
	}
}
export const USER_LOG_INactionCreator = (event) => {
	return {
		type: "USER_LOG_IN",
		inputLogin: event.target[0].value,
		inputPassword: event.target[1].value,
	}
}
export const USER_LOG_OUTactionCreator = () => {
	return {
		type: "USER_LOG_OUT",
	}
}
export const FOLLOW_actionCreator = (event, currentUserId, userBase) => {
	return {
		type: "FOLLOW",
		event: event,
		currentUserId: currentUserId,
		userBase: userBase
	}
}
export const CHAT_actionCreator = (event) => {
	return {
		type: "CHAT",
		event: event

	}
}
export const SET_USERS_actionCreator = (newUsers, totalCount) => {
	return {
		type: "SET_USERS",
		newUsers: newUsers,
		totalCount: totalCount

	}
}
export const CHANGE_PAGE_actionCreator = (event) => {
	return {
		type: "CHANGE_PAGE",
		event: event
	}
}