'use strict';

function addProductCard(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT_CARD': {
            let newState = [...state, action.payload];
            return newState
        }
        default: {
            return state;
        }
    }
}

export default addProductCard;