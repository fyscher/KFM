import { useState } from "react"

const Login = ({
    userCreds
}) =>
{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = e => setUsername(e.target.value)
    const handlePasswordChange = e => setPassword(e.target.value)

    const login = e =>
    {
        e.preventDefault()
        userCreds({
            username,
            password
        })
    }

    return(
        <>
            <div className='hero-image'>
                <h2 className="headline">Welcome!</h2>
                <h3 className="subHeadline">Please Log In Below:</h3>
            </div>
            <div className="card">
                <form className="login" onSubmit={login}>
                    <div>
                        Username:
                        <input 
                            type="text"
                            value={username}
                            name="Username" 
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div>
                        Password:
                        <input 
                            type="text"
                            value={password}
                            name="Password" 
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login