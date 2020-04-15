import React from 'react'

const ProjectCard = (props) => {
    return(
        <div className="project-card col-12 col-lg-6 mb-5">
            <div className="card">
                <img className={`card-img-top h-100 ${props.class}`} src={props.img} alt="Project img"/>
                <div className="card-body text-center h-100">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.href} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Go To Project</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard