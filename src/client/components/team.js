import React from 'react';

const Team = () => {
  // Staff images about 350x400
	const bgImage = [
		{backgroundImage: "url('asset_images_of_staff')"},
		{backgroundImage: "url('asset_images_of_staff')"},
		{backgroundImage: "url('asset_images_of_staff')"},
		{backgroundImage: "url('asset_images_of_staff')"}
	]

	return (
		<section id="team">
	    <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p className="fancy"><span>Team</span></p>
          </div>
          <div className="desc col-xs-12 col-sm-6 col-sm-offset-3 intro">
            <h2>Meat the Team.</h2>
            <p>Here at Golden Bay, we give our best to build a fulfilling and comfortable living environment. Whether that could be in their own homes or at an in-home senior care.</p>
          </div>
        </div>

        <div className="row">

          <div className="person col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0" style={bgImage[0]}>
            <div className="info">
              <h4>Staff_Name</h4>
              <p>Description of said staff</p>
              <ul className="list-inline">
                <li><a><i className="ion-social-facebook"></i></a></li>
                <li><a><i className="ion-social-linkedin"></i></a></li>
                <li><a><i className="ion-social-googleplus"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="person col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0" style={bgImage[1]}>
            <div className="info">
              <h4>Staff_Name</h4>
              <p>Description of said staff</p>
              <ul className="list-inline">
                <li><a><i className="ion-social-facebook"></i></a></li>
                <li><a><i className="ion-social-linkedin"></i></a></li>
                <li><a><i className="ion-social-googleplus"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="person col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0" style={bgImage[2]}>
            <div className="info">
              <h4>Staff_Name</h4>
              <p>Description of said staff.</p>
              <ul className="list-inline">
                <li><a><i className="ion-social-facebook"></i></a></li>
                <li><a><i className="ion-social-linkedin"></i></a></li>
                <li><a><i className="ion-social-googleplus"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="person col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0" style={bgImage[3]}>
            <div className="info">
              <h4>Staff_Name</h4>
              <p>Description of said staff</p>
              <ul className="list-inline">
                <li><a><i className="ion-social-facebook"></i></a></li>
                <li><a><i className="ion-social-linkedin"></i></a></li>
                <li><a><i className="ion-social-googleplus"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="person col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0">
            <div className="info">
              <h4>We are hiring!</h4>
              <p>We're always looking for a passionate and excellent caregiver. So, give us a call at (310) 328-4541</p>
              <ul className="list-inline">
                <li><i className="ion-ios7-plus-empty text-muted" style={{fontSize: '200px'}}></i></li>
              </ul>
            </div>
          </div>
        </div>

	    </div>
    </section>
	)
};

export default Team;
