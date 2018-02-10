"use strict";

import React from 'react';
import { Route } from 'react-router-dom';

import MainContainer from './main-container';
import ProductView from './product-view';

class PagesRouter extends React.Component {
    render() {
        return (
            <div>
                <Route path='/' exact component={MainContainer} />
                <Route path='/product/:clid' component={ProductView} />
            </div>
        );
    }
};

export default PagesRouter;
