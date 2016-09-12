import { combineReducers } from 'redux';
import settledBets from './settledReducer';
import unSettledBets from './unSettledReducer';

const rootReducer = combineReducers({
    settledBets,
    unSettledBets
});

export default rootReducer;