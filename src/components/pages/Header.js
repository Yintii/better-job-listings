import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { logIn, logOut } from '../../actions';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return state
}

const mapDispatch = (dispatch) => {
    return {
        logIn: () => dispatch(logIn()),
        logOut: () => dispatch(logOut())
    }
}

const Header = (props) => {

    const LogButton = () =>{
        if(props.loggedIn){
            return <Button onClick={props.logOut}>Log out</Button>
        } else {
            return <Button onClick={props.logIn}>Log in</Button>
        }
    }

    return(
        <div>
            <Navbar dark color="dark">
                <div className="container">
                    <NavbarBrand href="/">JobSearcher</NavbarBrand>
                    <Nav horizontal>
                        <NavItem>
                            <NavLink className="nav-link text-white" to="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link text-white" to="/search">Search Jobs</NavLink>
                        </NavItem>
                        <NavItem>
                            <LogButton />
                        </NavItem>
                    </Nav>
                </div>
            </Navbar>
        </div>
    )
}



export default connect(mapStateToProps, mapDispatch)(Header);