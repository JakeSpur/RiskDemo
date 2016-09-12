import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as riskActions from '../../actions/riskActions';
import { bindActionCreators } from 'redux';

class UnSettledPage extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>UnSettled Bets</h1>
            </div>
        );
    }
}

UnSettledPage.propTypes = {
    bets: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        bets: state.unSettledBets
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(riskActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UnSettledPage);