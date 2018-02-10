"use strict";

const filterProduct = (filter) => {
    // console.log('filter ' + filter);
    return {
        type: 'FILTER_PRODUCT',
        filterText: filter 
    }
};

const addProductCard = (product) => {
    return {
        type: 'ADD_PRODUCT_CARD',
        payload: product  
    }
}

export {
    filterProduct, addProductCard
}