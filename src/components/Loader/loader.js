import React, { Component } from 'react';
import './loader.scss'

let imageLoader = require('./../../assets/images/loader.gif');


class Loader extends Component {

    render() {
        return (
            <div className="loader-div">
                <img src={imageLoader} alt="start banner" />
                <h4 className="blink-loader">Loading..</h4>
            </div>
        );
    }
}

export default Loader;