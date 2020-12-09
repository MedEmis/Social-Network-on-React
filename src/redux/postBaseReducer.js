//need postBase, userBase and currentuserId


export let initialPostState = {
	postsBase: {
		"id0001": [
			{
				"id": "00001",
				"userId": "id0001",
				"nikName": "First Name",
				"dataDate": "11.11.11",
				"dataTime": "12:11",
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00111",
								"userId": "id0003",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							},
							{
								"id": "00211",
								"userId": "id0004",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							},
							{
								"id": "00311",
								"userId": "id0005",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							}
						]
					},
					{
						"id": "00021",
						"userId": "id0001",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00121",
								"userId": "id0004",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							}
						]
					},
					{
						"id": "00021",
						"userId": "id0005",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					}
				]
			}
		],
		"id0002": [
			{
				"id": "00001",
				"userId": "id0002",
				"nikName": "First Name",
				"dataDate": "11.11.11",
				"dataTime": "12:11",
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00311",
								"userId": "id0005",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							}
						]
					},
					{
						"id": "00021",
						"userId": "id0001",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					},
					{
						"id": "00021",
						"userId": "id0005",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					},
					{
						"id": "00021",
						"userId": "id0005",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					},
					{
						"id": "00021",
						"userId": "id0005",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					}
				]
			}
		],
		"id0003": [
			{
				"id": "00001",
				"userId": "id0003",
				"nikName": "First Name",
				"dataDate": "11.11.11",
				"dataTime": "12:11",
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00111",
								"userId": "id0003",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							}
						]
					},
					{
						"id": "00021",
						"userId": "id0003",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00121",
								"userId": "id0004",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							}
						]
					},
					{
						"id": "00021",
						"userId": "id0003",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					}
				]
			}
		],
		"id0004": [
			{
				"id": "00001",
				"userId": "id0004",
				"nikName": "First Name",
				"dataDate": "11.11.11",
				"dataTime": "12:11",
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00311",
								"userId": "id0001",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							},
							{
								"id": "00311",
								"userId": "id0002",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							}
						]
					},
					{
						"id": "00021",
						"userId": "id0005",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					}
				]
			},
			{
				"id": "00001",
				"userId": "id0004",
				"nikName": "First Name",
				"dataDate": "11.11.11",
				"dataTime": "12:11",
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00311",
								"userId": "id0001",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							},
							{
								"id": "00311",
								"userId": "id0002",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							}
						]
					},
					{
						"id": "00021",
						"userId": "id0005",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					}
				]
			},
			{
				"id": "00001",
				"userId": "id0004",
				"nikName": "First Name",
				"dataDate": "11.11.11",
				"dataTime": "12:11",
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00311",
								"userId": "id0001",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							},
							{
								"id": "00311",
								"userId": "id0002",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							}
						]
					},
					{
						"id": "00021",
						"userId": "id0005",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					}
				]
			},
			{
				"id": "00001",
				"userId": "id0004",
				"nikName": "First Name",
				"dataDate": "11.11.11",
				"dataTime": "12:11",
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00311",
								"userId": "id0001",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							},
							{
								"id": "00311",
								"userId": "id0002",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							}
						]
					},
					{
						"id": "00021",
						"userId": "id0005",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					}
				]
			}
		],
		"id0005": [
			{
				"id": "00001",
				"userId": "id0005",
				"nikName": "First Name",
				"dataDate": "11.11.11",
				"dataTime": "12:11",
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00021",
						"userId": "id0001",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					},
					{
						"id": "00021",
						"userId": "id0005",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					}
				]
			}
		],
		"id0006": [
			// {
			// 	"id": 1,
			// 	"userId": "id0006",
			// 	"nikName": "First Name",
			// 	"dataDate": "11.11.11",
			// 	"dataTime": "12:11",
			// 	"textBody": "АДИН",
			// 	"reply": []
			// },
			// {
			// 	"id": 2,
			// 	"userId": "id0006",
			// 	"nikName": "First Name",
			// 	"dataDate": "11.11.11",
			// 	"dataTime": "12:11",
			// 	"textBody": "ДВА",
			// 	"reply": []
			// }
		]
	},
	postsCount: 0,
	currentPostText: "",

}


