import React from 'react';
import logo from '../../../assets/logo.png'
import moment from "moment";
import {Button,Container} from 'react-bootstrap';
import Marquee from 'react-fast-marquee';



const Header = () => {

    return (
      <Container className="mb-3">
        <div className="text-center mt-5">
          <img className="img-fluid" src={logo} alt="" />
          <p className="text-secondary mt-2">
            Journalism Without Fear or Favour
          </p>
          <h5 className="fw-semibold mb-4 ">
            {moment().format("dddd, MMMM D, YYYY")}
          </h5>
        </div>
        <div className="d-flex">
          <Button variant="danger"> Latest</Button>
          <Marquee
            className="text-danger bg-secondary bg-opacity-25"
            speed={100}
          >
            Match Highlights: Germany vs Spain - as it happened ! The Match
            result is so shocking. Germany won the game by 4-3.
          </Marquee>
        </div>
      </Container>
    );
};

export default Header;