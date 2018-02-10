"use strict";

import React from 'react';
import CardComponent from './card-component';

import '../../less/header.less';

class HeaderComponent extends React.PureComponent {
    render() {
        return (
            <header>
                <div className='header-wrapper'>
                    <div className='header-wrapper-title'>
                        <h3>Ноутбуки и ультрабуки Lenovo</h3>
                    </div>
                    <div className="header-wrapper-cart btn-group">
                        <CardComponent />
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderComponent;