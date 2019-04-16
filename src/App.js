import React, { Component } from 'react';
import './App.scss';
import planet from './components/Planet/planet';
import start from './components/Start/start'
import {Switch, Route} from 'react-router-dom'


class App extends Component {

  render() {
    return (
        <div>
              <Switch>
                <Route path="/" exact component={start} />
                <Route path="/planet" component={planet} />
              </Switch>
        </div>
    );
  }
}

export default App;
