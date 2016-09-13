
class UnusualStakeRule {
    constructor(history, tag = 30, markAs = 'unusual_stake') {
        this.history = history;
        this.tag = tag;
    }

    calculate(bet) {
        return (bet.stake >= (this.history.averageStake * bet.stake)) ? this.tag : '';
    }
}

export default UnusualStakeRule;