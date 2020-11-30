import React from 'react'
import './dialogs.scss';
import DialogsItem from './DialogsItem';
import opponentPicture from './../../../../images/avatars/id0002.jpeg'




class Dialogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//isOnline: false,
			opponentPic: opponentPicture
		};
		this.userBase = this.props.userBase
		this.dialogBase = this.props.dialogBase
		this.currentUserId = this.props.currentUserId
		console.log("Dialogs props", this.currentUserId)


	}
	render() {
		return (
			<>
				<div className="dialogs__wrapper">
					<div className="dialogs__title">Your contacts and recent conversations</div>
					{
						this.dialogBase[this.currentUserId]
							? this.dialogBase[this.currentUserId].map((item, index) => (item ? <DialogsItem
								opponentName={this.dialogBase[this.currentUserId][index].name}
								lastDate={this.dialogBase[this.currentUserId][index].lastVisit}
								opponentId={this.dialogBase[this.currentUserId][index].opponentId}
								statusText={this.userBase[this.dialogBase[this.currentUserId][index].opponentId].isOnline ? "Online" : "Offline"}
								statusColor={this.userBase[this.dialogBase[this.currentUserId][index].opponentId].isOnline ? "green" : "red"}
								totalMessages={this.dialogBase[this.currentUserId][index].messages.length}
								lastMessage={this.dialogBase[this.currentUserId][index].messages[this.dialogBase[this.currentUserId][index].messages.length - 1]}
								opponentPic={this.userBase[this.dialogBase[this.currentUserId][index].opponentId].avatarUrl}
								dialogItemId={this.dialogBase[this.currentUserId][index].id}
								currentUserId={this.currentUserId}
								currentPic={this.userBase[this.currentUserId].avatarUrl}
								key={Math.floor(Math.random() * 10000)}
							/> : <div>No any dialogs yet</div>))
							: <div>No any dialogs yet</div>
					}
					{/* {console.log(Math.floor(Math.random() * 10000))} */}
				</div>
			</>
		);
	}
}
export default Dialogs;