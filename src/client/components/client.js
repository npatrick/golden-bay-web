import React from 'react';

const Clients = () => {
	return (
		<section id="clients">
	    <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p className="fancy"><span>Clients</span></p>
          </div>
          <div className="desc col-xs-12 col-sm-6 col-sm-offset-3 intro">
            <h2>The Best in the World.</h2>
            <p>We have been fortunate to have worked with the best, and we delivered the best. Let's <a className="btn-white">pick up some Sunshine</a> now.</p>
          </div>
        </div>

        <div className="row statement">
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-1">
            <h4><i className="glyphicon glyphicon-barcode"></i> <strong>Media House</strong></h4>
            <p>"Awesome, awesome theme. easy to use and the code and accompanying files are super easy to understand and modify. Well done."</p>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-2">
            <h4><i className="glyphicon glyphicon-header"></i> <strong>History Movie</strong></h4>
            <p>"Nice design! looks / performs great on our ipad 3 - and this is not the case with most themes honestly!"</p>
          </div>
        </div>

        <div className="row statement">
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
            <h4><i className="glyphicon glyphicon-film"></i> <strong>TV Channel</strong></h4>
            <p>"Incredible project. super-clean code. It's one of the best templates I've ever purchased. 5 stars and recommended to everyone. Thank you, Creligent Themes!"</p>
          </div>
        </div>

	    </div>
    </section>
	)
};

export default Clients;
