import React,{ Fragment } from "react";
import ShowItems from "./ShowItems";
import { useSelector } from "react-redux";

function Index(){

    // const files = [{data:{name:" file 1"}} ,{data:{name:" file 2"}}, {data:{name:" file 3"}} ];
    const {isLoading , userFolders ,userFiles} = useSelector((state)=>({
        isLoading : state.fileFolder.isLoading,
        userFolders : state.fileFolder.userFolders.filter(folder=> folder.data.parent === "root"),
        userFiles : state.fileFolder.userFiles.filter(file=> file.data.parent === "root"),
    }));
    return(
        <Fragment>
            <div className="col-md-12 w-100">
                {
                    isLoading ? (
                        <h1 className="display-1 my-5 text-center">Loading...</h1>
                     ) : ( 
                        <>
                        <ShowItems title="folder" type="folder" items={userFolders}/>
                        <ShowItems title="file" type="file" items={userFiles}/>
                        </>
                    )
                } 
            </div>
        </Fragment>
    )
        
    
}

export default Index;