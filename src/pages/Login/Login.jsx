import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <Container className="w-50 mx-auto bg-white p-4">
        <h3 className="text-center fw-bold text-secondary-emphasis pb-4">
          Login your account
        </h3>
        <hr className="py-2" />
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="fw-semibold">Email address</Form.Label>
            <Form.Control
              className="bg-secondary-subtle bg-opacity-25"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label className="fw-semibold">Password</Form.Label>
            <Form.Control
              className="bg-secondary-subtle bg-opacity-25"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </Form.Group>
          <div className="d-grid pt-2">
            <Button type="submit" variant="secondary">
              Login
            </Button>
          </div>
          <br></br>
          <Form.Text className="text-success">
            <div className="text-center">
              Don't have an account?{" "}
              <Link className="text-danger" to="/register">
                Register
              </Link>
            </div>
          </Form.Text>
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form>
      </Container>
    );
};

export default Login;