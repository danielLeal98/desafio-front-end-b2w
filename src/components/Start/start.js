import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class start extends Component {

    render() {
        return (
          <div>
            <Link to="/planet">START</Link>
          </div>  
        );
    }
}

export default start;