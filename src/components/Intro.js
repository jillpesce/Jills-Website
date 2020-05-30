import React from 'react';
import Typist from 'react-typist';

import NavBar from './NavBar';
import '../style/Intro.css';

export default class Intro extends React.Component {
    render() {
        return (
            <div className="section" data-tooltip="Intro" data-anchor="Intro">
                <Typist cursor={{ show: false }}>
                    <p>Hey there, my name is</p>
                    <Typist.Delay ms={300} />
                    <p class="big script">Jill Pesce.</p>
                    <Typist.Delay ms={500} />
                    {/* <p id="peshy" class="small">(pronounced "peshy")</p>
                    <Typist.Delay ms={500} /> */}
                    <p>I'm a writer, student
                <Typist.Backspace count={7} delay={600} />
                        <span class="code">computer scientist</span>
                        , athlete, and explorer </p>
                    <Typist.Delay ms={500} />
                    <p>based at the </p>
                    <Typist.Delay ms={500} />
                    <p id="penn"> <span class="first-letter">U</span>NIVERSITY <em>of</em> <span class="first-letter">P</span>ENNSYLVANIA. </p>
                    <Typist.Delay ms={500} />
                    <p>Come see what I've been up to!</p>
                </Typist>
            </div>
        );
    }
}





