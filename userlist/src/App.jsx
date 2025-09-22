import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderSite from './components/HeaderSite'
import FooterSite from './components/FooterSite'
import UserList from './components/UserList'
import UserEditModal from './components/UserEditModal'
import UserReg from './components/UserReg'

import { Routes, Route } from 'react-router-dom';
import About from './components/About'
import Navigation from './components/Navigation'
import Starwars from './components/StarWarsComponents/Starwars'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <HeaderSite />
     <Navigation />
        <Starwars/>
    <Routes>
                <Route path="/register" element={   <UserReg />} />


                <Route path="/about" element={<About />}>
                    
                </Route>
   </Routes>



    <UserList />
          <h1>tmp wrx</h1>
    <FooterSite />
    </>

    
  )
}

export default App
