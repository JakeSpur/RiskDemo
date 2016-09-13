import React, { PropTypes } from 'react';

const FutureRisk = ({bets}) => {
    return (
        <table className="table">
            <caption>Future Risk</caption>
            <thead>
                <tr>
                    <th>Event</th>
                    <th>Participant</th>
                    <th>Stake</th>
                    <th>To Win</th>
                </tr>
            </thead>
            <tbody>
            {
                bets.map((bet, index) => {
                    const styleName = (bet.tags.length > 0) ?  'danger': '';
                    return (
                        <tr key={index} className={styleName}>
                            <td>{bet.event}</td>
                            <td>{bet.participant}</td>
                            <td>{bet.stake}</td>
                            <td>{bet.toWin}</td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    );
};

FutureRisk.propTypes = {
    bets: PropTypes.array.isRequired
};

export default FutureRisk;