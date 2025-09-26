import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderSite from './components/userListComponentPack/HeaderSite'
import FooterSite from './components/userListComponentPack/FooterSite'
import UserList from './components/userListComponentPack/UserList'
import UserEditModal from './components/userListComponentPack/UserEditModal'

import { Routes, Route } from 'react-router-dom';

import { RoutesComp } from './RouterComp'
import Switchcomponent from './components/Switchcomponent/Switchcomponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Switchcomponent />
    <RoutesComp />
    
    

        {/* <UserHome />
        <Starwars/> */}

      
    </>

    
  )
}

export default App
