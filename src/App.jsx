import NavbarComponent from './components/Layouts/Navbar'

import {Route , Routes} from "react-router-dom";
import Login from "./components/authentication/Login"
import Register from "./components/authentication/Register"

function App() {
 

  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route  path="/login" element={<Login />} />
        <Route  path="/signup" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
