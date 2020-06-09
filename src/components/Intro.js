import React from 'react';
import Typist from 'react-typist';

import '../style/Intro.css';

setTimeout(
    function () {
        document.getElementById("arrow").style.visibility = "visible";
    }
        .bind(this),
    16500
);

export default class Intro extends React.Component {

    render() {
        return (
            <div className="section" data-anchor="Intro">
                <Typist cursor={{ show: false }}>
                <p>Hey there, my name is</p>
                <Typist.Delay ms={300} />
                <div class="flex-container">
                    <p class="big script">Jill Pesce.</p>
                    <div class="circular--landscape">
                        <img class="avatar" src='./img/portugal.png' alt="Avatar"></img>
                    </div>
                    <div class="circular--landscape2">
                        <img class="avatar" src='./img/jump.jpg' alt="Avatar"></img>
                    </div>
                </div>
                <Typist.Delay ms={1000} />
                {/* <p id="peshy" class="small">(pronounced "peshy")</p>
                    <Typist.Delay ms={500} /> */}
                <p>I'm a writer, student
                <Typist.Backspace count={7} delay={600} />
                    <span class="code">computer scientist</span>
                    , and explorer </p>
                <Typist.Delay ms={500} />
                <p>based at the </p>
                <Typist.Delay ms={500} />
                <p id="penn"> <span class="first-letter">U</span>NIVERSITY <em>of</em> <span class="first-letter">P</span>ENNSYLVANIA. </p>
                <Typist.Delay ms={500} />
                <p>Come see what I've been up to!</p>
                <br></br>
                </Typist>
                <a href="#Projects"><img id="arrow" src='../../img/arrows.png'></img></a>

            </div>
        );
    }
}





