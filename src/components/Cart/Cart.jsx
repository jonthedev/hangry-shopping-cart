import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/CartContext';

import CartItem from './CartItem';

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const totalAmount = `€${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const processOrder = () => {
    setOrderSubmitted(true);
  };

  const closeOrder = () => {
    props.onClose();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}>
          {item.name}
        </CartItem>
      ))}
    </ul>
  );
  return (
    <>
      {!orderSubmitted && (
        <Modal onClose={props.onClose}>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes['button--alt']}
              onClick={props.onClose}>
              Close
            </button>
            {hasItems && (
              <button
                className={classes.button}
                onClick={processOrder}>
                Order
              </button>
            )}
          </div>
        </Modal>
      )}
      {orderSubmitted && (
        <Modal>
          <div className={classes['order-message']}>
            <span>
              Order Received...however this is only a demo and there
              is no food, so no payment will take place! You must
              really be HANGRY now!
            </span>
            <button
              onClick={closeOrder}
              className={classes['button--alt']}>
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}
