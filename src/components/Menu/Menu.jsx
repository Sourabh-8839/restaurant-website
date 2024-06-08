import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useCart } from '../../contexts';
import Card from './Card';
import MenuItem from './MenuItem';

const intialDishes = [
  {
    id: 1,
    name: 'Panner Tikka',
    description: 'Smash Paneer',
    price: '5',
  },

  {
    id: 2,
    name: 'Malai Kofta',
    description: 'Kofta with gravy',
    price: '10',
  },

  {
    id: 3,
    name: 'Rumali Roti',
    description: 'Whole Wheat Bread',
    price: '1',
  },
  {
    id: 4,
    name: 'Chai',
    description: 'Tea and Millk mixture ',
    price: '0.5',
  },
  {
    id: 5,
    name: 'Chole Kulche',
    description: 'Chana with naan',
    price: '5',
  },
];

const Menu = () => {
  const [dishes, setDishes] = useState(intialDishes);

  return (
    <>
      <Card className='container bg-orange-200  min-h-[450px] w-full  dark:bg-gray-800 duration-200 '>
        <ul className=' flex  flex-col justify-center items-center '>
          {dishes.map((menu) => (
            <>
              <MenuItem menu={menu} />
            </>
          ))}
        </ul>
      </Card>
    </>
  );
};

export default Menu;
