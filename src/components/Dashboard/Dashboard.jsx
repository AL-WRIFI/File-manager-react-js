import React, { Fragment, useEffect, useState } from "react";
import { useSelector ,shallowEqual, useDispatch} from "react-redux";
import { Outlet, useLocation, useNavigate} from "react-router-dom";
import SubNav from "./SubNav";

import { gitFolders } from "../../Redux/actionCreators/filefoldersActions";
import { gitFiles } from "../../Redux/actionCreators/filefoldersActions";

const Dashboard =()=>{

const [showSubNav,setShowSubNav] = useState(true);
const  location  = useLocation();
const navigate = useNavigate();
const dispatch = useDispatch();

const { isAuthenticated , isLoading, userId } = useSelector((state) =>({ 
    isAuthenticated : state.auth.isAuthenticated ,
    isLoading : state.fileFolder.isLoading,
    userId: state.auth.user.uid,
}),shallowEqual);

useEffect(()=>{
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

useEffect(()=>{
    if(location.pathname.includes("/file/")){
        setShowSubNav(false);
    }
},[location.pathname])

    return(
      <Fragment>
        <SubNav />
        {/* { showSubNav ? <SubNav /> : ""}  */}
        <Outlet/>
     </Fragment>
    );
}
export default Dashboard;

