import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Design extends React.Component {
    render() {
        return (
            <div className="section" data-anchor="Design">
                <div class="slide" data-anchor="sound">
                    <Card class="card" text={this.props.dark === 'dark' ? 'white' : 'dark'}
                        bg={this.props.dark === 'dark' ? 'dark' : 'white'}>
                        <Card.Img variant="top" src="./img/artboard.jpg" class="card-img" style={{ height: '25rem' }} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>Sound Abstraction</Card.Title>
                            <Card.Text style={{ fontSize: '1.5rem' }}>
                                Visual abstractions of a field recording taken during a concert.
                            </Card.Text>
                        </Card.Body>
                    </Card></div>
                <div class="slide" data-anchor="city">
                    <Card class="card" text={this.props.dark === 'dark' ? 'white' : 'dark'}
                        bg={this.props.dark === 'dark' ? 'dark' : 'white'}>
                        <Card.Img variant="top" src="./img/artboard2.jpg" class="card-img" style={{ height: '25rem' }} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>City Abstraction</Card.Title>
                            <Card.Text style={{ fontSize: '1.5rem' }}>
                                Visual abstractions of a trading city from Italo Calvino’s book, <em>Invisible Cities</em>.
                            </Card.Text>
                        </Card.Body>
                    </Card></div>

                <div class="slide" data-anchor="animation">
                    <Card class="card" text={this.props.dark === 'dark' ? 'white' : 'dark'}
                        bg={this.props.dark === 'dark' ? 'dark' : 'white'}>
                        <Card.Img variant="top" src="./img/birds.png" class="card-img" style={{ height: '23rem' }} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>Poem Abstraction</Card.Title>
                            <Card.Text style={{ fontSize: '1.5rem' }}>
                                Animated abstraction of W. B. Yeats' poem <em>Aedh Wishes for the Clothes of Heaven</em>.
                            </Card.Text>
                            <Button target="_blank" variant="outline-dark" href="https://youtu.be/iHa4P4XfcHY">Check it out</Button>
                        </Card.Body>
                    </Card></div>
                <div class="slide" data-anchor="landmarks">
                    <Card class="card" text={this.props.dark === 'dark' ? 'white' : 'dark'}
                        bg={this.props.dark === 'dark' ? 'dark' : 'white'}>
                        <Card.Img variant="top" src="./img/landmarks.png" class="card-img" style={{ height: '20.5rem' }}/>
                        <Card.Body>
                            <Card.Title style={{ fontSize: '2rem' }}>Personal Landmarks</Card.Title>
                            <Card.Text style={{ fontSize: '1.5rem' }}>
                                Public art project to construct a map of Penn's campus comprised of personal landmarks, identifying and highlighting areas
                                in terms of their significance to the student body.                             </Card.Text>
                            <Button target="_blank" variant="outline-dark" href="https://youtu.be/ae3P3K-tHeE">Check it out</Button>
                        </Card.Body>
                    </Card></div>
            </div>
        );
    }
}