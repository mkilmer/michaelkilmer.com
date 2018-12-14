$(document).ready(function() {

    // Mobile menu

    $('a.mobile').click( function toggleMobileMenu() {
        $('.main-navigation').toggleClass('open');
    });

    // Animated scrolling
    $('nav a').bind('click', function(event) {
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');

        $('.main-navigation').removeClass('open');
        event.preventDefault();
    });

    // Waypoint Setup
    $('#portfolio-waypoint').waypoint({offset:'50%'});

    $('html').delegate('#portfolio-section', 'waypoint.reached', function(event, direction) {
        if (direction === "down"){
            event.preventDefault();
            $(".main-navigation a").removeClass('active');
            $('#portfolio').toggleClass('active');
        }
    });

    $('html').delegate('#portfolio-waypoint', 'waypoint.reached', function(event, direction) {
        if (direction !== "down"){
            event.preventDefault();
            $(".main-navigation a").removeClass('active');
            $('#portfolio').toggleClass('active');
        }
    });

    $('#about-section').waypoint({offset:'50%'});
    $('#about-waypoint').waypoint({offset:'50%'});

    $('html').delegate('#about-section', 'waypoint.reached', function(event, direction) {
        if (direction === "down"){
            event.preventDefault();
            $(".main-navigation a").removeClass('active');
            $('#about').toggleClass('active');
        }
    });

    $('html').delegate('#about-waypoint', 'waypoint.reached', function(event, direction) {
        if (direction !== "down"){
            event.preventDefault();
            $(".main-navigation a").removeClass('active');
            $('#about').toggleClass('active');
        }
    });

    $('#music-section').waypoint({offset:'50%'});
    $('#music-waypoint').waypoint({offset:'50%'});

    $('html').delegate('#music-section', 'waypoint.reached', function(event, direction) {
        if (direction === "down"){
            event.preventDefault();
            $(".main-navigation a").removeClass('active');
            $('#music').toggleClass('active');
        }
    });

    $('html').delegate('#music-waypoint', 'waypoint.reached', function(event, direction) {
        if (direction !== "down"){
            event.preventDefault();
            $(".main-navigation a").removeClass('active');
            $('#music').toggleClass('active');
        }
    });
    $('#contact-section').waypoint({offset:'50%'});

    $('html').delegate('#contact-section', 'waypoint.reached', function(event, direction) {
        if (direction === "down"){
            event.preventDefault();
            $(".main-navigation a").removeClass('active');
            $('#contact').toggleClass('active');
        }
    });

});
