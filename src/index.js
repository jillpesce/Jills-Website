import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import Contact from './components/Contact';
import Design from './components/Design';
import Intro from './components/Intro';
import Involvement from './components/Involvement';
import DarkMode from './components/DarkMode';
import Projects from './components/Projects';

import './style/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { dark: false };
    this.onToggle = this.onToggle.bind(this)
    // let inv = new Involvement();
    // inv.update(props);
  }



  onToggle() {
    this.state.dark = (this.state.dark ? false : true);
    console.log(this.state.dark);
  }

  render() {

    return (
      <div className="App">
        <div class="nav-bar">
          <DarkMode mode={!this.state.dark} onToggle={this.onToggle}></DarkMode>
          <ul id="menu">
            <li data-menuanchor="Intro">
              <a href="#Intro">Intro</a>
            </li>
            <li data-menuanchor="Projects">
              <a href="#Projects">Projects</a>
            </li>
            <li data-menuanchor="Involvement">
              <a href="#Involvement">Involvement</a>
            </li>
            <li data-menuanchor="Design">
              <a href="#Design">Design</a>
            </li>
            <li data-menuanchor="Contact">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>

        <ReactFullpage

          menu='#menu'
          navigation={true}
          navigationPosition='right'
          navigationTooltips={[]}
          showActiveTooltip={false}

          slidesNavigation={true}
          slidesNavPosition='bottom'

          paddingTop='4em'

          render={comp => (
            <ReactFullpage.Wrapper>
              <Intro></Intro>
              <Projects dark={this.state.dark}></Projects>
              <Involvement dark={this.state.dark}></Involvement>
              <Design></Design>
              <Contact></Contact>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);