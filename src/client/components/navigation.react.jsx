import React, { Component } from 'react';

export default class Navigation extends Component {
	render() {
    const logoStyle = {
      "width": "6%"
    };
		return (
      <nav id="top-navigation" className="navbar navbar-default navbar-transparent navbar-fixed-top" role="navigation">
        <div className="navbar-header">
          <button id="menu-mobile" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
            <span className="fa fa-bars"></span>
          </button>
          <a className="navbar-brand scroll" href="#header"><img src="assets/images/thumbnails/tn-gb-logo.png" style={logoStyle}/> Golden Bay Health, LLC</a>
        </div>

        <div className="collapse navbar-collapse" id="navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#home" className="scroll">Home</a></li>
            <li><a href="#about" className="scroll">About Us</a></li>
            <li><a href="#services" className="scroll">Services</a></li>
            <li><a href="#work" className="scroll">Work</a></li>
            <li><a href="#clients" className="scroll">Clients</a></li>
            <li><a href="#team" className="scroll">Team</a></li>
            <li><a href="#contact" className="scroll">Contact</a></li>
          </ul>
        </div>
      </nav>
		)
	}
};
