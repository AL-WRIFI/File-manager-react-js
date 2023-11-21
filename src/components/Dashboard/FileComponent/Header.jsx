import React,{ Fragment } from "react";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";


function Header({fileName}){
    const navigate = useNavigate();

   const pushItBack =()=>{

   }
    return(
        <Row className="px-5 d-flex align-items-center border-bottom mb-3 justify-content-between border-2 py-2 pt-3">
      <Col md={5} className="d-flex align-items-center justify-content-between">
        <h5 className="font-weight-bold">
          {fileName}
          {/* {data.trim() !== prevData.trim() && " [* . Modified]"} */}
        </h5>
      </Col>
      <Col md={5} className="d-flex align-items-center justify-content-end">
        <Button
          variant="success"
        //   disabled={data.trim() === prevData.trim()}
        //   onClick={() => saveFile()}
        >
          <FontAwesomeIcon icon={faSave} />
          &nbsp; Save
        </Button>
        &nbsp;
        <Button variant="dark" onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
          &nbsp; Go Back
        </Button>
      </Col>
    </Row>
    )
        
    
}

export default Header;