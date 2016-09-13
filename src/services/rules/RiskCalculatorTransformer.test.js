import RiskCalculator from './RiskCalculator';
import { expect } from 'chai';
import _ from 'lodash';

const createBid = (toWin, stake = 1) => {
  return {
     toWin,
     stake
  }
};

describe('Risk Calculator', () => {

    describe('When bid exceeds threshold limit', () => {

        const exceedAmountBid = createBid(1500);

        before(() => {
            new RiskCalculator([]).calculate(exceedAmountBid);
        });

        it('should add the following flag', ()=> {
            expect(exceedAmountBid).to.have.property('tags');
            expect(exceedAmountBid.tags).to.be.an('array');
            expect(_.first(exceedAmountBid.tags)).to.equal('high_amount');
        });

    });

    describe('When past customer has a high winning percentage', () => {

        const futureBid = createBid(500);

        before(() => {
            new RiskCalculator({ winPercentage: 66 }).calculate(futureBid);
        });

        it('should add the following flag', () => {
            expect(futureBid).to.have.property('tags');
            expect(futureBid.tags).to.be.an('array');
            expect(_.first(futureBid.tags)).to.equal('risk_from_history');
        });
    });

    describe('When past customer places an unusually high bid', () => {

        const insiderBid = createBid(700, 70);

        before(() => {
            new RiskCalculator({ averageStake: 2, winPercentage: 0 }).calculate(insiderBid);
        });

        it('should add the following flag', () => {
            expect(insiderBid).to.have.property('tags');
            expect(insiderBid.tags).to.be.an('array');
            expect(insiderBid.tags.length).to.equal(2);
            expect(_.first(insiderBid.tags)).to.equal('unusual_stake');
            expect(_.last(insiderBid.tags)).to.equal('highly_unusual_stake');
        });
    });
});

