import React from 'react'
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
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

function App() {
	return (
		<div className="App">
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

export default App;
