import React, { useState ,useEffect} from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom";
import { signInUser } from "../../Redux/actionCreators/authActionCreators";
import { useDispatch } from "react-redux";

const Login = () => {

    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [success , setSuccess] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handelSubmit =(e) =>{
      e.preventDefault();
      if(!email || !password){
        alert(" الحقول اجباريه ");
        return;
      }

      dispatch(signInUser(email,password, setSuccess));
    };
    
    useEffect(()=>{
      if(success){
        navigate("/dashboard")
      }
    },[success])

    return (
    <Container>
      <Row>
        <Col md="12">
          <h1 className="display-1 my-5 text-center">Login</h1>
        </Col>
        <Col md="5" className="mx-auto">
          <Form onSubmit={handelSubmit} >
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
            <Form.Group controlId="formBasicBtn" className="mt-3">
              <Button
                variant="primary"
                type="submit"
                className="form-control"
                block
              >
                Login
              </Button>
            </Form.Group>
            <p className=" text-right d-flex align-items-center justify-content-end gap-2 ml-auto my-4">
              Not a Member?
              <Link to="/signup" className="ml-2 text-decoration-none">
                Register
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;