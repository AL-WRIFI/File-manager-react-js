import React, { Fragment, useEffect } from "react";
import { useSelector ,shallowEqual, useDispatch} from "react-redux";
import { Outlet, useNavigate} from "react-router-dom";
import SubNav from "./SubNav";

import { gitFolders } from "../../Redux/actionCreators/filefoldersActions";
import { gitFiles } from "../../Redux/actionCreators/filefoldersActions";

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
        dispatch(gitFiles(userId));
    }
},[isLoading,userId,dispatch])


    return(
      <Fragment> 
        <SubNav />
        <Outlet/>
     </Fragment>
    );
}
export default Dashboard;

