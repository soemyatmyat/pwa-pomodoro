import React, { useEffect } from "react"

export function getList() {
  return fetch("/api/tasks") //GET is the default method
    .then((res) => {//parse http response to json //if the status is 404 response, parsing to json would return an empty object
      if (!res.ok) throw new Error(res.status) 
      else return res.json()
    }) 
}

export function addItem(item) {
  item='{"name":"'+item+'"}'
  return fetch("/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: item
    })
    .then((res)=> {
      if (!res.ok)  throw new Error(res.status)
      else return res.json() //render the result in json format
    })
    .then(json => console.log(json)) //do some loggings
    .catch((err)=>{
      console.log(err)
    })
}

export function deleteItem(item) {
  return fetch("/api/tasks/"+item, {
    method: "DELETE",
  })
}
