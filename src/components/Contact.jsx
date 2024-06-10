import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { MyContext } from '../context/MyContex';

const Contact = () => {
    const { addToRefs } = useContext(MyContext);
    return (
        <div id="contact">
            <div className="contact__inner">
                <div className="contact__text">
                    <ul>
                        <li ref={addToRefs} className="fade-in">CONTACT</li>
                        <li ref={addToRefs} className="fade-in">ME</li>
                    </ul>
                </div>
                <div className="contact__sns">
                    <div className="github">
                        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                            GITHUB
                        </a>
                    </div>
                    <div className="instagram">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                            INSTAGRAM
                        </a>
                    </div>
                    <div className="email">
                        <a href="mailto:sy051398@naver.com">sy051398@naver.com</a>
                    </div>
                    <div className="phone">
                        <a href="tel:01020180035">tel : 010 2018 0035</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
