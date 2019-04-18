import React, { Component } from 'react';
import './styles/app.scss';
import './styles/stars.scss';
import Planet from './components/Planet/Planet';
import Start from './components/Start/Start';
import loader from './components/Loader/Loader';
import {Switch, Route} from 'react-router-dom';

class App extends Component {

  render() {
      return (
        <div>
          <div className="container">
              <Switch>
                  <Route path="/" exact component={Start} />
                  <Route path="/planet" component={Planet} />
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
