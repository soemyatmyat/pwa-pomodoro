const express=require("express")//express is for bulding the REST APIs 
const cors=require("cors")//cors provides Express Middleware to enable cors with various options 

module.exports=()=>{
  const app=express()//create an Express Instance and add body-parser (json and urlencoded)
  app.use(express.json())//parse requests of content-type: application/json
  app.use(express.urlencoded({extended:true}))//parse requests of content-type: application/x-www-form-urlencoded
  app.set("views","./app/views")//set the template location
  app.set("view engine","ejs")

  //load routing file and call it as a function while passing the app
  require("../app/routes/task.server.routes.js")(app)
  app.use(express.static("./public"))
  return app

}
