import React from 'react';

const Work = () => {
	return (
		<section id="work">
      <div class="container">
        <div class="col-xs-12">
          <p class="fancy"><span>Work</span></p>
        </div>
        <div class="row">
	        <div class="desc col-xs-12 col-sm-6 col-sm-offset-3">
            <h2>Our Work, Our Pride.</h2>
            <p>Below is a collection of things which we have build. Each one made our client happy and made us proud.</p>
	        </div>
        </div>

        <div class="row">
	        <ul class="list-inline" id="filters">
            <li class="filter active" data-filter="all"><i class="ion-ios7-keypad"></i> Show All</li>
            <li class="filter" data-filter="category_1"><i class="ion-ios7-heart"></i> UX</li>
            <li class="filter" data-filter="category_2"><i class="ion-eye"></i> Design</li>
            <li class="filter" data-filter="category_3"><i class="ion-search"></i> SEO</li>
            <li class="filter" data-filter="category_4"><i class="ion-ios7-people"></i> Social</li>
	        </ul>
        </div>

        <div class="row">
          <ul id="gallery">
           
            <li class="mix category_1">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <a href="images/work/1.jpg" data-gal="prettyPhoto" title="Something we did for a client. They liked it very much."><img src="images/thumbnails/1.jpg" alt="Look at that glass" /></a>
              </div>
            </li>

            <li class="mix category_2">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <a href="images/work/2.jpg" data-gal="prettyPhoto" title="That's a nice view. Won't you agree?"><img src="images/thumbnails/2.jpg" alt="View the Sunshine" /></a>
              </div>
            </li>
            <li class="mix category_1">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <a href="images/work/3.jpg" data-gal="prettyPhoto" title="That is a good laptop."><img src="images/thumbnails/3.jpg" alt="A good computer" /></a>
              </div>
            </li>
            <li class="mix category_2">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <a href="images/work/4.jpg" data-gal="prettyPhoto" title="Interface we designed."><img src="images/thumbnails/4.jpg" alt="A beautiful UI" /></a>
              </div>
            </li>
            <li class="mix category_3">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <a href="images/work/5.jpg" data-gal="prettyPhoto" title="Can you spot the bird? Image is search engine optimized!"><img src="images/thumbnails/5.jpg" alt="Spot the bird" /></a>
              </div>
            </li>
            <li class="mix category_4">
	            <div class="col-xs-12 col-sm-6 col-md-3">
                <a href="images/work/6.jpg" data-gal="prettyPhoto" title="Sound advice."><img src="images/thumbnails/6.jpg" alt="Advice" /></a>
              </div>
            </li>
            <li class="mix category_2">
	            <div class="col-xs-12 col-sm-6 col-md-3">
              	<a href="images/stripes.png" data-gal="prettyPhoto" title="I don't know who put this picture here!"><img src="images/stripes.png" alt="Who done this?" /></a>
	            </div>
            </li>
          </ul>
        </div>
      </div>
	  </section>
	)
}

export default Work;
