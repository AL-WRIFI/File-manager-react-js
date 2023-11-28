import { faFileAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
import { createFile } from "../../Redux/actionCreators/filefoldersActions";
import { toast } from "react-toastify";

const CreateFile = () => {

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [fileName, setFileName] = useState("");
  const [success, setSuccess] = useState(false);
  
  const toggle = () => {
    setShowModal(!showModal);
  };
  const { userFiles , user ,currentFolder ,currentFolderData} = useSelector((state)=>({
    userFiles: state.fileFolder.userFiles,
    user : state.auth.user,
    currentFolder : state.fileFolder.currentFolder,
    currentFolderData : state.fileFolder.userFolders.find((folder)=> folder.docId === state.fileFolder.currentFolder),

  }),shallowEqual);

   const checkFileAlreadyExists =(name ,extention) =>{
    !extention ? name = name +".txt":'';
    const fileExists = userFiles
      .filter((file)=> file.data.parent === currentFolder)
      .find((file)=> file.data.name === name);
    if(fileExists){
       return true; 
    }else{ 
      return false;
    }
  }

  const handleFileSubmit = (e) => {
   e.preventDefault();
   if(fileName){
    if(fileName.length > 3){
      let extention = false;
      if(fileName.split(".").length >1){
        extention = true;
      }
        if(!checkFileAlreadyExists(fileName,extention)){
            const data = {
                createdAt: new Date(),
                createdBy: user.displayName,
                lastAccessed: null,
                name: extention ? fileName : `${fileName}.txt`,
                path: currentFolder === "root" ? [] : [...currentFolderData.data.path,currentFolder],
                parent: currentFolder,
                updatedAt: new Date(),
                userId: user.uid,
                extent: extention ? fileName.split(".")[1] : "txt",
                data: "",
                url: "",
                thumbnailUrl:"",
            }
            console.log(data);
            dispatch(createFile(data ,setSuccess));
            toggle();
        }else{
          toast.error("File already Exists");
        }
    }else{
      toast.error("File name must be at least 3 Cher");
    }
   }else{
    toast.error("File Name cannot by empty");
   }
  };

  useEffect(()=>{
    if(success){
      setFileName("");
      setShowModal(false);
      setSuccess(false);
    }
  },[success])
  
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
          <Form onSubmit={handleFileSubmit}>
            <Form.Group controlId="formBasicFolderName" className="my-2">
              <Form.Control
                type="text"
                placeholder="File Name e,g txt..."
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
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
