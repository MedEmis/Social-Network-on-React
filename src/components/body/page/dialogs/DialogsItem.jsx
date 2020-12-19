import React from 'react'
import { Link } from 'react-router-dom';
import { pageMove } from "./../../../../App.js"
import './dialogs.scss';



function DialogsItem(props) {
	let opponent = props.userBase.filter(item => item.userId === props.opponentId)[0]
	let statusText = opponent.isOnline ? "Online" : "Offline"
	let statusColor = opponent.isOnline ? "green" : "red"
	let opponentAvatar = opponent.avatarUrl
	let opponentName = opponent.name
	let userPostsPath = "/Posts"
	let userProfilePath = `/Profile/${opponent.userId}`
	const deleteItem = (event) => {
		let dialogItem = event.target.parentNode.parentNode
		dialogItem.style.right = "150%"
		setTimeout(() => dialogItem.style.display = "none", 800);
	}
	// console.log("dialog", props)
	return (
		<div className="dialogs-item">
			<div className="dialogs-item__contact">
				<div className="dialogs-item__avatar">
					<img className="dialog-avatar" src={opponentAvatar} alt="heroPicture" />
				</div>
				<div className="dialogs-item__info">
					<div className="dialogs-item__info_name">{opponentName}</div>
					<div className="dialogs-item__info_date">Last time was here: {props.lastDate}</div>
					<div className="dialogs-item__info_id"> user id: {props.opponentId}&nbsp;&nbsp;&nbsp;log id: {props.dialogItemId}</div>
				</div>
				<span className="dialogs-item__contact_status">{statusText}</span>
				<span className="dialogs-item__contact_status-color" style={{ background: statusColor }} />
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
					<img className="dialog-avatar" src={opponentAvatar} alt="opponentPicture" />
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