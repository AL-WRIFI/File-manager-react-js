import NavbarComponent from './components/Layouts/Navbar'
import {Route , Routes} from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Dashboard from './components/Dashboard/Dashboard';
import { checkIsLoggedIn } from "./Redux/actionCreators/authActionCreators";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  
  const dispatch= useDispatch();
  
  useEffect(()=>{
    dispatch(checkIsLoggedIn());
  },[])

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route  path="/login" element={<Login />} />
        <Route  path="/signup" element={<Register />} />
        <Route  path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
