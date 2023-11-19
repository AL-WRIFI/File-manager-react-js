import { faFileAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { addFolderUser } from "../../redux/actionCreators/filefoldersActionCreators";

const CreateFile = () => {

  const [showModal, setShowModal] = useState(false);
  const [folderName, setFolderName] = useState("");
  
  const toggle = () => {
    setShowModal(!showModal);
  };
  const dispatch = useDispatch();
//   const { userId, userFolders } = useSelector(
//     (state) => ({
//       userId: state.auth.userId,
//       userFolders: state.filefolders.userFolders,
//     }),
//     shallowEqual
//   );

  const handleFolderSubmit = (e) => {
   
  };
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Create File</Modal.Title>
          <Button
            variant="white"
            style={{ cursor: "pointer" }}
            onClick={() => toggle()}
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFolderSubmit}>
            <Form.Group controlId="formBasicFolderName" className="my-2">
              <Form.Control
                type="text"
                placeholder="Enter folder name..."
                value={folderName}
                onChange={(e) => setFolderName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicFolderSubmit" className="mt-5">
              <Button type="submit" className="form-control" variant="primary">
                Add File
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      <Button
        onClick={() => toggle()}
        variant="outline-dark"
        className="border-1 d-flex align-items-center justify-content-between rounded-2"
      >
        <FontAwesomeIcon icon={faFileAlt} />
             &nbsp; Create File
      </Button>
    </>
  );
};

export default CreateFile;
