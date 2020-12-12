import React from 'react'
import './usersPage.scss';



function UsersPageItem(props) {
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
					<div className="userPage__info_buttons-item follow"
						onClick={(event) => {
							props.toFollow(event)
							props.cardFlip(event)
						}
						}
					>Follow</div>






					<div className="userPage__info_buttons-item chat"
						onClick={(event) => props.toChat(event)}
					>chat</div>
					<div className="userPage__info_buttons-item feature">feature</div>
				</div>
			</div>

		</div>
	);
}
export default UsersPageItem;