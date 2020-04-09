import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return(
        <div className="container">
            <div className="row pt-5">
                <ProjectCard
                    name="First Project"
                    img="https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png"
                    description="This is my first project."
                    href=""
                />
                <ProjectCard
                    name="Second Project"
                    img="https://cdn.pixabay.com/photo/2017/06/10/07/15/joystick-2389216_960_720.png"
                    description="This is my second project."
                    href=""
                />
                <ProjectCard
                    name="Third Project"
                    img="https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png"
                    description="This is my third project."
                    href=""
                />
            </div>
        </div>
    )
}

export default Projects
