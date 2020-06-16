import React from 'react'
import ProjectCard from './ProjectCard'
import myprojects from './MyProjects'

const Projects = () => {
    return(
        <div className="container pt-5">
            <div className="row">
                {myprojects.map(element => (
                    <ProjectCard
                        name={element.name}
                        description={element.description}
                        href={element.github}
                        img={element.img}
                        class={element.className}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects
