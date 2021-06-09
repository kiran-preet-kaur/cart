import React from 'react';
import { Col } from 'react-bootstrap';

const CartItem = props => {
  const { data } = props;
  return (
    <>

      <Col className="float-right"><img src={data.image} height="100" width="100" /></Col>
      <Col>
        <div>{data.name}</div>
        <div>{data.price}</div>
      </Col>
    </>
  );
};

export default CartItem