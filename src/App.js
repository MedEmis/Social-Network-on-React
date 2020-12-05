import React from 'react'
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

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
		return (
			<div className="App">
				<Header
					headerState={this.props.appState}
					dispatch={this.props.dispatch}
				/>
				<Body
					bodyState={this.props.appState}
					dispatch={this.props.dispatch}
				/>
				<Footer />
			</div>
		);
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
