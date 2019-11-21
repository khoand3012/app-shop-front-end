import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Button,
  Input
} from "reactstrap";

import { Link } from 'react-router-dom';

//import { Button } from "bootstrap/dist/js/bootstrap.bundle";

const NavigationBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(isOpen);

  return (
    <div>
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <Navbar color="light" expand="lg" className="col-md-12">
            <NavbarBrand href="/index" className="col-md-3"><Link to={'/'} className="text-decoration-none">App Shop</Link></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="justify-content-center col-md-6">
              <Nav className="navbar navbar-expand-md" navbar>
                <NavItem className="btn btn-light">
                  <NavLink><Link to={'/'} className="text-decoration-none">Home</Link></NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar className="btn btn-light">
                  <DropdownToggle nav caret>
                    Products
                  </DropdownToggle>
                  <DropdownMenu left="true">
                    <DropdownItem>Games</DropdownItem>
                    <DropdownItem>Applications</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar className="btn btn-light">
                  <DropdownToggle nav caret>
                    Platforms
                  </DropdownToggle>
                  <DropdownMenu left="true">
                    <DropdownItem>PC</DropdownItem>
                    <DropdownItem>Playstation 4</DropdownItem>
                    <DropdownItem>XBox One</DropdownItem>
                    <DropdownItem>Nintendo Switch</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem className="btn btn-light">
                  <NavLink><Link to={'/contact'} className="text-decoration-none">Contact Us</Link></NavLink>
                </NavItem>
                <NavItem className="btn btn-light">
                  <NavLink><Link to={'/about'} className="text-decoration-none">About Us</Link></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            <div className="cart-and-search-box col-md-3">
              <Button className="btn btn-light">
                <i className="fa fa-shopping-bag"></i>
              </Button>

              <Form className="d-inline-flex">
                <Input
                  className="form-control"
                  placeholder="Search for products..."
                />
                <Button className="btn btn-light pad1 text-decoration-none">
                  <a id="search_1" href="">
                    <i className="fa fa-search"></i>
                  </a>
                </Button>
              </Form>
            </div>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
