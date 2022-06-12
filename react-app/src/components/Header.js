import React from "react"


function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img className="d-inline-block" src="../../img/icons/favicon.ico" alt=""/> Pomodoro</a>          
        </div>
      </nav>
    </div>
  )
}

export default Header

  /*
    <header>
      <h1><img src="../../img/icons/favicon.ico"></img> Pomodoro</h1>
    </header>
  */
