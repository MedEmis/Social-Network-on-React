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
			<App
				// appStore={store}
				appState={store.getState()}
				dispatch={store.dispatch.bind(store)}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
reRenderApp(store)
store.toSubscribe(reRenderApp)


reportWebVitals();

