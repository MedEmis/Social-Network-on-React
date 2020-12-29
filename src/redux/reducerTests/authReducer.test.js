import authReducer, { CREATE_NEW_USERactionCreator } from '../authReducer'

test('user should be created (or need to uncomment fake user.push() action in authReducer )', () => {
	let userData = {
		userName: "test",
		userdateOfbirth: "test000",
		userCity: "test",
		userEmail: "test",
		userPassword: "test",
		userWebsite: "test",
		userAvatar: "test"
	}
	let usersState = {
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
			}
		],
		profile: null,
		displayedUsers: 4,
		isFetching: null,
		isUserExist: false,
		totalUsersCount: 0,
		userStatus: null,
		currentUsersPage: +localStorage.getItem("currentUserPage"),
	}
	let action = CREATE_NEW_USERactionCreator(userData)
	let newState = authReducer(usersState, action)
	//expect(newState.userBase.length).toBe(2)
})
