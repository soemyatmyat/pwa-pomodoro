const TaskModel=require("../models/task")

// CREATE a new task [POST] /api/task
exports.add=(req,res)=>{
  TaskModel.createTask(req.body)
    .then((result) => { //if promise is fulfilled
        res.status(201).send({id:result._id}) //201 Created
    })
    .catch ((err) => { //if promise is rejected
      // Error Handlings
      console.log(err.name)
      res.status(400).send('Bad Request')
    })
}

// READ by task Id [GET] /api/task/{taskId}
exports.getById=(req,res)=>{
  TaskModel.findById(req.params.taskId)
    .then((result)=>{ //if promise is fulfilled
      res.status(200).send(result) //return null if not found by id else return task object
    })
    .catch (err=>console.log("error: " + err)) //need to handle errors
}

// UPDATE by task Id [PATCH] /api/task/{taskId}
exports.updateById=(req,res)=>{
  TaskModel.patchById(req.params.taskId,req.body)
    .then((result)=>{
      res.status(204).send(result) //return no content if successful
    })
    .catch(err=>console.log(err))
}

// DELETE a record by id [DELETE] /api/task/{taskId}
exports.removeById=(req,res)=>{
  TaskModel.removeById(req.params.taskId)
    .then((result)=>{
      res.status(204).send(result) //return no content if successful 
    })
    .catch(err=>console.log(err))
}

// listing tasks [GET] /api/tasks
exports.list=async function render(req,res){
  TaskModel.find({})
    .then((tasks)=> {
      //res.status(200).send(tasks) //200 OK

      res.render('index', {data: tasks});

    })
    .catch(err=>console.log("error: " + err))
}







