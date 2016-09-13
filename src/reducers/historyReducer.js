import * as types from '../actions/actionTypes';

export default function historyReducer(state = [], action = {}) {
    switch (action.type) {
        case types.LOAD_PAST_SUCCESS:
            return [...action.history];
        default:
            return state;
    }
}