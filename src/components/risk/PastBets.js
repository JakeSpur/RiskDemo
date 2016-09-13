import React, { PropTypes } from 'react';

const PastBets = ({bets}) => {
    return (
        <table className="table">
            <caption>Bet History</caption>
            <thead>
                <tr>
                    <th>Event</th>
                    <th>Participant</th>
                    <th>Stake</th>
                    <th>Win</th>
                </tr>
            </thead>
            <tbody>
            {
                bets.map((bet, index) => {
                    return (
                        <tr key={index}>
                            <td>{bet.event}</td>
                            <td>{bet.participant}</td>
                            <td>{bet.stake}</td>
                            <td>{bet.win}</td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    );
};

PastBets.propTypes = {
    bets: PropTypes.array.isRequired
};

export default PastBets;