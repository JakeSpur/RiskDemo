import * as types from './actionTypes';
import riskService from '../services/mockedRiskService';

export function loadPastRisk() {
    return (dispatch) => {
        riskService.pastRisk().then((history) => {
            dispatch({ type: types.LOAD_PAST_SUCCESS, history });
        }).catch((error) => {
            throw(error);
        });
    };
}

export function loadFutureRisk() {
    return (dispatch) => {
        riskService.futureRisk().then((future) => {
            dispatch({ type: types.LOAD_FUTURE_SUCCESS, future });
        }).catch((error) => {
            throw(error);
        });
    };
}