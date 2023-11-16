import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavbarComponent =()=>{
  

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand
        
        style={{ marginLeft: "60px", marginRight: "auto" }}
      >
        File Management System
      </Navbar.Brand>
      <Nav style={{ marginRight: "60px" }}>
      
          
            <Nav.Link
              className="text-white d-flex align-items-center justify-content-between"
              style={{ pointerEvents: "unset", cursor: "text" }}
            >
              Welcome,
            </Nav.Link>
            <Nav.Link
              // as={Link}
              style={{ marginRight: "10px", marginLeft: "-10px" }}
              className="text-white"
              to="/dashboard/profile"
            >
              {/* <strong>{user.data.displayName}</strong> */}
            </Nav.Link>
            <Nav.Link
              as={Button}
              to="/login"
              variant="primary"
              active
              style={{ marginRight: "5px" }}
              size="sm"
            >
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link
              as={Button}
              variant="success"
              // onClick={() => history.push("/signup")}
              active
              size="sm"
            >
             <Link to="/signup">Register</Link>
            </Nav.Link>
          
      
      </Nav>
    </Navbar>
  );

};

export default NavbarComponent;
