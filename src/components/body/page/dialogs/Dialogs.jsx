import React from 'react'
import './dialogs.scss';
import DialogsItem from './DialogsItem';




function Dialogs(props) {

	let userBase = props.userBase
	let dialogBase = props.dialogBase
	let currentUserId = props.userId
	let currentUser = userBase.filter(item => item.userId === currentUserId)[0]
	//console.log(currentUser)
	return (

		<div className="dialogs__wrapper">
			<div className="dialogs__title">Your contacts and recent conversations</div>
			{
				dialogBase[currentUserId]
					? dialogBase[currentUserId].map((item, index) => (item ? <DialogsItem
						lastDate={dialogBase[currentUserId][index].lastVisit}
						userBase={props.userBase}
						opponentId={dialogBase[currentUserId][index].opponentId}
						totalMessages={dialogBase[currentUserId][index].messages.length}
						lastMessage={dialogBase[currentUserId][index].messages[dialogBase[currentUserId][index].messages.length - 1]}
						dialogItemId={dialogBase[currentUserId][index].id}
						currentUserId={currentUserId}
						currentPic={currentUser.avatarUrl}
						key={dialogBase[currentUserId][index].id}
					/> : <div>No any dialogs yet</div>))
					: <div>No any dialogs yet</div>
			}
			{/* {console.log(Math.floor(Math.random() * 10000))} */}
		</div>
	)
}
export default Dialogs;