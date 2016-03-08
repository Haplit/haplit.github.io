$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 40
                }, 800);
                return false;
            }
        }
    });
});
/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
$(function() {
    var team = [{
        'first_name': 'Philip',
        'last_name': 'Bale',
        'title': '',
        'position': 'Computer Science',
        'status': 'undergraduate',
        'institution': 'Georgia Tech'
    }, {
        'first_name': 'Chandler',
        'last_name': 'Matz',
        'title': '',
        'position': 'Computer Engineering',
        'status': 'undergraduate',
        'institution': 'Georgia Tech'
    }, {
        'first_name': 'Will',
        'last_name': 'Flournoy',
        'title': '',
        'position': 'Environmental Engineering',
        'status': 'undergraduate',
        'institution': 'Georgia Tech'
    }, {
        'first_name': 'Ryan',
        'last_name': 'Quinn',
        'title': '',
        'position': 'Aerospace Engineering',
        'status': 'doctorate',
        'institution': 'Georgia Tech'
    }, {
        'first_name': 'Alex',
        'last_name': 'Ferrara',
        'title': '',
        'position': 'Computer Engineering',
        'status': 'undergraduate',
        'institution': 'Georgia Tech'
    }, {
        'first_name': 'Logan',
        'last_name': 'Lott',
        'title': '',
        'position': 'Mechanical Engineering',
        'status': 'undergraduate',
        'institution': 'Georgia Tech'
    }, {
        'first_name': 'Zak',
        'last_name': 'Campuazano',
        'title': '',
        'position': 'Mechanical Engineering',
        'status': 'undergraduate',
        'institution': 'Georgia Tech'
    }];
});