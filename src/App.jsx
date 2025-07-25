import { useEffect, useState } from 'react'
import './App.css'
import AuthHome from './pages/auth/authHome.jsx'
// import BloodGroup from './pages/auth/BloodGroup.js' //We will use this inside the signup Page
import apiRequest from './utils/api.js'
import { apiRoutes } from './utils/globalConstraints.js'
import Home from './pages/mainPages/homePage.jsx'
function App() {
  const [isLoggedin, setisLoggedin]=useState(null);
  useEffect(()=>{
    const checkAuthStatus = async()=>{
      // search if the token is valid
      const authToken = localStorage.getItem("token");
      if(!authToken){
        setisLoggedin(false);
      }
      // send the userAuthToken
      const payload = {
        token : authToken
      }
      const response = await apiRequest(apiRoutes.auth.validate,"POST",payload);
      setisLoggedin(!!response);
    }
    checkAuthStatus();
  },[])
  if(isLoggedin === null){
    return <div>Validating.........</div>
  }

  return (
    <>
    {isLoggedin ?<AuthHome />:<Home />}
    </>
  )
}

export default App
