import { useState } from 'react'
import './App.css'
import Home from '../components/home'
import Nav from '../components/Nav'
import axios from 'axios'
import Fetch_otp from '../components/fetch_otp'

const App = () =>
{
  const [OTP, setOTP] = useState({});

  const base_url = "https://api.sandbox.upland.me/developers-api"
  
  const getOTPCode = async (e) =>
  {
    e.preventDefault();

    const DevshopID = import.meta.env.VITE_DEVSHOPID;
    const KFM_Password = import.meta.env.VITE_KFM_PASSWORD;
    const encoded = btoa(`${DevshopID}:${KFM_Password}`)
    const auth = 
    {
      'Accept': 'application/json',
      'Authorization': `Basic ${encoded}`
    }
    const code = await axios.post(`${base_url}/auth/otp/init`, {}, { headers: auth })
    
    setOTP(code.data)
  }

  return (
    <>
      <Nav/>
      <Home/>
      <Fetch_otp
        getOTPCode={getOTPCode}
        OTP={OTP}
      />      
    </>
  )
}

export default App
