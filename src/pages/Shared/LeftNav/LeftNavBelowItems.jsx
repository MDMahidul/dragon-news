import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
import { FaCalendar, FaCalendarAlt } from 'react-icons/fa';

const LeftNavBelowItems = () => {
    return (
      <div>
        <Row xs={1} md={1} lg={1} className="g-4 mt-3">
          <Col>
            <Card border="light">
              <Card.Img variant="top" src={first} />
              <Card.Body>
                <Card.Title>
                  Bayern Slams Authorities Over Flight Delay to Club World Cup
                </Card.Title>
                <Card.Text></Card.Text>
                <div className="d-flex gap-5 align-items-center mt-4">
                  <p className="fw-bold">Sports</p>
                  <div className="text-secondary d-inline-flex">
                    <FaCalendarAlt className="mt-1 me-2"></FaCalendarAlt>
                    <p>Jan 4, 2023</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="light">
              <Card.Img variant="top" src={second} />
              <Card.Body>
                <Card.Title>
                  Bayern Slams Authorities Over Flight Delay to Club World Cup
                </Card.Title>
                <Card.Text></Card.Text>
                <div className="d-flex gap-5 align-items-center mt-4">
                  <p className="fw-bold">Sports</p>
                  <div className="text-secondary d-inline-flex">
                    <FaCalendarAlt className="mt-1 me-2"></FaCalendarAlt>
                    <p>Jan 4, 2023</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="light">
              <Card.Img variant="top" src={third} />
              <Card.Body>
                <Card.Title>
                  Bayern Slams Authorities Over Flight Delay to Club World Cup
                </Card.Title>
                <Card.Text></Card.Text>
                <div className="d-flex gap-5 align-items-center mt-4">
                  <p className="fw-bold">Sports</p>
                  <div className="text-secondary d-inline-flex">
                    <FaCalendarAlt className="mt-1 me-2"></FaCalendarAlt>
                    <p>Jan 4, 2023</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
};

export default LeftNavBelowItems;