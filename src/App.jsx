import NavbarComponent from './components/Layouts/Navbar'
import {BrowserRouter,  Router, Route ,Switch} from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Dashboard from './components/Dashboard/Dashboard';
import { checkIsLoggedIn } from "./Redux/actionCreators/authActions";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FolderComponent from "./components/Dashboard/FolderComponent/FolderComponent";


function App() {
  
  const dispatch= useDispatch();
  
  useEffect(()=>{
    dispatch(checkIsLoggedIn());
  },[])

  return (
    <>
      <NavbarComponent />
      <BrowserRouter>
      <Router>
      <Switch>
        <Route  path="/login"  ><Login /></Route>
        <Route  path="/signup" ><Register /></Route>
        <Route  path="/dashboard" ><Dashboard /></Route>
        {/* <Route path="dashboard/folder/:folderId" element={<FolderComponent />}/> */}
        </Switch>
      </Router>
      </BrowserRouter>
    </>
  )
}

export default App
