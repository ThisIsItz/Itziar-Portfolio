import React from 'react'

const Skill = (props) => {
    return(
        <div className={`${props.col} text-center`}>
            <i className={props.icon}></i>
            <p className="text-icon mt-2">{props.title}</p>
        </div>
    )
}
export default Skill