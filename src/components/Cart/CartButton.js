import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const totalItems = useSelector(state => state.cartRdx.totalQuantity)

  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
