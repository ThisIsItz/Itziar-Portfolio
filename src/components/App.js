import React from 'react'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'

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
            <Footer/>
        </div>
    )
}

export default App