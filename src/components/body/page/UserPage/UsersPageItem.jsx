import React, { useState } from 'react'
import './usersPage.scss';
let classNames = require('classnames');



function UsersPageItem(props) {
	let Iffollowed;
	if (props.userBase[props.currentUserId].contacts.includes(props.userId)) {
		Iffollowed = true
	} else {
		Iffollowed = false
	}

	return (
		<div className="userPage__news-item">
			{/* <div className="userPage__avatar">
				<img className="dialog-avatar" src={props.userAvatar} alt="heroPicture" />
			</div> */}
			<div className="userPage__info">
				{/* <div className="userPage__info_title">
					<div className="userPage__info_title-item name">{props.userName}</div>
					<div className="userPage__info_title-item id">{props.userId}</div>
					<div className="userPage__info_title-item reg-date">Here from: {props.registerDate}</div>
				</div>
				<div className="userPage__info_status">{props.statusText}</div>
				<div className="userPage__info_buttons">
					<div className={classNames("userPage__info_buttons-item follow", { " is-flipped": Iffollowed })}
						onClick={(event) => {
							props.toFollow(event, props.currentUserId, props.userBase)
						}
						}
					>Follow</div>
					<div className="userPage__info_buttons-item chat"
						onClick={(event) => props.toChat(event)}
					>chat</div>
					<div className="userPage__info_buttons-item feature">feature</div>
				</div> */}
			</div>

		</div >
	);
}
export default UsersPageItem;