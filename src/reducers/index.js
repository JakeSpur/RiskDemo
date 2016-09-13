import { combineReducers } from 'redux';
import history from './historyReducer';
import future from './futureReducer';

const rootReducer = combineReducers({
    history,
    future
});

export default rootReducer;