import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './start.scss';

let startBanner = require('./../../assets/images/start-banner.png');

class start extends Component {

    render() {
        return (
          <div className="startpage">
            <img src={startBanner} alt="start banner" />
            <div className="blink-start">Press Start</div>
            <Link className="start-btn" to="/planet">START</Link>
          </div>  
        );
    }
}

export default start;