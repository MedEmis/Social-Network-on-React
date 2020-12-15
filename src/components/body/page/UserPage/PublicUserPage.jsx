import React, { useState } from 'react'
import './usersPage.scss';
import UsersPageItem from './UsersPageItem';
import defaultAvatar from "./../../../../images/defaultUser.png"
import * as axios from "axios"



function UsersPage(props) {
	let userBaseArray = props.userBase
	const [showItem = 4, setShowItem] = useState()
	if (!userBaseArray.length || showItem > userBaseArray.length) {
		axios.get("https://social-network.samuraijs.com/api/1.0/users")
			.then(response => {
				props.setUsers(response.data.items)
			})
	} 
	// console.log(props.userBase)


	return (
		<div className="userPage__wrapper">
			{
				props.userBase
					//.slice(0, showItem)  =>to show only some elements
					? userBaseArray.slice(0, showItem).map((user, index) => (user ? <UsersPageItem
						key={userBaseArray[index].userId}
						//data
						userBase={props.userBase}
						currentUserId={props.currentUserId}
						userAvatar={userBaseArray[index].avatarUrl
							? userBaseArray[index].avatarUrl
							: defaultAvatar}
						userName={userBaseArray[index].name}
						registerDate={userBaseArray[index].registerDate}
						userId={userBaseArray[index].userId}
						statusText={userBaseArray[index].statusText}
						//functions
						toFollow={props.toFollow}
						toChat={props.toChat}
					/> : null))
					: null
			}
			<button className="body-page__authorization_button"
				onClick={() => setShowItem(showItem + 4)}
			>Show More</button>
		</div>
	);
}
export default UsersPage;


