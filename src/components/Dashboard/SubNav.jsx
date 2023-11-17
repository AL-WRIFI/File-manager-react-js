import React from "react";
import { Col ,Button} from "react-bootstrap";
import { faFileUpload ,faFileAlt ,faFolderPlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubNav = () => {
  return (
    <Col md={12} className={"d-flex align-items-center px-5 pt-3 justify-content-between"}>
       <>
          <p>Root</p>
          <div className="ml-auto col-md-5 d-flex justify-content-end">
          <Button
            // onClick={() => setShowModal(true)}
            variant="outline-dark"
            className="border-1 d-flex align-items-center justify-content-between rounded-2"
           >
            <FontAwesomeIcon icon={faFileUpload} />
            &nbsp; Upload File
          </Button>
          <Button
            // onClick={() => setShowModal(true)}
            variant="outline-dark"
            className="border-1 d-flex align-items-center justify-content-between rounded-2"
           >
            <FontAwesomeIcon icon={faFileAlt} />
             &nbsp; Create File
          </Button>
          <Button
            // onClick={() => setShowModal(true)}
            variant="outline-dark"
            className="border-1 d-flex align-items-center justify-content-between rounded-2"
           >
            <FontAwesomeIcon icon={faFolderPlus} />
             &nbsp; Create Folder
          </Button>
            
          </div>
        </>
  
    </Col>
  );
};

export default SubNav;
