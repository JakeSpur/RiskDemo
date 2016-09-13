import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store';
import * as actions from './actions/riskActions';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const store = configureStore();
store.dispatch(actions.loadPastRisk());
store.dispatch(actions.loadFutureRisk());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    , document.querySelector('.container'));