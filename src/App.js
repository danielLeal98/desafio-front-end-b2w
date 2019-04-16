import React, { Component } from 'react';
import './styles/index.scss';
import './styles/stars.scss';
import './styles/buttons.scss';
import planet from './components/Planet/planet';
import start from './components/Start/start';
import {Switch, Route} from 'react-router-dom';

class App extends Component {

  render() {
      return (
        <div>
          <div className="container">
              <Switch>
                  <Route path="/" exact component={start} />
                  <Route path="/planet" component={planet} />
              </Switch>
          </div>
          <div id="background"></div>
          <div id="midground"></div>
        </div>
      );
    }
}

export default App;
