import React,{ Fragment } from "react";
import ShowItems from "./ShowItems";
import { useDispatch, useSelector } from "react-redux";
import Recentfile from "../../RecentFiles";
import SidBar from "../../SidBar";
import { Outlet, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight, faCircleArrowRight, faPaste } from "@fortawesome/free-solid-svg-icons";
import CreateFile  from "../ModalForms/CreateFile";
import  CreateFolder  from "../ModalForms/CreateFolder";
import  UploadFile  from "../ModalForms/UploadFile";
import { pasetFolder } from "../../Redux/actionCreators/FolderActions/PasteFolder";
import { pasteFile } from "../../Redux/actionCreators/FileActions";
import { MoveFile } from "../../Redux/actionCreators/FileActions/MoveFile";
import { MoveFolder } from "../../Redux/actionCreators/FolderActions/MoveFolder";

function Index(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {isLoading , childFolders ,childFiles ,currentFolder ,filesBuffer ,currentFolderData} = useSelector((state)=>({
        isLoading : state.Folders.isLoading,
        
        currentFolder : state.Folders.currentFolder,
        filesBuffer: state.Files.filesBuffer,

        currentFolderData : state.Folders.userFolders.find(
            (folder)=> folder.docId === state.Folders.currentFolder),

        childFolders : state.Folders.userFolders.filter(
            (folder)=> (folder.data.parent === state.Folders.currentFolder)),

        childFiles : state.Files.userFiles.filter(
            (file)=> (file.data.parent === state.Folders.currentFolder)),
            
    }));

    const checkAlreadyExists = (name) =>{
 
        let newName = name;
        let counter = 1;
        const dotIndex = newName.lastIndexOf('.');
        const baseName = dotIndex !== -1 ? newName.slice(0, dotIndex) : newName;
        const extension = dotIndex !== -1 ? newName.slice(dotIndex) : '';
        const nameList = filesBuffer.item.data.type == "folder" ? childFolders : childFiles;
        
        while (nameList.find(file => file.data.name === newName)) {
            newName = `${baseName}(${counter})${extension}`;
            counter++;
        }
       
       return newName; 
     }
      
      const getTypeActions = (type) =>{
  
        const actions = type === "folder" ? 
        {move: MoveFolder , paste: pasetFolder}: 
        {move: MoveFile , paste: pasteFile};
  
        return actions;
      }
       
    const pasetAction = () =>{
      
        const name = checkAlreadyExists(filesBuffer.item.data.name);
        const docId = filesBuffer.item.docId;
        const parentId = filesBuffer.item.data.parent;
        const data = {
              ...filesBuffer.item.data,
             name : name,
             path : [...currentFolderData.data.path,currentFolderData.docId],
             parent : currentFolderData.docId,
          }
    
      const actions = getTypeActions(filesBuffer.item.data.type);
      filesBuffer.action === "cut" ?
      dispatch(actions.move(docId,data,parentId)):
      dispatch(actions.paste(docId,data));              
  }  

    return(
     <Fragment>
        <div className="container">
            <div className="row mt-5">
                <SidBar />
                <div className="col-12 col-lg-9">
                    <div className="card ">
                        <div className="card-body ">
                            <div className="row mb-3">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="search-box mb-2 me-2">
                                        <div className="d-flex align-items-center justify-content-between ">
                                            {currentFolder !== "root" ?
                                             <div type="button" onClick={()=>{navigate(-1)}} className="m-2">
                                              <FontAwesomeIcon icon={faCircleArrowRight} rotation={180} size="xl" className="" />  
                                             </div>
                                             : ""
                                            }
                                              
                                            <input type="text" className="form-control bg-light border-light rounded " placeholder="Search..." />
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" className="eva eva-search-outline search-icon"><g data-name="Layer 2"><g data-name="search"><rect width="24" height="24" opacity="0"></rect><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path></g></g></svg> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-sm-6">
                                    <div className="mt-4 mt-sm-0 d-flex align-items-center justify-content-sm-end">

                                        <div className="mb-2 me-2">
                                            <div className="dropdown">
                                                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="mdi mdi-plus me-1"></i> Create New
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end ">
                                                    <a className="dropdown-item" href="#"><i className="mdi mdi-folder-outline me-1 d-flex align-items-center justify-content-end"></i> <CreateFile /></a>
                                                    <a className="dropdown-item" href="#"><i className="mdi mdi-file-outline me-1 d-flex align-items-center justify-content-end"></i> <CreateFolder /></a>
                                                    <a className="dropdown-item" href="#"><i className="mdi mdi-file-outline me-1 d-flex align-items-center justify-content-end"></i> <UploadFile /></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dropdown mb-0">
                                            <a className="btn btn-link text-muted  p-1 mt-n2" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                <i className="mdi mdi-dots-vertical font-size-20"><FontAwesomeIcon icon={faAlignRight} /></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end">
                                               
                                                    {filesBuffer.length !=0 &&
                                                     
                                                    <div type="button" className="dropdown-item" >                                   
                                                    <div onClick={pasetAction} > Paste &nbsp;
                                                    <FontAwesomeIcon icon={faPaste}/>
                                                    </div>
                                                    </div>               
                                                    }
                                                
                                                <a className="dropdown-item" href="#">select</a>
                                                <a className="dropdown-item" href="#">share</a>
                                                <a className="dropdown-item" href="#">info</a>
                                            </div>
                                        </div>         
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3"></div>          
                            {isLoading ? (
                                <h1 className="display-1 my-5 text-center">Loading...</h1>
                                ): currentFolder === "root" ? ( 
                                 <Fragment>
                                    {
                                      childFolders.length > 0 || childFiles.length > 0 ?    
                                        <Fragment>
                                        {childFolders.length > 0 &&(
                                            <ShowItems title="Folders" type="folder" items={childFolders}/>
                                            )}  
                                        {childFiles.length > 0 &&(
                                            <ShowItems title="Files" type="file" items={childFiles}/>
                                            )}  
                                        </Fragment>
                                       :<p className="text-center my-5"> Empty Folder </p>
                                    }     
                                 </Fragment>
                                ):<Outlet/>} 
                            <Recentfile />
                        </div>
                    </div>
                </div>
            </div>
            </div>              
        </Fragment>
    )  
}

export default Index