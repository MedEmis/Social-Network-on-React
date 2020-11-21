import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);


//for mini-menu start
// var buttonContainer = document.querySelector('.button-container');
// var overlay = document.querySelector('.overlay');
// var mobileCanvas = document.querySelector('.mobile-canvas')

// buttonContainer.addEventListener('click', function () {
// 	buttonContainer.classList.toggle('open');
// 	mobileCanvas.classList.toggle('open');
// }, false);
//for mini-menu end


















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
