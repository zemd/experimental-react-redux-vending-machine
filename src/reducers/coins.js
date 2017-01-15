'use strict';

import * as actions from '../actions';
import config from '../config';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export default (coins = [], action) => {
  switch (action.type) {
    case actions.ACTION_INSERT_COIN: {
      if (config.coins_accepted.indexOf(action.value) > -1) {
        return [].concat.call([], coins, action.value);
      }
      break;
    }
    case actions.ACTION_EMPTY_MONEY_SLOT: {
      return [];
    }
  }
  return coins;
};

export const coinsEpic = (action$, store) => action$
  .ofType(actions.ACTION_INSERT_COIN)
  .filter(action => config.coins_accepted.indexOf(action.value) === -1)
  .map(action => actions.fillRepaymentSlot([action.value]));
