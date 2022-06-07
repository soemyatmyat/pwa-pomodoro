import { useEffect } from "react"

export function getList() {
  useEffect(()=>{
    fetch("/api/tasks")
      .then((res) => {//parse http response to json //if the status is 404 response, parsing to json would return an empty object
        if (!res.ok) throw new Error(res.status) 
        else return res.json() //render the result in json format
      }) 
      .then(json => setTasks(json)) //then, pass the data in json format to tasks
      .catch((err)=>{ //error handling (direct to an error page and display the error message)
        console.log(err)
      })
  },[])
}

export function addItem(item) {
  useEffect(()=>{
    fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({item}) //parse the values to JSON
    })
    .then((res)=> {
      if (!res.ok)  throw new Error(res.status)
      else return res.json() //render the result in json format
    })
    .then(json => console.log(json)) //do some loggings
    .catch((err)=>{
      console.log(err)
    })
  },[])
}