
class UnusualStakeRule {
    constructor(history, stakeLimit = 10, tag = 'unusual_stake') {
        this.history = history;
        this.stakeLimit = stakeLimit;
        this.tag = tag;
    }

    calculate(bet) {
        return (Math.round(bet.stake / this.history.averageStake) > this.stakeLimit) ? this.tag : '';
    }
}

export default UnusualStakeRule;