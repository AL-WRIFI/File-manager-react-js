import NavbarComponent from './components/Layouts/Navbar'
import { Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Dashboard from './components/Dashboard/Dashboard';
import { checkIsLoggedIn } from "./Redux/actionCreators/authActions";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FolderComponent from "./components/Dashboard/FolderComponent/FolderComponent";
import FileComponent from "./components/Dashboard/FileComponent/FileComponent";
import Index from "./components/Dashboard/Index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Fragment } from 'react';

function App() {
  
  const dispatch= useDispatch();
  
  useEffect(()=>{
    dispatch(checkIsLoggedIn());
  },[])

  return (
    <Fragment>
      <NavbarComponent />
      <ToastContainer/>
      <Routes>
        
        <Route  path="/login" element={<Login/>} />
        <Route  path="/signup" element={<Register />}/>
        <Route  path="/dashboard" element={<Dashboard />}>
              <Route path='' element={<Index />} >
                <Route  path="folder/:folderId" element={<FolderComponent />}/>
                <Route  path="file/:fileId" element={<FileComponent />}/>
              </Route>
        </Route>        
      </Routes>
    </Fragment>
  )
}

export default App
