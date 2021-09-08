import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return(
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">JobSearcher</NavbarBrand>
                    <Nav horizontal>
                        <NavItem>
                            <NavLink className="nav-link text-white" to="/search">Search Jobs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link text-white" to="/account/login">Sign in</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        </div>
    )
}
export default Header;