'use strict';

export const ACTION_INSERT_COIN = 'INSERT_COIN';
export const insertCoin = value => ({
  type: ACTION_INSERT_COIN,
  value
});

export const ACTION_SELECT_PRODUCT = 'SELECT_PRODUCT';
export const selectProduct = id => ({
  type: ACTION_SELECT_PRODUCT,
  id
});

export const ACTION_FILL_REPAYMENT_SLOT = 'FILL_REPAYMENT_SLOT';
export const fillRepaymentSlot = coins => ({
  type: ACTION_FILL_REPAYMENT_SLOT,
  coins: coins
});

export const ACTION_EMPTY_REPAYMENT_SLOT = 'EMPTY_REPAYMENT_SLOT';
export const emptyRepaymentSlot = () => ({
  type: ACTION_EMPTY_REPAYMENT_SLOT
});

export const ACTION_BUY_PRODUCT = 'BUY_PRODUCT';
export const buyProduct = (id) => ({
  type: ACTION_BUY_PRODUCT,
  id: id
});

export const ACTION_EMPTY_TAKEOUT_PORT = 'EMPTY_TAKEOUT_PORT';
export const emptyTakeoutPort = () => ({
  type: ACTION_EMPTY_TAKEOUT_PORT
});

export const ACTION_DEMAND_REPAYMENT = 'DEMAND_REPAYMENT';
export const demandRepayment = () => ({
  type: ACTION_DEMAND_REPAYMENT
});

export const ACTION_EMPTY_MONEY_SLOT = 'EMPTY_MONEY_SLOT';
export const emptyMoneySlot = () => ({
  type: ACTION_EMPTY_MONEY_SLOT
});
