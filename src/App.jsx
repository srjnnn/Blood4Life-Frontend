import { useEffect, useState } from 'react'
import './App.css'
import Signup from './pages/Signup'
import BloodGroup from './pages/BloodGroup'
import apiRequest from './utils/api.js'
import { apiRoutes } from './utils/globalConstraints.js'
function App() {
  const [isLoggedin, setisLoggedin]=useState(null);
  useEffect(()=>{
    const checkAuthStatus = async()=>{
      // search if the token is valid
      const authToken = localStorage.getItem("token");
      // send the userAuthToken
      const payload = {
        token : authToken
      }
      const response = await apiRequest(apiRoutes.auth.validate,"POST",payload);
      setisLoggedin(!!response);
    }
  })

  return (
    <>
      {/* <Signup/> */}
      <BloodGroup/>
    </>
  )
}

export default App
