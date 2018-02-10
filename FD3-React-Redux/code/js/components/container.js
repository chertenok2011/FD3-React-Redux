"use strict";

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import combinedReducer from '../reducers/reducers.js';
import MainWrapper from './main-wrapper';

let store = createStore(combinedReducer);

class Container extends React.PureComponent {
    render() {
        return (
            <Provider store={store}>
                <MainWrapper />
            </Provider>
        );
    }
}

export default Container;