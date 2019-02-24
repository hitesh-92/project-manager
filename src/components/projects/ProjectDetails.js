import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'

class ProjectDetails extends Component{

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  
  render(){

    const {project, auth} = this.props
    if (!auth.uid) return <Redirect to="/signin"/>

    if(project){

      return (
  
        <div id="project-details">
  
        <section className="section">
          
          <div className="row">
            <div className="col s2 white-text">
              <p>Project Details</p>
            </div>
            <div className="col s10 ">
              <div className="card">
                <div className="card-content">
                <span className="card-title center">{project.title}</span>
                <span>
                  <blockquote className="">{project.content}</blockquote>
                </span>
                <div className="right">
                  <small className="grey-text text-lighten-1">
                  <span>{project.authorFirstName[0]}. {project.authorLastName} - {moment(project.createdAt.toDate()).format("MMM Do YY") }</span>
                  </small>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          <section className="project-detail-tasks">
            <div className="row">
              <div className="col s12 m4 deep-purple lighten-5 project-detail-task-section">
                  <p className="blue-grey-text text-darken-1"><strong>Tasks</strong> <span className="right blue-grey-text text-lighten-1"><i className="material-icons">more</i></span></p>
                  <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="col s12 m4 deep-orange lighten-5 project-detail-task-section">
                  <p className="blue-grey-text text-darken-1"><strong>Tasks</strong> <span className="right blue-grey-text text-lighten-1"><i className="material-icons">more</i></span></p>
                  <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="col s12 m4 green lighten-5 project-detail-task-section">
                  <p className="blue-grey-text text-darken-1"><strong>Tasks</strong> <span className="right blue-grey-text text-lighten-1"><i className="material-icons">more</i></span></p>
                  <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
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
