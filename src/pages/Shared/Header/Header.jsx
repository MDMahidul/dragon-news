import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import {Button,Container,Navbar,Nav, NavDropdown} from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo}  alt=""/>
                <p><small className="text-secondary">Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger"> Latest</Button>
                <Marquee className='text-danger bg-secondary bg-opacity-25' speed={100}>400 Bad Request 400 Bad Request 400 Bad Request</Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" className="bg-light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                        <Nav.Link href="#pricing">Career</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Profile</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <Button variant="secondary">Login</Button>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;