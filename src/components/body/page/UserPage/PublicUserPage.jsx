import React, { useState } from 'react'
import './usersPage.scss';
import UsersPageItem from './UsersPageItem';
import defaultAvatar from "./../../../../images/defaultUser.png"
import * as axios from "axios"



function UsersPage(props) {
	let userBaseArray = Object.values(props.userBase)
	const [showItem = 4, setShowItem] = useState()
	let usersUrl = "https://social-network.samuraijs.com/api/1.0/users"
	let users = axios.get(usersUrl)
	//.slice(0, showItem)  =>to show only some elements
	users.then(response => {
		console.log(typeof (Array.from(Object.values(response.data.items))))


	})


	return (
		<div className="userPage__wrapper">
			{


				{/* //.slice(0, showItem)  =>to show only some elements
				users.then(response => {
					Object.values(response.data.items)
						.map((user) => <UsersPageItem
						//data
						// userBase={props.userBase}
						// currentUserId={props.currentUserId}
						// userAvatar={userBaseArray[index].avatarUrl
						// 	? userBaseArray[index].avatarUrl
						// 	: defaultAvatar}
						// userName={userBaseArray[index].name}
						// registerDate={userBaseArray[index].registerDate}
						// userId={userBaseArray[index].userId}
						// statusText={userBaseArray[index].statusText}
						// //functions
						// toFollow={props.toFollow}
						// toChat={props.toChat}
						/>)

				}) */}



			}
			<button className="body-page__authorization_button"
				onClick={() => setShowItem(showItem + 4)}
			>Show More</button>
		</div>
	);
}
export default UsersPage;



// {
// 	props.userBase
// 		//.slice(0, showItem)  =>to show only some elements
// 		? userBaseArray.slice(0, showItem).map((user, index) => (user ? <UsersPageItem
// 			key={userBaseArray[index].userId}
// 			//data
// 			userBase={props.userBase}
// 			currentUserId={props.currentUserId}
// 			userAvatar={userBaseArray[index].avatarUrl
// 				? userBaseArray[index].avatarUrl
// 				: defaultAvatar}
// 			userName={userBaseArray[index].name}
// 			registerDate={userBaseArray[index].registerDate}
// 			userId={userBaseArray[index].userId}
// 			statusText={userBaseArray[index].statusText}
// 			//functions
// 			toFollow={props.toFollow}
// 			toChat={props.toChat}
// 		/> : null))
// 		: null
// }