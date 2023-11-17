import React,{ Fragment } from "react";


function ShowItems({title , items}){

    return(
        <Fragment>
            <div className="w-100">
                <h4 className="text-center border-bottom py-2">{title}</h4>
                <div className="row gap-2 p-4 flex-wrap">
                   {items.map((el,idx)=>{
                      return(
                        <p key={idx*55} className="col-md-2 p-2 ext-center border">
                            {el}
                        </p>
                      );})}
                </div>
            </div>
        </Fragment>
    )
        
    
}

export default ShowItems;