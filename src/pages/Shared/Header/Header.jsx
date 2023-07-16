import React from 'react';
import logo from '../../../assets/logo.png'
import moment from "moment";
import {Button,Container,Navbar,Nav} from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <Container className='mb-5'>
            <div className="text-center mt-5">
                <img className='img-fluid' src={logo}  alt=""/>
                <p className="text-secondary mt-2">Journalism Without Fear or Favour</p>
                <h5 className='fw-semibold mb-4 '>{moment().format("dddd, MMMM D, YYYY")}</h5>
            </div>
            <div className='d-flex'>
                <Button variant="danger"> Latest</Button>
                <Marquee className='text-danger bg-secondary bg-opacity-25' speed={100}>Match Highlights: Germany vs Spain - as it happened ! The Match result is so shocking. Germany won the game by 4-3.</Marquee>
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