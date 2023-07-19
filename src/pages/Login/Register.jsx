import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister =  event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name,email,photo,password);
    if(password.length < 6){
      setError('Password should be at least 6 digits!!!')
    }
    createUser(email,password)
      .then(result=>{
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
        setSuccess('User Registered Successfully!!!')
      })
      .catch(error=>{
        console.log(error)
        setError(error.message);
      })
  }

    return (
      <Container className="w-50 mx-auto bg-white p-4">
        <h3 className="text-center fw-bold text-secondary-emphasis pb-4">
          Register your account
        </h3>
        <hr className="py-2 opacity-50" />
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formGroupName">
            <Form.Label className="fw-semibold">Your Name</Form.Label>
            <Form.Control
              className="bg-secondary-subtle bg-opacity-25"
              name="name"
              type="name"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPhotoUrl">
            <Form.Label className="fw-semibold">Photo URL</Form.Label>
            <Form.Control
              className="bg-secondary-subtle bg-opacity-25"
              name="photo"
              type="text"
              placeholder="Enter photo url"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="fw-semibold">Email</Form.Label>
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
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check
              name="accept"
              type="checkbox"
              label="Accept Term & Conditions"
            />
          </Form.Group>
          <div className="d-grid pt-2">
            <Button type="submit" variant="secondary">
              Register
            </Button>
          </div>
          <div className="text-center py-3">
            <Form.Text className="text-success">
              Already have an account?
              <Link className="text-danger" to="/login">
                Login
              </Link>
            </Form.Text>
          </div>
          <div className="text-center mt-2">
            <Form.Text className="text-success">{success}</Form.Text>
            <Form.Text className="text-danger">{error}</Form.Text>
          </div>
        </Form>
      </Container>
    );
};

export default Register;