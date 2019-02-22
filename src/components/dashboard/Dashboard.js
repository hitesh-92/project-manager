import React, {Component} from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
 
class Dashboard extends Component {
    render(){
        
        const {projects} = this.props

        return(
            <div className="container dashboard">
                <div className="row">
                    <div className="col sm12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col sm12 m5 offset-1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection:'projects' }
    ])
)(Dashboard)

// export default connect(mapStateToProps)(Dashboard)
