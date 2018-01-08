import React, { Component } from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {Link} from 'react-router';

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
              <a onClick={() => this.props.router.push('/')}>
               <div>
                 <img className='img-circle navbarAvatar' src={this.props.currentUser.photoURL} alt='profile'/>
               </div>
              </a>

            </Navbar.Brand>
            <Navbar.Brand>







            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>


          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} onClick={() => this.props.router.push('/couponshop')}>CouponShop</NavItem>
              <NavItem eventKey={2} onClick={() => this.props.router.push('/makecoupon')}>MakeCoupon</NavItem>

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
              <NavItem eventKey={2} onClick={this.props.signOut}>Logout</NavItem>
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
