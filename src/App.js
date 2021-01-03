import AuthorizationContainer from './components/body/page/profile/AuthorizationContainer';
import RegistrationContainer from './components/body/page/profile/RegistrationContainer';
import HeaderContainer from './components/header/HeaderContainer';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import store from "./redux/reduxStore"
import { Provider } from 'react-redux';
import React, { useEffect, useState } from 'react'
import './App.css';
import { ThemeConsumer, ThemeProvider } from './redux/ThemeContext';



export const pageMove = (event) => {//global function for page animation
	if (window.location.href === event.target.href) { return }
	let page = document.querySelector(".body-page")
	let pageCover = document.querySelector(".body-page_cover")
	page.style.right = "120%"
	pageCover.style.display = "block"
	setTimeout(() => {
		page.style.right = "0%"
		pageCover.style.display = "none"
	}, 400);
}




function App(props) {
	useEffect(() => {
		

		if (localStorage.getItem("usertype") !== "hardcoded") {
			props.getProfile(props.currentUserId, true)
		}
	})
	//console.log("app", props)
	const [lightTheme, setTheme] = useState(false)
	const themeChange = () => {
		setTheme(!lightTheme)
	}




	if (props.isAuthorized || localStorage.getItem("currentUserId")) {
		return (//autorized user
			<div className="App">
				<Provider store={store}>
					<ThemeProvider value={lightTheme} >
						<BrowserRouter basename="/react-social-network/">
							<HeaderContainer />
							<Body temporaryID={props.temporaryID} isAuthorized={props.isAuthorized} themeChange={themeChange} />
						</BrowserRouter>
						<Footer />
					</ThemeProvider>
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



