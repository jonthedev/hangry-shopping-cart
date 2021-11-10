import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 5,
  add: item => {},
  removeItem: id => {},
});

export default CartContext;
