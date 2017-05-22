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
            <h2>People love Golden Bay Health.</h2>
            <p>Here's some of what our clients have to say about the services and care that we provide</p>
          </div>
        </div>

        <div className="row statement">
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-1">
            <h4><i className="glyphicon glyphicon-barcode"></i> <strong>Fill_in_Client_Name</strong></h4>
            <p>"what the client has to say about the company"</p>
          </div>
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-2">
            <h4><i className="glyphicon glyphicon-barcode"></i> <strong>Fill_in_Client_Name</strong></h4>
            <p>"what the client has to say about the company"</p>
          </div>
        </div>

        <div className="row statement">
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
            <h4><i className="glyphicon glyphicon-barcode"></i> <strong>Fill_in_Client_Name</strong></h4>
            <p>"what the client has to say about the company"</p>
          </div>
        </div>

	    </div>
    </section>
	)
};

export default Clients;
