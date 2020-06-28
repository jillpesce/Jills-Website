import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

export default class Projects extends React.Component {
    render() {
        return (
            <div className="section" data-anchor="Projects">

                <div class="slide" data-anchor="Rona">
                    <Card class="card">
                        <Card.Img variant="top" src="./img/rona.png" class="card-img" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>Coronavirus Database Web App</Card.Title>
                            <Card.Text style={{ fontSize: '1.5rem' }}>
                                Created a web app to allow data visualization of customizable queries
                                 on coronavirus and other causes of death databases.
                            </Card.Text>
                            <a target="_blank" href="https://github.com/jillpesce/The-Rona"><FontAwesomeIcon class="icon" icon={faGithubSquare} /></a>
                            <Button target="_blank" variant="outline-dark" href="https://youtu.be/ORF9CNXA-vo">Demo</Button>
                        </Card.Body>
                    </Card></div>

                <div class="slide" data-anchor="Tutor">
                    <Card class="card">
                        <Card.Img variant="top" src="./img/tutor.png" class="card-img" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>Campus Tutoring App &amp; Website</Card.Title>
                            <Card.Text style={{ fontSize: '1.5rem' }}>
                                Created a tutoring product that allows flexible appointment booking,
                                progress tracking, and tutor rating.
                            </Card.Text>
                            <a target="_blank" href="https://github.com/jillpesce/Tutoring-App"><FontAwesomeIcon class="icon" icon={faGithubSquare} /></a>
                        </Card.Body>
                    </Card></div>
                <div class="slide" data-anchor="Stencil">
                    <Card class="card">
                        <Card.Img variant="top" src="https://mma.prnewswire.com/media/996576/Softheon_Logo.jpg?p=facebook" class="card-img" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>Softheon Stencil</Card.Title>
                            <Card.Text style={{ fontSize: '1.5rem' }}>
                                Created an internal portal for Softheon that allows product managers to drag and drop components to create customized invoices,
                                reports, and documents to send to clients.
                            </Card.Text>
                            <Button target="_blank" variant="outline-dark" href="https://www.softheon.com/">Check out Softheon</Button>
                        </Card.Body>
                    </Card></div>
                <div class="slide" data-anchor="Kettle">
                    <Card class="card">
                        <Card.Img variant="top" src="./img/tea.png" class="card-img" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>IO(Tea) Kettle</Card.Title>
                            <Card.Text style={{ fontSize: '1.5rem' }}>
                                Implanted Arduino hardware into an eletric kettle to connect it to the internet
                                and allow for scheduled hot water brewing.
                            </Card.Text>
                            <a target="_blank" href="https://github.com/jillpesce/KettleWebsite"><FontAwesomeIcon class="icon" icon={faGithubSquare} /></a>
                        </Card.Body>
                    </Card></div>
            </div >
        );
    }
}