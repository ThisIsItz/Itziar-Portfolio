import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return(
        <div className="container pt-5">
            <div className="row">
                <ProjectCard
                    name="Snake game"
                    img="./img/snake-game.png"
                    description="First project made in Vanilla JavaScript"
                    href="https://github.com/ThisIsItz/snake-game"
                />
                <ProjectCard
                    class="weather"
                    name="Weather Journal App"
                    img="./img/wjasmall.png"
                    description="Description here"
                    href="https://github.com/ThisIsItz/weather-journal-app"
                />
            </div>
            <div className="row">
                <ProjectCard
                    class="travel"
                    name="Travel App"
                    img="./img/travelappclose.png"
                    description="Travel application that uses the information incoming from the user to show him some information about the trip."
                    href="https://github.com/ThisIsItz/travelapp"
                />
                <ProjectCard 
                    name="Natural Language Processing"
                    img="./img/nlp.png"
                    description="News Article Sentiment Analysis webs application"
                    href="https://github.com/ThisIsItz/NLP-API"
                />
            </div>
            <div className="row">
                <ProjectCard
                    name="Streaming Video App"
                    img="./img/streamblog.png"
                    description="I don't know"
                    href="https://github.com/ThisIsItz/streaming-video"
                />
            </div>
        </div>
    )
}

export default Projects
