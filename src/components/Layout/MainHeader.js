import { useDispatch} from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { CartAction } from '../Store/CartSlice';

const MainHeader = (props) => {
  
  const dispatch = useDispatch()

  function showCart() {
    dispatch(CartAction.openCloseCart())
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
