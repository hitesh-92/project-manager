import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import ProjectTask from './tasks/ProjectTask'

class ProjectDetails extends Component{

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  
  render(){

    const {project, auth} = this.props
    if (!auth.uid) return <Redirect to="/signin"/>

    // console.log(this.props)

    const id = this.props.match.params.id

    if(project){

      return (
  
        <div id="project-details">

          <section className="section">

            <div className="row green lighten-3">

              <div className="col s12 m2">
                <p>Project Details</p>
              </div>

              <div className="col s12 m7">
                <p>
                  <span>{project.title}</span>
                  <span className="white-text"> : </span>
                  <span><small>{project.content}</small></span>
                </p>
              </div>

              <div className="col s12 m3">
                <p>
                  <small className="white-text text-lighten-1">
                    <span>{project.authorFirstName[0]}. {project.authorLastName} - {moment(project.createdAt.toDate()).format("Do MMM YY") }</span>
                  </small>
                </p>
              </div>

            </div>

          </section>


      
          <section className="project-detail-tasks">
            <ProjectTask project={project} id={id} />
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
