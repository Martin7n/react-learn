import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderSite from './components/userListComponentPack/HeaderSite'
import FooterSite from './components/userListComponentPack/FooterSite'
import UserList from './components/userListComponentPack/UserList'
import UserEditModal from './components/userListComponentPack/UserEditModal'



import About from './components/userListComponentPack/About'
import UserReg from './components/Auth/UserReg'
import UserLogin from './components/Auth/UserLogin'
import { UserHome } from './components/userListComponentPack/UserHome';
import Swhome from './components/StarWarsComponents/Swhome';
// import Switchcomponent from './components/Switchcomponent/Switchcomponent';

import { Routes, Route } from 'react-router-dom';

import { RoutesComp } from './RouterComp'
import Switchcomponent from './components/Switchcomponent/Switchcomponent'
import Maingame from './components/Gameplayapp/Maingame'
import GameEdit from './components/Gameplayapp/GameEdit'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Switchcomponent />
            <Routes>    
                        {/* <Route path="/" element={   <Switchcomponent />} /> */}
                        <Route path="/userlist" element={   <UserHome />} />
                        <Route path="/starwars" element={   <Swhome />} />
                        <Route path="/gameplay" element={ <Maingame />} />
                        <Route path="/games" element={ <Maingame />} />
                        {/* <Route path="/gameplay/create" element={<GameCreate />} /> */}
                        <Route path="/gameplay/edit/:gameId" element={<GameEdit />} />

                        {/* <Route path="/gameplay" element={<Maingame />}>
                          <Route path="create" element={<GameCreate />} />
                          <Route path="edit/:gameId" element={<GameEdit />} />
                        </Route> */}
    
    
                        <Route path="/home" element={   <UserHome />} />
                        <Route path="/register" element={   <UserReg />} />
                        <Route path='/login' element={ <UserLogin /> } />
                        <Route path="/about" element={<About />}>
                            
                        </Route>
       </Routes>
    
    

        {/* <UserHome />
        <Starwars/> */}

      
    </>

    
  )
}

export default App
