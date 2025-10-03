import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderSite from './components/userListComponentPack/HeaderSite'
import FooterSite from './components/userListComponentPack/FooterSite'
import UserList from './components/userListComponentPack/UserList'
import UserEditModal from './components/userListComponentPack/UserEditModal'


import { UserHome } from './components/userListComponentPack/UserHome';
import Swhome from './components/StarWarsComponents/Swhome';
// import Switchcomponent from './components/Switchcomponent/Switchcomponent';

import { Routes, Route } from 'react-router-dom';

import { RoutesComp } from './RouterComp'
import Switchcomponent from './components/Switchcomponent/Switchcomponent'
import Maingame from './components/Gameplayapp/Maingame'
import GameEdit from './components/Gameplayapp/GameEdit'
import Login from './components/Gameplayapp/AuthPages/Login'
import Register from './components/Gameplayapp/AuthPages/Register'
import { AuthContext } from './components/Gameplayapp/Context/authContext'
import authService from './services/authService'


function App() {
    const [count, setCount] = useState(0);
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {

        console.log('loginSubmitHandler')
        console.log(values)
        const result = await authService.login(
          values

        );

        console.log(result)
  };

  const regSubmitHandler = async (values) => {
        console.log('loginSubmitHandler')
        console.log(values)

        const result = await authService.register(values)

        console.log(result)

  };


    const values = {
        loginSubmitHandler,
        regSubmitHandler,
        email: auth.email,
        password: auth.password,
        isAuthenticated: !!auth.email,    
      }



  return (
    <>
      <Switchcomponent />
      <AuthContext.Provider value={values}>
            <Routes>    
                        {/* <Route path="/" element={   <Switchcomponent />} /> */}
                        <Route path="/userlist" element={   <UserHome />} />
                        <Route path="/starwars" element={   <Swhome />} />
                        <Route path="/gameplay" element={ <Maingame />} />
                        <Route path="/games" element={ <Maingame />} />
                        {/* <Route path="/gameplay/create" element={<GameCreate />} /> */}
                        <Route path="/gameplay/edit/:gameId" element={<GameEdit />} />
                        <Route path="/gameplay/login" element={<Login />} />
                        <Route path="/gameplay/register" element={<Register />} />
                        <Route path="/gameplay/logout" element={<Login />} />

                    
       </Routes>
       </AuthContext.Provider>
    
    


      
    </>

    
  )
}

export default App
