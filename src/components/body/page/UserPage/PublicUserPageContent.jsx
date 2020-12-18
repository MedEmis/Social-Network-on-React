import React from 'react'
import UsersPageItem from './UsersPageItem';
import defaultAvatar from "./../../../../images/defaultUser.png"


let classNames = require('classnames');


function UsersPageContent(props) {
	return (
		<>
			{
				props.userBase
					//.slice(0, showItem)  =>to show only some elements
					? props.userBase.slice(0, props.displayedUsers).map((user, index) => (user ? <UsersPageItem
						key={props.userBase[index].userId}
						//data
						userBase={props.userBase}
						currentUserId={props.currentUserId}
						// userAvatar={ props.userBase[index].photos.large
						// 	?  props.userBase[index].photos.large
						// 	: defaultAvatar}
						userAvatar={props.userBase[index].avatarUrl
							? props.userBase[index].avatarUrl
							: defaultAvatar}
						userName={props.userBase[index].name}
						registerDate={props.userBase[index].registerDate}
						userId={props.userBase[index].userId}
						statusText={props.userBase[index].statusText}
						//functions
						toFollow={props.toFollow}
						toChat={props.toChat}
					/> : null))
					: null
			}
			<ul className="userPage__pagination-list">
				<span className="userPage__pagination-list_navig" onClick={(event) => {
					props.ChangePage(event)
					props.onPageChanged()
				}}  >prev</span>
				<div className="userPage__pagination-list_pages-container" >
					{/* creating pagination and comparing it with state current selected page */}
					{props.pagesArray.slice(0, 10).map(item => <li className={classNames("userPage__pagination-list_item", { " active": item === props.currentUsersPage })}
						key={item} name={item} onClick={(event) => {
							props.ChangePage(event)
							props.onPageChanged()
						}}>{item}</li>)}
				</div>
				<span className="userPage__pagination-list_navig" onClick={(event) => {
					props.ChangePage(event)
					props.onPageChanged()
				}}  >next</span>
				<span className="userPage__pagination-list_total" >total: {props.totalCount}</span>
			</ul>
		</>
	)

}
export default UsersPageContent;




{/* <div className="userPage__wrapper">
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
			</div> */}