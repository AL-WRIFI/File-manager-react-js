import React,{ Fragment } from "react";
import ShowItems from "./ShowItems";
import { useSelector } from "react-redux";
import Recentfile from "../../RecentFiles";
import SidBar from "../../SidBar";
import { Outlet } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faFileAlt } from "@fortawesome/free-solid-svg-icons";


function Index(){

    const {isLoading , userFolders ,userFiles ,currentFolder} = useSelector((state)=>({
        isLoading : state.Folders.isLoading,
        userFolders : state.Folders.userFolders.filter(folder=> folder.data.parent === "root"),
        userFiles : state.Files.userFiles.filter(file=> file.data.parent === "root"),
        currentFolder : state.Folders.currentFolder,
    }));

    return(
        <Fragment>
            <div className="container">
            <div className="row">
                <SidBar />
                <div className="col-12 col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            <div className="fm-search">
                                <div className="mb-0">
                                    <div className="input-group input-group-lg"><span className="input-group-text bg-transparent"><i className="fa fa-search"></i></span>
                                        <input type="text" className="form-control" placeholder="Search the files" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                            
                            </div>
                            
                                {/* <div type="button" className="d-flex align-items-center justify-content-end" style={{ position: 'absolute', right: 25 }}>
                                Paste &nbsp;
                                <FontAwesomeIcon icon={faArrowRightLong} />
                                </div> */}
                            
                            {
                            isLoading ? (
                                <h1 className="display-1 my-5 text-center">Loading...</h1>
                            ) :  currentFolder === "root" ? ( 
                                <>
                                <ShowItems title="folder"  items={userFolders}/>
                                <ShowItems title="file" items={userFiles}/>
                                </>
                            ) : (
                                <Outlet/>
                            )
                        } 
                        <Recentfile />
                        </div>
                    </div>
                </div>
            </div>
            </div>              
        </Fragment>
    )  
}

export default Index;