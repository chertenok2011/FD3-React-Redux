'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../less/product-view.less';

class ProductView extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                url: PropTypes.string,
                code: PropTypes.number,
                count: PropTypes.number,
                description: PropTypes.string,
                remainder: PropTypes.number
            })
        ),
        select: PropTypes.number
    }
    render() {
        return (
            <div className='main-product-wrapper'>
                <main>
                    <div className='product-container'>
                        <div className='product-wrapper'>
                            <div className='cell'>
                                <img alt='lenovo' src={this.props.data.url} />
                            </div>
                            <div className='cell'>
                                <div className='product-head'>
                                    <h4 className='product-name' >{this.props.data.name}</h4>
                                </div>
                                <div className='product-body'>
                                    <p className='product-description'>
                                        <span>{this.props.data.description}</span>
                                    </p>
                                    <p className='product-specifications'>
                                        {this.props.data.specifications}
                                    </p>
                                </div>
                                <div className='product-footer'>
                                    <h4 className='product-count'>
                                        <span className='bold'>Цена: </span>
                                        <span>{this.props.data.count}</span>
                                        <span>$</span>
                                    </h4>
                                    <p className='product-remainder'>
                                        <span className='bold'>Осталось на складе: </span>
                                        <span>{this.props.data.remainder}</span>
                                    </p>
                                </div>
                                <div className='product-buttons'>
                                    <button className='button btn' onClick={this.addCart}>В корзину</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
};

const mapStateToProps = function (state) {
    return {
        data: state.data.products.find(product => product.code == state.select),
        select: state.select
    };
};

export default connect(mapStateToProps)(ProductView);