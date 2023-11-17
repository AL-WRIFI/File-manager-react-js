import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SubNav from "./SubNav";
import Index from "./Index";
const Dashboard =()=>{

// const isLoggedIn = useSelector(state => state.auth.isAuthenticated );
const { isAuthenticated } = useSelector(state =>state.auth);
const navigate = useNavigate();

useEffect(()=>{
    console.log(isAuthenticated);
    if(!isAuthenticated){
        navigate("/login");
    }
    // isLoggedIn ? "" : navigate("/login");
},[]);
    return(
      <Fragment> 
     <SubNav />
     <Index />
     </Fragment>
    );
}
export default Dashboard;

