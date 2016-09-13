import React, { PropTypes } from 'react';
const WIN_THRESHOLD = 60;


const PastRiskSummary = ({history}) => {
    const styleName = (history.winPercentage >= WIN_THRESHOLD) ? 'danger': '';
    return (
        <table className="table">
            <caption>Summary</caption>
            <thead>
                <tr>
                    <th>Total Bets</th>
                    <th>Average Stake</th>
                    <th>Total Winnings</th>
                    <th>Win Percentage</th>
                </tr>
             </thead>
             <tbody>
                <tr className={styleName}>
                    <td>{history.totalBets}</td>
                    <td>{history.averageStake}</td>
                    <td>{history.totalWinning}</td>
                    <td>{history.winPercentage}</td>
                </tr>
             </tbody>
        </table>
    );
};

PastRiskSummary.propTypes = {
    history: PropTypes.object.isRequired
};

export default PastRiskSummary;