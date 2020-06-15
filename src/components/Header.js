import React from 'react'
import Navbar from './Navbar'
import Icon from './Icon'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import dev from '../assets/dev.png'
import mail from '../assets/mail.png'
import cv from '../assets/cv.png'
import me from '../assets/yo.jpg'
import pdf from '../assets/itziar_urbieta.pdf'

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
                                    source={linkedin}
                                    link="https://www.linkedin.com/in/itziarurbieta/"
                                />
                                <Icon 
                                    source={github}
                                    link="https://github.com/ThisIsItz"
                                />
                                <Icon 
                                    source={twitter}
                                    link="https://twitter.com/ItUnderTheSea"
                                />
                                <Icon 
                                    source={dev}
                                    link="https://dev.to/thisisitz"
                                />
                                <Icon
                                    source={mail}
                                    link="mailto:itziarurbieta94@gmail.com"
                                />
                                <Icon
                                    source={cv}
                                    link={pdf}
                                />
                            </div>
                        </div>
                        <div id="photo" className="col-5 text-center mx-auto">
                            <img id="yo" src={me} className="img-fluid z-depth-1 rounded-circle"
                              alt="Me"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Header