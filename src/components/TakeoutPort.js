'use strict';

import React from 'react';
import classnames from 'classnames';

export default ({products, onEmptyTakeoutPort}) => (
  <div className={classnames('takeout-port', {full: products.length, empty: !products.length})}>
    {products.length ? `Take-out port is filled by ${products.length} products` : 'Take-out port is empty'}
    <br/>
    {(() => {
      if (products.length) {
        return (<button onClick={() => onEmptyTakeoutPort()}>empty it</button>)
      }
    })()}
  </div>
);
