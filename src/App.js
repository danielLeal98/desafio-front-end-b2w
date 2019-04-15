import React, { Component } from 'react';
import './App.scss';
import planets from './services/planets'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      planet:{
        name: " ",
        rotation_period: '',
        orbital_period: '',
        diameter:'',
        climate:'',
        gravity:'',
        terrain: '',
        surface_water: '',
        population: '',
        created: '',
        edited: '',
      }
    }
  }

  componentWillMount() {
    let idPlanet = Math.floor(Math.random() * (62 + 1));

    planets.getPlanet(idPlanet).then(planet => {
      console.log(planet.data)
      this.setState({planet: planet.data})
    })
}

  render() {

    return (
      <div className="App">
        <p>{this.state.planet.name}</p>
        <p>{this.state.planet.climate}</p>
        <p>{this.state.planet.gravity}</p>
        <p>{this.state.planet.population}</p>
        <p>{this.state.planet.diameter}</p>
        <p>{this.state.planet.terrain}</p>

      </div>
    );
  }
}

export default App;
