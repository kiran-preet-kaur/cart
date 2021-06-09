import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import ListItem from './ListItem';


class Listing extends Component {
  constructor(...args) {
    super(...args);

  }

  render() {
    const { data } = this.props;
    return (
      <Container>
        <Row xs={1} md={3} className="g-4">
          {data.map((item) => <ListItem key={item._id} data={item} addToCart={this.props.addToCart} />)}
        </Row>
      </Container>
    );
  }
}


export default Listing