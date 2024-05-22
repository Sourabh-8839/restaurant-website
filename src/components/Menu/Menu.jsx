import { useState } from 'react';

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

  return (
    <div className='container bg-orange-200  min-h-[450px] w-full  dark:bg-gray-800 duration-200 '>
      <ul className=' flex  flex-col justify-center items-center sm:flexrounded-lg '>
        {dishes.map((menu) => (
          <>
            <li
              key={menu.name}
              className='inline-block text-center my-1 w-1/2  bg-white rounded-md hover:cursor-pointer hover:bg-slate-300'
            >
              <h1 className='text-2xl font-bold'>{menu.name}</h1>
              <p> {menu.description}</p>
              <span className='text-orange-500 text-xl font-bold'>
                {menu.price}
              </span>
              <hr className='' />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
