import React, {Component} from 'react';

import { Navbar, Nav, NavItem   } from 'react-bootstrap';




export default class Header extends Component {
  render(){
    return (
        <Navbar>
            <Nav>
                <NavItem eventKey={1} href="#">Home</NavItem>
                <NavItem eventKey={2} href="#">Details</NavItem>
            </Nav>
        </Navbar>

    );
  }
}
