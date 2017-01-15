'use strict';

import * as actions from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case actions.ACTION_SELECT_PRODUCT: {
      return state.map(product => ({
        ...product,
        selected: product.id === action.id
      }));
    }
    case actions.ACTION_BUY_PRODUCT: {
      return state.map(product => ({
        ...product,
        count: product.id === action.id ? product.count - 1 : product.count,
        selected: false
      }));
    }
  }
  return state;
};
