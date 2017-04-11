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
              <p>We like to make quality care accessible and a reality for everyone. Feel free to say hello! And also <a>connect with us</a>.</p>
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
                  <a className="btn btn-orange btn-half-block" id="submit-contact-form">Send</a>
                </div>
              </form>

              <div className="alert alert-success alert-small" id="contact-success"><i className="ion-checkmark-round"></i> <span>Message sent.</span></div>
              <div className="alert alert-danger alert-small" id="contact-error"><i className="ion-close-round"></i> <span>Something is not working. Please try again.</span></div>
            </div>
            <div className="option col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-1">
              <div className="media">
                <i className="pull-left ion-ios7-location-outline fa-2x text-muted"></i>
                <div className="media-body">
                  <address>
                    <strong>Golden Bay Health & Staffing, LLC</strong><br />
                    21151 S. Western Ave., Suite 104<br />
                    Torrance, CA 90501
                  </address>
                </div>
              </div>
              <div className="media">
                <i className="pull-left ion-ios7-telephone-outline fa-2x text-muted"></i>
                <div className="media-body">
                  (310) 328-4541
                </div>
              </div>
              <div className="media">
                <i className="pull-left ion-ios7-email-outline fa-2x text-muted"></i>
                <div className="media-body">
                  <a>goldenbaysocal@gmail.com</a>
                </div>
              </div>
              <div className="media">
                <div className="media-body">
                  <hr />
                  <ul className="list-inline">
                    <li><a><i className="ion-social-twitter fa-2x"></i></a></li>
                    <li><a><i className="ion-social-facebook fa-2x"></i></a></li>
                    <li><a><i className="ion-social-linkedin fa-2x"></i></a></li>
                    <li><a><i className="ion-social-googleplus fa-2x"></i></a></li>
                    <li><a><i className="ion-social-dribbble fa-2x"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
  	</section>
	)
};

export default Contact;
