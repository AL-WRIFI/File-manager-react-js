import React,{ Fragment } from "react";
import { faFolder, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


function ShowItems({title , items ,type}){

    const navigate = useNavigate();
    const handleDoubleClick= (itemId)=>{
     if(type === "folder"){
        navigate(`/dashboard/folder/${itemId}`)
     }else{
        alert("FILE")
     }

    }

    return(
        <Fragment>
            <div className="w-100">
                <h4 className="text-center border-bottom py-2">{title}</h4>
                <div className="row gap-2 p-4 flex-wrap">
                   {items.map((el,idx)=>{
                      return(
                        <p key={idx*55} className="col-md-2 py-3 text-center d-flex flex-column border"
                           onDoubleClick={()=>handleDoubleClick(el.docId)}>
                            {type === "folder" ?
                               (<FontAwesomeIcon icon={faFolder} size="4x" className="mb-3"/>):
                               (<FontAwesomeIcon icon={faFileAlt} size="4x" className="mb-3"/>) 
                            }
                            {el.data.name}
                        </p>
                      );})}
                </div>
            </div>
        </Fragment>
    )
        
    
}

export default ShowItems;