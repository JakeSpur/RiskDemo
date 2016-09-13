
class PastPerformanceRule {
    constructor(history, tag = 'risk_from_history', winThreshold = 60) {
        this.history = history;
        this.tag = tag;
        this.winThreshold = winThreshold;
    }

    calculate(bet) {
        return (this.history.winPercentage >= this.winThreshold) ? this.tag : '';
    }
}

export default PastPerformanceRule;