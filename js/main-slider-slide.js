	'use strict';
	
	// MAIN SLIDER-FLEXSLIDER
	//==================================================================================
	$(window).load(function() {
		$('#main-slider.flexslider').flexslider(
		{
			animation : "slide",
			controlNav: false,
			directionNav: true,
			slideshowSpeed: 5000,  
			animationSpeed:1000,
			pauseOnAction: false,
			animationLoop: true, 
			pauseOnHover: true,			
		});
	});
	