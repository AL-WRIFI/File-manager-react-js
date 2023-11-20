import NavbarComponent from './components/Layouts/Navbar'
import { Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Dashboard from './components/Dashboard/Dashboard';
import { checkIsLoggedIn } from "./Redux/actionCreators/authActions";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FolderComponent from "./components/Dashboard/FolderComponent/FolderComponent";
import Index from "./components/Dashboard/Index";


function App() {
  
  const dispatch= useDispatch();
  
  useEffect(()=>{
    dispatch(checkIsLoggedIn());
  },[])

  return (
    <>
      <NavbarComponent />
      
      <Routes>
        
        <Route  path="/login" element={<Login/>} />
        <Route  path="/signup" element={<Register />}/>
        <Route  path="/dashboard" element={<Dashboard />}>
              <Route index element={<Index />} />
              <Route  path="folder/:folderId" element={<FolderComponent />}/>
        </Route>        
      </Routes>
    </>
  )
}

export default App
