import { Fragment } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowItems from "../ShowItems";
import { faFileAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pasteFile } from "../../../Redux/actionCreators/filefoldersActions";
import { toast } from "react-toastify";


const FolderComponent=()=>{
    
    const {folderId} = useParams();
    const dispatch = useDispatch();

    const { currentFolderData,copyFileBuffer , childFolders ,childFiles } = useSelector((state)=>({

        currentFolderData : state.fileFolder.userFolders.find(
            (folder)=> folder.docId === folderId),

        childFolders : state.fileFolder.userFolders.filter(
            (folder)=> (folder.data.parent === folderId)),

        childFiles : state.fileFolder.userFiles.filter(
            (file)=> (file.data.parent === folderId)),
            
        copyFileBuffer: state.fileFolder.copyFileBuffer,
    

    }),shallowEqual)


    


    const handlePasteFile = () =>{
      
            let newName = copyFileBuffer.file.data.name;
            let counter = 1;

            const dotIndex = newName.lastIndexOf('.');
            const baseName = dotIndex !== -1 ? newName.slice(0, dotIndex) : newName;
            const extension = dotIndex !== -1 ? newName.slice(dotIndex) : '';
           
            while (childFiles.find(file => file.data.name === newName)) {
                newName = `${baseName}(${counter})${extension}`;
                // const match = newName.match(/(\d+)$/);

                // if (match) {
                //     
                //     counter = parseInt(match[0], 10) + 1;
                //     const baseName = newName.slice(0, -match[0].length);
                //     newName = `${baseName}${counter}`;
                // } else {
                //     newName = `${newName} ${counter}`;
                // }
                counter++;
              }

              if (newName) { 
                const data ={
                    ...copyFileBuffer.file.data,
                     name : newName,
                     path : [...currentFolderData.data.path,currentFolderData.docId],
                     parent : currentFolderData.docId,
                  }
                dispatch(pasteFile(data));
               }else{
              toast.error("File already Exists");
              }

            }  
        
    return(
        <Fragment>
            
          {copyFileBuffer.length !=0 &&(
            <div type="button" onClick={handlePasteFile} className="d-flex align-items-center justify-content-end">
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