import AuthorizationContainer from './components/body/page/profile/AuthorizationContainer';
import RegistrationContainer from './components/body/page/profile/RegistrationContainer';
import HeaderContainer from './components/header/HeaderContainer';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import store from "./redux/reduxStore"
import { Provider } from 'react-redux';
import React, { useEffect } from 'react'
import './App.css';

export const pageMove = (event) => {//global function for page animation
	if (window.location.href === event.target.href) { return }
	let page = document.querySelector(".body-page")
	let pageCover = document.querySelector(".body-page_cover")
	page.style.right = "120%"
	pageCover.style.display = "block"
	setTimeout(() => {
		page.style.right = "0%"
		pageCover.style.display = "none"
	}, 300);
}



function App(props) {
	useEffect(() => {
		props.getProfile(props.currentUserId, true)
	}, [props.currentUserId])
	//console.log("app", props)
	if (props.isAuthorized || localStorage.getItem("currentUserId")) {
		return (//autorized user
			<div className="App">
				<Provider store={store}>
					<BrowserRouter basename="/react-social-network/">
						<HeaderContainer />
						<Body temporaryID={props.temporaryID} isAuthorized={props.isAuthorized} />
					</BrowserRouter>
					<Footer />
				</Provider>
			</div>
		);
	} else {
		return (//not autorized user
			<div className="App">
				<Provider store={store}>
					<BrowserRouter basename="/react-social-network/">
						<div className="body-main">
							<div className="body-page">
								<span className="body-page_cover"></span>
								<Switch>
									<Route exact path='/' component={AuthorizationContainer} />
									<Route exact path='/registration' component={RegistrationContainer} />
								</Switch>
							</div>
						</div>
					</BrowserRouter>
				</Provider>
				<Footer />
			</div>
		);
	}

}
export default App;



