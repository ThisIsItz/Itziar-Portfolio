import React from 'react'
import Project from './Project'

const Projects = () => {
    return(
        <div className="container">
            <div className="row pt-5">
                <Project
                    name="First Project"
                    img="https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png"
                    description="This is my first project."
                />
                <Project
                    name="Second Project"
                    img="https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png"
                    description="This is my second project."
                />
                <Project
                    name="Third Project"
                    img="https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png"
                    description="This is my third project."
                />
            </div>
        </div>
    )
}

export default Projects
