import React ,{useState} from 'react'

import newRequest from '../utils/newRequest.js'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const[error,setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{

      const res = await newRequest.post("/auths/login",{
        username,
        password
      });
      localStorage.setItem("currentUser",JSON.stringify(res.data));
      
      navigate("/");
      
    }catch(err){
      setError(err);
      
    }
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input type="text" name='username' placeholder='johndoe' onChange={(e)=>setUsername(e.target.value)} />
        <label htmlFor="">Password</label>
        <input 
        name="password"
        type="password"
        onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>Login</button>

      </form>
    </div>
  )
}

export default Login
