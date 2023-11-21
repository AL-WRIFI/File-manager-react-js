import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import CreateFolder from "../ModalForms/CreateFolder";
import CreateFile from "../ModalForms/CreateFile";
import UploadFile from "../ModalForms/UploadFile";
import { Link, useNavigate } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeFolder } from "../../Redux/actionCreators/filefoldersActions";

const SubNav = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userFolders ,currentFolder ,currentFolderData} = useSelector((state)=>({
    userFolders: state.fileFolder.userFolders,
    currentFolder : state.fileFolder.currentFolder,
    currentFolderData : state.fileFolder.userFolders.find(
      (folder)=> folder.docId === state.fileFolder.currentFolder),

  }),shallowEqual);

  const handleNavigate = ( link,id )=>{
    navigate(link);
    dispatch(changeFolder(id));
  }


  return (
    <Col md={12} className={"d-flex align-items-center px-5 pt-3 justify-content-between"}>
       <>
       <nav className="ms-5" aria-label="breadcrumb">
          <ol className="breadcrumb d-flex align-items-center" >
            {currentFolder !== "root" ? (
              <Fragment>
                <button onClick={()=> handleNavigate("/dashboard" ,"root")}
                className="breadcrumb-items btn btn-link text-decoration-none">
                  Root
                </button>
               {currentFolderData?.data.path.map((folder,idx)=>(
                <button key={idx} className="breadcrumb-items btn btn-link text-decoration-none"
                 onClick={()=> handleNavigate(`/dashboard/folder/${userFolders.find(
                  (fldr)=> fldr.docId === folder).docId}`,
                  userFolders.find((fldr)=> fldr.docId === folder).docId)}
                  >
                  {userFolders.find((fldr)=> fldr.docId === folder).data.name}
                </button>
               ))}
              <li className="breadcrumb-item active" >
                { currentFolderData?.data.name}
                </li>

              </Fragment>
            ):(<li className="breadcrumb-item">Root</li> )}
          </ol>
        </nav>
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
