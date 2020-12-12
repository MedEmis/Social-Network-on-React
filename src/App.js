import React from 'react'
import HeaderContainer from './components/header/HeaderContainer';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import { Route, BrowserRouter } from 'react-router-dom'
import RegistrationContainer from './components/body/page/profile/RegistrationContainer';
import AuthorizationContainer from './components/body/page/profile/AuthorizationContainer';
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
	// console.log("app", props)
	if (props.currentUserId) {
		return (//autorized user
			<div className="App">
				<BrowserRouter>
					<HeaderContainer />
					<Body />
				</BrowserRouter>
				<Footer />
			</div>
		);
	} else {
		return (//not autorized user
			<div className="App">
				<BrowserRouter>
					<div className="body-main">
						<div className="body-page">
							<span className="body-page_cover"></span>
							<Route exact path='/' component={AuthorizationContainer} />
							<Route exact path='/registration' component={RegistrationContainer} />
						</div>
					</div>
				</BrowserRouter>
				<Footer />
			</div>
		);
	}

}
export default App;



