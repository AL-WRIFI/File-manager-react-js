import React, { Fragment, useEffect } from "react";
import { useSelector ,shallowEqual, useDispatch} from "react-redux";
import { BrowserRouter as Router, Route ,useNavigate} from "react-router-dom";
import SubNav from "./SubNav";
import Index from "./Index";
import { gitFolders } from "../../Redux/actionCreators/filefoldersActions";
import FolderComponent from "./FolderComponent/FolderComponent";
const Dashboard =()=>{

const { isAuthenticated , isLoading, userId } = useSelector((state) =>({ 
    isAuthenticated : state.auth.isAuthenticated ,
    isLoading : state.fileFolder.isLoading,
    userId: state.auth.user.uid,
}),shallowEqual);

const navigate = useNavigate();
const dispatch = useDispatch();
useEffect(()=>{
    console.log(isAuthenticated);
    if(!isAuthenticated){
        navigate("/login");
    }
},[]);

useEffect(()=>{
    if( userId && isLoading){
        dispatch(gitFolders(userId));
    }
},[isLoading,userId,dispatch])


    return(
      <Fragment> 
        <SubNav />
        <Router>
            <Route path="/"  >
                <Index/>
            </Route>
            {/* <Route path="/folder/:folderId" Component={FolderComponent}/> */}
            
        </Router>
     </Fragment>
    );
}
export default Dashboard;

