import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// import { RoutesComp } from './RouterComp'
import Maingame from './components/Gameplayapp/Maingame'
import GameEdit from './components/Gameplayapp/GameEdit'
import Login from './components/Gameplayapp/AuthPages/Login'
import Register from './components/Gameplayapp/AuthPages/Register'
import { AuthProvider } from './components/Gameplayapp/Context/authContext'
import GameCreate from './components/Gameplayapp/GameCreate';
import AllGame from './components/Gameplayapp/AllGame';
import LogoutUser from './components/Gameplayapp/AuthPages/LogoutUser';
import AuthGuard from './components/Guards/AuthGuard';
import Headergame from './components/Gameplayapp/Headergame';


function App() {

    const [count, setCount] = useState(0);
  

  return (
    <>
    
      {/* <AuthContext.Provider value={values}> */}
        <AuthProvider>
          <Headergame />
            <Routes>    
              
                        
                        <Route path="/" element={ <Maingame />} />
                        {/* <Route path="/games" element={ <Maingame />} /> */}
                        <Route path="/gameplay/all-games" element={ <AllGame />} />
                        
                          <Route element={<AuthGuard />}>
                            <Route path="/gameplay/edit/:gameId" element={<GameEdit />} />
                            <Route path="/gameplay/create" element={<GameCreate />} />

                          </Route>
                        <Route path="/gameplay/login" element={<Login />} />
                        <Route path="/gameplay/register" element={<Register />} />
                        <Route path="/gameplay/logout" element={<LogoutUser />} />
                        <Route path="*" element={<Navigate to="/" replace />} />

                    
       </Routes>
       {/* </AuthContext.Provider> */}
       </AuthProvider>
    
    


      
    </>

    
  )
}

export default App
