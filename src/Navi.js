import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CartSummary from './CartSummary';

export default class Navi extends Component {

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/" className="text-muted">Stork App</Link>
          <NavbarToggler  />
          <Collapse  navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>

            </Nav>
           <CartSummary cart={this.props.cart} sepettenKaldir={this.props.sepettenKaldir} />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}