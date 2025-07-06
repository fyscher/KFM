import { useState } from 'react'
import '../static/css/App.css'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import Nav from '../components/Nav'
import Login from '../components/Login'
import axios from 'axios'
import loginService from './services/login'

const App = () =>
{
  const [OTP, setOTP] = useState({});
  const [user, setUser] = useState(null)

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

  const login = async userCreds =>
  {
    try
    {
      const user = await loginService.login(userCreds)

      window.localStorage.setItem(
        'loggedBlogUser', JSON.stringify(user)
      )
      setUser(user)
    }
    catch (exception)
    {
      console.log(exception)
      // notify('error', 'Wrong Credentials')
    }
  }

  return (
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home getOTPCode={getOTPCode} OTP={OTP} />}/>
          <Route path='/login' element={<Login userCreds={login} />}/>
        </Routes>
      </div>
  )
}

export default App
