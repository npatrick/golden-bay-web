import React from 'react';

const Team = () => {
	const bgImage = [
		{backgroundImage: "url('assets/images/team-1.jpg')"},
		{backgroundImage: "url('assets/images/team-4.jpg')"},
		{backgroundImage: "url('assets/images/team-2.jpg')"},
		{backgroundImage: "url('assets/images/team-3.jpg')"}
	]

	return (
		<section id="team">
	    <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <p className="fancy"><span>Team</span></p>
          </div>
          <div className="desc col-xs-12 col-sm-6 col-sm-offset-3 intro">
            <h2>The Fantastic Four.</h2>
            <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. And these 4 people have been fighting that tyranny.</p>
          </div>
        </div>

        <div className="row">

          <div className="person col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0" style={bgImage[0]}>
            <div className="info">
              <h4>James T. Kirk</h4>
              <p>James is the founder of our small agency. He is the force behind all the creativity that happens here.</p>
              <ul className="list-inline">
                <li><a><i className="ion-social-twitter"></i></a></li>
                <li><a><i className="ion-social-facebook"></i></a></li>
                <li><a><i className="ion-social-linkedin"></i></a></li>
                <li><a><i className="ion-social-googleplus"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="person col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0" style={bgImage[1]}>
            <div className="info">
              <h4>Cat Woman</h4>
              <p>Cat is the woman responsible for most of the graphic design. She is also a famous superheroine by night.</p>
              <ul className="list-inline">
                <li><a><i className="ion-social-facebook"></i></a></li>
                <li><a><i className="ion-social-linkedin"></i></a></li>
                <li><a><i className="ion-social-googleplus"></i></a></li>
                <li><a><i className="ion-social-dribbble"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="person col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0" style={bgImage[2]}>
            <div className="info">
              <h4>Dick Grayson</h4>
              <p>Dick is the best developer out there. His skills are unmatched and the stuff he does is simply amazing.</p>
              <ul className="list-inline">
                <li><a><i className="ion-social-facebook"></i></a></li>
                <li><a><i className="ion-social-linkedin"></i></a></li>
                <li><a><i className="ion-social-googleplus"></i></a></li>
                <li><a><i className="ion-social-github"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="person col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0" style={bgImage[3]}>
            <div className="info">
              <h4>Masterchef World</h4>
              <p>Masterchef is the inhouse gourmet chef. His skills are unmatched and what he does is simply amazing.</p>
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
              <p>We're always looking for an excellent caregiver. Give us a call at (310) 328-4541</p>
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
