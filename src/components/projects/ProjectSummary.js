import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return(
        <div className="project-list">
            <div className="card z-depth-1 project-summary">
                <div className="card-content grey-text text-darken-1">
                    
                    <span className="card-title">{project.title}</span>
                    <p>
                        <span className="blue-text text-lighten-3">
                            {project.authorFirstName[0]}. {project.authorLastName}
                        </span>
                        <span className="grey-text text-lighten-2"> - </span>
                        <span className="grey-text text-lighten-1">
                            {moment(project.createdAt.toDate()).calendar()}
                        </span>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default ProjectSummary