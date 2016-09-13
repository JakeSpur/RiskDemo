import React, { PropTypes } from 'react';
import _ from 'lodash';

const Dropdown = ({items, onSelect }) => {
    const ctrlName = _.uniq('dropdown_');
    const onChange = (event) => {
        onSelect(event.target.value);
    };
    return (
        <form className="form-inline">
            <div className="form-group">
                <label htmlFor={ctrlName}>Customers</label>
                <select onChange={onChange} name={ctrlName} className="form-control">
                    {
                       items.map((item) => {
                          return (
                              <option key={item}>{item}</option>
                          );
                       })
                    }
                </select>
            </div>
        </form>
    );
};

Dropdown.propTypes = {
    items : PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default Dropdown;