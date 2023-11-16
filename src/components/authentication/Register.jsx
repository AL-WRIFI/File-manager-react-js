import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link} from "react-router-dom";


const Register = () => {

    const [name ,setName] = useState("");
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handelSubmit =(e) =>{
      e.preventDefault();
      
    }


    return (
    <Container>
      <Row>
        <Col md="12">
          <h1 className="display-1 my-5 text-center">Login</h1>
        </Col>
        <Col md="5" className="mx-auto">
          <Form onSubmit={handelSubmit} >
          <Form.Group controlId="formBasicName" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Re-type password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicBtn" className="mt-3">
              <Button
                variant="primary"
                type="submit"
                className="form-control"
                block
              >
                Register
              </Button>
            </Form.Group>
            <p className=" text-right d-flex align-items-center justify-content-end gap-2 ml-auto my-4">
            Already a Member?
              <Link to="/login" className="ml-2 text-decoration-none">
                login
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;