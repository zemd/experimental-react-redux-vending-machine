'use strict';

import React from 'react';
import ProductList from './ProductList';
import MoneySlot from './MoneySlot';
import MoneyAmountIndicator from './MoneyAmountIndicator';
import TakeoutPort from './TakeoutPort';
import RepaymentSlot from './RepaymentSlot';

export default ({
  products = [], takeoutProducts = [], coins = [], repayments = [],
  onSelectProduct, onInsertCoin, onEmptyRepaymentsSlot, onBuyProduct, onEmptyTakeoutPort, onDemandRepayment
}) => {
  let sum = coins.reduce((acc, v) => acc + v, 0);
  return (
    <div className="vending-machine">
      <ProductList amount={sum} products={products} onSelectProduct={onSelectProduct} onBuyProduct={onBuyProduct}/>
      <div>
        <MoneySlot onInsertCoin={onInsertCoin}/>
        <MoneyAmountIndicator amount={sum} onDemandRepayment={onDemandRepayment}/>
        <RepaymentSlot coinCount={repayments.length} onEmptyRepaymentsSlot={onEmptyRepaymentsSlot}/>
      </div>
      <TakeoutPort products={takeoutProducts} onEmptyTakeoutPort={onEmptyTakeoutPort}/>
    </div>
  )
};
