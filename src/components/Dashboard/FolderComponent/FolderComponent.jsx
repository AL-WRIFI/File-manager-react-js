import { Fragment } from "react";
import { useParams } from "react-router-dom";


const FolderComponent=()=>{
    
    const {folderId} = useParams();
    console.log("--------------------------------------")
    return(
        <Fragment>
           <h1 >FolderComponent: {folderId}</h1>
        </Fragment>
    )
    
}

export default FolderComponent;