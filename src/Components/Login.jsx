
import React from 'react'
import { useState , useContext} from 'react'
import UserConstext from '../Context/UserContext'

const Login = () => {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const {setUser} =useContext(UserConstext)

    const SubmitHandler = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
         <input type="text" name="Username" value={username} onChange={(e)=>{
           setUsername(e.target.value)
         }}  placeholder="Username"id="" />
         <input type="password" name="password" value={password} onChange={(e)=>{
            setPassword(e.target.value)
         }} placeholder='password' id="" />
         <button onClick={SubmitHandler}>Submit</button>
    </div>
  )
}

export default Login
