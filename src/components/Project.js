import React from 'react'

const Project = (props) => {
    return(
        <div className="col-12 col-lg-4">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={props.img} alt="Project img"/>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href="#" className="btn btn-primary">Go To Project</a>
                </div>
            </div>
        </div>
    )
}

export default Project