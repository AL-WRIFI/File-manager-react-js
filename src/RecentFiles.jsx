import { Fragment } from "react";


function Recentfile(){


    return(
        <Fragment>
    <div className="d-flex align-items-center">
        <div>
            <h5 className="mb-0">Recent Files</h5>
        </div>
    <div className="ms-auto"><a href="#" className="btn btn-sm btn-outline-secondary">View all</a>
    </div>
    </div>
    <div className="table-responsive mt-3">
    <table className="table table-striped table-hover table-sm mb-0">
        <thead>
            <tr>
                <th>Name <i className="bx bx-up-arrow-alt ms-2"></i>
                </th>
                <th>Members</th>
                <th>Last Modified</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div className="d-flex align-items-center">
                        <div><i className="bx bxs-file-pdf me-2 font-24 text-danger"></i>
                        </div>
                        <div className="font-weight-bold text-danger">Competitor Analysis Template</div>
                    </div>
                </td>
                <td>Only you</td>
                <td>Sep 3, 2019</td>
                <td><i className="fa fa-ellipsis-h font-24"></i>
                </td>
            </tr>
            <tr>
                <td>
                    <div className="d-flex align-items-center">
                        <div><i className="bx bxs-file me-2 font-24 text-primary"></i>
                        </div>
                        <div className="font-weight-bold text-primary">How to Create a Case Study</div>
                    </div>
                </td>
                <td>3 members</td>
                <td>Jun 12, 2019</td>
                <td><i className="fa fa-ellipsis-h font-24"></i>
                </td>
            </tr>
            <tr>
                <td>
                    <div className="d-flex align-items-center">
                        <div><i className="bx bxs-file me-2 font-24 text-primary"></i>
                        </div>
                        <div className="font-weight-bold text-primary">Landing Page Structure</div>
                    </div>
                </td>
                <td>10 members</td>
                <td>Jul 17, 2019</td>
                <td><i className="fa fa-ellipsis-h font-24"></i>
                </td>
            </tr>
            <tr>
                <td>
                    <div className="d-flex align-items-center">
                        <div><i className="bx bxs-file-pdf me-2 font-24 text-danger"></i>
                        </div>
                        <div className="font-weight-bold text-danger">Meeting Report</div>
                    </div>
                </td>
                <td>5 members</td>
                <td>Aug 28, 2019</td>
                <td><i className="fa fa-ellipsis-h font-24"></i>
                </td>
            </tr>
            <tr>
                <td>
                    <div className="d-flex align-items-center">
                        <div><i className="bx bxs-file me-2 font-24 text-primary"></i>
                        </div>
                        <div className="font-weight-bold text-primary">Project Documents</div>
                    </div>
                </td>
                <td>Only you</td>
                <td>Aug 17, 2019</td>
                <td><i className="fa fa-ellipsis-h font-24"></i>
                </td>
            </tr>
            <tr>
                <td>
                    <div className="d-flex align-items-center">
                        <div><i className="bx bxs-file-doc me-2 font-24 text-success"></i>
                        </div>
                        <div className="font-weight-bold text-success">Review Checklist Template</div>
                    </div>
                </td>
                <td>7 members</td>
                <td>Sep 8, 2019</td>
                <td><i className="fa fa-ellipsis-h font-24"></i>
                </td>
            </tr>
            <tr>
                <td>
                    <div className="d-flex align-items-center">
                        <div><i className="bx bxs-file me-2 font-24 text-primary"></i>
                        </div>
                        <div className="font-weight-bold text-primary">How to Create a Case Study</div>
                    </div>
                </td>
                <td>3 members</td>
                <td>Jun 12, 2019</td>
                <td><i className="fa fa-ellipsis-h font-24"></i>
                </td>
            </tr>
            <tr>
                <td>
                    <div className="d-flex align-items-center">
                        <div><i className="bx bxs-file me-2 font-24 text-primary"></i>
                        </div>
                        <div className="font-weight-bold text-primary">Landing Page Structure</div>
                    </div>
                </td>
                <td>10 members</td>
                <td>Jul 17, 2019</td>
                <td><i className="fa fa-ellipsis-h font-24"></i>
                </td>
            </tr>
            <tr>
                <td>
                    <div className="d-flex align-items-center">
                        <div><i className="bx bxs-file-doc me-2 font-24 text-success"></i>
                        </div>
                        <div className="font-weight-bold text-success">Review Checklist Template</div>
                    </div>
                </td>
                <td>7 members</td>
                <td>Sep 8, 2019</td>
                <td><i className="fa fa-ellipsis-h font-24"></i>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
        </Fragment>
    )
}

export default Recentfile;