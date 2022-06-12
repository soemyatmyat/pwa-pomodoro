import React from "react"

function Task(props) {
  return (
    <div>
      <li className="list-group-item d-flex justify-content-between align-items-start" key={props.id}>
        <div className="ms-2 me-auto">
          <div className="fw-bold">{props.name} <span className="badge bg-primary rounded-pill">{props.status}</span></div>
          <small>Added 3 days ago</small>
        </div>
        <button type="button" className="btn btn-default"><i aria-hidden="true" className="bi bi-play-circle" title="play"></i></button>
          <button type="button" className="btn btn-default"><i aria-hidden="true" className="bi bi-pencil" title="edit"></i></button>
          <button type="button" className="btn btn-default"><i aria-hidden="true" className="bi bi-trash" title="delete" onClick={()=>{props.onDelete(props.id)}}></i></button>
      </li>
    </div>
  )
}

export default Task