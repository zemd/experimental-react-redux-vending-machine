"use strict";

import {createStore, applyMiddleware} from "redux";
import {createEpicMiddleware} from "redux-observable";
import {combineEpics} from 'redux-observable';
import {combineReducers} from 'redux';

// REDUCERS
import coins, {coinsEpic} from './reducers/coins';
import products from './reducers/products';
import repayments, {repaymentEpic} from './reducers/repayments';
import takeout from './reducers/takeout';

import * as actions from './actions';

const epicMiddleware = createEpicMiddleware(combineEpics(
  coinsEpic,
  repaymentEpic
));

const crossSliceReducer = (state, action) => {
  switch (action.type) {
    case actions.ACTION_BUY_PRODUCT: {
      let product = state.products.find(p => p.id === action.id);
      let sum = 0;
      let lastCoinIndex = state.coins.findIndex(coin => {
        sum += coin;
        return sum >= product.price;
      });
      let coins = state.coins.slice(lastCoinIndex + 1);

      return Object.assign(
        {...state},
        {coins}
      );
    }
  }
  return state;
};

const reducer = (state, action) => {
  const newState = combineReducers({
    coins,
    products,
    repayments,
    takeout
  })(state, action);

  return crossSliceReducer(newState, action);
};

/**
 *
 * {
 *    coins: [1, 3, 3, 3, 5, 10],
 *    repayments: [],
 *    takeout: [],
 *    products: [
 *      {id: 1, title: 'snickers', price: 13, count: 10},
 *      {id: 2, title: 'mars', price: 14, count: 3},
 *      {id: 3, title: 'twix', price: 15, count: 5},
 *      {id: 4, title: 'm&m', price: 8, count: 18},
 *      {id: 5, title: 'KitKat', price: 20, count: 22}
 *    ]
 * }
 *
 */
let store = createStore(
  reducer,
  window.__initial__state__ || {},
  applyMiddleware(epicMiddleware)
);

export default store;
