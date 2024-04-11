import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {add, addAsyncTask, deleteAsyncTask, fetchTasks, remove, update, updateAsyncTask} from "./store/Slice/taskSlice.js";
import './App.css'

function App() {

  // const [taskList, setTaskList] = useState([]);

  // const fetchData = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  //   const data = await response.json();
  //   setTaskList(data);
  // }

  // useEffect(() => {
  //   fetchData();
  // },[])



  

  // const taskList = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title: "delectus aut autem",
  //     completed: false
  //   },
  //   {
  //     "userId": 1,
  //     "id": 2,
  //     "title": "quis ut nam facilis et officia qui",
  //     "completed": true
  //   },
  // ]


  const taskList = useSelector(store => store.task.tasks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [])

  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      userId:1,
      title: input,
      completed: false
    }
    // dispatch(add(input));
    dispatch(addAsyncTask(task));
    setInput('');
  }

  const handleDelete = (taskId) => {
    // dispatch(remove(task.id))
    dispatch(deleteAsyncTask(taskId))
  }

  const handleCheck = (task) => {
    // dispatch(update(task.id));
    dispatch(updateAsyncTask(task));
  }


  return (
    <>
      <h1>Tâches</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='titre' onChange={handleChange} value={input} />
        <button type="submit" >Ajouter une tâche</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tâche</th>
            <th>Complétée</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              {/* <td><input type="checkbox" name="completed" id="completed" checked={task.completed} onChange={() => dispatch(update(task.id))}/></td> */}
              <td><input type="checkbox" name="completed" id="completed" checked={task.completed} onChange={() => handleCheck(task)}/></td>
              {/* <td><button onClick={() => dispatch(remove(task.id))}>X</button></td> */}
              <td><button onClick={() => handleDelete(task.id)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
