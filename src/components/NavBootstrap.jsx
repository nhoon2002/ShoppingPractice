import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class NavBootstrap extends Component {
   constructor(props){
      super(props)

      this.state = {};
   }

   render() {
      const navbarInstance = (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">NHCH Shop</a>

            </Navbar.Brand>
            <Navbar.Brand pullRight>



                     <img className='img-circle navbarAvatar' src={this.props.firebaseDB[0].profilePic} alt='profile'/>
               

            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>


          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">NavItem1</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link Right</NavItem>
              <NavItem eventKey={2} href="#">Link Right</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );





      return (
         <div>{navbarInstance}</div>

      )
   }

}

export default NavBootstrap;
