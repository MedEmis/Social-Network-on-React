import React from 'react'
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Registration from './components/body/page/profile/Registration';
import Authorization from './components/body/page/profile/Autorization';

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

	if (props.appState.usersReducer.currentUserId) {
		return (//autorized user
			<div className="App">
				<BrowserRouter>
					<Switch>
						<>
							<Header
								headerState={props.appState.usersReducer}
								dispatch={props.dispatch}
							/>
							<Body
								bodyState={props.appState}
								dispatch={props.dispatch}
							/>
						</>
						<div className="body-main">
							<div className="body-page">
								<span className="body-page_cover"></span>
								<Route exact path='/'>
									<Authorization dispatch={props.dispatch} />
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
								<Authorization dispatch={props.dispatch} />
							</Route>
							<Route exact path='/registration' render={() =>
								<Registration
									isUserExist={props.appState.usersReducer.isUserExist}
									dispatch={props.dispatch}
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



