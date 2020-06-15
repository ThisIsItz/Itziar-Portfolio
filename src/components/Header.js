import React from 'react'
import Navbar from './Navbar'
import Icon from './Icon'

const Header = () => {
    return(
        <div className="landing">
                <Navbar />
                <div className="container">
                    <div className="row header">
                        <div id="info" className="col-lg-6 col-12">
                            <h1 id="myname">Itziar Urbieta León</h1>
                            <h2>Front-end Developer</h2>
                            <div className="row mt-3">
                                <Icon 
                                    icon="linkedin"
                                    link="https://www.linkedin.com/in/itziarurbieta/"
                                />
                                <Icon 
                                    icon="github"
                                    link="https://github.com/ThisIsItz"
                                />
                                <Icon 
                                    icon="twitter"
                                    link="https://twitter.com/ItUnderTheSea"
                                />
                                <Icon 
                                    icon="dev"
                                    link="https://dev.to/thisisitz"
                                />
                                <Icon
                                    icon="mail"
                                    link="mailto:itziarurbieta94@gmail.com"
                                />
                                <Icon
                                    icon="cv"
                                    link="./pdf/itziar_urbieta.pdf"
                                />
                            </div>
                        </div>
                        <div id="photo" className="col-5 text-center mx-auto">
                            <img id="yo" className="img-fluid z-depth-1 rounded-circle"
                              alt="Me"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Header