import React, { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import Timer from "./Timer"
import Tasks from "./Tasks"
import NewTaskFrom from "./NewTaskForm"
import {getList,addItem,deleteItem} from "../services/TaskService"

function App() {
  const [alert, setAlert] = useState(false) //
  const [itemInput, setItemInput] = useState('') // setting input values
  const [tasks, setTasks] = useState([]) // create tasks variables, set it as an empty array
  const [refresh,setRefresh] = useState(false)

  // refresh the task list 
  useEffect(()=>{
    let mounted= true
    if (tasks.length && !alert) return
    getList()
      .then(items => {
        if (mounted)  setTasks(items)
      })
      return ()=> mounted=false
  },[alert])

  // display the alert notification for 1 second
  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        setAlert(false);
      }, 1000)
    }
  }, [alert])

  // handle the submission of new task
  const handleSubmit = (e) => {
    e.preventDefault()
    addItem(itemInput)
      .then(()=>{
        setItemInput("")
        setAlert(true)
      })
  }

  function deleteTask(id) {
    console.log(id)
    deleteItem(id)
    setAlert(true)
  }

  // <NewTaskFrom onAdd={addTask} />
  // <Tasks tasksList={tasks}/>
  return (
    <div>
      <Header />
      <Timer />
      {alert && <h2> Submit Successful</h2>}
      <form onSubmit={handleSubmit}>
       <label><p>New Item</p><input type="text" onChange={event => setItemInput(event.target.value)} value={itemInput} /></label>
       <button type="submit">Submit</button>
     </form>

      <Tasks tasksList={tasks} onDelete={deleteTask} />
      <Footer />
    </div>
  )
}

export default App
