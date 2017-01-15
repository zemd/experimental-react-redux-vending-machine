"use strict";

import React from 'react';
import VendingMachine from './VendingMachineContainer';

/**
 * Vending machine:
 *
 * +-------------------------+
 * |  Products
 * |  v
 * |  x x x x x x x   {}      < money slot
 * |  x x x x x x x   [12345] < money amount indicator
 * |  x x x x x x x
 * |                  ()      < repayment slot
 * |
 * |  $$$$$$$$$$$$$           < take-out port
 * +-------------------------+
 */
export default () => (
  <div className="vending-machine">
    <h1>Vending machine</h1>
    <VendingMachine/>
  </div>
);
