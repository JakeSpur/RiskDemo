import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as riskActions from '../../actions/riskActions';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Dropdown from '../common/Dropdown';
import PageHeader from '../common/PageHeader';
import PastRiskSummary from './PastRiskSummary';
import FutureRisk from './FutureRisk';
import PastBets from './PastBets';

class RiskPage extends Component {

    constructor() {
        super();
        this.onSelect = this._onSelect.bind(this);
        this.state = { selectedCustomer: null };
    }

    _onSelect(customer) {
        this.setState(this._buildState(customer));
    }

    _buildState(customer) {
        const { history, future } = this.props;
        const customerHistory = _.find(history, past => past.customer == customer);
        const customerFuture = _.filter(future, future => future.customer == customer);
        return {
            selectedCustomer: {
               history: customerHistory,
               future: customerFuture
            }
        };
    }

    render() {
        const { defaultCustomer, customerList } = this.props;
        let { selectedCustomer } = this.state;
        if (selectedCustomer === null) selectedCustomer = defaultCustomer;
        return (
            <div className="row">
                <div className="col-md-12">
                    <PageHeader title={"Risk Management"} />
                </div>
                <div className="col-md-12">
                    <Dropdown items={customerList} onSelect={this.onSelect} />
                </div>
                <div className="col-md-12">
                    <div className="row">
                       <div className="col-md-4">
                           <PastRiskSummary history={selectedCustomer.history} />
                       </div>
                       <div className="col-md-8">
                           <PastBets bets={selectedCustomer.history.bets} />
                       </div>
                   </div>
                </div>
                <div className="col-md-push-4 col-md-8">
                    <FutureRisk bets={selectedCustomer.future} />
                </div>
            </div>
        );
    }
}

RiskPage.propTypes = {
    history: PropTypes.array.isRequired,
    future: PropTypes.array.isRequired,
    defaultCustomer: PropTypes.object.isRequired,
    customerList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    const customerList = _.map(state.history, history => history.customer);
    const defaultCustomer = _.first(customerList) || {};
    const customerHistory = state.history.find(past => past.customer == defaultCustomer) || { bets: [] };
    const customerFuture = state.future.filter(future => future.customer == defaultCustomer) || [];

    return {
        customerList,
        history: state.history,
        future: state.future,
        defaultCustomer: {
           history: customerHistory,
           future: customerFuture
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(riskActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RiskPage);