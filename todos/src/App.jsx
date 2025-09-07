import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Todos from './components/Todos'
import Starwars from './components/Starwars'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (

    
    <>

    <Counter />
      
     <About />
     <Navigation />

     <Starwars />

      <Todos>
          <p>Todos props children textContent :)</p>
      </Todos>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  )
}

export default App
