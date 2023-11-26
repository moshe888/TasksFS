import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button
} from 'react-bootstrap';


import Counter from './comp/Counter';
import Pokemon from './comp/pokemon';

const App: React.FC = () => {
  return (
    <div>
      {/* <Counter/> */}
      <Pokemon/>
    </div>
  );
};

export default App;
