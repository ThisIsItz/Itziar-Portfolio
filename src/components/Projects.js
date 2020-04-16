import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return(
        <div className="container pt-5">
            <div className="row">
                <ProjectCard
                    name="Streaming Video App"
                    img="./img/streamblog.png"
                    description="Streaming Video App that streams your own streaming using a RTMP server, and allows you to create, edit or delete your streams. Developed using React"
                    href="https://github.com/ThisIsItz/streaming-video"
                />
                <ProjectCard
                    class="weather"
                    name="Weather Journal App"
                    img="./img/wjasmall.png"
                    description="Weather application that allows user to get the actual weather from a place using the zip code from this place (only works with US zip codes)"
                    href="https://github.com/ThisIsItz/weather-journal-app"
                />
            </div>
            <div className="row">
                <ProjectCard
                    class="travel"
                    name="Travel App"
                    img="./img/travelappclose.png"
                    description="Travel application that uses the information incoming from the user to displays some information about the trip (weather in the city, a photo of the city...)"
                    href="https://github.com/ThisIsItz/travelapp"
                />
                <ProjectCard 
                    name="Natural Language Processing App"
                    class="npl"
                    img="./img/nlp.png"
                    description="This web app allows user to type in any URL and the NLP-API analyse the sentiment of it through getting insight about the author's polarity and subjectivity. "
                    href="https://github.com/ThisIsItz/NLP-API"
                />
            </div>
            <div className="row">
                <ProjectCard
                    name="Snake game"
                    img="./img/snake-game.png"
                    description="My very first project. Snake game made using Vanilla JavaScript"
                    href="https://github.com/ThisIsItz/snake-game"
                />
            </div>
        </div>
    )
}

export default Projects
