import React from 'react'
import UsersPageItem from './UsersPageItem';
import defaultAvatar from "./../../../../images/defaultUser.png"



function UsersPageContent(props) {
	return (
		<div className="userPage__users-box" >
			{
				props.userBase
					//.slice(0, showItem)  =>to show only some elements
					? props.userBase.slice(0, props.displayedUsers).map((user, index) => (user ? <UsersPageItem
						key={props.userBase[index].userId || props.userBase[index].id}
						//data
						userBase={props.userBase}
						currentUserId={props.currentUserId}
						userAvatar={props.userBase[index].avatarUrl
							? props.userBase[index].avatarUrl || props.userBase[index].photos.small
							: defaultAvatar}
						userName={props.userBase[index].name}
						registerDate={props.userBase[index].registerDate}
						userId={props.userBase[index].userId || props.userBase[index].id}
						statusText={props.userBase[index].statusText}
						//functions
						followRequest={props.followRequest}
						toChat={props.toChat}
					/> : null))
					: null
			}
		</div>
	)

}

export default UsersPageContent;

