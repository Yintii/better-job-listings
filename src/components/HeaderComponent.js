import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button, 
         Form, FormGroup, Label, Input,
         Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import addJob from '../helpers/addJob';

const Header = (props) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    return(
        <div>
            <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand href="/">JobSearcher</NavbarBrand>
                <Nav>
                <NavItem>
                    <NavLink onClick={toggle} className="text-white">Post a Job</NavLink>
                </NavItem>
                </Nav>
            </div>
            </Navbar>
            <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Post a job</ModalHeader>
            <ModalBody>
                <Form>
                <FormGroup>
                    <Label for="companyName">Company</Label>
                    <Input type="text" name="companyName" id="companyName" placeholder="Apple" />
                    <Label for="positionName">Position</Label>
                    <Input type="text" name="companyName" id="companyName" placeholder="Front Desk Clerk" />
                    <Label for="pay">Pay</Label>
                    <Input type="text" name="pay" id="pay" placeholder="$40/hr" />
                    <Label for="description">Job Description</Label>
                    <Input type="textarea" name="description" id="description" placeholder="Tell a bit about the position" />
                </FormGroup>
                <Button className="m-1" onClick={addJob} color="primary">Post Job</Button>
                </Form>
            </ModalBody>
            </Modal>
        </div>
    )
}


export default Header;