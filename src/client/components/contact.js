import React from 'react';

const Contact = () => {
	return (
		<section id="contact">
      <div className="container" id="contact-details-wrapper">
        <div className="row">
          <div className="col-xs-12">
            <p className="fancy"><span>Contact</span></p>
          </div>
        </div>
        <div id="contact-details">
          <div className="row">
            <div className="desc col-xs-12 col-sm-6 col-sm-offset-3 intro">
              <h2>We'd <i className="ion-ios7-heart-outline"></i> to help!</h2>
              <p>We like to create things with fun, open-minded people. Feel free to say hello! And also <a>buy some Sunshine</a>.</p>
            </div>
          </div>

          <div className="row">

            <div className="option col-xs-10 col-xs-offset-1 col-sm-5 col-sm-offset-1">

              <form role="form" id="contact-form">
                <div className="form-group">
                  <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" rows="8" name="message" id="message" placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="1" name="newsletter" id="newsletter" checkedStyle="float: none;" />
                      Also sign me up for the awesome Sunshine newsletter!
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <a className="btn btn-orange btn-half-block" id="submit-contact-form">Send</a>
                </div>
              </form>

              <div className="alert alert-success alert-small" id="contact-success" style="display: none;"><i className="ion-checkmark-round"></i> <span>Message sent.</span></div>
              <div className="alert alert-danger alert-small" id="contact-error" style="display: none;"><i className="ion-close-round"></i> <span>Something is not working. Please try again.</span></div>
            </div>

          </div>
        </div>
      </div>
  	</section>
	)
};

export default Contact;
