import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderSite from './components/HeaderSite'
import FooterSite from './components/FooterSite'
import UserList from './components/UserList'
import UserEditModal from './components/UserEditModal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderSite />

    <UserList />
          <h1>tmp wrx</h1>
    <FooterSite />
    </>

    
  )
}

export default App
