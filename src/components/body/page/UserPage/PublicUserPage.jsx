import React from 'react'
import './usersPage.scss';
import UsersPageItem from './UsersPageItem';




function UsersPage(props) {
	let userBaseArray = Object.values(props.userBase)
	return (
		<div className="userPage__wrapper">
			{
				props.userBase
					? userBaseArray.map((user, index) => (user ? <UsersPageItem
						key={index}
						//data
						aaa={user}
						userBase={props.userBase}
						currentUserId={props.currentUserId}
						userAvatar={userBaseArray[index].avatarUrl}
						userName={userBaseArray[index].name}
						registerDate={userBaseArray[index].registerDate}
						userId={userBaseArray[index].userId}
						statusText={userBaseArray[index].statusText}
						//functions
						toFollow={props.toFollow}
						cardFlip={props.cardFlip}
						toChat={props.toChat}
					/> : null))

					: null
			}
			<button className="body-page__authorization_button"
				onClick={(event) => props.showMoreUsers(event)}
			>Show More</button>
		</div>
	);
}
export default UsersPage;