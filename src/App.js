import React, { Component } from 'react';
import './App.scss';
import planets from './services/planets'
import planet from './components/Planets/planet';
import {Switch, Route} from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <div>
        <switch>
          <Route path="/planet" component={planet} />
        </switch>
      </div>
    );
  }
}

export default App;
