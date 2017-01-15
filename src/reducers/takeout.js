'use strict';

import * as actions from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case actions.ACTION_EMPTY_TAKEOUT_PORT: {
      return [];
    }
    case actions.ACTION_BUY_PRODUCT: {
      return [].concat(state, action.id);
    }
  }
  return state;
};

