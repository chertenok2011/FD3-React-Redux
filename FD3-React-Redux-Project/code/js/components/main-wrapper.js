'use strict';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HeaderComponent from './header-component';
import PagesRouter from './pages-router';

class MainWrapper extends React.PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderComponent />
                    <PagesRouter />
                </div>
            </BrowserRouter>
        )
    }
}

export default MainWrapper;