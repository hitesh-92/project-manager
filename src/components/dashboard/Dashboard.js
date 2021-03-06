import React, {Component} from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import Messages from './Messages/Messages'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
 
class Dashboard extends Component {
    
    render(){
        
        const {projects, auth, notifications, messages} = this.props

        if (!auth.uid) return <Redirect to="/signin"/>

        // console.log(this.props)

        return(
            <div className="dashboard" id="dashboard">
                 <div className="row">
                    <div className="col s12 m6">
                        <Notifications notifications={notifications} />
                        <Messages messages={messages} />
                    </div>
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                 </div>
             </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications,
        messages: state.firestore.ordered.messages
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { 
            collection:'projects',
            orderBy: ['createdAt', 'desc']
        },
        { 
            collection:'notifications',
            limit: 5,
            orderBy: ['time', 'desc']
        },
        {
            collection:'messages',
            limit: 10,
            orderBy: ['createdAt', 'desc']
        }
    ])
)(Dashboard)
