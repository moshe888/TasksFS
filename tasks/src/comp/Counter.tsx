
import React, { useState, useEffect } from 'react';

import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';


const Counter = () => {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber(number + 1);
  };

  const handleDecrement = () => {
    setNumber(number - 1);
  };

  useEffect(() => {
    if (number > 20) {
        alert('Number is too high');
        setNumber(20);
    }
    if (number < 0) {
         alert('Number is too low');
            setNumber(0);
    }
  }, [number]);

  return (
    <div className='counter'>
        <div className='number'>
            <p>{number}</p>
        </div>
        <br/>
        <Button variant="success" onClick={handleIncrement}>+</Button>
        <Button variant="danger" onClick={handleDecrement}>-</Button>
        <div>
            <p>Counter is :  {number}</p>

        </div>
    </div>
  );
};



export default Counter;
