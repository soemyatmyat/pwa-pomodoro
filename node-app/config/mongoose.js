const config=require("./config")//load config file
const mongoose=require("mongoose")
mongoose.connect("mongodb://"+config.dbServer+":27017/"+config.dbName)
.then(()=>console.log("Database connected!")) 
.catch(err=>console.log(err))
  
module.exports=mongoose




