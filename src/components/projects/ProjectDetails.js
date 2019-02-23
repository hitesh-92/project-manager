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

    return (
      <div className="section project-details container">
        <p className="blue-grey-text text-darken-1">Project Details</p>
        <div className="card z-depth-0">
          <div className="card-content">
              <span className="card-title">{project.title}</span>
              <blockquote>{project.content}</blockquote>

            <small className="grey-text text-lighten-1">
              <span>Posted by {project.authorFirstName[0]}. {project.authorLastName}</span>
              <span className="right"> {moment(project.createdAt.toDate()).calendar()}</span>
            </small>

          </div>
        </div>

        <section>
          <p>Add in more project info heree</p>
        </section>

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
  firestoreConnect([{collection:'projects'}])
)(ProjectDetails)
