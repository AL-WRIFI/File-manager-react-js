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
             childFolders.length > 0 ? 
             (<>
             <ShowItems title="folder" type="folder" items={childFolders}/>
             <ShowItems title="file" type="file" items={childFiles}/>
              </>)
             
            :(<p className="text-center my-5"> Empty Folder </p>)
           }
        </Fragment>
    )
    
}

export default FolderComponent;