import * as types from './actionTypes';
import riskService from '../services/mockedRiskService';

export function loadSettledBets() {
    return (dispatch) => {
        riskService.getSettledBets().then((bets) => {
            dispatch({ type: types.LOAD_SETTLED_SUCCESS, bets });
        }).catch((error) => {
            throw(error);
        });
    };
}

export function loadUnSettledBets() {
    return (dispatch) => {
        riskService.getUnSettledBets().then((bets) => {
            dispatch({ type: types.LOAD_UNSETTLED_SUCCESS, bets });
        }).catch((error) => {
            throw(error);
        });
    };
}
