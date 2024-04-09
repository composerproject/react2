import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const dragonList = useSelector((state) => state.dragonList);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:'DRAGON/ADD', payload:input});
  }

  return (
    <>
    <h1>Dragons</h1>
    <form onSubmit={handleSubmit} action="">
      <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Mushu"/>
      <button type="submit">Add</button>
      </form>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
        </thead>
        {dragonList.map(dr =>
        (<tr key={dr.id}>
          <td>{dr.id}</td>
          <td>{dr.name}</td>
        </tr>) 
        )}
      </table>
    </>
  )
}

export default App
