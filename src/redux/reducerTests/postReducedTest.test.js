import postBaseReducer, { ADD_NEW_POST_actionCreator, ADD_NEW_REPLY_actionCreator, ADD_NEW_NESTED_REPLY_actionCreator } from '../postBaseReducer'

test('new post should be added properly', () => {
	let action = ADD_NEW_POST_actionCreator("id0001", "TestName")
	let state = {
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
			]
		},
		postsCount: 1,
		currentPostText: "Test message inside post",
	}


	let newState = postBaseReducer(state, action)

	expect(newState.postsBase["id0001"].length).toBe(2)
});
