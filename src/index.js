import React from 'react';
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

  render() {

    return (
      <div className="App">
        <div class="nav-bar">
          <ul id="menu">
            <li data-menuanchor="Intro">
              <a href="#Intro">Intro</a>
            </li>
            <li data-menuanchor="Projects">
              <a href="#Projects">Projects</a>
            </li>
            <li data-menuanchor="Involvements">
              <a href="#Involvement">Involvement</a>
            </li>
            <li data-menuanchor="Design">
              <a href="#Design">Design</a>
            </li>
            <li data-menuanchor="Contact">
              <a href="#Contact">Contact</a>
            </li>
          </ul>

          <DarkMode></DarkMode>
        </div>

        <ReactFullpage

          menu='#menu'
          navigation={true}
          navigationPosition='right'
          showActiveTooltip={false}

          slidesNavigation={true}
          slidesNavPosition='bottom'

          render={comp => (
            <ReactFullpage.Wrapper>
              <Intro></Intro>
              <Projects></Projects>
              <Involvement></Involvement>
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