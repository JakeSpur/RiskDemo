import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app.js';
import RiskPage from './components/risk/RiskPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={RiskPage} />
    </Route>
);