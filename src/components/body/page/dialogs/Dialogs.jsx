import React from 'react'
import './dialogs.scss';
import DialogsItem from './DialogsItem';
import opponentPicture from './../../../../images/opponent.jpeg'




class Dialogs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOnline: false,
			opponentPic: opponentPicture
		};
		this.userBase = this.props.userBase
		this.dialogBase = this.props.dialogBase
		//console.log("Dialogs props", this.props)


	}
	render() {
		return (
			<>
				<div className="dialogs__wrapper">
					<div className="dialogs__title">Your contacts and recent conversations</div>
					{
						this.dialogBase.dialogs.map((item, index) => (item ? <DialogsItem
							key={Math.floor(Math.random() * 10000)}
							nikName={this.dialogBase.dialogs[index].name}
							lastDate={this.dialogBase.dialogs[index].lastVisit}
							statusText={this.state.isOnline ? "Online" : "Offline"}
							status={this.state.isOnline ? "green" : "red"}
							totalMessages={this.dialogBase.dialogs[index].messages.length}
							lastMessage={this.dialogBase.dialogs[index].messages[this.dialogBase.dialogs[index].messages.length - 1]}
							opponentPic={this.state.opponentPic}
							dialogItemId={this.dialogBase.dialogs[index].id}
							userId={this.dialogBase.dialogs[index].userId}
						/> : null))
					}
					{/* {console.log(this.dialogBase.dialogs.filter(item => item.userId === "0004"))} */}
				</div>
			</>
		);
	}
}
export default Dialogs;