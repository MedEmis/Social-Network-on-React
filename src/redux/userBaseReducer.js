import { initialPostState } from "./postBaseReducer"


let initialUsersState = {
	userBase: {
		"id0001": {
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
		"id0002": {
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
		},
		"id0003": {
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
		},
		"id0004": {
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
		},
		"id0005": {
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
		},
		"id0006": {
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
	},
	isUserExist: false,
	currentUserId: localStorage.getItem("currentUserId"),//<<<==  USER
	//currentUserId: "id0006",//<<<==  USER

}


const userBaseReducer = (state = initialUsersState, action) => {
	switch (action.type) {
		case "CREATE_NEW_USER":
			let creatNewUser = (userData) => {
				let date = new Date().toLocaleDateString()
				let newUserId = "id0" + ++Object.keys(state.userBase).length
				let newUserModel = {
					"userId": newUserId,
					"name": userData.name,
					"birthDate": userData.dateOfbirth,
					"city": userData.city,
					"login": userData.email,
					"password": userData.password,
					"webSite": userData.website,
					"registerDate": `${date}`,
					"voutedLike": [],
					"voutedDislike": [],
					"isOnline": true,
					"avatarUrl": userData.avatar,
					"contacts": []
				}
				for (let key in state.userBase) {
					if (state.userBase[key].login == userData.email) {
						state.isUserExist = true
						break
					} else {
						state.isUserExist = false
					}
				}
				if (state.isUserExist) {
					console.log("Such user already exist")
				} else if (!state.isUserExist) {
					state.userBase[newUserId] = newUserModel
					initialPostState.postsBase[newUserId] = []
					localStorage.setItem("currentUserId", newUserId)
					state.currentUserId = localStorage.getItem("currentUserId")
					console.log(`User:  ${newUserId} isOnline:  ${newUserModel.isOnline}`)
				}
			}
			creatNewUser(action.userData)
			break
		//==================================================================================================================
		case "USER_LOG_IN":
			let logIn = (action) => {
				let result = ''
				for (let key in state.userBase) {
					if (state.userBase[key].login == action.inputLogin) {
						if (state.userBase[key].password == action.inputPassword) {
							localStorage.setItem("currentUserId", state.userBase[key].userId)
							state.currentUserId = localStorage.getItem("currentUserId")
							state.userBase[state.currentUserId].isOnline = true
							result = `User:  ${state.currentUserId} isOnline:  ${state.userBase[state.currentUserId].isOnline}`
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
				if (state.userBase[state.currentUserId] !== undefined) {
					state.userBase[state.currentUserId].isOnline = false
					console.log(`User:  ${state.currentUserId} isOnline:  ${state.userBase[state.currentUserId].isOnline}`)
				}
				localStorage.removeItem("currentUserId")
				state.currentUserId = localStorage.getItem("currentUserId")
			}
			logOut(action)
			break;
		default:
			return state
	}

	return state
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