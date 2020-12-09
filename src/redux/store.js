
// import userBaseReduser from './userBaseReducer';
// import postBaseReduser from './postBaseReducer';
// import dialogBaseReducer from './dialogBaseReducer';




// let store = {
// 	//===========state=============================================//
// 	_state: {
// 		currentUserId: localStorage.getItem("currentUserId"),//<<<==  USER
// 		//currentUserId: "id0006",//<<<==  USER
// 		userBase: {
// 			"id0001": {
// 				"login": "AAA@111.cc",
// 				"password": "aaa111aaa",
// 				"userId": "id0001",
// 				"name": "Name MAIN FIRST",
// 				"birthDate": "00.11.22",
// 				"city": "some town",
// 				"education": "some education",
// 				"webSite": "some webSite",
// 				"registerDate": "33.33.33",
// 				"voutedLike": [],
// 				"voutedDislike": [],
// 				"isOnline": false,
// 				"avatarUrl": "https://i.pinimg.com/originals/15/b2/1a/15b21a20631cede3f16bb02759215b09.jpg",
// 				"contacts": ["id0003", "id0002", "id0006", "id0005"]
// 			},
// 			"id0002": {
// 				"login": "BB@B111",
// 				"password": "bbb111bbb",
// 				"userId": "id0002",
// 				"name": "Name Two",
// 				"birthDate": "11.22.33",
// 				"city": "some town",
// 				"education": "some education",
// 				"webSite": "some webSite",
// 				"voutedLike": [],
// 				"voutedDislike": [],
// 				"registerDate": "44.44.44",
// 				"isOnline": true,
// 				"avatarUrl": "https://scontent.fiev13-1.fna.fbcdn.net/v/t1.0-9/944993_737146193094013_5672080899067667646_n.jpg?_nc_cat=107&cb=846ca55b-ee17756f&ccb=2&_nc_sid=09cbfe&_nc_ohc=SyPoRklCbqAAX9Iyd7J&_nc_ht=scontent.fiev13-1.fna&oh=c7b2cd2853d192f8a2d0de8baefb17e7&oe=5FEA9D29",
// 				"contacts": ["id0001", "id0003"]
// 			},
// 			"id0003": {
// 				"login": "CCC@111",
// 				"password": "ccc111ccc",
// 				"userId": "id0003",
// 				"name": "Name Three",
// 				"birthDate": "00.11.33",
// 				"city": "some town",
// 				"education": "some education",
// 				"webSite": "some webSite",
// 				"voutedLike": [],
// 				"voutedDislike": [],
// 				"registerDate": "44.44.44",
// 				"isOnline": false,
// 				"avatarUrl": "https://i.pinimg.com/236x/df/02/f2/df02f287609f6f06224622be9e3a588c--second-life-life-photography.jpg",
// 				"contacts": ["id0002", "id0006"]
// 			},
// 			"id0004": {
// 				"login": "DDD@111",
// 				"password": "ddd111ddd",
// 				"userId": "id0004",
// 				"name": "Name Four",
// 				"birthDate": "00.11.44",
// 				"city": "some town",
// 				"education": "some education",
// 				"webSite": "some webSite",
// 				"voutedLike": [],
// 				"voutedDislike": [],
// 				"registerDate": "55.55.55",
// 				"isOnline": true,
// 				"avatarUrl": "https://i.pinimg.com/originals/41/83/04/418304673aa2ab05fd39640c99e71828.jpg",
// 				"contacts": ["id0003"]
// 			},
// 			"id0005": {
// 				"login": "EEE@111",
// 				"password": "eee111eee",
// 				"userId": "id0005",
// 				"name": "Name Five",
// 				"birthDate": "00.11.55",
// 				"city": "some town",
// 				"education": "some education",
// 				"webSite": "some webSite",
// 				"voutedLike": [],
// 				"voutedDislike": [],
// 				"registerDate": "55.55.55",
// 				"isOnline": false,
// 				"avatarUrl": "https://avatarfiles.alphacoders.com/257/thumb-257122.jpg",
// 				"contacts": ["id0003", "id0001"]
// 			},
// 			"id0006": {
// 				"login": "FFF@111",
// 				"password": "fff111fff",
// 				"userId": "id0006",
// 				"name": "Name Six",
// 				"birthDate": "00.11.66",
// 				"city": "some town",
// 				"voutedLike": [],
// 				"voutedDislike": [],
// 				"education": "some education",
// 				"webSite": "some webSite",
// 				"registerDate": "66.66.66",
// 				"avatarUrl": "https://i.pinimg.com/originals/ba/ef/fc/baeffcbd32fbbb407584195f5d7bde23.jpg",
// 				"isOnline": false,
// 				"contacts": ["id0001", "id0002"]
// 			}
// 		},
// 		postsBase: {
// 			"id0001": [
// 				{
// 					"id": "00001",
// 					"userId": "id0001",
// 					"nikName": "First Name",
// 					"dataDate": "11.11.11",
// 					"dataTime": "12:11",
// 					"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutafg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 					"reply": [
// 						{
// 							"id": "00011",
// 							"userId": "id0002",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": [
// 								{
// 									"id": "00111",
// 									"userId": "id0003",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								},
// 								{
// 									"id": "00211",
// 									"userId": "id0004",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								},
// 								{
// 									"id": "00311",
// 									"userId": "id0005",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								}
// 							]
// 						},
// 						{
// 							"id": "00021",
// 							"userId": "id0001",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": [
// 								{
// 									"id": "00121",
// 									"userId": "id0004",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								}
// 							]
// 						},
// 						{
// 							"id": "00021",
// 							"userId": "id0005",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": []
// 						}
// 					]
// 				}
// 			],
// 			"id0002": [
// 				{
// 					"id": "00001",
// 					"userId": "id0002",
// 					"nikName": "First Name",
// 					"dataDate": "11.11.11",
// 					"dataTime": "12:11",
// 					"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 					"reply": [
// 						{
// 							"id": "00011",
// 							"userId": "id0002",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": [
// 								{
// 									"id": "00311",
// 									"userId": "id0005",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								}
// 							]
// 						},
// 						{
// 							"id": "00021",
// 							"userId": "id0001",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": []
// 						},
// 						{
// 							"id": "00021",
// 							"userId": "id0005",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": []
// 						},
// 						{
// 							"id": "00021",
// 							"userId": "id0005",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": []
// 						},
// 						{
// 							"id": "00021",
// 							"userId": "id0005",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": []
// 						}
// 					]
// 				}
// 			],
// 			"id0003": [
// 				{
// 					"id": "00001",
// 					"userId": "id0003",
// 					"nikName": "First Name",
// 					"dataDate": "11.11.11",
// 					"dataTime": "12:11",
// 					"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 					"reply": [
// 						{
// 							"id": "00011",
// 							"userId": "id0002",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": [
// 								{
// 									"id": "00111",
// 									"userId": "id0003",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								}
// 							]
// 						},
// 						{
// 							"id": "00021",
// 							"userId": "id0003",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": [
// 								{
// 									"id": "00121",
// 									"userId": "id0004",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								}
// 							]
// 						},
// 						{
// 							"id": "00021",
// 							"userId": "id0003",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": []
// 						}
// 					]
// 				}
// 			],
// 			"id0004": [
// 				{
// 					"id": "00001",
// 					"userId": "id0004",
// 					"nikName": "First Name",
// 					"dataDate": "11.11.11",
// 					"dataTime": "12:11",
// 					"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 					"reply": [
// 						{
// 							"id": "00011",
// 							"userId": "id0002",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": [
// 								{
// 									"id": "00311",
// 									"userId": "id0001",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								},
// 								{
// 									"id": "00311",
// 									"userId": "id0002",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								}
// 							]
// 						},
// 						{
// 							"id": "00021",
// 							"userId": "id0005",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": []
// 						}
// 					]
// 				},
// 				{
// 					"id": "00001",
// 					"userId": "id0004",
// 					"nikName": "First Name",
// 					"dataDate": "11.11.11",
// 					"dataTime": "12:11",
// 					"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 					"reply": [
// 						{
// 							"id": "00011",
// 							"userId": "id0002",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": [
// 								{
// 									"id": "00311",
// 									"userId": "id0001",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								},
// 								{
// 									"id": "00311",
// 									"userId": "id0002",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								}
// 							]
// 						},
// 						{
// 							"id": "00021",
// 							"userId": "id0005",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": []
// 						}
// 					]
// 				},
// 				{
// 					"id": "00001",
// 					"userId": "id0004",
// 					"nikName": "First Name",
// 					"dataDate": "11.11.11",
// 					"dataTime": "12:11",
// 					"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 					"reply": [
// 						{
// 							"id": "00011",
// 							"userId": "id0002",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": [
// 								{
// 									"id": "00311",
// 									"userId": "id0001",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								},
// 								{
// 									"id": "00311",
// 									"userId": "id0002",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								}
// 							]
// 						},
// 						{
// 							"id": "00021",
// 							"userId": "id0005",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": []
// 						}
// 					]
// 				},
// 				{
// 					"id": "00001",
// 					"userId": "id0004",
// 					"nikName": "First Name",
// 					"dataDate": "11.11.11",
// 					"dataTime": "12:11",
// 					"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 					"reply": [
// 						{
// 							"id": "00011",
// 							"userId": "id0002",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": [
// 								{
// 									"id": "00311",
// 									"userId": "id0001",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								},
// 								{
// 									"id": "00311",
// 									"userId": "id0002",
// 									"nikName": "First Nested Name",
// 									"dataDate": "12.34.56",
// 									"dataTime": "12:34",
// 									"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf"
// 								}
// 							]
// 						},
// 						{
// 							"id": "00021",
// 							"userId": "id0005",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": []
// 						}
// 					]
// 				}
// 			],
// 			"id0005": [
// 				{
// 					"id": "00001",
// 					"userId": "id0005",
// 					"nikName": "First Name",
// 					"dataDate": "11.11.11",
// 					"dataTime": "12:11",
// 					"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 					"reply": [
// 						{
// 							"id": "00021",
// 							"userId": "id0001",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": []
// 						},
// 						{
// 							"id": "00021",
// 							"userId": "id0005",
// 							"nikName": "First Reply Name",
// 							"dataDate": "12.34.56",
// 							"dataTime": "12:34",
// 							"textBody": "safg dfgslgjk ouhiyhvb yfcfy kbklb utfyt njjkbnio uyugvy ibi yutf",
// 							"nestedReply": []
// 						}
// 					]
// 				}
// 			],
// 			"id0006": [
// 				// {
// 				// 	"id": 1,
// 				// 	"userId": "id0006",
// 				// 	"nikName": "First Name",
// 				// 	"dataDate": "11.11.11",
// 				// 	"dataTime": "12:11",
// 				// 	"textBody": "АДИН",
// 				// 	"reply": []
// 				// },
// 				// {
// 				// 	"id": 2,
// 				// 	"userId": "id0006",
// 				// 	"nikName": "First Name",
// 				// 	"dataDate": "11.11.11",
// 				// 	"dataTime": "12:11",
// 				// 	"textBody": "ДВА",
// 				// 	"reply": []
// 				// }
// 			]
// 		},
// 		dialogBase: {
// 			"id0001": [
// 				{
// 					"id": "111",
// 					"userId": "id0001",
// 					"opponentId": "id0002",
// 					"name": "Name One",
// 					"lastVisit": "11.11.12",
// 					"messages": [
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, irit? Quos?",
// 						"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"sadfasdfsdfsadfasdfasd"
// 					]
// 				},
// 				{
// 					"id": "112",
// 					"userId": "id0001",
// 					"opponentId": "id0003",
// 					"name": "Name One",
// 					"lastVisit": "11.11.12",
// 					"messages": [
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, irit? Quos?",
// 						"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"sadfasdfsdfsadfasdfasd"
// 					]
// 				},
// 				{
// 					"id": "113",
// 					"userId": "id0001",
// 					"opponentId": "id0006",
// 					"name": "Name One",
// 					"lastVisit": "11.11.12",
// 					"messages": [
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, irit? Quos?",
// 						"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"sadfasdfsdfsadfasdfasd"
// 					]
// 				},
// 				{
// 					"id": "114",
// 					"userId": "id0001",
// 					"opponentId": "id0006",
// 					"name": "Name One",
// 					"lastVisit": "11.11.12",
// 					"messages": [
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, irit? Quos?",
// 						"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"sadfasdfsdfsadfasdfasd"
// 					]
// 				}
// 			],
// 			"id0002": [
// 				{
// 					"id": "111",
// 					"userId": "id0002",
// 					"opponentId": "id0004",
// 					"name": "Name Four",
// 					"lastVisit": "11.11.12",
// 					"messages": [
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, irit? Quos?",
// 						"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"sadfasdfsdfsadfasdfasd"
// 					]
// 				},
// 				{
// 					"id": "112",
// 					"userId": "id0002",
// 					"opponentId": "id0006",
// 					"name": "Name Six",
// 					"lastVisit": "11.11.12",
// 					"messages": [
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, irit? Quos?",
// 						"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"sadfasdfsdfsadfasdfasd"
// 					]
// 				},
// 				{
// 					"id": "113",
// 					"userId": "id0002",
// 					"opponentId": "id0005",
// 					"name": "Name Five",
// 					"lastVisit": "11.11.12",
// 					"messages": [
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, irit? Quos?",
// 						"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"sadfasdfsdfsadfasdfasd"
// 					]
// 				}
// 			],
// 			"id0003": [
// 				{
// 					"id": "111",
// 					"userId": "id0003",
// 					"opponentId": "id0002",
// 					"name": "Name Two",
// 					"lastVisit": "11.11.12",
// 					"messages": [
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, irit? Quos?",
// 						"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"sadfasdfsdfsadfasdfasd"
// 					]
// 				},
// 				{
// 					"id": "112",
// 					"userId": "id0003",
// 					"opponentId": "id0004",
// 					"name": "Name Four",
// 					"lastVisit": "11.11.12",
// 					"messages": [
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, irit? Quos?",
// 						"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"sadfasdfsdfsadfasdfasd"
// 					]
// 				}
// 			],
// 			"id0004": [],
// 			"id0005": [],
// 			"id0006": [
// 				{
// 					"id": "111",
// 					"userId": "id0003",
// 					"opponentId": "id0002",
// 					"name": "Name Two",
// 					"lastVisit": "11.11.12",
// 					"messages": [
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, irit? Quos?",
// 						"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"sadfasdfsdfsadfasdfasd"
// 					]
// 				},
// 				{
// 					"id": "112",
// 					"userId": "id0003",
// 					"opponentId": "id0004",
// 					"name": "Name Four",
// 					"lastVisit": "11.11.12",
// 					"messages": [
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, irit? Quos?",
// 						"Lorem, ipsum dolorolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ratione distinctio amet praesentium temporibus exercitationem incidunt dolore harum dicta, dolores recusandae non sapiente, est ut veritatis vero quis reprehenderit? Quos?",
// 						"sadfasdfsdfsadfasdfasd"
// 					]
// 				}
// 			]
// 		},
// 		postsCount: 0,
// 		dialogsCount: 0,
// 		currentPostText: "",
// 		isUserExist: false
// 	},
// 	//===========state end=========================================//
// 	//===========rerender subscriber===============================//
// 	getState() { return this._state },
// 	_subscriber() { },
// 	subscribe(observer) {
// 		this._subscriber = observer
// 	},
// 	//=================rerender subscriber end=====================//
// 	//-------------------------------------------------------------
// 	//===========dispatcher =======================================//
// 	dispatch(action) {
// 		this._state = userBaseReduser(this._state, action)
// 		this._state = postBaseReduser(this._state, action)
// 		this._state = dialogBaseReducer(this._state, action)

// 		this._subscriber(store)
// 	}
// }
// //===========dispatcher end====================================//


// // console.log("user base", store._state.userBase)
// // console.log("cur user", store._state.currentUserId)
// export default store

