import * as types from '../actions/actionTypes';

export default function unSettledReducer(state = [], action = {}) {
    switch (action.type) {
        case types.LOAD_UNSETTLED_SUCCESS:
            return [...action.bets];
        default:
            return state;
    }
}