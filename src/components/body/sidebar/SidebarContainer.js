import BodySidebar from './BodySidebar';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {//data for connect in state
	return {}
}
let mapDispatchToProps = (dispatch) => {//functions for connect is dispatch
	return {
		//themeChange: props.themeChange
	}
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(BodySidebar)




export default SidebarContainer;