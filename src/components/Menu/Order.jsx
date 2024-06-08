import Card from './Card';
import Button from '../Navbar/Button';
import './Order.css';
import CartItem from './CartItem';

import { useCart } from '../../contexts';

const Order = (props) => {
  const { total, cartList, addItem, removeItem } = useCart();

  const onAddHandler = (item) => {
    addItem(item);
  };

  const onRemoveHandler = (id) => {
    removeItem(id);
  };

  const hasItem = cartList.length > 0;
  const mealItem = (
    <ul className='list-none m-0 p-0 max-h-80 overflow-auto'>
      {cartList.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onRemove={onRemoveHandler.bind(null, item.id)}
          onAdd={onAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <div>
      <div className='backdrop'></div>

      <Card className='modal'>
        <header className='p-4'> {mealItem}</header>
        <div className='content text-2xl font-bold'>
          <p>
            Total Amount : <span> $ {total}</span>{' '}
          </p>
        </div>
        <footer className='actions'>
          <Button
            name='close'
            className={'mx-4 bg-white'}
            onClick={props.onClose}
          />
          {hasItem && <Button name='Order' onClick={props.onConfirm} />}
        </footer>
      </Card>
    </div>
  );
};
export default Order;
