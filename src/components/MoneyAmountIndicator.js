'use strict';

import React from 'react';

export default ({amount, onDemandRepayment}) => (
  <div className="money-amount-indicator">
    <small>Money inserted:</small>
    {amount}
    {(() => {
      if (amount > 0) {
        return (
          <div>
            <button onClick={() => onDemandRepayment()}>Demand repayment</button>
          </div>
        );
      }
    })()}
  </div>
);
