import React from 'react';

const Contact = () => {
  const sending = function() {
    var error = false;

    var name = $('#name').val();
    if(name == "" || name == " ") {
        $('#name').css('background-color', '#f2dede');
        $('#name').parent().addClass('has-error');
        error = true;
    } else {
        $('#name').css('background-color', '#fff');
        $('#name').parent().removeClass('has-error');
    }

    var checkEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $('#email').val();
    if (email == "" || email == " ") {
        $('#email').css('background-color', '#f2dede');
        $('#email').parent().addClass('has-error');
        error = true;
    } else if (!checkEmail.test(email)) {
        $('#email').css('background-color', '#f2dede');
        $('#email').parent().addClass('has-error');
        error = true;
    } else {
        $('#email').css('background-color', '#fff');
        $('#email').parent().removeClass('has-error');
    }

    var message = $('#message').val();
    if(message == "" || message == " ") {
        $('#message').css('background-color', '#f2dede');
        $('#message').parent().addClass('has-error');
        error = true;
    } else {
        $('#message').css('background-color', '#fff');
        $('#message').parent().removeClass('has-error');
    }

    var data_string = $('#contact-form').serialize();

    console.log('THIS GOT CLICKED BY THE SEND BTN');

    if (error == false) {
        $.ajax({
            type: "POST",
            url: "/send_message",
            data: data_string,
            timeout: 6000,
            error: function(request,error) {
                if (error == "timeout") {
                    $('#contact-error').slideDown('slow');
                    $('#contact-error span').text('Timed out when contacting server.');
                    setTimeout(function() {
                        $('#contact-error').slideUp('slow');
                    }, 10000);
                }
                else {
                    $('#contact-error').slideDown('slow');
                    $('#contact-error span').text('Something is not working. Please try again.');
                    setTimeout(function() {
                        $('#contact-error').slideUp('slow');
                    }, 10000);
                }
            },
            success: function() {
                $('#contact-success').slideDown('slow');
                $('#contact-success span').text('Message sent.');
                setTimeout(function() {
                    $('#contact-success').slideUp('slow');
                }, 10000);
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            }
        });
    } else {
        $('#contact-error').hide();
        $('#contact-success').hide();
    }
  };

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
              <p>We like to make quality care accessible and a reality for everyone. Feel free to say hello! And also connect with us.</p>
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
                  <a className="btn btn-orange btn-half-block" id="submit-contact-form" onClick={sending}>Send</a>
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
