import React from 'react'

const ProjectSummary = ({project}) => {
    return(
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text">
                    <span className="card-title">{project.title}</span>
                    <p>Post by {project.authorFirstName[0]}. {project.authorLastName}</p>
                    <p className="grey-text">Date 1.1.19</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary