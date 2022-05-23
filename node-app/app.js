process.env.NODE_ENV=process.env.NODE_ENV||"development";


const config=require("./config/config")//load the configuration from config > config.js > env > x.js
const express=require("./config/express")//load expres.js from config folder

const app=express()//initialize the express 
app.listen(config.port)//listen on port specififed in config file

//simple route
app.get("/",(req,res)=>{
  res.json({message: "Welcome to Backend World!"})
})

console.log(process.env.NODE_ENV + " server running at http://localhost:"+config.port)
