import React from 'react';

const Services = () => {
  // services need a bg img of about 1400x921 or 1110x549
	return (
		<section id="services">
      <div className="container">
	      <div className="row">
	          <div className="col-xs-12">
	            <p className="fancy"><span>Services</span></p>
	          </div>
	          <div className="desc col-xs-12 col-sm-6 col-sm-offset-3">
	            <h2>At Your Service.</h2>
	            <p><strong>Golden Bay Health & Staffing Services, LLC</strong>, assists in the transition from a medical setting to a home-like setting. Golden Bay offers quality and affordable Independent Living Facilities, Retirement Homes, Residential Care Facilities for the Elderly, Dementia/Alzheimer's Facility and In-Home Care Services.</p>
	            <p>We can assist you in finding the best facility suited to your needs and level of care in the Greater Los Angeles area, including the San Fernando Valley and Orange County. Included is a multidisciplinary services that assesses the needs of the client based on the findings.</p>
	          </div>
	      </div>
	      <div className="row">
          <div className="article col-xs-12 col-sm-3">
            <i className="ion-ios7-heart fa-2x orange"></i>
            <h3>Hourly & 24hr Live-In Care</h3>
            <ul className="list-unstyled">
              <li>General Care and Supervision</li>
              <li>Bathing & Showering Assisteance</li>
              <li>Medication Supervision</li>
              <li>Incontenance Care</li>
            </ul>
          </div>
          <div className="article col-xs-12 col-sm-3">
            <i className="ion-eye fa-2x orange"></i>
            <h3>Meal Prep & Feeding</h3>
            <ul className="list-unstyled">
              <li>Range of Motion Exercises</li>
              <li>Therapy Sessions</li>
              <li>Activities of Daily Living</li>
              <li>Respite Care</li>
            </ul>
          </div>
          <div className="article col-xs-12 col-sm-3">
            <i className="ion-search fa-2x orange"></i>
            <h3>General Light Housekeeping</h3>
            <ul className="list-unstyled">
              <li>Grocery Shopping</li>
              <li>Transportation</li>
              <li>Memory Care</li>
              <li>Placement Assistance</li>
            </ul>
          </div>
          <div className="article col-xs-12 col-sm-3">
            <i className="ion-ios7-people fa-2x orange"></i>
            <h3>Detailed Screening</h3>
            <ul className="list-unstyled">
              <li>Credential Checks</li>
              <li>DOJ Clearance</li>
              <li>All employees are hired, managed, and paid by Golden Bay</li>
            </ul>
          </div>
          <div className="desc col-xs-12 col-sm-6 col-sm-offset-3">
            <i className="ion-ios7-people fa-2x orange"></i>
            <h2>In Home Care Rates</h2>
            <ul className="list-unstyled">
              <li><h3>Hourly (Live-Out)</h3></li>
              <li><h3>$24.00 and Up Per Hour</h3></li>
            </ul>
            <ul className="list-unstyled">
              <li><h3>Residing (Live-In)</h3></li>
              <li><h3>$235.00  and Up Per Day</h3></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
	)
}

export default Services;
