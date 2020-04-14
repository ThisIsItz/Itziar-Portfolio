import React from 'react'

const Icon = (props) => {
    return(
        <div className="col-2">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={`./img/${props.icon}.png`} alt={props.icon}/>
            </a>
        </div>
    )
}

export default Icon