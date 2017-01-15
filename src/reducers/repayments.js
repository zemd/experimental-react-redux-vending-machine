'use strict';

import * as actions from '../actions';
import 'rxjs/add/operator/map';

export default (state = [], action) => {
  switch (action.type) {
    case actions.ACTION_FILL_REPAYMENT_SLOT: {
      return [].concat(state, action.coins);
    }
    case actions.ACTION_EMPTY_REPAYMENT_SLOT: {
      return [];
    }
  }
  return state;
};

export const repaymentEpic = (action$, store) =>
  action$.ofType(actions.ACTION_DEMAND_REPAYMENT)
    .map(() => store.dispatch(actions.fillRepaymentSlot([].concat(store.getState().coins))))
    .map(() => actions.emptyMoneySlot());

