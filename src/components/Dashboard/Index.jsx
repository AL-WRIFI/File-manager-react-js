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
                            <div className="row mb-3">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="search-box mb-2 me-2">
                                        <div className="position-relative">
                                            <input type="text" className="form-control bg-light border-light rounded" placeholder="Search..." />
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
                                                <div className="dropdown-menu dropdown-menu-end">
                                                    <a className="dropdown-item" href="#"><i className="mdi mdi-folder-outline me-1"></i> Folder</a>
                                                    <a className="dropdown-item" href="#"><i className="mdi mdi-file-outline me-1"></i> File</a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dropdown mb-0">
                                            <a className="btn btn-link text-muted dropdown-toggle p-1 mt-n2" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                                <i className="mdi mdi-dots-vertical font-size-20"></i>
                                            </a>
                                        
                                            <div className="dropdown-menu dropdown-menu-end">
                                                <a className="dropdown-item" href="#">Share Files</a>
                                                <a className="dropdown-item" href="#">Share with me</a>
                                                <a className="dropdown-item" href="#">Other Actions</a>
                                            </div>
                                        </div>         
                                    </div>
                                </div>
                            </div>
                            {/* <div className="fm-search">
                                <div className="mb-0">
                                    <div className="input-group input-group-lg"><span className="input-group-text bg-transparent"><i className="fa fa-search"></i></span>
                                        <input type="text" className="form-control" placeholder="Search the files" />
                                    </div>
                                </div>
                            </div> */}
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

export default Index