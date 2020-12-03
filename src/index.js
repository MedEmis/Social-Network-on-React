import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store"

let reRenderApp = (store) => {
	// console.log("index", store.getState())
	ReactDOM.render(
		<React.StrictMode>
			<App appStore={store} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}
reRenderApp(store)
store.toSubscribe(reRenderApp)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

