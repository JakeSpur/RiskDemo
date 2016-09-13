import { expect } from 'chai';
import transformer from './pastTransformer';
import _ from 'lodash';

describe('Past Transformer', () => {

    const testSettlementData = [
        {
            "customer": 1,
            "event": 1,
            "participant": 6,
            "stake": 50,
            "win": 250
        },
        {
            "customer": 1,
            "event": 2,
            "participant": 6,
            "stake": 50,
            "win": 0
        },
        {
            "customer": 1,
            "event": 3,
            "participant": 6,
            "stake": 50,
            "win": 250
        }
    ];

    let actual = null, customerResult;

    before(() => {
        actual = transformer(testSettlementData);
        customerResult = _.first(actual);
    });

    it('should give us an array summaries', () => {
        expect(actual).to.be.an.array;
    });

    describe('individual summary', () => {

        it('should have the following properties', () => {
           expect(customerResult).to.have.property('customer');
           expect(customerResult).to.have.property('averageStake');
           expect(customerResult).to.have.property('totalBets');
           expect(customerResult).to.have.property('totalWinning');
           expect(customerResult).to.have.property('winPercentage');
           expect(customerResult).to.have.property('history');
        });

        it('should have the following values', () => {
            expect(customerResult.customer).to.equal(1);
            expect(customerResult.averageStake).to.equal(50);
            expect(customerResult.totalBets).to.equal(3);
            expect(customerResult.totalWinning).to.equal(2);
            expect(customerResult.winPercentage).to.equal(66.67);
            expect(customerResult.history).to.be.an('array');
        });
    });
});