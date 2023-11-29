import { faFolderPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { createFolder } from "../../Redux/actionCreators/FolderActions";
import { toast } from "react-toastify";

const CreateFolder = () => {

  const [showModal, setShowModal] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [success, setSuccess] = useState(false);

  const { userFolders , user ,currentFolder ,currentFolderData} = useSelector((state)=>({
    userFolders: state.Folders.userFolders,
    user : state.auth.user,
    currentFolder : state.Folders.currentFolder,
    currentFolderData : state.Folders.userFolders.find((folder)=> folder.docId === state.Folders.currentFolder),
  }),shallowEqual);

  const checkFolderAlreadyExists =(name) =>{
    const folderExists = userFolders
      .filter((folder)=> folder.data.parent === currentFolder)
      .find((folder)=> folder.data.name === name);
    if(folderExists){
       return true; 
    }else{ 
      return false;
    }
  }

  const toggle = () => {
    setShowModal(!showModal);
  };
  const dispatch = useDispatch();


  const handleFolderSubmit = (e) => {
   e.preventDefault();
   if(folderName){
    if(folderName.length > 3){
        if(!checkFolderAlreadyExists(folderName)){
            const data = {
                createdAt: new Date(),
                createdBy: user.displayName,
                lastAccessed: null,
                type: "Folder", 
                name: folderName,
                path: currentFolder === "root" ? [] : [...currentFolderData.data.path,currentFolder],
                parent: currentFolder,
                updatedAt: new Date(),
                userId: user.uid,
            }
            dispatch(createFolder(data,setSuccess));
            toggle();
        }else{
          toast.error("Folder already Exists");
        }
    }else{
      toast.error("Folder name must be at least 3 Cher");
    }
   }else{
    toast.error("Folder Name cannot by empty");
   }
  };

  useEffect(()=>{
    if(success){
      // setFolderName("");
      setShowModal(false);
      setSuccess(false);
    }
   },[success])

  return(
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Create Folder</Modal.Title>
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
                Add Folder
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
      <Button
        onClick={() => toggle()}
        variant="outline-dark"
        className="border-1 d-flex align-items-center justify-content-between rounded-2">
        <FontAwesomeIcon icon={faFolderPlus} />
        &nbsp; Create Folder
      </Button>
    </>
  );
};

export default CreateFolder;
