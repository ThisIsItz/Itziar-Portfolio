import React from 'react'
import Skill from './Skill'

const Skills = () => {
    return(
        <div className="row mt-5">
            <Skill 
                icon="devicon-html5-plain"
                col="col-6 col-md-4"
                title="HTML5"
            />
            <Skill 
                icon="devicon-css3-plain"
                col="col-6 col-md-4"
                title="CSS3"
            />
            <Skill 
                icon="devicon-javascript-plain"
                col="col-6 col-md-4"
                title="JavaScript"
            />
            <Skill 
                icon="devicon-react-original"
                col="col-4 offset-2"
                title="React"
            />
            <Skill 
                icon="devicon-git-plain"
                col="col-4"
                title="Git"
            />
        </div>
    )
}

export default Skills