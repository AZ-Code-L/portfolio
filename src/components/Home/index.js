import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetter from '../AnimatedLetters';
import Logo from './Logo';
import AnimatedBg from '../AnimateBg'
import WaveBg from '../WaveBg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, faWaveSquare } from '@fortawesome/free-solid-svg-icons';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'A', 'l', 'e', 'x', 'a', 'n', 'd', 'e', 'r', ' ', 'J', 'o', 'a', 'q', 'u', 'i', 'n',' ', 'A', 'b', 'a', 'l', 'o', 'y', 'a', 'n']
    const jobArray = ['W', 'e', 'b',' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
        
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <AnimatedBg />
            <WaveBg/>
            <div className="text-zone">
                <h1>Hi <FontAwesomeIcon icon={faHand} color='#4d4d4e' />
                    <br />
                    <span className={letterClass}>I'</span>
                    <span className={`${letterClass} _12`}>m</span>
                    <AnimatedLetter letterClass={letterClass} strArray={nameArray}
                    idx={15} />
                  
                    <br />
                    <AnimatedLetter letterClass={letterClass} strArray={jobArray} idx={15}/>
                </h1>
                <h2>Front End Developer/ JavaScript</h2>
                <Link to='/contact' className='flat-button'>Contact Me</Link>
            </div>
            <Logo />
        </div>
    )

}

export default Home