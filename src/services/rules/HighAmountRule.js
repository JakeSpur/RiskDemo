class HighAmountRule {
    constructor(amount, tag = 'high_amount') {
        this.amount = amount;
        this.tag = tag;
    }

    calculate(bet) {
        return (bet.toWin >= this.amount) ? this.tag : '';
    }
}

export default HighAmountRule;