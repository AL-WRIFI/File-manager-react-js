import React from "react";
import { Col } from "react-bootstrap";
import CreateFolder from "../ModalForms/CreateFolder";
import CreateFile from "../ModalForms/CreateFile";
import UploadFile from "../ModalForms/UploadFile";

const SubNav = () => {
  return (
    <Col md={12} className={"d-flex align-items-center px-5 pt-3 justify-content-between"}>
       <>
          <p>Root</p>
          <div className="ml-auto col-md-5 d-flex justify-content-end">
            <UploadFile  />
            &nbsp;
            <CreateFile  />
            &nbsp;
            <CreateFolder  />
          </div>
        </>
  
    </Col>
  );
};

export default SubNav;
