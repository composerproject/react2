import './App.css'
import NavBar from './component/NavBar'
import {Routes, Route} from 'react-router-dom'
import Dragon from './pages/Dragon'
import Knight from './pages/Knight'

function App() {

  return (
    <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Dragon />}/>
          <Route path='/knights' element={<Knight />}/>
        </Routes>
    </>
  )
}

export default App
