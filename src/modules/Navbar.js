import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

class navbar extends Component {
  // constructor(...args) {
  //     super(...args);
  // }

  // componentDidMount() {
  //   if (localStorage.getItem('token') && !this.props.user) {
  //     this.props.getUser();
  //   }
  // }

  render() {
    const { user, logoutUser } = this.props;
    return (
      <>
        <header>
          <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>Order Catalogue</Navbar.Brand>
              </LinkContainer>
              {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
              <Nav className='ml-auto'>

                <LinkContainer to='/cart'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Cart
                  </Nav.Link>
                </LinkContainer>

              </Nav>
            </Container>
          </Navbar>
        </header>

      </>
    );
  }
}


export default navbar;