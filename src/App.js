import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './components/Store/Cart-Actions';
let isInitial = true;

function App() {

  const isCart = useSelector(state => state.cartRdx.isActive)
  const cart = useSelector((state) => state.cartRdx);
  const notification = useSelector((state) => state.uiRdx.notification);
  console.log(notification)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return
    }
    dispatch(sendCartData(cart))
  }, [cart, dispatch]);
  return (
    <React.Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
