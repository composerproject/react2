import './App.css'
import NavBar from './component/NavBar'
import {Routes, Route} from 'react-router-dom'
import Dragon from './pages/Dragon'
import Knight from './pages/Knight'
import Couple from './pages/Couple'

function App() {

  return (
    <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Dragon />}/>
          <Route path='/knights' element={<Knight />}/>
          <Route path='/couples' element={<Couple />}/>
        </Routes>
    </>
  )
}

export default App
