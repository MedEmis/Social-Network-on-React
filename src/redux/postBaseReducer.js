//============ACTIONS======================

const AUTO_GROW = "AUTO_GROW"
const DELETE_POST = "DELETE_POST"
const ADD_NEW_POST = "ADD_NEW_POST"
const ADD_NEW_REPLY = "ADD_NEW_REPLY"
const LIKE_INCREMENT = "LIKE_INCREMENT"
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT"
const ADD_NEW_NESTED_REPLY = "ADD_NEW_NESTED_REPLY"

//============ACTIONS END==================

export let initialPostState = {
	postsBase: {
		"id0001": [
			{
				"id": "00001",
				"userId": "id0001",
				"nikName": "First Name",
				"dataDate": "11.11.11",
				"dataTime": "12:11",
				"like": 0,
				"dislike": 0,
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"like": 0,
						"dislike": 0,
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00111",
								"userId": "id0003",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"like": 0,
								"dislike": 0,
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							},
							{
								"id": "00211",
								"userId": "id0004",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"like": 0,
								"dislike": 0,
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							},
							{
								"id": "00311",
								"userId": "id0005",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"like": 0,
								"dislike": 0,
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
						"like": 0,
						"dislike": 0,
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00121",
								"userId": "id0004",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"like": 0,
								"dislike": 0,
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
						"like": 0,
						"dislike": 0,
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
				"like": 0,
				"dislike": 0,
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"like": 0,
						"dislike": 0,
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00311",
								"userId": "id0005",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"like": 0,
								"dislike": 0,
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
						"like": 0,
						"dislike": 0,
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					},
					{
						"id": "00021",
						"userId": "id0005",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"like": 0,
						"dislike": 0,
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					},
					{
						"id": "00021",
						"userId": "id0005",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"like": 0,
						"dislike": 0,
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					},
					{
						"id": "00021",
						"userId": "id0005",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"like": 0,
						"dislike": 0,
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
				"like": 0,
				"dislike": 0,
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"like": 0,
						"dislike": 0,
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00111",
								"userId": "id0003",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"like": 0,
								"dislike": 0,
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
						"like": 0,
						"dislike": 0,
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00121",
								"userId": "id0004",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"like": 0,
								"dislike": 0,
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
						"like": 0,
						"dislike": 0,
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
				"like": 0,
				"dislike": 0,
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"like": 0,
						"dislike": 0,
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00311",
								"userId": "id0001",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"like": 0,
								"dislike": 0,
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							},
							{
								"id": "00311",
								"userId": "id0002",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"like": 0,
								"dislike": 0,
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
						"like": 0,
						"dislike": 0,
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
				"like": 0,
				"dislike": 0,
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"like": 0,
						"dislike": 0,
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00311",
								"userId": "id0001",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"like": 0,
								"dislike": 0,
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							},
							{
								"id": "00311",
								"userId": "id0002",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"like": 0,
								"dislike": 0,
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
						"like": 0,
						"dislike": 0,
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
				"like": 0,
				"dislike": 0,
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"like": 0,
						"dislike": 0,
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00311",
								"userId": "id0001",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"like": 0,
								"dislike": 0,
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							},
							{
								"id": "00311",
								"userId": "id0002",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"dataTime": "12:34",
								"like": 0,
								"dislike": 0,
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
						"like": 0,
						"dislike": 0,
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
				"like": 0,
				"dislike": 0,
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00011",
						"userId": "id0002",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"like": 0,
						"dislike": 0,
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": [
							{
								"id": "00311",
								"userId": "id0001",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"like": 0,
								"dislike": 0,
								"dataTime": "12:34",
								"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
							},
							{
								"id": "00311",
								"userId": "id0002",
								"nikName": "First Nested Name",
								"dataDate": "12.34.56",
								"like": 0,
								"dislike": 0,
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
						"like": 0,
						"dislike": 0,
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
				"like": 0,
				"dislike": 0,
				"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
				"reply": [
					{
						"id": "00021",
						"userId": "id0001",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"like": 0,
						"dislike": 0,
						"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
						"nestedReply": []
					},
					{
						"id": "00021",
						"userId": "id0005",
						"nikName": "First Reply Name",
						"dataDate": "12.34.56",
						"dataTime": "12:34",
						"like": 0,
						"dislike": 0,
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
	let time = new Date().toLocaleTimeString().slice(0, -3)
	let date = new Date().toLocaleDateString()
	let textArea
	let post = {}
	switch (action.type) {
		case UPDATE_POST_TEXT:
			return {
				postsBase: { ...state.postsBase },
				...state,
				currentPostText: action.inputValue,
			}
		//======================================================================================================================================
		case AUTO_GROW:
			action.event.target.style.height = "5px";
			action.event.target.style.height = (action.event.target.scrollHeight) + "px";
			return state
		//======================================================================================================================================
		case ADD_NEW_POST:
			return {
				postsBase: {
					...state.postsBase[action.userId] = [
						...state.postsBase[action.userId],
						{
							"id": ++state.postsCount,
							"userId": action.userId,
							"nikName": action.nikName,
							"dataDate": `${date}`,
							"dataTime": `${time}`,
							"textBody": state.currentPostText,
							"like": 0,
							"dislike": 0,
							"reply": []
						}
					],
					...state.postsBase,
				},
				currentPostText: "some news?...",
				postsCount: state.postsCount++
			}
		//======================================================================================================================================
		case ADD_NEW_REPLY:
			textArea = action.event.target.offsetParent.lastElementChild.childNodes[0]
			post = {
				"id": ++state.postsCount,
				"userId": action.userId,
				"nikName": action.nikName,
				"dataDate": `${date}`,
				"dataTime": `${time}`,
				"textBody": textArea.value,
				"like": 0,
				"dislike": 0,
				"nestedReply": []
			}
			textArea.value = ""
			return {
				postsBase: {//searching deeply inside the object accordinately to user ID
					...state.postsBase[action.userId]
						.filter(item => item.id === action.id)[0].reply = [
						...state.postsBase[action.userId]
							.filter(item => item.id === action.id)[0].reply,
						post
					],
					...state.postsBase,
				},
				currentPostText: "some news?...",
				postsCount: state.postsCount++
			}
		//======================================================================================================================================
		case ADD_NEW_NESTED_REPLY:
			textArea = action.event.target.offsetParent.lastElementChild.childNodes[0]
			post = {
				"id": ++state.postsCount,
				"userId": action.userId,
				"nikName": action.nikName,
				"dataDate": `${date}`,
				"dataTime": `${time}`,
				"textBody": textArea.value,
				"like": 0,
				"dislike": 0,
			}
			textArea.value = ""
			return {
				postsBase: {//searching deeply inside the object accordinately to user ID
					...state.postsBase[action.initialUser]
						.filter(item => item.id === action.initialPost)[0].reply
						.filter(item => item.id === action.id)[0].nestedReply = [
						...state.postsBase[action.initialUser]
							.filter(item => item.id === action.initialPost)[0].reply
							.filter(item => item.id === action.id)[0].nestedReply,
						post
					],
					...state.postsBase,
				},
				currentPostText: "some news?...",
				postsCount: state.postsCount++
			}
		//======================================================================================================================================
		case DELETE_POST:
			return {
				...state.postsBase[action.userId].filter(post => post.id !== action.postId),
				...state.postsCount = --state.postsCount
			}
		//======================================================================================================================================
		case LIKE_INCREMENT:
			let likeIncrementState = (event, userBase) => {
				let userId = event.target.parentElement.parentElement.previousSibling.childNodes[1].innerText.slice(0, 6)
				let logId = +event.target.parentElement.parentElement.previousSibling.childNodes[3].innerText.slice(-2)
				let user = userBase.filter(item => item.userId === userId)[0]
				let action = event.target.attributes.name.value
				console.log(`user ${user.userId} pressed ${action}`)
				//checking if this los was already vouted
				if (user.voutedLike.includes(logId) || user.voutedDislike.includes(logId)) {
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
										user.voutedLike.push(logId)
										break
									} else if (action === "dislike") {
										state.postsBase[key][i].dislike++
										user.voutedDislike.push(logId)
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
													//userBase[userId].voutedLike.push(logId)
													user.voutedLike.push(logId)
													break
												} else if (action === "dislike") {
													state.postsBase[key][i].reply[j].dislike++
													user.voutedDislike.push(logId)
													break
												}
											} else {
												//searching in nested reply
												let newNestedTarget = newtempTarget[j].nestedReply
												for (let k = 0; k < newNestedTarget.length; k++) {
													if (newNestedTarget[k].id === logId) {
														if (action === "like") {
															state.postsBase[key][i].reply[j].nestedReply[k].like++
															user.voutedLike.push(logId)
															break
														} else if (action === "dislike") {
															state.postsBase[key][i].reply[j].nestedReply[k].dislike++
															user.voutedDislike.push(logId)
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
		default:
			return state
	}

}

export default postBaseReducer

//=========ACTION CREATORS=================================================
export const UPDATE_POST_TEXT_actionCreator = (event) => {
	return {
		type: UPDATE_POST_TEXT,
		inputValue: event.target.value
	}
}
export const AUTO_GROW_actionCreator = (event) => {
	return {
		type: AUTO_GROW,
		event: event
	}
}
export const ADD_NEW_POST_actionCreator = (userId, nikName) => {
	return {
		type: ADD_NEW_POST,
		userId: userId,
		nikName: nikName,
	}
}
export const DELETE_POST_actionCreator = (postId, userId) => {
	return {
		type: DELETE_POST,
		postId: postId,
		userId: userId
	}
}
export const ADD_NEW_REPLY_actionCreator = (userId, id, nikName, event) => {
	return {
		type: ADD_NEW_REPLY,
		userId: userId,
		id: id,
		nikName: nikName,
		event: event,
	}
}
export const ADD_NEW_NESTED_REPLY_actionCreator = (userId, initialUser, initialPost, id, nikName, event) => {
	return {
		type: ADD_NEW_NESTED_REPLY,
		userId: userId,
		initialUser: initialUser,
		initialPost: initialPost,
		id: id,
		nikName: nikName,
		event: event,
	}
}
export const LIKE_INCREMENT_actionCreator = (event, userBase) => {
	return {
		type: LIKE_INCREMENT,
		event: event,
		userBase: userBase,
	}
}
//=========ACTION CREATORS END=================================================


//=========THUNKS CREATORS =================================================
export const UpdateTextareaThunkCreator = (event) => (dispatch) => {
	dispatch(UPDATE_POST_TEXT_actionCreator(event))
}
export const AddNewPostThunkCreator = (userId, name) => (dispatch) => {
	dispatch(ADD_NEW_POST_actionCreator(userId, name))
}
export const AddNewReplyThunkCreator = (event, data) => (dispatch) => {
	dispatch(ADD_NEW_REPLY_actionCreator(
		data.userId,
		data.id,
		data.userBase.filter(item => item.userId === data.userId)[0].name,
		event
	))
}
export const AddNewNestedPostThunkCreator = (event, data) => (dispatch) => {
	dispatch(ADD_NEW_NESTED_REPLY_actionCreator(
		data.userId,
		data.initialUser,
		data.initialPost,
		data.id,
		data.userBase.filter(item => item.userId === data.userId)[0].name,
		event
	))
}
export const IsVotedCheckThunkCreator = (event, userBase) => (dispatch) => {
	dispatch(LIKE_INCREMENT_actionCreator(event, userBase))
}
export const AutoGrowThunkCreator = (event) => (dispatch) => {
	dispatch(AUTO_GROW_actionCreator(event))
}
//=========THUNKS CREATORS END =================================================