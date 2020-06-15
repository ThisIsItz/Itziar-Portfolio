import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../assets/logo.png'

const Navbar = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link
                        className="nav-link"
                        activeClass=""
                        to="landing"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                         ><img className="logo" src={Logo} alt="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    activeClass=""
                                    to="landing"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                >Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass=""
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                >Skills</Link>
                            </li>
                            <li className="nav-item">
                            <Link
                                className="nav-link"
                                activeClass=""
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration= {500}
                                >My projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar