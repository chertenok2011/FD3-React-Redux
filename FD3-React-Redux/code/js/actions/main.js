"use strict";

const selectProduct = (code) => {
    // console.log('product ' + product.code);
    return {
        type: 'SELECT_PRODUCT',
        id: code
    }
};

const filterProduct = (filter) => {
    // console.log('filter ' + filter);
    return {
        type: 'FILTER_PRODUCT',
        filterText: filter 
    }
};

const pageSelect = (page) => {
    return {
        type: 'PAGE_SELECT',
        page: page
    }
}

const addProductCard = (product) => {
    return {
        type: 'ADD_PRODUCT_CARD',
        payload: product  
    }
}

export {
    selectProduct, filterProduct, pageSelect, addProductCard
}