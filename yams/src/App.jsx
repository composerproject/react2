import './App.css'
import {Routes, Route, NavLink} from "react-router-dom"
import Description from './pages/Description'
import Home from './pages/Home'
import Stats from './pages/Stats'

function App() {

  return (
    <>
      <nav>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/description' >Description</NavLink>
        <NavLink to='/stats' >Stats</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/stats" element={<Stats />} />

      </Routes>
    </>
  )
}

export default App
