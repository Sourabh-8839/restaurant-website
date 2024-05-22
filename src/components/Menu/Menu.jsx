import { useState } from 'react';
import { createPortal } from 'react-dom';
import Order from './Order';

const intialDishes = [
  {
    name: 'Panner Tikka',
    description: 'Smash Paneer',
    price: '$ 5',
  },

  {
    name: 'Malai Kofta',
    description: 'Kofta with gravy',
    price: '$ 10',
  },

  {
    name: 'Rumali Roti',
    description: 'Whole Wheat Bread',
    price: '$ 1',
  },
  {
    name: 'Chai',
    description: 'Tea and Millk mixture ',
    price: '$ 0.5',
  },
  {
    name: 'Chole Kulche',
    description: 'Chana with naan',
    price: '$ 5',
  },
];

const Menu = () => {
  const [dishes, setDishes] = useState(intialDishes);

  const [order, setOrder] = useState(true);

  const body = document.querySelector('body');

  return (
    <>
      {order &&
        createPortal(
          <Order
            total='450'
            className='mx-4 bg-white border border-orange-400'
          />,
          body
        )}
      <div className='container bg-orange-200  min-h-[450px] w-full  dark:bg-gray-800 duration-200 '>
        <ul className=' flex  flex-col justify-center items-center sm:flexrounded-lg '>
          {dishes.map((menu) => (
            <>
              <li
                key={menu.name}
                className='my-1 w-1/2  bg-white rounded-md hover:cursor-pointer hover:bg-slate-300
              flex  justify-between align-middle 

              '
              >
                <div className='px-4'>
                  <h1 className='text-2xl font-bold'>{menu.name}</h1>
                  <p> {menu.description}</p>
                  <span className='text-orange-500 text-xl font-bold'>
                    {menu.price}
                  </span>
                </div>

                <form action='' className='relative left-18 top-3 md:left-48'>
                  <label htmlFor='Quantity' className='text-sm/[18px] mx-2'>
                    Quantity
                  </label>
                  <input
                    type='number'
                    className='w-9 border border-gray-300 rounded-sm px-1  '
                    defaultValue={1}
                  />
                  <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white rounded-full flex items-center px-4 ms-8 mt-4'>
                    {' '}
                    + add
                  </button>
                </form>

                <hr className='' />
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
