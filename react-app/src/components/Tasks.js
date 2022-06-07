import React from "react"

function Tasks() {
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

/*
  <span class="badge bg-primary rounded-pill">Estimated Pomodoro</span>
*/
  return (
    <div className="container-fluid">
      <div className="col-md-8 offset-md-2">
        <h3>My Tasks</h3>
        <ol className="list-group list-group-numbered">
          {tasks.map(task =>
            <li className="list-group-item d-flex justify-content-between align-items-start" key={task._id}>
              <div className="ms-2 me-auto">
                <div className="fw-bold">{task.name} <span className="badge bg-primary rounded-pill">{task.status}</span></div>
                <small>Added 3 days ago</small>
              </div>
              <span>
                <i aria-hidden="true" className="bi bi-play-circle" title="play"></i>&nbsp;&nbsp;
                <i aria-hidden="true" className="bi bi-pencil" title="edit"></i>&nbsp;&nbsp;
                <i aria-hidden="true" className="bi bi-trash" title="delete"></i>
              </span>
            </li>
          )}
        </ol>
      </div>    
    </div>
  )

}

export default Tasks