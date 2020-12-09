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


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		//console.log("App props", this.props.appState)

		if (this.props.appState.usersReducer.currentUserId) {
			return (//autorized user
				<div className="App">
					<BrowserRouter>
						<Switch>
							<>
								<Header
									headerState={this.props.appState.usersReducer}
									dispatch={this.props.dispatch}
								/>
								<Body
									bodyState={this.props.appState}
									dispatch={this.props.dispatch}
								/>
							</>
							<div className="body-main">
								<div className="body-page">
									<span className="body-page_cover"></span>
									<Route exact path='/'>
										<Authorization dispatch={this.props.dispatch} />
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
									<Authorization dispatch={this.props.dispatch} />
								</Route>
								<Route exact path='/registration' render={() =>
									<Registration
										isUserExist={this.props.appState.usersReducer.isUserExist}
										dispatch={this.props.dispatch}
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
}
export default App;







// function App() {
// 	return (
// 		<div className="App">
// 			<Header />
// 			<Body />
// 			<Footer />
// 		</div>
// 	);
// }

//export default App;
