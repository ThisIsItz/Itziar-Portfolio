import React from 'react'
import Skills from './Skills'
import Projects from './Projects'

const Section = (props) => {
    return(
        <div className="container-fluid">
                <div id={props.id}>
                        <div className="col-12 text-center title">
                            <h1 className="pt-5">{props.title}</h1>
                        </div>
                        <div>
                            <Projects />
                        </div>
                </div>
            </div>
    )
}

export default Section