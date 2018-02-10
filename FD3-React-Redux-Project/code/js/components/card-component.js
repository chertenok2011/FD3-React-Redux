"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import '../../less/card.less';

class CardComponent extends React.PureComponent { 
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
        )
    }

    showCardList() {
        if (this.props.data.length) {
            return this.props.data.map(product => {
                return (
                    <li className="" key={product.code} >
                        <p>{product.name}</p>
                        <p>Цена: {product.count}$</p>
                    </li>
                )
            });
        } else {
            return (
                <li className="center">Корзина пуста</li>
            )
        }
    }

    render() {
        let counts = 0;
        if (this.props.data.length) {
            this.props.data.map(product => {
                counts += product.count;
            });
        }

        return (
            <div className="btn-group" >
                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                    Корзина <span className="caret"></span>
                </button>
                <ul role="menu" className="dropdown-menu">
                    {this.showCardList()}
                    <li className="divider"></li>
                    <li className="center">Общая сумма: {counts}$</li>
                </ul>
            </div>
        )
    }
};

const mapStateToProps = function (state) {
    return {
        data: state.card
    };
};

export default connect(mapStateToProps)(CardComponent);