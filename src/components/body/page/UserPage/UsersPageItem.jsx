import React from 'react'
import { Link } from 'react-router-dom';
import './usersPage.scss';
import { pageMove } from "./../../../../App.js"
let classNames = require('classnames');



function UsersPageItem(props) {
	let Iffollowed;
	if (props.userBase.filter(item => item.userId === props.currentUserId)[0].contacts.includes(String(props.userId))) {//my ID array is String, but from server => Number
		Iffollowed = true
	} else {
		Iffollowed = false
	}
	let usersPath = `/Profile/${props.userId}`

	return (
		<div className="userPage__news-item">
			<div className="userPage__avatar">
				<img className="dialog-avatar" src={props.userAvatar} alt="heroPicture" />
			</div>
			<div className="userPage__info">
				<div className="userPage__info_title">
					<div className="userPage__info_title-item name">{props.userName}</div>
					<div className="userPage__info_title-item id">{props.userId}</div>
					<div className="userPage__info_title-item reg-date">Here from: {props.registerDate}</div>
				</div>
				<div className="userPage__info_status">{props.statusText}</div>
				<div className="userPage__info_buttons">
					<button className={classNames("userPage__info_buttons-item follow", { " is-flipped": Iffollowed })}
						disabled={false}
						onClick={(event) => props.followRequest(event)}
					>Follow</button>
					<button className="userPage__info_buttons-item chat"
						onClick={(event) => {
							props.toChat(event)
						}}
					>chat</button>
					<Link className="userPage__info_buttons-item feature" to={usersPath} onClick={(event) => pageMove(event)}></Link>
				</div>
			</div>

		</div >
	);
}
export default UsersPageItem;