const postBaseReducer = (state = initialPostState, action) => {


	switch (action.type) {
		case "AUTO_GROW":
			// let action = {
			// 	type: "AUTO_GROW",
			// 	event:event
			// }
			let auto_grow = (event) => {
				event.target.style.height = "5px";
				event.target.style.height = (event.target.scrollHeight) + "px";
				return state
			}
			auto_grow(action.event)
			//console.log("AUTO_GROW", state)

			break;
		case "UPDATE_POST_TEXT":
			// let action = {
			// 	type: "UPDATE_POST_TEXT",
			// 	inputValue:inputValue
			// }
			let updatePostText = (inputValue) => {
				state.currentPostText = inputValue
				return state
			}
			updatePostText(action.inputValue)
			//console.log("UPDATE_POST_TEXT", state)
			break;
		case "ADD_NEW_POST":
			// let action = {
			// 	type: "ADD_NEW_POST",
			// 	userId:userId,
			// 	nikName:nikName,
			// }
			let addNewPost = (userId, nikName) => {
				console.log("ADD_NEW_POST   1", state.postsBase[userId])
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
				// if (!state.postsBase.hasOwnProperty(userId)) {
				// 	state.postsBase[userId] = []
				// }
				state.postsBase[userId].push(post)//нужно добавить создание нового юзер-массива с постами, потомучто он теперь НЕ добавляеться в userbase  
				state.currentPostText = "some news?..."
				//console.log("ADD_NEW_POST  2", state.postsBase[userId])
				return state
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
			let likeIncrementState = (event, userBase) => {
				let userId = event.target.parentElement.parentElement.previousSibling.childNodes[1].innerText.slice(0, 6)
				let logId = +event.target.parentElement.parentElement.previousSibling.childNodes[3].innerText.slice(-2)
				let action = event.target.attributes.name.value
				//checking if this los was already vouted
				if (userBase[userId].voutedLike.includes(logId) || userBase[userId].voutedDislike.includes(logId)) {
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
										userBase[userId].voutedLike.push(logId)
										break
									} else if (action === "dislike") {
										state.postsBase[key][i].dislike++
										userBase[userId].voutedDislike.push(logId)
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
													userBase[userId].voutedLike.push(logId)
													break
												} else if (action === "dislike") {
													state.postsBase[key][i].reply[j].dislike++
													userBase[userId].voutedDislike.push(logId)
													break
												}
											} else {
												//searching in nested reply
												let newNestedTarget = newtempTarget[j].nestedReply
												for (let k = 0; k < newNestedTarget.length; k++) {
													if (newNestedTarget[k].id === logId) {
														if (action === "like") {
															state.postsBase[key][i].reply[j].nestedReply[k].like++
															userBase[userId].voutedLike.push(logId)
															break
														} else if (action === "dislike") {
															state.postsBase[key][i].reply[j].nestedReply[k].dislike++
															userBase[userId].voutedDislike.push(logId)
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
			likeIncrementState(action.event, action.userBase)
			break;
		default:
			return state
	}

	return state
}

export default postBaseReducer

//action creators
export const AUTO_GROWactionCreator = (event) => {
	return {
		type: "AUTO_GROW",
		event: event
	}
}
export const UPDATE_POST_TEXTactionCreator = (event) => {
	return {
		type: "UPDATE_POST_TEXT",
		inputValue: event.target.value
	}
}
export const ADD_NEW_POSTactionCreator = (userId, nikName) => {
	return {
		type: "ADD_NEW_POST",
		userId: userId,
		nikName: nikName,
	}
}
export const ADD_NEW_REPLYactionCreator = (userId, id, nikName, event) => {
	return {
		type: "ADD_NEW_REPLY",
		userId: userId,
		id: id,
		nikName: nikName,
		event: event,
	}
}
export const ADD_NEW_NESTED_REPLYactionCreator = (userId, initialUser, initialPost, id, nikName, event) => {
	return {
		type: "ADD_NEW_NESTED_REPLY",
		userId: userId,
		initialUser: initialUser,
		initialPost: initialPost,
		id: id,
		nikName: nikName,
		event: event,
	}
}