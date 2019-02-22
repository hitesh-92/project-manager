import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'

const ProjectDetails = (props) => {

  const {project, auth} = props
  if (!auth.uid) return <Redirect to="/signin"/>

  if(project){
    console.log(project)
    return (
        <div className="container section project-details">

          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">{project.title}</span>
                  <p>{project.content}</p>
              </div>
              <div className="card-action grey lighten-4">
                  <div><small>
                  <span>Posted by {project.authorFirstName[0]}. {project.authorLastName}</span> |
                  <span> {moment(project.createdAt.toDate()).calendar()}</span>
                  </small></div>
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
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection:'rpojects'}])
)(ProjectDetails)

// export default ProjectDetails
