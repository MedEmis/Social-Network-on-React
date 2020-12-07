//need entire state
///checking if such email already exist in the system

const userBaseReduser = (state, action) => {

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
					state.postsBase[newUserId] = []
					state.dialogBase[newUserId] = []
					localStorage.setItem("currentUserId", newUserId)
					state.currentUserId = localStorage.getItem("currentUserId")
					console.log(`User:  ${newUserId} isOnline:  ${newUserModel.isOnline}`)
					console.log(state.userBase)
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
				state.userBase[state.currentUserId].isOnline = false
				console.log(`User:  ${state.currentUserId} isOnline:  ${state.userBase[state.currentUserId].isOnline}`)
				localStorage.removeItem("currentUserId")
				state.currentUserId = localStorage.getItem("currentUserId")
			}
			logOut(action)
			break;
		default:
			break;
	}

	return state
}
export default userBaseReduser
//reducer getting state from store and action from UI. Don't need subscriber. It will return renewed state.