import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.js';
import SettledPage from './components/settled/SettledPage';
import UnSettledPage from './components/unSettled/UnSettledPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={SettledPage} />
        <Route path="unsettled" component={UnsettledPage} />
    </Route>
);