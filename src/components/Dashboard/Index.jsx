import React,{ Fragment } from "react";
import ShowItems from "./ShowItems";

function Index(){

    const folder = ["folder 1" ,"folder 2", "folder 3" ];
    const files = [" file 1" ," file 2", " file 3" ];

    return(
        <Fragment>
            <div className="col-md-12 w-100">
                <ShowItems title="folder" items={folder}/>
                <ShowItems title="file" items={files}/>
            </div>
        </Fragment>
    )
        
    
}

export default Index;