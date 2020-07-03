import React from 'react';

import '../style/Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="section" data-anchor="Contact">
                <p> Share your thoughts, questions, or favorite books with me below.</p>
                <p class="small">P.S. I like coffee</p>
                <OverlayTrigger
                    placement={'bottom'}
                    overlay={
                        <Tooltip>
                            linkedin
                        </Tooltip>
                    }
                >
                    <a target="_blank" href="https://www.linkedin.com/in/jillian-pesce"><FontAwesomeIcon class="icon" icon={faLinkedin} /></a>
                </OverlayTrigger>
                <OverlayTrigger
                    placement={'bottom'}
                    overlay={
                        <Tooltip>
                            email
                        </Tooltip>
                    }
                >
                    <a href="mailto:jillpesce44@gmail.com"><FontAwesomeIcon class="icon" icon={faEnvelopeSquare} /></a>
                </OverlayTrigger>
                <OverlayTrigger
                    placement={'bottom'}
                    overlay={
                        <Tooltip>
                            github
                        </Tooltip>
                    }
                >
                    <a target="_blank" href="https://github.com/jillpesce"><FontAwesomeIcon class="icon" icon={faGithubSquare} /></a>
                </OverlayTrigger>
                <OverlayTrigger
                    placement={'bottom'}
                    overlay={
                        <Tooltip>
                            resume
                        </Tooltip>
                    }
                >
                    <a download="Jill_Pesce_Resume" href='../../files/Resume.pdf'><FontAwesomeIcon class="icon" icon={faFileDownload} /></a>
                </OverlayTrigger>
                <br/>
                <br/>
                <img class="coffee" src='./img/coffee.png'></img>
                <img class="grass" src='./img/grass.png'></img>
                <p class="small">Website &amp; Design by</p>
                <p class="script"> • Jill Pesce • </p>
                <p class="script small">2020</p>
            </div>
        );
        
    }
    
}


