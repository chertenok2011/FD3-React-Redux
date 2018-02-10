'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import appData from '../../../appData';

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
        let productCode = parseInt(this.props.match.params.clid);
        let product = appData.products.find(c => c.code == productCode);
        return (
            <div className='main-product-wrapper'>
                <main>
                    <div className='product-container'>
                        <div className='product-wrapper'>
                            <div className='cell'>
                                <img alt='lenovo' src={product.url} />
                            </div>
                            <div className='cell'>
                                <div className='product-head'>
                                    <h4 className='product-name' >{product.name}</h4>
                                </div>
                                <div className='product-body'>
                                    <p className='product-description'>
                                        <span>{product.description}</span>
                                    </p>
                                    <p className='product-specifications'>
                                        {product.specifications}
                                    </p>
                                </div>
                                <div className='product-footer'>
                                    <h4 className='product-count'>
                                        <span className='bold'>Цена: </span>
                                        <span>{product.count}</span>
                                        <span>$</span>
                                    </h4>
                                    <p className='product-remainder'>
                                        <span className='bold'>Осталось на складе: </span>
                                        <span>{product.remainder}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='product-buttons-view'>
                            <button className='button btn' onClick={this.addCart}>В корзину</button>
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