import React, {Component    } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'

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
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)