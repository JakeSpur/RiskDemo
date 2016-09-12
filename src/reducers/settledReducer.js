import * as types from '../actions/actionTypes';

export default function settledReducer(state = [], action = {}) {
    switch (action.type) {
        case types.LOAD_SETTLED_SUCCESS:
            return [...action.bets];
        default:
            return state;
    }
}