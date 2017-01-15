'use strict';

import React from 'react';
import config from '../config';

export default ({onInsertCoin}) => (
  <div>
    <h2>Insert your coins:</h2>
    {config.coins_accepted.map(coin => (
      <button key={coin} onClick={() => onInsertCoin(coin)}>¢{coin}</button>
    ))}
    <input type="number" placeholder="your coin denomination" ref={(input) => this.input = input}/>
    <button onClick={() => {
      onInsertCoin(parseInt(this.input.value, 10));
      this.input.value = '';
    }}>insert</button>
  </div>
);
