import HighAmountRule from './HighAmountRule';
import PastPerformanceRule from './PastPerformanceRule';
import UnusualStakeRule from './UnusualStakeRule';

class RiskCalculator {

    constructor(pastHistory = {})
    {
        const rules = this.rules = [];
        rules.push(new PastPerformanceRule(pastHistory, 'risk_from_history'));
        rules.push(new HighAmountRule(1000, 'high_amount'));
        rules.push(new UnusualStakeRule(pastHistory, 10, 'unusual_stake'));
        rules.push(new UnusualStakeRule(pastHistory, 30, 'highly_unusual_stake'));
    }

    calculate(bet) {
        this.rules.forEach((rule) => {
            const risk = rule.calculate(bet);
            if (risk.length > 0) {
                bet.tags = (bet.tags || []);
                bet.tags.push(risk);
            }
        });
    }
}

export default RiskCalculator;

