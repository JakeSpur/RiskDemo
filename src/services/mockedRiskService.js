const FAKE_SERVER_DELAY = 0;
import settledBets from './settled.json';
import unsettledBets from './unsettled.json';
import pastTransformer from './transformers/pastTransformer';
import RiskCalculator from './rules/RiskCalculator';
import _ from 'lodash';

const wrapInSuccessfulPromise = (data) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Object.assign([], data));
        }, FAKE_SERVER_DELAY);
    });
};

class MockedRiskService {

    static pastRisk() {
        return wrapInSuccessfulPromise(pastTransformer(settledBets));
    }

    static futureRisk() {
        return Promise.all([MockedRiskService.pastRisk(), wrapInSuccessfulPromise(unsettledBets)]).then((results) => {
            const [ history, unsettledBets ] = results;
            const identifiedRisks = _.map(unsettledBets, (futureBet) => {
               const pastHistory = _.find(history, { customer: futureBet.customer });
               new RiskCalculator(pastHistory).calculate(futureBet);
               return futureBet;
            });

            return identifiedRisks;
        });
    }
}

export default MockedRiskService;