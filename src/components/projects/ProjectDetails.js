import React from 'react'

const ProjectDetails = (props) => {

  const id = props.match.params.id

  return (
    <div className="container section project-details">

      <div className="card z-depth-0">
          <div className="card-content">
              <span className="card-title">Projct Titlle - {id}</span>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat voluptatem nisi minima laboriosam suscipit saepe.</p>
          </div>
          <div className="card-action grey lighten-4">
              <div>Posted By XYZ</div>
              <div>Date: 1.1.19</div>
          </div>
      </div>

    </div>
  )
}

export default ProjectDetails
