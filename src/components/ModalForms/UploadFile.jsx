import { faFileUpload, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../../Redux/actionCreators/filefoldersActions";
import { toast } from "react-toastify";


const UploadFile = () => {

  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const toggle = () => {
    setShowModal(!showModal);
  };
  const dispatch = useDispatch();
  const { userFiles , user ,currentFolder ,currentFolderData} = useSelector((state)=>({
    userFiles: state.fileFolder.userFiles,
    user : state.auth.user,
    currentFolder : state.fileFolder.currentFolder,
    currentFolderData : state.fileFolder.userFolders.find((folder)=> folder.docId === state.fileFolder.currentFolder),

  }),shallowEqual);

  const checkFileAlreadyExists =(name) =>{
    const fileExists = userFiles
      .filter((file)=> file.data.parent === currentFolder)
      .find((file)=> file.data.name === name);
    if(fileExists){
       return true; 
    }else{ 
      return false;
    }
  }

  const handleUploadFileSubmit = (e) => {
   e.preventDefault();
   if(file){
        if(!checkFileAlreadyExists(file.name)){
            const data = {
                createdAt: new Date(),
                createdBy: user.displayName,
                lastAccessed: null,
                name: file.name ,
                path: currentFolder === "root" ? [] : [...currentFolderData.data.path,currentFolder],
                parent: currentFolder,
                updatedAt: new Date(),
                userId: user.uid,
                extent: file.name.split(".")[1] ,
                data: null,
                url: "",
            }
            console.log(file);
            dispatch(uploadFile(file,data ,setSuccess));
        }else{
          toast.error("File already Exists");
        }
    
   }else{
    toast.error("File  cannot by empty");
   }
  };
  useEffect(()=>{
    if(success){
      setShowModal(false);
      setSuccess(false);
    }
  },[success])
  
  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Upload File</Modal.Title>
          <Button
            variant="white"
            style={{ cursor: "pointer" }}
            onClick={() => toggle()}
          >
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUploadFileSubmit}>
            <Form.Group controlId="formBasicFolderName" className="my-2">
              <Form.Control
                type="file"
                placeholder="Enter folder name..."
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group controlId="formBasicFolderSubmit" className="mt-5">
              <Button type="submit" className="form-control" variant="primary">
                Upload File
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
        <FontAwesomeIcon icon={faFileUpload} />
             &nbsp; Upload File
      </Button>
    </>
  );
};

export default UploadFile;
