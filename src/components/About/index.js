import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import WaveBg from '../WaveBg'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const AboutArray = "About Me".split('')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className="container about-page">
            <WaveBg/>
            <div className="text-zone">
                <h1>
                    
                    <AnimatedLetters letterClass={letterClass} strArray={AboutArray}
                    idx={15}/>

                </h1>
                <p>
                    I'm a Fresh Graduate from the Technological University of the Philippines with the course of Computer Engineering Technology. I graduated with a latin honor "Cum Laude" under our curriculum.
                </p>
                <p>
                    I'm really interested in the field of web development especially, in front-end development, but I can also be deployed in other positions that's within my reach.
                </p>
                <p>
                    HTML, CSS, JavaScript, Java, PHP, Python, React, Git, Angular, C++, C#, MongoDB, SQL, and UI/UX. These are some of my field of expertise.
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGithub} color='#ECD4D28' />
                    </div>
                </div>
            </div>
        </div>   
        
        <Loader type="pacman"/>
        </>
    )
}

export default About