import React from 'react'

import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {

    

    return(
        <section className="section project-list">
           {/* <ProjectSummary /> */}

           {projects && projects.map(project => {
               return(
                   <ProjectSummary project={project} key={project.id} />
               )
           })}
        </section>
    )

}

export default ProjectList