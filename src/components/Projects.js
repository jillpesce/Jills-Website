import React from 'react';

import '../style/Projects.css';

export default class Projects extends React.Component {


    render() {
        return (
            <div className="section" data-tooltip="Projects" data-anchor="Projects">
                <div class="slide" data-anchor="Rona"> The Rona 
                
      <p id="element"></p></div>
                <div class="slide" data-anchor="Tutor"> Tutoring App </div>
                <div class="slide" data-anchor="Stencil"> Stencil </div>
                <div class="slide" data-anchor="Kettle"> IO(Tea) Kettle </div>
            </div>
        );
    }
}