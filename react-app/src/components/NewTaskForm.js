import React from "react"

/*
There are four main things that we need to have to make our forms work:
  1. Local state (so we will need to employ the useState() hook)
  2. Our form component with an input value that is assigned to the correct variable
  3. A function that handles the state’s changes
  4. A function to handle the form submission
*/
function NewTaskForm(props) {
  const [tasks, setTasks]=React.useState([])

  const handleChange=(e)=>{
    
  }

  const handleSubmit=(e)=>{
    //const taskName=document.getElementById("taskName").value
    //const noOfRep=document.getElementById("noOfRep").value
    document.getElementById("taskName").value=""
    document.getElementById("noOfRep").value=1
    setTasks((prevValues) => {
      return [...prevValues, {name: taskName, estimated_pomodoro: noOfRep}];
    })
    e.preventDefault()
  }

  return(
    <div className="container-fluid">
      <div className="col-md-8 offset-md-2">
        <form onSubmit={handleSubmit}>
          <div className="form-floating">
            <input onChange={handleChange} type="text" id="taskName" name="name" className="form-control" placeholder="Task name" required />
            <label htmlFor="floatingInput">Task name</label>
          </div>
          <div className="form-floating">
            <input onChange={handleChange} type="number" id="noOfRep" name="number" className="form-control" min="1" max="10" placeholder="number" required />
            <label htmlFor="floatingInput">No. of repetitions</label>
          </div>      
          <button type="submit" className="w-100 btn btn-lg btn-primary">Add</button> 
        </form>
      </div>
    </div>
  )
  
}

export default NewTaskForm
