import { Fragment } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowItems from "../ShowItems";


const FolderComponent=()=>{
    
    const {folderId} = useParams();
    const {currentFolderData , childFolders ,childFiles} = useSelector((state)=>({
       
        currentFolderData : state.fileFolder.userFolders.find(
            (folder) =>(folder.docId === folderId))?.data,
        
        childFolders : state.fileFolder.userFolders.filter(
            (folder)=> (folder.data.parent === folderId)),

        childFiles : state.fileFolder.userFiles.filter(
            (file)=> (file.data.parent === folderId)),

    }),shallowEqual)

    return(
        <Fragment>
           {
             childFolders.length > 0 || childFiles.length > 0 ? 
             (
               <Fragment>          
                 {childFolders.length > 0 &&(
                    <ShowItems title="folder" type="folder" items={childFolders}/>
                    )};  
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