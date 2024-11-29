import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-b.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div class='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>

             <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        
        <ul>
            <li>
                <a target="_blank" rel='noneferrer' href="https://www.linkedin.com/in/alexander-joaquin-abaloyan-900179320/">
                <FontAwesomeIcon icon={faLinkedinIn} color='#4d4d4e' />
                </a>
            </li>
             <li>
                <a target="_blank" rel='noneferrer' href="https://www.facebook.com/Hachi2828">
                <FontAwesomeIcon icon={faFacebook} color='#4d4d4e' />
                </a>
            </li>
             <li>
                <a target="_blank" rel='noneferrer' href="https://www.instagram.com/xndrrn/">
                <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                </a>
            </li>
             <li>
                <a target="_blank" rel='noneferrer' href="https://github.com/">
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>
        
    </div>
)

export default Sidebar