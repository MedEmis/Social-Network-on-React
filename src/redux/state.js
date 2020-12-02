// import UserBase from '../users.json'
// import PostsBase from '../posts.json'
// import DialogBase from '../dialogs.json'



let state = {
	currentUserId: "id0006",//<<<==  USER
	userBase: {
		"id0001": {
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
	}
	,
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
	}
	,
	dialogBase: {
		"id0001": [
			{
				"id": "111",
				"userId": "id0001",
				"opponentId": "id0002",
				"name": "Name One",
				"lastVisit": "11.11.12",
				"messages": [
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, irit? Quos?",
					"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"sadfasdfsdfsadfasdfasd"
				]
			},
			{
				"id": "112",
				"userId": "id0001",
				"opponentId": "id0003",
				"name": "Name One",
				"lastVisit": "11.11.12",
				"messages": [
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, irit? Quos?",
					"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"sadfasdfsdfsadfasdfasd"
				]
			},
			{
				"id": "113",
				"userId": "id0001",
				"opponentId": "id0006",
				"name": "Name One",
				"lastVisit": "11.11.12",
				"messages": [
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, irit? Quos?",
					"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"sadfasdfsdfsadfasdfasd"
				]
			},
			{
				"id": "114",
				"userId": "id0001",
				"opponentId": "id0006",
				"name": "Name One",
				"lastVisit": "11.11.12",
				"messages": [
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, irit? Quos?",
					"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"sadfasdfsdfsadfasdfasd"
				]
			}
		],
		"id0002": [
			{
				"id": "111",
				"userId": "id0002",
				"opponentId": "id0004",
				"name": "Name Four",
				"lastVisit": "11.11.12",
				"messages": [
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, irit? Quos?",
					"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"sadfasdfsdfsadfasdfasd"
				]
			},
			{
				"id": "112",
				"userId": "id0002",
				"opponentId": "id0006",
				"name": "Name Six",
				"lastVisit": "11.11.12",
				"messages": [
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, irit? Quos?",
					"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"sadfasdfsdfsadfasdfasd"
				]
			},
			{
				"id": "113",
				"userId": "id0002",
				"opponentId": "id0005",
				"name": "Name Five",
				"lastVisit": "11.11.12",
				"messages": [
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, irit? Quos?",
					"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"sadfasdfsdfsadfasdfasd"
				]
			}
		],
		"id0003": [
			{
				"id": "111",
				"userId": "id0003",
				"opponentId": "id0002",
				"name": "Name Two",
				"lastVisit": "11.11.12",
				"messages": [
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, irit? Quos?",
					"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"sadfasdfsdfsadfasdfasd"
				]
			},
			{
				"id": "112",
				"userId": "id0003",
				"opponentId": "id0004",
				"name": "Name Four",
				"lastVisit": "11.11.12",
				"messages": [
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, irit? Quos?",
					"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
					"sadfasdfsdfsadfasdfasd"
				]
			}
		],
		"id0004": [],
		"id0005": [],
		"id0006": [
			{}
		]
	},
	postsCount: 0,
	dialogsCount: 0

}
export let auto_grow = (event) => {
	event.target.style.height = "5px";
	event.target.style.height = (event.target.scrollHeight) + "px";
}




export let addNewPost = (userId, nikName) => {
	let textArea = document.querySelector(".body-page__hero-posts-textarea-input")
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
		"reply": []
	}
	textArea.value = `some news?...`
	state.postsBase[userId].push(post)
}
export let addNewReply = (userId, id, nikName, event) => {
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
	textArea.value = `Answer to ${nikName}:--- `
	let target = state.postsBase[userId].filter(item => item.id === id)
	target[0].reply.push(post)
}
export let addNewNestedReply = (userId, initialUser, initialPost, id, nikName, event) => {
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
	textArea.value = `Answer to ${nikName}:--- `
	let target = state.postsBase[initialUser].filter(item => item.id === initialPost)
	let nestedTarget = target[0].reply.filter(item => item.id === id)
	nestedTarget[0].nestedReply.push(post)
	//console.log("FUNC", state)
}

export let likeIncrementState = (event) => {
	let userId = event.target.parentElement.parentElement.previousSibling.childNodes[1].innerText.slice(0, 6)
	let logId = +event.target.parentElement.parentElement.previousSibling.childNodes[2].innerText.slice(-2)
	let action = event.target.attributes.name.value
	//CYCLE FOR SEARCHING ANY OBJECT IN NESTED BASE BY ANY ATTRIBUTE======START
	for (let key in state.postsBase) {
		let tempTarget = state.postsBase[key]
		//searchin in posts
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
					//searchin in reply
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
								//searchin in nested reply
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

	//CYCLE FOR SEARCHING ANY OBJECT IN NESTED BASE BY ANY ATTRIBUTE=======END
	// console.log("voutedLike", state.userBase[userId].voutedLike)
	// console.log("voutedDislike", state.userBase[userId].voutedDislike)


}


export let likeDecrement = (event) => {
	let elemPanel = event.target.parentNode
	this.setState({
		dislike: this.state.dislike + 1,
		isVoted: true
	})
	this.state.dislike > this.state.like ? elemPanel.style.background = 'rgb(163, 4, 4)' : elemPanel.style.background = 'rgb(47, 110, 10)'
}

export default state


