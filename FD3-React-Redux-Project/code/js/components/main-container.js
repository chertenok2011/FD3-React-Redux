'use strict';

import React from 'react';
import { connect } from 'react-redux';

import ProductsComponent from './products-component';
import FilterComponent from './filter-component';

class MainContainer extends React.PureComponent {
    render() {
        return (
            <div className='main-wrapper'>
                <main>
                    <div className='image-container'>
                        <img src='../../images/yoga-910-gold-898x793.png' />
                    </div>
                    <div className='search-container'>
                        <FilterComponent />
                    </div>
                    <div className='products-container'>
                        <ProductsComponent />
                    </div>
                </main>
            </div>
        );
    }
};

export default MainContainer;