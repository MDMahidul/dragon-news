import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from "../../../assets/bg.png";
import './RightNav.css';

const RightNav = () =>{
    return (
      <div>
        <div className="mb-4">
          <h4>Login With</h4>
          <Button className="mb-2 mt-2" variant="outline-primary">
            <FaGoogle /> Login with Google
          </Button>
          <Button variant="outline-secondary">
            <FaGithub /> Login with Github
          </Button>
        </div>
        <div>
          <h4>Find Us On</h4>
          <ListGroup className="mb-2">
            <ListGroup.Item>
              <FaFacebook /> Facebook
            </ListGroup.Item>
            <ListGroup.Item>
              <FaTwitter /> Twitter
            </ListGroup.Item>
            <ListGroup.Item>
              <FaInstagram /> Instagram
            </ListGroup.Item>
          </ListGroup>
        </div>
        <QZone />
        <div className="">
          <img className="position-absolute rightnav-bg img-fluid" src={bg} alt="" />
          <div className="position-relative pt-4 text-center">
            <h2 className="text-white fs-1 lh-sm fw-semibold  pt-5">
              Create an<br></br> Amazing<br></br> Newspaper
            </h2>
            <p className="text-white px-2 mt-5 lh-base mb-5">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <Button variant='danger px-4 py-2 fw-semibold fs-5'>Learn More</Button>
          </div>
        </div>
      </div>
    );
};

export default RightNav;