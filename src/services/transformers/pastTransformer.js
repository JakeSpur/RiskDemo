import _ from 'lodash';

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function calculateWinPercentages(settledBets) {
    return _.chain(settledBets).sortedUniqBy('customer')
        .transform(function(result, bet)  {
            const response = {
                customer: bet.customer,
                averageStake: 0,
                totalBets: 0,
                totalWinning: 0,
                winPercentage: 0,
                history: []
            };
            const customerBets = _.filter(settledBets, { customer: bet.customer });
            response.totalBets = customerBets.length;
            response.totalWinning = _.filter(customerBets, (bet) => {
                return bet.win > 0;
            }).length;
            response.winPercentage = roundToTwo(((response.totalWinning / response.totalBets) * 100));
            response.bets = customerBets;
            response.averageStake = roundToTwo(_.chain(customerBets).map('stake').sum().value() / customerBets.length);
            return result[bet.customer] = response;
        }, {}).values().value();
}

function transform(settledBets) {
    return calculateWinPercentages(settledBets);
}

export default transform;