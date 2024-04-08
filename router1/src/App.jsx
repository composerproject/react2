import {Routes, Route, NavLink} from "react-router-dom"
import Home from "./pages/Home/index.jsx";
import Courses from "./pages/Courses/index.jsx";
import Play from "./pages/Play/index.jsx";
import './App.css'

function App() {

  return (
    <>
      <nav>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/courses' >Courses</NavLink>
        <NavLink to='/play' >Play</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </>
  )
}

export default App
