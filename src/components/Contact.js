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
                <p>Website &amp; Design by</p>
                <br />
                <p class="script"> • Jill Pesce • </p>
                <p class="script small">2020</p>
                <br />
                <p> Share your thoughts, feelings, and/or aspirations with me below.</p>
                <p class="small">P.S. I like coffee</p>
                <br />
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
            </div>
        );
    }
}


