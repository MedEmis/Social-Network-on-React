import React from 'react'
import './dialogs.scss';
import DialogsItem from './DialogsItem';




function Dialogs(props) {
	let userBase = props.userBase
	let dialogBase = props.dialogBase
	let currentUserId = props.currentUserId
	//console.log("Dialogs props",  currentUserId)

	return (
		<>
			<div className="dialogs__wrapper">
				<div className="dialogs__title">Your contacts and recent conversations</div>
				{
					dialogBase[currentUserId]
						? dialogBase[currentUserId].map((item, index) => (item ? <DialogsItem
							opponentName={dialogBase[currentUserId][index].name}
							lastDate={dialogBase[currentUserId][index].lastVisit}
							opponentId={dialogBase[currentUserId][index].opponentId}
							statusText={userBase[dialogBase[currentUserId][index].opponentId].isOnline ? "Online" : "Offline"}
							statusColor={userBase[dialogBase[currentUserId][index].opponentId].isOnline ? "green" : "red"}
							totalMessages={dialogBase[currentUserId][index].messages.length}
							lastMessage={dialogBase[currentUserId][index].messages[dialogBase[currentUserId][index].messages.length - 1]}
							opponentPic={userBase[dialogBase[currentUserId][index].opponentId].avatarUrl}
							dialogItemId={dialogBase[currentUserId][index].id}
							currentUserId={currentUserId}
							currentPic={userBase[currentUserId].avatarUrl}
							key={Math.floor(Math.random() * 10000)}
						/> : <div>No any dialogs yet</div>))
						: <div>No any dialogs yet</div>
				}
				{/* {console.log(Math.floor(Math.random() * 10000))} */}
			</div>
		</>
	);
}
export default Dialogs;