import React, { Component } from 'react';
import './styles/app.scss';
import './styles/stars.scss';
import planet from './components/Planet/planet';
import start from './components/Start/start';
import loader from './components/Loader/Loader';
import {Switch, Route} from 'react-router-dom';

class App extends Component {

  render() {
      return (
        <div>
          <div className="container">
              <Switch>
                  <Route path="/" exact component={start} />
                  <Route path="/planet" component={planet} />
                  <Route path="/loader" component={loader} />
              </Switch>
          </div>
          <div id="background"></div>
          <div id="midground"></div>
        </div>
      );
    }
}

export default App;
