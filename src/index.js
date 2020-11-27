import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import userBase from './users.json'
import postsBase from './posts.json'
import dialogBase from './dialogs.json'

const currentUserId = "id0001"//<<<==  USER

ReactDOM.render(
	<React.StrictMode>
		<App
			currentUserId={currentUserId}
			userBase={userBase}
			postsBase={postsBase}
			dialogBase={dialogBase}
		/>
	</React.StrictMode>,
	document.getElementById('root')
);

















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
