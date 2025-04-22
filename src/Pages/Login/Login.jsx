import {useState} from 'react'
import Button from '../../components/Button'
import {useLocation, useNavigate} from 'react-router'
import loginUser from '../../utils/loginUser';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const location = useLocation()
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('idle')
    // idle and submitting
  const navigate = useNavigate()
  const from = location.state?.from || '/host'

  function handleChange(event) {
    setLoginData(prev => {
      return {
        ...prev,
        [event.target.id]: event.target.value
      }
    })
  }

  async function handleSubmit(event) {
    setStatus('submitting')
    event.preventDefault()
    try {
        const data = await loginUser(loginData)
        if (data) {
          setError(null)
          navigate(from, {replace: true})
          localStorage.setItem("loggedIn", true)
          console.log('hello this ran')
        }
      } catch (err) {
        console.log('login failed: ', err)
        setError(err)
      } finally {
        setStatus('idle')
      }
  }


  return (
    <div className="login-container">
      {location.state?.message &&  <h3 className="login-first">{location.state.message}</h3>}
      <h1 className="login-header">Sign in to your account </h1>
      {error?.message && <h3>There was an error: {error.message}</h3>}
      <form action="" className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input type="text" id="email"  placeholder='Enter your email' value={loginData.email} onChange={handleChange} />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" autoComplete="true" id="password" placeholder='Enter your password'  value={loginData.password} onChange={handleChange} />
        </label>
        <Button className="login-btn" disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log In"}</Button>
      </form>
    </div>
  )
}


export default Login
