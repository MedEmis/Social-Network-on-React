import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToPropsForRedirect = (state) => {//data for connect in state
	return {
		isAuthorized: state.authReducer.isAuthorized // dependency property for each component wrapped by this HOC. Will be given to each child of HOC
	}
}

export const WithAuthRedirect_HOC = (Component) => {
	class withRedirectComponent extends React.Component {
		render() {
			if (!this.props.isAuthorized) return <Redirect to="/" />//redirect to authorization page
			return <Component {...this.props} />//target component
		}
	}
	let connectForRedirectComponent = connect(mapStateToPropsForRedirect)(withRedirectComponent)// already wrapped component with connected property "isAuthorized"


	return connectForRedirectComponent
}
