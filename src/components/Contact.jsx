import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    return (
        <div id="contact">
            <div className="contact__inner">
                <div className="contact__text">
                    <ul>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div className="contact__sns">
                    <div className="github">
                        <a href="">
                            <FontAwesomeIcon icon={faGithub} />
                            GITHUB
                        </a>
                    </div>
                    <div className="instargram">
                        <a href="">
                            <FontAwesomeIcon icon={faInstagram} />
                            INSTARTGRAM
                        </a>
                    </div>
                    <div className="email">email : sy051398@naver.com</div>
                    <div className="phone">tel : 010 2018 0035</div>
                </div>
            </div>
        </div>
    )
}

export default Contact
