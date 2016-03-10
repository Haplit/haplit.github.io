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
        'status': 'major',
        'institution': 'Georgia Tech',
        'image_path': ''
    }, {
        'first_name': 'Chandler',
        'last_name': 'Matz',
        'title': '',
        'position': 'Computer Engineering',
        'status': 'major',
        'institution': 'Georgia Tech',
        'image_path': ''
    }, {
        'first_name': 'Will',
        'last_name': 'Flournoy',
        'title': '',
        'position': 'Environmental Engineering',
        'status': 'major',
        'institution': 'Georgia Tech',
        'image_path': ''
    }, {
        'first_name': 'Ryan',
        'last_name': 'Quinn',
        'title': '',
        'position': 'Aerospace Engineering',
        'status': 'intern',
        'institution': 'SpaceX',
        'image_path': ''
    }, {
        'first_name': 'Alex',
        'last_name': 'Ferrara',
        'title': '',
        'position': 'Computer Engineering',
        'status': 'major',
        'institution': 'Georgia Tech',
        'image_path': ''
    }, {
        'first_name': 'Logan',
        'last_name': 'Lott',
        'title': '',
        'position': 'Mechanical Engineering',
        'status': 'major',
        'institution': 'Georgia Tech',
        'image_path': ''
    }, {
        'first_name': 'Zak',
        'last_name': 'Campuzano',
        'title': '',
        'position': 'Mechanical Engineering',
        'status': 'major',
        'institution': 'Georgia Tech',
        'image_path': ''
    }];

    for(var i = 0; i < team.length; i++)
    {
        var member = team[i];
        // var block = '<li class="' + inversion + '"> ' +
        // '<div class="timeline-badge info"><img src="img/experience/' + position['icon'] + '" class="img-circle position-icon" /></div> ' +
        //     '<div class="timeline-panel"> ' +
        //       '<div class="timeline-heading"> ' +
        //         '<h4 class="timeline-title">' + position['title'] + '</h4> ' +
        //         '<p style="float: right"><small class="text-muted">' + position['location'] + '</small></p>' + 
        //         '<p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> ' + position['start'] + ' to ' + position['end'] + '</small></p> ' +
        //       '</div> ' +
        //       '<div class="timeline-body"> ' +
        //         '<p>' + position['description'] + '</p> ' +
        //       '</div> ' +
        //     '</div> ' +
        //   '</li>';


        var block = '<div class="col-sm-4 col-md-3 small-padding">' + 
                        '<div class="thumbnail contact-color">' +
                            '<div class="right-side">' +
                                '<img class="img-circle img-rounded" src="img/team/' + member['first_name'].toLowerCase() + '.jpg" />' +
                            '</div>'+
                            '<div class="caption">' +
                                '<h3 class="mb15 mt5">' +
                                    member['first_name'] + ' ' + member['last_name'][0] + '.' +
                                '</h3>' +
                                '<p class="mb15">'+
                                    member['first_name'] + ' is currently a ' + member['position'].toLowerCase() + ' ' + member['status'] + ' at ' + member['institution'] + '.' +
                                '</p>' +
                            '</div>' + 
                        '</div>' + 
                    '</div>';


        $(".team").append(block);
    }
});