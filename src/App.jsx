import { useState } from 'react'
import Fetch_otp from '../components/fetch_otp'
import './App.css'
import axios from 'axios'

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
    
    console.log('unencoded: ', `${DevshopID}:${KFM_Password}`)
    console.log('encoded: ', encoded)
    console.log('Base URL: ', `${base_url}auth/otp/init`)

    const auth = 
    {
      'Accept': 'application/json',
      'Authorization': `Basic ${encoded}`
    }

    const code = await axios.post(`${base_url}/auth/otp/init`, {}, { headers: auth })
    setOTP(code.data)
  }

  return (
    <div>
      <Fetch_otp
        getOTPCode={getOTPCode}
        OTP={OTP}
      />
    </div>
  )
}

export default App
