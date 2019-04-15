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

  getPlanetData = () => {
    let idPlanet = Math.floor(Math.random() * 61 + 1);
    planets.getPlanet(idPlanet).then(planet => {
      this.setState({planet: planet.data})
    })
  };


  componentWillMount() {
    let idPlanet = Math.floor(Math.random() * 61 + 1);
    planets.getPlanet(idPlanet).then(planet => {
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
        <div>
        <input type="button" value="ATUALIZAR" onClick={this.getPlanetData}/>
        </div>
      </div>
    );
  }
}

export default App;
