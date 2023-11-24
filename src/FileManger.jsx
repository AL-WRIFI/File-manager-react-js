import { Fragment } from "react";
import './File.css';
import SidBar from "./SidBar";
import Recentfile from "./RecentFiles";

function FileManger(){


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
                        {/* <div className="col-12 col-lg-4">
                            <div className="card shadow-none border radius-15">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="fm-icon-box radius-15 bg-primary text-white"><i className="lni lni-google-drive"></i>
                                        </div>
                                        <div className="ms-auto font-24"><i className="fa fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                    <h5 className="mt-3 mb-0">Google Drive</h5>
                                    <p className="mb-1 mt-4"><span>45.5 GB</span>  <span className="float-end">50 GB</span>
                                    </p>
                                    <div className="progress" style={{height: "7px"}}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card shadow-none border radius-15">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="fm-icon-box radius-15 bg-danger text-white"><i className="lni lni-dropbox-original"></i>
                                        </div>
                                        <div className="ms-auto font-24"><i className="fa fa-ellipsis-h"></i>
                                        </div>
                                    </div>
                                    <h5 className="mt-3 mb-0">Dropbox</h5>
                                    <p className="mb-1 mt-4"><span>1,2 GB</span>  <span className="float-end">3 GB</span>
                                    </p>
                                    <div className="progress" style={{height: "7px"}}>
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: "45%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        */}
                    </div>
                    <h5>Folders</h5>
                    <div className="row mt-3">
                        
                        <div className="col-12 col-lg-3">
                            <div className="card shadow-none border radius-15">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="font-30 text-primary"><i className="bx bxs-folder"></i>
                                        </div>
                                       
                                    </div>
                                    <h6 className="mb-0 text-primary">Marketing</h6>
                                    <small>143 files</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="card shadow-none border radius-15">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="font-30 text-primary"><i className="bx bxs-folder"></i>
                                        </div>
                                       
                                    </div>
                                    <h6 className="mb-0 text-primary">Marketing</h6>
                                    <small>143 files</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="card shadow-none border radius-15">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="font-30 text-primary"><i className="bx bxs-folder"></i>
                                        </div>
                                       
                                    </div>
                                    <h6 className="mb-0 text-primary">Marketing</h6>
                                    <small>143 files</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="card shadow-none border radius-15">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="font-30 text-primary"><i className="bx bxs-folder"></i>
                                        </div>
                                       
                                    </div>
                                    <h6 className="mb-0 text-primary">Marketing</h6>
                                    <small>143 files</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="card shadow-none border radius-15">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="font-30 text-primary"><i className="bx bxs-folder"></i>
                                        </div>
                                       
                                    </div>
                                    <h6 className="mb-0 text-primary">Marketing</h6>
                                    <small>143 files</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="card shadow-none border radius-15">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="font-30 text-primary"><i className="bx bxs-folder"></i>
                                        </div>
                                       
                                    </div>
                                    <h6 className="mb-0 text-primary">Marketing</h6>
                                    <small>143 files</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-3">
                            <div className="card shadow-none border radius-15">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div className="font-30 text-primary"><i className="bx bxs-folder"></i>
                                        </div>
                                       
                                    </div>
                                    <h6 className="mb-0 text-primary">Marketing</h6>
                                    <small>143 files</small>
                                </div>
                            </div>
                        </div>
                    </div>
                   <Recentfile />
                </div>
            </div>
        </div>
    </div>
    </div>
</Fragment>
    )
}

export default FileManger;