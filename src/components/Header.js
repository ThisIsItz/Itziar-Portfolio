import React from 'react'
import Navbar from './Navbar'
import Icon from './Icon'
import me from '../assets/yo.jpg'
import socialmedia from './SocialMedia'

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
                                {socialmedia.map(element => (
                                    <Icon source={element.source} link={element.link} />
                                ))
                                }
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