import React from 'react'
import { Link } from 'react-router-dom';
import { pageMove } from "./../../../../App.js"
import './dialogs.scss';



function DialogsItem(props) {

	let userProfilePath = {
		pathname: "/src/components/body/page/profile/Profile",
		currentUserId: props.opponentId,
		userBase: props.userBase,
		postsBase: props.postsBase,
		dialogBase: props.dialogBase
	}
	let userPostsPath = {
		pathname: "/src/components/body/page/postlog/Posts",
		currentUserId: props.opponentId,
		userBase: props.userBase,
		postsBase: props.postsBase,
		dialogBase: props.dialogBase
	}

	const deleteItem = (event) => {
		let dialogItem = event.target.parentNode.parentNode
		dialogItem.style.right = "150%"
		setTimeout(() => dialogItem.style.display = "none", 800);
	}

	return (
		<div className="dialogs-item">
			<div className="dialogs-item__contact">
				<div className="dialogs-item__avatar">
					<img className="dialog-avatar" src={props.opponentPic} alt="heroPicture" />
				</div>
				<div className="dialogs-item__info">
					<div className="dialogs-item__info_name">{props.opponentName}</div>
					<div className="dialogs-item__info_date">Last time was here: {props.lastDate}</div>
					<div className="dialogs-item__info_id"> user id: {props.opponentId}&nbsp;&nbsp;&nbsp;log id: {props.dialogItemId}</div>
				</div>
				<div className="dialogs-item__contact_status">{props.statusText}</div>
				<div className="dialogs-item__contact_status-color" style={{ background: props.statusColor }}></div>
				<div onClick={deleteItem} className="dialogs-item__contact_delete-tab"></div>
				<Link
					to={userProfilePath}
					onClick={pageMove}
					className="dialogs-item__contact_watch-info "
				></Link>
			</div>
			<div className="dialogs-item__conversations">
				<div className="dialogs-item__avatar">
					<img className="dialog-avatar" src={props.currentPic} alt="heroPicture" />
				</div>
				<div className="dialogs-item__avatar">
					<img className="dialog-avatar" src={props.opponentPic} alt="opponentPicture" />
				</div>
				<div className="dialogs-item__recent-messages">
					<Link
						onClick={pageMove}
						to={userPostsPath}
						className="dialogs-item__recent-messages_title"
					>Total messages: &nbsp; <b>{props.totalMessages}</b> <span>Open log</span> </Link>
					{props.lastMessage}
				</div>
			</div>
		</div>
	)
}
export default DialogsItem;