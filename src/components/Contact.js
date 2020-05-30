import React from 'react';

import '../style/Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="section" data-tooltip="Contact" data-anchor="Contact">
                <p>Website and Design by</p>
                <br />
                <p class="script"> • Jill Pesce • </p>
                <p class="script small">2020</p>
                <br />
                <p> Share your thoughts, feelings, and/or aspirations with me below.</p>
                <p class="small">P.S. I like coffee</p>
                <br />
                <a target="_blank" href="https://www.linkedin.com/in/jillian-pesce"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a style={{marginRight:'10px', marginLeft: '10px'}} href="mailto:jillpesce44@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare}/></a>
                <a target="_blank" href="https://github.com/jillpesce"><FontAwesomeIcon icon={faGithubSquare}/></a>
            </div>
        );
    }
}


