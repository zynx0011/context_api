
import './App.css'
import UserConstexrProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
 

  return (
    <UserConstexrProvider>
       <h1>Welcome To Context API</h1>
       <Login/>
       <Profile/>
    </UserConstexrProvider>
  )
}

export default App
