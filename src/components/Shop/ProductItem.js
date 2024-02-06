import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { CartAction } from '../Store/CartSlice';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch()


  function addToCartHandler(item) {
    dispatch(CartAction.addItem(item))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => { addToCartHandler({ id: 1, title: title, price: price, desc: description }) }}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
