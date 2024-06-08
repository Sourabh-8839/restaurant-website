// import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';
import Logo from '../../assets/website/food-logo.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Order from '../Menu/Order';
import { useCart } from '../../contexts';

const NavBar = () => {
  const Menu = [
    {
      id: 1,
      name: 'Home',
      link: '/',
    },
    {
      id: 2,
      name: 'Services',
      link: '/services',
    },
    {
      id: 3,
      name: 'About',
      link: '/about',
    },
  ];

  const [order, setOrder] = useState(null);

  const body = document.querySelector('body');

  const { cartList } = useCart();

  console.log(cartList);

  const cartItems = cartList.reduce((currItems, item) => {
    if (!currItems.includes(item.id)) {
      currItems.push(item);
    }

    return currItems;
  }, []);

  const numberofCartItems = cartItems.length;

  const onConfirmHandler = () => {};

  const onCloseHandler = () => {
    setOrder(null);
  };

  const cartOpenHandler = () => {
    setOrder(true);
  };

  return (
    <>
      {order &&
        createPortal(
          <Order
            className='mx-4 bg-white border border-orange-400'
            onConfirm={onConfirmHandler}
            onClose={onCloseHandler}
          />,
          body
        )}
      <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <div className='container py-3 sm:py-0'>
          <div className='flex justify-between items-center'>
            <div>
              <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
                <img src={Logo} alt='Logo' className='w-10' />
                Foodie
              </a>
            </div>
            <div className='flex justify-between items-center gap-4'>
              <div>
                <DarkMode />
              </div>
              <ul className='hidden sm:flex items-center gap-4'>
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <NavLink
                      to={menu.link}
                      className='inline-block py-4 px-4 hover:text-yellow-500'
                    >
                      {menu.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <button
                className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3'
                onClick={cartOpenHandler}
              >
                Cart
                <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
                <span className='bg-red-700 px-2 rounded-full'>
                  {' '}
                  {numberofCartItems}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
