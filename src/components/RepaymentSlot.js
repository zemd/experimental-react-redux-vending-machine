'use strict';

import React from 'react';
import classnames from 'classnames';

export default ({coinCount = 0, onEmptyRepaymentsSlot}) => (
  <div className={classnames('repayments', {full: coinCount, empty: !coinCount})}>
    {coinCount ? `Repayment slot is filled by ${coinCount} coins` : 'Repayment slot is empty'}
    <br/>
    {(() => {
      if (coinCount) {
        return (<button onClick={() => onEmptyRepaymentsSlot()}>empty it</button>)
      }
    })()}
  </div>
);
