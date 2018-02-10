'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { addProductCard } from '../actions/main';

import '../../less/products.less';
import '../../less/product.less';

class ProductsComponent extends React.PureComponent {
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
        filter: PropTypes.string
    }

    addProductCard = (product) => {
        this.props.dispatch(addProductCard(product));
    }

    showProducts() {
        return this.props.data.map(product => {
            return (
                <div className='product-column' key={product.code}>
                    <div className='product-wrapper'>
                        <div className='product-head'>
                            <img alt='lenovo' src={product.url} />
                            <h4 className='product-name' >{product.name}</h4>
                        </div>
                        <div className='product-body'>
                            <p className='product-description'>
                                <span>{product.description}</span>
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
                        <div className='product-buttons'>
                            <NavLink to={"/product/" + product.code} className='button btn' >Подробнее</NavLink>
                            <button className='button btn ' onClick={(propduct) => this.addProductCard(product)}>В корзину</button>
                        </div>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div className='products-row'>
                {this.showProducts()}
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        data: state.data.products.filter(product => product.name.includes(state.filter)),
        filter: state.filter
    };
};

export default connect(mapStateToProps)(ProductsComponent);