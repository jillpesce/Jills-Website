import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';


export default class Footer extends React.Component {
    render() {
        return (
            <div className="section">
                <p>Website and Design by</p>
                <br />
                <span class="is-size-3" style={{fontFamily:'dancing script'}}> • Jill Pesce • </span>
                <br />
                <p>2020</p>
                <br />
                <p> Share your thoughts, feelings, and/or aspirations with me below.</p>
                <br />
                <a target="_blank" href="https://www.linkedin.com/in/jillian-pesce"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a style={{marginRight:'10px', marginLeft: '10px'}} href="mailto:jillpesce44@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare}/></a>
                <a target="_blank" href="https://github.com/jillpesce"><FontAwesomeIcon icon={faGithubSquare}/></a>
            </div>
        );
    }
}


