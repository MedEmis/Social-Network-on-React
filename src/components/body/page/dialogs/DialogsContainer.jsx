import Dialogs from './Dialogs';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {//data for connect in state
	return {
		userId: state.authReducer.currentUserId,
		userBase: state.usersReducer.userBase,
		dialogBase: state.dialogsReducer.dialogBase
	}
}
let mapDispatchToProps = (dispatch) => {//functions for connect is dispatch
	return {}
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)




export default DialogsContainer;