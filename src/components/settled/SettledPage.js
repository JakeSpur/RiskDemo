import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as riskActions from '../../actions/riskActions';
import { bindActionCreators } from 'redux';

class SettledPage extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Settled Bets</h1>
            </div>
        );
    }
}

SettledPage.propTypes = {
    bets: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        bets: state.settledBets
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(riskActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettledPage);