const mongoose=require("../../config/mongoose") //open the DB connection

// Task Schema
const taskSchema=mongoose.Schema({
  name:{
    type:String,
    required:[true, "Please check your data entry, no task name specified."]
  },
  status:{
    type: Boolean,
    default:false
  },
  estimated_pomodoro:{
    type: Number,
    min:[1, "Default is 1."],
    max:10,
    default:1
  },
  completed_pomodoro:{
    type: Number,
    default:0
  }
})

// Task Model declaration
taskModel=mongoose.model("Task",taskSchema)

// CREATE 
exports.createTask=(taskData)=>{
  const newTask=new taskModel(taskData)
  return newTask.save() //Returns undefined if used with callback or a Promise otherwise.
}

// READ
exports.findById = (taskId) => {
  // check the validity of mongoose id 
  if (!taskId.match(/^[0-9a-fA-F]{24}$/)) {
    return null
  } else {
    return taskModel.findById(taskId)
      .then((task)=>{
        if (task != null) {
          task=task.toJSON() //parse it to JSON from JS Object
          delete task._id
          delete task.__v
        }
        return task
      })
      .catch (err=>console.log("error: " + err)) //need to handle errors
  }
}

// UPDATE
exports.patchById = (taskId, taskData) => {
  return taskModel.findOneAndUpdate({_id:taskId}, taskData)
    .then ((task)=>{
      if (task !=null) {
        task=task.toJSON() 
        delete task.__v
      } else {

      }
      return task
    })
}

// DELETE
exports.removeById = (taskId) => {
  return new Promise((resolve, reject) => {
    taskModel.deleteMany({_id: taskId}, (err) => {
          if (err) {
              reject(err);
          } else {
              resolve(err);
          }
      })
  })
}

// READ ALL
exports.find=() =>{
  return taskModel.find({})
}

