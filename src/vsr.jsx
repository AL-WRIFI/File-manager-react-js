import { Fragment } from "react";


function Varx(){


    return(
        <Fragment>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc="  />
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>

<div className="container">
<div className="row">
<div className="col-xl-12">
    <div className="card">
        <div className="card-body">
            <div className="row mb-3">
                <div className="col-lg-4 col-sm-6">
                    <div className="search-box mb-2 me-2">
                        <div className="position-relative">
                            <input type="text" className="form-control bg-light border-light rounded" placeholder="Search..." />
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" className="eva eva-search-outline search-icon"><g data-name="Layer 2"><g data-name="search"><rect width="24" height="24" opacity="0"></rect><path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z"></path></g></g></svg>
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

            <h5 className="font-size-16 me-3 mb-0">My Files</h5>
                <div className="row mt-4">
                    {/* <div className="col-xl-4 col-sm-6">
                        <div className="card shadow-none border">
                            <div className="card-body p-3">
                                <div className="">
                                    <div className="dropdown float-end">
                                        <a className="text-muted dropdown-toggle font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="bx bx-dots-vertical-rounded font-size-20"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Remove</a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar align-self-center me-3">
                                            <div className="avatar-title rounded bg-soft-primary text-primary font-size-24">
                                                <i className="mdi mdi-google-drive"></i>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <h5 className="font-size-15 mb-1">Google Drive</h5>
                                            <a href="" className="font-size-13 text-muted"><u>View Folder</u></a>
                                        </div>
                                    </div>
                                    <div className="mt-3 pt-1">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-muted font-size-13 mb-1">20GB</p>
                                            <p className="text-muted font-size-13 mb-1">50GB used</p>
                                        </div>
                                        <div className="progress animated-progess custom-progress">
                                            <div className="progress-bar bg-gradient bg-primary" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="90">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="col-xl-4 col-sm-6">
                        <div className="card shadow-none border">
                            <div className="card-body p-3">
                                <div className="">
                                    <div className="dropdown float-end">
                                        <a className="text-muted dropdown-toggle font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="bx bx-dots-vertical-rounded font-size-20"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Remove</a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar align-self-center me-3">
                                            <div className="avatar-title rounded bg-soft-info text-info font-size-24">
                                                <i className="mdi mdi-dropbox"></i>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <h5 className="font-size-15 mb-1">Dropbox</h5>
                                            <a href="" className="font-size-13 text-muted"><u>View Folder</u></a>
                                        </div>
                                    
                                    </div>
                                    <div className="mt-3 pt-1">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-muted font-size-13 mb-1">20GB</p>
                                            <p className="text-muted font-size-13 mb-1">50GB used</p>
                                        </div>
                                        <div className="progress animated-progess custom-progress">
                                            <div className="progress-bar bg-gradient bg-info" role="progressbar"style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="90">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-sm-6">
                        <div className="card shadow-none border">
                            <div className="card-body p-3">
                                <div className="">
                                    <div className="dropdown float-end">
                                        <a className="text-muted dropdown-toggle font-size-16" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="bx bx-dots-vertical-rounded font-size-20"></i>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Remove</a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="avatar align-self-center me-3">
                                            <div className="avatar-title rounded bg-soft-primary text-primary font-size-24">
                                                <i className="mdi mdi-apple-icloud"></i>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <h5 className="font-size-15 mb-1">One Drive</h5>
                                            <a href="" className="font-size-13 text-muted"><u>View Folder</u></a>
                                        </div>
                                    
                                    </div>
                                    <div className="mt-3 pt-1">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-muted font-size-13 mb-1">20GB</p>
                                            <p className="text-muted font-size-13 mb-1">50GB used</p>
                                        </div>
                                        <div className="progress animated-progess custom-progress">
                                            <div className="progress-bar bg-gradient bg-primary" role="progressbar" style={{width: "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="90">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            <h5 className="font-size-16 me-3 mb-0">Folders</h5>
                <div className="row mt-4">
                    <div className="col-xl-4 col-sm-6">
                        <div className="card shadow-none border">
                            <div className="card-body p-3">
                                <div className="">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <i className="bx bxs-folder h1 mb-0 text-warning"></i>
                                        </div>
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <a href="javascript: void(0);" className="d-inline-block">
                                                    {/* <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="rounded-circle avatar-sm"/> */}
                                                </a>
                                            </div>
                                            <div className="avatar-group-item">
                                                <a href="javascript:pl void(0);" className="d-inline-block">
                                                    {/* <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" className="rounded-circle avatar-sm"/> */}
                                                </a>
                                            </div>
                                            <div className="avatar-group-item">
                                                <a href="javascript: void(0);" className="d-inline-block">
                                                    <div className="avatar-sm">
                                                        <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                                                            A
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <div className="overflow-hidden me-auto">
                                            <h5 className="font-size-15 text-truncate mb-1"><a href="javascript: void(0);" className="text-body">Analytics</a></h5>
                                            <p className="text-muted text-truncate mb-0">12 Files</p>
                                        </div>
                                        <div className="align-self-end ms-2">
                                            <p className="text-muted mb-0 font-size-13"><i className="mdi mdi-clock"></i> 15 min ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-sm-6">
                        <div className="card shadow-none border">
                            <div className="card-body p-3">
                                <div className="">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <i className="bx bxs-folder h1 mb-0 text-warning"></i>
                                        </div>
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <a href="javascript: void(0);" className="d-inline-block">
                                                    {/* <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" className="rounded-circle avatar-sm"/> */}
                                                </a>
                                            </div>
                                            <div className="avatar-group-item">
                                                <a href="javascript: void(0);" className="d-inline-block">
                                                    {/* <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" className="rounded-circle avatar-sm"/> */}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <div className="overflow-hidden me-auto">
                                            <h5 className="font-size-15 text-truncate mb-1"><a href="javascript: void(0);" className="text-body">Sketch Design</a></h5>
                                            <p className="text-muted text-truncate mb-0">235 Files</p>
                                        </div>
                                        <div className="align-self-end ms-2">
                                            <p className="text-muted mb-0 font-size-13"><i className="mdi mdi-clock"></i> 23 min ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-sm-6">
                        <div className="card shadow-none border">
                            <div className="card-body p-3">
                                <div className="">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <i className="bx bxs-folder h1 mb-0 text-warning"></i>
                                        </div>
                                        <div className="avatar-group">
                                            <div className="avatar-group-item">
                                                <a href="javascript: void(0);" className="d-inline-block">
                                                    <div className="avatar-sm">
                                                        <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                                                            K
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="avatar-group-item">
                                                <a href="javascript: void(0);" className="d-inline-block">
                                                    {/* <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" className="rounded-circle avatar-sm"/> */}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-3">
                                        <div className="overflow-hidden me-auto">
                                            <h5 className="font-size-15 text-truncate mb-1"><a href="javascript: void(0);" className="text-body">Applications</a></h5>
                                            <p className="text-muted text-truncate mb-0">20 Files</p>
                                        </div>
                                        <div className="align-self-end ms-2">
                                            <p className="text-muted mb-0 font-size-13"><i className="mdi mdi-clock"></i> 45 min ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="d-flex flex-wrap">
                    <h5 className="font-size-16 me-3">Recent Files</h5>
                    <div className="ms-auto">
                        <a href="javascript: void(0);" className="fw-medium text-reset">View All</a>
                    </div>
                </div>
                <hr className="mt-2"/>
                <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-hover mb-0">
                        <thead className="table-light">
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">Date modified</th>
                              <th scope="col">Size</th>
                              <th scope="col">Members</th>
                            </tr>
                          </thead>
                        <tbody>
                            <tr>
                                <td><a href="javascript: void(0);" className="text-dark fw-medium"><i className="mdi mdi-file-document font-size-16 align-middle text-primary me-2"></i> index.html</a></td>
                                <td>12-10-2020, 09:45</td>
                                <td>09 KB</td>
                                <td>
                                    <div className="avatar-group">
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" className="rounded-circle avatar-sm"/>
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" className="rounded-circle avatar-sm"/>
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <div className="avatar-sm">
                                                    <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                                                        A
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="font-size-16 text-muted" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Open</a>
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Rename</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Remove</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="javascript: void(0);" className="text-dark fw-medium"><i className="mdi mdi-folder-zip font-size-16 align-middle text-warning me-2"></i> Project-A.zip</a></td>
                                <td>11-10-2020, 17:05</td>
                                <td>115 KB</td>
                                <td>
                                    <div className="avatar-group">
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="rounded-circle avatar-sm"/>
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" className="rounded-circle avatar-sm"/>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="font-size-16 text-muted" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Open</a>
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Rename</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Remove</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="javascript: void(0);" className="text-dark fw-medium"><i className="mdi mdi-image font-size-16 align-middle text-muted me-2"></i> Img-1.jpeg</a></td>
                                <td>11-10-2020, 13:26</td>
                                <td>86 KB</td>
                                <td>
                                    <div className="avatar-group">
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <div className="avatar-sm">
                                                    <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                                                        K
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" className="rounded-circle avatar-sm"/>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="font-size-16 text-muted" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Open</a>
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Rename</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Remove</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="javascript: void(0);" className="text-dark fw-medium"><i className="mdi mdi-text-box font-size-16 align-middle text-muted me-2"></i> update list.txt</a></td>
                                <td>10-10-2020, 11:32</td>
                                <td>08 KB</td>
                                <td>
                                    <div className="avatar-group">
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" className="rounded-circle avatar-sm"/>
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" className="rounded-circle avatar-sm"/>
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="rounded-circle avatar-sm"/>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="font-size-16 text-muted" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Open</a>
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Rename</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Remove</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="javascript: void(0);" className="text-dark fw-medium"><i className="mdi mdi-folder font-size-16 align-middle text-warning me-2"></i> Project B</a></td>
                                <td>10-10-2020, 10:51</td>
                                <td>72 KB</td>
                                <td>
                                    <div className="avatar-group">
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" className="rounded-circle avatar-sm"/>
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" className="rounded-circle avatar-sm"/>
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <div className="avatar-sm">
                                                    <span className="avatar-title rounded-circle bg-danger text-white font-size-16">
                                                        3+
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="font-size-16 text-muted" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Open</a>
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Rename</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Remove</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="javascript: void(0);" className="text-dark fw-medium"><i className="mdi mdi-text-box font-size-16 align-middle text-muted me-2"></i> Changes list.txt</a></td>
                                <td>09-10-2020, 17:05</td>
                                <td>07 KB</td>
                                <td>
                                    <div className="avatar-group">
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" className="rounded-circle avatar-sm"/>
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" className="rounded-circle avatar-sm"/>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="font-size-16 text-muted" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Open</a>
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Rename</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Remove</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="javascript: void(0);" className="text-dark fw-medium"><i className="mdi mdi-image font-size-16 align-middle text-success me-2"></i> Img-2.png</a></td>
                                <td>09-10-2020, 15:12</td>
                                <td>31 KB</td>
                                <td>
                                    <div className="avatar-group">
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <div className="avatar-sm">
                                                    <span className="avatar-title rounded-circle bg-pink text-white font-size-16">
                                                        L
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" className="rounded-circle avatar-sm"/>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="font-size-16 text-muted" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Open</a>
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Rename</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Remove</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="javascript: void(0);" className="text-dark fw-medium"><i className="mdi mdi-folder font-size-16 align-middle text-warning me-2"></i> Project C</a></td>
                                <td>09-10-2020, 10:11</td>
                                <td>20 KB</td>
                                <td>
                                    <div className="avatar-group">
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" className="rounded-circle avatar-sm" />
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" className="rounded-circle avatar-sm" />
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <div className="avatar-sm">
                                                    <span className="avatar-title rounded-circle bg-success text-white font-size-16">
                                                        A
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" className="rounded-circle avatar-sm" />
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="font-size-16 text-muted" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Open</a>
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Rename</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Remove</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td><a href="javascript: void(0);" className="text-dark fw-medium"><i className="bx bxs-file font-size-16 align-middle text-primary me-2"></i> starter-page.html</a></td>
                                <td>08-10-2020, 03:22</td>
                                <td>11 KB</td>
                                <td>
                                    <div className="avatar-group">
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="" className="rounded-circle avatar-sm" />
                                            </a>
                                        </div>
                                        <div className="avatar-group-item">
                                            <a href="javascript: void(0);" className="d-inline-block">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" className="rounded-circle avatar-sm" />
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <a className="font-size-16 text-muted" role="button" data-bs-toggle="dropdown" aria-haspopup="true">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </a>
                                        
                                        <div className="dropdown-menu dropdown-menu-end">
                                            <a className="dropdown-item" href="#">Open</a>
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Rename</a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">Remove</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

        </div>
    </div>
    </div>
</div>
</div>
        </Fragment>
    )
}

export default Varx;