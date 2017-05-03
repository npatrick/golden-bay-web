import React from 'react';

const Work = () => {
	return (
		<section id="work">
      <div className="container">
        <div className="col-xs-12">
          <p className="fancy"><span>Work</span></p>
        </div>
        <div className="row">
	        <div className="desc col-xs-12 col-sm-6 col-sm-offset-3">
            <h2>Our Work, Our Pride.</h2>
            <p>Below is a collection of things which we happily provide. Each one made our client happy and made us proud.</p>
	        </div>
        </div>

        <div className="row">
	        <ul className="list-inline" id="filters">
            <li className="filter active" data-filter="all"><i className="ion-ios7-keypad"></i> Show All</li>
            <li className="filter" data-filter="category_1"><i className="ion-ios7-heart"></i> Live-In Care</li>
            <li className="filter" data-filter="category_2"><i className="ion-eye"></i> Respite Care</li>
            <li className="filter" data-filter="category_3"><i className="ion-search"></i> Transportation</li>
            <li className="filter" data-filter="category_4"><i className="ion-ios7-people"></i> Detailed Screening</li>
	        </ul>
        </div>

        <div className="row">
          <ul id="gallery">
           
            <li className="mix category_1">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <a href="assets/images/work/1.jpg" data-gal="prettyPhoto" title="Something we did for a client. They liked it very much."><img src="asset_files_to_fill_in" alt="fill_in" /></a>
              </div>
            </li>

            <li className="mix category_2">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <a href="assets/images/work/2.jpg" data-gal="prettyPhoto" title="Fill_in"><img src="asset_files_to_fill_in" alt="fill_in_for_best_practices" /></a>
              </div>
            </li>
            <li className="mix category_1">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <a href="assets/images/work/3.jpg" data-gal="prettyPhoto" title="Fill_in"><img src="asset_files_to_fill_in" alt="fill_in_for_best_practices" /></a>
              </div>
            </li>
            <li className="mix category_2">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <a href="assets/images/work/4.jpg" data-gal="prettyPhoto" title="Fill_in"><img src="asset_files_to_fill_in" alt="fill_in_for_best_practices" /></a>
              </div>
            </li>
            <li className="mix category_3">
              <div className="col-xs-12 col-sm-6 col-md-3">
                <a href="assets/images/work/5.jpg" data-gal="prettyPhoto" title="Fill_in"><img src="asset_files_to_fill_in" alt="fill_in_for_best_practices" /></a>
              </div>
            </li>
            <li className="mix category_4">
	            <div className="col-xs-12 col-sm-6 col-md-3">
                <a href="assets/images/work/6.jpg" data-gal="prettyPhoto" title="Fill_in"><img src="asset_files_to_fill_in" alt="fill_in_for_best_practices" /></a>
              </div>
            </li>
            <li className="mix category_2">
	            <div className="col-xs-12 col-sm-6 col-md-3">
              	<a href="assets/images/stripes.png" data-gal="prettyPhoto" title="Fill_in"><img src="assets/images/stripes.png" alt="fill_in_for_best_practices" /></a>
	            </div>
            </li>
          </ul>
        </div>
      </div>
	  </section>
	)
}

export default Work;
