import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

const ProjectList = ({projects}) => {

    

    return(
        <section className="section project-list">
           {/* <ProjectSummary /> */}

           {projects && projects.map(project => {
               return(
                <Link to={'/project/' + project.id} key={project.id}>
                   <ProjectSummary 
                    project={project} 
                    key={project.id}
                    />
                </Link>
               )
           })}
        </section>
    )

}

export default ProjectList