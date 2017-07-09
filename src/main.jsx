import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import configureStore from './store/configureStore.jsx';

import App from './components/App/AppContainer';

import './main.sass';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('app')
);