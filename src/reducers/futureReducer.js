import * as types from '../actions/actionTypes';

export default function futureReducer(state = [], action = {}) {
    switch (action.type) {
        case types.LOAD_FUTURE_SUCCESS:
            return [...action.future];
        default:
            return state;
    }
}