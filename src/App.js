import React from 'react'
import HeaderContainer from './components/header/HeaderContainer';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Registration from './components/body/page/profile/Registration';
import Authorization from './components/body/page/profile/Autorization';
import { USER_LOG_INactionCreator, CREATE_NEW_USERactionCreator } from './redux/userBaseReducer';
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
	//console.log("App props",       props.appState)
	const userLogIn = (event) => {
		props.dispatch(USER_LOG_INactionCreator(event))
	}
	const userCreation = (userInfo) => {
		props.dispatch(CREATE_NEW_USERactionCreator(userInfo))
	}
	if (props.currentUserId) {
		return (//autorized user
			<div className="App">
				<BrowserRouter>
					<Switch>
						<>
							<HeaderContainer />
							<Body />
						</>
						<div className="body-main">
							<div className="body-page">
								<span className="body-page_cover"></span>
								<Route exact path='/'>
									<Authorization
										dispatch={props.dispatch}
									/>
								</Route>
							</div>
						</div>
					</Switch>
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
							<Route exact path='/'>
								<Authorization
									userLogIn={userLogIn}
								/>
							</Route>
							<Route exact path='/registration' render={() =>
								<Registration
									isUserExist={props.isUserExist}
									userCreation={userCreation}
								/>
							} />
						</div>
					</div>
				</BrowserRouter>
				<Footer />
			</div>
		);
	}

}
export default App;



