
module.exports=(app)=>{
  const taskController=require("../controllers/task.server.controller.js")
  app.get("/",taskController.list) //<endpoint, callback methods> get request
  app.get("/api/tasks",taskController.list) //<endpoint, callback methods> get request
  app.post("/api/task", taskController.add) //post request
  app.get("/api/tasks/:taskId", taskController.getById) //GET a specific task => api/tasks/628a053e39df69ff53b6acc7
  app.delete("/api/tasks/:taskId", taskController.removeById) //DELETE a specific task => api/tasks/628a053e39df69ff53b6acc7
  app.patch("/api/tasks/:taskId", taskController.updateById) //UPDATE a specific task => api/tasks/628a053e39df69ff53b6acc7
}