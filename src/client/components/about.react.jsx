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
            <h3>Assessment</h3>
            <p>We provide complimentary assessment by qualified staff and family conferences to ensure the most appropriate and cost effective plan. Interview process is conducted to attain in-depth assessment of the client's lifestyle, medical condition, and living arrangements where we offer customized options to fit your needs.</p>
          </div>
          <div className="article col-xs-12 col-sm-4">
            <i className="ion-compass fa-2x orange"></i>
            <h3>Philosophy</h3>
            <p>We believe that everyone deserves a highest level quality of life that is achievable. To preserve independence, dignity for aging loved ones who wish to live at home, while providing peace of mind to their familes through the dedicated services of competent and caring professional caregivers.</p>
          </div>
          <div className="article col-xs-12 col-sm-4">
            <i className="ion-pinpoint fa-2x orange"></i>
            <h3>Motivation</h3>
            <p>Our primary goal is to help you and your loved ones feel more comfortable, enjoy the best quality of life, and maintain a familiar and comfortable lifestyle whether you choose a facility or your own home. By providing a compassionate, caring, and dependable Care Provider(s), we assure our valuable clients the peace of mind they deserve.</p>
          </div>
        </div>
        <div id="facts" className="carousel slide hidden-xs">

          <div className="carousel-inner">
            <div className="active item"><h3><strong>Founded</strong> in 2010</h3></div>
            <div className="item"><h3><strong>Experienced</strong> In Home Health Aides</h3></div>
            <div className="item"><h3><strong>Certified</strong> Nursing Assistants</h3></div>
            <div className="item"><h3><strong>Healthcare</strong> Professionals</h3></div>
            <div className="item"><h3><strong>Care Providers</strong> and <strong>Relief</strong> Available <strong>24 Hours a Day</strong></h3></div>
          </div>

        </div>
      </div>
    </section>
	);
};

export default About;
