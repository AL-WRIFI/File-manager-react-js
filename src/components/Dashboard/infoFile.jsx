import { Fragment } from "react";


const InfoFile = () =>{



    return(
    <Fragment>
        <h1></h1>
        <div className="col-lg-8 col-sm-6">
        <div className="mt-4 mt-sm-0 d-flex align-items-center justify-content-sm-end">
            <div className="dropdown mb-0">
                <a className="btn btn-link text-muted  p-1 mt-n2" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                    <i className="mdi mdi-dots-vertical font-size-20"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end">                                            
                    <a className="dropdown-item" href="#">select</a>
                    <a className="dropdown-item" href="#">share</a>
                    <a className="dropdown-item" href="#">info</a>
                </div>
            </div>         
        </div>
    </div>
    </Fragment>
    )
}

export default InfoFile;