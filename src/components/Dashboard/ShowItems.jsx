import React,{ Fragment } from "react";
import { faFolder, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeFolder } from "../../Redux/actionCreators/filefoldersActions";

function ShowItems({title , items ,type}){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleDoubleClick= (itemId)=>{
     if(type === "folder"){
        dispatch(changeFolder(itemId));
        navigate(`/dashboard/folder/${itemId}`);
     }else{
        navigate(`/dashboard/file/${itemId}`);
     }
    }

    return(
        <Fragment>
            <h5>{title}</h5>
                    <div className="row mt-3">
                    {items.map((el,idx)=>{
                      return(
                        <div key={idx*55} onDoubleClick={()=>handleDoubleClick(el.docId)} className="col-12 col-lg-3">
                            <div className="card shadow-none border radius-15">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        {el.data.extent === "png" ? (
                                        <div className="font-30 text-primary">
                                            <img src={el.data.thumbnailUrl}  />
                                        </div>)
                                        :(
                                        <div className="font-30 text-primary"><i className={type === "folder"? "bx bxs-folder" : "lni lni-empty-file"}></i>
                                        </div>
                                        )}
                                    </div>
                                    <h6 className="mb-0 text-primary">{el.data.name}</h6>
                                    {type === "folder"? <small>143 files</small> : ""}
                                </div>
                            </div>
                        </div>
                  
                      )})}
                        
                    </div>
        </Fragment>
    )
        
    
}

export default ShowItems;