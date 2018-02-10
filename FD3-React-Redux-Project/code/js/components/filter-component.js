'use strict';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { filterProduct } from '../actions/main';

class FilterComponent extends React.PureComponent {
    filterAction = (EO) => {
        let filterText = EO.target.value;
        this.props.dispatch(filterProduct(filterText));
    }

    render() {
        return (
            <p>
                <span>Поиск:</span>
                <input className='search form-control' placeholder='Введите название модели' onChange={this.filterAction} />
            </p>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps)(FilterComponent);