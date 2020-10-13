import React from 'react';
import ProjectCards from './ProjectCards';
import ProjectsArray from './ProjectsArray'
function Projects(){
    return(
        <div >
            {ProjectsArray.map(project=>{
                return<ProjectCards
                projectName={project.projectName}
                projectDiscription={project.projectDiscription}
                gitLink={project.gitLink}
                imageUrl={project.imageUrl}
                />
            })}
        </div>
        
                        

                
    )
}
export  default Projects;