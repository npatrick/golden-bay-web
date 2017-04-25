import React from 'react';

const About = () => {
	return (
		<section id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p className="fancy"><span>About Us</span></p>
          </div>
          <div className="article col-xs-12 col-sm-4">
            <i className="ion-clock fa-2x orange"></i>
            <h3>History</h3>
            <p>We started in 2007 wanting to build something new for online content. Our founders, James T. Kirk and Caption Nemo, met in 7th grade but didn't start working on Sunshine until a few years later at UC Davis (right before dropping out).</p>
          </div>
          <div className="article col-xs-12 col-sm-4">
            <i className="ion-compass fa-2x orange"></i>
            <h3>Philosophy</h3>
            <p>We believe that how you see something is just as important as what you see. You don't need to trade in your identity for the ability to view things. The freedom to see how you want is what lets you be truly authentic.</p>
          </div>
          <div className="article col-xs-12 col-sm-4">
            <i className="ion-pinpoint fa-2x orange"></i>
            <h3>Motivation</h3>
            <p>Our primary goal is to help you and your loved ones feel more comfortable, enjoy the best quality of life, and maintain a familiar and comfortable lifestyle whether you choose a facility or your own home. By providing a compassionate, caring, and dependable Care Provider(s), we assure our valuable clients the peace of mind they deserve.</p>
          </div>
        </div>
        <div id="facts" className="carousel slide hidden-xs">

          <div className="carousel-inner">
            <div className="active item"><h3><strong>Founded</strong> in 2007</h3></div>
            <div className="item"><h3><strong>1000 websites</strong> designed</h3></div>
            <div className="item"><h3>Received the <strong>Alpha award</strong> in 2008</h3></div>
            <div className="item"><h3>Won the <strong>Best website</strong> award in 2010</h3></div>
            <div className="item"><h3><strong>Pure Magic UI kit</strong> released in 2012</h3></div>
          </div>

        </div>
      </div>
    </section>
	);
};

export default About;
