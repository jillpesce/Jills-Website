import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import Intro from './components/Intro';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <ReactFullpage
          debug /* Debug logging */
          anchors={['intro', 'secondPage', 'thirdPage']}

          render={comp => (
            <ReactFullpage.Wrapper>
                <Intro></Intro>
                <Footer></Footer>
            </ReactFullpage.Wrapper>
          )}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);