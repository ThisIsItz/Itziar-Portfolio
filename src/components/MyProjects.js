import streamblog from '../assets/streamblog.png'
import weather from '../assets/wjasmall2.png'
import travel from '../assets/ta.png'
import nlp from '../assets/nlp.png'
import snakegame from '../assets/snake-game.png'


// Add projects at the top of the array, not the bottom, to show more recent first on Portfolio.

const myprojects = [
    {
        name:"Streaming Video App",
        description:"Streaming Video App that streams your own streaming using a RTMP server, and allows you to create, edit or delete your streams. Developed using React",
        github: "https://github.com/ThisIsItz/streaming-video",
        img: streamblog,
        className: '',
    },
    {
        name:"Weather Journal App",
        description:"Weather application that allows user to get the actual weather from a place using the zip code from this place (only works with US zip codes)",
        github: "https://github.com/ThisIsItz/weather-journal-app",
        img: weather,
        className: 'weather',
    },
    {
        name:"Travel App",
        description:"Travel application that uses the information incoming from the user to displays some information about the trip (weather in the city, a photo of the city...)",
        github: "https://github.com/ThisIsItz/travelapp",
        img: travel,
        className: 'travel'
    },
    {
        name:"Natural Language Processing App",
        description:"This web app allows user to type in any URL and the NLP-API analyse the sentiment of it through getting insight about the author's polarity and subjectivity. ",
        github: "https://github.com/ThisIsItz/NLP-API",
        img: nlp,
        className: 'npl'
    },{
        name: "Snake game",
        description: "My very first project. Snake game made using Vanilla JavaScript",
        github: "https://github.com/ThisIsItz/snake-game",
        img: snakegame,
        className: ''
    }

]

export default myprojects