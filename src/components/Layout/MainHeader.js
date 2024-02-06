import { useDispatch, useSelector } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { CartAction } from '../Store/CartSlice';

const MainHeader = (props) => {
  const dispatch = useDispatch()
  const item = useSelector(state => state.cartRdx.items)


  function showCart() {
    dispatch(CartAction.openCloseCart())
    console.log(item)
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li onClick={() => { showCart() }}>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
