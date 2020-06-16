import React from 'react'
import Header from './Header'
import Section from './Section'
import Footer from './Footer'
import './newStyle.css'

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