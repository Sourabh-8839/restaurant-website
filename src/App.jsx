import { Outlet } from 'react-router-dom';
import './App.css';

import Footer from './components/Footer/Footer';

import NavBar from './components/Navbar/NavBar';
import { CartProvider } from './contexts';
import { useState } from 'react';
function App() {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item) => {
    const existingCartItemIndex = cartList.findIndex(
      (items) => items.id === item.id
    );

    const existingCartItem = cartList[existingCartItemIndex];

    let updateItems;

    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + item.quantity,
      };

      updateItems = [...cartList];

      updateItems[existingCartItemIndex] = updateItem;

      setCartList(updateItems);
    } else {
      setCartList((prev) => [...prev, item]);
    }
  };
  const removeItem = (id) => {
    const existingCartItemIndex = cartList.findIndex((item) => item.id === id);

    const existingCartItem = cartList[existingCartItemIndex];

    setTotal((prevTotal) => prevTotal - existingCartItem.price);

    let updateItems;

    if (existingCartItem.quantity === 1) {
      updateItems = cartList.filter((item) => item.id != id);

      setCartList(updateItems);
    } else {
      const updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      updateItems = [...cartList];

      updateItems[existingCartItemIndex] = updateItem;

      setCartList(updateItems);
    }
  };

  return (
    <CartProvider value={{ cartList, total, setTotal, addItem, removeItem }}>
      <NavBar />
      <Outlet />
      <Footer />
    </CartProvider>
  );
}

export default App;
