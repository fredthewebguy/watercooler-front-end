// smooth scrolling
$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1400);
            return false;
        }
    }
});  


// scroll back to top
$("#back-top").hide();
	
$(function () {
	// if user scrolls past specific point
	$(window).scroll(function () {
		if ($(this).scrollTop() > 130) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
});

// scroll body to 0px on click
$('#back-top a').click(function () {
	$('body,html').animate({
		scrollTop: 0
		}, 400);
		return false;
	});
});

// toggle search
$('.main-menu ul li i.icon-search').click(function(){
	$(this).toggleClass('active');
	$('.search-container').slideToggle(150);
    return false;
});

// toggle mobile menu
$('.icon-menu').click(function(){
	$('nav.mobile-menu').toggleClass('menu-open');
    return false;
});

// close mobile menu
$('.close-menu').click(function(){
    $('nav.mobile-menu').toggleClass('menu-open');
    return false;
});

//toggle user nav
$('#toggleUserNav').on('click', function(){
    $("#userMenu").toggleClass('active-nav');
    return false;
});

// tabbed content 
$('ul.tabs li').click(function(){
	var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
});

// if user is on page for 3 seconds, show alert
$('.site-alert').delay(5000).queue(function(){
	$(this).toggleClass('show-alert');
	$(this).dequeue();
});

$('#hideIt').on('click', function(){
    $(".site-alert").toggleClass('show-alert');
    return false;
});

$('#hideFyi').on('click', function(){
    $('#fyi').slideToggle(150);
    return false;
});