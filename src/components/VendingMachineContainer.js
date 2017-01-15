'use strict';

import {connect} from 'react-redux';
import VendingMachineComponent from './VendingMachineComponent';
import * as actions from '../actions';

const mapStateToProps = state => ({
  products: state.products,
  coins: state.coins,
  repayments: state.repayments,
  takeoutProducts: state.takeout.map(id => state.products.find(product => product.id === id))
});
const mapDispatchToProps = dispatch => ({
  onSelectProduct: (id) => dispatch(actions.selectProduct(id)),
  onInsertCoin: (coin) => dispatch(actions.insertCoin(coin)),
  onEmptyRepaymentsSlot: () => dispatch(actions.emptyRepaymentSlot()),
  onBuyProduct: (id) => dispatch(actions.buyProduct(id)),
  onEmptyTakeoutPort: () => dispatch(actions.emptyTakeoutPort()),
  onDemandRepayment: () => dispatch(actions.demandRepayment())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VendingMachineComponent);

