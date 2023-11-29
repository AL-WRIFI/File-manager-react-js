import { Fragment } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowItems from "../ShowItems";
import { faFileAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cutFile, pasteFile } from "../../../Redux/actionCreators/FileActions";
import { toast } from "react-toastify";


const FolderComponent=()=>{
    
    const {folderId} = useParams();
    const dispatch = useDispatch();

    const { currentFolderData,filesBuffer , childFolders ,childFiles } = useSelector((state)=>({

        currentFolderData : state.Folders.userFolders.find(
            (folder)=> folder.docId === folderId),

        childFolders : state.Folders.userFolders.filter(
            (folder)=> (folder.data.parent === folderId)),

        childFiles : state.Files.userFiles.filter(
            (file)=> (file.data.parent === folderId)),
            
        filesBuffer: state.Files.filesBuffer,
    

    }),shallowEqual)


    


    const checkNames = () =>{
      
       let newName = filesBuffer.file.data.name;
       let counter = 1;
       const dotIndex = newName.lastIndexOf('.');
       const baseName = dotIndex !== -1 ? newName.slice(0, dotIndex) : newName;
       const extension = dotIndex !== -1 ? newName.slice(dotIndex) : '';

       while (childFiles.find(file => file.data.name === newName)) {
           newName = `${baseName}(${counter})${extension}`;
           counter++;
         }

        if (newName) { 
          const data ={
                ...filesBuffer.file.data,
               name : newName,
               path : [...currentFolderData.data.path,currentFolderData.docId],
               parent : currentFolderData.docId,
            }
            
          dispatch(cutFile(data));
         }
    }  
        
    return(
        <Fragment>     
          {filesBuffer.length !=0 &&(
            <div type="button" onClick={checkNames} className="d-flex align-items-center justify-content-end">
              Paste &nbsp;
              <FontAwesomeIcon icon={faFileAlt} />
            </div>)
          }
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