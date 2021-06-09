import React, { Component } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import CartItem from './cartItem';

class Cart extends Component {
  constructor(...args) {
    super(...args);
    this.state = { showConfirmation: false }
  }

  handleClick = () => {

    this.setState({
      showConfirmation: true
    })
    this.props.emptyCart();
  }

  render() {
    const { data, total } = this.props;
    if (this.state.showConfirmation) {
      return (
        <div>
          Thank you for your Order!
        </div>
      )
    } else if (data.length < 1) {
      return (
        <div>
          You have no products in your cart!
        </div>
      )
    }
    return (
      <Container>
        <Row xs={2} md={2} className="g-4">
          {data.map((item) => <CartItem key={item._id} data={item} />)}
        </Row>
        <div>Total Amount: {total}</div>
        <Button onClick={this.handleClick}>Place Order</Button>
      </Container>
    );
  }
}


export default Cart