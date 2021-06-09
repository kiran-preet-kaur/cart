
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Listing from './modules/Listing';
import Navbar from './modules/Navbar';
import React, { Component } from 'react';
import Cart from './modules/Cart';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      cart: [], totalPrice: 0,
      listing: [
        {
          "image": "/images/pink-butterfly-ring.jpg",
          "qty": 10,
          "_id": "60b19413237736360009801f",
          "name": "Pink Butterfly ring",
          "description": "Size: Adjustable 2-4 / Part Size : 9 x 6 mm\nMaterial: Genuine 925 sterling silver, Nickel and Lead free. Conform to International, European an American legislation regarding lead, nickel and heavy metal content.\nFinishing - E-Coat protects the sterling silver from tarnishing for an extended period and lets the natural beauty of the sterling silver come through.\nGift Box available",
          "category": "Rings",
          "price": 100,
          "currency": "INR",
          "user": "60a0701f61f7b30b5ce0569b",
          "date": "2021-05-29T01:08:35.055Z",
          "__v": 0
        },
        {
          "image": "/images/strawberry-ring.jpg",
          "qty": 10,
          "_id": "60b193ef237736360009801e",
          "name": "Strawberry ring",
          "description": "Size: Adjustable 2-4 / Part Size : 9 x 6 mm\nMaterial: Genuine 925 sterling silver, Nickel and Lead free. Conform to International, European an American legislation regarding lead, nickel and heavy metal content.\nFinishing - E-Coat protects the sterling silver from tarnishing for an extended period and lets the natural beauty of the sterling silver come through.\nGift Box available",
          "category": "Rings",
          "price": 100,
          "currency": "INR",
          "user": "60a0701f61f7b30b5ce0569b",
          "date": "2021-05-29T01:07:59.934Z",
          "__v": 0
        },
        {
          "image": "/images/pink-flower-ring.jpg",
          "qty": 10,
          "_id": "60b193d4237736360009801d",
          "name": "Pink flower ring",
          "description": "Size: Adjustable 2-4 / Part Size : 9 x 6 mm\nMaterial: Genuine 925 sterling silver, Nickel and Lead free. Conform to International, European an American legislation regarding lead, nickel and heavy metal content.\nFinishing - E-Coat protects the sterling silver from tarnishing for an extended period and lets the natural beauty of the sterling silver come through.\nGift Box available",
          "category": "Rings",
          "price": 100,
          "currency": "INR",
          "user": "60a0701f61f7b30b5ce0569b",
          "date": "2021-05-29T01:07:32.264Z",
          "__v": 0
        },
        {
          "image": "/images/cherry-ring.jpg",
          "qty": 10,
          "_id": "60b193a9237736360009801c",
          "name": "Cherry ring",
          "description": "Size: Adjustable 2-4 / Part Size : 9 x 6 mm\nMaterial: Genuine 925 sterling silver, Nickel and Lead free. Conform to International, European an American legislation regarding lead, nickel and heavy metal content.\nFinishing - E-Coat protects the sterling silver from tarnishing for an extended period and lets the natural beauty of the sterling silver come through.\nGift Box available",
          "category": "Rings",
          "price": 100,
          "currency": "INR",
          "user": "60a0701f61f7b30b5ce0569b",
          "date": "2021-05-29T01:06:49.717Z",
          "__v": 0
        },
        {
          "image": "/images/ice-cream-ring.jpg",
          "qty": 10,
          "_id": "60b1934d237736360009801a",
          "name": "Ice-cream ring",
          "description": "Size: Adjustable 2-4 / Part Size : 9 x 6 mm\nMaterial: Genuine 925 sterling silver, Nickel and Lead free. Conform to International, European an American legislation regarding lead, nickel and heavy metal content.\nFinishing - E-Coat protects the sterling silver from tarnishing for an extended period and lets the natural beauty of the sterling silver come through./nGift Box available",
          "category": "Rings",
          "price": 100,
          "currency": "INR",
          "user": "60a0701f61f7b30b5ce0569b",
          "date": "2021-05-29T01:05:17.871Z",
          "__v": 0
        },
        {
          "image": "/images/duck-ring.jpg",
          "qty": 10,
          "_id": "60b1932c2377363600098019",
          "name": "Duck ring",
          "description": "Size: Adjustable 2-4 / Part Size : 9 x 6 mm\nMaterial: Genuine 925 sterling silver, Nickel and Lead free. Conform to International, European an American legislation regarding lead, nickel and heavy metal content.\nFinishing - E-Coat protects the sterling silver from tarnishing for an extended period and lets the natural beauty of the sterling silver come through.\nGift Box available",
          "category": "Rings",
          "price": 100,
          "currency": "INR",
          "user": "60a0701f61f7b30b5ce0569b",
          "date": "2021-05-29T01:04:44.596Z",
          "__v": 0
        },
        {
          "image": "/images/blue-flower-ring.jpg",
          "qty": 10,
          "_id": "60b192932377363600098018",
          "name": "Blue flower ring",
          "description": "Size: Adjustable 2-4 / Part Size : 9 x 6 mm/nMaterial: Genuine 925 sterling silver, Nickel and Lead free. Conform to International, European an American legislation regarding lead, nickel and heavy metal content./nFinishing - E-Coat protects the sterling silver from tarnishing for an extended period and lets the natural beauty of the sterling silver come through./nGift Box available",
          "category": "Rings",
          "price": 100,
          "currency": "INR",
          "user": "60a0701f61f7b30b5ce0569b",
          "date": "2021-05-29T01:02:11.749Z",
          "__v": 0
        }
      ]
    }
  }

  addToCart = (item) => {
    let cartArray = this.state.cart;
    cartArray.push(item);
    let price = this.state.totalPrice;
    this.setState({
      cart: cartArray,
      totalPrice: price + item.price
    })
  }

  emptyCart = () => {
    this.setState({
      cart: [],
      totalPrice: 0
    })
  }

  render() {
    const { } = this.props;
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={() => <Listing data={this.state.listing} addToCart={this.addToCart} />} />
          <Route exact path='/cart' component={() => <Cart data={this.state.cart} total={this.state.totalPrice} emptyCart={this.emptyCart} />} />
        </Switch>
      </Router>
    );
  }
}


export default App