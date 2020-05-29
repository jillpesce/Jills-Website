import React from 'react';
import Typist from 'react-typist';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../style/App.css';
import '../style/Intro.css';

export default class Intro extends React.Component {
    render() {
        return (
            // <Container fluid>
            //     <Row>
            //         <Col>
                        <div className="section">
                            <Typist cursor={{ show: false }}>
                                <p>Hey there, my name is</p>
                                <Typist.Delay ms={300} />
                                <p class="big name">Jill Pesce.</p>
                                <Typist.Delay ms={500} />
                                <p id="peshy" class="small">(pronounced "peshy")</p>
                                <Typist.Delay ms={500} />
                                <p>I'm a writer, student
                <Typist.Backspace count={7} delay={400} />
                                    <span class="code">computer scientist</span>
                                    , athlete, and explorer. </p>
                                <Typist.Delay ms={500} />
                                <p>Come see what I've been up to!</p>
                            </Typist>
                        </div>
            //         </Col>
            //     </Row>
            // </Container>
        );
    }
}





