import React, { Component } from 'react';
import planets from '../../services/planets';
import Loader from '../Loader/Loader.js';
import Error from '../Error/Error.js';
import './planet.scss'

class Planet extends Component {

    constructor(props){
      super(props)
      this.state = {
        error: false,
        loading: '',
        planet:{
          name: '', rotation_period: '', orbital_period: '', diameter:'',
          climate:'', gravity:'', terrain: '', population: '', films: [],
        }
      }
    }
  
    getPlanetData = () => {
      let idPlanet = Math.floor(Math.random() * 61 + 1);
      this.setState({loading: true})
      planets.getPlanet(idPlanet).then(planet => {
        this.setState({
          planet: planet.data,
          loading: false,
          error: planet.ok
        })
      }).catch(error =>{
        this.setState({
          loading: false,
          error: false
        })
      })
    };

    componentDidMount() {
        this.getPlanetData()
    }

  render() {
      
      if(this.state.loading){
        return <Loader />
      }
      if(this.state.error === false){
        return <Error />
      }


  return ( 
    <div className="plannet">
      <div className="planet-card">
        <div className="toph"><h1>PLANET</h1></div>
          <h1>{this.state.planet.name}</h1>
          <div className="details">
            <ul>
              <li><span>CLIMATE</span> <span>{this.state.planet.climate}</span></li>
              <li><span>GRAVITY</span> <span>{this.state.planet.gravity}</span></li>
              <li><span>POPULATION</span> <span>{this.state.planet.population}</span> </li>
              <li><span>TERRAIN</span> <span>{this.state.planet.terrain}</span></li>
              <li><span>DIAMETER</span> <span>{this.state.planet.diameter}</span></li>
            </ul>
          </div>
          <div className="films-featured">FEATURED IN {this.state.planet.films.length} FILMS</div>
      </div>
      <input className="start-btn" type="button" value="NEXT" onClick={this.getPlanetData} />
  </div>
      );
    }
  }
  
  export default Planet;
  