import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return(
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text">
                    <span className="card-title">{project.title}</span>
                    <p>Post by {project.authorFirstName[0]}. {project.authorLastName}</p>
                    <p className="grey-text lighten-2">
                        {moment(project.createdAt.toDate()).calendar()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary