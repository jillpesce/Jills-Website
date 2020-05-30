import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import Contact from './components/Contact';
import Design from './components/Design';
import Intro from './components/Intro';
import Involvement from './components/Involvement';
import NavBar from './components/NavBar';
import Projects from './components/Projects';

import './style/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';


class App extends React.Component {

  render() {

    return (
      <div className="App">
        <ReactFullpage

          menu='#menu'
          navigation={true}
          navigationPosition='right'
          showActiveTooltip={false}

          slidesNavigation={true}
          slidesNavPosition='bottom'

          render={comp => (
            <ReactFullpage.Wrapper>
              <NavBar></NavBar>
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