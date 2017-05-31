/*
    The function below is used to:
    1. enable smooth scrolling
    2. in the collapsed mode: close the main menu when an item is clicked
*/
$(".scroll").click(function(event){
	event.preventDefault();
	$("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
    if ($('.navbar-collapse').hasClass('in')){
        $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
});

/*
    The function below is used to:
    1. enable the MixItUp plugin for filtering work items
    2. refresh the scrollspy when the filters are applied
*/
$(function(){
    $('#gallery').mixitup({
        onMixEnd: function(){
            $('[data-spy="scroll"]').each(function () {
                var $spy = $('body').scrollspy('refresh');
            });
        }
    });
});

$(document).ready(function() {
    /*
        The function below is used to:
        1. start the ticker on the home page
    */
    var current = 1;
	var height = $('.ticker').height();
	var numberDivs = $('.ticker').children().length;
	var first = $('.ticker h3:nth-child(1)');
	setInterval(function() {
	    var number = current * -height;
	    first.css('margin-top', number + 'px');
	    if (current === numberDivs) {
	        first.css('margin-top', '0px');
	        current = 1;
	    } else current++;
	}, 2500);

    /*
        The function below is used to:
        1. start the carousel in the about us section
    */
    $('.carousel').carousel({
        interval: 2500
    });

    /*
        The function below is used to:
        1. start the gallery in the work section
    */
    $("#gallery a[data-gal^='prettyPhoto']").prettyPhoto({slideshow: false, allow_expand: false, allow_resize: true, social_tools: false, theme: 'light_square', deeplinking: false});

    //.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	// parallax background
    $('#header').parallax("50%", 0.1);
    $('#services').parallax("50%", 0.2);
    $('#clients').parallax("50%", 0.1);
});