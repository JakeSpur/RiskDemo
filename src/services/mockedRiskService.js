const FAKE_SERVER_DELAY = 0;
import settledBets from './settled.json';
import unsettledBets from './unsettled.json';

const wrapInSuccessfulPromise = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Object.assign([], data));
        }, FAKE_SERVER_DELAY);
    });
};

class RiskService {
    static getSettledBets() {
        return wrapInSuccessfulPromise(settledBets);
    }

    static getUnSettledBets() {
        return wrapInSuccessfulPromise(unsettledBets);
    }
}