'use strict';

import React from 'react';
import classnames from 'classnames';

export const Product = ({amount, product, onSelectProduct}) => {
  let listeners = {};
  if (amount >= product.price) {
    listeners['onClick'] = () => onSelectProduct(product.id);
  }
  return (
    <div className={classnames("product", {
      "available": product.count,
      "unavailable": !product.count,
      "selected": product.selected,
      "selectable": amount >= product.price
    })}
         {...listeners}>
      <div className="product-title">{product.title}</div>
      <div className="product-price">¢{product.price}</div>
    </div>
  );
};

export default ({products, amount, onSelectProduct, onBuyProduct}) => {

  return (
    <div className="products">
      {products.map(product => (
          <Product key={product.id} product={product} amount={amount} onSelectProduct={onSelectProduct}/>
        )
      )}
      <br/>
      <button disabled={!products.filter(p => p.selected).length}
              onClick={() => onBuyProduct(products.filter(p => p.selected)[0].id)}>
        Buy selected product
      </button>
    </div>
  );
};
