import React from 'react'
import Skills from './Skills'
import Projects from './Projects'

class Section extends React.Component{
    renderSection(){
        switch(this.props.id){
            case 'skills':
                return <Skills />
            case 'projects':
                return <Projects />
            default:
                return null
        }

    }

    render(){
        this.renderSection()
        return(
            <div className="container-fluid">
                <div id={this.props.id}>
                    <div className="col-12 text-center title">
                        <h1 className="pt-5">{this.props.title}</h1>
                    </div>
                    <div>
                        {this.renderSection()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Section