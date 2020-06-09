import React from 'react';

import '../style/Involvement.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Involvement extends React.Component {
    render() {
        return (
            <div className="section" data-anchor="Involvement">
                <div class="slide" data-anchor="%project">
                    <Card class="card" text={this.props.dark === 'dark' ? 'white' : 'dark'}
                        bg={this.props.dark === 'dark' ? 'dark' : 'white'}>
                        <Card.Img variant="top" src="./img/percproj.png" class="wide" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>The Percentage Project</Card.Title>
                            <Card.Text style={{ fontSize: '1.5rem' }}>
                                An artistic, visual outlet for data collected
                                from surveys of Computer Science students each year aiming
                                 to encourage reflection upon the situations of minorities.
                            </Card.Text>
                            <Button target="_blank" variant="outline-dark" href="https://percentageproject.com/#/">Check it out</Button>
                        </Card.Body>
                    </Card></div>
                <div class="slide" data-anchor="TA">                     
                <Card class="card" text={this.props.dark === 'dark' ? 'white' : 'dark'}
                    bg={this.props.dark === 'dark' ? 'dark' : 'white'}>
                    <Card.Img variant="bottom" src="./img/ta.png" class="card-img" />
                    <Card.Body>
                        <Card.Title style={{ fontSize: '2rem' }}>TA for Intro to Comp Sci</Card.Title>
                        <Card.Text style={{ fontSize: '1.5rem' }}>
                            Teach the basics of Java through weekly recitation classes, helping students in office 
                            hours, and providing constructive feedback on assignments/tests. 
                            </Card.Text>
                        <Button target="_blank" variant="outline-dark" href="https://www.cis.upenn.edu/~cis110/current/index.html">Check it out</Button>
                    </Card.Body>
                </Card> </div>
                <div class="slide" data-anchor="Advocacy"> Director of Advocacy </div>
                <div class="slide" data-anchor="XO"> Chi Omega </div>
            </div >
        );
    }
}