import { Fragment } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ShowItems from "../ShowItems";
import { faFileAlt, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pasteFile } from "../../../Redux/actionCreators/FileActions/PasteFile";
import { MoveFile } from "../../../Redux/actionCreators/FileActions/MoveFile";
import { MoveFolder } from "../../../Redux/actionCreators/FolderActions/MoveFolder";
import { pasetFolder } from "../../../Redux/actionCreators/FolderActions/PasteFolder";

// import { toast } from "react-toastify";


const FolderComponent=()=>{
    
    const {folderId} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentFolderData,filesBuffer , childFolders ,childFiles } = useSelector((state)=>({

        currentFolderData : state.Folders.userFolders.find(
            (folder)=> folder.docId === folderId),

        childFolders : state.Folders.userFolders.filter(
            (folder)=> (folder.data.parent === folderId)),

        childFiles : state.Files.userFiles.filter(
            (file)=> (file.data.parent === folderId)),
            
        filesBuffer: state.Files.filesBuffer,
    

    }),shallowEqual)

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
          <div type="button" className="d-flex align-items-center p-2 justify-content-between">
          <div className="position-relative " onClick={()=>{navigate(-1)}} ><FontAwesomeIcon icon={faLeftLong} />
          </div>
          {filesBuffer.length !=0 &&(
            
              <div onClick={pasetAction} > Paste &nbsp;
                <FontAwesomeIcon icon={faFileAlt} />
              </div>
              
            )
          }
          </div>
           {
             childFolders.length > 0 || childFiles.length > 0 ? 
             (
               <Fragment>          
                 {childFolders.length > 0 &&(
                    <ShowItems title="folder" type="folder" items={childFolders}/>
                    )}  
                 {childFiles.length > 0 &&(
                    <ShowItems title="file" type="file" items={childFiles}/>
                    )};  
               </Fragment>
              )
            :(<p className="text-center my-5"> Empty Folder </p>)
           } 
           
        </Fragment>
    )
    
}

export default FolderComponent;