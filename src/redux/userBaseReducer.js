//need entire state

const userBaseReduser = (state, action) => {
	if (action.type === "CREATE_NEW_USER") {
		let creatNewUser = (userData) => {
			let date = new Date().toLocaleDateString()
			let newUserId = "id0" + ++Object.keys(this._state.userBase).length
			let newUserModel = {
				"userId": newUserId,
				"name": userData.name,
				"birthDate": userData.dateOfbirth,
				"city": userData.city,
				"email": userData.email,
				"webSite": userData.website,
				"registerDate": `${date}`,
				"voutedLike": [],
				"voutedDislike": [],
				"isOnline": false,
				"avatarUrl": userData.avatar,
				"contacts": []
			}
			state.userBase[newUserId] = newUserModel
			state.postsBase[newUserId] = []
			state.dialogBase[newUserId] = []
			state.currentUserId = newUserId
		}
		creatNewUser(action.userData)
	}

	return state
}
//reducer getting state from store and action from UI. Don't need subscriber. It will return renewed state.