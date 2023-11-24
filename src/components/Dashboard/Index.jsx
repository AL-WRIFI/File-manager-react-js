import React,{ Fragment } from "react";
import ShowItems from "./ShowItems";
import { useSelector } from "react-redux";
import Recentfile from "../../RecentFiles";
import SidBar from "../../SidBar";
import '../../File.css';
import { Outlet } from "react-router";


function Index(){

    const {isLoading , userFolders ,userFiles ,currentFolder} = useSelector((state)=>({
        isLoading : state.fileFolder.isLoading,
        userFolders : state.fileFolder.userFolders.filter(folder=> folder.data.parent === "root"),
        userFiles : state.fileFolder.userFiles.filter(file=> file.data.parent === "root"),
        currentFolder : state.fileFolder.currentFolder,
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
                                    <div className="input-group input-group-lg">	<span className="input-group-text bg-transparent"><i className="fa fa-search"></i></span>
                                        <input type="text" className="form-control" placeholder="Search the files" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                            
                            </div>
                            {
                            isLoading ? (
                                <h1 className="display-1 my-5 text-center">Loading...</h1>
                            ) :  currentFolder === "root" ? ( 
                                <>
                                <ShowItems title="folder" type="folder" items={userFolders}/>
                                <ShowItems title="file" type="file" items={userFiles}/>
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