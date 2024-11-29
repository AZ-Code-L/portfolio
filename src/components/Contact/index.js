import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import WaveBg from "../WaveBg"

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const contactArray = "Contact Me".split('')
    const refForm = useRef()
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_b1cduvm',
                'template_1o2di97',
                refForm.current,
                'YXXwqqkL945O7s4cP'
        )
            .then(
            () => {
            alert('Message successfully sent!')
            window.location.reload(false)
            },
            () => {
            alert('Failed to send the message, please try again')
            }
        )
    }

    return (
        <>
        <div className="container contact-page">
            <WaveBg/>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={contactArray}
                    idx={15} />
                </h1>
                <p>
                    If you're interested, please feel free to email me. I'm a Motivated and detail-oriented fresh graduate. Seeking an entry-level position in hardware, software development, or networking, where I can apply my knowledge and skills, contribute to a dynamic team, and grow professionally within the industry
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail} action="">
                    <ul>
                        <li className="half"> 
                            <input type="text" name="name" placeholder="Name" required/>
                        </li>
                            
                        <li className="half"> 
                            <input type="email" name=" " placeholder="E-Mail" required/>
                        </li>
                            
                        <li> 
                            <input type="text" name="subject" placeholder="Subject" required/>
                        </li>
                            
                        <li> 
                            <textarea placeholder="Message" name="message" id=""></textarea>
                        </li>
                            <li>
                            <input type="submit" name="submit" value="Submit" className="flat-button" />
                        </li>
                    </ul>        
                </form>
                </div>
                

            </div>
            
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Contact