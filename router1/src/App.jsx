import './App.css'
import {Routes, Route, NavLink} from "react-router-dom"
import Home from "./pages/Home/index.jsx";
import Courses from "./pages/Courses/index.jsx";
import Play from "./pages/Play/index.jsx";
import About from "./pages/About/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import Me from "./pages/Me/index.jsx";
import Videos from './pages/Videos/index.jsx';
import News from './pages/News/index.jsx';
import AddPosts from './pages/admin/AddPosts/index.jsx';

function App() {

  return (
    <>
      <nav>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/courses' >Courses</NavLink>
        <NavLink to='/play' >Play</NavLink>
        <NavLink to='/videos' >Videos</NavLink>
        <NavLink to='/news' >News</NavLink>
        <NavLink to='/about' >About us</NavLink>
        <NavLink to='/contact' >Contact</NavLink>
        <NavLink to='/me' >My page</NavLink>
        <NavLink to='/admin' >Admin</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/play" element={<Play />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/me" element={<Me />} />
        
        <Route path="/admin" element={<AddPosts />} />
      </Routes>
    </>
  )
}

export default App
