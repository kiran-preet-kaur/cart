import React, { useState } from 'react';
import { Card, Button, Col } from 'react-bootstrap'


const ListItem = props => {
  const { data } = props;
  const [added, setAdded] = useState(false);
  const handleClick = () => {
    setAdded(true);
    props.addToCart(data);
  }
  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>

          <Button variant="primary" onClick={handleClick}>Add to Cart</Button>
          {added && <div>Item added to cart!</div>}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListItem