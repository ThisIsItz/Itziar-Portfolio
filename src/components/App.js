import React from 'react'
import Header from './Header'
import Section from './Section'

const App = () => {
    return(
        <div className="container-fluid">
            <Header />
            <Section
                id="skills"
                title="SKILLS"
            />
            <Section
                id="projects"
                title="MY PROJECTS"
            />
        </div>
    )
}

export default App