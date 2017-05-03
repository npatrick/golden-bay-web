import React from 'react';

const Home = () => {
  // need to add company logo
  const homeStyle = {
    "height": "1000px",
    "paddingTop": "3.4%",
    "marginBottom": "-30px"
  };

	return (
    <section id="home" style={homeStyle}>
			<header id="header">
	      <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1 col-sm-5" id="intro">
              <h1><i className="fa fa-sun-o logo-circled"></i> <strong>Golden Bay</strong> Health & Staffing Services</h1>
              <br />

              <div className="ticker">
                <h3><strong>Quality</strong> care.</h3>
                <h3><strong>Committed</strong> staff.</h3>
                <h3><strong>Preserving</strong> independence.</h3>
              </div>

              <p>Affordable solution for non-medical quality In-Home Care.</p>
              <br />
              <a href="#about" className="btn btn-transparent scroll"><strong>LEARN MORE</strong></a>
              <a href="#about" className="btn btn-link btn-white scroll">See Our Rates <i className="fa fa-angle-right"></i></a>
            </div>
          </div>
	      </div>
      </header>
    </section>
	)
}

export default Home;
