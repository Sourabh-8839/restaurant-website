import React from 'react';
import Card from './Card';
import Button from '../Navbar/Button';
import './Order.css';

const Order = (props) => {
  return (
    <div>
      <div
        className='backdrop'

        // onClick={props.onConfirm}
      ></div>

      <Card className='modal'>
        <header className='p-4'>
          <h2>Panner Tikka</h2>
        </header>
        <div className='content text-2xl font-bold'>
          <p>
            Total Amount :- <span className=''> ${props.total}</span>{' '}
          </p>
        </div>
        <footer className='actions'>
          <Button name='close' className={'mx-4 bg-white'} />
          <Button name='Order' onClick={props.onConfirm}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};
export default Order;
