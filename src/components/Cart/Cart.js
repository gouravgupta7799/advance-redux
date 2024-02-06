import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {

  const cartItems = useSelector(state => state.cartRdx.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length > 0 ? cartItems.map(element => {

          return <CartItem
            item={element}
          />
        })
          : 'no items to display in your cart add items'}
      </ul>
    </Card>
  );
};

export default Cart;
