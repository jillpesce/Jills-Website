import React from 'react';

import '../style/Involvement.css';

export default class Involvement extends React.Component {
    render() {
        return (
            <div className="section" data-anchor="Involvement">  
                <div class="slide" data-anchor="%project"> The Percentage Project </div>
                <div class="slide" data-anchor="TA"> Teaching Assistant </div>
                <div class="slide" data-anchor="Advocacy"> Director of Advocacy </div>
                <div class="slide" data-anchor="XO"> Chi Omega </div>
            </div>
        );
    }
}