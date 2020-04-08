import React from 'react'

const Header = () => {
    return(
        <div className="landing">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a href="index.html"><img className="logo" src="img/logo.png" alt="logo"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#myprojects">My projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#aboutme">About Me</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row p-5">
                        <div id="info" className="col-lg-6 col-12">
                            <h1 id="myname">Itziar Urbieta León</h1>
                            <h2>Front-end Developer</h2>
                        </div>
                        <div id="photo" className="col-5 text-center mx-auto">
                            <img id="yo" src="./img/yo.jpg" className="img-fluid z-depth-1 rounded-circle"
                              alt="Me"/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Header