import { Fragment, useEffect } from "react";
import { useSelector ,shallowEqual, useDispatch} from "react-redux";
import { Outlet, useLocation, useNavigate} from "react-router-dom";
import SubNav from "./SubNav";

import { gitFolders } from "../../Redux/actionCreators/FolderActions/GetFolders";
import { gitFiles } from "../../Redux/actionCreators/FileActions/GetFiles";

const Dashboard =()=>{

// const [showSubNav,setShowSubNav] = useState(true);
// const  location  = useLocation();
const navigate = useNavigate();
const dispatch = useDispatch();

const { isAuthenticated , isLoading, userId } = useSelector((state) =>({ 
    isAuthenticated : state.auth.isAuthenticated ,
    isLoading : state.Folders.isLoading,
    userId: state.auth.user.uid,
}),shallowEqual);

useEffect(()=>{
    if(!isAuthenticated){
        navigate("/login");
    }
},[isAuthenticated]);

useEffect(()=>{
    if( userId && isLoading){
        dispatch(gitFolders(userId));
        dispatch(gitFiles(userId));
    }
},[isLoading,userId,dispatch])

// useEffect(()=>{
//     if(location.pathname.includes("/file/")){
//         setShowSubNav(false);
//     }
// },[location.pathname])

    return(
      <Fragment>
        <Outlet/>
     </Fragment>
    );
}
export default Dashboard