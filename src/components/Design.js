import React from 'react';

import '../style/Design.css';

export default class Design extends React.Component {
    render() {
        return (
            <div className="section" data-tooltip="Design" data-anchor="Design">
                <div class="slide" data-anchor="%project"> The Percentage Project </div>
                <div class="slide" data-anchor="TA"> Teaching Assistant </div>
                <div class="slide" data-anchor="Advocacy"> Director of Advocacy </div>
                <div class="slide" data-anchor="XO"> Chi Omega </div>
            </div>
        );
    }
}