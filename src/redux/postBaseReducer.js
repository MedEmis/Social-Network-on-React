//need postBase, userBase and currentuserId

const postBaseReduser = (state, action) => {


	switch (action.type) {
		case "AUTO_GROW":
			// let action = {
			// 	type: "AUTO_GROW",
			// 	event:event
			// }
			let auto_grow = (event) => {
				event.target.style.height = "5px";
				event.target.style.height = (event.target.scrollHeight) + "px";
			}
			auto_grow(action.event)
			break;
		case "UPDATE_POST_TEXT":
			// let action = {
			// 	type: "UPDATE_POST_TEXT",
			// 	inputValue:inputValue
			// }
			let updatePostText = (inputValue) => {
				state.currentPostText = inputValue
			}
			updatePostText(action.inputValue)
			break;
		case "ADD_NEW_POST":
			// let action = {
			// 	type: "ADD_NEW_POST",
			// 	userId:userId,
			// 	nikName:nikName,
			// }
			let addNewPost = (userId, nikName) => {
				let time = new Date().toLocaleTimeString().slice(0, -3)
				let date = new Date().toLocaleDateString()
				let post = {
					"id": ++state.postsCount,
					"userId": userId,
					"nikName": nikName,
					"dataDate": `${date}`,
					"dataTime": `${time}`,
					"textBody": state.currentPostText,
					"like": 0,
					"dislike": 0,
					"reply": []
				}
				state.postsBase[userId].push(post)
				state.currentPostText = "some news?..."

			}
			addNewPost(action.userId, action.nikName)
			break;
		case "ADD_NEW_REPLY":
			// let action = {
			// 	type: "ADD_NEW_REPLY",
			// 	userId:userId,
			// 	id:id,
			// 	nikName:nikName,
			// 	event:event,
			// }
			let addNewReply = (userId, id, nikName, event) => {
				let textArea = event.target.offsetParent.lastElementChild.childNodes[0]
				let time = new Date().toLocaleTimeString().slice(0, -3)
				let date = new Date().toLocaleDateString()
				let post = {
					"id": ++state.postsCount,
					"userId": userId,
					"nikName": nikName,
					"dataDate": `${date}`,
					"dataTime": `${time}`,
					"textBody": textArea.value,
					"like": 0,
					"dislike": 0,
					"nestedReply": []
				}
				// textArea.value = `Answer to ${nikName === null || nikName === undefined ? "anonymous" : nikName}:--- `
				let target = state.postsBase[userId].filter(item => item.id === id)
				target[0].reply.push(post)
				textArea.value = ""

			}
			addNewReply(action.userId, action.id, action.nikName, action.event)
			break;
		case "ADD_NEW_NESTED_REPLY":
			// let action = {
			// 	type: "ADD_NEW_NESTED_REPLY",
			// 	userId:userId,
			// 	initialUser:initialUser,
			// 	initialPost:initialPost,
			// 	id:id,
			// 	nikName:nikName,
			// 	event:event,
			// }
			let addNewNestedReply = (userId, initialUser, initialPost, id, nikName, event) => {
				let textArea = event.target.offsetParent.lastElementChild.childNodes[0]
				let time = new Date().toLocaleTimeString().slice(0, -3)
				let date = new Date().toLocaleDateString()
				let post = {
					"id": ++state.postsCount,
					"userId": userId,
					"nikName": nikName,
					"dataDate": `${date}`,
					"dataTime": `${time}`,
					"textBody": textArea.value,
					"like": 0,
					"dislike": 0,
				}
				let target = state.postsBase[initialUser].filter(item => item.id === initialPost)
				let nestedTarget = target[0].reply.filter(item => item.id === id)
				nestedTarget[0].nestedReply.push(post)
				textArea.value = ""

			}
			addNewNestedReply(action.userId, action.initialUser, action.initialPost, action.id, action.nikName, action.event)
			break;
		case "LIKE_INCREMENT":
			// let action = {
			// 	type: "LIKE_INCREMENT",
			// 	event:event,
			// }
			let likeIncrementState = (event) => {
				let userId = event.target.parentElement.parentElement.previousSibling.childNodes[1].innerText.slice(0, 6)
				let logId = +event.target.parentElement.parentElement.previousSibling.childNodes[3].innerText.slice(-2)
				let action = event.target.attributes.name.value
				//checking if this los was already vouted
				if (state.userBase[userId].voutedLike.includes(logId) || state.userBase[userId].voutedDislike.includes(logId)) {
					return
				} else {
					//CYCLE FOR SEARCHING ANY OBJECT IN NESTED BASE BY ANY ATTRIBUTE======START
					for (let key in state.postsBase) {
						let tempTarget = state.postsBase[key]
						//searching in posts
						for (let i = 0; i < tempTarget.length; i++) {
							if (tempTarget[i] !== undefined) {
								if (tempTarget[i].id === logId) {
									if (action === "like") {
										state.postsBase[key][i].like++
										state.userBase[userId].voutedLike.push(logId)
										break
									} else if (action === "dislike") {
										state.postsBase[key][i].dislike++
										state.userBase[userId].voutedDislike.push(logId)
										break
									}
								} else {
									//searching in reply
									let newtempTarget = tempTarget[i].reply
									for (let j = 0; j < newtempTarget.length; j++) {
										if (newtempTarget[j] !== undefined) {
											if (newtempTarget[j].id === logId) {
												if (action === "like") {
													state.postsBase[key][i].reply[j].like++
													state.userBase[userId].voutedLike.push(logId)
													break
												} else if (action === "dislike") {
													state.postsBase[key][i].reply[j].dislike++
													state.userBase[userId].voutedDislike.push(logId)
													break
												}
											} else {
												//searching in nested reply
												let newNestedTarget = newtempTarget[j].nestedReply
												for (let k = 0; k < newNestedTarget.length; k++) {
													if (newNestedTarget[k].id === logId) {
														if (action === "like") {
															state.postsBase[key][i].reply[j].nestedReply[k].like++
															state.userBase[userId].voutedLike.push(logId)
															break
														} else if (action === "dislike") {
															state.postsBase[key][i].reply[j].nestedReply[k].dislike++
															state.userBase[userId].voutedDislike.push(logId)
															break
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
			likeIncrementState(action.event)
			break;
		default:
			break;
	}

	return state
}

export default postBaseReduser