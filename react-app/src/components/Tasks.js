import Task from "./Task"
import {deleteItem} from "../services/TaskService"

function Tasks(tasks) {

  function deleteTask(id) {
    tasks.onDelete(id)
  }

  return (
    <div className="container-fluid">
      <div className="col-md-8 offset-md-2">
        <h3>My Tasks</h3>
        <ol className="list-group list-group-numbered">
          {tasks.tasksList.map(task =>
            <Task id={task._id} name={task.name} status={task.status} onDelete={deleteTask}/>
          )}
        </ol>
      </div>    
    </div>
  )

}

export default Tasks

/*
  <span class="badge bg-primary rounded-pill">Estimated Pomodoro</span>
*/
/*
  // create tasks variables, set it as an empty array
  const [tasks, setTasks]=React.useState([])
  React.useEffect(()=>{
    fetch("/api/tasks")
      .then((res) => {//parse http response to json //if the status is 404 response, parsing to json would return an empty object
        if (!res.ok) throw new Error(res.status) 
        else return res.json()
      }) 
      .then(json => setTasks(json)) //pass the data list to tasks
      .catch((err)=>{ //error handling (direct to an error page and display the error message)
        console.log(err)
      })
  },[])
*/
