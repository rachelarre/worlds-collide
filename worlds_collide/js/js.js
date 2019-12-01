jQuery(document).ready(function ($) {

	//-----------------------------------HOME PAGE ----------------------------------------------------//
						// These functions run on page load //
	
	//variables for home page
	var 	
	
	left= $('#left-orb');
	right= $('#right-orb');

	intro_fade = $('#intro-fade');
	enter_fade = $('#enter-fade');
	

	//animate the left orb
	left.animate({
		left: '+=200px',
		opacity: 1 }, {
			
			duration: 1000,
			easing: 'easeOutBack'
		});
		
	// animate the right orb
	right.animate({
		right: '+=200px',
		opacity: 1 }, {
			
			duration: 1000,
			easing: 'easeOutBack'
		});
		
	//animate and fade the tagline and enter button
	intro_fade.delay(1000).animate({
		opacity:1}, {
			
			duration: 2000,
			easing: 'swing'
		});
		
	enter_fade.delay(1500).animate({
		opacity:1}, {
			
			duration: 2000,
			easing: 'swing'
		});
		
//-----------------------------------ABOUT PAGE ----------------------------------------------------//
						// These functions run on page load //

	//variables for about page
	var 	
	orb_one = $('#orb-one');
	orb_two = $('#orb-two');
	orb_three = $('#orb-three');
	orb_four= $('#orb-four');
	box_fade = $('#box-fade');

	orb_one.animate({
		left: '+=400px',
		opacity: 1 }, {
			
			duration: 2000,
			easing: 'easeOutExpo'
		});
		
	orb_two.animate({
		left: '+=350px',
		opacity: 1 }, {
			
			duration: 2000,
			easing: 'easeOutExpo'
		});
		
		
	orb_three.animate({
		right: '+=140px',
		opacity: 1 }, {
			
			duration: 2000,
			easing: 'easeOutExpo'
		});
		
	orb_four.animate({
		right: '+=700px',
		opacity: 1 }, {
			
			duration: 2000,
			easing: 'easeOutExpo'
		});
		
	box_fade.delay(1800).animate({
		opacity:0.95}, {
			
			duration: 2000,
			easing: 'swing'
		});

//-----------------------------------ISOLATION ABOUT PAGE ----------------------------------------------------//
						// These functions run on page load //

	//variables for about page
	var
	long_fade = $('#prolonged-fade');
	fade_out = $('#inset-circle');
	
//	$( "div.fader").hover( function () {
//		$( this).fadeIn(2000);
//	});

	long_fade.delay(4000).animate({
		opacity:0.95}, {
			
			duration: 2000,
			easing: 'swing'
		});

	fade_out.delay(3500).animate({
		opacity:0}, {
			
			duration: 2000,
			easing: 'swing'
		});
		
//----------------------------------LABYRINTH INTRO	PAGE ----------------------------------------------------//
						// These functions run on page load //

	var 
	
	one = $('#one');
	two = $('#two');
	three = $('#three');
	four = $('#four');
			
	// animate the right 
	one.animate({
		right: '+=100%',
		opacity: 1 }, {
			
			duration: 2000,
			easing: 'easeOutQuint'
		});
		
	//animate the left
	two.animate({
		left: '+=100%',
		opacity: 1 }, {
			
			duration: 2000,
			easing: 'easeOutQuint'
		});
		
	// animate the top 
	three.animate({
		top: '+=100%',
		opacity: 1 }, {
			
			duration: 1500,
			easing: 'easeOutQuint'
		});
		
	// animate the top 
	four.animate({
		top: '+=-100%',
		opacity: 1 }, {
			
			duration: 1500,
			easing: 'easeOutQuint'
		});

});