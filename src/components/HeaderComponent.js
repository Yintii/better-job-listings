import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, 
         Form, FormGroup, Label, Input,
         Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
//import { JOBS } from '../shared/Jobs';

class Header extends Component {
    render(){
        return(
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">JobSearcher</NavbarBrand>
                        <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/search">Search Jobs</NavLink>
                        </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </div>
        )
    }
}


export default Header;