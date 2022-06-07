import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Timer from "./Timer"
import Tasks from "./Tasks"
import NewTaskFrom from "./NewTaskForm"
function App() {
  
  // <NewTaskFrom onAdd={addTask} />
  // <Tasks tasksList={tasks}/>
  return (
    <div>
      <Header />
      <Timer />
      <NewTaskFrom />
      <Tasks />
      <Footer />
    </div>
  )
}

export default App
