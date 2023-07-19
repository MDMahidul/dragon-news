import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const [error,setError] = useState('');
  const [success,setSuccess] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";

  const handleLogIn=(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email,password);
    signIn(email,password)
      .then(result=>{
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess('Logged in successfully!!!')
        form.reset();
        navigate(from,{replace: true});
      })
      .catch(error=>{
        console.log(error);
        setError(error.message);
      })
  }
    return (
      <Container className="w-50 mx-auto bg-white p-4">
        <h3 className="text-center fw-bold text-secondary-emphasis pb-4">
          Login your account
        </h3>
        <hr className="py-2" />
        <Form onSubmit={handleLogIn}>
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
          <Form.Text>
            <div className="text-center">
              Don't have an account?{" "}
              <Link className="text-danger" to="/register">
                Register
              </Link>
            </div>
          </Form.Text>
          <div className="text-center mt-2">
            <Form.Text className="text-success">{success}</Form.Text>
            <Form.Text className="text-danger">{error}</Form.Text>
          </div>
        </Form>
      </Container>
    );
};

export default Login;