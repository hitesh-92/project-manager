import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

const ProjectDetails = (props) => {

  // const id = props.match.params.id
  const {project} = props
  if(project){
    return (
        <div className="container section project-details">

          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">{project.title}</span>
                  <p>{project.content}</p>
              </div>
              <div className="card-action grey lighten-4">
                  <div><small>Posted by {project.firstName} {project.lastName}</small></div>
                  <div>Date: 1.1.19</div>
              </div>
          </div>

        </div>
      )
  }
  else {
    return(
      <div className="container center">
        <p>Loading Project...</p>
      </div>
    )
  }

  

}

const mapStateToProps = (state, ownProps) => {

  const id = ownProps.match.params.id,
    projects = state.firestore.data.projects,
    project = projects ? projects[id] : null
  

  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection:'rpojects'}])
)(ProjectDetails)

// export default ProjectDetails
