import { useRef } from 'react';
import { useCart } from '../../contexts';

const MenuItem = (props) => {
  const menu = props.menu;

  const quantityInputRef = useRef();
  const { addItem, setTotal } = useCart();

  const addToCart = (e) => {
    e.preventDefault();

    const enteredQuantity = quantityInputRef.current.value;
    const enteredQuantityValue = +enteredQuantity;

    const totalAmount = enteredQuantityValue * menu.price;

    setTotal((prev) => totalAmount + prev);

    addItem({
      id: menu.id,
      name: menu.name,
      quantity: enteredQuantityValue,
      price: menu.price,
    });
  };

  return (
    <>
      <li
        className='my-1 w-1/2  bg-white rounded-md hover:cursor-pointer hover:bg-slate-300
              flex  justify-between align-middle 

              '
      >
        <div className='px-4'>
          <h1 className='text-2xl font-bold'>{menu.name}</h1>
          <p> {menu.description}</p>
          <span className='text-orange-500 text-xl font-bold'>
            $ {menu.price}
          </span>
        </div>

        <form
          action=''
          className='relative left-18 top-3 md:left-48'
          onSubmit={addToCart}
        >
          <label htmlFor={menu.id} className='text-sm/[18px] mx-2'>
            Quantity
          </label>
          <input
            id={menu.id}
            ref={quantityInputRef}
            type='number'
            className='w-9 border border-gray-300 rounded-sm px-1  '
            defaultValue={1}
            min={1}
            max={5}
          />
          <button
            type='submit'
            className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white rounded-full flex items-center px-4 ms-8 mt-4'
          >
            {' '}
            + add
          </button>
        </form>

        <hr />
      </li>
    </>
  );
};

export default MenuItem;
