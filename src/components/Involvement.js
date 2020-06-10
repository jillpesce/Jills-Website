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
                            <Card.Title style={{ fontSize: '2rem' }}>Intro to Computer Science Teaching Assistant</Card.Title>
                            <Card.Text style={{ fontSize: '1.5rem' }}>
                                Teach the basics of Java through weekly recitation classes, helping students in office
                                hours, and providing constructive feedback on assignments/tests.
                            </Card.Text>
                            <Button target="_blank" variant="outline-dark" href="https://www.cis.upenn.edu/~cis110/current/index.html">Check it out</Button>
                        </Card.Body>
                    </Card> </div>
                <div class="slide" data-anchor="Advocacy"> 
                <Card class="card" text={this.props.dark === 'dark' ? 'white' : 'dark'}
                        bg={this.props.dark === 'dark' ? 'dark' : 'white'}>
                        <Card.Img variant="bottom" src="https://wics.cis.upenn.edu/logo/wics.png" class="card-img" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>WiCS Director of Advocacy</Card.Title>
                            <Card.Text style={{ fontSize: '1.5rem' }}>
                            Organizaion to support and promote women in computer science by encouraging discussion and raising awareness regarding issues surrounding women in tech.                            </Card.Text>
                            <Button target="_blank" variant="outline-dark" href="https://wics.cis.upenn.edu/">Check it out</Button>
                        </Card.Body>
                    </Card></div>
                <div class="slide" data-anchor="XO">
                    <Card class="card" text={this.props.dark === 'dark' ? 'white' : 'dark'}
                        bg={this.props.dark === 'dark' ? 'dark' : 'white'}>
                        <Card.Img variant="bottom" src="https://indianapublicmedia.org/news/news-images/15541304_10154286876852857_411365421062585413_n.png" class="card-img" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>Chi Omega Sorority</Card.Title>
                            <Card.Text style={{ fontSize: '1.5rem' }}>
                            National women’s organization committed to philanthropy in support of the Make-A-Wish Foundation.
                            </Card.Text>
                            {/* <Button target="_blank" variant="outline-dark" href="">Check it out</Button> */}
                        </Card.Body>
                    </Card> </div>
            </div >
        );
    }
}